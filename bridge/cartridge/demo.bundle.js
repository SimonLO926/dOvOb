var Dl=0,oc=1,Ul=2;var cc=1,Nl=2,yn=3,Ln=0,Lt=1,xn=2,Nn=0,pi=1,lc=2,hc=3,uc=4,Fl=5,Jn=100,Bl=101,zl=102,Ol=103,kl=104,Hl=200,Vl=201,Gl=202,Wl=203,qs=204,Ys=205,Xl=206,ql=207,Yl=208,Zl=209,Jl=210,$l=211,Kl=212,jl=213,Ql=214,Sa=0,Ma=1,ba=2,mi=3,Ta=4,Ea=5,wa=6,Aa=7,dc=0,eh=1,th=2,Fn=0,nh=1,ih=2,rh=3,Ca=4,sh=5,ah=6,oh=7;var fc=300,Si=301,Mi=302,Ra=303,Pa=304,es=306,Zs=1e3,Zn=1001,Js=1002,jt=1003,ch=1004;var ts=1005;var Wt=1006,Ia=1007;var ei=1008;var vn=1009,pc=1010,mc=1011,cr=1012,La=1013,ti=1014,Sn=1015,lr=1016,Da=1017,Ua=1018,hr=1020,gc=35902,_c=35899,yc=1021,xc=1022,en=1023,Ji=1026,ur=1027,vc=1028,Na=1029,Sc=1030,Fa=1031;var Ba=1033,ns=33776,is=33777,rs=33778,ss=33779,za=35840,Oa=35841,ka=35842,Ha=35843,Va=36196,Ga=37492,Wa=37496,Xa=37808,qa=37809,Ya=37810,Za=37811,Ja=37812,$a=37813,Ka=37814,ja=37815,Qa=37816,eo=37817,to=37818,no=37819,io=37820,ro=37821,so=36492,ao=36494,oo=36495,co=36283,lo=36284,ho=36285,uo=36286;var Rr=2300,$s=2301,Xs=2302,$o=2400,Ko=2401,jo=2402;var lh=3200,hh=3201;var uh=0,dh=1,Bn="",Mt="srgb",gi="srgb-linear",Pr="linear",nt="srgb";var di=7680;var Qo=519,fh=512,ph=513,mh=514,Mc=515,gh=516,_h=517,yh=518,xh=519,ec=35044;var bc="300 es",cn=2e3,Ir=2001;var Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ll=1234567,Er=Math.PI/180,$i=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Tc(i,e){return(i%e+e)%e}function id(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function rd(i,e,t){return i!==e?(t-i)/(e-i):0}function wr(i,e,t){return(1-t)*i+t*e}function sd(i,e,t,n){return wr(i,e,1-Math.exp(-t*n))}function ad(i,e=1){return e-Math.abs(Tc(i,e*2)-e)}function od(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ld(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hd(i,e){return i+Math.random()*(e-i)}function ud(i){return i*(.5-Math.random())}function dd(i){i!==void 0&&(ll=i);let e=ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fd(i){return i*Er}function pd(i){return i*$i}function md(i){return(i&i-1)===0&&i!==0}function gd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _d(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yd(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var as={DEG2RAD:Er,RAD2DEG:$i,generateUUID:bi,clamp:We,euclideanModulo:Tc,mapLinear:id,inverseLerp:rd,lerp:wr,damp:sd,pingpong:ad,smoothstep:od,smootherstep:cd,randInt:ld,randFloat:hd,randFloatSpread:ud,seededRandom:dd,degToRad:fd,radToDeg:pd,isPowerOfTwo:md,ceilPowerOfTwo:gd,floorPowerOfTwo:_d,setQuaternionFromProperEuler:yd,normalize:Pt,denormalize:Yi},ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],f=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==p||h!==g){let m=1-o,d=c*f+l*p+h*g+u*x,A=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){let R=Math.sqrt(T),w=Math.atan2(R,d*A);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}let S=o*A;if(c=c*m+f*S,l=l*m+p*S,h=h*m+g*S,u=u*m+x*S,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-o*p,e[t+2]=l*g+h*p+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(s/2),f=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wo=new L,hl=new hn,He=class i{constructor(e,t,n,r,s,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=r[0],m=r[3],d=r[6],A=r[1],T=r[4],S=r[7],R=r[2],w=r[5],P=r[8];return s[0]=a*x+o*A+c*R,s[3]=a*m+o*T+c*w,s[6]=a*d+o*S+c*P,s[1]=l*x+h*A+u*R,s[4]=l*m+h*T+u*w,s[7]=l*d+h*S+u*P,s[2]=f*x+p*A+g*R,s[5]=f*m+p*T+g*w,s[8]=f*d+p*S+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*s,p=l*s-a*c,g=t*u+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(r*l-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=f*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ao=new He;function Ec(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vh(){let i=Lr("canvas");return i.style.display="block",i}var ul={};function Ki(i){i in ul||(ul[i]=!0,console.warn(i))}function Sh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var dl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xd(){let i={enabled:!0,workingColorSpace:gi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=In(r.r),r.g=In(r.g),r.b=In(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bn?Pr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gi]:{primaries:e,whitePoint:n,transfer:Pr,toXYZ:dl,fromXYZ:fl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:dl,fromXYZ:fl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}var Ke=xd();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,Ks=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=Lr("canvas")),Ni.width=e.width,Ni.height=e.height;let r=Ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=In(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vd=0,ji=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Co(r[a].image)):s.push(Co(r[a]))}else s=Co(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ks.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sd=0,Ro=new L,Bt=class i extends Dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Zn,r=Zn,s=Wt,a=ei,o=en,c=vn,l=i.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=bi(),this.name="",this.source=new ji(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ro).x}get height(){return this.source.getSize(Ro).y}get depth(){return this.source.getSize(Ro).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=fc;Bt.DEFAULT_ANISOTROPY=1;var pt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,S=(p+1)/2,R=(d+1)/2,w=(h+f)/4,P=(u+x)/4,U=(g+m)/4;return T>S&&T>R?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=w/n,s=P/n):S>R?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=w/r,s=U/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=P/s,r=U/s),this.set(n,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-x)/A,this.z=(f-h)/A,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},js=class extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new Bt(r);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ji(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends js{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Dr=class extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qs=class extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),Es.subVectors(this.max,vr),Fi.subVectors(e.a,vr),Bi.subVectors(e.b,vr),zi.subVectors(e.c,vr),Hn.subVectors(Bi,Fi),Vn.subVectors(zi,Bi),ci.subVectors(Fi,zi);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ci.z,ci.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ci.z,0,-ci.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ci.y,ci.x,0];return!Po(t,Fi,Bi,zi,Es)||(t=[1,0,0,0,1,0,0,0,1],!Po(t,Fi,Bi,zi,Es))?!1:(ws.crossVectors(Hn,Vn),t=[ws.x,ws.y,ws.z],Po(t,Fi,Bi,zi,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wn=[new L,new L,new L,new L,new L,new L,new L,new L],sn=new L,Ts=new $n,Fi=new L,Bi=new L,zi=new L,Hn=new L,Vn=new L,ci=new L,vr=new L,Es=new L,ws=new L,li=new L;function Po(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){li.fromArray(i,s);let o=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),c=e.dot(li),l=t.dot(li),h=n.dot(li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Md=new $n,Sr=new L,Io=new L,Qi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Md.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);let t=Sr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Sr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Io)),this.expandByPoint(Sr.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},An=new L,Lo=new L,As=new L,Gn=new L,Do=new L,Cs=new L,Uo=new L,Ur=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Lo.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Lo);let s=e.distanceTo(t)*.5,a=-this.direction.dot(As),o=Gn.dot(this.direction),c=-Gn.dot(As),l=Gn.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Lo).addScaledVector(As,f),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);let n=An.dot(this.direction),r=An.dot(An)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,r,s){Do.subVectors(t,e),Cs.subVectors(n,e),Uo.crossVectors(Do,Cs);let a=this.direction.dot(Uo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);let c=o*this.direction.dot(Cs.crossVectors(Gn,Cs));if(c<0)return null;let l=o*this.direction.dot(Do.cross(Gn));if(l<0||c+l>a)return null;let h=-o*Gn.dot(Uo);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class i{constructor(e,t,n,r,s,a,o,c,l,h,u,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,u,f,p,g,x,m)}set(e,t,n,r,s,a,o,c,l,h,u,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Oi.setFromMatrixColumn(e,0).length(),s=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=a*h,p=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,g=l*h,x=l*u;t[0]=f+x*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,g=l*h,x=l*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,p=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bd,e,Td)}lookAt(e,t,n){let r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Wn.crossVectors(n,Ht),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Wn.crossVectors(n,Ht)),Wn.normalize(),Rs.crossVectors(Ht,Wn),r[0]=Wn.x,r[4]=Rs.x,r[8]=Ht.x,r[1]=Wn.y,r[5]=Rs.y,r[9]=Ht.y,r[2]=Wn.z,r[6]=Rs.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],A=n[3],T=n[7],S=n[11],R=n[15],w=r[0],P=r[4],U=r[8],M=r[12],v=r[1],C=r[5],B=r[9],k=r[13],W=r[2],q=r[6],G=r[10],te=r[14],V=r[3],ue=r[7],xe=r[11],Me=r[15];return s[0]=a*w+o*v+c*W+l*V,s[4]=a*P+o*C+c*q+l*ue,s[8]=a*U+o*B+c*G+l*xe,s[12]=a*M+o*k+c*te+l*Me,s[1]=h*w+u*v+f*W+p*V,s[5]=h*P+u*C+f*q+p*ue,s[9]=h*U+u*B+f*G+p*xe,s[13]=h*M+u*k+f*te+p*Me,s[2]=g*w+x*v+m*W+d*V,s[6]=g*P+x*C+m*q+d*ue,s[10]=g*U+x*B+m*G+d*xe,s[14]=g*M+x*k+m*te+d*Me,s[3]=A*w+T*v+S*W+R*V,s[7]=A*P+T*C+S*q+R*ue,s[11]=A*U+T*B+S*G+R*xe,s[15]=A*M+T*k+S*te+R*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+s*c*u-r*l*u-s*o*f+n*l*f+r*o*p-n*c*p)+x*(+t*c*p-t*l*f+s*a*f-r*a*p+r*l*h-s*c*h)+m*(+t*l*u-t*o*p-s*a*u+n*a*p+s*o*h-n*l*h)+d*(-r*o*h-t*c*u+t*o*f+r*a*u-n*a*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],A=u*m*l-x*f*l+x*c*p-o*m*p-u*c*d+o*f*d,T=g*f*l-h*m*l-g*c*p+a*m*p+h*c*d-a*f*d,S=h*x*l-g*u*l+g*o*p-a*x*p-h*o*d+a*u*d,R=g*u*c-h*x*c-g*o*f+a*x*f+h*o*m-a*u*m,w=t*A+n*T+r*S+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return e[0]=A*P,e[1]=(x*f*s-u*m*s-x*r*p+n*m*p+u*r*d-n*f*d)*P,e[2]=(o*m*s-x*c*s+x*r*l-n*m*l-o*r*d+n*c*d)*P,e[3]=(u*c*s-o*f*s-u*r*l+n*f*l+o*r*p-n*c*p)*P,e[4]=T*P,e[5]=(h*m*s-g*f*s+g*r*p-t*m*p-h*r*d+t*f*d)*P,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*d-t*c*d)*P,e[7]=(a*f*s-h*c*s+h*r*l-t*f*l-a*r*p+t*c*p)*P,e[8]=S*P,e[9]=(g*u*s-h*x*s-g*n*p+t*x*p+h*n*d-t*u*d)*P,e[10]=(a*x*s-g*o*s+g*n*l-t*x*l-a*n*d+t*o*d)*P,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*p-t*o*p)*P,e[12]=R*P,e[13]=(h*x*r-g*u*r+g*n*f-t*x*f-h*n*m+t*u*m)*P,e[14]=(g*o*r-a*x*r-g*n*c+t*x*c+a*n*m-t*o*m)*P,e[15]=(a*u*r-h*o*r+h*n*c-t*u*c-a*n*f+t*o*f)*P,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,f=s*l,p=s*h,g=s*u,x=a*h,m=a*u,d=o*u,A=c*l,T=c*h,S=c*u,R=n.x,w=n.y,P=n.z;return r[0]=(1-(x+d))*R,r[1]=(p+S)*R,r[2]=(g-T)*R,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(f+d))*w,r[6]=(m+A)*w,r[7]=0,r[8]=(g+T)*P,r[9]=(m-A)*P,r[10]=(1-(f+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Oi.set(r[0],r[1],r[2]).length(),a=Oi.set(r[4],r[5],r[6]).length(),o=Oi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);let l=1/s,h=1/a,u=1/o;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=cn,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r),g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===cn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ir)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=cn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r),g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===cn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ir)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Oi=new L,an=new mt,bd=new L(0,0,0),Td=new L(1,1,1),Wn=new L,Rs=new L,Ht=new L,pl=new mt,ml=new hn,gn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ml.setFromEuler(this),this.setFromQuaternion(ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ed=0,gl=new L,ki=new hn,Cn=new mt,Ps=new L,Mr=new L,wd=new L,Ad=new hn,_l=new L(1,0,0),yl=new L(0,1,0),xl=new L(0,0,1),vl={type:"added"},Cd={type:"removed"},Hi={type:"childadded",child:null},No={type:"childremoved",child:null},Xt=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new gn,n=new hn,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new He}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(_l,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return gl.copy(e).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_l,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ps.copy(e):Ps.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Mr,Ps,this.up):Cn.lookAt(Ps,Mr,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(Cn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vl),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cd),No.child=e,this.dispatchEvent(No),No.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vl),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Ad,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Xt.DEFAULT_UP=new L(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new L,Rn=new L,Fo=new L,Pn=new L,Vi=new L,Gi=new L,Sl=new L,Bo=new L,zo=new L,Oo=new L,ko=new pt,Ho=new pt,Vo=new pt,Yn=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),on.subVectors(e,t),r.cross(on);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){on.subVectors(r,t),Rn.subVectors(n,t),Fo.subVectors(e,t);let a=on.dot(on),o=on.dot(Rn),c=on.dot(Fo),l=Rn.dot(Rn),h=Rn.dot(Fo),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,p=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Pn.x),c.addScaledVector(a,Pn.y),c.addScaledVector(o,Pn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return ko.setScalar(0),Ho.setScalar(0),Vo.setScalar(0),ko.fromBufferAttribute(e,t),Ho.fromBufferAttribute(e,n),Vo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ko,s.x),a.addScaledVector(Ho,s.y),a.addScaledVector(Vo,s.z),a}static isFrontFacing(e,t,n,r){return on.subVectors(n,t),Rn.subVectors(e,t),on.cross(Rn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),on.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Vi.subVectors(r,n),Gi.subVectors(s,n),Bo.subVectors(e,n);let c=Vi.dot(Bo),l=Gi.dot(Bo);if(c<=0&&l<=0)return t.copy(n);zo.subVectors(e,r);let h=Vi.dot(zo),u=Gi.dot(zo);if(h>=0&&u<=h)return t.copy(r);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Vi,a);Oo.subVectors(e,s);let p=Vi.dot(Oo),g=Gi.dot(Oo);if(g>=0&&p<=g)return t.copy(s);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Gi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Sl.subVectors(s,r),o=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(Sl,o);let d=1/(m+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ke.workingColorSpace){if(e=Tc(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Go(a,s,e+1/3),this.g=Go(a,s,e),this.b=Go(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=Mh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ke.workingToColorSpace(Et.copy(this),e),Math.round(We(Et.r*255,0,255))*65536+Math.round(We(Et.g*255,0,255))*256+Math.round(We(Et.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Et.copy(this),t);let n=Et.r,r=Et.g,s=Et.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Mt){Ke.workingToColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,r=Et.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Is);let n=wr(Xn.h,Is.h,t),r=wr(Xn.s,Is.s,t),s=wr(Xn.l,Is.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new Xe;Xe.NAMES=Mh;var Rd=0,_i=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=pi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qs,this.blendDst=Ys,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ys&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Un=class extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var yt=new L,Ls=new ge,Pd=0,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ec,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ec&&(e.usage=this.usage),e}};var Nr=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fr=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var It=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Id=0,$t=new mt,Wo=new Xt,Wi=new L,Vt=new $n,br=new $n,St=new L,_n=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ec(e)?Fr:Nr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return Wo.lookAt(e),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];br.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Vt.min,br.min),Vt.expandByPoint(St),St.addVectors(Vt.max,br.max),Vt.expandByPoint(St)):(Vt.expandByPoint(br.min),Vt.expandByPoint(br.max))}Vt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)St.fromBufferAttribute(o,l),c&&(Wi.fromBufferAttribute(e,l),St.add(Wi)),r=Math.max(r,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new L,c[U]=new L;let l=new L,h=new L,u=new L,f=new ge,p=new ge,g=new ge,x=new L,m=new L;function d(U,M,v){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,v),f.fromBufferAttribute(s,U),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,v),h.sub(l),u.sub(l),p.sub(f),g.sub(f);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[U].add(x),o[M].add(x),o[v].add(x),c[U].add(m),c[M].add(m),c[v].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,M=A.length;U<M;++U){let v=A[U],C=v.start,B=v.count;for(let k=C,W=C+B;k<W;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let T=new L,S=new L,R=new L,w=new L;function P(U){R.fromBufferAttribute(r,U),w.copy(R);let M=o[U];T.copy(M),T.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(w,M);let C=S.dot(c[U])<0?-1:1;a.setXYZW(U,T.x,T.y,T.z,C)}for(let U=0,M=A.length;U<M;++U){let v=A[U],C=v.start,B=v.count;for(let k=C,W=C+B;k<W;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new L,s=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Gt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ml=new mt,hi=new Ur,Ds=new Qi,bl=new L,Us=new L,Ns=new L,Fs=new L,Xo=new L,Bs=new L,Tl=new L,zs=new L,gt=class extends Xt{constructor(e=new _n,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Bs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Xo.fromBufferAttribute(u,e),a?Bs.addScaledVector(Xo,h):Bs.addScaledVector(Xo.sub(t),h))}t.add(Bs)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),hi.copy(e.ray).recast(e.near),!(Ds.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Ds,bl)===null||hi.origin.distanceToSquared(bl)>(e.far-e.near)**2))&&(Ml.copy(s).invert(),hi.copy(e.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,R=T;S<R;S+=3){let w=o.getX(S),P=o.getX(S+1),U=o.getX(S+2);r=Os(this,d,e,n,l,h,u,w,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let A=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);r=Os(this,a,e,n,l,h,u,A,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,R=T;S<R;S+=3){let w=S,P=S+1,U=S+2;r=Os(this,d,e,n,l,h,u,w,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let A=m,T=m+1,S=m+2;r=Os(this,a,e,n,l,h,u,A,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Ld(i,e,t,n,r,s,a,o){let c;if(e.side===Lt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Ln,o),c===null)return null;zs.copy(o),zs.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(zs);return l<t.near||l>t.far?null:{distance:l,point:zs.clone(),object:i}}function Os(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Us),i.getVertexPosition(c,Ns),i.getVertexPosition(l,Fs);let h=Ld(i,e,t,n,Us,Ns,Fs,Tl);if(h){let u=new L;Yn.getBarycoord(Tl,Us,Ns,Fs,u),r&&(h.uv=Yn.getInterpolatedAttribute(r,o,c,l,u,new ge)),s&&(h.uv1=Yn.getInterpolatedAttribute(s,o,c,l,u,new ge)),a&&(h.normal=Yn.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new L,materialIndex:0};Yn.getNormal(Us,Ns,Fs,f.normal),h.face=f,h.barycoord=u}return h}var tr=class i extends _n{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(x,m,d,A,T,S,R,w,P,U,M){let v=S/P,C=R/U,B=S/2,k=R/2,W=w/2,q=P+1,G=U+1,te=0,V=0,ue=new L;for(let xe=0;xe<G;xe++){let Me=xe*C-k;for(let ke=0;ke<q;ke++){let Je=ke*v-B;ue[x]=Je*A,ue[m]=Me*T,ue[d]=W,l.push(ue.x,ue.y,ue.z),ue[x]=0,ue[m]=0,ue[d]=w>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(ke/P),u.push(1-xe/U),te+=1}}for(let xe=0;xe<U;xe++)for(let Me=0;Me<P;Me++){let ke=f+Me+q*xe,Je=f+Me+q*(xe+1),tt=f+(Me+1)+q*(xe+1),$e=f+(Me+1)+q*xe;c.push(ke,Je,$e),c.push(Je,tt,$e),V+=6}o.addGroup(p,V,M),p+=V,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ti(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function At(i){let e={};for(let t=0;t<i.length;t++){let n=Ti(i[t]);for(let r in n)e[r]=n[r]}return e}function Dd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var bh={clone:Ti,merge:At},Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wt=class extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Dd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},yi=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qn=new L,El=new ge,wl=new ge,Ft=class extends yi{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,El,wl),t.subVectors(wl,El)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xi=-90,qi=1,ea=class extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ft(Xi,qi,e,t);r.layers=this.layers,this.add(r);let s=new Ft(Xi,qi,e,t);s.layers=this.layers,this.add(s);let a=new Ft(Xi,qi,e,t);a.layers=this.layers,this.add(a);let o=new Ft(Xi,qi,e,t);o.layers=this.layers,this.add(o);let c=new Ft(Xi,qi,e,t);c.layers=this.layers,this.add(c);let l=new Ft(Xi,qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Br=class extends Bt{constructor(e=[],t=Si,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ta=class extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Br(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new tr(5,5,5),s=new wt({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Nn});s.uniforms.tEquirect.value=t;let a=new gt(r,s),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=Wt),new ea(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},ln=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fd={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fd)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ir=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var qo=new L,Bd=new L,zd=new He,Kt=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=qo.subVectors(n,t).cross(Bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(qo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zd.getNormalMatrix(e),r=this.coplanarPoint(qo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ui=new Qi,Od=new ge(.5,.5),ks=new L,zr=class{constructor(e=new Kt,t=new Kt,n=new Kt,r=new Kt,s=new Kt,a=new Kt){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],p=s[7],g=s[8],x=s[9],m=s[10],d=s[11],A=s[12],T=s[13],S=s[14],R=s[15];if(r[0].setComponents(l-a,p-h,d-g,R-A).normalize(),r[1].setComponents(l+a,p+h,d+g,R+A).normalize(),r[2].setComponents(l+o,p+u,d+x,R+T).normalize(),r[3].setComponents(l-o,p-u,d-x,R-T).normalize(),n)r[4].setComponents(c,f,m,S).normalize(),r[5].setComponents(l-c,p-f,d-m,R-S).normalize();else if(r[4].setComponents(l-c,p-f,d-m,R-S).normalize(),t===cn)r[5].setComponents(l+c,p+f,d+m,R+S).normalize();else if(t===Ir)r[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);let t=Od.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ks.x=r.normal.x>0?e.max.x:e.min.x,ks.y=r.normal.y>0?e.max.y:e.min.y,ks.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Kn=class extends Bt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Or=class extends Bt{constructor(e,t,n=ti,r,s,a,o=jt,c=jt,l,h=Ji,u=1){if(h!==Ji&&h!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ji(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},kr=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Hr=class i extends _n{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],f=[],p=[],g=0,x=[],m=n/2,d=0;A(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(p,2));function A(){let S=new L,R=new L,w=0,P=(t-e)/n;for(let U=0;U<=s;U++){let M=[],v=U/s,C=v*(t-e)+e;for(let B=0;B<=r;B++){let k=B/r,W=k*c+o,q=Math.sin(W),G=Math.cos(W);R.x=C*q,R.y=-v*n+m,R.z=C*G,u.push(R.x,R.y,R.z),S.set(q,P,G).normalize(),f.push(S.x,S.y,S.z),p.push(k,1-v),M.push(g++)}x.push(M)}for(let U=0;U<r;U++)for(let M=0;M<s;M++){let v=x[M][U],C=x[M+1][U],B=x[M+1][U+1],k=x[M][U+1];(e>0||M!==0)&&(h.push(v,C,k),w+=3),(t>0||M!==s-1)&&(h.push(C,B,k),w+=3)}l.addGroup(d,w,0),d+=w}function T(S){let R=g,w=new ge,P=new L,U=0,M=S===!0?e:t,v=S===!0?1:-1;for(let B=1;B<=r;B++)u.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),g++;let C=g;for(let B=0;B<=r;B++){let W=B/r*c+o,q=Math.cos(W),G=Math.sin(W);P.x=M*G,P.y=m*v,P.z=M*q,u.push(P.x,P.y,P.z),f.push(0,v,0),w.x=q*.5+.5,w.y=G*.5*v+.5,p.push(w.x,w.y),g++}for(let B=0;B<r;B++){let k=R+B,W=C+B;S===!0?h.push(W,W+1,k):h.push(W+1,W,k),U+=3}l.addGroup(d,U,S===!0?1:2),d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);let h=n[r],f=n[r+1]-h,p=(a-h)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new ge:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,r=[],s=[],a=[],o=new L,c=new mt;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(We(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(We(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},rr=class extends qt{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ge){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},na=class extends rr{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ac(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,p*=h,r(a,o,f,p)},calc:function(s){let a=s*s,o=a*s;return i+e*s+t*a+n*o}}}var Hs=new L,Yo=new Ac,Zo=new Ac,Jo=new Ac,ia=class extends qt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=r[(o-1)%s]:(Hs.subVectors(r[0],r[1]).add(r[0]),l=Hs);let u=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Hs.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Hs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Yo.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),Zo.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),Jo.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Yo.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Zo.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Jo.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Yo.calc(c),Zo.calc(c),Jo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Al(i,e,t,n,r){let s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function kd(i,e){let t=1-i;return t*t*e}function Hd(i,e){return 2*(1-i)*i*e}function Vd(i,e){return i*i*e}function Ar(i,e,t,n){return kd(i,e)+Hd(i,t)+Vd(i,n)}function Gd(i,e){let t=1-i;return t*t*t*e}function Wd(i,e){let t=1-i;return 3*t*t*i*e}function Xd(i,e){return 3*(1-i)*i*i*e}function qd(i,e){return i*i*i*e}function Cr(i,e,t,n,r){return Gd(i,e)+Wd(i,t)+Xd(i,n)+qd(i,r)}var Vr=class extends qt{constructor(e=new ge,t=new ge,n=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ge){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Cr(e,r.x,s.x,a.x,o.x),Cr(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends qt{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Cr(e,r.x,s.x,a.x,o.x),Cr(e,r.y,s.y,a.y,o.y),Cr(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gr=class extends qt{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends qt{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends qt{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ar(e,r.x,s.x,a.x),Ar(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends qt{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ar(e,r.x,s.x,a.x),Ar(e,r.y,s.y,a.y),Ar(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Al(o,c.x,l.x,h.x,u.x),Al(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ge().fromArray(r))}return this}},tc=Object.freeze({__proto__:null,ArcCurve:na,CatmullRomCurve3:ia,CubicBezierCurve:Vr,CubicBezierCurve3:ra,EllipseCurve:rr,LineCurve:Gr,LineCurve3:sa,QuadraticBezierCurve:Wr,QuadraticBezierCurve3:aa,SplineCurve:Xr}),oa=class extends qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new tc[r.type]().fromJSON(r))}return this}},qr=class extends oa{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Gr(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Wr(this.currentPoint.clone(),new ge(e,t),new ge(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new Vr(this.currentPoint.clone(),new ge(e,t),new ge(n,r),new ge(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){let l=new rr(e,t,n,r,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},sr=class extends qr{constructor(e){super(e),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new qr().fromJSON(r))}return this}};function Yd(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Th(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=jd(i,e,s,t)),i.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<r;f+=t){let p=i[f],g=i[f+1];p<o&&(o=p),g<c&&(c=g),p>h&&(h=p),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Yr(s,a,t,o,c,l,0),a}function Th(i,e,t,n,r){let s;if(r===hf(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=Cl(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Cl(a/n|0,i[a],i[a+1],s);return s&&ar(s,s.next)&&(Jr(s),s=s.next),s}function xi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ar(t,t.next)||ut(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yr(i,e,t,n,r,s,a){if(!i)return;!a&&s&&rf(i,n,r,s);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?Jd(i,n,r,s):Zd(i)){e.push(c.i,i.i,l.i),Jr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=$d(xi(i),e),Yr(i,e,t,n,r,s,2)):a===2&&Kd(i,e,t,n,r,s):Yr(xi(i),e,t,n,r,s,1);break}}}function Zd(i){let e=i.prev,t=i,n=i.next;if(ut(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(r,s,a),u=Math.min(o,c,l),f=Math.max(r,s,a),p=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&Tr(r,o,s,c,a,l,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jd(i,e,t,n){let r=i.prev,s=i,a=i.next;if(ut(r,s,a)>=0)return!1;let o=r.x,c=s.x,l=a.x,h=r.y,u=s.y,f=a.y,p=Math.min(o,c,l),g=Math.min(h,u,f),x=Math.max(o,c,l),m=Math.max(h,u,f),d=nc(p,g,e,t,n),A=nc(x,m,e,t,n),T=i.prevZ,S=i.nextZ;for(;T&&T.z>=d&&S&&S.z<=A;){if(T.x>=p&&T.x<=x&&T.y>=g&&T.y<=m&&T!==r&&T!==a&&Tr(o,h,c,u,l,f,T.x,T.y)&&ut(T.prev,T,T.next)>=0||(T=T.prevZ,S.x>=p&&S.x<=x&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&Tr(o,h,c,u,l,f,S.x,S.y)&&ut(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;T&&T.z>=d;){if(T.x>=p&&T.x<=x&&T.y>=g&&T.y<=m&&T!==r&&T!==a&&Tr(o,h,c,u,l,f,T.x,T.y)&&ut(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;S&&S.z<=A;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&Tr(o,h,c,u,l,f,S.x,S.y)&&ut(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function $d(i,e){let t=i;do{let n=t.prev,r=t.next.next;!ar(n,r)&&wh(n,t,t.next,r)&&Zr(n,r)&&Zr(r,n)&&(e.push(n.i,t.i,r.i),Jr(t),Jr(t.next),t=i=r),t=t.next}while(t!==i);return xi(t)}function Kd(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&of(a,o)){let c=Ah(a,o);a=xi(a,a.next),c=xi(c,c.next),Yr(a,e,t,n,r,s,0),Yr(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function jd(i,e,t,n){let r=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,l=Th(i,o,c,n,!1);l===l.next&&(l.steiner=!0),r.push(af(l))}r.sort(Qd);for(let s=0;s<r.length;s++)t=ef(r[s],t);return t}function Qd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function ef(i,e){let t=tf(i,e);if(!t)return e;let n=Ah(t,i);return xi(n,n.next),xi(t,t.next)}function tf(i,e){let t=e,n=i.x,r=i.y,s=-1/0,a;if(ar(i,t))return t;do{if(ar(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Eh(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)){let u=Math.abs(r-t.y)/(n-t.x);Zr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&nf(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function nf(i,e){return ut(i.prev,i,e.prev)<0&&ut(e.next,i,i.next)<0}function rf(i,e,t,n){let r=i;do r.z===0&&(r.z=nc(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,sf(r)}function sf(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function nc(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function af(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Eh(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Tr(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&Eh(i,e,t,n,r,s,a,o)}function of(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cf(i,e)&&(Zr(i,e)&&Zr(e,i)&&lf(i,e)&&(ut(i.prev,i,e.prev)||ut(i,e.prev,e))||ar(i,e)&&ut(i.prev,i,i.next)>0&&ut(e.prev,e,e.next)>0)}function ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ar(i,e){return i.x===e.x&&i.y===e.y}function wh(i,e,t,n){let r=Gs(ut(i,e,t)),s=Gs(ut(i,e,n)),a=Gs(ut(t,n,i)),o=Gs(ut(t,n,e));return!!(r!==s&&a!==o||r===0&&Vs(i,t,e)||s===0&&Vs(i,n,e)||a===0&&Vs(t,i,n)||o===0&&Vs(t,e,n))}function Vs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Gs(i){return i>0?1:i<0?-1:0}function cf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&wh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Zr(i,e){return ut(i.prev,i,i.next)<0?ut(i,e,i.next)>=0&&ut(i,i.prev,e)>=0:ut(i,e,i.prev)<0||ut(i,i.next,e)<0}function lf(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ah(i,e){let t=ic(i.i,i.x,i.y),n=ic(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Cl(i,e,t,n){let r=ic(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ic(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hf(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}var rc=class{static triangulate(e,t,n=2){return Yd(e,t,n)}},fi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Rl(e),Pl(n,e);let a=e.length;t.forEach(Rl);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Pl(n,t[c]);let o=rc.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Rl(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var $r=class i extends _n{constructor(e=new sr([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new It(r,3)),this.setAttribute("uv",new It(s,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:uf,T,S=!1,R,w,P,U;d&&(T=d.getSpacedPoints(h),S=!0,f=!1,R=d.computeFrenetFrames(h,!1),w=new L,P=new L,U=new L),f||(m=0,p=0,g=0,x=0);let M=o.extractPoints(l),v=M.shape,C=M.holes;if(!fi.isClockWise(v)){v=v.reverse();for(let Q=0,$=C.length;Q<$;Q++){let J=C[Q];fi.isClockWise(J)&&(C[Q]=J.reverse())}}function k(Q){let J=10000000000000001e-36,Z=Q[0];for(let le=1;le<=Q.length;le++){let ne=le%Q.length,he=Q[ne],ze=he.x-Z.x,Be=he.y-Z.y,b=ze*ze+Be*Be,_=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs(Z.x),Math.abs(Z.y)),F=J*_*_;if(b<=F){Q.splice(ne,1),le--;continue}Z=he}}k(v),C.forEach(k);let W=C.length,q=v;for(let Q=0;Q<W;Q++){let $=C[Q];v=v.concat($)}function G(Q,$,J){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector($,J)}let te=v.length;function V(Q,$,J){let Z,le,ne,he=Q.x-$.x,ze=Q.y-$.y,Be=J.x-Q.x,b=J.y-Q.y,_=he*he+ze*ze,F=he*b-ze*Be;if(Math.abs(F)>Number.EPSILON){let H=Math.sqrt(_),j=Math.sqrt(Be*Be+b*b),X=$.x-ze/H,Re=$.y+he/H,oe=J.x-b/j,we=J.y+Be/j,Ae=((oe-X)*b-(we-Re)*Be)/(he*b-ze*Be);Z=X+he*Ae-Q.x,le=Re+ze*Ae-Q.y;let ie=Z*Z+le*le;if(ie<=2)return new ge(Z,le);ne=Math.sqrt(ie/2)}else{let H=!1;he>Number.EPSILON?Be>Number.EPSILON&&(H=!0):he<-Number.EPSILON?Be<-Number.EPSILON&&(H=!0):Math.sign(ze)===Math.sign(b)&&(H=!0),H?(Z=-ze,le=he,ne=Math.sqrt(_)):(Z=he,le=ze,ne=Math.sqrt(_/2))}return new ge(Z/ne,le/ne)}let ue=[];for(let Q=0,$=q.length,J=$-1,Z=Q+1;Q<$;Q++,J++,Z++)J===$&&(J=0),Z===$&&(Z=0),ue[Q]=V(q[Q],q[J],q[Z]);let xe=[],Me,ke=ue.concat();for(let Q=0,$=W;Q<$;Q++){let J=C[Q];Me=[];for(let Z=0,le=J.length,ne=le-1,he=Z+1;Z<le;Z++,ne++,he++)ne===le&&(ne=0),he===le&&(he=0),Me[Z]=V(J[Z],J[ne],J[he]);xe.push(Me),ke=ke.concat(Me)}let Je;if(m===0)Je=fi.triangulateShape(q,C);else{let Q=[],$=[];for(let J=0;J<m;J++){let Z=J/m,le=p*Math.cos(Z*Math.PI/2),ne=g*Math.sin(Z*Math.PI/2)+x;for(let he=0,ze=q.length;he<ze;he++){let Be=G(q[he],ue[he],ne);Ie(Be.x,Be.y,-le),Z===0&&Q.push(Be)}for(let he=0,ze=W;he<ze;he++){let Be=C[he];Me=xe[he];let b=[];for(let _=0,F=Be.length;_<F;_++){let H=G(Be[_],Me[_],ne);Ie(H.x,H.y,-le),Z===0&&b.push(H)}Z===0&&$.push(b)}}Je=fi.triangulateShape(Q,$)}let tt=Je.length,$e=g+x;for(let Q=0;Q<te;Q++){let $=f?G(v[Q],ke[Q],$e):v[Q];S?(P.copy(R.normals[0]).multiplyScalar($.x),w.copy(R.binormals[0]).multiplyScalar($.y),U.copy(T[0]).add(P).add(w),Ie(U.x,U.y,U.z)):Ie($.x,$.y,0)}for(let Q=1;Q<=h;Q++)for(let $=0;$<te;$++){let J=f?G(v[$],ke[$],$e):v[$];S?(P.copy(R.normals[Q]).multiplyScalar(J.x),w.copy(R.binormals[Q]).multiplyScalar(J.y),U.copy(T[Q]).add(P).add(w),Ie(U.x,U.y,U.z)):Ie(J.x,J.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){let $=Q/m,J=p*Math.cos($*Math.PI/2),Z=g*Math.sin($*Math.PI/2)+x;for(let le=0,ne=q.length;le<ne;le++){let he=G(q[le],ue[le],Z);Ie(he.x,he.y,u+J)}for(let le=0,ne=C.length;le<ne;le++){let he=C[le];Me=xe[le];for(let ze=0,Be=he.length;ze<Be;ze++){let b=G(he[ze],Me[ze],Z);S?Ie(b.x,b.y+T[h-1].y,T[h-1].x+J):Ie(b.x,b.y,u+J)}}}Y(),ee();function Y(){let Q=r.length/3;if(f){let $=0,J=te*$;for(let Z=0;Z<tt;Z++){let le=Je[Z];Ee(le[2]+J,le[1]+J,le[0]+J)}$=h+m*2,J=te*$;for(let Z=0;Z<tt;Z++){let le=Je[Z];Ee(le[0]+J,le[1]+J,le[2]+J)}}else{for(let $=0;$<tt;$++){let J=Je[$];Ee(J[2],J[1],J[0])}for(let $=0;$<tt;$++){let J=Je[$];Ee(J[0]+te*h,J[1]+te*h,J[2]+te*h)}}n.addGroup(Q,r.length/3-Q,0)}function ee(){let Q=r.length/3,$=0;Se(q,$),$+=q.length;for(let J=0,Z=C.length;J<Z;J++){let le=C[J];Se(le,$),$+=le.length}n.addGroup(Q,r.length/3-Q,1)}function Se(Q,$){let J=Q.length;for(;--J>=0;){let Z=J,le=J-1;le<0&&(le=Q.length-1);for(let ne=0,he=h+m*2;ne<he;ne++){let ze=te*ne,Be=te*(ne+1),b=$+Z+ze,_=$+le+ze,F=$+le+Be,H=$+Z+Be;qe(b,_,F,H)}}}function Ie(Q,$,J){c.push(Q),c.push($),c.push(J)}function Ee(Q,$,J){st(Q),st($),st(J);let Z=r.length/3,le=A.generateTopUV(n,r,Z-3,Z-2,Z-1);E(le[0]),E(le[1]),E(le[2])}function qe(Q,$,J,Z){st(Q),st($),st(Z),st($),st(J),st(Z);let le=r.length/3,ne=A.generateSideWallUV(n,r,le-6,le-3,le-2,le-1);E(ne[0]),E(ne[1]),E(ne[3]),E(ne[1]),E(ne[2]),E(ne[3])}function st(Q){r.push(c[Q*3+0]),r.push(c[Q*3+1]),r.push(c[Q*3+2])}function E(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return df(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new tc[r.type]().fromJSON(r)),new i(n,e.options)}},uf={generateTopUV:function(i,e,t,n,r){let s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[r*3],h=e[r*3+1];return[new ge(s,a),new ge(o,c),new ge(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],x=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ge(a,1-c),new ge(l,1-u),new ge(f,1-g),new ge(x,1-d)]:[new ge(o,1-c),new ge(h,1-u),new ge(p,1-g),new ge(m,1-d)]}};function df(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Qt=class i extends _n{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=e/o,f=t/c,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let A=d*f-a;for(let T=0;T<l;T++){let S=T*u-s;g.push(S,-A,0),x.push(0,0,1),m.push(T/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let A=0;A<o;A++){let T=A+l*d,S=A+l*(d+1),R=A+1+l*(d+1),w=A+1+l*d;p.push(T,S,w),p.push(S,R,w)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ca=class extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},la=class extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ws(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ff(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ha=class extends vi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$o,endingEnd:$o}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ko:s=e,o=2*t-n;break;case jo:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ko:a=e,c=2*n-t;break;case jo:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,A=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,T=(-1-p)*m+(1.5+p)*x+.5*g,S=p*m-p*x;for(let R=0;R!==o;++R)s[R]=d*a[h+R]+A*a[l+R]+T*a[c+R]+S*a[u+R];return s}},ua=class extends vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*h;return s}},da=class extends vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Yt=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ws(t,this.TimeBufferType),this.values=Ws(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ws(e.times,Array),values:Ws(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ha(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rr:t=this.InterpolantFactoryMethodDiscrete;break;case $s:t=this.InterpolantFactoryMethodLinear;break;case Xs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return Xs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&ff(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Xs,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(r)c=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Yt.prototype.ValueTypeName="";Yt.prototype.TimeBufferType=Float32Array;Yt.prototype.ValueBufferType=Float32Array;Yt.prototype.DefaultInterpolation=$s;var jn=class extends Yt{constructor(e,t,n){super(e,t,n)}};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Rr;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends Yt{constructor(e,t,n,r){super(e,t,n,r)}};fa.prototype.ValueTypeName="color";var pa=class extends Yt{constructor(e,t,n,r){super(e,t,n,r)}};pa.prototype.ValueTypeName="number";var ma=class extends vi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)hn.slerpFlat(s,0,a,l-o,a,l,c);return s}},Kr=class extends Yt{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qn=class extends Yt{constructor(e,t,n){super(e,t,n)}};Qn.prototype.ValueTypeName="string";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=Rr;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Yt{constructor(e,t,n,r){super(e,t,n,r)}};ga.prototype.ValueTypeName="vector";var _a=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ch=new _a,ya=class{constructor(e){this.manager=e!==void 0?e:Ch,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var xa=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var or=class extends yi{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var jr=class extends xa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var va=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Cc="\\[\\]\\.:\\/",pf=new RegExp("["+Cc+"]","g"),Rc="[^"+Cc+"]",mf="[^"+Cc.replace("\\.","")+"]",gf=/((?:WC+[\/:])*)/.source.replace("WC",Rc),_f=/(WCOD+)?/.source.replace("WCOD",mf),yf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),xf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),vf=new RegExp("^"+gf+_f+yf+xf+"$"),Sf=["material","materials","bones","map"],sc=class{constructor(e,t,n){let r=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pf,"")}static parseTrackName(e){let t=vf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Sf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=sc;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gy=new Float32Array(1);var Il=new mt,Qr=class{constructor(e,t,n=0,r=1/0){this.ray=new Ur(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Il.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Il),this}intersectObject(e,t=!0,n=[]){return ac(e,this,n,t),n.sort(Ll),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ac(e[r],this,n,t);return n.sort(Ll),n}};function Ll(i,e){return i.distance-e.distance}function ac(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)ac(s[a],e,t,!0)}}function Pc(i,e,t,n){let r=Mf(n);switch(t){case yc:return i*e;case vc:return i*e/r.components*r.byteLength;case Na:return i*e/r.components*r.byteLength;case Sc:return i*e*2/r.components*r.byteLength;case Fa:return i*e*2/r.components*r.byteLength;case xc:return i*e*3/r.components*r.byteLength;case en:return i*e*4/r.components*r.byteLength;case Ba:return i*e*4/r.components*r.byteLength;case ns:case is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rs:case ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:case Ha:return Math.max(i,16)*Math.max(e,8)/4;case za:case ka:return Math.max(i,8)*Math.max(e,8)/2;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case so:case ao:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case co:case lo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ho:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mf(i){switch(i){case vn:case pc:return{byteLength:1,components:1};case cr:case mc:case lr:return{byteLength:2,components:1};case Da:case Ua:return{byteLength:2,components:4};case ti:case La:case Sn:return{byteLength:4,components:1};case gc:case _c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function jh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Tf(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Df=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$f=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Up=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ym=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ng=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Ef,alphahash_pars_fragment:wf,alphamap_fragment:Af,alphamap_pars_fragment:Cf,alphatest_fragment:Rf,alphatest_pars_fragment:Pf,aomap_fragment:If,aomap_pars_fragment:Lf,batching_pars_vertex:Df,batching_vertex:Uf,begin_vertex:Nf,beginnormal_vertex:Ff,bsdfs:Bf,iridescence_fragment:zf,bumpmap_pars_fragment:Of,clipping_planes_fragment:kf,clipping_planes_pars_fragment:Hf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Gf,color_fragment:Wf,color_pars_fragment:Xf,color_pars_vertex:qf,color_vertex:Yf,common:Zf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:$f,displacementmap_pars_vertex:Kf,displacementmap_vertex:jf,emissivemap_fragment:Qf,emissivemap_pars_fragment:ep,colorspace_fragment:tp,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:rp,envmap_pars_fragment:sp,envmap_pars_vertex:ap,envmap_physical_pars_fragment:_p,envmap_vertex:op,fog_vertex:cp,fog_pars_vertex:lp,fog_fragment:hp,fog_pars_fragment:up,gradientmap_pars_fragment:dp,lightmap_pars_fragment:fp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:yp,lights_toon_pars_fragment:xp,lights_phong_fragment:vp,lights_phong_pars_fragment:Sp,lights_physical_fragment:Mp,lights_physical_pars_fragment:bp,lights_fragment_begin:Tp,lights_fragment_maps:Ep,lights_fragment_end:wp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Pp,map_fragment:Ip,map_pars_fragment:Lp,map_particle_fragment:Dp,map_particle_pars_fragment:Up,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Bp,morphcolor_vertex:zp,morphnormal_vertex:Op,morphtarget_pars_vertex:kp,morphtarget_vertex:Hp,normal_fragment_begin:Vp,normal_fragment_maps:Gp,normal_pars_fragment:Wp,normal_pars_vertex:Xp,normal_vertex:qp,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:Kp,opaque_fragment:jp,packing:Qp,premultiplied_alpha_fragment:em,project_vertex:tm,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:rm,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:am,shadowmap_pars_vertex:om,shadowmap_vertex:cm,shadowmask_pars_fragment:lm,skinbase_vertex:hm,skinning_pars_vertex:um,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:_m,transmission_fragment:ym,transmission_pars_fragment:xm,uv_pars_fragment:vm,uv_pars_vertex:Sm,uv_vertex:Mm,worldpos_vertex:bm,background_vert:Tm,background_frag:Em,backgroundCube_vert:wm,backgroundCube_frag:Am,cube_vert:Cm,cube_frag:Rm,depth_vert:Pm,depth_frag:Im,distanceRGBA_vert:Lm,distanceRGBA_frag:Dm,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:Fm,linedashed_frag:Bm,meshbasic_vert:zm,meshbasic_frag:Om,meshlambert_vert:km,meshlambert_frag:Hm,meshmatcap_vert:Vm,meshmatcap_frag:Gm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:qm,meshphong_frag:Ym,meshphysical_vert:Zm,meshphysical_frag:Jm,meshtoon_vert:$m,meshtoon_frag:Km,points_vert:jm,points_frag:Qm,shadow_vert:eg,shadow_frag:tg,sprite_vert:ng,sprite_frag:ig},pe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Mn={basic:{uniforms:At([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:At([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:At([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:At([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:At([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:At([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:At([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:At([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:At([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:At([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:At([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:At([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:At([pe.lights,pe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Mn.physical={uniforms:At([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var fo={r:0,b:0,g:0},Ei=new gn,rg=new mt;function sg(i,e,t,n,r,s,a){let o=new Xe(0),c=s===!0?0:1,l,h,u=null,f=0,p=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function x(T){let S=!1,R=g(T);R===null?d(o,c):R&&R.isColor&&(d(R,1),S=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,S){let R=g(S);R&&(R.isCubeTexture||R.mapping===es)?(h===void 0&&(h=new gt(new tr(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:Ti(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ei.copy(S.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(Ei)),h.material.toneMapped=Ke.getTransfer(R.colorSpace)!==nt,(u!==R||f!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,f=R.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new gt(new Qt(2,2),new wt({name:"BackgroundMaterial",uniforms:Ti(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(R.colorSpace)!==nt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=R,f=R.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function d(T,S){T.getRGB(fo,wc(i)),n.buffers.color.setClear(fo.r,fo.g,fo.b,S,a)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),c=S,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,d(o,c)},render:x,addToRenderList:m,dispose:A}}function ag(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(v,C,B,k,W){let q=!1,G=u(k,B,C);s!==G&&(s=G,l(s.object)),q=p(v,k,B,W),q&&g(v,k,B,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(v,C,B,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,C,B){let k=B.wireframe===!0,W=n[v.id];W===void 0&&(W={},n[v.id]=W);let q=W[C.id];q===void 0&&(q={},W[C.id]=q);let G=q[k];return G===void 0&&(G=f(c()),q[k]=G),G}function f(v){let C=[],B=[],k=[];for(let W=0;W<t;W++)C[W]=0,B[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:k,object:v,attributes:{},index:null}}function p(v,C,B,k){let W=s.attributes,q=C.attributes,G=0,te=B.getAttributes();for(let V in te)if(te[V].location>=0){let xe=W[V],Me=q[V];if(Me===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Me=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Me=v.instanceColor)),xe===void 0||xe.attribute!==Me||Me&&xe.data!==Me.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function g(v,C,B,k){let W={},q=C.attributes,G=0,te=B.getAttributes();for(let V in te)if(te[V].location>=0){let xe=q[V];xe===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(xe=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(xe=v.instanceColor));let Me={};Me.attribute=xe,xe&&xe.data&&(Me.data=xe.data),W[V]=Me,G++}s.attributes=W,s.attributesNum=G,s.index=k}function x(){let v=s.newAttributes;for(let C=0,B=v.length;C<B;C++)v[C]=0}function m(v){d(v,0)}function d(v,C){let B=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;B[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),W[v]!==C&&(i.vertexAttribDivisor(v,C),W[v]=C)}function A(){let v=s.newAttributes,C=s.enabledAttributes;for(let B=0,k=C.length;B<k;B++)C[B]!==v[B]&&(i.disableVertexAttribArray(B),C[B]=0)}function T(v,C,B,k,W,q,G){G===!0?i.vertexAttribIPointer(v,C,B,W,q):i.vertexAttribPointer(v,C,B,k,W,q)}function S(v,C,B,k){x();let W=k.attributes,q=B.getAttributes(),G=C.defaultAttributeValues;for(let te in q){let V=q[te];if(V.location>=0){let ue=W[te];if(ue===void 0&&(te==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),te==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),ue!==void 0){let xe=ue.normalized,Me=ue.itemSize,ke=e.get(ue);if(ke===void 0)continue;let Je=ke.buffer,tt=ke.type,$e=ke.bytesPerElement,Y=tt===i.INT||tt===i.UNSIGNED_INT||ue.gpuType===La;if(ue.isInterleavedBufferAttribute){let ee=ue.data,Se=ee.stride,Ie=ue.offset;if(ee.isInstancedInterleavedBuffer){for(let Ee=0;Ee<V.locationSize;Ee++)d(V.location+Ee,ee.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)m(V.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Ee=0;Ee<V.locationSize;Ee++)T(V.location+Ee,Me/V.locationSize,tt,xe,Se*$e,(Ie+Me/V.locationSize*Ee)*$e,Y)}else{if(ue.isInstancedBufferAttribute){for(let ee=0;ee<V.locationSize;ee++)d(V.location+ee,ue.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ee=0;ee<V.locationSize;ee++)m(V.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let ee=0;ee<V.locationSize;ee++)T(V.location+ee,Me/V.locationSize,tt,xe,Me*$e,Me/V.locationSize*ee*$e,Y)}}else if(G!==void 0){let xe=G[te];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(V.location,xe);break;case 3:i.vertexAttrib3fv(V.location,xe);break;case 4:i.vertexAttrib4fv(V.location,xe);break;default:i.vertexAttrib1fv(V.location,xe)}}}}A()}function R(){U();for(let v in n){let C=n[v];for(let B in C){let k=C[B];for(let W in k)h(k[W].object),delete k[W];delete C[B]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;let C=n[v.id];for(let B in C){let k=C[B];for(let W in k)h(k[W].object),delete k[W];delete C[B]}delete n[v.id]}function P(v){for(let C in n){let B=n[C];if(B[v.id]===void 0)continue;let k=B[v.id];for(let W in k)h(k[W].object),delete k[W];delete B[v.id]}}function U(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function og(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function cg(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==en&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let U=P===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==vn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Sn&&!U)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:R,maxSamples:w}}function lg(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Kt,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||r;return r=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let A=s?0:n,T=A*4,S=d.clippingState||null;c.value=S,S=h(g,f,T,p);for(let R=0;R!==T;++R)S[R]=t[R];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=p+x*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,S=p;T!==x;++T,S+=4)a.copy(u[T]).applyMatrix4(A,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function hg(i){let e=new WeakMap;function t(a,o){return o===Ra?a.mapping=Si:o===Pa&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ra||o===Pa)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new ta(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var fr=4,Rh=[.125,.215,.35,.446,.526,.582],Ci=20,Ic=new or,Ph=new Xe,Lc=null,Dc=0,Uc=0,Nc=!1,Ai=(1+Math.sqrt(5))/2,dr=1/Ai,Ih=[new L(-Ai,dr,0),new L(Ai,dr,0),new L(-dr,0,Ai),new L(dr,0,Ai),new L(0,Ai,-dr),new L(0,Ai,dr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],ug=new L,go=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=ug}=s;Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Dc,Uc),this._renderer.xr.enabled=Nc,e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:lr,format:en,colorSpace:gi,depthBuffer:!1},r=Lh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(s)),this._blurMaterial=fg(s,e,t)}return r}_compileMaterial(e){let t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,Ic)}_sceneToCubeUV(e,t,n,r,s){let c=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Ph),u.toneMapping=Fn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let x=new Un({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),m=new gt(new tr,x),d=!1,A=e.background;A?A.isColor&&(x.color.copy(A),e.background=null,d=!0):(x.color.copy(Ph),d=!0);for(let T=0;T<6;T++){let S=T%3;S===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):S===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));let R=this._cubeSize;po(r,S*R,T>2?R:0,R,R),u.setRenderTarget(r),d&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=A}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Si||e.mapping===Mi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;po(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ic)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ih[(r-s-1)%Ih.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new gt(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ci-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Ci;m>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);let d=[],A=0;for(let P=0;P<Ci;++P){let U=P/x,M=Math.exp(-U*U/2);d.push(M),P===0?A+=M:P<m&&(A+=2*M)}for(let P=0;P<d.length;P++)d[P]=d[P]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;let S=this._sizeLods[r],R=3*S*(r>T-fr?r-T+fr:0),w=4*(this._cubeSize-S);po(t,R,w,3*S,2*S),c.setRenderTarget(t),c.render(u,Ic)}};function dg(i){let e=[],t=[],n=[],r=i,s=i-fr+1+Rh.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let c=1/o;a>i-fr?c=Rh[a-i+fr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,A=new Float32Array(x*g*p),T=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let w=0;w<p;w++){let P=w%3*2/3-1,U=w>2?0:-1,M=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];A.set(M,x*g*w),T.set(f,m*g*w);let v=[w,w,w,w,w,w];S.set(v,d*g*w)}let R=new _n;R.setAttribute("position",new Gt(A,x)),R.setAttribute("uv",new Gt(T,m)),R.setAttribute("faceIndex",new Gt(S,d)),e.push(R),r>fr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lh(i,e,t){let n=new mn(i,e,t);return n.texture.mapping=es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function fg(i,e,t){let n=new Float32Array(Ci),r=new L(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Dh(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Uh(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ra||c===Pa,h=c===Si||c===Mi;if(l||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new go(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new go(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function mg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Ki("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function gg(i,e,t,n){let r={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let A=p.array;x=p.version;for(let T=0,S=A.length;T<S;T+=3){let R=A[T+0],w=A[T+1],P=A[T+2];f.push(R,w,w,P,P,R)}}else if(g!==void 0){let A=g.array;x=g.version;for(let T=0,S=A.length/3-1;T<S;T+=3){let R=T+0,w=T+1,P=T+2;f.push(R,w,w,P,P,R)}}else return;let m=new(Ec(f)?Fr:Nr)(f,1);m.version=x;let d=s.get(u);d&&e.remove(d),s.set(u,m)}function h(u){let f=s.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function _g(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,s,f*a),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*a,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,x,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*x[A];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function xg(i,e,t){let n=new WeakMap,r=new pt;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],T=0;p===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let S=o.attributes.position.count*T,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let w=new Float32Array(S*R*4*u),P=new Dr(w,S,R,u);P.type=Sn,P.needsUpdate=!0;let U=T*4;for(let v=0;v<u;v++){let C=m[v],B=d[v],k=A[v],W=S*R*4*v;for(let q=0;q<C.count;q++){let G=q*U;p===!0&&(r.fromBufferAttribute(C,q),w[W+G+0]=r.x,w[W+G+1]=r.y,w[W+G+2]=r.z,w[W+G+3]=0),g===!0&&(r.fromBufferAttribute(B,q),w[W+G+4]=r.x,w[W+G+5]=r.y,w[W+G+6]=r.z,w[W+G+7]=0),x===!0&&(r.fromBufferAttribute(k,q),w[W+G+8]=r.x,w[W+G+9]=r.y,w[W+G+10]=r.z,w[W+G+11]=k.itemSize===4?r.w:1)}}f={count:u,texture:P,size:new ge(S,R)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function vg(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var Qh=new Bt,Nh=new Or(1,1),eu=new Dr,tu=new Qs,nu=new Br,Fh=[],Bh=[],zh=new Float32Array(16),Oh=new Float32Array(9),kh=new Float32Array(4);function mr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Fh[r];if(s===void 0&&(s=new Float32Array(r),Fh[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _o(i,e){let t=Bh[e];t===void 0&&(t=new Int32Array(e),Bh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function Eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;kh.set(n),i.uniformMatrix2fv(this.addr,!1,kh),vt(t,n)}}function wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Oh.set(n),i.uniformMatrix3fv(this.addr,!1,Oh),vt(t,n)}}function Ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;zh.set(n),i.uniformMatrix4fv(this.addr,!1,zh),vt(t,n)}}function Cg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function Lg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function Fg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Nh.compareFunction=Mc,s=Nh):s=Qh,t.setTexture2D(e||s,r)}function Bg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||tu,r)}function zg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||nu,r)}function Og(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||eu,r)}function kg(i){switch(i){case 5126:return Sg;case 35664:return Mg;case 35665:return bg;case 35666:return Tg;case 35674:return Eg;case 35675:return wg;case 35676:return Ag;case 5124:case 35670:return Cg;case 35667:case 35671:return Rg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Og}}function Hg(i,e){i.uniform1fv(this.addr,e)}function Vg(i,e){let t=mr(e,this.size,2);i.uniform2fv(this.addr,t)}function Gg(i,e){let t=mr(e,this.size,3);i.uniform3fv(this.addr,t)}function Wg(i,e){let t=mr(e,this.size,4);i.uniform4fv(this.addr,t)}function Xg(i,e){let t=mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qg(i,e){let t=mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Yg(i,e){let t=mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zg(i,e){i.uniform1iv(this.addr,e)}function Jg(i,e){i.uniform2iv(this.addr,e)}function $g(i,e){i.uniform3iv(this.addr,e)}function Kg(i,e){i.uniform4iv(this.addr,e)}function jg(i,e){i.uniform1uiv(this.addr,e)}function Qg(i,e){i.uniform2uiv(this.addr,e)}function e_(i,e){i.uniform3uiv(this.addr,e)}function t_(i,e){i.uniform4uiv(this.addr,e)}function n_(i,e,t){let n=this.cache,r=e.length,s=_o(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Qh,s[a])}function i_(i,e,t){let n=this.cache,r=e.length,s=_o(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||tu,s[a])}function r_(i,e,t){let n=this.cache,r=e.length,s=_o(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||nu,s[a])}function s_(i,e,t){let n=this.cache,r=e.length,s=_o(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||eu,s[a])}function a_(i){switch(i){case 5126:return Hg;case 35664:return Vg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return $g;case 35669:case 35673:return Kg;case 5125:return jg;case 36294:return Qg;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return s_}}var Bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kg(t.type)}},zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a_(t.type)}},Oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Fc=/(\w+)(\])?(\[|\.)?/g;function Hh(i,e){i.seq.push(e),i.map[e.id]=e}function o_(i,e,t){let n=i.name,r=n.length;for(Fc.lastIndex=0;;){let s=Fc.exec(n),a=Fc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Hh(t,l===void 0?new Bc(o,i,e):new zc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Oc(o),Hh(t,u)),t=u}}}var pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);o_(s,a,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Vh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var c_=37297,l_=0;function h_(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Gh=new He;function u_(i){Ke._getMatrix(Gh,Ke.workingColorSpace,i);let e=`mat3( ${Gh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Pr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+h_(i.getShaderSource(e),o)}else return s}function d_(i,e){let t=u_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function f_(i,e){let t;switch(e){case nh:t="Linear";break;case ih:t="Reinhard";break;case rh:t="Cineon";break;case Ca:t="ACESFilmic";break;case ah:t="AgX";break;case oh:t="Neutral";break;case sh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mo=new L;function p_(){Ke.getLuminanceCoefficients(mo);let i=mo.x.toFixed(4),e=mo.y.toFixed(4),t=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function g_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function __(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function os(i){return i!==""}function Xh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(i){return i.replace(y_,v_)}var x_=new Map;function v_(i,e){let t=Ge[e];if(t===void 0){let n=x_.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kc(t)}var S_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(i){return i.replace(S_,M_)}function M_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function T_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Si:case Mi:e="ENVMAP_TYPE_CUBE";break;case es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mi:e="ENVMAP_MODE_REFRACTION";break}return e}function w_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dc:e="ENVMAP_BLENDING_MULTIPLY";break;case eh:e="ENVMAP_BLENDING_MIX";break;case th:e="ENVMAP_BLENDING_ADD";break}return e}function A_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function C_(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=b_(t),l=T_(t),h=E_(t),u=w_(t),f=A_(t),p=m_(t),g=g_(s),x=r.createProgram(),m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(os).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(os).join(`
`),d.length>0&&(d+=`
`)):(m=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),d=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Fn?f_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,d_("linearToOutputTexel",t.outputColorSpace),p_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(os).join(`
`)),a=kc(a),a=Xh(a,t),a=qh(a,t),o=kc(o),o=Xh(o,t),o=qh(o,t),a=Yh(a),o=Yh(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=A+m+a,S=A+d+o,R=Vh(r,r.VERTEX_SHADER,T),w=Vh(r,r.FRAGMENT_SHADER,S);r.attachShader(x,R),r.attachShader(x,w),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(C){if(i.debug.checkShaderErrors){let B=r.getProgramInfoLog(x)||"",k=r.getShaderInfoLog(R)||"",W=r.getShaderInfoLog(w)||"",q=B.trim(),G=k.trim(),te=W.trim(),V=!0,ue=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,R,w);else{let xe=Wh(r,R,"vertex"),Me=Wh(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+xe+`
`+Me)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||te==="")&&(ue=!1);ue&&(C.diagnostics={runnable:V,programLog:q,vertexShader:{log:G,prefix:m},fragmentShader:{log:te,prefix:d}})}r.deleteShader(R),r.deleteShader(w),U=new pr(r,x),M=__(r,x)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(x,c_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=w,this}var R_=0,Hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vc(e),t.set(e,n)),n}},Vc=class{constructor(e){this.id=R_++,this.code=e,this.usedTimes=0}};function P_(i,e,t,n,r,s,a){let o=new er,c=new Hc,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,v,C,B,k){let W=B.fog,q=k.geometry,G=M.isMeshStandardMaterial?B.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),V=te&&te.mapping===es?te.image.height:null,ue=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let xe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Me=xe!==void 0?xe.length:0,ke=0;q.morphAttributes.position!==void 0&&(ke=1),q.morphAttributes.normal!==void 0&&(ke=2),q.morphAttributes.color!==void 0&&(ke=3);let Je,tt,$e,Y;if(ue){let et=Mn[ue];Je=et.vertexShader,tt=et.fragmentShader}else Je=M.vertexShader,tt=M.fragmentShader,c.update(M),$e=c.getVertexShaderID(M),Y=c.getFragmentShaderID(M);let ee=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,Ee=k.isBatchedMesh===!0,qe=!!M.map,st=!!M.matcap,E=!!te,Q=!!M.aoMap,$=!!M.lightMap,J=!!M.bumpMap,Z=!!M.normalMap,le=!!M.displacementMap,ne=!!M.emissiveMap,he=!!M.metalnessMap,ze=!!M.roughnessMap,Be=M.anisotropy>0,b=M.clearcoat>0,_=M.dispersion>0,F=M.iridescence>0,H=M.sheen>0,j=M.transmission>0,X=Be&&!!M.anisotropyMap,Re=b&&!!M.clearcoatMap,oe=b&&!!M.clearcoatNormalMap,we=b&&!!M.clearcoatRoughnessMap,Ae=F&&!!M.iridescenceMap,ie=F&&!!M.iridescenceThicknessMap,ye=H&&!!M.sheenColorMap,Ne=H&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,me=!!M.specularColorMap,Ve=!!M.specularIntensityMap,I=j&&!!M.transmissionMap,ae=j&&!!M.thicknessMap,de=!!M.gradientMap,be=!!M.alphaMap,re=M.alphaTest>0,K=!!M.alphaHash,Ce=!!M.extensions,Oe=Fn;M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Oe=i.toneMapping);let at={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:Je,fragmentShader:tt,defines:M.defines,customVertexShaderID:$e,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:gi,alphaToCoverage:!!M.alphaToCoverage,map:qe,matcap:st,envMap:E,envMapMode:E&&te.mapping,envMapCubeUVHeight:V,aoMap:Q,lightMap:$,bumpMap:J,normalMap:Z,displacementMap:f&&le,emissiveMap:ne,normalMapObjectSpace:Z&&M.normalMapType===dh,normalMapTangentSpace:Z&&M.normalMapType===uh,metalnessMap:he,roughnessMap:ze,anisotropy:Be,anisotropyMap:X,clearcoat:b,clearcoatMap:Re,clearcoatNormalMap:oe,clearcoatRoughnessMap:we,dispersion:_,iridescence:F,iridescenceMap:Ae,iridescenceThicknessMap:ie,sheen:H,sheenColorMap:ye,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:me,specularIntensityMap:Ve,transmission:j,transmissionMap:I,thicknessMap:ae,gradientMap:de,opaque:M.transparent===!1&&M.blending===pi&&M.alphaToCoverage===!1,alphaMap:be,alphaTest:re,alphaHash:K,combine:M.combine,mapUv:qe&&x(M.map.channel),aoMapUv:Q&&x(M.aoMap.channel),lightMapUv:$&&x(M.lightMap.channel),bumpMapUv:J&&x(M.bumpMap.channel),normalMapUv:Z&&x(M.normalMap.channel),displacementMapUv:le&&x(M.displacementMap.channel),emissiveMapUv:ne&&x(M.emissiveMap.channel),metalnessMapUv:he&&x(M.metalnessMap.channel),roughnessMapUv:ze&&x(M.roughnessMap.channel),anisotropyMapUv:X&&x(M.anisotropyMap.channel),clearcoatMapUv:Re&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(M.sheenRoughnessMap.channel),specularMapUv:Pe&&x(M.specularMap.channel),specularColorMapUv:me&&x(M.specularColorMap.channel),specularIntensityMapUv:Ve&&x(M.specularIntensityMap.channel),transmissionMapUv:I&&x(M.transmissionMap.channel),thicknessMapUv:ae&&x(M.thicknessMap.channel),alphaMapUv:be&&x(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Z||Be),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(qe||be),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ke,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:qe&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xn,flipSided:M.side===Lt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ce&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&M.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function d(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)v.push(C),v.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(A(v,M),T(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function A(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function T(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){let v=g[M.type],C;if(v){let B=Mn[v];C=bh.clone(B.uniforms)}else C=M.uniforms;return C}function R(M,v){let C;for(let B=0,k=h.length;B<k;B++){let W=h[B];if(W.cacheKey===v){C=W,++C.usedTimes;break}}return C===void 0&&(C=new C_(i,v,M,s),h.push(C)),C}function w(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function P(M){c.remove(M)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:R,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:U}}function I_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function L_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $h(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,f,p,g,x,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function o(u,f,p,g,x,m){let d=a(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(u,f,p,g,x,m){let d=a(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||L_),n.length>1&&n.sort(f||Jh),r.length>1&&r.sort(f||Jh)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function D_(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new $h,i.set(n,[a])):r>=s.length?(a=new $h,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function U_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Xe};break;case"SpotLight":t={position:new L,direction:new L,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function N_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var F_=0;function B_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function z_(i){let e=new U_,t=N_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let r=new L,s=new mt,a=new mt;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,A=0,T=0,S=0,R=0,w=0,P=0;l.sort(B_);for(let M=0,v=l.length;M<v;M++){let C=l[M],B=C.color,k=C.intensity,W=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=B.r*k,u+=B.g*k,f+=B.b*k;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],k);P++}else if(C.isDirectionalLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let te=C.shadow,V=t.get(C);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=C.shadow.matrix,A++}n.directional[p]=G,p++}else if(C.isSpotLight){let G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(B).multiplyScalar(k),G.distance=W,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[x]=G;let te=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,te.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[x]=te.matrix,C.castShadow){let V=t.get(C);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=q,S++}x++}else if(C.isRectAreaLight){let G=e.get(C);G.color.copy(B).multiplyScalar(k),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let te=C.shadow,V=t.get(C);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=G,g++}else if(C.isHemisphereLight){let G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(k),G.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[d]=G,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==R||U.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=R,U.numLightProbes=P,n.version=F_++)}function c(l,h){let u=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let d=0,A=l.length;d<A;d++){let T=l[d];if(T.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(T.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function Kh(i){let e=new z_(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function O_(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Kh(i),e.set(r,[o])):s>=a.length?(o=new Kh(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var k_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function V_(i,e,t){let n=new zr,r=new ge,s=new ge,a=new pt,o=new ca({depthPacking:hh}),c=new la,l={},h=t.maxTextureSize,u={[Ln]:Lt,[Lt]:Ln,[xn]:xn},f=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:k_,fragmentShader:H_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new _n;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new gt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cc;let d=this.type;this.render=function(w,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Nn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=d!==yn&&this.type===yn,W=d===yn&&this.type!==yn;for(let q=0,G=w.length;q<G;q++){let te=w[q],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let ue=V.getFrameExtents();if(r.multiply(ue),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ue.x),r.x=s.x*ue.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ue.y),r.y=s.y*ue.y,V.mapSize.y=s.y)),V.map===null||k===!0||W===!0){let Me=this.type!==yn?{minFilter:jt,magFilter:jt}:{};V.map!==null&&V.map.dispose(),V.map=new mn(r.x,r.y,Me),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let xe=V.getViewportCount();for(let Me=0;Me<xe;Me++){let ke=V.getViewport(Me);a.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),B.viewport(a),V.updateMatrices(te,Me),n=V.getFrustum(),S(P,U,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===yn&&A(V,U),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,C)};function A(w,P){let U=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new mn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,U,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,U,p,x,null)}function T(w,P,U,M){let v=null,C=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)v=C;else if(v=U.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let B=v.uuid,k=P.uuid,W=l[B];W===void 0&&(W={},l[B]=W);let q=W[k];q===void 0&&(q=v.clone(),W[k]=q,P.addEventListener("dispose",R)),v=q}if(v.visible=P.visible,v.wireframe=P.wireframe,M===yn?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:u[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let B=i.properties.get(v);B.light=U}return v}function S(w,P,U,M,v){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===yn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);let k=e.update(w),W=w.material;if(Array.isArray(W)){let q=k.groups;for(let G=0,te=q.length;G<te;G++){let V=q[G],ue=W[V.materialIndex];if(ue&&ue.visible){let xe=T(w,ue,M,v);w.onBeforeShadow(i,w,P,U,k,xe,V),i.renderBufferDirect(U,null,k,xe,w,V),w.onAfterShadow(i,w,P,U,k,xe,V)}}}else if(W.visible){let q=T(w,W,M,v);w.onBeforeShadow(i,w,P,U,k,q,null),i.renderBufferDirect(U,null,k,q,w,null),w.onAfterShadow(i,w,P,U,k,q,null)}}let B=w.children;for(let k=0,W=B.length;k<W;k++)S(B[k],P,U,M,v)}function R(w){w.target.removeEventListener("dispose",R);for(let U in l){let M=l[U],v=w.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var G_={[Sa]:Ma,[ba]:wa,[Ta]:Aa,[mi]:Ea,[Ma]:Sa,[wa]:ba,[Aa]:Ta,[Ea]:mi};function W_(i,e){function t(){let I=!1,ae=new pt,de=null,be=new pt(0,0,0,0);return{setMask:function(re){de!==re&&!I&&(i.colorMask(re,re,re,re),de=re)},setLocked:function(re){I=re},setClear:function(re,K,Ce,Oe,at){at===!0&&(re*=Oe,K*=Oe,Ce*=Oe),ae.set(re,K,Ce,Oe),be.equals(ae)===!1&&(i.clearColor(re,K,Ce,Oe),be.copy(ae))},reset:function(){I=!1,de=null,be.set(-1,0,0,0)}}}function n(){let I=!1,ae=!1,de=null,be=null,re=null;return{setReversed:function(K){if(ae!==K){let Ce=e.get("EXT_clip_control");K?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ae=K;let Oe=re;re=null,this.setClear(Oe)}},getReversed:function(){return ae},setTest:function(K){K?ee(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(K){de!==K&&!I&&(i.depthMask(K),de=K)},setFunc:function(K){if(ae&&(K=G_[K]),be!==K){switch(K){case Sa:i.depthFunc(i.NEVER);break;case Ma:i.depthFunc(i.ALWAYS);break;case ba:i.depthFunc(i.LESS);break;case mi:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case Aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=K}},setLocked:function(K){I=K},setClear:function(K){re!==K&&(ae&&(K=1-K),i.clearDepth(K),re=K)},reset:function(){I=!1,de=null,be=null,re=null,ae=!1}}}function r(){let I=!1,ae=null,de=null,be=null,re=null,K=null,Ce=null,Oe=null,at=null;return{setTest:function(et){I||(et?ee(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(et){ae!==et&&!I&&(i.stencilMask(et),ae=et)},setFunc:function(et,En,pn){(de!==et||be!==En||re!==pn)&&(i.stencilFunc(et,En,pn),de=et,be=En,re=pn)},setOp:function(et,En,pn){(K!==et||Ce!==En||Oe!==pn)&&(i.stencilOp(et,En,pn),K=et,Ce=En,Oe=pn)},setLocked:function(et){I=et},setClear:function(et){at!==et&&(i.clearStencil(et),at=et)},reset:function(){I=!1,ae=null,de=null,be=null,re=null,K=null,Ce=null,Oe=null,at=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,T=null,S=null,R=null,w=null,P=new Xe(0,0,0),U=0,M=!1,v=null,C=null,B=null,k=null,W=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,te=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=te>=2);let ue=null,xe={},Me=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),Je=new pt().fromArray(Me),tt=new pt().fromArray(ke);function $e(I,ae,de,be){let re=new Uint8Array(4),K=i.createTexture();i.bindTexture(I,K),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<de;Ce++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(ae+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return K}let Y={};Y[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(mi),J(!1),Z(oc),ee(i.CULL_FACE),Q(Nn);function ee(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Se(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ie(I,ae){return u[I]!==ae?(i.bindFramebuffer(I,ae),u[I]=ae,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ae),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ee(I,ae){let de=p,be=!1;if(I){de=f.get(ae),de===void 0&&(de=[],f.set(ae,de));let re=I.textures;if(de.length!==re.length||de[0]!==i.COLOR_ATTACHMENT0){for(let K=0,Ce=re.length;K<Ce;K++)de[K]=i.COLOR_ATTACHMENT0+K;de.length=re.length,be=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,be=!0);be&&i.drawBuffers(de)}function qe(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let st={[Jn]:i.FUNC_ADD,[Bl]:i.FUNC_SUBTRACT,[zl]:i.FUNC_REVERSE_SUBTRACT};st[Ol]=i.MIN,st[kl]=i.MAX;let E={[Hl]:i.ZERO,[Vl]:i.ONE,[Gl]:i.SRC_COLOR,[qs]:i.SRC_ALPHA,[Jl]:i.SRC_ALPHA_SATURATE,[Yl]:i.DST_COLOR,[Xl]:i.DST_ALPHA,[Wl]:i.ONE_MINUS_SRC_COLOR,[Ys]:i.ONE_MINUS_SRC_ALPHA,[Zl]:i.ONE_MINUS_DST_COLOR,[ql]:i.ONE_MINUS_DST_ALPHA,[$l]:i.CONSTANT_COLOR,[Kl]:i.ONE_MINUS_CONSTANT_COLOR,[jl]:i.CONSTANT_ALPHA,[Ql]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(I,ae,de,be,re,K,Ce,Oe,at,et){if(I===Nn){x===!0&&(Se(i.BLEND),x=!1);return}if(x===!1&&(ee(i.BLEND),x=!0),I!==Fl){if(I!==m||et!==M){if((d!==Jn||S!==Jn)&&(i.blendEquation(i.FUNC_ADD),d=Jn,S=Jn),et)switch(I){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lc:i.blendFunc(i.ONE,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,T=null,R=null,w=null,P.set(0,0,0),U=0,m=I,M=et}return}re=re||ae,K=K||de,Ce=Ce||be,(ae!==d||re!==S)&&(i.blendEquationSeparate(st[ae],st[re]),d=ae,S=re),(de!==A||be!==T||K!==R||Ce!==w)&&(i.blendFuncSeparate(E[de],E[be],E[K],E[Ce]),A=de,T=be,R=K,w=Ce),(Oe.equals(P)===!1||at!==U)&&(i.blendColor(Oe.r,Oe.g,Oe.b,at),P.copy(Oe),U=at),m=I,M=!1}function $(I,ae){I.side===xn?Se(i.CULL_FACE):ee(i.CULL_FACE);let de=I.side===Lt;ae&&(de=!de),J(de),I.blending===pi&&I.transparent===!1?Q(Nn):Q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);let be=I.stencilWrite;o.setTest(be),be&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function Z(I){I!==Dl?(ee(i.CULL_FACE),I!==C&&(I===oc?i.cullFace(i.BACK):I===Ul?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),C=I}function le(I){I!==B&&(G&&i.lineWidth(I),B=I)}function ne(I,ae,de){I?(ee(i.POLYGON_OFFSET_FILL),(k!==ae||W!==de)&&(i.polygonOffset(ae,de),k=ae,W=de)):Se(i.POLYGON_OFFSET_FILL)}function he(I){I?ee(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function ze(I){I===void 0&&(I=i.TEXTURE0+q-1),ue!==I&&(i.activeTexture(I),ue=I)}function Be(I,ae,de){de===void 0&&(ue===null?de=i.TEXTURE0+q-1:de=ue);let be=xe[de];be===void 0&&(be={type:void 0,texture:void 0},xe[de]=be),(be.type!==I||be.texture!==ae)&&(ue!==de&&(i.activeTexture(de),ue=de),i.bindTexture(I,ae||Y[I]),be.type=I,be.texture=ae)}function b(){let I=xe[ue];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(I){Je.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function Ne(I){tt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),tt.copy(I))}function Pe(I,ae){let de=l.get(ae);de===void 0&&(de=new WeakMap,l.set(ae,de));let be=de.get(I);be===void 0&&(be=i.getUniformBlockIndex(ae,I.name),de.set(I,be))}function me(I,ae){let be=l.get(ae).get(I);c.get(ae)!==be&&(i.uniformBlockBinding(ae,be,I.__bindingPointIndex),c.set(ae,be))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ue=null,xe={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,T=null,S=null,R=null,w=null,P=new Xe(0,0,0),U=0,M=!1,v=null,C=null,B=null,k=null,W=null,Je.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:Se,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:qe,setBlending:Q,setMaterial:$,setFlipSided:J,setCullFace:Z,setLineWidth:le,setPolygonOffset:ne,setScissorTest:he,activeTexture:ze,bindTexture:Be,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Ae,texImage3D:ie,updateUBOMapping:Pe,uniformBlockBinding:me,texStorage2D:oe,texStorage3D:we,texSubImage2D:H,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:Re,scissor:ye,viewport:Ne,reset:Ve}}function X_(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ge,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):Lr("canvas")}function x(b,_,F){let H=1,j=Be(b);if((j.width>F||j.height>F)&&(H=F/Math.max(j.width,j.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let X=Math.floor(H*j.width),Re=Math.floor(H*j.height);u===void 0&&(u=g(X,Re));let oe=_?g(X,Re):u;return oe.width=X,oe.height=Re,oe.getContext("2d").drawImage(b,0,0,X,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+Re+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){i.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(b,_,F,H,j=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=_;if(_===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),_===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),_===i.RGBA){let Re=j?Pr:Ke.getTransfer(H);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=Re===nt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(b,_){let F;return b?_===null||_===ti||_===hr?F=i.DEPTH24_STENCIL8:_===Sn?F=i.DEPTH32F_STENCIL8:_===cr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ti||_===hr?F=i.DEPTH_COMPONENT24:_===Sn?F=i.DEPTH_COMPONENT32F:_===cr&&(F=i.DEPTH_COMPONENT16),F}function R(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==jt&&b.minFilter!==Wt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function w(b){let _=b.target;_.removeEventListener("dispose",w),U(_),_.isVideoTexture&&h.delete(_)}function P(b){let _=b.target;_.removeEventListener("dispose",P),v(_)}function U(b){let _=n.get(b);if(_.__webglInit===void 0)return;let F=b.source,H=f.get(F);if(H){let j=H[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(b),Object.keys(H).length===0&&f.delete(F)}n.remove(b)}function M(b){let _=n.get(b);i.deleteTexture(_.__webglTexture);let F=b.source,H=f.get(F);delete H[_.__cacheKey],a.memory.textures--}function v(b){let _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let j=0;j<_.__webglFramebuffer[H].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[H][j]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=b.textures;for(let H=0,j=F.length;H<j;H++){let X=n.get(F[H]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[H])}n.remove(b)}let C=0;function B(){C=0}function k(){let b=C;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),C+=1,b}function W(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function q(b,_){let F=n.get(b);if(b.isVideoTexture&&he(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){let H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,b,_);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function G(b,_){let F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Y(F,b,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function te(b,_){let F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Y(F,b,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function V(b,_){let F=n.get(b);if(b.version>0&&F.__version!==b.version){ee(F,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}let ue={[Zs]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[Js]:i.MIRRORED_REPEAT},xe={[jt]:i.NEAREST,[ch]:i.NEAREST_MIPMAP_NEAREST,[ts]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[Ia]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},Me={[fh]:i.NEVER,[xh]:i.ALWAYS,[ph]:i.LESS,[Mc]:i.LEQUAL,[mh]:i.EQUAL,[yh]:i.GEQUAL,[gh]:i.GREATER,[_h]:i.NOTEQUAL};function ke(b,_){if(_.type===Sn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Wt||_.magFilter===Ia||_.magFilter===ts||_.magFilter===ei||_.minFilter===Wt||_.minFilter===Ia||_.minFilter===ts||_.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ue[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ue[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ue[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,xe[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,xe[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jt||_.minFilter!==ts&&_.minFilter!==ei||_.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Je(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",w));let H=_.source,j=f.get(H);j===void 0&&(j={},f.set(H,j));let X=W(_);if(X!==b.__cacheKey){j[X]===void 0&&(j[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[X].usedTimes++;let Re=j[b.__cacheKey];Re!==void 0&&(j[b.__cacheKey].usedTimes--,Re.usedTimes===0&&M(_)),b.__cacheKey=X,b.__webglTexture=j[X].texture}return F}function tt(b,_,F){return Math.floor(Math.floor(b/F)/_)}function $e(b,_,F,H){let X=b.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,H,_.data);else{X.sort((ie,ye)=>ie.start-ye.start);let Re=0;for(let ie=1;ie<X.length;ie++){let ye=X[Re],Ne=X[ie],Pe=ye.start+ye.count,me=tt(Ne.start,_.width,4),Ve=tt(ye.start,_.width,4);Ne.start<=Pe+1&&me===Ve&&tt(Ne.start+Ne.count-1,_.width,4)===me?ye.count=Math.max(ye.count,Ne.start+Ne.count-ye.start):(++Re,X[Re]=Ne)}X.length=Re+1;let oe=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ie=0,ye=X.length;ie<ye;ie++){let Ne=X[ie],Pe=Math.floor(Ne.start/4),me=Math.ceil(Ne.count/4),Ve=Pe%_.width,I=Math.floor(Pe/_.width),ae=me,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ve,I,ae,de,F,H,_.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function Y(b,_,F){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);let j=Je(b,_),X=_.source;t.bindTexture(H,b.__webglTexture,i.TEXTURE0+F);let Re=n.get(X);if(X.version!==Re.__version||j===!0){t.activeTexture(i.TEXTURE0+F);let oe=Ke.getPrimaries(Ke.workingColorSpace),we=_.colorSpace===Bn?null:Ke.getPrimaries(_.colorSpace),Ae=_.colorSpace===Bn||oe===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ie=x(_.image,!1,r.maxTextureSize);ie=ze(_,ie);let ye=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type),Pe=T(_.internalFormat,ye,Ne,_.colorSpace,_.isVideoTexture);ke(H,_);let me,Ve=_.mipmaps,I=_.isVideoTexture!==!0,ae=Re.__version===void 0||j===!0,de=X.dataReady,be=R(_,ie);if(_.isDepthTexture)Pe=S(_.format===ur,_.type),ae&&(I?t.texStorage2D(i.TEXTURE_2D,1,Pe,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ye,Ne,null));else if(_.isDataTexture)if(Ve.length>0){I&&ae&&t.texStorage2D(i.TEXTURE_2D,be,Pe,Ve[0].width,Ve[0].height);for(let re=0,K=Ve.length;re<K;re++)me=Ve[re],I?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,me.width,me.height,ye,Ne,me.data):t.texImage2D(i.TEXTURE_2D,re,Pe,me.width,me.height,0,ye,Ne,me.data);_.generateMipmaps=!1}else I?(ae&&t.texStorage2D(i.TEXTURE_2D,be,Pe,ie.width,ie.height),de&&$e(_,ie,ye,Ne)):t.texImage2D(i.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ye,Ne,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Pe,Ve[0].width,Ve[0].height,ie.depth);for(let re=0,K=Ve.length;re<K;re++)if(me=Ve[re],_.format!==en)if(ye!==null)if(I){if(de)if(_.layerUpdates.size>0){let Ce=Pc(me.width,me.height,_.format,_.type);for(let Oe of _.layerUpdates){let at=me.data.subarray(Oe*Ce/me.data.BYTES_PER_ELEMENT,(Oe+1)*Ce/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Oe,me.width,me.height,1,ye,at)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,ie.depth,ye,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Pe,me.width,me.height,ie.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,ie.depth,ye,Ne,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Pe,me.width,me.height,ie.depth,0,ye,Ne,me.data)}else{I&&ae&&t.texStorage2D(i.TEXTURE_2D,be,Pe,Ve[0].width,Ve[0].height);for(let re=0,K=Ve.length;re<K;re++)me=Ve[re],_.format!==en?ye!==null?I?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,me.width,me.height,ye,me.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,me.width,me.height,ye,Ne,me.data):t.texImage2D(i.TEXTURE_2D,re,Pe,me.width,me.height,0,ye,Ne,me.data)}else if(_.isDataArrayTexture)if(I){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Pe,ie.width,ie.height,ie.depth),de)if(_.layerUpdates.size>0){let re=Pc(ie.width,ie.height,_.format,_.type);for(let K of _.layerUpdates){let Ce=ie.data.subarray(K*re/ie.data.BYTES_PER_ELEMENT,(K+1)*re/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,ye,Ne,Ce)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,Ne,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,ye,Ne,ie.data);else if(_.isData3DTexture)I?(ae&&t.texStorage3D(i.TEXTURE_3D,be,Pe,ie.width,ie.height,ie.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,Ne,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,ye,Ne,ie.data);else if(_.isFramebufferTexture){if(ae)if(I)t.texStorage2D(i.TEXTURE_2D,be,Pe,ie.width,ie.height);else{let re=ie.width,K=ie.height;for(let Ce=0;Ce<be;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,Pe,re,K,0,ye,Ne,null),re>>=1,K>>=1}}else if(Ve.length>0){if(I&&ae){let re=Be(Ve[0]);t.texStorage2D(i.TEXTURE_2D,be,Pe,re.width,re.height)}for(let re=0,K=Ve.length;re<K;re++)me=Ve[re],I?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ye,Ne,me):t.texImage2D(i.TEXTURE_2D,re,Pe,ye,Ne,me);_.generateMipmaps=!1}else if(I){if(ae){let re=Be(ie);t.texStorage2D(i.TEXTURE_2D,be,Pe,re.width,re.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Ne,ie)}else t.texImage2D(i.TEXTURE_2D,0,Pe,ye,Ne,ie);m(_)&&d(H),Re.__version=X.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ee(b,_,F){if(_.image.length!==6)return;let H=Je(b,_),j=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);let X=n.get(j);if(j.version!==X.__version||H===!0){t.activeTexture(i.TEXTURE0+F);let Re=Ke.getPrimaries(Ke.workingColorSpace),oe=_.colorSpace===Bn?null:Ke.getPrimaries(_.colorSpace),we=_.colorSpace===Bn||Re===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,ie=_.image[0]&&_.image[0].isDataTexture,ye=[];for(let K=0;K<6;K++)!Ae&&!ie?ye[K]=x(_.image[K],!0,r.maxCubemapSize):ye[K]=ie?_.image[K].image:_.image[K],ye[K]=ze(_,ye[K]);let Ne=ye[0],Pe=s.convert(_.format,_.colorSpace),me=s.convert(_.type),Ve=T(_.internalFormat,Pe,me,_.colorSpace),I=_.isVideoTexture!==!0,ae=X.__version===void 0||H===!0,de=j.dataReady,be=R(_,Ne);ke(i.TEXTURE_CUBE_MAP,_);let re;if(Ae){I&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Ve,Ne.width,Ne.height);for(let K=0;K<6;K++){re=ye[K].mipmaps;for(let Ce=0;Ce<re.length;Ce++){let Oe=re[Ce];_.format!==en?Pe!==null?I?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,0,0,Oe.width,Oe.height,Pe,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,Ve,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,0,0,Oe.width,Oe.height,Pe,me,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,Ve,Oe.width,Oe.height,0,Pe,me,Oe.data)}}}else{if(re=_.mipmaps,I&&ae){re.length>0&&be++;let K=Be(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Ve,K.width,K.height)}for(let K=0;K<6;K++)if(ie){I?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye[K].width,ye[K].height,Pe,me,ye[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,ye[K].width,ye[K].height,0,Pe,me,ye[K].data);for(let Ce=0;Ce<re.length;Ce++){let at=re[Ce].image[K].image;I?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,0,0,at.width,at.height,Pe,me,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,Ve,at.width,at.height,0,Pe,me,at.data)}}else{I?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pe,me,ye[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,Pe,me,ye[K]);for(let Ce=0;Ce<re.length;Ce++){let Oe=re[Ce];I?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,0,0,Pe,me,Oe.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,Ve,Pe,me,Oe.image[K])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),X.__version=j.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Se(b,_,F,H,j,X){let Re=s.convert(F.format,F.colorSpace),oe=s.convert(F.type),we=T(F.internalFormat,Re,oe,F.colorSpace),Ae=n.get(_),ie=n.get(F);if(ie.__renderTarget=_,!Ae.__hasExternalTextures){let ye=Math.max(1,_.width>>X),Ne=Math.max(1,_.height>>X);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,X,we,ye,Ne,_.depth,0,Re,oe,null):t.texImage2D(j,X,we,ye,Ne,0,Re,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ne(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,j,ie.__webglTexture,0,le(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,j,ie.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(b,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){let H=_.depthTexture,j=H&&H.isDepthTexture?H.type:null,X=S(_.stencilBuffer,j),Re=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=le(_);ne(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,X,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,b)}else{let H=_.textures;for(let j=0;j<H.length;j++){let X=H[j],Re=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),we=T(X.internalFormat,Re,oe,X.colorSpace),Ae=le(_);F&&ne(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,we,_.width,_.height):ne(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,we,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,we,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=n.get(_.depthTexture);H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);let j=H.__webglTexture,X=le(_);if(_.depthTexture.format===Ji)ne(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===ur)ne(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function qe(b){let _=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let H=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",j)};H.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=H}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let H=b.texture.mipmaps;H&&H.length>0?Ee(_.__webglFramebuffer[0],b):Ee(_.__webglFramebuffer,b)}else if(F){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),Ie(_.__webglDepthbuffer[H],b,!1);else{let j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}else{let H=b.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ie(_.__webglDepthbuffer,b,!1);else{let j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(b,_,F){let H=n.get(b);_!==void 0&&Se(H.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&qe(b)}function E(b){let _=b.texture,F=n.get(b),H=n.get(_);b.addEventListener("dispose",P);let j=b.textures,X=b.isWebGLCubeRenderTarget===!0,Re=j.length>1;if(Re||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let we=0;we<_.mipmaps.length;we++)F.__webglFramebuffer[oe][we]=i.createFramebuffer()}else F.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)F.__webglFramebuffer[oe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Re)for(let oe=0,we=j.length;oe<we;oe++){let Ae=n.get(j[oe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&ne(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){let we=j[oe];F.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);let Ae=s.convert(we.format,we.colorSpace),ie=s.convert(we.type),ye=T(we.internalFormat,Ae,ie,we.colorSpace,b.isXRRenderTarget===!0),Ne=le(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ye,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),ke(i.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let we=0;we<_.mipmaps.length;we++)Se(F.__webglFramebuffer[oe][we],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we);else Se(F.__webglFramebuffer[oe],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let oe=0,we=j.length;oe<we;oe++){let Ae=j[oe],ie=n.get(Ae),ye=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ye=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,ie.__webglTexture),ke(ye,Ae),Se(F.__webglFramebuffer,b,Ae,i.COLOR_ATTACHMENT0+oe,ye,0),m(Ae)&&d(ye)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,H.__webglTexture),ke(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let we=0;we<_.mipmaps.length;we++)Se(F.__webglFramebuffer[we],b,_,i.COLOR_ATTACHMENT0,oe,we);else Se(F.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,oe,0);m(_)&&d(oe),t.unbindTexture()}b.depthBuffer&&qe(b)}function Q(b){let _=b.textures;for(let F=0,H=_.length;F<H;F++){let j=_[F];if(m(j)){let X=A(b),Re=n.get(j).__webglTexture;t.bindTexture(X,Re),d(X),t.unbindTexture()}}}let $=[],J=[];function Z(b){if(b.samples>0){if(ne(b)===!1){let _=b.textures,F=b.width,H=b.height,j=i.COLOR_BUFFER_BIT,X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(b),oe=_.length>1;if(oe)for(let Ae=0;Ae<_.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let we=b.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);let ie=n.get(_[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,F,H,0,0,F,H,j,i.NEAREST),c===!0&&($.length=0,J.length=0,$.push(i.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&b.resolveDepthBuffer===!1&&($.push(X),J.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Ae=0;Ae<_.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);let ie=n.get(_[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function le(b){return Math.min(r.maxSamples,b.samples)}function ne(b){let _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function he(b){let _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function ze(b,_){let F=b.colorSpace,H=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==gi&&F!==Bn&&(Ke.getTransfer(F)===nt?(H!==en||j!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Be(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=st,this.setupRenderTarget=E,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ne}function q_(i,e){function t(n,r=Bn){let s,a=Ke.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===Da)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_c)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pc)return i.BYTE;if(n===mc)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===La)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===yc)return i.ALPHA;if(n===xc)return i.RGB;if(n===en)return i.RGBA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===ur)return i.DEPTH_STENCIL;if(n===vc)return i.RED;if(n===Na)return i.RED_INTEGER;if(n===Sc)return i.RG;if(n===Fa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===ns||n===is||n===rs||n===ss)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===Oa||n===ka||n===Ha)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ga||n===Wa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Va||n===Ga)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Wa)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===ja||n===Qa||n===eo||n===to||n===no||n===io||n===ro)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xa)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ro)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===ao||n===oo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===so)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===co||n===lo||n===ho||n===uo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===co)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new kr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wt({vertexShader:Y_,fragmentShader:Z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends Dn{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Gc,d={},A=t.getContextAttributes(),T=null,S=null,R=[],w=[],P=new ge,U=null,M=new Ft;M.viewport=new pt;let v=new Ft;v.viewport=new pt;let C=[M,v],B=new va,k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=R[Y];return ee===void 0&&(ee=new nr,R[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=R[Y];return ee===void 0&&(ee=new nr,R[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=R[Y];return ee===void 0&&(ee=new nr,R[Y]=ee),ee.getHandSpace()};function q(Y){let ee=w.indexOf(Y.inputSource);if(ee===-1)return;let Se=R[ee];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,l||a),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",te);for(let Y=0;Y<R.length;Y++){let ee=w[Y];ee!==null&&(w[Y]=null,R[Y].disconnect(ee))}k=null,W=null,m.reset();for(let Y in d)delete d[Y];e.setRenderTarget(T),p=null,f=null,u=null,r=null,S=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",G),r.addEventListener("inputsourceschange",te),A.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ie=null,Ee=null;A.depth&&(Ee=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=A.stencil?ur:Ji,Ie=A.stencil?hr:ti);let qe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(qe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new mn(f.textureWidth,f.textureHeight,{format:en,type:vn,depthTexture:new Or(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Se={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new mn(p.framebufferWidth,p.framebufferHeight,{format:en,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(Y){for(let ee=0;ee<Y.removed.length;ee++){let Se=Y.removed[ee],Ie=w.indexOf(Se);Ie>=0&&(w[Ie]=null,R[Ie].disconnect(Se))}for(let ee=0;ee<Y.added.length;ee++){let Se=Y.added[ee],Ie=w.indexOf(Se);if(Ie===-1){for(let qe=0;qe<R.length;qe++)if(qe>=w.length){w.push(Se),Ie=qe;break}else if(w[qe]===null){w[qe]=Se,Ie=qe;break}if(Ie===-1)break}let Ee=R[Ie];Ee&&Ee.connect(Se)}}let V=new L,ue=new L;function xe(Y,ee,Se){V.setFromMatrixPosition(ee.matrixWorld),ue.setFromMatrixPosition(Se.matrixWorld);let Ie=V.distanceTo(ue),Ee=ee.projectionMatrix.elements,qe=Se.projectionMatrix.elements,st=Ee[14]/(Ee[10]-1),E=Ee[14]/(Ee[10]+1),Q=(Ee[9]+1)/Ee[5],$=(Ee[9]-1)/Ee[5],J=(Ee[8]-1)/Ee[0],Z=(qe[8]+1)/qe[0],le=st*J,ne=st*Z,he=Ie/(-J+Z),ze=he*-J;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ze),Y.translateZ(he),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ee[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Be=st+he,b=E+he,_=le-ze,F=ne+(Ie-ze),H=Q*E/b*Be,j=$*E/b*Be;Y.projectionMatrix.makePerspective(_,F,H,j,Be,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Me(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,Se=Y.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),B.near=v.near=M.near=ee,B.far=v.far=M.far=Se,(k!==B.near||W!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,W=B.far),B.layers.mask=Y.layers.mask|6,M.layers.mask=B.layers.mask&3,v.layers.mask=B.layers.mask&5;let Ie=Y.parent,Ee=B.cameras;Me(B,Ie);for(let qe=0;qe<Ee.length;qe++)Me(Ee[qe],Ie);Ee.length===2?xe(B,M,v):B.projectionMatrix.copy(M.projectionMatrix),ke(Y,B,Ie)};function ke(Y,ee,Se){Se===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$i*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Y){return d[Y]};let Je=null;function tt(Y,ee){if(h=ee.getViewerPose(l||a),g=ee,h!==null){let Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ie=!1;Se.length!==B.cameras.length&&(B.cameras.length=0,Ie=!0);for(let E=0;E<Se.length;E++){let Q=Se[E],$=null;if(p!==null)$=p.getViewport(Q);else{let Z=u.getViewSubImage(f,Q);$=Z.viewport,E===0&&(e.setRenderTargetTextures(S,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(S))}let J=C[E];J===void 0&&(J=new Ft,J.layers.enable(E),J.viewport=new pt,C[E]=J),J.matrix.fromArray(Q.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Q.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set($.x,$.y,$.width,$.height),E===0&&(B.matrix.copy(J.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ie===!0&&B.cameras.push(J)}let Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let E=u.getDepthInformation(Se[0]);E&&E.isValid&&E.texture&&m.init(E,r.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let E=0;E<Se.length;E++){let Q=Se[E].camera;if(Q){let $=d[Q];$||($=new kr,d[Q]=$);let J=u.getCameraImage(Q);$.sourceTexture=J}}}}for(let Se=0;Se<R.length;Se++){let Ie=w[Se],Ee=R[Se];Ie!==null&&Ee!==void 0&&Ee.update(Ie,ee,l||a)}Je&&Je(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let $e=new jh;$e.setAnimationLoop(tt),this.setAnimationLoop=function(Y){Je=Y},this.dispose=function(){}}},wi=new gn,J_=new mt;function $_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,wc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,T,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,A,T):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Lt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Lt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let A=e.get(d),T=A.envMap,S=A.envMapRotation;T&&(m.envMap.value=T,wi.copy(S),wi.x*=-1,wi.y*=-1,wi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(J_.makeRotationFromEuler(wi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,A,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Lt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function K_(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){let S=T.program;n.uniformBlockBinding(A,S)}function l(A,T){let S=r[A.id];S===void 0&&(g(A),S=h(A),r[A.id]=S,A.addEventListener("dispose",m));let R=T.program;n.updateUBOMapping(A,R);let w=e.render.frame;s[A.id]!==w&&(f(A),s[A.id]=w)}function h(A){let T=u();A.__bindingPointIndex=T;let S=i.createBuffer(),R=A.__size,w=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let T=r[A.id],S=A.uniforms,R=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,P=S.length;w<P;w++){let U=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,v=U.length;M<v;M++){let C=U[M];if(p(C,w,M,R)===!0){let B=C.__offset,k=Array.isArray(C.value)?C.value:[C.value],W=0;for(let q=0;q<k.length;q++){let G=k[q],te=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,B+W,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,W),W+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,T,S,R){let w=A.value,P=T+"_"+S;if(R[P]===void 0)return typeof w=="number"||typeof w=="boolean"?R[P]=w:R[P]=w.clone(),!0;{let U=R[P];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return R[P]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(A){let T=A.uniforms,S=0,R=16;for(let P=0,U=T.length;P<U;P++){let M=Array.isArray(T[P])?T[P]:[T[P]];for(let v=0,C=M.length;v<C;v++){let B=M[v],k=Array.isArray(B.value)?B.value:[B.value];for(let W=0,q=k.length;W<q;W++){let G=k[W],te=x(G),V=S%R,ue=V%te.boundary,xe=V+ue;S+=ue,xe!==0&&R-xe<te.storage&&(S+=R-xe),B.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=te.storage}}}let w=S%R;return w>0&&(S+=R-w),A.__size=S,A.__cache={},this}function x(A){let T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){let T=A.target;T.removeEventListener("dispose",m);let S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(let A in r)i.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}var cs=class{constructor(e={}){let{canvas:t=vh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1;this._outputColorSpace=Mt;let w=0,P=0,U=null,M=-1,v=null,C=new pt,B=new pt,k=null,W=new Xe(0),q=0,G=t.width,te=t.height,V=1,ue=null,xe=null,Me=new pt(0,0,G,te),ke=new pt(0,0,G,te),Je=!1,tt=new zr,$e=!1,Y=!1,ee=new mt,Se=new L,Ie=new pt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function st(){return U===null?V:1}let E=n;function Q(y,D){return t.getContext(y,D)}try{let y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",re,!1),E===null){let D="webgl2";if(E=Q(D,y),E===null)throw Q(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let $,J,Z,le,ne,he,ze,Be,b,_,F,H,j,X,Re,oe,we,Ae,ie,ye,Ne,Pe,me,Ve;function I(){$=new mg(E),$.init(),Pe=new q_(E,$),J=new cg(E,$,e,Pe),Z=new W_(E,$),J.reversedDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),le=new yg(E),ne=new I_,he=new X_(E,$,Z,ne,J,Pe,le),ze=new hg(S),Be=new pg(S),b=new Tf(E),me=new ag(E,b),_=new gg(E,b,le,me),F=new vg(E,_,b,le),ie=new xg(E,J,he),oe=new lg(ne),H=new P_(S,ze,Be,$,J,me,oe),j=new $_(S,ne),X=new D_,Re=new O_($),Ae=new sg(S,ze,Be,Z,F,p,c),we=new V_(S,F,J),Ve=new K_(E,le,J,Z),ye=new og(E,$,le),Ne=new _g(E,$,le),le.programs=H.programs,S.capabilities=J,S.extensions=$,S.properties=ne,S.renderLists=X,S.shadowMap=we,S.state=Z,S.info=le}I();let ae=new Wc(S,E);this.xr=ae,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let y=$.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=$.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(G,te,!1))},this.getSize=function(y){return y.set(G,te)},this.setSize=function(y,D,z=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,te=D,t.width=Math.floor(y*V),t.height=Math.floor(D*V),z===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(G*V,te*V).floor()},this.setDrawingBufferSize=function(y,D,z){G=y,te=D,V=z,t.width=Math.floor(y*z),t.height=Math.floor(D*z),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(Me)},this.setViewport=function(y,D,z,O){y.isVector4?Me.set(y.x,y.y,y.z,y.w):Me.set(y,D,z,O),Z.viewport(C.copy(Me).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(ke)},this.setScissor=function(y,D,z,O){y.isVector4?ke.set(y.x,y.y,y.z,y.w):ke.set(y,D,z,O),Z.scissor(B.copy(ke).multiplyScalar(V).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(y){Z.setScissorTest(Je=y)},this.setOpaqueSort=function(y){ue=y},this.setTransparentSort=function(y){xe=y},this.getClearColor=function(y){return y.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,z=!0){let O=0;if(y){let N=!1;if(U!==null){let se=U.texture.format;N=se===Ba||se===Fa||se===Na}if(N){let se=U.texture.type,_e=se===vn||se===ti||se===cr||se===hr||se===Da||se===Ua,Te=Ae.getClearColor(),ve=Ae.getClearAlpha(),Ue=Te.r,Fe=Te.g,Le=Te.b;_e?(g[0]=Ue,g[1]=Fe,g[2]=Le,g[3]=ve,E.clearBufferuiv(E.COLOR,0,g)):(x[0]=Ue,x[1]=Fe,x[2]=Le,x[3]=ve,E.clearBufferiv(E.COLOR,0,x))}else O|=E.COLOR_BUFFER_BIT}D&&(O|=E.DEPTH_BUFFER_BIT),z&&(O|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Ae.dispose(),X.dispose(),Re.dispose(),ne.dispose(),ze.dispose(),Be.dispose(),F.dispose(),me.dispose(),Ve.dispose(),H.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",pn),ae.removeEventListener("sessionend",il),ai.stop()};function de(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let y=le.autoReset,D=we.enabled,z=we.autoUpdate,O=we.needsUpdate,N=we.type;I(),le.autoReset=y,we.enabled=D,we.autoUpdate=z,we.needsUpdate=O,we.type=N}function re(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function K(y){let D=y.target;D.removeEventListener("dispose",K),Ce(D)}function Ce(y){Oe(y),ne.remove(y)}function Oe(y){let D=ne.get(y).programs;D!==void 0&&(D.forEach(function(z){H.releaseProgram(z)}),y.isShaderMaterial&&H.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,z,O,N,se){D===null&&(D=Ee);let _e=N.isMesh&&N.matrixWorld.determinant()<0,Te=Ku(y,D,z,O,N);Z.setMaterial(O,_e);let ve=z.index,Ue=1;if(O.wireframe===!0){if(ve=_.getWireframeAttribute(z),ve===void 0)return;Ue=2}let Fe=z.drawRange,Le=z.attributes.position,Ye=Fe.start*Ue,it=(Fe.start+Fe.count)*Ue;se!==null&&(Ye=Math.max(Ye,se.start*Ue),it=Math.min(it,(se.start+se.count)*Ue)),ve!==null?(Ye=Math.max(Ye,0),it=Math.min(it,ve.count)):Le!=null&&(Ye=Math.max(Ye,0),it=Math.min(it,Le.count));let ft=it-Ye;if(ft<0||ft===1/0)return;me.setup(N,O,Te,z,ve);let ot,rt=ye;if(ve!==null&&(ot=b.get(ve),rt=Ne,rt.setIndex(ot)),N.isMesh)O.wireframe===!0?(Z.setLineWidth(O.wireframeLinewidth*st()),rt.setMode(E.LINES)):rt.setMode(E.TRIANGLES);else if(N.isLine){let De=O.linewidth;De===void 0&&(De=1),Z.setLineWidth(De*st()),N.isLineSegments?rt.setMode(E.LINES):N.isLineLoop?rt.setMode(E.LINE_LOOP):rt.setMode(E.LINE_STRIP)}else N.isPoints?rt.setMode(E.POINTS):N.isSprite&&rt.setMode(E.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($.get("WEBGL_multi_draw"))rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let De=N._multiDrawStarts,lt=N._multiDrawCounts,je=N._multiDrawCount,Ot=ve?b.get(ve).bytesPerElement:1,Ui=ne.get(O).currentProgram.getUniforms();for(let kt=0;kt<je;kt++)Ui.setValue(E,"_gl_DrawID",kt),rt.render(De[kt]/Ot,lt[kt])}else if(N.isInstancedMesh)rt.renderInstances(Ye,ft,N.count);else if(z.isInstancedBufferGeometry){let De=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,lt=Math.min(z.instanceCount,De);rt.renderInstances(Ye,ft,lt)}else rt.render(Ye,ft)};function at(y,D,z){y.transparent===!0&&y.side===xn&&y.forceSinglePass===!1?(y.side=Lt,y.needsUpdate=!0,bs(y,D,z),y.side=Ln,y.needsUpdate=!0,bs(y,D,z),y.side=xn):bs(y,D,z)}this.compile=function(y,D,z=null){z===null&&(z=y),d=Re.get(z),d.init(D),T.push(d),z.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),y!==z&&y.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let O=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let se=N.material;if(se)if(Array.isArray(se))for(let _e=0;_e<se.length;_e++){let Te=se[_e];at(Te,z,N),O.add(Te)}else at(se,z,N),O.add(se)}),d=T.pop(),O},this.compileAsync=function(y,D,z=null){let O=this.compile(y,D,z);return new Promise(N=>{function se(){if(O.forEach(function(_e){ne.get(_e).currentProgram.isReady()&&O.delete(_e)}),O.size===0){N(y);return}setTimeout(se,10)}$.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let et=null;function En(y){et&&et(y)}function pn(){ai.stop()}function il(){ai.start()}let ai=new jh;ai.setAnimationLoop(En),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(y){et=y,ae.setAnimationLoop(y),y===null?ai.stop():ai.start()},ae.addEventListener("sessionstart",pn),ae.addEventListener("sessionend",il),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(D),D=ae.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,D,U),d=Re.get(y,T.length),d.init(D),T.push(d),ee.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),tt.setFromProjectionMatrix(ee,cn,D.reversedDepth),Y=this.localClippingEnabled,$e=oe.init(this.clippingPlanes,Y),m=X.get(y,A.length),m.init(),A.push(m),ae.enabled===!0&&ae.isPresenting===!0){let se=S.xr.getDepthSensingMesh();se!==null&&To(se,D,-1/0,S.sortObjects)}To(y,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ue,xe),qe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,qe&&Ae.addToRenderList(m,y),this.info.render.frame++,$e===!0&&oe.beginShadows();let z=d.state.shadowsArray;we.render(z,y,D),$e===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=m.opaque,N=m.transmissive;if(d.setupLights(),D.isArrayCamera){let se=D.cameras;if(N.length>0)for(let _e=0,Te=se.length;_e<Te;_e++){let ve=se[_e];sl(O,N,y,ve)}qe&&Ae.render(y);for(let _e=0,Te=se.length;_e<Te;_e++){let ve=se[_e];rl(m,y,ve,ve.viewport)}}else N.length>0&&sl(O,N,y,D),qe&&Ae.render(y),rl(m,y,D);U!==null&&P===0&&(he.updateMultisampleRenderTarget(U),he.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(S,y,D),me.resetDefaultState(),M=-1,v=null,T.pop(),T.length>0?(d=T[T.length-1],$e===!0&&oe.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function To(y,D,z,O){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||tt.intersectsSprite(y)){O&&Ie.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ee);let _e=F.update(y),Te=y.material;Te.visible&&m.push(y,_e,Te,z,Ie.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||tt.intersectsObject(y))){let _e=F.update(y),Te=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ie.copy(y.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ie.copy(_e.boundingSphere.center)),Ie.applyMatrix4(y.matrixWorld).applyMatrix4(ee)),Array.isArray(Te)){let ve=_e.groups;for(let Ue=0,Fe=ve.length;Ue<Fe;Ue++){let Le=ve[Ue],Ye=Te[Le.materialIndex];Ye&&Ye.visible&&m.push(y,_e,Ye,z,Ie.z,Le)}}else Te.visible&&m.push(y,_e,Te,z,Ie.z,null)}}let se=y.children;for(let _e=0,Te=se.length;_e<Te;_e++)To(se[_e],D,z,O)}function rl(y,D,z,O){let N=y.opaque,se=y.transmissive,_e=y.transparent;d.setupLightsView(z),$e===!0&&oe.setGlobalState(S.clippingPlanes,z),O&&Z.viewport(C.copy(O)),N.length>0&&Ms(N,D,z),se.length>0&&Ms(se,D,z),_e.length>0&&Ms(_e,D,z),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function sl(y,D,z,O){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new mn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?lr:vn,minFilter:ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let se=d.state.transmissionRenderTarget[O.id],_e=O.viewport||C;se.setSize(_e.z*S.transmissionResolutionScale,_e.w*S.transmissionResolutionScale);let Te=S.getRenderTarget(),ve=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(se),S.getClearColor(W),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),qe&&Ae.render(z);let Fe=S.toneMapping;S.toneMapping=Fn;let Le=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),$e===!0&&oe.setGlobalState(S.clippingPlanes,O),Ms(y,z,O),he.updateMultisampleRenderTarget(se),he.updateRenderTargetMipmap(se),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let it=0,ft=D.length;it<ft;it++){let ot=D[it],rt=ot.object,De=ot.geometry,lt=ot.material,je=ot.group;if(lt.side===xn&&rt.layers.test(O.layers)){let Ot=lt.side;lt.side=Lt,lt.needsUpdate=!0,al(rt,z,O,De,lt,je),lt.side=Ot,lt.needsUpdate=!0,Ye=!0}}Ye===!0&&(he.updateMultisampleRenderTarget(se),he.updateRenderTargetMipmap(se))}S.setRenderTarget(Te,ve,Ue),S.setClearColor(W,q),Le!==void 0&&(O.viewport=Le),S.toneMapping=Fe}function Ms(y,D,z){let O=D.isScene===!0?D.overrideMaterial:null;for(let N=0,se=y.length;N<se;N++){let _e=y[N],Te=_e.object,ve=_e.geometry,Ue=_e.group,Fe=_e.material;Fe.allowOverride===!0&&O!==null&&(Fe=O),Te.layers.test(z.layers)&&al(Te,D,z,ve,Fe,Ue)}}function al(y,D,z,O,N,se){y.onBeforeRender(S,D,z,O,N,se),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(S,D,z,O,y,se),N.transparent===!0&&N.side===xn&&N.forceSinglePass===!1?(N.side=Lt,N.needsUpdate=!0,S.renderBufferDirect(z,D,O,N,y,se),N.side=Ln,N.needsUpdate=!0,S.renderBufferDirect(z,D,O,N,y,se),N.side=xn):S.renderBufferDirect(z,D,O,N,y,se),y.onAfterRender(S,D,z,O,N,se)}function bs(y,D,z){D.isScene!==!0&&(D=Ee);let O=ne.get(y),N=d.state.lights,se=d.state.shadowsArray,_e=N.state.version,Te=H.getParameters(y,N.state,se,D,z),ve=H.getProgramCacheKey(Te),Ue=O.programs;O.environment=y.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(y.isMeshStandardMaterial?Be:ze).get(y.envMap||O.environment),O.envMapRotation=O.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",K),Ue=new Map,O.programs=Ue);let Fe=Ue.get(ve);if(Fe!==void 0){if(O.currentProgram===Fe&&O.lightsStateVersion===_e)return cl(y,Te),Fe}else Te.uniforms=H.getUniforms(y),y.onBeforeCompile(Te,S),Fe=H.acquireProgram(Te,ve),Ue.set(ve,Fe),O.uniforms=Te.uniforms;let Le=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=oe.uniform),cl(y,Te),O.needsLights=Qu(y),O.lightsStateVersion=_e,O.needsLights&&(Le.ambientLightColor.value=N.state.ambient,Le.lightProbe.value=N.state.probe,Le.directionalLights.value=N.state.directional,Le.directionalLightShadows.value=N.state.directionalShadow,Le.spotLights.value=N.state.spot,Le.spotLightShadows.value=N.state.spotShadow,Le.rectAreaLights.value=N.state.rectArea,Le.ltc_1.value=N.state.rectAreaLTC1,Le.ltc_2.value=N.state.rectAreaLTC2,Le.pointLights.value=N.state.point,Le.pointLightShadows.value=N.state.pointShadow,Le.hemisphereLights.value=N.state.hemi,Le.directionalShadowMap.value=N.state.directionalShadowMap,Le.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Le.spotShadowMap.value=N.state.spotShadowMap,Le.spotLightMatrix.value=N.state.spotLightMatrix,Le.spotLightMap.value=N.state.spotLightMap,Le.pointShadowMap.value=N.state.pointShadowMap,Le.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=Fe,O.uniformsList=null,Fe}function ol(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=pr.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function cl(y,D){let z=ne.get(y);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Ku(y,D,z,O,N){D.isScene!==!0&&(D=Ee),he.resetTextureUnits();let se=D.fog,_e=O.isMeshStandardMaterial?D.environment:null,Te=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:gi,ve=(O.isMeshStandardMaterial?Be:ze).get(O.envMap||_e),Ue=O.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Fe=!!z.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Le=!!z.morphAttributes.position,Ye=!!z.morphAttributes.normal,it=!!z.morphAttributes.color,ft=Fn;O.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ft=S.toneMapping);let ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,rt=ot!==void 0?ot.length:0,De=ne.get(O),lt=d.state.lights;if($e===!0&&(Y===!0||y!==v)){let Rt=y===v&&O.id===M;oe.setState(O,y,Rt)}let je=!1;O.version===De.__version?(De.needsLights&&De.lightsStateVersion!==lt.state.version||De.outputColorSpace!==Te||N.isBatchedMesh&&De.batching===!1||!N.isBatchedMesh&&De.batching===!0||N.isBatchedMesh&&De.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&De.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&De.instancing===!1||!N.isInstancedMesh&&De.instancing===!0||N.isSkinnedMesh&&De.skinning===!1||!N.isSkinnedMesh&&De.skinning===!0||N.isInstancedMesh&&De.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&De.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&De.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&De.instancingMorph===!1&&N.morphTexture!==null||De.envMap!==ve||O.fog===!0&&De.fog!==se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==oe.numPlanes||De.numIntersection!==oe.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==Fe||De.morphTargets!==Le||De.morphNormals!==Ye||De.morphColors!==it||De.toneMapping!==ft||De.morphTargetsCount!==rt)&&(je=!0):(je=!0,De.__version=O.version);let Ot=De.currentProgram;je===!0&&(Ot=bs(O,D,N));let Ui=!1,kt=!1,xr=!1,ht=Ot.getUniforms(),Zt=De.uniforms;if(Z.useProgram(Ot.program)&&(Ui=!0,kt=!0,xr=!0),O.id!==M&&(M=O.id,kt=!0),Ui||v!==y){Z.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ht.setValue(E,"projectionMatrix",y.projectionMatrix),ht.setValue(E,"viewMatrix",y.matrixWorldInverse);let Nt=ht.map.cameraPosition;Nt!==void 0&&Nt.setValue(E,Se.setFromMatrixPosition(y.matrixWorld)),J.logarithmicDepthBuffer&&ht.setValue(E,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ht.setValue(E,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,kt=!0,xr=!0)}if(N.isSkinnedMesh){ht.setOptional(E,N,"bindMatrix"),ht.setOptional(E,N,"bindMatrixInverse");let Rt=N.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ht.setValue(E,"boneTexture",Rt.boneTexture,he))}N.isBatchedMesh&&(ht.setOptional(E,N,"batchingTexture"),ht.setValue(E,"batchingTexture",N._matricesTexture,he),ht.setOptional(E,N,"batchingIdTexture"),ht.setValue(E,"batchingIdTexture",N._indirectTexture,he),ht.setOptional(E,N,"batchingColorTexture"),N._colorsTexture!==null&&ht.setValue(E,"batchingColorTexture",N._colorsTexture,he));let Jt=z.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&ie.update(N,z,Ot),(kt||De.receiveShadow!==N.receiveShadow)&&(De.receiveShadow=N.receiveShadow,ht.setValue(E,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Zt.envMap.value=ve,Zt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(Zt.envMapIntensity.value=D.environmentIntensity),kt&&(ht.setValue(E,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&ju(Zt,xr),se&&O.fog===!0&&j.refreshFogUniforms(Zt,se),j.refreshMaterialUniforms(Zt,O,V,te,d.state.transmissionRenderTarget[y.id]),pr.upload(E,ol(De),Zt,he)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(pr.upload(E,ol(De),Zt,he),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ht.setValue(E,"center",N.center),ht.setValue(E,"modelViewMatrix",N.modelViewMatrix),ht.setValue(E,"normalMatrix",N.normalMatrix),ht.setValue(E,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Rt=O.uniformsGroups;for(let Nt=0,Eo=Rt.length;Nt<Eo;Nt++){let oi=Rt[Nt];Ve.update(oi,Ot),Ve.bind(oi,Ot)}}return Ot}function ju(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Qu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,D,z){let O=ne.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),ne.get(y.texture).__webglTexture=D,ne.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:z,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let z=ne.get(y);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0};let ed=E.createFramebuffer();this.setRenderTarget=function(y,D=0,z=0){U=y,w=D,P=z;let O=!0,N=null,se=!1,_e=!1;if(y){let ve=ne.get(y);if(ve.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(E.FRAMEBUFFER,null),O=!1;else if(ve.__webglFramebuffer===void 0)he.setupRenderTarget(y);else if(ve.__hasExternalTextures)he.rebindTextures(y,ne.get(y.texture).__webglTexture,ne.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Le=y.depthTexture;if(ve.__boundDepthTexture!==Le){if(Le!==null&&ne.has(Le)&&(y.width!==Le.image.width||y.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(y)}}let Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(_e=!0);let Fe=ne.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Fe[D])?N=Fe[D][z]:N=Fe[D],se=!0):y.samples>0&&he.useMultisampledRTT(y)===!1?N=ne.get(y).__webglMultisampledFramebuffer:Array.isArray(Fe)?N=Fe[z]:N=Fe,C.copy(y.viewport),B.copy(y.scissor),k=y.scissorTest}else C.copy(Me).multiplyScalar(V).floor(),B.copy(ke).multiplyScalar(V).floor(),k=Je;if(z!==0&&(N=ed),Z.bindFramebuffer(E.FRAMEBUFFER,N)&&O&&Z.drawBuffers(y,N),Z.viewport(C),Z.scissor(B),Z.setScissorTest(k),se){let ve=ne.get(y.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+D,ve.__webglTexture,z)}else if(_e){let ve=D;for(let Ue=0;Ue<y.textures.length;Ue++){let Fe=ne.get(y.textures[Ue]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ue,Fe.__webglTexture,z,ve)}}else if(y!==null&&z!==0){let ve=ne.get(y.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ve.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(y,D,z,O,N,se,_e,Te=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){Z.bindFramebuffer(E.FRAMEBUFFER,ve);try{let Ue=y.textures[Te],Fe=Ue.format,Le=Ue.type;if(!J.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-O&&z>=0&&z<=y.height-N&&(y.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Te),E.readPixels(D,z,O,N,Pe.convert(Fe),Pe.convert(Le),se))}finally{let Ue=U!==null?ne.get(U).__webglFramebuffer:null;Z.bindFramebuffer(E.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(y,D,z,O,N,se,_e,Te=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve)if(D>=0&&D<=y.width-O&&z>=0&&z<=y.height-N){Z.bindFramebuffer(E.FRAMEBUFFER,ve);let Ue=y.textures[Te],Fe=Ue.format,Le=Ue.type;if(!J.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ye),E.bufferData(E.PIXEL_PACK_BUFFER,se.byteLength,E.STREAM_READ),y.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Te),E.readPixels(D,z,O,N,Pe.convert(Fe),Pe.convert(Le),0);let it=U!==null?ne.get(U).__webglFramebuffer:null;Z.bindFramebuffer(E.FRAMEBUFFER,it);let ft=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Sh(E,ft,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ye),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,se),E.deleteBuffer(Ye),E.deleteSync(ft),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,z=0){let O=Math.pow(2,-z),N=Math.floor(y.image.width*O),se=Math.floor(y.image.height*O),_e=D!==null?D.x:0,Te=D!==null?D.y:0;he.setTexture2D(y,0),E.copyTexSubImage2D(E.TEXTURE_2D,z,0,0,_e,Te,N,se),Z.unbindTexture()};let td=E.createFramebuffer(),nd=E.createFramebuffer();this.copyTextureToTexture=function(y,D,z=null,O=null,N=0,se=null){se===null&&(N!==0?(Ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=N,N=0):se=0);let _e,Te,ve,Ue,Fe,Le,Ye,it,ft,ot=y.isCompressedTexture?y.mipmaps[se]:y.image;if(z!==null)_e=z.max.x-z.min.x,Te=z.max.y-z.min.y,ve=z.isBox3?z.max.z-z.min.z:1,Ue=z.min.x,Fe=z.min.y,Le=z.isBox3?z.min.z:0;else{let Jt=Math.pow(2,-N);_e=Math.floor(ot.width*Jt),Te=Math.floor(ot.height*Jt),y.isDataArrayTexture?ve=ot.depth:y.isData3DTexture?ve=Math.floor(ot.depth*Jt):ve=1,Ue=0,Fe=0,Le=0}O!==null?(Ye=O.x,it=O.y,ft=O.z):(Ye=0,it=0,ft=0);let rt=Pe.convert(D.format),De=Pe.convert(D.type),lt;D.isData3DTexture?(he.setTexture3D(D,0),lt=E.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(he.setTexture2DArray(D,0),lt=E.TEXTURE_2D_ARRAY):(he.setTexture2D(D,0),lt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,D.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,D.unpackAlignment);let je=E.getParameter(E.UNPACK_ROW_LENGTH),Ot=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ui=E.getParameter(E.UNPACK_SKIP_PIXELS),kt=E.getParameter(E.UNPACK_SKIP_ROWS),xr=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,ot.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ot.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ue),E.pixelStorei(E.UNPACK_SKIP_ROWS,Fe),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Le);let ht=y.isDataArrayTexture||y.isData3DTexture,Zt=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let Jt=ne.get(y),Rt=ne.get(D),Nt=ne.get(Jt.__renderTarget),Eo=ne.get(Rt.__renderTarget);Z.bindFramebuffer(E.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Z.bindFramebuffer(E.DRAW_FRAMEBUFFER,Eo.__webglFramebuffer);for(let oi=0;oi<ve;oi++)ht&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ne.get(y).__webglTexture,N,Le+oi),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ne.get(D).__webglTexture,se,ft+oi)),E.blitFramebuffer(Ue,Fe,_e,Te,Ye,it,_e,Te,E.DEPTH_BUFFER_BIT,E.NEAREST);Z.bindFramebuffer(E.READ_FRAMEBUFFER,null),Z.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||ne.has(y)){let Jt=ne.get(y),Rt=ne.get(D);Z.bindFramebuffer(E.READ_FRAMEBUFFER,td),Z.bindFramebuffer(E.DRAW_FRAMEBUFFER,nd);for(let Nt=0;Nt<ve;Nt++)ht?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Jt.__webglTexture,N,Le+Nt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Jt.__webglTexture,N),Zt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Rt.__webglTexture,se,ft+Nt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Rt.__webglTexture,se),N!==0?E.blitFramebuffer(Ue,Fe,_e,Te,Ye,it,_e,Te,E.COLOR_BUFFER_BIT,E.NEAREST):Zt?E.copyTexSubImage3D(lt,se,Ye,it,ft+Nt,Ue,Fe,_e,Te):E.copyTexSubImage2D(lt,se,Ye,it,Ue,Fe,_e,Te);Z.bindFramebuffer(E.READ_FRAMEBUFFER,null),Z.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Zt?y.isDataTexture||y.isData3DTexture?E.texSubImage3D(lt,se,Ye,it,ft,_e,Te,ve,rt,De,ot.data):D.isCompressedArrayTexture?E.compressedTexSubImage3D(lt,se,Ye,it,ft,_e,Te,ve,rt,ot.data):E.texSubImage3D(lt,se,Ye,it,ft,_e,Te,ve,rt,De,ot):y.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,se,Ye,it,_e,Te,rt,De,ot.data):y.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,se,Ye,it,ot.width,ot.height,rt,ot.data):E.texSubImage2D(E.TEXTURE_2D,se,Ye,it,_e,Te,rt,De,ot);E.pixelStorei(E.UNPACK_ROW_LENGTH,je),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ot),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ui),E.pixelStorei(E.UNPACK_SKIP_ROWS,kt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,xr),se===0&&D.generateMipmaps&&E.generateMipmap(lt),Z.unbindTexture()},this.initRenderTarget=function(y){ne.get(y).__webglFramebuffer===void 0&&he.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?he.setTextureCube(y,0):y.isData3DTexture?he.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?he.setTexture2DArray(y,0):he.setTexture2D(y,0),Z.unbindTexture()},this.resetState=function(){w=0,P=0,U=null,Z.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var Dt=Object.freeze([{id:"greed",title:"\u8CAA\u5A6A",english:"GREED",subtitle:"The Mad Dealer",color:"#b27343",art:"./assets/greed-first.webp",available:!0},{id:"pride",title:"\u50B2\u6162",english:"PRIDE",subtitle:"The Mirror Palace",color:"#8464ae",art:"./assets/pride-first.webp",available:!0},{id:"envy",title:"\u5AC9\u5992",english:"ENVY",subtitle:"The Watching Child",color:"#548c76",art:"./assets/envy-first.webp",available:!0},{id:"lust",title:"\u8272\u617E",english:"LUST",subtitle:"Cupid in the Clouds",color:"#c56b8a",art:"./assets/lust-cupid-r2.webp",available:!0,preview:!0},...[5,6,7].map(i=>({id:"sealed-"+i,title:"\u5C01\u5370 "+i,english:"SEALED "+i,color:"#8a8982",available:!1}))]);function iu(){return{index:0,phase:"browse",elapsed:0,rotate:!1,yaw:0,pitch:0,drop:{x:0,y:0},message:""}}function ru(i,e){return i.phase!=="browse"||!Dt[e]?!1:Dt[e].available?(i.index=e,i.drop={x:0,y:0},i.yaw=0,i.pitch=0,i.message="",!0):(i.message="sealed",!1)}function qc(i,e,t){return i.phase!=="browse"?!1:(i.drop.x=Math.max(-6,Math.min(6,e)),i.drop.y=Math.max(-6,Math.min(6,t)),!0)}function su(i,e,t){return i.phase!=="browse"?!1:(i.yaw=Math.max(-Math.PI,Math.min(Math.PI,i.yaw+e)),i.pitch=Math.max(-1.1,Math.min(1.1,i.pitch+t)),!0)}function au(i,{distance:e,aligned:t=!0}){return i.phase!=="browse"?!1:e>.72||!t?(i.drop={x:0,y:0},i.message=t?"returned":"align",!1):Yc(i)}function Yc(i){return i.phase!=="browse"||!Dt[i.index].available?!1:(i.phase="insert",i.elapsed=0,i.rotate=!1,i.message="",!0)}function ou(i,e,{paused:t=!1,reduced:n=!1}={}){t||(i.elapsed+=Math.max(0,Math.min(250,e)),i.phase==="insert"&&i.elapsed>=(n?300:1250)?(i.phase="boot",i.elapsed=0):i.phase==="boot"&&i.elapsed>=(n?250:2100)&&(i.phase="playing",i.elapsed=0))}function cu(i){return i.phase==="browse"?!1:(i.phase="browse",i.elapsed=0,i.drop={x:0,y:0},i.yaw=0,i.pitch=0,i.message="",!0)}var ls=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));var lu="varying vec3 vNormal;varying vec3 vView;varying vec3 vWorld;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vNormal=normalize(normalMatrix*normal);vView=-mv.xyz;vWorld=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*mv;}",hu=`uniform vec3 uColor;uniform float uGloss;varying vec3 vNormal;varying vec3 vView;varying vec3 vWorld;float grain(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,42.319)))*43758.5453);}void main(){vec3 n=normalize(vNormal),v=normalize(vView),l=normalize(vec3(-.6,.85,1.2));float diffuse=max(dot(n,l),0.);float sheen=pow(max(dot(n,normalize(l+v)),0.),mix(16.,90.,uGloss));float rim=pow(1.-max(dot(n,v),0.),2.5);vec3 col=uColor*(.54+.55*diffuse)+vec3(1.,.95,.88)*sheen*.24+rim*.055;col+=(grain(vWorld*370.)-.5)*.017;gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,Zc="varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;void main(){vUv=uv;vNormal=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vView=-mv.xyz;gl_Position=projectionMatrix*mv;}",uu=`uniform sampler2D uMap;uniform float uTime;uniform float uReduced;varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;void main(){vec4 ink=texture2D(uMap,vUv);float angle=dot(normalize(vNormal),normalize(vView));float strip=pow(max(0.,1.-abs(vUv.x*.8+vUv.y*.35-(1.-angle)*1.2-.53)),26.);vec3 spectrum=.5+.5*cos(vec3(0.,2.,4.)+(vUv.x+vUv.y)*6.+(1.-angle)*15.);vec3 col=ink.rgb+strip*spectrum*.14;col+=pow(1.-angle,3.)*.12;gl_FragColor=vec4(col,ink.a);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,du=`uniform sampler2D uMap;uniform float uTime;uniform float uBoot;uniform float uReduced;varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;void main(){vec2 uv=vUv;vec3 col=texture2D(uMap,uv).rgb;float scan=.955+.045*cos(uv.y*448.*3.14159);float vignette=1.-.17*length((uv-.5)*1.25);col*=scan*vignette;float glare=pow(max(0.,1.-abs(uv.x*.5+uv.y*.35-.64)),15.);col+=vec3(.08,.09,.06)*glare;col+=vec3(.025,.04,.018)*uBoot;gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,fu="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",pu="uniform float uProgress;uniform float uAspect;uniform vec3 uTone;uniform vec3 uPaper;uniform float uReduced;varying vec2 vUv;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){float p=clamp(uProgress,0.,1.);vec2 uv=(vUv-.5)*vec2(uAspect,1.);vec2 cell=floor(uv*180.);vec2 px=cell/180.;float r=length(px),a=atan(px.y,px.x);float ring=exp(-abs(r-(.04+p*.92))*48.);float trails=pow(max(0.,cos(a*16.+r*24.-p*5.)),28.)*exp(-r*1.6);float stars=step(.995,hash(cell))*smoothstep(0.,.3,p)*(1.-smoothstep(.7,1.,p));float aperture=smoothstep(p*.9-.09,p*.9+.09,r);vec3 color=mix(uPaper*.08,vec3(.055,.025,.10),aperture);color+=uTone*(ring*1.2+trails*.26+stars*.85)*(1.-uReduced);float glow=exp(-r*r*12.)*sin(p*3.14159);color+=vec3(.36,.22,.11)*glow;gl_FragColor=vec4(color,1.);}";var Ri=["zh-Hant","zh-Hans","en","ja","ko","pt","es"],Jc={"zh-Hant":{dangerEffect:"\u5371\u96AA\u63D0\u793A\u6548\u679C",screenShake:"\u6296\u52D5",noScreenShake:"\u4E0D\u6296\u52D5",crazyDifficulty:"\u96E3\u5EA6",gameMenu:"\u904A\u6232\u9078\u55AE",bgmVolume:"BGM \u97F3\u91CF",sfxVolume:"\u8072\u6548\u97F3\u91CF",quitToMenu:"\u9000\u51FA\u56DE\u4E3B\u9078\u55AE",quitConfirm:"\u78BA\u5B9A\u9000\u51FA\uFF1F\u9019\u6B21\u904A\u6232\u5C07\u6703\u7D50\u675F\u3002",cancel:"\u53D6\u6D88",confirmExit:"\u78BA\u5B9A\u9000\u51FA",crazyMenuLive:"\u6230\u9B25\u7E7C\u7E8C\u9032\u884C\uFF0C\u9019\u500B\u9078\u55AE\u4E0D\u6703\u66AB\u505C Boss\u3002",crazyGreed:"\u8CAA\u5A6A",crazyCatPlayerWarning:"\u8C93\u4F38\u722A\uFF01\u5DE6\u53F3\u8EB2\u907F\uFF01",crazyCatBossWarning:"\u8C93\u76EF\u4E0A\u838A\u5BB6\u2026\u2026",crazyCatGiftWarning:"\u8C93\u5E36\u4E86\u9B5A\u4E7E\uFF01",crazyCatBlocksWarning:"\u8C93\u76EF\u4E0A\u65B9\u584A\u2026\u2026",crazyCatSmash:"\u8C93\u6253\u788E\u65B9\u584A\uFF01",crazyCatBossScratch:"\u8C93\u6293\u50B7 Boss",crazyCatPlayerScratch:"\u88AB\u8C93\u6293\u50B7",crazyCatDodge:"\u8EB2\u904E\u8C93\u722A\uFF01",crazyCatGift:"\u9B5A\u4E7E\u56DE\u8840",crazySevenSins:"\u4E03\u5927\u7F6A",crazyChooseBoss:"\u4F9D\u5E8F\u6311\u6230\u4E03\u5927\u7F6A \xB7 \u901A\u95DC\u5F8C\u63ED\u958B\u4E0B\u4E00\u95DC",crazyChallenge:"\u6311\u6230",crazyLocked:"\u672A\u89E3\u9396",crazyCleared:"\u5B8C\u6574\u901A\u95DC",sinPride:"\u50B2\u6162",sinEnvy:"\u5AC9\u5992",sinWrath:"\u61A4\u6012",sinLust:"\u8272\u617E",sinGluttony:"\u66B4\u98DF",sinSloth:"\u6020\u60F0",crazyGreedLore:"\u838A\u5BB6\u60F3\u8981\u4E00\u5207\u3002\u6311\u6230\u8CAA\u5A6A\u7684\u8CED\u5C40\u3002",crazyTrueName:"\u566C\u91D1\u838A\u5BB6",crazyTrueForm:"\u8CAA\u5A6A\u771F\u8EAB\u30FB\u566C\u91D1\u838A\u5BB6",crazyTransform:"\u9762\u5177\u788E\u88C2",crazyNeverEnough:"\u300C\u9084\u4E0D\u5920\u2026\u2026\u5168\u90E8\u90FD\u662F\u6211\u7684\u3002\u300D",crazyTransformSub:"\u91D1\u5EAB\u5DF2\u958B\uFF0C\u8FFD\u50B5\u958B\u59CB\u3002",crazyGreedBroken:"\u8CAA\u5A6A\uFF0C\u64CA\u7834\u3002",crazyVictorySub:"\u838A\u5BB6\u7684\u91D1\u5EAB\uFF0C\u7D42\u65BC\u4E0D\u518D\u5C6C\u65BC\u4ED6\u3002",crazySkip:"\u8DF3\u904E",crazyContinue:"\u7E7C\u7E8C",crazyClearUnlock:"\u5DF2\u89E3\u9396\u566C\u91D1\u838A\u5BB6\u526A\u5F71",crazyHealth:"\u5269\u9918\u8840\u91CF",crazyCounters:"\u53CD\u64CA\u6B21\u6578",crazyCoins:"\u6536\u96C6\u786C\u5E63",crazyDamageTaken:"\u627F\u53D7\u50B7\u5BB3",crazyHealed:"\u56DE\u5FA9\u8840\u91CF",crazyMode_jump:"\u8DF3\u8E8D\u8FFD\u50B5",crazyMode_coins:"\u91D1\u5E63\u6D2A\u6D41",crazyMode_motion:"\u52D5\uFF0F\u505C\u5951\u7D04",crazyMode_vortex:"\u8CAA\u5A6A\u5438\u5F15",crazyMode_roulette:"\u8F2A\u76E4\u8FFD\u6BBA",crazyMode_pusher:"\u63A8\u5E63\u734E\u52F5",crazyHint_jump:"\u5DE6\u53F3\u79FB\u52D5\uFF0C\u7A7A\u767D\u9375\uFF0F\u8DF3\u8E8D\u907F\u958B\u8CBC\u5730\u91D1\u689D\uFF1B\u9577\u6309\u8DF3\u5F97\u8F03\u9AD8\u3002\u4E0A\u65B9\u969C\u7919\u5247\u7559\u5728\u5730\u9762\uFF0C\u6BCF\u5B58\u6D3B\u5169\u79D2\u53CD\u64CA\u3002",crazyHint_coins:"\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52D5\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002\u907F\u958B\u91D1\u5E63\u6D2A\u6D41\uFF0C\u7DA0\u5E63\u56DE\u5FA9 3 HP\uFF1B\u7D05\u8272\u7BAD\u982D\u5148\u9810\u544A\u3002",crazyHint_motion:"\u6383\u7DDA\u53EF\u5F9E\u516B\u500B\u65B9\u5411\u4F86\uFF1A\u85CD\u8272\u79FB\u52D5\u3001\u6A59\u8272\u505C\u4F4F\uFF0C\u4E5F\u53EF\u79FB\u51FA\u6383\u7DDA\uFF1B\u7A7A\u767D\u9375\u885D\u523A\u3002",crazyHint_vortex:"\u91D1\u5EAB\u6703\u5438\u5F15\u6838\u5FC3\uFF0C\u53CD\u65B9\u5411\u62B5\u6297\u4E26\u907F\u958B\u91D1\u5E63\u3002\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52D5\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002",crazyHint_roulette:"\u6BCF\u6CE2 1\u20133 \u689D\u9810\u544A\u5C04\u7DDA\uFF0C\u53EF\u80FD\u4F9D\u6B21\u767C\u5C04\u3002\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u907F\u958B\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002",crazyHint_pusher:"\u5DE6\u53F3\uFF0F\u9EDE\u9078\u4F4D\u7F6E\uFF0C\u7A7A\u767D\u9375\u6295\u5E63\u3002\u7DA0\u5E63\u56DE\u8840\u3001\u7D05\u5E63\xD72\u30017\u5E63\u62BD JP\uFF1BC \u6536\u4E0B\uFF0C\u5269 2 \u79D2\u6536\u5C3E\u3002",crazyJump:"\u8DF3\u8E8D",crazyJumpHint:"SPACE \u8DF3\u8E8D \xB7 \u9577\u6309\u8DF3\u9AD8",crazyKeepMoving:"\u2192 \u85CD\u8272\uFF1A\u4FDD\u6301\u79FB\u52D5",crazyStayStill:"\u25A0 \u6A59\u8272\uFF1A\u505C\u4F4F",crazyPusherJackpot:"Jackpot\uFF01",crazyPusherStock:"\u786C\u5E63",crazyPusherSettle:"\u505C\u6B62\u6295\u5E63 \xB7 \u6536\u5C3E\u4E2D",crazyPusherReward:"\u53CD\u64CA\u734E\u52F5 \xB7 \u672C\u56DE\u5408\u4E0D\u53D7\u50B7",crazyPusherAgain:"\u518D\u63A8\u4E00\u6B21",crazyInsertCoin:"\u6295\u5E63",crazyPusherRisk:"\u518D\u63A8\u6311\u6230\uFF1A60% \u4FDD\u7559\uFF0C\u5426\u5247\u672A\u6536\u734E\u52F5\u6E1B\u534A",crazyPusherSettled:"\u63A8\u5E63\u6311\u6230\u5DF2\u7D50\u7B97",crazyPusherBank:"\u63A8\u5E63\u734E\u52F5\u5DF2\u6536\u4E0B",crazyDashSound:"\u885D\u523A",crazyLaserSound:"\u8F2A\u76E4\u958B\u706B",crazyVictorySound:"\u91D1\u5E63\u7051\u843D",crazyCoinSound:"\u786C\u5E63",crazyPusherInsertSound:"\u6295\u5E63",crazyPusherDropSound:"\u786C\u5E63\u843D\u4E0B",crazyPusherStepSound:"\u843D\u5230\u4E0B\u5C64",crazyCardSound:"\u9078\u724C",crazyTileSound:"\u9078\u724C",crazyReelStop:"\u8F49\u8F2A\u505C\u4E0B",crazyLaunchSound:"\u767C\u5C04",crazyPegSound:"\u91D8\u677F\u53CD\u5F48",crazyFlipperSound:"\u5F48\u677F",crazyBossBattle:"Boss \u6230",crazyPreviewHint:"\u518D\u6309 Crazy \u9032\u5834\u3002100 HP \xB7 \u4E09\u968E\u6BB5 \xB7 \u7121\u5012\u6578\u7B49\u5F85\u3002",crazyDealer:"\u72C2\u5BB4\u838A\u5BB6",crazyOpening:"\u838A\u5BB6\u958B\u5C40\uFF0C\u6E96\u5099\u53CD\u64CA\u3002",crazyPhaseLabel:"\u968E\u6BB5",crazyPhase:"\u65B0\u968E\u6BB5\uFF01\u56DE\u5FA9\u8840\u91CF\u3002",crazySwitch:"\u65B0\u73A9\u6CD5\uFF0C\u63A5\u6230\uFF01",crazyHurt:"\u53D7\u50B7\uFF01",crazyHeal:"\u56DE\u8840",crazyHit:"Boss \u50B7\u5BB3",crazyGuard:"\u838A\u5BB6\u9632\u79A6 \xB7 \u7E7C\u7E8C\u53CD\u64CA",crazyCounter:"\u53CD\u64CA\u6210\u529F\uFF01",crazyAttackWarning:"\u547D\u4E2D\u963B\u6B62\u653B\u64CA\uFF01",crazyBossAttack:"\u838A\u5BB6\u653B\u64CA",crazyWrong:"\u914D\u5C0D\u932F\u8AA4",crazyMiss:"\u5931\u624B",crazyRiskLost:"\u5192\u96AA\u5931\u6557",crazyBankOrRisk:"\u6536\u4E0B\u9084\u662F\u7FFB\u500D\uFF1F",crazyTopout:"\u5835\u9802\uFF1A\u6263 20 HP",crazyBallLost:"\u6F0F\u7403",crazyCatWarning:"\u55B5\u2026\u2026\u8C93\u722A\u4F86\u4E86\uFF01",crazyCatSwipe:"\u8C93\u8C93\u6417\u86CB\uFF01",crazyTimeout:"\u838A\u5BB6\u6536\u684C\uFF0C\u6642\u9593\u8017\u76E1\u3002",crazyTimeoutRound:"\u672C\u56DE\u5408\u672A\u547D\u4E2D",crazyVictory:"\u64CA\u6557\u838A\u5BB6\uFF01",crazyDefeat:"\u8840\u91CF\u8017\u76E1",crazyStop:"\u505C\u8F2A",crazyPending:"\u5F85\u6536\u734E\u52F5",crazyPull:"\u62C9\u687F",crazyBankHint:"C\uFF0F\u6536\u4E0B\uFF1A\u9818\u734E\u4E26\u56DE\u5FA9 4 HP",crazyRiskHint:"\u7A7A\u767D\u9375\uFF0F\u7FFB\u500D\uFF1A\u6210\u529F 55%\uFF0C\u5931\u6557 \u221210 HP",crazyFindPair:"\u627E\u5169\u5F35",crazyPairHint:"\u9EDE\u9078\u724C\uFF0C\u6216\u5DE6\u53F3\u9078\u64C7\uFF0B\u7A7A\u767D\u9375",crazyAction:"\u884C\u52D5",crazyBank:"\u6536\u4E0B",crazyReset:"\u91CD\u9078",crazyMode_bridge:"\u67B6\u584A",crazyMode_sand:"\u6C99\u584A",crazyMode_slots:"\u89D2\u5B50\u6A5F",crazyMode_tiger:"\u8001\u864E\u6A5F",crazyMode_pachinko:"\u62CD\u6E05\u54E5",crazyMode_cards:"\u5564\u724C",crazyMode_mahjong:"\u9EBB\u5C07",crazyMode_breakout:"Brickout",crazyMode_pinball:"\u5F48\u73E0\u53F0",crazyMode_bbtan:"BBTAN",crazyHint_bridge:"\u6D88\u884C\u653B\u64CA\u3002\u5DE6\u53F3\u79FB\u52D5\uFF0CX\uFF0FZ \u65CB\u8F49\uFF0CC \u4FDD\u7559\uFF0C\u7A7A\u767D\u9375\u843D\u4E0B\u3002",crazyHint_sand:"\u540C\u8272\u6C99\u7C92\u9023\u901A\u5DE6\u53F3\u5169\u908A\u5373\u53EF\u653B\u64CA\uFF0C\u64CD\u4F5C\u540C\u67B6\u584A\u3002",crazyHint_slots:"\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u9010\u8F2A\u505C\u8F49\uFF0C\u914D\u6210\u5169\u500B\u6216\u4E09\u500B\u540C\u5716\u6848\u3002",crazyHint_tiger:"\u62C9\u687F\u7B49\u4E09\u8F2A\u505C\u4E0B\u3002\u4E2D\u734E\u5F8C\u300C\u6536\u4E0B\u300D\u9818\u734E\u56DE\u8840\uFF0C\u6216\u300C\u7FFB\u500D\u300D\u5192\u96AA\uFF1A55% \u6210\u529F\uFF0C\u5931\u6557\u5931\u734E\u6263 10 HP\u3002",crazyHint_pachinko:"\u5DE6\u53F3\u6216\u9EDE\u9078\u7784\u6E96\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u767C\u7403\u3002\u69FD\u4F4D\u53CA\u6578\u503C\u6BCF\u56DE\u5408\u96A8\u6A5F\uFF1B\u7DA0\u69FD\u56DE\u8840\u3001\u7D2B\u69FD\u653B\u64CA\u3001\u7D05\u69FD\u6263\u8840\u3002",crazyHint_cards:"\u5012\u6578\u5167\u9078\u6307\u5B9A\u6578\u5B57\u5C0D\u5B50\uFF01\u9EDE\u724C\u6216\u5DE6\u53F3\uFF0B\u9078\u724C\uFF1B\u9023\u7E8C\u7B54\u5C0D\u52A0\u50B7\u5BB3\uFF0C\u8D85\u6642\uFF0F\u932F\u724C\u6263 5 HP\u3002",crazyHint_mahjong:"\u5012\u6578\u5167\u914D\u51FA\u4E0A\u65B9\u6307\u5B9A\u724C\uFF0C\u6BCF\u5C0D\u6539\u8B8A\u76EE\u6A19\uFF01\u9EDE\u724C\u6216\u5DE6\u53F3\uFF0B\u9078\u724C\uFF1B\u9023\u7E8C\u914D\u5C0D\u52A0\u50B7\u5BB3\uFF0CC \u91CD\u9078\u3002",crazyHint_breakout:"\u5DE6\u53F3\u79FB\u52D5\u7403\u677F\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u767C\u7403\u3002\u6253\u788E\u65B9\u584A\u653B\u64CA\u3002",crazyHint_pinball:"\u9577\u6309\u5DE6\u53F3\u6258\u8D77\u5F48\u677F\u3002\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u767C\u7403\u3002",crazyHint_bbtan:"\u5DE6\u53F3\u7784\u6E96\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u767C\u5C04\u7403\u7FA4\u3002",crazyMode_dodge:"\u838A\u5BB6\u8FFD\u6BBA",crazyHint_dodge:"\u65B9\u5411\u9375\uFF0F\u89F8\u63A7\u65B9\u5411\u79FB\u52D5\uFF0C\u6216\u62D6\u66F3\u6838\u5FC3\u3002\u7A7A\u767D\u9375\uFF0F\u885D\u523A\u53EF\u77ED\u66AB\u7121\u6575\uFF1B\u907F\u958B\u7D05\u8272\u9810\u8B66\uFF0C\u627E\u7F3A\u53E3\uFF0C\u6BCF\u5B58\u6D3B\u5169\u79D2\u53CD\u64CA\u3002",crazyDash:"\u885D\u523A",crazyDashReady:"\u885D\u523A\u5C31\u7DD2 \xB7 SPACE",crazyDodgeHit:"\u88AB\u653B\u64CA\u547D\u4E2D",crazyRisk:"\u7FFB\u500D",crazyRolling:"\u8F49\u8F2A\u4E2D\u2026",crazyRiskRolling:"\u7FFB\u500D\u6311\u6230\u4E2D\u2026",crazyLeverPrompt:"\u6309\u300C\u62C9\u687F\u300D\u958B\u59CB\u8F49\u8F2A",crazyOdds:"\u7FFB\u500D\u6210\u529F 55% \xB7 \u5931\u6557\u5931\u53BB\u734E\u52F5 \u221210 HP",crazyPairTimeout:"\u9078\u724C\u8D85\u6642",crazyIncoming:"\u838A\u5BB6\u51FA\u62DB\uFF01",crazySelect:"\u9078\u724C",crazyUp:"\u4E0A",title:"\u67B6\u584A",back:"\u56DE\u4F5C\u54C1\u5217\u8868",marathon:"\u99AC\u62C9\u677E",sprint:"40 \u884C\u7AF6\u901F",settings:"\u8A2D\u5B9A",donate:"\u8D0A\u52A9",language:"\u8A9E\u8A00",volume:"\u97F3\u91CF",theme:"\u80CC\u666F",touch:"\u89F8\u5C4F",touchAuto:"\u81EA\u52D5",touchOn:"\u958B",touchOff:"\u95DC",dark:"\u9ED1\u5E95",light:"\u767D\u5E95",close:"\u8FD4\u56DE",hold:"\u4FDD\u7559",next:"\u4E0B\u4E00\u500B",score:"\u5206\u6578",lines:"\u6D88\u9664",stage:"\u968E\u6BB5",best:"\u6700\u9AD8",time:"\u6642\u9593",holdReady:"\u53EF\u4FDD\u7559",holdUsed:"\u843D\u4E0B\u524D\u4E0D\u80FD\u518D\u63DB",left:"\u5DE6",right:"\u53F3",rotate:"\u8F49",rotateLeft:"\u5DE6\u65CB",rotateRight:"\u53F3\u65CB",warning:"\u8B66\u6212",fever:"Fever",feverStart:"\u9023\u64CA\uFF0B\u7206\u7834 Fever\uFF01",danger:"\u5371\u6025",keep:"\u7559",drop:"\u843D",soft:"\u964D",fire:"\u5C04",start:"\u958B\u59CB",again:"\u518D\u4E00\u5C40",menu:"\u56DE\u9078\u55AE",resume:"\u7E7C\u7E8C",paused:"\u66AB\u505C",pauseHint:"P \u6216 Esc \u7E7C\u7E8C\u3002",teachBreakout:"\u5DE6\u53F3\u9375\u79FB\u52D5\u5E95\u677F\uFF0C\u628A\u7403\u63A5\u4F4F\u3002",arcadeSpeed:"\u7403\u901F \xD72",arcadeDouble:"\u7403 \xD72",arcadeTriple:"\u7403 \xD73",arcadeWide:"\u677F\u653E\u5927",arcadeNarrow:"\u677F\u7E2E\u5C0F",teachBbtan:"\u5DE6\u53F3\u9375\u7784\u6E96\uFF0C\u7A7A\u767D\u9375\u6216\u4E0A\u9375\u767C\u5C04\u3002",teachPinball:"\u5DE6\u9375\u62CD\u5DE6\u64CB\u677F\uFF0C\u53F3\u9375\u62CD\u53F3\u64CB\u677F\u3002",curseReverse:"\u5DE6\u53F3\u76F8\u53CD",curseBlind:"\u9ED1\u5C4F",curseRush:"\u52A0\u901F",curseNorotate:"\u4E0D\u80FD\u8F49",curseNoHold:"\u4E0D\u80FD\u4FDD\u7559",garbageAdded:"\u5783\u573E\u4E0A\u5347",garbageStable:"\u5783\u573E\u7A69\u56FA",topped:"\u5230\u9802\u4E86",cleared:"40 \u884C\u5B8C\u6210",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"\u5F48\u73E0\u53F0",rewardSand:"\u6D41\u6C99",teachSand:"\u4E8C\u5341\u6B21\u843D\u4E0B\u3002\u540C\u4E00\u984F\u8272\u9023\u6EFF\u6574\u500B\u6A6B\u5411\u5C31\u6574\u8272\u6D88\u53BB\u3002",tspin:"T\u65CB",tspinSingle:"T\u65CB\u55AE\u6D88",tspinDouble:"T\u65CB\u96D9\u6D88",tspinTriple:"T\u65CB\u4E09\u6D88",tspinMini:"\u5C0FT\u65CB",tspinMiniSingle:"\u5C0FT\u65CB\u55AE\u6D88",combo:"\u9023\u6D88",comboLines:"\u984D\u5916\u689D\u6578",sand:"\u6D41\u6C99",normal:"\u666E\u901A",hard:"\u56F0\u96E3",custom:"\u81EA\u8A02",pace:"\u901F\u5EA6",boards:"\u6392\u884C\u699C",gameBridge:"\u67B6\u584A",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"\u5F48\u73E0\u53F0",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"\u99AC\u62C9\u677E\u6703\u96A8\u968E\u6BB5\u7FFB\u8F49\uFF0C\u4E26\u5076\u767C Breakout\u3001BBTAN \u8207\u5F48\u73E0\u53F0\u300240 \u884C\u7AF6\u901F\u53EA\u8A08\u6642\u3002",menuHint:"\u65B9\u584A\u53EF\u4EE5\u67B6\u5728\u7A7A\u6D1E\u4E0A\u3002\u6D88\u5230\u9EC3\u9EDE\u624D\u7206\u70B8\uFF0C\u734E\u52F5\u6A21\u5F0F\u88E1\u70B8\u5F48\u6703\u9023\u74B0\u70B8\u3002",keys:"\u65B9\u5411\u9375\u79FB\u52D5\uFF0C\u4E0A / X \u8F49\uFF0CZ \u53CD\u8F49\uFF0C\u7A7A\u767D\u9375\u76F4\u843D\uFF0CC \u4FDD\u7559\uFF0CP \u66AB\u505C\u3002"},"zh-Hans":{dangerEffect:"\u5371\u9669\u63D0\u793A\u6548\u679C",screenShake:"\u6296\u52A8",noScreenShake:"\u4E0D\u6296\u52A8",crazyDifficulty:"\u96BE\u5EA6",gameMenu:"\u6E38\u620F\u83DC\u5355",bgmVolume:"BGM \u97F3\u91CF",sfxVolume:"\u58F0\u6548\u97F3\u91CF",quitToMenu:"\u9000\u51FA\u56DE\u4E3B\u83DC\u5355",quitConfirm:"\u786E\u5B9A\u9000\u51FA\uFF1F\u672C\u6B21\u6E38\u620F\u5C06\u4F1A\u7ED3\u675F\u3002",cancel:"\u53D6\u6D88",confirmExit:"\u786E\u5B9A\u9000\u51FA",crazyMenuLive:"\u6218\u6597\u7EE7\u7EED\u8FDB\u884C\uFF0C\u8FD9\u4E2A\u83DC\u5355\u4E0D\u4F1A\u6682\u505C Boss\u3002",crazyGreed:"\u8D2A\u5A6A",crazyCatPlayerWarning:"\u732B\u4F38\u722A\uFF01\u5DE6\u53F3\u8EB2\u907F\uFF01",crazyCatBossWarning:"\u732B\u76EF\u4E0A\u5E84\u5BB6\u2026\u2026",crazyCatGiftWarning:"\u732B\u5E26\u4E86\u9C7C\u5E72\uFF01",crazyCatBlocksWarning:"\u732B\u76EF\u4E0A\u65B9\u5757\u2026\u2026",crazyCatSmash:"\u732B\u6253\u788E\u65B9\u5757\uFF01",crazyCatBossScratch:"\u732B\u6293\u4F24 Boss",crazyCatPlayerScratch:"\u88AB\u732B\u6293\u4F24",crazyCatDodge:"\u8EB2\u8FC7\u732B\u722A\uFF01",crazyCatGift:"\u9C7C\u5E72\u56DE\u8840",crazySevenSins:"\u4E03\u5927\u7F6A",crazyChooseBoss:"\u4F9D\u5E8F\u6311\u6218\u4E03\u5927\u7F6A \xB7 \u901A\u5173\u540E\u63ED\u5F00\u4E0B\u4E00\u5173",crazyChallenge:"\u6311\u6230",crazyLocked:"\u672A\u89E3\u9501",crazyCleared:"\u5B8C\u6574\u901A\u95DC",sinPride:"\u50B2\u6162",sinEnvy:"\u5AC9\u5992",sinWrath:"\u6124\u6012",sinLust:"\u8272\u6B32",sinGluttony:"\u66B4\u98DF",sinSloth:"\u6020\u60F0",crazyGreedLore:"\u5E84\u5BB6\u60F3\u8981\u4E00\u5207\u3002\u6311\u6218\u8D2A\u5A6A\u7684\u8D4C\u5C40\u3002",crazyTrueName:"\u566C\u91D1\u5E84\u5BB6",crazyTrueForm:"\u8D2A\u5A6A\u771F\u8EAB\u30FB\u566C\u91D1\u5E84\u5BB6",crazyTransform:"\u9762\u5177\u788E\u88C2",crazyNeverEnough:"\u300C\u9084\u4E0D\u5920\u2026\u2026\u5168\u90E8\u90FD\u662F\u6211\u7684\u3002\u300D",crazyTransformSub:"\u91D1\u5E93\u5DF2\u5F00\uFF0C\u8FFD\u503A\u5F00\u59CB\u3002",crazyGreedBroken:"\u8D2A\u5A6A\uFF0C\u51FB\u7834\u3002",crazyVictorySub:"\u5E84\u5BB6\u7684\u91D1\u5E93\uFF0C\u7EC8\u4E8E\u4E0D\u518D\u5C5E\u4E8E\u4ED6\u3002",crazySkip:"\u8DF3\u8FC7",crazyContinue:"\u7EE7\u7EED",crazyClearUnlock:"\u5DF2\u89E3\u9501\u566C\u91D1\u5E84\u5BB6\u526A\u5F71",crazyHealth:"\u5269\u4F59\u8840\u91CF",crazyCounters:"\u53CD\u51FB\u6B21\u6578",crazyCoins:"\u6536\u96C6\u786C\u5E01",crazyDamageTaken:"\u627F\u53D7\u4F24\u5BB3",crazyHealed:"\u56DE\u590D\u8840\u91CF",crazyMode_jump:"\u8DF3\u8DC3\u8FFD\u503A",crazyMode_coins:"\u91D1\u5E01\u6D2A\u6D41",crazyMode_motion:"\u52A8\uFF0F\u505C\u5951\u7D04",crazyMode_vortex:"\u8D2A\u5A6A\u5438\u5F15",crazyMode_roulette:"\u8F2A\u76E4\u8FFD\u6BBA",crazyMode_pusher:"\u63A8\u5E01\u5956\u52B1",crazyHint_jump:"\u5DE6\u53F3\u79FB\u52A8\uFF0C\u7A7A\u767D\u9375\uFF0F\u8DF3\u8DC3\u907F\u5F00\u8CBC\u5730\u91D1\u689D\uFF1B\u957F\u6309\u8DF3\u5F97\u8F83\u9AD8\u3002\u4E0A\u65B9\u969C\u788D\u5219\u7559\u5728\u5730\u9762\uFF0C\u6BCF\u5B58\u6D3B\u4E24\u79D2\u53CD\u51FB\u3002",crazyHint_coins:"\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52A8\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002\u907F\u5F00\u91D1\u5E01\u6D2A\u6D41\uFF0C\u7DA0\u5E01\u56DE\u590D 3 HP\uFF1B\u7D05\u8272\u7BAD\u982D\u5148\u9810\u544A\u3002",crazyHint_motion:"\u626B\u7EBF\u53EF\u4ECE\u516B\u4E2A\u65B9\u5411\u6765\uFF1A\u84DD\u8272\u79FB\u52A8\u3001\u6A59\u8272\u505C\u4F4F\uFF0C\u4E5F\u53EF\u79FB\u51FA\u626B\u7EBF\uFF1B\u7A7A\u683C\u952E\u51B2\u523A\u3002",crazyHint_vortex:"\u91D1\u5E93\u6703\u5438\u5F15\u6838\u5FC3\uFF0C\u53CD\u65B9\u5411\u62B5\u6297\u4E26\u907F\u5F00\u91D1\u5E01\u3002\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52A8\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002",crazyHint_roulette:"\u6BCF\u6CE2 1\u20133 \u6761\u9884\u544A\u5C04\u7EBF\uFF0C\u53EF\u80FD\u4F9D\u6B21\u53D1\u5C04\u3002\u65B9\u5411\u952E\uFF0F\u62D6\u66F3\u907F\u5F00\uFF0C\u7A7A\u683C\u952E\u51B2\u523A\u3002",crazyHint_pusher:"\u5DE6\u53F3\uFF0F\u70B9\u9009\u4F4D\u7F6E\uFF0C\u7A7A\u683C\u952E\u6295\u5E01\u3002\u7EFF\u5E01\u56DE\u8840\u3001\u7EA2\u5E01\xD72\u30017\u5E01\u62BD JP\uFF1BC \u6536\u4E0B\uFF0C\u5269 2 \u79D2\u6536\u5C3E\u3002",crazyJump:"\u8DF3\u8DC3",crazyJumpHint:"SPACE \u8DF3\u8DC3 \xB7 \u957F\u6309\u8DF3\u9AD8",crazyKeepMoving:"\u2192 \u84DD\u8272\uFF1A\u4FDD\u6301\u79FB\u52A8",crazyStayStill:"\u25A0 \u6A59\u8272\uFF1A\u505C\u4F4F",crazyPusherJackpot:"Jackpot\uFF01",crazyPusherStock:"\u786C\u5E01",crazyPusherSettle:"\u505C\u6B62\u6295\u5E01 \xB7 \u6536\u5C3E\u4E2D",crazyPusherReward:"\u53CD\u51FB\u5956\u52B1 \xB7 \u672C\u56DE\u5408\u4E0D\u53D7\u4F24",crazyPusherAgain:"\u518D\u63A8\u4E00\u6B21",crazyInsertCoin:"\u6295\u5E01",crazyPusherRisk:"\u518D\u63A8\u6311\u6230\uFF1A60% \u4FDD\u7559\uFF0C\u5426\u5219\u672A\u6536\u5956\u52B1\u51CF\u534A",crazyPusherSettled:"\u63A8\u5E01\u6311\u6230\u5DF2\u7ED3\u7B97",crazyPusherBank:"\u63A8\u5E01\u5956\u52B1\u5DF2\u6536\u4E0B",crazyDashSound:"\u885D\u523A",crazyLaserSound:"\u8F2A\u76E4\u5F00\u706B",crazyVictorySound:"\u91D1\u5E01\u7051\u843D",crazyCoinSound:"\u786C\u5E01",crazyPusherInsertSound:"\u6295\u5E01",crazyPusherDropSound:"\u786C\u5E01\u843D\u4E0B",crazyPusherStepSound:"\u843D\u5230\u4E0B\u5C42",crazyCardSound:"\u9009\u724C",crazyTileSound:"\u9009\u724C",crazyReelStop:"\u8F49\u8F2A\u505C\u4E0B",crazyLaunchSound:"\u53D1\u5C04",crazyPegSound:"\u9489\u677F\u53CD\u5F39",crazyFlipperSound:"\u5F39\u677F",crazyBossBattle:"Boss \u6218",crazyPreviewHint:"\u518D\u6309 Crazy \u9032\u5834\u3002100 HP \xB7 \u4E09\u9636\u6BB5 \xB7 \u65E0\u5012\u6570\u7B49\u5F85\u3002",crazyDealer:"\u72C2\u5BB4\u838A\u5BB6",crazyOpening:"\u838A\u5BB6\u5F00\u5C40\uFF0C\u51C6\u5907\u53CD\u51FB\u3002",crazyPhaseLabel:"\u9636\u6BB5",crazyPhase:"\u65B0\u9636\u6BB5\uFF01\u56DE\u590D\u8840\u91CF\u3002",crazySwitch:"\u65B0\u73A9\u6CD5\uFF0C\u63A5\u6218\uFF01",crazyHurt:"\u53D7\u4F24\uFF01",crazyHeal:"\u56DE\u8840",crazyHit:"Boss \u4F24\u5BB3",crazyCounter:"\u53CD\u51FB\u6210\u529F\uFF01",crazyAttackWarning:"\u547D\u4E2D\u963B\u6B62\u653B\u51FB\uFF01",crazyBossAttack:"\u838A\u5BB6\u653B\u51FB",crazyWrong:"\u914D\u5BF9\u932F\u8BEF",crazyMiss:"\u5931\u624B",crazyRiskLost:"\u5192\u96AA\u5931\u8D25",crazyBankOrRisk:"\u6536\u4E0B\u8FD8\u662F\u7FFB\u500D\uFF1F",crazyTopout:"\u5835\u9802\uFF1A\u6263 20 HP",crazyBallLost:"\u6F0F\u7403",crazyCatWarning:"\u55B5\u2026\u2026\u732B\u722A\u6765\u4E86\uFF01",crazyCatSwipe:"\u732B\u732B\u6417\u86CB\uFF01",crazyTimeout:"\u838A\u5BB6\u6536\u684C\uFF0C\u65F6\u9593\u8017\u5C3D\u3002",crazyTimeoutRound:"\u672C\u56DE\u5408\u672A\u547D\u4E2D",crazyVictory:"\u51FB\u8D25\u838A\u5BB6\uFF01",crazyDefeat:"\u8840\u91CF\u8017\u5C3D",crazyStop:"\u505C\u8F2A",crazyPending:"\u5F85\u6536\u5956\u52F5",crazyPull:"\u62C9\u687F",crazyBankHint:"C\uFF0F\u6536\u4E0B\uFF1A\u9886\u5956\u5E76\u6062\u590D 4 HP",crazyRiskHint:"\u7A7A\u767D\u952E\uFF0F\u7FFB\u500D\uFF1A\u6210\u529F 55%\uFF0C\u5931\u8D25 \u221210 HP",crazyFindPair:"\u627E\u4E24\u5F20",crazyPairHint:"\u70B9\u9009\u724C\uFF0C\u6216\u5DE6\u53F3\u9009\u64C7\uFF0B\u7A7A\u767D\u9375",crazyAction:"\u884C\u52D5",crazyBank:"\u6536\u4E0B",crazyReset:"\u91CD\u9009",crazyMode_bridge:"\u67B6\u5757",crazyMode_sand:"\u6C99\u5757",crazyMode_slots:"\u89D2\u5B50\u673A",crazyMode_tiger:"\u8001\u864E\u673A",crazyMode_pachinko:"\u62CD\u6E05\u54E5",crazyMode_cards:"\u5564\u724C",crazyMode_mahjong:"\u9EBB\u5C06",crazyMode_breakout:"Brickout",crazyMode_pinball:"\u5F39\u73E0\u53F0",crazyMode_bbtan:"BBTAN",crazyHint_bridge:"\u6D88\u884C\u653B\u51FB\u3002\u5DE6\u53F3\u79FB\u52D5\uFF0CX\uFF0FZ \u65CB\u8F6C\uFF0CC \u4FDD\u7559\uFF0C\u7A7A\u767D\u9375\u843D\u4E0B\u3002",crazyHint_sand:"\u540C\u8272\u6C99\u7C92\u9023\u901A\u5DE6\u53F3\u4E24\u8FB9\u5373\u53EF\u653B\u51FB\uFF0C\u64CD\u4F5C\u540C\u67B6\u5757\u3002",crazyHint_slots:"\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u9010\u8F2A\u505C\u8F6C\uFF0C\u914D\u6210\u4E24\u4E2A\u6216\u4E09\u4E2A\u540C\u5716\u6848\u3002",crazyHint_tiger:"\u62C9\u6746\u7B49\u4E09\u8F6E\u505C\u4E0B\u3002\u4E2D\u5956\u540E\u300C\u6536\u4E0B\u300D\u9886\u5956\u56DE\u8840\uFF0C\u6216\u300C\u7FFB\u500D\u300D\u5192\u9669\uFF1A55% \u6210\u529F\uFF0C\u5931\u8D25\u5931\u5956\u6263 10 HP\u3002",crazyHint_pachinko:"\u5DE6\u53F3\u6216\u70B9\u9009\u7784\u51C6\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u53D1\u7403\u3002\u69FD\u4F4D\u53CA\u6570\u503C\u6BCF\u56DE\u5408\u968F\u673A\uFF1B\u7EFF\u69FD\u56DE\u8840\u3001\u7D2B\u69FD\u653B\u51FB\u3001\u7EA2\u69FD\u6263\u8840\u3002",crazyHint_cards:"\u5012\u6570\u5185\u9009\u6307\u5B9A\u6570\u5B57\u5BF9\u5B50\uFF01\u70B9\u724C\u6216\u5DE6\u53F3\uFF0B\u9009\u724C\uFF1B\u8FDE\u7EED\u7B54\u5BF9\u52A0\u4F24\u5BB3\uFF0C\u8D85\u65F6\uFF0F\u9519\u724C\u6263 5 HP\u3002",crazyHint_mahjong:"\u5012\u6570\u5185\u914D\u51FA\u4E0A\u65B9\u6307\u5B9A\u724C\uFF0C\u6BCF\u5BF9\u6539\u53D8\u76EE\u6807\uFF01\u70B9\u724C\u6216\u5DE6\u53F3\uFF0B\u9009\u724C\uFF1B\u8FDE\u7EED\u914D\u5BF9\u52A0\u4F24\u5BB3\uFF0CC \u91CD\u9009\u3002",crazyHint_breakout:"\u5DE6\u53F3\u79FB\u52D5\u7403\u677F\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u53D1\u7403\u3002\u6253\u788E\u65B9\u5757\u653B\u51FB\u3002",crazyHint_pinball:"\u9577\u6309\u5DE6\u53F3\u6258\u8D77\u5F39\u677F\u3002\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u53D1\u7403\u3002",crazyHint_bbtan:"\u5DE6\u53F3\u7784\u51C6\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u53D1\u5C04\u7403\u7FA4\u3002",crazyMode_dodge:"\u5E84\u5BB6\u8FFD\u6740",crazyHint_dodge:"\u65B9\u5411\u952E\uFF0F\u89E6\u63A7\u65B9\u5411\u79FB\u52A8\uFF0C\u6216\u62D6\u66F3\u6838\u5FC3\u3002\u7A7A\u767D\u952E\uFF0F\u51B2\u523A\u53EF\u77ED\u6682\u65E0\u654C\uFF1B\u907F\u5F00\u7EA2\u8272\u9884\u8B66\uFF0C\u627E\u7F3A\u53E3\uFF0C\u6BCF\u5B58\u6D3B\u4E24\u79D2\u53CD\u51FB\u3002",crazyDash:"\u51B2\u523A",crazyDashReady:"\u51B2\u523A\u5C31\u7EEA \xB7 SPACE",crazyDodgeHit:"\u88AB\u653B\u51FB\u547D\u4E2D",crazyRisk:"\u7FFB\u500D",crazyRolling:"\u8F6C\u8F6E\u4E2D\u2026",crazyRiskRolling:"\u7FFB\u500D\u6311\u6218\u4E2D\u2026",crazyLeverPrompt:"\u6309\u300C\u62C9\u6746\u300D\u5F00\u59CB\u8F6C\u8F6E",crazyOdds:"\u7FFB\u500D\u6210\u529F 55% \xB7 \u5931\u8D25\u5931\u53BB\u5956\u52B1 \u221210 HP",crazyPairTimeout:"\u9009\u724C\u8D85\u65F6",crazyIncoming:"\u5E84\u5BB6\u51FA\u62DB\uFF01",crazySelect:"\u9009\u724C",crazyUp:"\u4E0A",title:"\u67B6\u5757",back:"\u56DE\u4F5C\u54C1\u5217\u8868",marathon:"\u9A6C\u62C9\u677E",sprint:"40 \u884C\u7ADE\u901F",settings:"\u8BBE\u7F6E",donate:"\u8D5E\u52A9",language:"\u8BED\u8A00",volume:"\u97F3\u91CF",theme:"\u80CC\u666F",touch:"\u89E6\u5C4F",touchAuto:"\u81EA\u52A8",touchOn:"\u5F00",touchOff:"\u5173",dark:"\u9ED1\u5E95",light:"\u767D\u5E95",close:"\u8FD4\u56DE",hold:"\u4FDD\u7559",next:"\u4E0B\u4E00\u4E2A",score:"\u5206\u6570",lines:"\u6D88\u9664",stage:"\u9636\u6BB5",best:"\u6700\u9AD8",time:"\u65F6\u95F4",holdReady:"\u53EF\u4FDD\u7559",holdUsed:"\u843D\u4E0B\u524D\u4E0D\u80FD\u518D\u6362",left:"\u5DE6",right:"\u53F3",rotate:"\u8F6C",rotateLeft:"\u5DE6\u65CB",rotateRight:"\u53F3\u65CB",warning:"\u8B66\u6212",fever:"Fever",feverStart:"\u8FDE\u51FB\uFF0B\u7206\u7834 Fever\uFF01",danger:"\u5371\u6025",keep:"\u7559",drop:"\u843D",soft:"\u964D",fire:"\u5C04",start:"\u5F00\u59CB",again:"\u518D\u4E00\u5C40",menu:"\u56DE\u9009\u5355",resume:"\u7EE7\u7EED",paused:"\u6682\u505C",pauseHint:"P \u6216 Esc \u7EE7\u7EED\u3002",teachBreakout:"\u5DE6\u53F3\u952E\u79FB\u52A8\u5E95\u677F\uFF0C\u628A\u7403\u63A5\u4F4F\u3002",arcadeSpeed:"\u7403\u901F \xD72",arcadeDouble:"\u7403 \xD72",arcadeTriple:"\u7403 \xD73",arcadeWide:"\u677F\u653E\u5927",arcadeNarrow:"\u677F\u7F29\u5C0F",teachBbtan:"\u5DE6\u53F3\u952E\u7784\u51C6\uFF0C\u7A7A\u683C\u952E\u6216\u4E0A\u952E\u53D1\u5C04\u3002",teachPinball:"\u5DE6\u952E\u6253\u5DE6\u6321\u677F\uFF0C\u53F3\u952E\u6253\u53F3\u6321\u677F\u3002",curseReverse:"\u5DE6\u53F3\u76F8\u53CD",curseBlind:"\u9ED1\u5C4F",curseRush:"\u52A0\u901F",curseNorotate:"\u4E0D\u80FD\u8F6C",curseNoHold:"\u4E0D\u80FD\u4FDD\u7559",garbageAdded:"\u5783\u573E\u4E0A\u5347",garbageStable:"\u5783\u573E\u7A33\u56FA",topped:"\u5230\u9876\u4E86",cleared:"40 \u884C\u5B8C\u6210",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"\u5F39\u73E0\u53F0",rewardSand:"\u6D41\u6C99",teachSand:"\u843D\u4E0B\u4E8C\u5341\u6B21\u3002\u540C\u4E00\u989C\u8272\u8FDE\u6EE1\u6574\u4E2A\u6A2A\u5411\u5C31\u6574\u8272\u6D88\u53BB\u3002",tspin:"T\u65CB",tspinSingle:"T\u65CB\u5355\u6D88",tspinDouble:"T\u65CB\u53CC\u6D88",tspinTriple:"T\u65CB\u4E09\u6D88",tspinMini:"\u5C0FT\u65CB",tspinMiniSingle:"\u5C0FT\u65CB\u5355\u6D88",combo:"\u8FDE\u6D88",comboLines:"\u989D\u5916\u6761\u6570",sand:"\u6D41\u6C99",normal:"\u666E\u901A",hard:"\u56F0\u96BE",custom:"\u81EA\u5B9A\u4E49",pace:"\u901F\u5EA6",boards:"\u6392\u884C\u699C",gameBridge:"\u67B6\u5757",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"\u5F39\u73E0\u53F0",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"\u9A6C\u62C9\u677E\u4F1A\u968F\u9636\u6BB5\u7FFB\u8F6C\uFF0C\u5E76\u5076\u53D1 Breakout\u3001BBTAN \u4E0E\u5F39\u73E0\u53F0\u300240 \u884C\u7ADE\u901F\u53EA\u8BA1\u65F6\u3002",menuHint:"\u65B9\u5757\u53EF\u4EE5\u67B6\u5728\u7A7A\u6D1E\u4E0A\u3002\u6D88\u5230\u9EC4\u70B9\u624D\u7206\u70B8\uFF0C\u5956\u52B1\u6A21\u5F0F\u91CC\u70B8\u5F39\u4F1A\u8FDE\u73AF\u70B8\u3002",keys:"\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u4E0A / X \u8F6C\uFF0CZ \u53CD\u8F6C\uFF0C\u7A7A\u683C\u76F4\u843D\uFF0CC \u4FDD\u7559\uFF0CP \u6682\u505C\u3002"},en:{dangerEffect:"Danger effect",screenShake:"Shake",noScreenShake:"No shake",crazyDifficulty:"Difficulty",gameMenu:"Game menu",bgmVolume:"BGM volume",sfxVolume:"Sound effects",quitToMenu:"Exit to main menu",quitConfirm:"Exit this game? Your current run will end.",cancel:"Cancel",confirmExit:"Exit",crazyMenuLive:"The battle continues while this menu is open.",crazyGreed:"GREED",crazyCatPlayerWarning:"Cat claw! Move left/right!",crazyCatBossWarning:"Cat eyes the dealer\u2026",crazyCatGiftWarning:"Cat brought a treat!",crazyCatBlocksWarning:"Cat eyes the blocks\u2026",crazyCatSmash:"Cat smashed blocks!",crazyCatBossScratch:"Cat scratched the boss",crazyCatPlayerScratch:"Cat scratched you",crazyCatDodge:"Dodged the cat!",crazyCatGift:"Cat treat \xB7 HP",crazySevenSins:"Seven Deadly Sins",crazyChooseBoss:"Challenge the sins in order \xB7 Clear a boss to reveal the next",crazyChallenge:"Challenge",crazyLocked:"Locked",crazyCleared:"Cleared",sinPride:"Pride",sinEnvy:"Envy",sinWrath:"Wrath",sinLust:"Lust",sinGluttony:"Gluttony",sinSloth:"Sloth",crazyGreedLore:"The house wants everything. Challenge the dealer's greed.",crazyTrueName:"The Gilded Devourer",crazyTrueForm:"GREED \xB7 GILDED DEVOURER",crazyTransform:"THE MASK BREAKS",crazyNeverEnough:"\u201CNot enough\u2026 it is all mine.\u201D",crazyTransformSub:"The vault is open. Your debt is due.",crazyGreedBroken:"GREED DEFEATED",crazyVictorySub:"The vault no longer belongs to the dealer.",crazySkip:"Skip",crazyContinue:"Continue",crazyClearUnlock:"Gilded Devourer silhouette unlocked",crazyHealth:"Health left",crazyCounters:"Counters",crazyCoins:"Coins collected",crazyDamageTaken:"Damage taken",crazyHealed:"Healing",crazyMode_jump:"DEBT RUNNER",crazyMode_coins:"COIN BARRAGE",crazyMode_motion:"MOVE / STOP",crazyMode_vortex:"GREED VORTEX",crazyMode_roulette:"ROULETTE HUNT",crazyMode_pusher:"COIN PUSHER",crazyHint_jump:"Left/Right move; SPACE / Jump clears low gold bars. Hold to jump higher; stay grounded for high bars. Survive two seconds to counter.",crazyHint_coins:"Arrows / drag to move; SPACE dashes. Dodge gold, collect green for 3 HP. Red arrows warn first.",crazyHint_motion:"Sweeps come from eight directions: MOVE for blue, STOP for orange. Leave the line or SPACE to dash.",crazyHint_vortex:"Resist the vault pull and dodge coins. Arrows / drag to move; SPACE dashes.",crazyHint_roulette:"Dodge 1\u20133 preview lines; shots may fire in sequence. Arrows/drag move; SPACE dashes.",crazyHint_pusher:"Move/tap to aim; SPACE drops. Green heals, ruby \xD72, 7 spins JP. C banks; last 2s settle.",crazyJump:"Jump",crazyJumpHint:"SPACE jumps \xB7 Hold for height",crazyKeepMoving:"\u2192 BLUE: KEEP MOVING",crazyStayStill:"\u25A0 ORANGE: STOP",crazyPusherJackpot:"Jackpot\uFF01",crazyPusherStock:"Coins",crazyPusherSettle:"NO MORE COINS \xB7 SETTLING",crazyPusherReward:"EARNED REWARD \xB7 NO DAMAGE",crazyPusherAgain:"Push again",crazyInsertCoin:"Insert coin",crazyPusherRisk:"Extra push: 60% keep; otherwise halve unbanked reward",crazyPusherSettled:"Extra push settled",crazyPusherBank:"Coin reward banked",crazyDashSound:"Dash",crazyLaserSound:"Roulette fires",crazyVictorySound:"Coin shower",crazyCoinSound:"Coin",crazyPusherInsertSound:"Coin inserted",crazyPusherDropSound:"Coins collected",crazyPusherStepSound:"Coin reached lower shelf",crazyCardSound:"Card",crazyTileSound:"Tile",crazyReelStop:"Reel stopped",crazyLaunchSound:"Launch",crazyPegSound:"Peg bounce",crazyFlipperSound:"Flipper",crazyBossBattle:"Boss battle",crazyPreviewHint:"Tap Crazy again to enter. 100 HP \xB7 three phases \xB7 no countdowns.",crazyDealer:"THE MAD DEALER",crazyOpening:"The dealer opens the game.",crazyPhaseLabel:"PHASE",crazyPhase:"New phase! HP restored.",crazySwitch:"New game. Make your move.",crazyHurt:"Hit!",crazyHeal:"HP restored",crazyHit:"Boss damage",crazyGuard:"Guard up \xB7 keep countering",crazyCounter:"Attack interrupted!",crazyAttackWarning:"Hit to interrupt!",crazyBossAttack:"Dealer strike",crazyWrong:"Wrong pair",crazyMiss:"Miss",crazyRiskLost:"Risk lost",crazyBankOrRisk:"Bank or double?",crazyTopout:"Top blocked: \u221220 HP",crazyBallLost:"Ball lost",crazyCatWarning:"Meow\u2026 incoming paw!",crazyCatSwipe:"Cat mischief!",crazyTimeout:"The dealer closes the table.",crazyTimeoutRound:"No hits this round",crazyVictory:"DEALER DEFEATED",crazyDefeat:"OUT OF HP",crazyStop:"STOP REEL",crazyPending:"REWARD",crazyPull:"PULL THE LEVER",crazyBankHint:"C / Bank: collect and heal 4 HP",crazyRiskHint:"SPACE / Risk: 55% win; failure costs 10 HP",crazyFindPair:"MATCH TWO",crazyPairHint:"Tap tiles, or \u2190 \u2192 + SPACE",crazyAction:"Action",crazyBank:"Bank",crazyReset:"Reset",crazyMode_bridge:"BRIDGE",crazyMode_sand:"SANDTRIX",crazyMode_slots:"REEL STOP",crazyMode_tiger:"LUCKY LEVER",crazyMode_pachinko:"PACHINKO",crazyMode_cards:"CARDS",crazyMode_mahjong:"MAHJONG",crazyMode_breakout:"BRICKOUT",crazyMode_pinball:"PINBALL",crazyMode_bbtan:"BBTAN",crazyHint_bridge:"Clear lines to attack. Arrows move; X / Z turn; C holds; SPACE drops.",crazyHint_sand:"Connect one sand color across both edges to attack. Same block controls.",crazyHint_slots:"SPACE / Action stops each reel. Match two or three symbols.",crazyHint_tiger:"Pull, then wait for three reels to stop. Bank collects and heals; Risk doubles at 55% odds, or loses the reward and 10 HP.",crazyHint_pachinko:"Move or tap to aim; SPACE / Action launches. Bins and values vary each round: green heals, purple attacks, red hurts.",crazyHint_cards:"Match the requested rank before time runs out! Tap or Left/Right + Select. Streaks boost damage; wrong / timeout costs 5 HP.",crazyHint_mahjong:"Match the shown tile before time runs out; the target changes each pair! Tap or Left/Right + Select. Streaks boost damage; C resets selection.",crazyHint_breakout:"Move the paddle with \u2190 \u2192; SPACE launches. Breaking bricks attacks.",crazyHint_pinball:"Hold \u2190 \u2192 to lift the flippers. SPACE / Action launches.",crazyHint_bbtan:"Move \u2190 \u2192 to aim; SPACE / Action fires a volley.",crazyMode_dodge:"DEALER ASSAULT",crazyHint_dodge:"Arrows / touch directions move; drag the core to steer. SPACE / Dash grants brief invulnerability. Avoid red warnings, find gaps; survive two seconds to counter.",crazyDash:"Dash",crazyDashReady:"DASH READY \xB7 SPACE",crazyDodgeHit:"Attack hit",crazyRisk:"Risk \xD72",crazyRolling:"Spinning\u2026",crazyRiskRolling:"Double or lose\u2026",crazyLeverPrompt:"Press Pull to spin the reels",crazyOdds:"55% win \xB7 Lose reward & 10 HP on failure",crazyPairTimeout:"Pair deadline missed",crazyIncoming:"DEALER ATTACK!",crazySelect:"Select",crazyUp:"Up",title:"Bridge",back:"Back to works",marathon:"Marathon",sprint:"40-line sprint",settings:"Settings",donate:"Donate",language:"Language",volume:"Volume",theme:"Background",touch:"Touch",touchAuto:"Auto",touchOn:"On",touchOff:"Off",dark:"Black",light:"White",close:"Back",hold:"Hold",next:"Next",score:"Score",lines:"Lines",stage:"Stage",best:"Best",time:"Time",holdReady:"Hold ready",holdUsed:"Hold used",left:"Left",right:"Right",rotate:"Turn",rotateLeft:"Left turn",rotateRight:"Right turn",warning:"WARNING",fever:"Fever",feverStart:"Combo + Blast Fever!",danger:"CRITICAL",keep:"Hold",drop:"Drop",soft:"Down",fire:"Fire",start:"Start",again:"Again",menu:"Menu",resume:"Resume",paused:"Paused",pauseHint:"P or Esc to resume.",teachBreakout:"Left and right move the paddle. Keep the ball up.",arcadeSpeed:"Speed \xD72",arcadeDouble:"Balls \xD72",arcadeTriple:"Balls \xD73",arcadeWide:"Wide paddle",arcadeNarrow:"Narrow paddle",teachBbtan:"Left and right aim. Space or Up fires.",teachPinball:"Left flips the left flipper. Right flips the right one.",curseReverse:"Reversed",curseBlind:"Blackout",curseRush:"Rush",curseNorotate:"No turn",curseNoHold:"No hold",garbageAdded:"Garbage rises",garbageStable:"Stack stable",topped:"Topped out",cleared:"40 lines",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"Pinball",rewardSand:"Sand",teachSand:"Twenty drops. A color spanning the full width clears.",tspin:"T-Spin",tspinSingle:"T-Spin Single",tspinDouble:"T-Spin Double",tspinTriple:"T-Spin Triple",tspinMini:"T-Spin Mini",tspinMiniSingle:"Mini Single",combo:"Combo",comboLines:"Bonus lines",sand:"Sand",normal:"Normal",hard:"Hard",custom:"Custom",pace:"Speed",boards:"Ranks",gameBridge:"Bridge",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"Pinball",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"Marathon flips the well as stages climb, and sometimes opens Breakout, BBTAN, or pinball. Sprint is a 40-line timer.",menuHint:"Pieces can bridge gaps. A yellow dot explodes only when cleared, and bombs chain during bonus modes.",keys:"Arrows move, Up / X rotate, Z reverse, Space drops, C holds, P pauses."},ja:{dangerEffect:"\u5371\u967A\u6642\u306E\u8868\u793A",screenShake:"\u63FA\u3089\u3059",noScreenShake:"\u63FA\u3089\u3055\u306A\u3044",crazyDifficulty:"\u96E3\u6613\u5EA6",title:"\u30D6\u30EA\u30C3\u30B8",back:"\u4F5C\u54C1\u4E00\u89A7\u3078",marathon:"\u30DE\u30E9\u30BD\u30F3",sprint:"40\u30E9\u30A4\u30F3",settings:"\u8A2D\u5B9A",donate:"\u5BC4\u4ED8",language:"\u8A00\u8A9E",volume:"\u97F3\u91CF",theme:"\u80CC\u666F",touch:"\u30BF\u30C3\u30C1",touchAuto:"\u81EA\u52D5",touchOn:"\u30AA\u30F3",touchOff:"\u30AA\u30D5",dark:"\u9ED2",light:"\u767D",close:"\u623B\u308B",hold:"\u30DB\u30FC\u30EB\u30C9",next:"\u6B21",score:"\u30B9\u30B3\u30A2",lines:"\u6D88\u53BB",stage:"\u30B9\u30C6\u30FC\u30B8",best:"\u30D9\u30B9\u30C8",time:"\u30BF\u30A4\u30E0",holdReady:"\u30DB\u30FC\u30EB\u30C9\u53EF",holdUsed:"\u843D\u4E0B\u307E\u3067\u4EA4\u63DB\u4E0D\u53EF",left:"\u5DE6",right:"\u53F3",rotate:"\u56DE\u8EE2",rotateLeft:"\u5DE6\u56DE\u8EE2",rotateRight:"\u53F3\u56DE\u8EE2",warning:"\u8B66\u6212",fever:"Fever",feverStart:"\u30B3\u30F3\u30DC\uFF0B\u7206\u7834 Fever\uFF01",danger:"\u5371\u967A",keep:"\u4FDD",drop:"\u843D",soft:"\u4E0B",fire:"\u5C04",start:"\u30B9\u30BF\u30FC\u30C8",again:"\u3082\u3046\u4E00\u5C40",menu:"\u30E1\u30CB\u30E5\u30FC",resume:"\u7D9A\u3051\u308B",paused:"\u4E00\u6642\u505C\u6B62",pauseHint:"P \u304B Esc \u3067\u518D\u958B\u3002",teachBreakout:"\u5DE6\u53F3\u3067\u30D1\u30C9\u30EB\u3092\u52D5\u304B\u3057\u3001\u30DC\u30FC\u30EB\u3092\u53D7\u3051\u308B\u3002",arcadeSpeed:"\u901F\u5EA6 \xD72",arcadeDouble:"\u30DC\u30FC\u30EB \xD72",arcadeTriple:"\u30DC\u30FC\u30EB \xD73",arcadeWide:"\u30D1\u30C9\u30EB\u62E1\u5927",arcadeNarrow:"\u30D1\u30C9\u30EB\u7E2E\u5C0F",teachBbtan:"\u5DE6\u53F3\u3067\u72D9\u3044\u3001\u30B9\u30DA\u30FC\u30B9\u304B\u4E0A\u3067\u6483\u3064\u3002",teachPinball:"\u5DE6\u3067\u5DE6\u30D5\u30EA\u30C3\u30D1\u30FC\u3001\u53F3\u3067\u53F3\u30D5\u30EA\u30C3\u30D1\u30FC\u3002",curseReverse:"\u5DE6\u53F3\u53CD\u8EE2",curseBlind:"\u6697\u8EE2",curseRush:"\u52A0\u901F",curseNorotate:"\u56DE\u8EE2\u4E0D\u53EF",curseNoHold:"\u30DB\u30FC\u30EB\u30C9\u4E0D\u53EF",garbageAdded:"\u304A\u3058\u3083\u307E\u8FFD\u52A0",garbageStable:"\u843D\u4E0B\u7336\u4E88",topped:"\u4E0A\u307E\u3067\u57CB\u307E\u3063\u305F",cleared:"40\u30E9\u30A4\u30F3\u9054\u6210",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"\u30D4\u30F3\u30DC\u30FC\u30EB",rewardSand:"\u30B5\u30F3\u30C9",teachSand:"20\u56DE\u843D\u3068\u3059\u3002\u540C\u3058\u8272\u304C\u6A2A\u3044\u3063\u3071\u3044\u306B\u7E4B\u304C\u308B\u3068\u305D\u306E\u8272\u304C\u6D88\u3048\u308B\u3002",tspin:"T\u30B9\u30D4\u30F3",tspinSingle:"T\u30B9\u30D4\u30F3\u30B7\u30F3\u30B0\u30EB",tspinDouble:"T\u30B9\u30D4\u30F3\u30C0\u30D6\u30EB",tspinTriple:"T\u30B9\u30D4\u30F3\u30C8\u30EA\u30D7\u30EB",tspinMini:"T\u30B9\u30D4\u30F3\u30DF\u30CB",tspinMiniSingle:"\u30DF\u30CB\u30B7\u30F3\u30B0\u30EB",combo:"\u30B3\u30F3\u30DC",comboLines:"\u30DC\u30FC\u30CA\u30B9\u30E9\u30A4\u30F3",sand:"\u30B5\u30F3\u30C9",normal:"\u30CE\u30FC\u30DE\u30EB",hard:"\u30CF\u30FC\u30C9",custom:"\u30AB\u30B9\u30BF\u30E0",pace:"\u901F\u5EA6",boards:"\u30E9\u30F3\u30AD\u30F3\u30B0",gameBridge:"\u30D6\u30EA\u30C3\u30B8",gameTetris:"\u30C6\u30C8\u30EA\u30B9",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"\u30D4\u30F3\u30DC\u30FC\u30EB",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"\u30DE\u30E9\u30BD\u30F3\u306F\u30B9\u30C6\u30FC\u30B8\u3054\u3068\u306B\u76E4\u9762\u304C\u53CD\u8EE2\u3057\u3001\u3068\u304D\u3069\u304D Breakout\u3001BBTAN\u3001\u30D4\u30F3\u30DC\u30FC\u30EB\u304C\u59CB\u307E\u308B\u300240\u30E9\u30A4\u30F3\u306F\u30BF\u30A4\u30E0\u30A2\u30BF\u30C3\u30AF\u3002",menuHint:"\u30D6\u30ED\u30C3\u30AF\u306F\u7A74\u306E\u4E0A\u306B\u6A4B\u3092\u67B6\u3051\u3089\u308C\u308B\u3002\u9EC4\u70B9\u306F\u6D88\u3057\u305F\u3068\u304D\u3060\u3051\u7206\u767A\u3057\u3001\u30DC\u30FC\u30CA\u30B9\u4E2D\u306F\u7206\u5F3E\u304C\u9023\u9396\u3059\u308B\u3002",keys:"\u77E2\u5370\u3067\u79FB\u52D5\u3001\u4E0A / X \u3067\u56DE\u8EE2\u3001Z \u3067\u9006\u56DE\u8EE2\u3001Space \u3067\u843D\u4E0B\u3001C \u3067\u30DB\u30FC\u30EB\u30C9\u3001P \u3067\u4E00\u6642\u505C\u6B62\u3002"},ko:{dangerEffect:"\uC704\uD5D8 \uC54C\uB9BC \uD6A8\uACFC",screenShake:"\uD754\uB4E4\uB9BC",noScreenShake:"\uD754\uB4E4\uB9BC \uC5C6\uC74C",crazyDifficulty:"\uB09C\uC774\uB3C4",title:"\uBE0C\uB9AC\uC9C0",back:"\uC791\uD488 \uBAA9\uB85D",marathon:"\uB9C8\uB77C\uD1A4",sprint:"40\uC904 \uC2A4\uD53C\uB4DC",settings:"\uC124\uC815",donate:"\uD6C4\uC6D0",language:"\uC5B8\uC5B4",volume:"\uC74C\uB7C9",theme:"\uBC30\uACBD",touch:"\uD130\uCE58",touchAuto:"\uC790\uB3D9",touchOn:"\uCF1C\uAE30",touchOff:"\uB044\uAE30",dark:"\uAC80\uC815",light:"\uD770\uC0C9",close:"\uB3CC\uC544\uAC00\uAE30",hold:"\uD640\uB4DC",next:"\uB2E4\uC74C",score:"\uC810\uC218",lines:"\uC9C0\uC6B4 \uC904",stage:"\uB2E8\uACC4",best:"\uCD5C\uACE0",time:"\uC2DC\uAC04",holdReady:"\uD640\uB4DC \uAC00\uB2A5",holdUsed:"\uCC29\uC9C0 \uC804\uC5D0\uB294 \uB2E4\uC2DC \uBC14\uAFC0 \uC218 \uC5C6\uC74C",left:"\uC67C",right:"\uC624\uB978",rotate:"\uD68C\uC804",rotateLeft:"\uC67C\uCABD \uD68C\uC804",rotateRight:"\uC624\uB978\uCABD \uD68C\uC804",warning:"\uC8FC\uC758",fever:"Fever",feverStart:"\uCF64\uBCF4\uFF0B\uD3ED\uBC1C Fever!",danger:"\uC704\uD5D8",keep:"\uD640\uB4DC",drop:"\uB099\uD558",soft:"\uC544\uB798",fire:"\uBC1C\uC0AC",start:"\uC2DC\uC791",again:"\uD55C \uD310 \uB354",menu:"\uBA54\uB274",resume:"\uACC4\uC18D",paused:"\uC77C\uC2DC\uC815\uC9C0",pauseHint:"P \uB610\uB294 Esc\uB85C \uACC4\uC18D\uD569\uB2C8\uB2E4.",teachBreakout:"\uC88C\uC6B0\uB85C \uD328\uB4E4\uC744 \uC6C0\uC9C1\uC5EC \uACF5\uC744 \uBC1B\uC544 \uC8FC\uC138\uC694.",arcadeSpeed:"\uC18D\uB3C4 \xD72",arcadeDouble:"\uACF5 \xD72",arcadeTriple:"\uACF5 \xD73",arcadeWide:"\uD328\uB4E4 \uD655\uB300",arcadeNarrow:"\uD328\uB4E4 \uCD95\uC18C",teachBbtan:"\uC88C\uC6B0\uB85C \uC870\uC900\uD558\uACE0, \uC2A4\uD398\uC774\uC2A4\uB098 \uC704\uCABD\uC73C\uB85C \uBC1C\uC0AC\uD569\uB2C8\uB2E4.",teachPinball:"\uC67C\uCABD\uC740 \uC67C\uCABD \uD50C\uB9AC\uD37C, \uC624\uB978\uCABD\uC740 \uC624\uB978\uCABD \uD50C\uB9AC\uD37C.",curseReverse:"\uC88C\uC6B0 \uBC18\uC804",curseBlind:"\uC554\uC804",curseRush:"\uAC00\uC18D",curseNorotate:"\uD68C\uC804 \uAE08\uC9C0",curseNoHold:"\uD640\uB4DC \uAE08\uC9C0",garbageAdded:"\uC4F0\uB808\uAE30 \uC0C1\uC2B9",garbageStable:"\uB099\uD558 \uC720\uC608",topped:"\uAF2D\uB300\uAE30\uAE4C\uC9C0 \uCC3C\uC2B5\uB2C8\uB2E4",cleared:"40\uC904 \uC644\uB8CC",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"\uD540\uBCFC",rewardSand:"\uC0CC\uB4DC",teachSand:"20\uBC88 \uB5A8\uC5B4\uC9C4\uB2E4. \uAC19\uC740 \uC0C9\uC774 \uAC00\uB85C \uC804\uCCB4\uB97C \uC787\uBA74 \uADF8 \uC0C9\uC774 \uC0AC\uB77C\uC9C4\uB2E4.",tspin:"T\uC2A4\uD540",tspinSingle:"T\uC2A4\uD540 \uC2F1\uAE00",tspinDouble:"T\uC2A4\uD540 \uB354\uBE14",tspinTriple:"T\uC2A4\uD540 \uD2B8\uB9AC\uD50C",tspinMini:"T\uC2A4\uD540 \uBBF8\uB2C8",tspinMiniSingle:"\uBBF8\uB2C8 \uC2F1\uAE00",combo:"\uCF64\uBCF4",comboLines:"\uBCF4\uB108\uC2A4 \uC904",sand:"\uC0CC\uB4DC",normal:"\uB178\uBA40",hard:"\uD558\uB4DC",custom:"\uCEE4\uC2A4\uD140",pace:"\uC18D\uB3C4",boards:"\uC21C\uC704",gameBridge:"\uBE0C\uB9AC\uC9C0",gameTetris:"\uD14C\uD2B8\uB9AC\uC2A4",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"\uD540\uBCFC",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"\uB9C8\uB77C\uD1A4\uC740 \uB2E8\uACC4\uB9C8\uB2E4 \uD310\uC774 \uB4A4\uC9D1\uD788\uACE0, \uAC00\uB054 Breakout, BBTAN, \uD540\uBCFC\uC774 \uC5F4\uB9BD\uB2C8\uB2E4. 40\uC904\uC740 \uC2DC\uAC04 \uAE30\uB85D\uC785\uB2C8\uB2E4.",menuHint:"\uBE14\uB85D\uC740 \uAD6C\uBA4D \uC704\uC5D0 \uAC78\uCCD0 \uB193\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB178\uB780 \uC810\uC740 \uC9C0\uC6CC\uC57C \uD130\uC9C0\uACE0, \uBCF4\uB108\uC2A4\uC5D0\uC11C\uB294 \uD3ED\uD0C4\uC774 \uC5F0\uC1C4\uD569\uB2C8\uB2E4.",keys:"\uD654\uC0B4\uD45C \uC774\uB3D9, \uC704 / X \uD68C\uC804, Z \uC5ED\uD68C\uC804, Space \uB099\uD558, C \uD640\uB4DC, P \uC77C\uC2DC\uC815\uC9C0."},pt:{dangerEffect:"Efeito de perigo",screenShake:"Vibra\xE7\xE3o",noScreenShake:"Sem vibra\xE7\xE3o",crazyDifficulty:"Dificuldade",title:"Ponte",back:"Voltar aos trabalhos",marathon:"Maratona",sprint:"40 linhas",settings:"Defini\xE7\xF5es",donate:"Doar",language:"Idioma",volume:"Volume",theme:"Fundo",touch:"Toque",touchAuto:"Auto",touchOn:"Ligado",touchOff:"Desligado",dark:"Preto",light:"Branco",close:"Voltar",hold:"Reserva",next:"Seguinte",score:"Pontos",lines:"Linhas",stage:"Fase",best:"Recorde",time:"Tempo",holdReady:"Pode reservar",holdUsed:"J\xE1 reservada",left:"Esq.",right:"Dir.",rotate:"Girar",rotateLeft:"Girar esquerda",rotateRight:"Girar direita",warning:"ATEN\xC7\xC3O",fever:"Fever",feverStart:"Fever de combo e explos\xE3o!",danger:"PERIGO",keep:"Reter",drop:"Cair",soft:"Descer",fire:"Atirar",start:"Come\xE7ar",again:"Outra vez",menu:"Menu",resume:"Continuar",paused:"Pausa",pauseHint:"P ou Esc para continuar.",teachBreakout:"Esquerda e direita movem a raquete. Segura a bola.",arcadeSpeed:"Velocidade \xD72",arcadeDouble:"Bolas \xD72",arcadeTriple:"Bolas \xD73",arcadeWide:"Raquete maior",arcadeNarrow:"Raquete menor",teachBbtan:"Esquerda e direita miram. Espa\xE7o ou cima dispara.",teachPinball:"Esquerda sobe o flipper esquerdo. Direita sobe o direito.",curseReverse:"Invertido",curseBlind:"Apag\xE3o",curseRush:"Pressa",curseNorotate:"Sem girar",curseNoHold:"Sem reservar",garbageAdded:"Lixo sobe",garbageStable:"Pilha est\xE1vel",topped:"Chegou ao topo",cleared:"40 linhas",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"Pinball",rewardSand:"Areia",teachSand:"Vinte quedas. Uma cor ligada na largura toda some.",tspin:"T-Spin",tspinSingle:"T-Spin Single",tspinDouble:"T-Spin Double",tspinTriple:"T-Spin Triple",tspinMini:"T-Spin Mini",tspinMiniSingle:"Mini Single",combo:"Combo",comboLines:"Linhas extras",sand:"Areia",normal:"Normal",hard:"Dif\xEDcil",custom:"Personalizado",pace:"Velocidade",boards:"Ranking",gameBridge:"Bridge",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"Pinball",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"A maratona vira o po\xE7o em cada fase e \xE0s vezes abre Breakout, BBTAN ou pinball. As 40 linhas s\xE3o contra o tempo.",menuHint:"As pe\xE7as podem fazer ponte sobre buracos. O ponto amarelo s\xF3 explode quando \xE9 apagado, e no b\xF3nus as bombas encadeiam.",keys:"Setas movem, Cima / X roda, Z inverte, Espa\xE7o larga, C reserva, P pausa."},es:{dangerEffect:"Efecto de peligro",screenShake:"Temblor",noScreenShake:"Sin temblor",crazyDifficulty:"Dificultad",title:"Puente",back:"Volver a los trabajos",marathon:"Marat\xF3n",sprint:"40 l\xEDneas",settings:"Ajustes",donate:"Donar",language:"Idioma",volume:"Volumen",theme:"Fondo",touch:"T\xE1ctil",touchAuto:"Auto",touchOn:"S\xED",touchOff:"No",dark:"Negro",light:"Blanco",close:"Volver",hold:"Reserva",next:"Siguiente",score:"Puntos",lines:"L\xEDneas",stage:"Fase",best:"Mejor",time:"Tiempo",holdReady:"Puedes reservar",holdUsed:"Ya reservada",left:"Izq.",right:"Der.",rotate:"Girar",rotateLeft:"Giro izquierdo",rotateRight:"Giro derecho",warning:"ALERTA",fever:"Fever",feverStart:"\xA1Fever de combo y explosi\xF3n!",danger:"PELIGRO",keep:"Guardar",drop:"Caer",soft:"Bajar",fire:"Disparar",start:"Empezar",again:"Otra vez",menu:"Men\xFA",resume:"Seguir",paused:"Pausa",pauseHint:"P o Esc para seguir.",teachBreakout:"Izquierda y derecha mueven la pala. No dejes caer la bola.",arcadeSpeed:"Velocidad \xD72",arcadeDouble:"Bolas \xD72",arcadeTriple:"Bolas \xD73",arcadeWide:"Pala grande",arcadeNarrow:"Pala peque\xF1a",teachBbtan:"Izquierda y derecha apuntan. Espacio o arriba dispara.",teachPinball:"Izquierda sube la aleta izquierda. Derecha sube la derecha.",curseReverse:"Invertido",curseBlind:"Oscuro",curseRush:"Prisa",curseNorotate:"Sin girar",curseNoHold:"Sin reserva",garbageAdded:"Sube basura",garbageStable:"Pila estable",topped:"Lleg\xF3 arriba",cleared:"40 l\xEDneas",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"Pinball",rewardSand:"Arena",teachSand:"Veinte ca\xEDdas. Un color unido en todo el ancho desaparece.",tspin:"T-Spin",tspinSingle:"T-Spin Single",tspinDouble:"T-Spin Double",tspinTriple:"T-Spin Triple",tspinMini:"T-Spin Mini",tspinMiniSingle:"Mini Single",combo:"Combo",comboLines:"L\xEDneas extra",sand:"Arena",normal:"Normal",hard:"Dif\xEDcil",custom:"Personalizado",pace:"Velocidad",boards:"R\xE9cords",gameBridge:"Bridge",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"Pinball",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"El marat\xF3n gira el pozo en cada fase y a veces abre Breakout, BBTAN o pinball. Las 40 l\xEDneas son contra el reloj.",menuHint:"Las piezas pueden tender un puente sobre huecos. El punto amarillo explota solo al borrarse, y en los bonus las bombas encadenan.",keys:"Flechas mueven, Arriba / X gira, Z invierte, Espacio suelta, C reserva, P pausa."}},mu={crazyMode_vault:"\u91D1\u5EAB\u8DD1\u8DF3",crazyVaultStart:"60 \u79D2\uFF1A\u8DD1\u8DF3\u64BF\u5E63\uFF0C\u5E36\u56DE\u9280\u884C\u5B58\u5165 360",crazyVaultCleared:"\u91D1\u5EAB\u7834\u89E3\uFF01Boss \u89E3\u9664\u9396\u8840",crazyVaultFailed:"\u91D1\u5EAB\u5931\u6557 \xB7 \u6263 80 HP",crazyVaultMove:"\u79FB\u52D5"},gu={envyIntro:["\u7ABA\u8996\u4E4B\u5B50","The Watching Child"],envyLore:["\u5E7D\u6797\u88E1\u7684\u5B69\u5B50\uFF0C\u7ABA\u8996\u8457\u4E0D\u5C6C\u65BC\u81EA\u5DF1\u7684\u5E78\u798F\u3002","A child in the dark woods watches happiness that belongs to others."],pridePuzzleFailed:["\u5DF4\u5225\u5854\u5931\u6557","Tower challenge failed"],prideRedFailed:["\u7D05\u93E1\u6311\u6230\u5931\u6557","Red mirror challenge failed"],prideShardHit:["\u788E\u93E1\u547D\u4E2D","Mirror shard hit"],"crazyMode_pride-escape":["\u9003\u96E2\u50B2\u6162\u4E4B\u5854","Escape the Tower of Pride"],"crazyHint_pride-escape":["\u5DE6\u53F3\u627E\u843D\u8173\u9EDE\uFF0C\u7A7A\u767D\u9375\uFF0F\u4E0B\u9375\u4E0B\u964D\uFF0C\u9003\u5230 100 \u5C64","Move left/right to land safely; Space / down drops; reach floor 100"],"crazyHint_pride-doodle":["\u81EA\u52D5\u5F48\u8DF3\uFF1B\u5DE6\u53F3\u79FB\u52D5\uFF0C\u7A7A\u767D\u9375 \u5C04\u64CA\u5E7B\u5F71","Auto-jump; move left/right and shoot phantoms with Space"],"crazyHint_pride-tower":["\u5C0D\u6E96\u9802\u5C64\u518D\u653E\u5C64\uFF1B\u758A\u6EFF\u76EE\u6A19\u624D\u904E\u95DC","Align with the top floor, then drop; reach the target height"],"crazyHint_pride-shard-puzzle":["\u65CB\u8F49\u788E\u7247\u62FC\u56DE\u93E1\u5B50\uFF1BC\uFF0FShift \u63D0\u793A\u6263 1 \u79D2","Rotate the fragments to restore the mirror; C / Shift hints cost 1 second"],"crazyHint_pride-truth-trial":["\u8FFD\u8E64\u771F\u93E1\uFF1BC\uFF0FShift \u91CD\u770B\u6263 2 \u79D2","Track the real mirror; C / Shift replays cost 2 seconds"],"crazyHint_pride-mirror-maze":["\u65CB\u93E1\u5C0E\u5149\uFF0C\u6536\u96C6 3 \u7C92\u6C34\u6676\uFF1BC\uFF0FShift \u9A57\u8B49","Turn mirrors to collect 3 crystals; C / Shift checks the route"],"crazyHint_pride-kaleidoscope":["\u63C0\u76F8\u540C\u91D1\u9EDE\u5716\u6848\uFF0C\u518D\u6309 \u7A7A\u767D\u9375 \u53CD\u653B","Find the matching gold dots, then press Space to counter"],prideRedUnlocked:["\u7D05\u93E1\u9396\u8840\u89E3\u9664\uFF01","The red mirror's health lock is broken!"],"crazyHint_pride-shard-storm":["\u4E09\u8ECC\u5230\u91D1\u7DDA\u6642\u6309 \u5DE6\uFF0F\u7A7A\u767D\u9375\uFF0F\u53F3\uFF1Bbest\uFF0Fgood \u53CD\u653B\uFF0Cdamage \u6263\u8840","Three lanes: Left / Space / Right; best / good reflect, damage hurts"],"crazyHint_pride-nested":["\u9023\u63A5\u5169\u500B\u5C01\u5370\u5230\u51FA\u53E3\uFF1BC\uFF0FShift \u9A57\u8B49\uFF0C\u7A7A\u767D\u9375 \u53CD\u653B","Connect both seals to the exit; C / Shift checks, Space counters"],"crazyHint_pride-gaze-up":["\u4E09\u93E1\u9396\u5B9A\u5F8C\u96E2\u958B\u5C04\u7DDA\uFF1B\u93E1\u4EAE\u6642 \u7A7A\u767D\u9375 \u53CD\u653B","Dodge the locked mirror beams; Space counters glowing mirrors"],"crazyHint_pride-reflect-up":["\u7A7A\u767D\u9375 \u5C04\u6307\u5B9A\u93E1\uFF1B\u79FB\u52D5\u907F\u958B\u53CD\u5C04\u5F48","Space shoots the marked mirror; move to dodge reflections"],"crazyHint_pride-crown-up":["\u907F\u958B\u6CE2\u7D0B\u6216 \u7A7A\u767D\u9375 \u8DF3\uFF1B\u93E1\u4EAE\u6642\u53EF\u53CD\u653B","Dodge shockwaves or jump with Space; counter glowing mirrors"],"crazyHint_pride-red-survival":["\u81EA\u52D5\u5C04\u64CA\u3001\u62FE\u9053\u5177\uFF1B\u7A7A\u767D\u9375 \u96C6\u706B\uFF0CC\uFF0FShift \u7CBE\u6E96","Auto-fire and collect power-ups; Space bursts, C / Shift precision"],prideMirrorName:["\u93E1\u4E4B\u5316\u8EAB","Mirror Incarnation"],sinPride:["\u50B2\u6162","Pride"],prideIntro:["\u93E1\u5BAE\u4E4B\u738B","King of the mirror palace"],prideLore:["\u93E1\u5BAE\u4E4B\u738B\u4FEF\u8996\u4E00\u5207\u3002\u6311\u6230\u4ED6\u7684\u50B2\u6162\u738B\u6B0A\u3002","The king looks down upon all. Challenge his arrogant rule."],prideDefeated:["\u50B2\u6162\u64CA\u7834\uFF01","Pride defeated!"],prideCleared:["\u50B2\u6162\u5DF2\u901A\u95DC","Pride cleared"],prideRetry:["\u93E1\u4E2D\u5C0D\u6C7A\u91CD\u8A66 \xB7 Boss \u9396\u8840","Mirror duel retry \xB7 Boss locked"],prideDuelFailed:["\u93E1\u4E2D\u5C0D\u6C7A\u5931\u6557 \xB7 \u6263 80 HP","Mirror duel failed \xB7 80 HP penalty"],prideWrongCrown:["\u5047\u7687\u51A0\uFF01","False crown!"],prideAttackHit:["\u738B\u6B0A\u653B\u64CA\uFF01","Royal strike!"],"crazyMode_pride-mirror-match":["\u93E1\u50CF\u914D\u5C0D","Mirror match"],"crazyMode_pride-crown-choice":["\u52A0\u5195\u6289\u64C7","Crown choice"],"crazyMode_pride-lianliankan":["\u9023\u9023\u770B","Tile connect"],"crazyMode_pride-gaze":["\u738B\u4E4B\u8511\u8996","Royal contempt"],"crazyMode_pride-mirror":["\u93E1\u50CF\u53CD\u5C04","Mirror reflection"],"crazyMode_pride-crown-shock":["\u52A0\u5195\u885D\u64CA","Coronation shock"],"crazyMode_pride-mirror-duel":["\u93E1\u4E2D\u5C0D\u6C7A","Mirror duel"],"crazyHint_pride-mirror-match":["\u5DE6\u53F3\u5404\u63C0\u4E00\u5F35\uFF0C\u914D\u5C0D\u76F8\u540C\u5716\u6848","Match a card from each side"],"crazyHint_pride-crown-choice":["\u6BD4\u8F03\u539F\u77F3\uFF0C\u63C0\u5BF6\u77F3\u95CA\u5EA6\u76F8\u540C\u7684\u7687\u51A0","Choose the crown whose gem matches the reference"],"crazyHint_pride-lianliankan":["\u9023\u63A5\u76F8\u540C\u5716\u6848\uFF0C\u8DEF\u5F91\u6700\u591A\u5169\u5F4E","Connect matching tiles with at most two turns"],"crazyHint_pride-gaze":["\u907F\u958B\u96D9\u773C\u6383\u5C04\uFF1B\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52D5","Move with arrows or drag to dodge the gaze"],"crazyHint_pride-mirror":["\u7A7A\u767D\u9375 \u5C04\u64CA\u6307\u5B9A\u93E1\uFF1B\u907F\u958B\u53CD\u5C04\u5F48\u5E55","SPACE shoots the marked mirror; dodge reflected bullets"],"crazyHint_pride-crown-shock":["\u7A7A\u767D\u9375 \u8DF3\u8E8D\uFF1B\u907F\u958B\u843D\u9EDE\u53CA\u885D\u64CA\u6CE2","SPACE jumps; avoid crown landings and shockwaves"],"crazyHint_pride-mirror-duel":["\u8E29\u4EAE\u93E1\u5EA7 \u2192 \u96E2\u958B \u2192 \u7A7A\u767D\u9375\u5C01\u4F4F\u5EF6\u9072\u93E1\u50CF","Charge a seal, leave, then press Space to catch your delayed mirror"]},_u={controlsGuide:["\u63A7\u5236\u6309\u9215\u8AAA\u660E","\u63A7\u5236\u6309\u94AE\u8BF4\u660E","Controls","\u64CD\u4F5C\u8AAC\u660E","\uC870\uC791 \uC548\uB0B4","Controlos","Controles"],controlsMove:["\u79FB\u52D5\uFF0F\u9078\u64C7","\u79FB\u52A8\uFF0F\u9009\u62E9","Move / select","\u79FB\u52D5\uFF0F\u9078\u629E","\uC774\uB3D9 / \uC120\uD0DD","Mover / selecionar","Mover / seleccionar"],controlsUp:["\u65CB\u8F49\uFF0F\u5411\u4E0A","\u65CB\u8F6C\uFF0F\u5411\u4E0A","Rotate / up","\u56DE\u8EE2\uFF0F\u4E0A","\uD68C\uC804 / \uC704","Rodar / cima","Girar / arriba"],controlsRotate:["\u65B9\u584A\u53F3\u65CB\uFF0F\u5DE6\u65CB","\u65B9\u5757\u53F3\u65CB\uFF0F\u5DE6\u65CB","Blocks: rotate right / left","\u30D6\u30ED\u30C3\u30AF\uFF1A\u53F3\u56DE\u8EE2\uFF0F\u5DE6\u56DE\u8EE2","\uBE14\uB85D: \uC624\uB978\uCABD / \uC67C\uCABD \uD68C\uC804","Blocos: rodar \xE0 direita / esquerda","Bloques: girar a la derecha / izquierda"],controlsDown:["\u7DE9\u964D\uFF0F\u5411\u4E0B","\u7F13\u964D\uFF0F\u5411\u4E0B","Soft drop / down","\u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7\uFF0F\u4E0B","\uC18C\uD504\uD2B8 \uB4DC\uB86D / \uC544\uB798","Descida suave / baixo","Ca\xEDda suave / abajo"],controlsMain:["\u4E0B\u843D\uFF0F\u4E3B\u52D5\u4F5C","\u4E0B\u843D\uFF0F\u4E3B\u52A8\u4F5C","Drop / main action","\u843D\u4E0B\uFF0F\u4E3B\u64CD\u4F5C","\uB099\uD558 / \uC8FC \uB3D9\uC791","Largar / a\xE7\xE3o principal","Caer / acci\xF3n principal"],controlsAlt:["\u4FDD\u7559\uFF0F\u526F\u52D5\u4F5C","\u4FDD\u7559\uFF0F\u526F\u52A8\u4F5C","Hold / secondary action","\u30DB\u30FC\u30EB\u30C9\uFF0F\u526F\u64CD\u4F5C","\uD640\uB4DC / \uBCF4\uC870 \uB3D9\uC791","Reservar / a\xE7\xE3o secund\xE1ria","Reservar / acci\xF3n secundaria"],controlsOpenMenu:["\u958B\u555F\u83DC\u55AE","\u6253\u5F00\u83DC\u5355","Open menu","\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F","\uBA54\uB274 \uC5F4\uAE30","Abrir menu","Abrir men\xFA"],controlsTouch:["\u89F8\u63A7\u6309\u9215\u529F\u80FD\u76F8\u540C\uFF1B\u5C0F\u904A\u6232\u4EE5\u6309\u9215\u7576\u524D\u540D\u7A31\u70BA\u6E96\u3002","\u89E6\u63A7\u6309\u94AE\u529F\u80FD\u76F8\u540C\uFF1B\u5C0F\u6E38\u620F\u4EE5\u6309\u94AE\u5F53\u524D\u540D\u79F0\u4E3A\u51C6\u3002","Touch buttons have the same functions; follow the current labels in minigames.","\u30BF\u30C3\u30C1\u30DC\u30BF\u30F3\u3082\u540C\u3058\u6A5F\u80FD\u3002\u30DF\u30CB\u30B2\u30FC\u30E0\u3067\u306F\u73FE\u5728\u306E\u30DC\u30BF\u30F3\u8868\u793A\u306B\u5F93\u3063\u3066\u304F\u3060\u3055\u3044\u3002","\uD130\uCE58 \uBC84\uD2BC\uB3C4 \uAC19\uC740 \uAE30\uB2A5\uC785\uB2C8\uB2E4. \uBBF8\uB2C8\uAC8C\uC784\uC5D0\uC11C\uB294 \uD604\uC7AC \uBC84\uD2BC \uD45C\uC2DC\uB97C \uB530\uB974\uC138\uC694.","Os bot\xF5es no ecr\xE3 t\xEAm as mesmas fun\xE7\xF5es; nos minijogos, siga as etiquetas atuais.","Los botones t\xE1ctiles tienen las mismas funciones; en minijuegos, sigue las etiquetas actuales."]};function yu(i,e){return _u[e]?_u[e][Math.max(0,Ri.indexOf(i))]:gu[e]?gu[e][i?.startsWith("zh")?0:1]:mu[e]?mu[e]:(Jc[i]||Jc["zh-Hant"])[e]??Jc.en[e]??e}var xu=["\u7E41\u9AD4\u4E2D\u6587","\u7B80\u4F53\u4E2D\u6587","English","\u65E5\u672C\u8A9E","\uD55C\uAD6D\uC5B4","Portugu\xEAs","Espa\xF1ol"],Q_={quality:["\u6E32\u67D3\u54C1\u8CEA","\u6E32\u67D3\u8D28\u91CF","Rendering quality","\u63CF\u753B\u54C1\u8CEA","\uB80C\uB354\uB9C1 \uD488\uC9C8","Qualidade gr\xE1fica","Calidad gr\xE1fica"],qualityAuto:["\u81EA\u52D5","\u81EA\u52A8","Auto","\u81EA\u52D5","\uC790\uB3D9","Autom\xE1tico","Autom\xE1tico"],qualityStandard:["\u6A19\u6E96","\u6807\u51C6","Standard","\u6A19\u6E96","\uD45C\uC900","Normal","Est\xE1ndar"],qualityLight:["\u8F15\u91CF","\u8F7B\u91CF","Lightweight","\u8EFD\u91CF","\uACBD\uB7C9","Leve","Ligera"],crazyContinue:["\u7E7C\u7E8C","\u7EE7\u7EED","Continue","\u7D9A\u3051\u308B","\uACC4\uC18D","Continuar","Continuar"],crazySevenSins:["\u4E03\u5927\u7F6A","\u4E03\u5927\u7F6A","Seven Deadly Sins","\u4E03\u3064\u306E\u5927\u7F6A","\uC77C\uACF1 \uAC00\uC9C0 \uB300\uC8C4","Sete Pecados Capitais","Siete Pecados Capitales"],crazyDifficulty:["\u96E3\u5EA6","\u96BE\u5EA6","Difficulty","\u96E3\u6613\u5EA6","\uB09C\uC774\uB3C4","Dificuldade","Dificultad"],normal:["Normal","Normal","Normal","Normal","Normal","Normal","Normal"],hard:["Hard","Hard","Hard","Hard","Hard","Hard","Hard"],close:["\u8FD4\u56DE","\u8FD4\u56DE","Back","\u623B\u308B","\uB3CC\uC544\uAC00\uAE30","Voltar","Volver"],crazyLocked:["\u5C01\u5370","\u5C01\u5370","Sealed","\u5C01\u5370","\uBD09\uC778","Selado","Sellado"],crazyGreed:["\u8CAA\u5A6A","\u8D2A\u5A6A","Greed","\u5F37\u6B32","\uD0D0\uC695","Gan\xE2ncia","Codicia"],sinPride:["\u50B2\u6162","\u50B2\u6162","Pride","\u50B2\u6162","\uC624\uB9CC","Orgulho","Soberbia"],sinEnvy:["\u5AC9\u5992","\u5AC9\u5992","Envy","\u5AC9\u59AC","\uC9C8\uD22C","Inveja","Envidia"],sinLust:["\u8272\u617E","\u8272\u6B32","Lust","\u8272\u6B32","\uC0C9\uC695","Lux\xFAria","Lujuria"],sinGluttony:["\u66B4\u98DF","\u66B4\u98DF","Gluttony","\u66B4\u98DF","\uD3ED\uC2DD","Gula","Gula"],sinSloth:["\u6020\u60F0","\u6020\u60F0","Sloth","\u6020\u60F0","\uB098\uD0DC","Pregui\xE7a","Pereza"],sinWrath:["\u61A4\u6012","\u6124\u6012","Wrath","\u61A4\u6012","\uBD84\uB178","Ira","Ira"],crazyDealer:["\u72C2\u5BB4\u838A\u5BB6","\u72C2\u5BB4\u5E84\u5BB6","THE MAD DEALER","\u72C2\u5BB4\u306E\u30C7\u30A3\u30FC\u30E9\u30FC","\uAD11\uB780\uC758 \uB51C\uB7EC","O CROUPIER LOUCO","EL CRUPIER LOCO"],crazyGreedLore:["\u838A\u5BB6\u60F3\u8981\u4E00\u5207\u3002\u6311\u6230\u8CAA\u5A6A\u7684\u8CED\u5C40\u3002","\u5E84\u5BB6\u60F3\u8981\u4E00\u5207\u3002\u6311\u6218\u8D2A\u5A6A\u7684\u8D4C\u5C40\u3002","The house wants everything. Challenge the dealer's greed.","\u80F4\u5143\u306F\u3059\u3079\u3066\u3092\u6B32\u3057\u304C\u308B\u3002\u5F37\u6B32\u306A\u8CED\u3051\u306B\u6311\u3081\u3002","\uB51C\uB7EC\uB294 \uBAA8\uB4E0 \uAC83\uC744 \uC6D0\uD569\uB2C8\uB2E4. \uD0D0\uC695\uC758 \uB3C4\uBC15\uC5D0 \uB3C4\uC804\uD558\uC138\uC694.","A casa quer tudo. Desafie a gan\xE2ncia do croupier.","La banca lo quiere todo. Desaf\xEDa la codicia del crupier."],demo:["\u7368\u7ACB\u8A66\u73A9","\u72EC\u7ACB\u8BD5\u73A9","PREVIEW","\u4F53\u9A13\u7248","\uCCB4\uD5D8\uD310","DEMO","DEMO"],insert:["\u63D2\u5165\u5361\u5E36 \u2197","\u63D2\u5165\u5361\u5E26 \u2197","Insert cartridge \u2197","\u30AB\u30BB\u30C3\u30C8\u3092\u633F\u3059 \u2197","\uCE74\uD2B8\uB9AC\uC9C0 \uC0BD\uC785 \u2197","Inserir cartucho \u2197","Insertar cartucho \u2197"],rotate:["\u65CB\u8F49\u5361\u5E36","\u65CB\u8F6C\u5361\u5E26","Rotate cartridge","\u30AB\u30BB\u30C3\u30C8\u56DE\u8EE2","\uCE74\uD2B8\uB9AC\uC9C0 \uD68C\uC804","Rodar cartucho","Girar cartucho"],reset:["\u64FA\u6B63","\u6446\u6B63","Reset","\u30EA\u30BB\u30C3\u30C8","\uCD08\uAE30\uD654","Repor","Reiniciar"],eject:["\u8FD4\u56DE\u9078\u95DC","\u8FD4\u56DE\u9009\u5173","Back to selection","\u9078\u629E\u306B\u623B\u308B","\uC120\uD0DD\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30","Voltar \xE0 sele\xE7\xE3o","Volver a selecci\xF3n"],zoomIn:["\u653E\u5927","\u653E\u5927","Zoom in","\u62E1\u5927","\uD655\uB300","Ampliar","Acercar"],zoomOut:["\u7E2E\u5C0F","\u7F29\u5C0F","Zoom out","\u7E2E\u5C0F","\uCD95\uC18C","Reduzir","Alejar"],settings:["\u8A66\u73A9\u8A2D\u5B9A","\u8BD5\u73A9\u8BBE\u7F6E","Preview settings","\u4F53\u9A13\u7248\u8A2D\u5B9A","\uCCB4\uD5D8\uD310 \uC124\uC815","Op\xE7\xF5es da demo","Opciones de demo"],reduced:["\u6E1B\u5C11\u52D5\u614B\u6548\u679C","\u51CF\u5C11\u52A8\u6001\u6548\u679C","Reduce motion","\u52D5\u304D\u3092\u6E1B\u3089\u3059","\uB3D9\uC791 \uC904\uC774\uAE30","Reduzir movimento","Reducir movimiento"],sound:["\u63D2\u5361\uFF0F\u958B\u6A5F\u97F3\u6548","\u63D2\u5361\uFF0F\u5F00\u673A\u97F3\u6548","Insert / boot sounds","\u633F\u5165\u30FB\u8D77\u52D5\u97F3","\uC0BD\uC785 / \uC2DC\uC791 \uC18C\uB9AC","Som de inser\xE7\xE3o / arranque","Sonido de inserci\xF3n / inicio"],theme:["\u5916\u89C0","\u5916\u89C2","Appearance","\u5916\u89B3","\uC678\uAD00","Aspeto","Aspecto"],light:["\u767D\u8272\u6A21\u5F0F","\u767D\u8272\u6A21\u5F0F","Light mode","\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9","\uB77C\uC774\uD2B8 \uBAA8\uB4DC","Modo claro","Modo claro"],dark:["\u9ED1\u8272\u6A21\u5F0F","\u9ED1\u8272\u6A21\u5F0F","Dark mode","\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9","\uB2E4\uD06C \uBAA8\uB4DC","Modo escuro","Modo oscuro"],note:["\u7368\u7ACB\u8A66\u73A9\uFF0C\u4E0D\u5BEB\u6B63\u5F0F\u9032\u5EA6\u3002\u5916\u89C0\u53CA\u8A9E\u8A00\u6CBF\u7528\u4E3B\u904A\u6232\uFF1B\u6B64\u8655\u5207\u63DB\u53EA\u5F71\u97FF\u793A\u7BC4\u3002","\u72EC\u7ACB\u8BD5\u73A9\uFF0C\u4E0D\u5199\u6B63\u5F0F\u8FDB\u5EA6\u3002\u5916\u89C2\u53CA\u8BED\u8A00\u6CBF\u7528\u4E3B\u6E38\u620F\uFF1B\u6B64\u5904\u5207\u6362\u53EA\u5F71\u54CD\u793A\u8303\u3002","Independent preview; no saved progress. Theme and language follow the main game; demo changes stay here.","\u4F53\u9A13\u7248\u3002\u9032\u884C\u306F\u4FDD\u5B58\u3055\u308C\u307E\u305B\u3093\u3002\u5916\u89B3\u3068\u8A00\u8A9E\u306F\u672C\u7DE8\u3092\u5F15\u304D\u7D99\u304E\u3001\u5909\u66F4\u306F\u4F53\u9A13\u7248\u306E\u307F\u3067\u3059\u3002","\uB3C5\uB9BD \uCCB4\uD5D8\uD310\uC73C\uB85C \uC9C4\uD589\uC744 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uBCF8 \uAC8C\uC784\uC758 \uD14C\uB9C8\uC640 \uC5B8\uC5B4\uB97C \uB530\uB974\uBA70 \uBCC0\uACBD\uC740 \uB370\uBAA8\uC5D0\uB9CC \uC801\uC6A9\uB429\uB2C8\uB2E4.","Demo independente sem guardar progresso. Tema e idioma seguem o jogo; altera\xE7\xF5es ficam nesta demo.","Demo independiente sin guardar progreso. Tema e idioma siguen el juego; los cambios quedan en esta demo."],help:["\u62D6\u52D5\u5361\u5E36\u81F3\u6A5F\u9802\u653E\u624B\u3002\u53F3\u9375\uFF0FShift \u62D6\u52D5\u6216\u65CB\u8F49\u6A21\u5F0F\u8F49\u52D5\uFF1B\u6EFE\u8F2A\uFF0F\u96D9\u6307\u53CA \xB1 \u7E2E\u653E\u3002\u2190 \u2192 \u63DB\u5361\uFF0C\u7A7A\u767D\u63D2\u5165\u3002","\u62D6\u52A8\u5361\u5E26\u81F3\u673A\u9876\u677E\u624B\u3002\u53F3\u952E\uFF0FShift \u62D6\u52A8\u6216\u65CB\u8F6C\u6A21\u5F0F\u8F6C\u52A8\uFF1B\u6EDA\u8F6E\uFF0F\u53CC\u6307\u53CA \xB1 \u7F29\u653E\u3002\u2190 \u2192 \u6362\u5361\uFF0C\u7A7A\u683C\u63D2\u5165\u3002","Drag to the top slot and release. Right-drag / Shift-drag or rotation mode to turn; wheel / pinch or \xB1 to zoom. \u2190 \u2192 select; Space inserts.","\u4E0A\u306E\u633F\u5165\u53E3\u307E\u3067\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u96E2\u3057\u307E\u3059\u3002\u53F3\u30C9\u30E9\u30C3\u30B0\u30FBShift\u30FB\u56DE\u8EE2\u30E2\u30FC\u30C9\u3067\u56DE\u8EE2\u3002\u30DB\u30A4\u30FC\u30EB\u30FB\u30D4\u30F3\u30C1\u30FB\xB1\u3067\u62E1\u7E2E\u3002\u2190 \u2192 \u9078\u629E\u3001Space \u633F\u5165\u3002","\uC0C1\uB2E8 \uC2AC\uB86F\uC73C\uB85C \uB4DC\uB798\uADF8 \uD6C4 \uB193\uC73C\uC138\uC694. \uC6B0\uD074\uB9AD / Shift \uB4DC\uB798\uADF8 \uB610\uB294 \uD68C\uC804 \uBAA8\uB4DC\uB85C \uD68C\uC804, \uD720 / \uB450 \uC190\uAC00\uB77D / \xB1\uB85C \uD655\uB300\xB7\uCD95\uC18C. \u2190 \u2192 \uC120\uD0DD, Space \uC0BD\uC785.","Arraste at\xE9 \xE0 ranhura superior e solte. Bot\xE3o direito / Shift ou modo de rota\xE7\xE3o para rodar; roda / pin\xE7a / \xB1 para zoom. \u2190 \u2192 escolher; Space inserir.","Arrastra hasta la ranura superior y suelta. Bot\xF3n derecho / Shift o modo de giro para girar; rueda / pellizco / \xB1 para zoom. \u2190 \u2192 elegir; Space insertar."],ready:["\u9078\u4E00\u76D2\u5361\u5E36\uFF0C\u958B\u59CB\u6311\u6230\u3002","\u9009\u4E00\u76D2\u5361\u5E26\uFF0C\u5F00\u59CB\u6311\u6218\u3002","Choose a cartridge and challenge its Boss.","\u30AB\u30BB\u30C3\u30C8\u3092\u9078\u3093\u3067\u6311\u6226\u3002","\uCE74\uD2B8\uB9AC\uC9C0\uB97C \uACE8\uB77C \uB3C4\uC804\uD558\uC138\uC694.","Escolha um cartucho e desafie o Boss.","Elige un cartucho y desaf\xEDa al Boss."],sealed:["\u9019\u76D2\u4ECD\u88AB\u5C01\u5370\u3002","\u8FD9\u76D2\u4ECD\u88AB\u5C01\u5370\u3002","This cartridge is sealed.","\u3053\u306E\u30AB\u30BB\u30C3\u30C8\u306F\u5C01\u5370\u4E2D\u3002","\uC544\uC9C1 \uBD09\uC778\uB41C \uCE74\uD2B8\uB9AC\uC9C0\uC785\uB2C8\uB2E4.","Este cartucho est\xE1 selado.","Este cartucho est\xE1 sellado."],align:["\u8ACB\u5148\u64FA\u6B63\u5361\u5E36\uFF0C\u518D\u5C0D\u6E96\u63D2\u69FD\u3002","\u8BF7\u5148\u6446\u6B63\u5361\u5E26\uFF0C\u518D\u5BF9\u51C6\u63D2\u69FD\u3002","Straighten the cartridge and align it with the slot.","\u30AB\u30BB\u30C3\u30C8\u3092\u6B63\u9762\u306B\u5411\u3051\u3066\u633F\u5165\u53E3\u3078\u3002","\uCE74\uD2B8\uB9AC\uC9C0\uB97C \uBC14\uB974\uAC8C \uC815\uB82C\uD558\uC138\uC694.","Endireite e alinhe com a ranhura.","Endereza y alinea con la ranura."],reading:["\u5361\u5E36\u8B80\u53D6\u4E2D\u2026","\u5361\u5E26\u8BFB\u53D6\u4E2D\u2026","Reading cartridge\u2026","\u30AB\u30BB\u30C3\u30C8\u8AAD\u8FBC\u4E2D\u2026","\uCE74\uD2B8\uB9AC\uC9C0 \uC77D\uB294 \uC911\u2026","A ler o cartucho\u2026","Leyendo cartucho\u2026"],boot:["\u6B63\u5728\u9023\u63A5\u6311\u6230\u2026","\u6B63\u5728\u8FDE\u63A5\u6311\u6218\u2026","Connecting to the challenge\u2026","\u6311\u6226\u3078\u63A5\u7D9A\u4E2D\u2026","\uB3C4\uC804\uC73C\uB85C \uC5F0\uACB0 \uC911\u2026","A entrar no desafio\u2026","Entrando al desaf\xEDo\u2026"],loading:["\u958B\u555F\u5361\u5E36\u4E4B\u5323\u2026","\u6253\u5F00\u5361\u5E26\u4E4B\u5323\u2026","Opening cartridge archive\u2026","\u30AB\u30BB\u30C3\u30C8\u306E\u5323\u3092\u958B\u304F\u2026","\uCE74\uD2B8\uB9AC\uC9C0 \uBCF4\uAD00\uD568 \uC5EC\uB294 \uC911\u2026","A abrir os cartuchos\u2026","Abriendo los cartuchos\u2026"],fallback:["\u6B64\u88DD\u7F6E\u4E0D\u652F\u63F4\u7ACB\u9AD4\u6548\u679C\uFF0C\u4ECD\u53EF\u6309\u63D2\u5361\u9032\u5165 Boss\u3002","\u6B64\u8BBE\u5907\u4E0D\u652F\u6301\u7ACB\u4F53\u6548\u679C\uFF0C\u4ECD\u53EF\u6309\u63D2\u5361\u8FDB\u5165 Boss\u3002","3D is unavailable; the insert button still launches each Boss.","\u7ACB\u4F53\u8868\u793A\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002\u633F\u5165\u30DC\u30BF\u30F3\u3067\u6311\u6226\u3067\u304D\u307E\u3059\u3002","3D\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC9C0\uB9CC \uC0BD\uC785 \uBC84\uD2BC\uC73C\uB85C \uB3C4\uC804\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","3D indispon\xEDvel; o bot\xE3o ainda inicia cada Boss.","3D no disponible; el bot\xF3n inicia cada Boss."],error:["\u672A\u80FD\u8F09\u5165\u95DC\u5361\uFF0C\u8ACB\u8FD4\u56DE\u9078\u95DC\u518D\u8A66\u3002","\u672A\u80FD\u52A0\u8F7D\u5173\u5361\uFF0C\u8BF7\u8FD4\u56DE\u9009\u5173\u91CD\u8BD5\u3002","Could not load the encounter. Return to selection and retry.","\u8AAD\u8FBC\u5931\u6557\u3002\u9078\u629E\u306B\u623B\u3063\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC120\uD0DD\uC73C\uB85C \uB3CC\uC544\uAC00 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.","Falha ao carregar. Volte e tente novamente.","No se pudo cargar. Vuelve y reintenta."],lustIntro:["\u96F2\u4E0A\u4E18\u6BD4\u7279","\u4E91\u4E0A\u4E18\u6BD4\u7279","Cupid in the Clouds","\u96F2\u306E\u4E0A\u306E\u30AD\u30E5\u30FC\u30D4\u30C3\u30C9","\uAD6C\uB984 \uC704\uC758 \uD050\uD53C\uB4DC","Cupido nas Nuvens","Cupido en las Nubes"],lustLore:["\u96F2\u5CF6\u3001\u5F13\u5F26\u6A4B\u8207\u7834\u788E\u91D1\u7BAD\u3002\u9B45\u60D1\u8207\u81EA\u7531\u7684\u9078\u64C7\u3002","\u4E91\u5C9B\u3001\u5F13\u5F26\u6865\u4E0E\u7834\u788E\u91D1\u7BAD\u3002\u9B45\u60D1\u4E0E\u81EA\u7531\u7684\u9009\u62E9\u3002","Cloud islands, bowstring paths, and a choice freely made.","\u96F2\u306E\u5CF6\u3001\u5F13\u5F26\u306E\u6A4B\u3001\u7815\u3051\u305F\u91D1\u306E\u77E2\u3002\u9B45\u60D1\u3068\u81EA\u7531\u306E\u9078\u629E\u3002","\uAD6C\uB984\uC12C, \uD65C\uC2DC\uC704 \uB2E4\uB9AC, \uBD80\uC11C\uC9C4 \uD669\uAE08 \uD654\uC0B4. \uB9E4\uD639\uACFC \uC790\uC720\uC758 \uC120\uD0DD.","Ilhas nas nuvens, pontes de corda e flechas douradas partidas. Encanto e livre escolha.","Islas entre nubes, puentes de cuerda y flechas doradas rotas. Encanto y libre elecci\xF3n."],prideIntro:["\u93E1\u5BAE\u4E4B\u738B","\u955C\u5BAB\u4E4B\u738B","King of the mirror palace","\u93E1\u5BAE\u306E\u738B","\uAC70\uC6B8 \uAD81\uC804\uC758 \uC655","Rei do pal\xE1cio dos espelhos","Rey del palacio de espejos"],prideLore:["\u93E1\u5BAE\u4E4B\u738B\u4FEF\u8996\u4E00\u5207\u3002\u6311\u6230\u4ED6\u7684\u50B2\u6162\u738B\u6B0A\u3002","\u955C\u5BAB\u4E4B\u738B\u4FEF\u89C6\u4E00\u5207\u3002\u6311\u6218\u4ED6\u7684\u50B2\u6162\u738B\u6743\u3002","The king looks down upon all. Challenge his arrogant rule.","\u738B\u306F\u3059\u3079\u3066\u3092\u898B\u4E0B\u3059\u3002\u305D\u306E\u50B2\u6162\u306A\u738B\u6A29\u306B\u6311\u3081\u3002","\uC655\uC740 \uBAA8\uB4E0 \uAC83\uC744 \uB0B4\uB824\uB2E4\uBD05\uB2C8\uB2E4. \uC624\uB9CC\uD55C \uC655\uAD8C\uC5D0 \uB3C4\uC804\uD558\uC138\uC694.","O rei despreza todos. Desafie o seu reinado arrogante.","El rey desprecia a todos. Desaf\xEDa su arrogante dominio."],envyIntro:["\u7ABA\u8996\u4E4B\u5B50","\u7AA5\u89C6\u4E4B\u5B50","The Watching Child","\u8997\u304D\u898B\u308B\u5B50","\uC5FF\uBCF4\uB294 \uC544\uC774","A Crian\xE7a que Espia","El Ni\xF1o que Esp\xEDa"],envyLore:["\u5E7D\u6797\u88E1\u7684\u5B69\u5B50\uFF0C\u7ABA\u8996\u8457\u4E0D\u5C6C\u65BC\u81EA\u5DF1\u7684\u5E78\u798F\u3002","\u5E7D\u6797\u91CC\u7684\u5B69\u5B50\uFF0C\u7AA5\u89C6\u7740\u4E0D\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5E78\u798F\u3002","A child in the dark woods watches happiness that belongs to others.","\u6697\u3044\u68EE\u306E\u5B50\u306F\u3001\u4ED6\u4EBA\u306E\u5E78\u305B\u3092\u8997\u304D\u898B\u308B\u3002","\uC5B4\uB450\uC6B4 \uC232\uC758 \uC544\uC774\uB294 \uB0A8\uC758 \uD589\uBCF5\uC744 \uC5FF\uBD05\uB2C8\uB2E4.","Uma crian\xE7a no bosque escuro espreita a felicidade dos outros.","Un ni\xF1o en el bosque oscuro observa la felicidad ajena."]},ey=["crazyGreed","sinPride","sinEnvy","sinLust","sinGluttony","sinSloth","sinWrath"];function Ct(i,e){let t=Q_[e];return t?t[Math.max(0,Ri.indexOf(i))]:yu(i,e)}function ni(i,e){return Ct(i,ey[e])}function yo(i,e){return Ct(i,e==="greed"?"crazyDealer":e+"Intro")}function vu(i,e){return Ct(i,e==="greed"?"crazyGreedLore":e+"Lore")}function hs(i){return{"zh-Hant":"PixelHant","zh-Hans":"PixelHans",ja:"PixelJa",ko:"PixelKo"}[i]||"PixelLatin"}function $c(i){return{greed:"index.html",pride:"index.html",envy:"envy-preview.html",lust:"lust-preview.html"}[i]||null}var Su=i=>JSON.stringify(i).replaceAll("<","\\u003c");function ty({settings:i,local:e={},session:t={}}){return`(()=>{const local=${Su({...e,"bridge-settings":JSON.stringify(i)})},session=${Su({...t,"bridge-filming-unlock":"1"})};const memory=data=>({get length(){return Object.keys(data).length},key:i=>Object.keys(data)[i]??null,getItem:k=>Object.prototype.hasOwnProperty.call(data,k)?String(data[k]):null,setItem:(k,v)=>{data[String(k)]=String(v)},removeItem:k=>{delete data[k]},clear:()=>{for(const k of Object.keys(data))delete data[k]}});Object.defineProperty(window,'localStorage',{value:memory(local)});Object.defineProperty(window,'sessionStorage',{value:memory(session)});window.__cartridgeReadOnly=true;})();`}function Mu(i,{id:e,base:t,settings:n,local:r,session:s}){if(!$c(e))throw new RangeError("Unavailable Boss");let a=JSON.stringify({lang:n.lang,theme:n.theme,difficulty:n.crazyDifficulty||"normal"}),o=ty({settings:n,local:r,session:s});if(i=i.replace("<head>",`<head><base href="${t.replaceAll("&","&amp;").replaceAll('"',"&quot;")}"><script>${o.replaceAll("<\/script","<\\/script")}<\/script>`),!i.includes("window.__cartridgeReadOnly"))throw new Error("Missing isolated storage bootstrap");if(e==="greed"||e==="pride"){e==="pride"&&(i=i.replace('<body data-theme="light">','<body data-theme="light" data-pride-preview>'));let c=i.lastIndexOf("<\/script>");i=i.slice(0,c)+`
// Local cartridge adapter: normal encounter initialization, no state or score injection.
settings.lang=${JSON.stringify(n.lang)};settings.theme=${JSON.stringify(n.theme)};settings.crazyDifficulty=${JSON.stringify(n.crazyDifficulty||"normal")};applySettings();
${e==="pride"?'previewScenario="full";previewDifficulty=settings.crazyDifficulty;':""}addEventListener('message',e=>{if(e.source===parent&&e.data?.type==='cartridge-start')beginCrazy(${JSON.stringify(e)});});window.__cartridgeEncounter={id:${JSON.stringify(e)},get mode(){return crazy?.mode},get hp(){return crazy?.hp},get over(){return !!crazy?.over},get won(){return !!crazy?.won},get scene(){return crazy?.cutscene},get difficulty(){return crazy?.difficulty},get bridge(){return crazy?.bridge},get preview(){return !!crazy?.preview},get filming(){return !!crazy?.filming}};
`+i.slice(c)}else{let c=`<script>addEventListener('message',e=>{if(e.source!==parent||e.data?.type!=='cartridge-start')return;const config=${a};const scenario=document.getElementById('scenario'),difficulty=document.getElementById('difficulty');scenario.value='full';difficulty.value=config.difficulty;document.getElementById('launch-form').requestSubmit();});<\/script>`;i=i.replace("</body>",c+"</body>")}return i=i.replace("</body>","<script>function cartridgeFocusBoard(){const s=window.lustPreview||window.envyPreview||window.__cartridgeEncounter;if(!s||s.scene||s.over||s.won)return;const board=document.querySelector('#board,#envy-board,#lust-board');if(board){const game=document.getElementById('game');if(game)game.inert=false;board.tabIndex=-1;board.focus({preventScroll:true});}}addEventListener('click',e=>{if(e.target.closest('#cinematic-skip,#scene-continue,#play-menu-close,#resume,#menu-return')){cartridgeFocusBoard();requestAnimationFrame(cartridgeFocusBoard);}if(e.target.closest('#pick,#scene-pick,#result-bosses,#pride-preview-pick,#bosses-back,#play-menu-exit,#veil-menu'))parent.postMessage({type:'cartridge-return'},'*');});<\/script></body>"),i}function bu({memory:i,cores:e}={}){let t=Number.isFinite(i)&&i<=4||Number.isFinite(e)&&e<=4,n="auto",r=t,s=[];return{get preference(){return n},get quality(){return n==="auto"?r?"light":"standard":n},set(a){["auto","standard","light"].includes(a)&&(n=a,r=t,s=[])},observe(a){n!=="auto"||r||!Number.isFinite(a)||(s.push(a),s.length>24&&s.shift(),s.length===24&&s.filter(o=>o>24).length>=12&&(r=!0))},ratio(a,o,c=1){let l=this.quality==="light";return Math.min(c,l?1:1.5,Math.sqrt((l?24e4:6e5)/Math.max(1,a*o)))},interval({active:a=!1,reduced:o=!1}={}){return 1e3/(a?this.quality==="light"?24:30:o?1:this.quality==="light"?6:12)}}}var ce=i=>document.getElementById(i),rn=ce("stage"),fe=iu(),kn={};try{kn=JSON.parse(localStorage.getItem("bridge-settings")||"{}")}catch{}var Ze=Ri.includes(kn.lang)?kn.lang:"en",bn=kn.theme==="dark"?"dark":"light",ms=kn.crazyDifficulty==="hard"?"hard":"normal",fn=1,un=matchMedia("(prefers-reduced-motion:reduce)").matches,Tn=!1,gs=Math.max(0,Math.min(1,Number(kn.sfxVolume??kn.volume??.7))),vs=gs>0,Ii=bu({memory:navigator.deviceMemory,cores:navigator.hardwareConcurrency}),Tu=0,Eu=0,zn=!0,wu="",zu=0,Au=0,ny=null,el=[],Cu=performance.now(),Ut,nn,zt,_t,Qe,si=[],dt=null,Ru="browse",dn=null,So=!1,Pu=0,Li=new L,xo=new L,vo=new L,Iu=new L,Ou=new L,ku=new hn,ds=new Qr,Lu=new ge,Hu=new Kt(new L(0,0,1),-1.6),fs=new L,Ss=document.createElement("canvas");Ss.width=512;Ss.height=448;var tn=Ss.getContext("2d"),Mo=new Kn(Ss);Mo.colorSpace=Mt;Mo.minFilter=Wt;var Vu=[],Du=[];Object.defineProperty(window,"cartridgeDemo",{get:()=>({state:fe,game:ny,renderer:So?"fallback":"three-webgl",card:Qc(Qe?.position),slot:Qc(xo),version:"r3",performance:{quality:Ii.quality,frames:zu,drawCalls:Ut?.info.render.calls||0,triangles:Ut?.info.render.triangles||0,buffer:Ut?[Ut.domElement.width,Ut.domElement.height]:null},zoom:fn,theme:bn,lang:Ze,difficulty:ms,sound:vs,sfxLevel:gs,reduced:un,slotAbove:Qc(vo),encounter:_s,loading:On})});var iy={title:"crazySevenSins","demo-badge":"demo","local-label":"demo",insert:"insert",rotate:"rotate",reset:"reset",eject:"eject",resume:"crazyContinue","settings-title":"settings","theme-label":"theme","quality-label":"quality","reduced-label":"reduced","sound-label":"sound","settings-note":"note","help-note":"help","options-return":"close","difficulty-title":"crazyDifficulty",normal:"normal",hard:"hard","loading-title":"loading","fallback-note":"fallback"},ry=["greed","pride","envy","lust","gluttony","sloth","wrath"],_s=null,On=!1,gr=0,ii,Kc,Uu,Pi,ri=new Map,_r=null;function Di(){zn=!0,document.documentElement.lang=Ze,document.body.dataset.theme=bn;for(let[e,t]of Object.entries(iy))ce(e).textContent=Ct(Ze,t);ce("settings").ariaLabel=Ct(Ze,"settings"),ce("zoom-in").ariaLabel=Ct(Ze,"zoomIn"),ce("zoom-out").ariaLabel=Ct(Ze,"zoomOut"),ce("lang").value=Ze,ce("rotate").setAttribute("aria-pressed",String(fe.rotate)),ce("theme").value=bn,ce("quality").value=Ii.preference;for(let e of ce("quality").options)e.textContent=Ct(Ze,"quality"+e.value[0].toUpperCase()+e.value.slice(1));for(let e of["light","dark"])ce("theme").querySelector(`[value="${e}"]`).textContent=Ct(Ze,e);ce("description").textContent=Ct(Ze,"ready"),ce("normal").setAttribute("aria-pressed",String(ms==="normal")),ce("hard").setAttribute("aria-pressed",String(ms==="hard"));let i=Dt[fe.index];ce("concept").dataset.sin=i.id,ce("concept").style.setProperty("--tone",i.color),ce("concept-art").src=i.art,ce("concept-art").alt=yo(Ze,i.id),ce("boss-emblem").setAttribute("href","#sin-icon-"+i.id),ce("boss-title").textContent=ni(Ze,fe.index)+" \xB7 "+yo(Ze,i.id),ce("boss-lore").textContent=vu(Ze,i.id),ce("local-label").hidden=!i.preview,ce("game-label").textContent=ni(Ze,fe.index)+" \xB7 "+Ct(Ze,"demo"),ce("fx-title").textContent=ni(Ze,fe.index),ce("shelf").replaceChildren(...Dt.map((e,t)=>{let n=document.createElement("button");return n.type="button",n.dataset.index=t,n.style.setProperty("--tone",e.color),n.setAttribute("aria-pressed",String(t===fe.index)),n.setAttribute("aria-label",e.available?ni(Ze,t):Ct(Ze,"crazyLocked")),n.innerHTML=`<svg class="sin-emblem" aria-hidden="true"><use href="#sin-icon-${ry[t]}"/></svg><span><b>${e.available?ni(Ze,t):"\u25A3"}</b><small>${e.available?e.preview?Ct(Ze,"demo"):yo(Ze,e.id):Ct(Ze,"crazyLocked")}</small></span>`,n.onclick=()=>nl(t),n})),tl(),Gu(),el.length&&si.forEach((e,t)=>e.traverse(n=>{if(n.material?.uniforms?.uMap){let r=n.material.uniforms.uMap.value;n.material.uniforms.uMap.value=Xu(Dt[t],el[t]),r?.dispose()}})),yr()}function tl(){ce("zoom-value").textContent=Math.round(fn*100)+"%",ce("zoom-in").disabled=fn>=1.45,ce("zoom-out").disabled=fn<=.7}function bo(i){zn=!0,fe.phase==="browse"&&(fn=Math.max(.7,Math.min(1.45,i)),tl())}function Gu(){for(let i of Vu)i.userData.role&&i.uniforms.uColor.value.set(bn==="dark"?i.userData.role==="shell"?"#24252c":"#36383f":i.userData.role==="shell"?"#d0c9b9":"#eee5d4")}function yr(){let i=fe.message==="sealed"?"sealed":fe.message==="align"?"align":fe.phase==="insert"?"reading":fe.phase==="boot"||On?"boot":fe.message==="error"?"error":"ready",e=Ct(Ze,i);ce("status").textContent!==e&&(ce("status").textContent=e)}function Nu(i){let e={};try{for(let t=0;t<i.length;t++){let n=i.key(t);e[n]=i.getItem(n)}}catch{}return e}async function sy(){let i=Dt[fe.index].id,e=++gr;On=!0;try{let t=await fetch(new URL("./"+$c(i),document.baseURI));if(!t.ok)throw new Error("Encounter HTTP "+t.status);let n=await t.text();if(e!==gr)return;let r={...kn,lang:["envy","lust"].includes(i)?Ze.startsWith("zh")?"zh-Hant":"en":Ze,theme:bn,crazyDifficulty:ms};if(ce("game-shell").hidden=!1,ce("game-shell").style.visibility="hidden",ce("boss-frame").srcdoc=Mu(n,{id:i,base:new URL("./",document.baseURI).href,settings:r,local:Nu(localStorage),session:Nu(sessionStorage)}),_s=i,await new Promise((s,a)=>{let o=ce("boss-frame"),c=setTimeout(()=>a(new Error("Encounter load timeout")),2e4);o.onload=()=>{if(e!==gr)return clearTimeout(c),s();let l=o.contentWindow;l.__cartridgeReadOnly&&(clearTimeout(c),l.addEventListener("keydown",h=>{h.code==="Escape"&&h.shiftKey&&xs()}),s())}}),e!==gr)return;On=!1}catch(t){if(e!==gr)return;console.warn(t),On=!1,_s=null,fe.message="error",xs(),fe.message="error",yr()}}function Fu(){On||!_s||(document.body.classList.add("playing"),ce("game-shell").hidden=!1,ce("game-shell").style.visibility="visible",ce("eject").hidden=!0,ce("boss-frame").contentWindow.postMessage({type:"cartridge-start"},"*"),ce("boss-frame").contentWindow.focus(),ce("launch-fx").classList.remove("active"))}function ay(){try{let i=ce("boss-frame").contentWindow,e=i?.lustPreview||i?.envyPreview||i?.__cartridgeEncounter;e&&e.hp!==void 0&&(ce("eject").hidden=!!e.scene&&!e.over&&!e.won)}catch{}}function oy(){if(fe.phase!=="boot"||(ce("launch-fx").classList.add("active"),Tn||document.hidden||performance.now()-Au<1e3/30))return;if(Au=performance.now(),!ii)try{ii=new cs({canvas:ce("fx-canvas"),antialias:!1,powerPreference:"low-power"}),Kc=new ir,Uu=new yi,Pi=new wt({vertexShader:fu,fragmentShader:pu,uniforms:{uProgress:{value:0},uAspect:{value:1},uTone:{value:new Xe},uPaper:{value:new Xe},uReduced:{value:0}}}),Kc.add(new gt(new Qt(2,2),Pi))}catch{return}let i=innerWidth,e=innerHeight,t=Ii.ratio(i,e,1);Math.abs(ii.getPixelRatio()-t)>.001&&ii.setPixelRatio(t),(Math.abs(ii.domElement.width-i*t)>1||Math.abs(ii.domElement.height-e*t)>1)&&ii.setSize(i,e,!1),Pi.uniforms.uProgress.value=Math.min(1,fe.elapsed/(un?250:2100)),Pi.uniforms.uAspect.value=i/e,Pi.uniforms.uTone.value.set(Dt[fe.index].color),Pi.uniforms.uPaper.value.set(bn==="dark"?"#000000":"#f5f5f7"),Pi.uniforms.uReduced.value=un?1:0,ii.render(Kc,Uu)}function Wu(i){if(vs)try{dn??=new AudioContext,dn.resume(),(i==="boot"?[262,392,523]:[110,75]).forEach((t,n)=>{let r=dn.createOscillator(),s=dn.createGain(),a=dn.currentTime+n*.09;r.type=i==="boot"?"sine":"triangle",r.frequency.value=t,s.gain.setValueAtTime(.001,a),s.gain.exponentialRampToValueAtTime(.065*gs,a+.008),s.gain.exponentialRampToValueAtTime(.001,a+.15),r.connect(s),s.connect(dn.destination),r.start(a),r.stop(a+.16)})}catch{}}function cy(i,e,t){let n=new sr,r=-i/2,s=-e/2;return n.moveTo(r+t,s),n.lineTo(r+i-t,s),n.quadraticCurveTo(r+i,s,r+i,s+t),n.lineTo(r+i,s+e-t),n.quadraticCurveTo(r+i,s+e,r+i-t,s+e),n.lineTo(r+t,s+e),n.quadraticCurveTo(r,s+e,r,s+e-t),n.lineTo(r,s+t),n.quadraticCurveTo(r,s,r+t,s),n}function ys(i,e=.3){let t=new wt({vertexShader:lu,fragmentShader:hu,uniforms:{uColor:{value:new Xe(i)},uGloss:{value:e}}});return Vu.push(t),t}function bt(i,e,t,n,r,s=0,a=0,o=0,c=.07){let l=cy(e,t,c),h=new $r(l,{depth:n,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:c*.35,bevelThickness:c*.3,curveSegments:7});h.translate(0,0,-n/2);let u=new gt(h,typeof r=="string"?ys(r):r);return u.position.set(s,a,o),i.add(u),u}function jc(i,e,t,n,r,s){let a=new gt(new Hr(e,e,.1,40),ys(t,.8));return a.rotation.x=Math.PI/2,a.position.set(n,r,s),i.add(a),a}function us(i,e,t,n,r,s,a="#756971",o=null){let c=document.createElement("canvas");c.width=512,c.height=128;let l=c.getContext("2d");o&&(l.fillStyle=o,l.fillRect(0,0,512,128)),l.font="48px PixelLatin,monospace",l.fillStyle=a,l.textAlign="center",l.textBaseline="middle",l.fillText(e,256,64);let h=new Kn(c);h.colorSpace=Mt;let u=new gt(new Qt(r,s),new Un({map:h,transparent:!0,depthWrite:!1}));return u.position.set(t,n,.65),i.add(u),u}function Bu(i,e,t,n,r,s){let a=document.createElement("canvas");a.width=256,a.height=128;let o=a.getContext("2d"),c=o.createRadialGradient(128,64,0,128,64,120);c.addColorStop(0,"rgba(76,61,46,.22)"),c.addColorStop(.55,"rgba(76,61,46,.10)"),c.addColorStop(1,"rgba(76,61,46,0)"),o.fillStyle=c,o.fillRect(0,0,256,128);let l=new gt(new Qt(e,t),new Un({map:new Kn(a),transparent:!0,depthWrite:!1}));return l.position.set(n,r,s),i.add(l),l}function ly(){let i=new ln,e=ys("#d0c9b9");e.userData.role="shell",bt(i,3.65,5.6,.64,e,0,0,0,.28);let t=ys("#eee5d4");t.userData.role="face",bt(i,3.57,5.43,.05,t,0,.03,.335,.29),bt(i,3.12,2.92,.08,"#626069",0,.79,.43,.25),bt(i,2.69,2.37,.045,"#252d25",0,.86,.5,.12);let n=new gt(new Qt(2.56,2.24),new wt({vertexShader:Zc,fragmentShader:du,uniforms:{uMap:{value:Mo},uTime:{value:0},uBoot:{value:0},uReduced:{value:0}}}));n.position.set(0,.86,.58),i.add(n),i.userData.screen=n,bt(i,2.9,.12,.34,"#302d32",0,2.78,-.025,.015),bt(i,3.1,.04,.12,"#847b70",0,2.84,.26,.01),jc(i,.042,"#a94d48",-1.49,1.38,.51),us(i,"POWER",-1.48,.98,.27,.06,"#c6bcba"),us(i,"DOT MATRIX",.08,2.1,1.2,.1,"#e4d8d4"),us(i,"BRIDGE / POCKET",-.22,-.88,1.8,.2,"#575168");let r=new ln;r.position.set(-.95,-1.48,.44),bt(r,1.02,.34,.16,"#393640",0,0,0,.04),bt(r,.34,1.02,.16,"#393640",0,0,.01,.04),jc(r,.13,"#24212c",0,0,.11),i.add(r);for(let[s,a,o]of[["left",-.34,0],["right",.34,0],["up",0,.34],["down",0,-.34]]){let c=new gt(new Qt(.4,.4),new Un({transparent:!0,opacity:0,depthWrite:!1}));c.position.set(a,o,.2),c.userData.action=s,r.add(c),Du.push(c)}for(let[s,a,o]of[["alt",.67,-1.52],["action",1.26,-1.2]]){let c=jc(i,.29,"#955464",a,o,.49);c.userData.action=s,Du.push(c)}bt(i,.51,.16,.085,"#7e797c",-.32,-2.23,.43,.07).rotation.z=.12,bt(i,.51,.16,.085,"#7e797c",.35,-2.23,.43,.07).rotation.z=.12,us(i,"SELECT     START",0,-2.52,1.35,.1,"#756876");for(let s=0;s<5;s++)bt(i,.045,.48,.025,"#a1998c",.89+s*.13,-2.23,.38,.013).rotation.z=.32;return i}function Xu(i,e){let t=document.createElement("canvas");t.width=512,t.height=600;let n=t.getContext("2d");if(n.fillStyle="#eee9dd",n.fillRect(0,0,512,600),n.fillStyle=i.color,n.fillRect(0,0,512,36),n.fillStyle="#efe7db",n.font="bold 15px PixelLatin,monospace",n.fillText("BRIDGE   /   CRAZY COLLECTION",24,24),e){let s=Math.max(488/e.naturalWidth,380/e.naturalHeight),a=e.naturalWidth*s,o=e.naturalHeight*s;n.save(),n.beginPath(),n.rect(12,47,488,380),n.clip(),n.drawImage(e,256-a/2,237-o/2,a,o),n.restore()}else n.fillStyle="#bcb7ab",n.fillRect(12,47,488,380),n.fillStyle="#777267",n.font="90px PixelLatin,monospace",n.fillText("\u25A3",211,268);n.fillStyle="#3f3940",n.font="600 50px PixelLatin,monospace",n.fillText(i.english,24,484),n.fillStyle=i.color,n.font="32px PixelLatin,monospace",n.font="32px "+hs(Ze)+",monospace",n.fillText(ni(Ze,Dt.indexOf(i)),26,532),n.fillStyle="#8a8074",n.font="18px PixelLatin,monospace",n.fillText(i.preview?"INDEPENDENT PREVIEW":"VOL. 0"+(Dt.indexOf(i)+1)+"    /    POCKET EDITION",26,576);let r=new Kn(t);return r.colorSpace=Mt,r}function hy(i,e){let t=new ln,n=ys(i.available?"#bbb9ae":"#898981",.42);bt(t,2.15,2.6,.28,n,0,0,0,.1),bt(t,1.97,.25,.02,"#929088",0,1.1,.164,.025);for(let a=0;a<4;a++)bt(t,.2,.043,.015,"#dbd9cc",-.92,1.06-a*.085,.17,.012),bt(t,.2,.043,.015,"#dbd9cc",.92,1.06-a*.085,.17,.012);bt(t,1.89,2.07,.026,"#8c897d",0,-.12,.168,.09);let r=new wt({vertexShader:Zc,fragmentShader:uu,uniforms:{uMap:{value:Xu(i,e)},uTime:{value:0},uReduced:{value:0}}}),s=new gt(new Qt(1.74,1.9),r);return s.position.set(0,-.13,.225),t.add(s),t.userData.index=Dt.indexOf(i),bt(t,1.32,.17,.01,"#777468",0,-1.13,.18,.03),us(t,"\u25BC",0,1.11,.12,.1,"#bfbdb2").position.z=.235,t}function Qc(i){if(!i||!zt)return null;let e=i.clone().project(zt),t=rn.getBoundingClientRect();return{x:t.left+(e.x+1)*t.width/2,y:t.top+(1-e.y)*t.height/2}}function qu(){let i=rn.getBoundingClientRect();if(!i.width||!i.height)return{portrait:!1,short:!1};let e=innerWidth>innerHeight&&innerHeight<540,t=innerWidth<=680&&!e,n=t?7.4:e?7.8:7.4;n=Math.max(n,(t?7:7.7)*i.height/i.width)/fn,zt.left=-n*i.width/i.height/2,zt.right=n*i.width/i.height/2,zt.top=n/2,zt.bottom=-n/2,zt.updateProjectionMatrix();let s=Ii.ratio(i.width,i.height,devicePixelRatio||1);return(i.width!==Tu||i.height!==Eu||Math.abs(Ut.getPixelRatio()-s)>.001)&&(Tu=i.width,Eu=i.height,Ut.setPixelRatio(s),Ut.setSize(i.width,i.height,!1)),nn.background=new Xe(bn==="dark"?"#000000":"#f5f5f7"),{portrait:t,short:e}}function nl(i){if(!ru(fe,i)){yr();return}Qe&&(nn.remove(Qe),Qe=si[i].clone(!0),Qe.position.copy(Li),Qe.traverse(e=>{e.isMesh&&(e.userData.index=i)}),nn.add(Qe)),Di()}function Yu(){Yc(fe)&&Zu()}function Zu(){Qe&&(Ou.copy(Qe.position),ku.copy(Qe.quaternion)),Tn=!1,Wu("insert"),sy(),yr()}function xs(){cu(fe)&&(gr++,_s=null,On=!1,ce("boss-frame").removeAttribute("srcdoc"),ce("game-shell").hidden=!0,ce("launch-fx").classList.remove("active"),Tn=!1,ce("pause-banner").hidden=!0,document.body.classList.remove("playing"),_t&&Qe&&(_t.remove(Qe),nn.add(Qe)),Di())}function uy(){let i=[Ze,fe.index,fe.phase].join(":");i!==wu&&(wu=i,tn.fillStyle="#a4b081",tn.fillRect(0,0,512,448),tn.textAlign="center",tn.fillStyle="#34443a",tn.font="24px PixelLatin,monospace",tn.fillText("BRIDGE",256,148),tn.font="18px PixelLatin,monospace",tn.fillText("CRAZY",256,195),tn.font="20px "+hs(Ze)+",monospace",tn.fillText(ni(Ze,fe.index),256,254),tn.font="14px PixelLatin,monospace",tn.fillText(fe.phase==="browse"?"01 \u2014 07":fe.phase==="insert"?"READING\u2026":"LINK START",256,325),Mo.needsUpdate=!0,So&&ce("fallback-lcd").getContext("2d").drawImage(Ss,0,0))}function Ju(){fe.phase!=="playing"&&(Tn=!0),dn&&dn.suspend()}function dy(i){if(So||!zt||!Qe||($u(i),fe.phase==="playing")||fe.phase!=="browse")return;if(!ds.intersectObject(Qe,!0)[0]){let t=ds.intersectObjects(si.filter(n=>n.visible),!0)[0];t&&typeof t.object.userData.index=="number"&&nl(t.object.userData.index);return}i.preventDefault(),rn.setPointerCapture(i.pointerId),qc(fe,Qe.position.x-Li.x,Qe.position.y-Li.y),ds.ray.intersectPlane(Hu,fs),dt={id:i.pointerId,x:i.clientX,y:i.clientY,world:fs.clone(),base:{...fe.drop},rot:fe.rotate||i.button===2||i.shiftKey,moved:!1}}function $u(i){let e=rn.getBoundingClientRect();Lu.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),ds.setFromCamera(Lu,zt)}function fy(i){if(zn=!0,!dt||dt.id!==i.pointerId)return;i.preventDefault();let e=i.clientX-dt.x,t=i.clientY-dt.y;dt.moved||=Math.abs(e)+Math.abs(t)>5,dt.rot?(su(fe,e*.004,t*.004),dt.x=i.clientX,dt.y=i.clientY):($u(i),ds.ray.intersectPlane(Hu,fs),qc(fe,dt.base.x+fs.x-dt.world.x,dt.base.y+fs.y-dt.world.y))}function py(i,e=!1){if(!dt||dt.id!==i.pointerId)return;let t=dt;if(dt=null,e){fe.drop={x:0,y:0};return}if(!t.rot&&t.moved){let n=Li.x+fe.drop.x,r=Li.y+fe.drop.y,s=Math.max(0,xo.y-.2-r,r-vo.y-.2),a=Math.hypot(n-xo.x,s);au(fe,{distance:a,aligned:Math.abs(fe.yaw)<.6&&Math.abs(fe.pitch)<.6})&&Zu(),yr()}}function ps(i){let e=i-Cu,t=Math.min(50,e);if(Cu=i,document.hidden){requestAnimationFrame(ps);return}if(ou(fe,e,{paused:Tn,reduced:un}),fe.phase!==Ru&&(fe.phase==="boot"&&(Qe&&_t&&(_t.attach(Qe),Qe.position.set(0,2.17,-.27),Qe.quaternion.identity(),Qe.scale.setScalar(1)),Wu("boot")),fe.phase==="playing"&&Fu(),Ru=fe.phase),fe.phase==="playing"&&!On&&ce("game-shell").style.visibility==="hidden"&&Fu(),oy(),fe.phase==="playing"&&!On&&ce("game-shell").style.visibility==="visible"){ay(),requestAnimationFrame(ps);return}if(uy(),yr(),Ut&&(!Tn||zn)&&(!un||zn||fe.phase!=="browse"||dt)&&i-Pu>=Ii.interval({active:!!dt||fe.phase!=="browse",reduced:un})){let n=performance.now();Pu=i,zn=!1;let{portrait:r,short:s}=qu(),a=fe.phase==="playing",o=a?new L(0,0,0):r?new L(-1.28,-.65,0):new L(-1.65,-.42,0);if(_t.position.lerp(o,un?1:.1),_t.scale.lerp(new L(1,1,1).multiplyScalar(r&&!a?.97:1.08),.15),_t.rotation.x=as.lerp(_t.rotation.x,a?0:-.08,.12),_t.rotation.y=as.lerp(_t.rotation.y,a?0:.1,.12),_t.rotation.z=as.lerp(_t.rotation.z,a?0:r?-.045:.045,.12),zt.position.set(a?-.2:0,a?.74:0,14),zt.lookAt(a?-.2:0,a?.74:0,0),_t.updateMatrixWorld(!0),xo.copy(_t.localToWorld(new L(0,2.96,0))),vo.copy(_t.localToWorld(new L(0,4.28,-.27))),Iu.copy(_t.localToWorld(new L(0,2.17,-.27))),fe.phase==="browse"){Li.set(r?1.65:1.92,r?1.45:.8,1.6);let c=Li.clone().add(new L(fe.drop.x,fe.drop.y,0));!dt&&!un&&(c.y+=Math.sin(i*.0014)*.045),Qe.position.lerp(c,dt?.6:.12),Qe.rotation.set(fe.pitch-.08,fe.yaw-.23,.055),Qe.scale.setScalar(r?.93:1.07),si.forEach((l,h)=>{l.visible=h!==fe.index&&Dt[h].available,l.position.set(r?1.4+h*.1:1.2+h*.36,r?-2.45:-2.5,-.38-h*.05),l.rotation.set(.08,0,-.27+h*.12),l.scale.setScalar(r?.28:.34)})}else if(fe.phase==="insert"){let c=ls(fe.elapsed/(un?300:1250)),l=c<.63?ls(c/.63):1;Qe.position.copy(Ou).lerp(vo,l),c>=.63&&Qe.position.lerp(Iu,ls((c-.63)/.37)),Qe.quaternion.copy(ku).slerp(_t.quaternion,ls(c/.5)),Qe.scale.setScalar(r?.94:1),si.forEach(h=>h.visible=!1)}else si.forEach(c=>c.visible=!1);_t.userData.screen.material.uniforms.uTime.value=i/1e3,_t.userData.screen.material.uniforms.uBoot.value=fe.phase==="boot"?1:0,Ut.render(nn,zt),zu++,Ii.observe(performance.now()-n)}requestAnimationFrame(ps)}ce("insert").onclick=Yu;ce("rotate").onclick=()=>{fe.phase==="browse"&&(fe.rotate=!fe.rotate,ce("rotate").setAttribute("aria-pressed",String(fe.rotate)))};ce("reset").onclick=()=>{fe.phase==="browse"&&(fe.yaw=0,fe.pitch=0,fe.drop={x:0,y:0},fe.message="",fn=1,tl())};ce("zoom-in").onclick=()=>bo(fn+.1);ce("zoom-out").onclick=()=>bo(fn-.1);ce("eject").onclick=xs;ce("lang").replaceChildren(...Ri.map((i,e)=>{let t=document.createElement("option");return t.value=i,t.textContent=xu[e],t}));ce("lang").onchange=async()=>{Ze=ce("lang").value,await document.fonts.load("16px "+hs(Ze)),Di()};for(let i of["normal","hard"])ce(i).onclick=()=>{fe.phase==="browse"&&(ms=i,Di())};ce("settings").onclick=()=>{Tn=!0,ce("reduced").checked=un,ce("sound").checked=vs,ce("theme").value=bn,dn?.suspend(),ce("options").showModal()};ce("theme").onchange=()=>{bn=ce("theme").value,Di()};ce("quality").onchange=()=>{Ii.set(ce("quality").value),zn=!0};addEventListener("resize",()=>{zn=!0});ce("options").onclose=()=>{zn=!0,un=ce("reduced").checked,vs=ce("sound").checked,Tn=!1,dn?.resume()};ce("resume").onclick=()=>{Tn=!1,ce("pause-banner").hidden=!0,dn?.resume()};addEventListener("storage",i=>{if(i.key==="bridge-settings")try{let e=JSON.parse(i.newValue||"{}");kn=e,gs=Math.max(0,Math.min(1,Number(e.sfxVolume??e.volume??.7))),vs=gs>0,bn=e.theme==="dark"?"dark":"light",Ri.includes(e.lang)&&(Ze=e.lang),Di()}catch{}});addEventListener("message",i=>{i.source===ce("boss-frame").contentWindow&&i.data?.type==="cartridge-return"&&xs()});addEventListener("keydown",i=>{if(!i.target.closest("dialog,input,select")){if(i.code==="Escape"){fe.phase==="browse"?ce("reset").click():xs();return}fe.phase!=="browse"||i.repeat||(["Space","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),i.code==="Space"?Yu():(i.code==="ArrowLeft"||i.code==="ArrowRight")&&nl((fe.index+(i.code==="ArrowLeft"?-1:1)+4)%4))}});addEventListener("blur",Ju);addEventListener("focus",()=>{ce("options").open||(Tn=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&Ju()});rn.addEventListener("pointerdown",i=>{if(fe.phase==="browse"){if(ri.set(i.pointerId,{x:i.clientX,y:i.clientY}),rn.setPointerCapture(i.pointerId),ri.size===2){let[e,t]=[...ri.values()];_r={distance:Math.hypot(e.x-t.x,e.y-t.y),zoom:fn},dt=null,rn.setPointerCapture(i.pointerId),i.preventDefault();return}dy(i)}});rn.addEventListener("pointermove",i=>{if(ri.has(i.pointerId)&&ri.set(i.pointerId,{x:i.clientX,y:i.clientY}),_r&&ri.size===2){let[e,t]=[...ri.values()];bo(_r.zoom*Math.hypot(e.x-t.x,e.y-t.y)/Math.max(1,_r.distance)),i.preventDefault();return}fy(i)});for(let i of["pointerup","pointercancel"])rn.addEventListener(i,e=>{let t=!!_r;if(ri.delete(e.pointerId),t){_r=null,dt=null;return}py(e,i==="pointercancel")});rn.addEventListener("contextmenu",i=>i.preventDefault());rn.addEventListener("wheel",i=>{fe.phase==="browse"&&(i.preventDefault(),bo(fn*Math.exp(-i.deltaY*.001)))},{passive:!1});async function my(){Di();try{await document.fonts.load("16px "+hs(Ze)),await document.fonts.load("16px PixelLatin"),await document.fonts.ready;let i=el=await Promise.all(Dt.map(e=>e.art?new Promise(t=>{let n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=e.art}):null));Ut=new cs({antialias:!1,alpha:!1,powerPreference:"low-power"}),Ut.outputColorSpace=Mt,Ut.toneMapping=Ca,Ut.toneMappingExposure=1.1,rn.prepend(Ut.domElement),nn=new ir,zt=new or(-6,6,4,-4,.1,40),zt.position.set(0,0,14),nn.add(new jr(16777215)),_t=ly(),nn.add(_t),Bu(nn,5,1.6,-2.1,-3,-.9),Bu(nn,3,1.1,2.6,-3,-.9),si=Dt.map((e,t)=>{let n=hy(e,i[t]);return n.traverse(r=>r.userData.index=t),nn.add(n),n}),Qe=si[fe.index].clone(!0),nn.add(Qe),qu(),Gu(),ce("loading").hidden=!0,requestAnimationFrame(ps)}catch(i){console.warn("Cartridge WebGL fallback",i.message),So=!0,ce("loading").hidden=!0,ce("fallback").hidden=!1,requestAnimationFrame(ps)}}my();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
