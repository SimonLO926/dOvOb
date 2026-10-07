// A compact reference for the existing keyboard and touch controls.
export function renderControlsGuide(root, t) {
  const list = document.createElement('dl');
  for (const [keys, label] of [
    ['← / →', 'controlsMove'], ['↑', 'controlsUp'],
    ['X / Z', 'controlsRotate'], ['↓', 'controlsDown'],
    ['Space', 'controlsMain'], ['C / Shift', 'controlsAlt'],
    ['P / Esc', 'controlsOpenMenu'], ['Esc', 'close'],
  ]) {
    const key = document.createElement('dt');
    key.textContent = keys;
    const action = document.createElement('dd');
    action.textContent = t(label);
    list.append(key, action);
  }
  const note = document.createElement('p');
  note.textContent = t('controlsTouch');
  root.replaceChildren(list, note);
}
