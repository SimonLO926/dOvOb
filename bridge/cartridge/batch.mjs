import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {surfaceVertex,plasticFragment} from './shaders.mjs';

// Preserve the original geometry, normals, linear colors and gloss. Only the
// submission changes: stationary opaque plastic becomes one draw per object.
// Theme-controlled shell/face and textured LCD/labels remain independent.
const vertex=surfaceVertex.replace('void main(){','attribute vec3 tint;attribute float gloss;varying vec3 vTint;varying float vGloss;void main(){vTint=tint;vGloss=gloss;');
const fragment=plasticFragment.replace('uniform vec3 uColor;uniform float uGloss;','varying vec3 vTint;varying float vGloss;').replaceAll('uColor','vTint').replaceAll('uGloss','vGloss');
export function batchPlastic(root){
 root.updateMatrixWorld(true);
 const inverse=root.matrixWorld.clone().invert(),parts=[];
 root.traverse(mesh=>{const m=mesh.material;if(mesh.isMesh&&m?.uniforms?.uColor&&m.uniforms.uGloss&&!m.userData.role)parts.push(mesh);});
 if(parts.length<2)return root;
 const geometries=parts.map(mesh=>{
  const source=mesh.geometry,g=source.index?source.toNonIndexed():source.clone();
  g.applyMatrix4(new T.Matrix4().multiplyMatrices(inverse,mesh.matrixWorld));g.clearGroups();
  const count=g.attributes.position.count,tint=new Float32Array(count*3),gloss=new Float32Array(count),c=mesh.material.uniforms.uColor.value;
  for(let i=0;i<count;i++){tint[i*3]=c.r;tint[i*3+1]=c.g;tint[i*3+2]=c.b;gloss[i]=mesh.material.uniforms.uGloss.value;}
  g.setAttribute('tint',new T.BufferAttribute(tint,3));g.setAttribute('gloss',new T.BufferAttribute(gloss,1));return g;
 });
 const merged=mergeGeometries(geometries,false);
 if(!merged)throw new Error('Incompatible cartridge geometry');
 const material=new T.ShaderMaterial({vertexShader:vertex,fragmentShader:fragment});
 root.add(new T.Mesh(merged,material));
 for(const mesh of parts){mesh.removeFromParent();mesh.geometry.dispose();mesh.material.dispose();}
 for(const g of geometries)g.dispose();
 return root;
}
