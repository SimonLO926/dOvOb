export const surfaceVertex=`varying vec3 vNormal;varying vec3 vView;varying vec3 vWorld;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vNormal=normalize(normalMatrix*normal);vView=-mv.xyz;vWorld=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*mv;}`;
export const plasticFragment=`uniform vec3 uColor;uniform float uGloss;varying vec3 vNormal;varying vec3 vView;varying vec3 vWorld;float grain(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,42.319)))*43758.5453);}void main(){vec3 n=normalize(vNormal),v=normalize(vView),l=normalize(vec3(-.6,.85,1.2));float diffuse=max(dot(n,l),0.);float sheen=pow(max(dot(n,normalize(l+v)),0.),mix(16.,90.,uGloss));float rim=pow(1.-max(dot(n,v),0.),2.5);vec3 col=uColor*(.54+.55*diffuse)+vec3(1.,.95,.88)*sheen*.24+rim*.055;col+=(grain(vWorld*370.)-.5)*.017;gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`;
export const foilVertex=`varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;void main(){vUv=uv;vNormal=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vView=-mv.xyz;gl_Position=projectionMatrix*mv;}`;
export const foilFragment=`uniform sampler2D uMap;uniform float uTime;uniform float uReduced;varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;void main(){vec4 ink=texture2D(uMap,vUv);float angle=dot(normalize(vNormal),normalize(vView));float strip=pow(max(0.,1.-abs(vUv.x*.8+vUv.y*.35-(1.-angle)*1.2-.53)),26.);vec3 spectrum=.5+.5*cos(vec3(0.,2.,4.)+(vUv.x+vUv.y)*6.+(1.-angle)*15.);vec3 col=ink.rgb+strip*spectrum*.14;col+=pow(1.-angle,3.)*.12;gl_FragColor=vec4(col,ink.a);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`;
export const lcdFragment=`uniform sampler2D uMap;uniform float uTime;uniform float uBoot;uniform float uReduced;varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;void main(){vec2 uv=vUv;vec3 col=texture2D(uMap,uv).rgb;float scan=.955+.045*cos(uv.y*448.*3.14159);float vignette=1.-.17*length((uv-.5)*1.25);col*=scan*vignette;float glare=pow(max(0.,1.-abs(uv.x*.5+uv.y*.35-.64)),15.);col+=vec3(.08,.09,.06)*glare;col+=vec3(.025,.04,.018)*uBoot;gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`;
