import test from 'node:test';
import assert from 'node:assert/strict';
import { touchControlsEnabled } from './touch-controls.mjs';

test('Auto follows pointer/hover capability; explicit On/Off override either device', () => {
  for (const coarse of [false, true]) for (const noHover of [false, true]) {
    const media = query => ({ matches: query === '(pointer: coarse)' ? coarse : noHover });
    assert.equal(touchControlsEnabled('auto', media), coarse || noHover);
    assert.equal(touchControlsEnabled('on', media), true);
    assert.equal(touchControlsEnabled('off', media), false);
  }
  assert.equal(touchControlsEnabled('auto', null), false);
});
