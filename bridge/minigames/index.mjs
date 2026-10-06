import * as mirror from './mirror-match.mjs';
import * as crown from './crown-choice.mjs';
import * as doodle from './doodle.mjs';
import * as links from './lianliankan.mjs';
export const PRIDE_MINIGAMES = Object.freeze(Object.fromEntries([mirror, crown, links, doodle].map(game => [game.id, game])));
export const PRIDE_MINIGAME_IDS = Object.freeze(Object.keys(PRIDE_MINIGAMES));
