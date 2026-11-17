import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const LOTUS_DIR = path.resolve(import.meta.dirname, '..');
const INDEX_HTML_URL = pathToFileURL(path.join(LOTUS_DIR, 'index.html')).href;
const SCREENSHOTS_DIR = '/Users/simonlo/.gemini/antigravity/brain/0ec3e95b-a4db-4760-adff-9fc71b0c317c/screenshots';

function shotPath(name) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  return path.join(SCREENSHOTS_DIR, name);
}

async function clickNodeOnCanvas(page, nodeId) {
  const pos = await page.evaluate((id) => window.__lotusGame.getScreenPosOfNode(id), nodeId);
  expect(pos, `Screen position missing for node ${nodeId}`).toBeTruthy();
  await page.mouse.click(pos.xPx, pos.yPx);
}

async function dismissOpenDialogue(page) {
  for (let i = 0; i < 10; i += 1) {
    const isOpen = await page.evaluate(() => window.__lotusGame?.getState?.().isDialogueOpen === true);
    if (!isOpen) break;
    const nextBtn = page.getByTestId('dialogue-next');
    if (await nextBtn.isVisible()) {
      await nextBtn.click();
      await page.waitForTimeout(120);
    } else {
      break;
    }
  }
  await expect(page.getByTestId('dialogue-card')).toBeHidden();
}

async function auditLayout(page, { checkMinTapSize = true, label = 'view' } = {}) {
  const issues = await page.evaluate(({ checkMinTapSizeInner }) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const found = [];

    if (document.documentElement.scrollWidth > vw + 1) {
      found.push(`Horizontal overflow: scrollWidth=${document.documentElement.scrollWidth} > vw=${vw}`);
    }

    const isVisible = (el) => {
      if (!el || el.hidden) return false;
      const st = getComputedStyle(el);
      if (st.display === 'none' || st.visibility === 'hidden' || Number(st.opacity) === 0) return false;
      return !el.closest('[hidden], .lotus-modal-backdrop:not(.is-open)');
    };

    const rectOf = (el) => el.getBoundingClientRect();

    const controls = Array.from(
      document.querySelectorAll('.lotus-hud-root button, .lotus-hud-root [data-testid="chapter-pill"]')
    );
    for (const btn of controls) {
      if (!isVisible(btn)) continue;
      const r = rectOf(btn);
      const id = btn.dataset.testid || btn.dataset.role || btn.className;
      if (r.width <= 0 || r.height <= 0) {
        found.push(`Zero-rect visible control: ${id}`);
        continue;
      }
      const inScrollBody = Boolean(btn.closest('.lotus-modal-scroll, .lotus-mural-body, .lotus-chapter-grid'));
      if (!inScrollBody) {
        if (r.left < -1 || r.top < -1 || r.right > vw + 1 || r.bottom > vh + 1) {
          found.push(
            `Clipped control ${id}: [${r.left.toFixed(1)}, ${r.top.toFixed(1)}, ${r.right.toFixed(1)}, ${r.bottom.toFixed(1)}] outside ${vw}x${vh}`
          );
        }
      }
      if (checkMinTapSizeInner && (r.width < 43.5 || r.height < 43.5)) {
        found.push(`Tap target < 44x44 on ${id}: ${r.width.toFixed(1)}x${r.height.toFixed(1)}`);
      }
    }

    const checkPairNoOverlap = (aEl, bEl, nameA, nameB) => {
      if (!isVisible(aEl) || !isVisible(bEl)) return;
      const a = rectOf(aEl);
      const b = rectOf(bEl);
      if (a.width <= 0 || a.height <= 0 || b.width <= 0 || b.height <= 0) return;
      const ix = Math.min(a.right, b.right) - Math.max(a.left, b.left);
      const iy = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
      if (ix > 2 && iy > 2) {
        found.push(`Overlap between ${nameA} and ${nameB}: ${ix.toFixed(1)}x${iy.toFixed(1)}px`);
      }
    };

    checkPairNoOverlap(
      document.querySelector('[data-testid="title-plaque"]'),
      document.querySelector('.lotus-title-actions'),
      'title-plaque',
      'title-actions'
    );
    checkPairNoOverlap(
      document.querySelector('[data-testid="chapter-pill"]'),
      document.querySelector('.lotus-toolbar'),
      'chapter-pill',
      'toolbar'
    );
    checkPairNoOverlap(
      document.querySelector('.lotus-hud-top'),
      document.querySelector('.lotus-hud-bottom'),
      'hud-top',
      'hud-bottom'
    );
    checkPairNoOverlap(
      document.querySelector('.lotus-center-stack'),
      document.querySelector('[data-testid="alignment-hud"]'),
      'center-stack',
      'alignment-hud'
    );

    const tbButtons = Array.from(document.querySelectorAll('.lotus-toolbar > button')).filter(isVisible);
    for (let i = 0; i < tbButtons.length; i += 1) {
      for (let j = i + 1; j < tbButtons.length; j += 1) {
        checkPairNoOverlap(
          tbButtons[i],
          tbButtons[j],
          tbButtons[i].dataset.testid || `tb-${i}`,
          tbButtons[j].dataset.testid || `tb-${j}`
        );
      }
    }

    return found;
  }, { checkMinTapSizeInner: checkMinTapSize });

  expect(issues, `Layout issues on ${label}: ${issues.join(' | ')}`).toEqual([]);
}

async function assertPortrait3by4(page) {
  const info = await page.evaluate(() => {
    const img = document.querySelector('[data-role="dlg-portrait"]');
    if (!img) return { exists: false };
    const r = img.getBoundingClientRect();
    return {
      exists: true,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      src: img.getAttribute('src') || '',
      width: r.width,
      height: r.height
    };
  });
  expect(info.exists).toBe(true);
  expect(info.complete).toBe(true);
  expect(info.naturalWidth).toBe(300);
  expect(info.naturalHeight).toBe(400);
  expect(info.src.startsWith('data:image/webp;base64,')).toBe(true);
  expect(info.height).toBeGreaterThan(0);
  expect(Math.abs(info.width / info.height - 0.75)).toBeLessThan(0.05);
}

test('Desktop 1280x720 offline 12-chapter 29-stage v2.4 E2E & 15 screenshots (01-09, 11-16)', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  const externalRequests = [];
  const consoleErrors = [];
  const pageErrors = [];

  page.on('request', (req) => {
    const url = req.url();
    if (/^https?:/i.test(url)) externalRequests.push(url);
  });
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => {
    pageErrors.push(String(err));
  });

  await page.goto(INDEX_HTML_URL, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => Boolean(window.__lotusGame && window.__lotusGame.getState));
  await page.waitForTimeout(350);

  // 1. Title Diorama (01-title-diorama.png)
  const titleState = await page.evaluate(() => window.__lotusGame.getState());
  expect(titleState.mode).toBe('title');
  await expect(page.getByTestId('title-overlay')).toBeVisible();
  await expect(page.getByTestId('title-plaque')).toContainText('蓮島迴廊');
  await expect(page.getByTestId('btn-title-start')).toBeVisible();
  const canvasBox = await page.locator('canvas').boundingBox();
  expect(canvasBox?.width).toBeGreaterThanOrEqual(1200);
  expect(canvasBox?.height).toBeGreaterThanOrEqual(700);
  await auditLayout(page, { checkMinTapSize: true, label: '01-title-diorama' });
  await page.screenshot({ path: shotPath('01-title-diorama.png') });

  // 2. Start -> Ch1 Stage 1 (02-ch1-s1-azulejo-hud.png) + Portal transition into ch1_s2
  await page.getByTestId('btn-title-start').click();
  await page.waitForFunction(
    () => window.__lotusGame.getState().mode === 'gameplay' && window.__lotusGame.getState().stageId === 'ch1_s1'
  );
  await dismissOpenDialogue(page);
  await expect(page.locator('.lotus-hud-top')).toBeVisible();
  await expect(page.locator('.lotus-hud-bottom')).toBeVisible();
  await expect(page.locator('[data-role="ch-num"]')).toContainText('CH 01');
  await expect(page.locator('[data-role="ch-num"]')).toContainText('1/2');
  await auditLayout(page, { checkMinTapSize: true, label: '02-ch1-s1-azulejo-hud' });
  await page.screenshot({ path: shotPath('02-ch1-s1-azulejo-hud.png') });

  // Assert clear rotation labels (-90° / +90°) before rotating camera +90deg -> 135deg
  await expect(page.getByTestId('btn-rotate-left')).toContainText('-90°');
  await expect(page.getByTestId('btn-rotate-right')).toContainText('+90°');
  // Rotate camera +90deg -> 135deg via HUD button, verify c1s1_seam aligned, click portal goal node to transition -> ch1_s2
  await page.getByTestId('btn-rotate-right').click();
  await page.waitForFunction(() => {
    const s = window.__lotusGame.getState();
    return Math.round(s.azimuthDeg) === 135 && !s.isRotating && s.activeSeamIds.includes('c1s1_seam');
  });
  await clickNodeOnCanvas(page, 'c1s1_goal');
  await page.waitForFunction(() => window.__lotusGame.getState().stageId === 'ch1_s2', null, { timeout: 15000 });
  const ch1s2State = await page.evaluate(() => window.__lotusGame.getState());
  expect(ch1s2State.stageIndex).toBe(1);
  expect(ch1s2State.completedStageIds).toContain('ch1_s1');

  // 3. Navigate via Star Atlas modal to Ch9 Stage 1 & trigger Mother 盧母 dialogue (03-dialogue-mother-portrait.png)
  await page.getByTestId('btn-chapter-select').click();
  await expect(page.getByTestId('chapter-select-modal')).toHaveClass(/is-open/);
  await page.getByTestId('stage-item-ch9_s1').click();
  await page.waitForFunction(() => window.__lotusGame.getState().stageId === 'ch9_s1');
  await dismissOpenDialogue(page);

  await clickNodeOnCanvas(page, 'c9s1_r_pad');
  await page.waitForFunction(() => window.__lotusGame.getState().isDialogueOpen === true, null, { timeout: 10000 });
  // Page 0 is old_man, turn to Page 1 -> mother (盧母)
  await page.getByTestId('dialogue-next').click();
  await expect(page.locator('[data-role="dlg-speaker"]')).toHaveText('盧母');
  await expect(page.locator('[data-role="dlg-era"]')).toContainText('MÃE LOU');
  const motherText = await page.locator('[data-role="dlg-text"]').textContent();
  expect(motherText).not.toContain('林老師');
  await assertPortrait3by4(page);
  await expect(page.getByTestId('dialogue-card')).toBeVisible();
  const dlgCardBox = await page.locator('.lotus-dialogue-card').boundingBox();
  expect(dlgCardBox, '.lotus-dialogue-card boundingBox missing').toBeTruthy();
  expect(dlgCardBox.width).toBeGreaterThanOrEqual(820);
  expect(dlgCardBox.width).toBeLessThanOrEqual(940);
  const portraitFrameBox = await page.locator('.lotus-portrait-frame').boundingBox();
  expect(portraitFrameBox, '.lotus-portrait-frame boundingBox missing').toBeTruthy();
  expect(portraitFrameBox.width).toBeGreaterThanOrEqual(145);
  await auditLayout(page, { checkMinTapSize: true, label: '03-dialogue-mother-portrait' });
  await page.screenshot({ path: shotPath('03-dialogue-mother-portrait.png') });
  await dismissOpenDialogue(page);

  // 4. Ch2 Stage 2 Turret Rotator click + alignment + solve (04-ch2-s2-turret-aligned.png)
  await page.getByTestId('btn-chapter-select').click();
  await page.getByTestId('stage-item-ch2_s2').click();
  await page.waitForFunction(() => window.__lotusGame.getState().stageId === 'ch2_s2');
  await dismissOpenDialogue(page);
  await expect(page.getByTestId('btn-rotate-turret')).toBeVisible();

  const crankPos = await page.evaluate(() => window.__lotusGame.getScreenPosOfRotator('turret_c2'));
  expect(crankPos).toBeTruthy();
  await page.mouse.click(crankPos.xPx, crankPos.yPx);
  await page.waitForFunction(() => window.__lotusGame.getRotatorStates().turret_c2 === 2);

  // Rotate two more times via toolbar turret button (2 -> 3 -> 0)
  await page.getByTestId('btn-rotate-turret').click();
  await page.getByTestId('btn-rotate-turret').click();
  await page.waitForFunction(() => window.__lotusGame.getRotatorStates().turret_c2 === 0);

  // Rotate camera 45 -> 135 -> 225 via HUD button
  await page.getByTestId('btn-rotate-right').click();
  await page.waitForFunction(() => !window.__lotusGame.getState().isRotating);
  await page.getByTestId('btn-rotate-right').click();
  await page.waitForFunction(() => {
    const s = window.__lotusGame.getState();
    return Math.round(s.azimuthDeg) === 225 && !s.isRotating && s.activeSeamIds.includes('c2s2_seam_mazu');
  });
  await page.waitForTimeout(250);
  await expect(page.locator('[data-role="align-deg"]')).toContainText('225°');
  await auditLayout(page, { checkMinTapSize: true, label: '04-ch2-s2-turret-aligned' });
  await page.screenshot({ path: shotPath('04-ch2-s2-turret-aligned.png') });

  // Solve ch2_s2 by clicking goal altar
  await clickNodeOnCanvas(page, 'c2s2_goal');
  await page.waitForFunction(() => window.__lotusGame.getState().goalReached === true, null, { timeout: 15000 });
  await dismissOpenDialogue(page);

  // 5 & 6. Ch5 White-Haired Elder dialogue -> Page 0 visible -> Page 1 mist_vanish (05 & 06 screenshots)
  await page.evaluate(() => window.__lotusGame.loadStage('ch5_s2', 0, { skipIntro: true }));
  await page.waitForFunction(() => window.__lotusGame.getState().stageId === 'ch5_s2');

  const propBeforeClick = await page.evaluate(() => window.__lotusGame.getActivePropStates());
  expect(propBeforeClick.clickableNpcCount).toBe(1);
  expect(propBeforeClick.activeNpcs.map((n) => n.id)).toContain('old_man_ch5');

  const elderPos = await page.evaluate(() => window.__lotusGame.getScreenPosOfLore('old_man_ch5'));
  expect(elderPos).toBeTruthy();
  await page.mouse.click(elderPos.xPx, elderPos.yPx);
  await page.waitForFunction(() => window.__lotusGame.getState().dialogueState?.loreId === 'old_man_ch5');
  await expect(page.locator('[data-role="dlg-speaker"]')).toHaveText('白髮老人');
  await expect(page.locator('[data-role="dlg-page"]')).toHaveText('1 / 2');

  const propAtPage0 = await page.evaluate(() => window.__lotusGame.getActivePropStates());
  expect(propAtPage0.clickableNpcCount).toBe(1);
  expect(propAtPage0.vanishedNpcs.length).toBe(0);
  await auditLayout(page, { checkMinTapSize: true, label: '05-ch5-oldman-before-vanish' });
  await page.screenshot({ path: shotPath('05-ch5-oldman-before-vanish.png') });

  // Turn to Page 1 -> mist_vanish must remove Elder from npcClickables immediately & finish full 3D vanish
  await page.getByTestId('dialogue-next').click();
  await expect(page.locator('[data-role="dlg-page"]')).toHaveText('2 / 2');
  await expect(page.locator('[data-role="dlg-speaker"]')).toHaveText('盧曉晴');

  await page.waitForFunction(
    () => window.__lotusGame.getActivePropStates()?.vanishedNpcs?.[0]?.disposed === true,
    null,
    { timeout: 10000 }
  );
  await page.waitForTimeout(100);

  const propAtPage1 = await page.evaluate(() => window.__lotusGame.getActivePropStates());
  expect(propAtPage1.clickableNpcCount).toBe(0);
  expect(propAtPage1.activeNpcs.length).toBe(0);
  expect(propAtPage1.vanishedNpcs[0]?.id).toBe('old_man_ch5');
  expect(propAtPage1.vanishedNpcs[0]?.status).toBe('vanished');
  expect(propAtPage1.vanishedNpcs[0]?.disposed).toBe(true);

  await page.screenshot({ path: shotPath('06-ch5-oldman-vanished.png') });
  await dismissOpenDialogue(page);
  // Confirm vanished Elder cannot be clicked again
  await page.mouse.click(elderPos.xPx, elderPos.yPx);
  await page.waitForTimeout(150);
  expect(await page.evaluate(() => window.__lotusGame.getState().isDialogueOpen)).toBe(false);

  // 7. Ch10 Liang 9 Woodcarving Descendant dialogue + 3:4 portrait (07-ch10-liang9-dragon-dialogue.png)
  await page.evaluate(() => window.__lotusGame.loadStage('ch10_s1', 0, { skipIntro: true }));
  await page.waitForFunction(() => window.__lotusGame.getState().stageId === 'ch10_s1');

  const liang9Pos = await page.evaluate(() => window.__lotusGame.getScreenPosOfLore('liang9_ch10'));
  expect(liang9Pos).toBeTruthy();
  await page.mouse.click(liang9Pos.xPx, liang9Pos.yPx);
  await page.waitForFunction(() => window.__lotusGame.getState().dialogueState?.loreId === 'liang9_ch10');
  await expect(page.locator('[data-role="dlg-speaker"]')).toHaveText('梁氏後人・梁九');
  await expect(page.locator('[data-role="dlg-era"]')).toContainText('LIANG IX');
  await expect(page.locator('[data-role="dlg-text"]')).toContainText('醉龍龍頭木雕');
  await assertPortrait3by4(page);
  await auditLayout(page, { checkMinTapSize: true, label: '07-ch10-liang9-dragon-dialogue' });
  await page.screenshot({ path: shotPath('07-ch10-liang9-dragon-dialogue.png') });
  await dismissOpenDialogue(page);

  // 8 & 9. Ch12 Ending Choice Altar -> Ending C seekTo(26) -> Skip -> Epilogue Mural & A/B Switch
  await page.evaluate(() => window.__lotusGame.loadStage('ch12_s3', 0, { skipIntro: true }));
  await page.waitForFunction(() => window.__lotusGame.getState().stageId === 'ch12_s3');
  await page.evaluate(() => window.__lotusGame.solveCurrentStage({ autoAdvancePortal: false }));
  await page.waitForFunction(() => window.__lotusGame.getState().goalReached === true, null, { timeout: 15000 });
  // Advancing/closing Ch12 outro automatically opens Ending Choice Altar
  await dismissOpenDialogue(page);
  await expect(page.getByTestId('ending-choice-modal')).toHaveClass(/is-open/);
  await auditLayout(page, { checkMinTapSize: true, label: 'ending-choice-modal' });

  await page.getByTestId('ending-choice-C').click();
  await page.waitForFunction(() => window.__lotusGame.getState().mode === 'cinematic');
  const seekState = await page.evaluate(() => window.__lotusGame.seekEndingTo(26));
  expect(seekState.active).toBe(true);
  expect(seekState.endingKey).toBe('C');
  expect(seekState.ringSpeed).toBeGreaterThan(5);
  expect(seekState.phase).toBe('made_in_heaven_acceleration');
  await expect(page.getByTestId('cinematic-overlay')).toBeVisible();
  await expect(page.getByTestId('hint-toast')).not.toHaveClass(/is-visible/);
  await expect(page.locator('[data-role="cin-sub-zh"]')).not.toHaveText('');
  await expect(page.locator('[data-role="cin-sub-en"]')).not.toHaveText('');
  await page.waitForTimeout(150);
  await auditLayout(page, { checkMinTapSize: true, label: '08-ending-c-made-in-heaven' });
  await page.screenshot({ path: shotPath('08-ending-c-made-in-heaven.png') });

  // Skip to Epilogue Mural
  await page.getByTestId('btn-skip-ending').click();
  await expect(page.getByTestId('epilogue-mural-modal')).toHaveClass(/is-open/);
  await expect(page.getByTestId('hint-toast')).not.toHaveClass(/is-visible/);
  const muralCastCount = await page.locator('[data-testid="epilogue-cast-arches"] img').count();
  expect(muralCastCount).toBe(4);
  const muralImagesOk = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('[data-testid="epilogue-cast-arches"] img'));
    return (
      imgs.length === 4 &&
      imgs.every((img) => img.complete && img.naturalWidth === 300 && img.naturalHeight === 400) &&
      imgs.some((img) => img.alt === '盧母') &&
      imgs.every((img) => img.alt && !/^[a-z0-9_]+$/.test(img.alt))
    );
  });
  expect(muralImagesOk).toBe(true);
  await auditLayout(page, { checkMinTapSize: true, label: '09-ending-c-epilogue-mural' });
  await page.screenshot({ path: shotPath('09-ending-c-epilogue-mural.png') });

  // Switch cleanly to Ending A & B without replaying Ch12
  await page.getByTestId('btn-switch-ending-A').click();
  await expect(page.locator('[data-role="ending-reader"]')).toContainText('結局 A');
  expect(await page.locator('[data-testid="epilogue-cast-arches"] img').count()).toBe(5);
  await page.getByTestId('btn-switch-ending-B').click();
  await expect(page.locator('[data-role="ending-reader"]')).toContainText('三代同體');

  // 11. Ch3 Stage 1 Intact 1622 St. Paul's Cathedral (11-ch3-s1-st-pauls-full.png)
  await page.evaluate(() => window.__lotusGame.loadStage('ch3_s1', 0, { skipIntro: true }));
  await page.waitForFunction(() => window.__lotusGame.getState().stageId === 'ch3_s1');
  await page.waitForTimeout(220);
  await auditLayout(page, { checkMinTapSize: true, label: '11-ch3-s1-st-pauls-full' });
  await page.screenshot({ path: shotPath('11-ch3-s1-st-pauls-full.png') });

  // 12. Ch6 Stage 1 2026 Ruins of St. Paul's (12-ch6-s1-st-pauls-ruin.png)
  await page.evaluate(() => window.__lotusGame.loadStage('ch6_s1', 0, { skipIntro: true }));
  await page.waitForFunction(() => window.__lotusGame.getState().stageId === 'ch6_s1');
  await page.waitForTimeout(220);
  await auditLayout(page, { checkMinTapSize: true, label: '12-ch6-s1-st-pauls-ruin' });
  await page.screenshot({ path: shotPath('12-ch6-s1-st-pauls-ruin.png') });

  // 13. Ch4 Stage 1 full walkthrough + backtracking over deactivated seal plate (13-ch4-s1-bamboo-aligned.png)
  await page.evaluate(() => window.__lotusGame.loadStage('ch4_s1', 0, { skipIntro: true }));
  await page.waitForFunction(() => window.__lotusGame.getState().stageId === 'ch4_s1');
  await dismissOpenDialogue(page);
  await page.getByTestId('btn-rotate-right').click();
  await page.waitForFunction(() => {
    const s = window.__lotusGame.getState();
    return Math.round(s.azimuthDeg) === 135 && !s.isRotating && s.activeSeamIds.includes('c4s1_seam_pin');
  });
  await clickNodeOnCanvas(page, 'c4s1_pin_b');
  await page.waitForFunction(() => {
    const s = window.__lotusGame.getState();
    const cur = s.actors.find((a) => a.id === s.activeActorId);
    return cur?.nodeId === 'c4s1_pin_b' && !cur?.isMoving && !s.activePlates.includes('p_c4_safety_pin');
  }, null, { timeout: 15000 });
  await dismissOpenDialogue(page);
  // Backtrack over seal plate node c4s1_start — must stay unsealed and allow completion
  await clickNodeOnCanvas(page, 'c4s1_start');
  await page.waitForFunction(() => {
    const s = window.__lotusGame.getState();
    const cur = s.actors.find((a) => a.id === s.activeActorId);
    return cur?.nodeId === 'c4s1_start' && !cur?.isMoving && !s.activePlates.includes('p_c4_safety_pin');
  }, null, { timeout: 15000 });
  await clickNodeOnCanvas(page, 'c4s1_stair');
  await page.waitForFunction(() => {
    const s = window.__lotusGame.getState();
    const cur = s.actors.find((a) => a.id === s.activeActorId);
    return cur?.nodeId === 'c4s1_stair' && !cur?.isMoving;
  }, null, { timeout: 15000 });
  await page.getByTestId('btn-rotate-right').click();
  await page.waitForFunction(() => {
    const s = window.__lotusGame.getState();
    return Math.round(s.azimuthDeg) === 225 && !s.isRotating && s.activeSeamIds.includes('c4s1_seam_bamboo');
  });
  await page.waitForTimeout(220);
  await auditLayout(page, { checkMinTapSize: true, label: '13-ch4-s1-bamboo-aligned' });
  await page.screenshot({ path: shotPath('13-ch4-s1-bamboo-aligned.png') });
  await clickNodeOnCanvas(page, 'c4s1_goal');
  await page.waitForFunction(() => window.__lotusGame.getState().stageId === 'ch4_s2', null, { timeout: 15000 });

  // 14. Ch1 Stage 2 315deg alignment (14-ch1-s2-aligned-315.png)
  await page.evaluate(() => window.__lotusGame.loadStage('ch1_s2', 0, { skipIntro: true }));
  await page.waitForFunction(() => window.__lotusGame.getState().stageId === 'ch1_s2');
  await dismissOpenDialogue(page);
  await page.getByTestId('btn-rotate-left').click();
  await page.waitForFunction(() => {
    const s = window.__lotusGame.getState();
    return Math.round(s.azimuthDeg) === 315 && !s.isRotating && s.activeSeamIds.includes('c1s2_seam_plate');
  });
  await page.waitForTimeout(220);
  await auditLayout(page, { checkMinTapSize: true, label: '14-ch1-s2-aligned-315' });
  await page.screenshot({ path: shotPath('14-ch1-s2-aligned-315.png') });

  // 15. Ch2 Stage 1 315deg reef alignment (15-ch2-s1-reef-315.png)
  await page.evaluate(() => window.__lotusGame.loadStage('ch2_s1', 0, { skipIntro: true }));
  await page.waitForFunction(() => window.__lotusGame.getState().stageId === 'ch2_s1');
  await dismissOpenDialogue(page);
  await page.getByTestId('btn-rotate-left').click();
  await page.waitForFunction(() => {
    const s = window.__lotusGame.getState();
    return Math.round(s.azimuthDeg) === 315 && !s.isRotating && s.activeSeamIds.includes('c2s1_seam_reef');
  });
  await page.waitForTimeout(220);
  await auditLayout(page, { checkMinTapSize: true, label: '15-ch2-s1-reef-315' });
  await page.screenshot({ path: shotPath('15-ch2-s1-reef-315.png') });

  // 16. Ch3 Stage 1 315deg St. Paul's choir alignment unoccluded (16-ch3-s1-stpauls-clear.png)
  await page.evaluate(() => window.__lotusGame.loadStage('ch3_s1', 0, { skipIntro: true }));
  await page.waitForFunction(() => window.__lotusGame.getState().stageId === 'ch3_s1');
  await dismissOpenDialogue(page);
  await page.getByTestId('btn-rotate-left').click();
  await page.waitForFunction(() => {
    const s = window.__lotusGame.getState();
    return Math.round(s.azimuthDeg) === 315 && !s.isRotating && s.activeSeamIds.includes('c3s1_seam_choir');
  });
  await page.waitForTimeout(220);
  await auditLayout(page, { checkMinTapSize: true, label: '16-ch3-s1-stpauls-clear' });
  await page.screenshot({ path: shotPath('16-ch3-s1-stpauls-clear.png') });

  expect(externalRequests, `Unexpected HTTP requests: ${externalRequests.join(', ')}`).toEqual([]);
  expect(consoleErrors, `Console errors: ${consoleErrors.join(' | ')}`).toEqual([]);
  expect(pageErrors, `Page errors: ${pageErrors.join(' | ')}`).toEqual([]);

  await context.close();
});

test('v2.5 Day/Night Background Toggle, Enlarged Portrait Captions & 4-Language Live Switch (17-20)', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  const externalRequests = [];
  const consoleErrors = [];
  const pageErrors = [];

  page.on('request', (req) => {
    const url = req.url();
    if (/^https?:/i.test(url)) externalRequests.push(url);
  });
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => {
    pageErrors.push(String(err));
  });

  await page.goto(INDEX_HTML_URL, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => Boolean(window.__lotusGame && window.__lotusGame.getState));
  await page.waitForTimeout(300);

  // 1. Default Boot: day + zh-Hant
  const initState = await page.evaluate(() => ({
    state: window.__lotusGame.getState(),
    bgAttr: document.documentElement.dataset.bgMode,
    htmlLang: document.documentElement.lang
  }));
  expect(initState.state.bgMode).toBe('day');
  expect(initState.state.lang).toBe('zh-Hant');
  expect(initState.bgAttr).toBe('day');
  expect(initState.htmlLang).toBe('zh-Hant');

  // 2. Toggle Title to Night Mode (17-title-diorama-night.png)
  await page.getByTestId('btn-title-bg-mode').click();
  await page.waitForFunction(() => document.documentElement.dataset.bgMode === 'night');
  await page.waitForTimeout(260);
  const nightTitleInfo = await page.evaluate(() => ({
    stateBg: window.__lotusGame.getState().bgMode,
    lsBg: window.localStorage.getItem('lotus_bg_mode_v1'),
    pressed: document.querySelector('[data-testid="btn-title-bg-mode"]')?.getAttribute('aria-pressed')
  }));
  expect(nightTitleInfo.stateBg).toBe('night');
  expect(nightTitleInfo.lsBg).toBe('night');
  expect(nightTitleInfo.pressed).toBe('true');
  await auditLayout(page, { checkMinTapSize: true, label: '17-title-diorama-night' });
  await page.screenshot({ path: shotPath('17-title-diorama-night.png') });

  // 3. Switch Language to English on Title
  await page.getByTestId('btn-title-lang').click();
  await expect(page.getByTestId('language-select-modal')).toHaveClass(/is-open/);
  await page.getByTestId('lang-option-en').click();
  await page.waitForFunction(() => document.documentElement.lang === 'en');
  await expect(page.getByTestId('btn-title-start')).toContainText('Enter Corridor');
  expect(await page.evaluate(() => window.localStorage.getItem('lotus_lang_v1'))).toBe('en');

  // 4. Load Ch1 Stage 1 with Intro Dialogue in Night + English + Enlarged Portrait & Caption (18-ch1-s1-night-en-dialogue.png)
  await page.evaluate(() => window.__lotusGame.loadStage('ch1_s1', 0, { skipIntro: false }));
  await page.waitForFunction(
    () =>
      window.__lotusGame.getState().mode === 'gameplay' &&
      window.__lotusGame.getState().isDialogueOpen === true
  );
  await page.waitForTimeout(260);
  await assertPortrait3by4(page);
  const enDlgMetrics = await page.evaluate(() => {
    const img = document.querySelector('[data-role="dlg-portrait"]');
    const cap = document.querySelector('[data-testid="dlg-portrait-caption"]');
    const capName = document.querySelector('[data-role="dlg-cap-name"]');
    const capSub = document.querySelector('[data-role="dlg-cap-sub"]');
    const chLabel = document.querySelector('[data-role="ch-label"]');
    const dlgText = document.querySelector('[data-role="dlg-text"]');
    return {
      portraitWidth: img?.getBoundingClientRect().width || 0,
      capVisible: Boolean(cap && cap.getBoundingClientRect().height > 0),
      capNameText: capName?.textContent || '',
      capSubText: capSub?.textContent || '',
      capNameFontPx: parseFloat(getComputedStyle(capName).fontSize),
      capSubFontPx: parseFloat(getComputedStyle(capSub).fontSize),
      chLabelText: chLabel?.textContent || '',
      dlgTextContent: dlgText?.textContent || ''
    };
  });
  expect(enDlgMetrics.portraitWidth).toBeGreaterThanOrEqual(176);
  expect(enDlgMetrics.capVisible).toBe(true);
  expect(enDlgMetrics.capNameFontPx).toBeGreaterThanOrEqual(15);
  expect(enDlgMetrics.capSubFontPx).toBeGreaterThanOrEqual(12.5);
  expect(enDlgMetrics.chLabelText).toContain('Red-Brick');
  expect(enDlgMetrics.dlgTextContent).toMatch(/[A-Za-z]{4,}/);
  await auditLayout(page, { checkMinTapSize: true, label: '18-ch1-s1-night-en-dialogue' });
  await page.screenshot({ path: shotPath('18-ch1-s1-night-en-dialogue.png') });

  // 5. Dismiss dialogue, align c1s1_seam at 135deg, then verify Night <-> Day preserves alignment state cleanly
  await dismissOpenDialogue(page);
  await page.getByTestId('btn-rotate-right').click();
  await page.waitForFunction(() => {
    const s = window.__lotusGame.getState();
    return Math.round(s.azimuthDeg) === 135 && !s.isRotating && s.activeSeamIds.includes('c1s1_seam');
  });
  await page.getByTestId('btn-bg-mode').click();
  await page.waitForFunction(() => document.documentElement.dataset.bgMode === 'day');
  const dayPreserved = await page.evaluate(() => window.__lotusGame.getState());
  expect(Math.round(dayPreserved.azimuthDeg)).toBe(135);
  expect(dayPreserved.activeSeamIds).toContain('c1s1_seam');
  await page.getByTestId('btn-bg-mode').click();
  await page.waitForFunction(() => document.documentElement.dataset.bgMode === 'night');

  // 6. Live switch HUD to Japanese -> Ch10 Lore Liang IX (19-ch10-night-ja-dialogue.png)
  await page.getByTestId('btn-lang').click();
  await page.getByTestId('lang-option-ja').click();
  await page.waitForFunction(() => document.documentElement.lang === 'ja');
  await page.evaluate(() => {
    window.__lotusGame.loadStage('ch10_s1', 0, { skipIntro: true });
    window.__lotusGame.triggerLore('liang9_ch10');
  });
  await page.waitForFunction(() => window.__lotusGame.getState().isDialogueOpen === true);
  await page.waitForTimeout(260);
  await assertPortrait3by4(page);
  const jaInfo = await page.evaluate(() => ({
    capName: document.querySelector('[data-role="dlg-cap-name"]')?.textContent || '',
    dlgText: document.querySelector('[data-role="dlg-text"]')?.textContent || ''
  }));
  expect(jaInfo.capName).toContain('梁九');
  expect(jaInfo.dlgText).toMatch(/[\u3040-\u309f\u30a0-\u30ff]/);
  await auditLayout(page, { checkMinTapSize: true, label: '19-ch10-night-ja-dialogue' });
  await page.screenshot({ path: shotPath('19-ch10-night-ja-dialogue.png') });

  // 7. Close dialogue, switch to Simplified Chinese, inspect Epilogue Mural C (20-epilogue-mural-zh-hans-night.png)
  await dismissOpenDialogue(page);
  await page.getByTestId('btn-lang').click();
  await page.getByTestId('lang-option-zh-Hans').click();
  await page.waitForFunction(() => document.documentElement.lang === 'zh-Hans');
  await page.evaluate(() => window.__lotusGame.showEndingMural('C'));
  await expect(page.getByTestId('epilogue-mural-modal')).toHaveClass(/is-open/);
  await page.waitForTimeout(240);
  const muralChecks = await page.evaluate(() => {
    const captions = [...document.querySelectorAll('.az-mural-caption')];
    const strongSizes = captions.map((cap) => {
      const st = cap.querySelector('strong');
      return st ? parseFloat(getComputedStyle(st).fontSize) : 0;
    });
    const imgs = [...document.querySelectorAll('[data-testid="epilogue-cast-arches"] img')];
    return {
      captionCount: captions.length,
      imgCount: imgs.length,
      strongSizes,
      muralTitle: document.querySelector('[data-role="mural-modal-title"]')?.textContent || ''
    };
  });
  expect(muralChecks.captionCount).toBe(4);
  expect(muralChecks.imgCount).toBe(4);
  for (const sz of muralChecks.strongSizes) {
    expect(sz).toBeGreaterThanOrEqual(14.5);
  }
  expect(muralChecks.muralTitle).toContain('终幕壁画');
  await auditLayout(page, { checkMinTapSize: true, label: '20-epilogue-mural-zh-hans-night' });
  await page.screenshot({ path: shotPath('20-epilogue-mural-zh-hans-night.png') });

  // 8. Reload persistence check
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => Boolean(window.__lotusGame && window.__lotusGame.getState));
  const persisted = await page.evaluate(() => ({
    state: window.__lotusGame.getState(),
    bgAttr: document.documentElement.dataset.bgMode,
    htmlLang: document.documentElement.lang
  }));
  expect(persisted.state.bgMode).toBe('night');
  expect(persisted.state.lang).toBe('zh-Hans');
  expect(persisted.bgAttr).toBe('night');
  expect(persisted.htmlLang).toBe('zh-Hans');

  expect(externalRequests, `Unexpected HTTP requests: ${externalRequests.join(', ')}`).toEqual([]);
  expect(consoleErrors, `Console errors: ${consoleErrors.join(' | ')}`).toEqual([]);
  expect(pageErrors, `Page errors: ${pageErrors.join(' | ')}`).toEqual([]);
  await context.close();

  // 9. Mobile 390x844 Night + Japanese layout & tap target audit
  const mobContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true
  });
  await mobContext.addInitScript(() => {
    window.localStorage.setItem('lotus_bg_mode_v1', 'night');
    window.localStorage.setItem('lotus_lang_v1', 'ja');
  });
  const mobPage = await mobContext.newPage();
  const mobConsoleErrors = [];
  const mobPageErrors = [];
  mobPage.on('console', (msg) => {
    if (msg.type() === 'error') mobConsoleErrors.push(msg.text());
  });
  mobPage.on('pageerror', (err) => mobPageErrors.push(String(err)));

  await mobPage.goto(INDEX_HTML_URL, { waitUntil: 'domcontentloaded' });
  await mobPage.waitForFunction(() => Boolean(window.__lotusGame && window.__lotusGame.getState));
  await mobPage.waitForTimeout(260);
  await auditLayout(mobPage, { checkMinTapSize: true, label: 'mobile-v25-title-night-ja' });

  await mobPage.getByTestId('btn-title-start').tap();
  await mobPage.waitForFunction(
    () => window.__lotusGame.getState().mode === 'gameplay' && window.__lotusGame.getState().isDialogueOpen
  );
  await mobPage.waitForTimeout(220);
  const mobPortraitW = await mobPage.evaluate(
    () => document.querySelector('[data-role="dlg-portrait"]')?.getBoundingClientRect().width || 0
  );
  expect(mobPortraitW).toBeGreaterThanOrEqual(114);
  await auditLayout(mobPage, { checkMinTapSize: true, label: 'mobile-v25-dialogue-night-ja' });

  await dismissOpenDialogue(mobPage);
  await auditLayout(mobPage, { checkMinTapSize: true, label: 'mobile-v25-hud-night-ja' });

  expect(mobConsoleErrors, `Mobile console errors: ${mobConsoleErrors.join(' | ')}`).toEqual([]);
  expect(mobPageErrors, `Mobile page errors: ${mobPageErrors.join(' | ')}`).toEqual([]);
  await mobContext.close();
});

test('Mobile 390x844 offline Azulejo HUD, >=44x44px tap targets & 10th screenshot', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true
  });
  const page = await context.newPage();

  const externalRequests = [];
  const consoleErrors = [];
  const pageErrors = [];

  page.on('request', (req) => {
    const url = req.url();
    if (/^https?:/i.test(url)) externalRequests.push(url);
  });
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => {
    pageErrors.push(String(err));
  });

  await page.goto(INDEX_HTML_URL, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => Boolean(window.__lotusGame && window.__lotusGame.getState));
  await page.waitForTimeout(300);

  await auditLayout(page, { checkMinTapSize: true, label: 'mobile-title-390x844' });

  await page.getByTestId('btn-title-start').tap();
  await page.waitForFunction(
    () => window.__lotusGame.getState().mode === 'gameplay' && window.__lotusGame.getState().stageId === 'ch1_s1'
  );
  await auditLayout(page, { checkMinTapSize: true, label: 'mobile-dialogue-390x844' });

  // Dismiss intro via touch tap
  for (let i = 0; i < 6; i += 1) {
    const isOpen = await page.evaluate(() => window.__lotusGame?.getState?.().isDialogueOpen === true);
    if (!isOpen) break;
    await page.getByTestId('dialogue-next').tap();
    await page.waitForTimeout(120);
  }
  await expect(page.getByTestId('dialogue-card')).toBeHidden();
  await auditLayout(page, { checkMinTapSize: true, label: '10-mobile-azulejo-390x844' });
  await page.screenshot({ path: shotPath('10-mobile-azulejo-390x844.png') });

  expect(externalRequests, `Unexpected HTTP requests: ${externalRequests.join(', ')}`).toEqual([]);
  expect(consoleErrors, `Console errors: ${consoleErrors.join(' | ')}`).toEqual([]);
  expect(pageErrors, `Page errors: ${pageErrors.join(' | ')}`).toEqual([]);

  await context.close();
});
