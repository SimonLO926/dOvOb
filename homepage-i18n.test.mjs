import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { LANGUAGES, TEXT, chooseLanguage, projectCountText } from './homepage-i18n.mjs';

test('Every homepage translation marker has text in all four languages', async () => {
  const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');
  const keys = [...html.matchAll(/data-i18n(?:-aria-label|-title|-content)?="([^"]+)"/g)].map(match => match[1]);
  for (const language of LANGUAGES) {
    for (const key of keys) assert.equal(typeof TEXT[language][key], 'string', `${language}: ${key}`);
    assert.deepEqual(Object.keys(TEXT[language]).sort(), Object.keys(TEXT['zh-Hant']).sort());
  }
});

test('Saved selection wins, browser regions map correctly, unsupported preferences fall back', () => {
  assert.equal(chooseLanguage('ja', ['en-US']), 'ja');
  assert.equal(chooseLanguage('invalid', ['fr-FR', 'zh-CN']), 'zh-Hans');
  for (const value of ['zh-TW', 'zh-HK', 'zh-MO', 'zh-Hant-TW', 'zh']) assert.equal(chooseLanguage(null, [value]), 'zh-Hant');
  for (const value of ['zh-CN', 'zh-SG', 'zh-Hans-CN']) assert.equal(chooseLanguage(null, [value]), 'zh-Hans');
  assert.equal(chooseLanguage(null, ['ja-JP']), 'ja');
  assert.equal(chooseLanguage(null, ['en-GB']), 'en');
  assert.equal(chooseLanguage(null, ['fr-FR', 'de-DE']), 'zh-Hant');
  assert.equal(chooseLanguage(null), 'zh-Hant');
});

test('Project counts reflect language and English singular/plural, including an empty category', () => {
  assert.equal(projectCountText('en', 1), '2018—2026 · 1 project');
  assert.equal(projectCountText('en', 0), '2018—2026 · 0 projects');
  assert.equal(projectCountText('zh-Hant', 11), '2018—2026 · 11 件作品');
  assert.equal(projectCountText('zh-Hans', 3), '2018—2026 · 3 件作品');
  assert.equal(projectCountText('ja', 2), '2018—2026 · 2 件');
});
