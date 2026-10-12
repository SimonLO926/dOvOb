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
export const portalVertex=`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`;
// Pixel aperture, orbiting stars and a single expanding glow: no rapid flashes.
export const portalFragment=`uniform float uProgress;uniform float uAspect;uniform vec3 uTone;uniform vec3 uPaper;uniform float uReduced;varying vec2 vUv;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){float p=clamp(uProgress,0.,1.);vec2 uv=(vUv-.5)*vec2(uAspect,1.);vec2 cell=floor(uv*180.);vec2 px=cell/180.;float r=length(px),a=atan(px.y,px.x);float ring=exp(-abs(r-(.04+p*.92))*48.);float trails=pow(max(0.,cos(a*16.+r*24.-p*5.)),28.)*exp(-r*1.6);float stars=step(.995,hash(cell))*smoothstep(0.,.3,p)*(1.-smoothstep(.7,1.,p));float aperture=smoothstep(p*.9-.09,p*.9+.09,r);vec3 color=mix(uPaper*.08,vec3(.055,.025,.10),aperture);color+=uTone*(ring*1.2+trails*.26+stars*.85)*(1.-uReduced);float glow=exp(-r*r*12.)*sin(p*3.14159);color+=vec3(.36,.22,.11)*glow;gl_FragColor=vec4(color,1.);}`;
