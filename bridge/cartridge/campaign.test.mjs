import test from 'node:test';
import assert from 'node:assert/strict';
import {cartridgeProgress,campaignTarget,cartridgeRanks} from './campaign.mjs';
import {createSelection,selectCartridge,insertCard} from './state.mjs';
const storage=data=>({getItem:key=>data[key]??null});
test('real cartridge availability and entry validation follow original sequential progress',()=>{
 const progress=cartridgeProgress(storage({}),storage({})),s=createSelection();s.available=progress.map(p=>p.unlocked);
 assert.equal(selectCartridge(s,3),false);s.index=3;assert.equal(insertCard(s),false);assert.throws(()=>campaignTarget('lust',progress,'https://example.com/bridge/'),/Locked/);
 const unlocked=cartridgeProgress(storage({'bridge-crazy-cleared-envy':'1'}),storage({}));assert.equal(campaignTarget('lust',unlocked,'https://example.com/bridge/','hard'),'https://example.com/bridge/lust.html?difficulty=hard');
 assert.equal(campaignTarget('greed',progress,'https://example.com/bridge/'),'https://example.com/bridge/index.html?campaign=greed&difficulty=normal');assert.throws(()=>campaignTarget('wrath',unlocked,'https://example.com/bridge/'),/Locked/);
});
test('existing rank arrays and saved single scores remain visible across all four released Bosses',()=>{
 const rows=cartridgeRanks(storage({'bridge-best-crazy':'42','bridge-best-crazy-lust-normal':'[800,900]'}));assert.equal(rows.length,8);assert.deepEqual(rows.find(r=>r.sin==='greed'&&r.difficulty==='hard').scores,[42]);assert.deepEqual(rows.find(r=>r.sin==='lust'&&r.difficulty==='normal').scores,[900,800]);
 assert.ok(cartridgeRanks({getItem(){throw Error('blocked')}}).every(r=>r.scores.length===0));
});
