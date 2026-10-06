import { path } from './pride-visuals.mjs';

// Keep the central 52×54 shot target; broken wings and crown are ornaments.
export function drawRedCrownMirror(c, x, y, clock = 0, reduced = false) {
  c.save(); c.translate(x, y); c.lineWidth = 2;
  const pulse = reduced ? 0 : Math.sin(clock * .009);
  c.shadowColor = '#ff244f'; c.shadowBlur = reduced ? 0 : 8 + pulse * 2;
  for (const side of [-1, 1]) {
    path(c, [[side*22,-15],[side*40,-25],[side*34,-7],[side*44,4],[side*29,13],[side*37,28],[side*20,21]], '#54152e', '#dd6472');
    path(c, [[side*29,-10],[side*36,-17],[side*30,2],[side*39,5],[side*25,11]], '#b9304c', '#ffba9a');
    path(c, [[side*24,23],[side*32,31],[side*23,36]], '#79243e', '#d69b70');
  }
  path(c, [[-24,-19],[-18,-27],[18,-27],[24,-19],[26,18],[16,27],[-16,27],[-26,18]], '#9c3547', '#ffd08b');
  path(c, [[-19,-16],[-14,-21],[14,-21],[19,-16],[20,16],[12,22],[-12,22],[-20,16]], '#351020', '#e95365');
  path(c, [[-19,-23],[-23,-32],[-10,-27],[-4,-33],[0,-25],[10,-32],[16,-25],[23,-29],[19,-22]], '#b66c3d', '#ffe0a0');
  c.shadowBlur = 0;
  // Red mirror glass, reflected crown and fractures; never an eye / pupil.
  path(c, [[-17,-18],[-9,-21],[12,-21],[-19,12]], '#ffd6ce66');
  path(c, [[20,-10],[-7,22],[0,22],[20,0]], '#ffb7c455');
  path(c, [[-12,10],[-14,-1],[-6,4],[0,-4],[6,4],[14,-1],[12,10]], '#b96554', '#ffd79c');
  c.fillStyle = '#ffe1a2'; c.fillRect(-12,11,24,2);
  path(c, [[8,-19],[3,-10],[10,-3],[7,3]], null, '#ffbba9');
  path(c, [[-17,16],[-10,13],[-5,18],[0,15]], null, '#f77c91');
  for (const side of [-1,1]) {
    path(c, [[side*22,-10],[side*25,-5],[side*22,0],[side*19,-5]], '#d75364', '#ffd696');
  }
  c.restore();
}
