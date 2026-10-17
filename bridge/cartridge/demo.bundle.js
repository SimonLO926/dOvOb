var Tf=Object.defineProperty;var Gs=(n,e)=>{for(var t in e)Tf(n,t,{get:e[t],enumerable:!0})};var Nh=0,Fl=1,Bh=2;var Ol=1,zh=2,Tn=3,On=0,zt=1,wn=2,Vn=0,Ei=1,kl=2,Hl=3,Vl=4,Fh=5,ii=100,Oh=101,kh=102,Hh=103,Vh=104,Gh=200,Wh=201,Xh=202,qh=203,da=204,fa=205,Yh=206,Zh=207,Jh=208,$h=209,Kh=210,jh=211,Qh=212,eu=213,tu=214,Ha=0,Va=1,Ga=2,Ai=3,Wa=4,Xa=5,qa=6,Ya=7,Gl=0,nu=1,iu=2,Gn=0,ru=1,su=2,au=3,Za=4,ou=5,lu=6,cu=7;var Wl=300,Di=301,Ui=302,Ja=303,$a=304,Ss=306,pa=1e3,ni=1001,ma=1002,nn=1003,hu=1004;var Ms=1005;var Zt=1006,Ka=1007;var li=1008;var En=1009,Xl=1010,ql=1011,Tr=1012,ja=1013,ci=1014,An=1015,wr=1016,Qa=1017,eo=1018,Er=1020,Yl=35902,Zl=35899,Jl=1021,$l=1022,an=1023,ur=1026,Ar=1027,Kl=1028,to=1029,jl=1030,no=1031;var io=1033,bs=33776,Ts=33777,ws=33778,Es=33779,ro=35840,so=35841,ao=35842,oo=35843,lo=36196,co=37492,ho=37496,uo=37808,fo=37809,po=37810,mo=37811,go=37812,yo=37813,_o=37814,xo=37815,vo=37816,So=37817,Mo=37818,bo=37819,To=37820,wo=37821,Eo=36492,Ao=36494,Co=36495,Ro=36283,Po=36284,Io=36285,Lo=36286;var $r=2300,ga=2301,ua=2302,Al=2400,Cl=2401,Rl=2402;var uu=3200,du=3201;var fu=0,pu=1,Wn="",wt="srgb",Ci="srgb-linear",Kr="linear",nt="srgb";var Ti=7680;var Pl=519,mu=512,gu=513,yu=514,Ql=515,_u=516,xu=517,vu=518,Su=519,Il=35044;var ec="300 es",fn=2e3,jr=2001;var kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uh=1234567,qr=Math.PI/180,dr=180/Math.PI;function Ni(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function tc(n,e){return(n%e+e)%e}function wf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Ef(n,e,t){return n!==e?(t-n)/(e-n):0}function Yr(n,e,t){return(1-t)*n+t*e}function Af(n,e,t,i){return Yr(n,e,1-Math.exp(-t*i))}function Cf(n,e=1){return e-Math.abs(tc(n,e*2)-e)}function Rf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Pf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function If(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Lf(n,e){return n+Math.random()*(e-n)}function Df(n){return n*(.5-Math.random())}function Uf(n){n!==void 0&&(uh=n);let e=uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nf(n){return n*qr}function Bf(n){return n*dr}function zf(n){return(n&n-1)===0&&n!==0}function Ff(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Of(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kf(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var As={DEG2RAD:qr,RAD2DEG:dr,generateUUID:Ni,clamp:Xe,euclideanModulo:tc,mapLinear:wf,inverseLerp:Ef,lerp:Yr,damp:Af,pingpong:Cf,smoothstep:Rf,smootherstep:Pf,randInt:If,randFloat:Lf,randFloatSpread:Df,seededRandom:Uf,degToRad:Nf,radToDeg:Bf,isPowerOfTwo:zf,ceilPowerOfTwo:Ff,floorPowerOfTwo:Of,setQuaternionFromProperEuler:kf,normalize:Bt,denormalize:cr},ge=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*_,A=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){let R=Math.sqrt(T),E=Math.atan2(R,p*A);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}let S=o*A;if(l=l*m+d*S,c=c*m+f*S,h=h*m+g*S,u=u*m+_*S,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new L,dh=new mn,Ve=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],A=r[1],T=r[4],S=r[7],R=r[2],E=r[5],P=r[8];return s[0]=a*_+o*A+l*R,s[3]=a*m+o*T+l*E,s[6]=a*p+o*S+l*P,s[1]=c*_+h*A+u*R,s[4]=c*m+h*T+u*E,s[7]=c*p+h*S+u*P,s[2]=d*_+f*A+g*R,s[5]=d*m+f*T+g*E,s[8]=d*p+f*S+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=t*u+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(rl.makeScale(e,t)),this}rotate(e){return this.premultiply(rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rl=new Ve;function nc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mu(){let n=Qr("canvas");return n.style.display="block",n}var fh={};function fr(n){n in fh||(fh[n]=!0,console.warn(n))}function bu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var ph=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hf(){let n={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=Fn(r.r),r.g=Fn(r.g),r.b=Fn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=hr(r.r),r.g=hr(r.g),r.b=hr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wn?Kr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ci]:{primaries:e,whitePoint:i,transfer:Kr,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),n}var Ke=Hf();function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ki,ya=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ki===void 0&&(Ki=Qr("canvas")),Ki.width=e.width,Ki.height=e.height;let r=Ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ki}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Fn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fn(t[i]/255)*255):t[i]=Fn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vf=0,pr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(sl(r[a].image)):s.push(sl(r[a]))}else s=sl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function sl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ya.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gf=0,al=new L,Vt=class n extends kn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ni,r=ni,s=Zt,a=li,o=an,l=En,c=n.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Ni(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(al).x}get height(){return this.source.getSize(al).y}get depth(){return this.source.getSize(al).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Wl;Vt.DEFAULT_ANISOTROPY=1;var yt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,S=(f+1)/2,R=(p+1)/2,E=(h+d)/4,P=(u+_)/4,U=(g+m)/4;return T>S&&T>R?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=E/i,s=P/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=U/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=P/s,r=U/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-_)/A,this.z=(d-h)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_a=class extends kn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new Vt(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new pr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends _a{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},es=class extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xa=class extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ws.copy(i.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Xs.subVectors(this.max,Hr),ji.subVectors(e.a,Hr),Qi.subVectors(e.b,Hr),er.subVectors(e.c,Hr),Jn.subVectors(Qi,ji),$n.subVectors(er,Qi),vi.subVectors(ji,er);let t=[0,-Jn.z,Jn.y,0,-$n.z,$n.y,0,-vi.z,vi.y,Jn.z,0,-Jn.x,$n.z,0,-$n.x,vi.z,0,-vi.x,-Jn.y,Jn.x,0,-$n.y,$n.x,0,-vi.y,vi.x,0];return!ol(t,ji,Qi,er,Xs)||(t=[1,0,0,0,1,0,0,0,1],!ol(t,ji,Qi,er,Xs))?!1:(qs.crossVectors(Jn,$n),t=[qs.x,qs.y,qs.z],ol(t,ji,Qi,er,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Dn=[new L,new L,new L,new L,new L,new L,new L,new L],hn=new L,Ws=new ri,ji=new L,Qi=new L,er=new L,Jn=new L,$n=new L,vi=new L,Hr=new L,Xs=new L,qs=new L,Si=new L;function ol(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Si.fromArray(n,s);let o=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),h=i.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Wf=new ri,Vr=new L,ll=new L,mr=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Wf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Vr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(ll)),this.expandByPoint(Vr.copy(e.center).sub(ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Un=new L,cl=new L,Ys=new L,Kn=new L,hl=new L,Zs=new L,ul=new L,ts=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){cl.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(cl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ys),o=Kn.dot(this.direction),l=-Kn.dot(Ys),c=Kn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(cl).addScaledVector(Ys,d),f}intersectSphere(e,t){Un.subVectors(e.center,this.origin);let i=Un.dot(this.direction),r=Un.dot(Un)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,i,r,s){hl.subVectors(t,e),Zs.subVectors(i,e),ul.crossVectors(hl,Zs);let a=this.direction.dot(ul),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);let l=o*this.direction.dot(Zs.crossVectors(Kn,Zs));if(l<0)return null;let c=o*this.direction.dot(hl.cross(Kn));if(c<0||l+c>a)return null;let h=-o*Kn.dot(ul);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,f,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,i,r,s,a,o,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/tr.setFromMatrixColumn(e,0).length(),s=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,qf)}lookAt(e,t,i){let r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),jn.crossVectors(i,qt),jn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),jn.crossVectors(i,qt)),jn.normalize(),Js.crossVectors(qt,jn),r[0]=jn.x,r[4]=Js.x,r[8]=qt.x,r[1]=jn.y,r[5]=Js.y,r[9]=qt.y,r[2]=jn.z,r[6]=Js.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],A=i[3],T=i[7],S=i[11],R=i[15],E=r[0],P=r[4],U=r[8],M=r[12],v=r[1],C=r[5],z=r[9],k=r[13],W=r[2],q=r[6],G=r[10],ie=r[14],V=r[3],de=r[7],xe=r[11],Me=r[15];return s[0]=a*E+o*v+l*W+c*V,s[4]=a*P+o*C+l*q+c*de,s[8]=a*U+o*z+l*G+c*xe,s[12]=a*M+o*k+l*ie+c*Me,s[1]=h*E+u*v+d*W+f*V,s[5]=h*P+u*C+d*q+f*de,s[9]=h*U+u*z+d*G+f*xe,s[13]=h*M+u*k+d*ie+f*Me,s[2]=g*E+_*v+m*W+p*V,s[6]=g*P+_*C+m*q+p*de,s[10]=g*U+_*z+m*G+p*xe,s[14]=g*M+_*k+m*ie+p*Me,s[3]=A*E+T*v+S*W+R*V,s[7]=A*P+T*C+S*q+R*de,s[11]=A*U+T*z+S*G+R*xe,s[15]=A*M+T*k+S*ie+R*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*u-r*c*u-s*o*d+i*c*d+r*o*f-i*l*f)+_*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*h-s*l*h)+m*(+t*c*u-t*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+p*(-r*o*h-t*l*u+t*o*d+r*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],A=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,T=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,S=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,R=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,E=t*A+i*T+r*S+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/E;return e[0]=A*P,e[1]=(_*d*s-u*m*s-_*r*f+i*m*f+u*r*p-i*d*p)*P,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*p+i*l*p)*P,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*f-i*l*f)*P,e[4]=T*P,e[5]=(h*m*s-g*d*s+g*r*f-t*m*f-h*r*p+t*d*p)*P,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*P,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*f+t*l*f)*P,e[8]=S*P,e[9]=(g*u*s-h*_*s-g*i*f+t*_*f+h*i*p-t*u*p)*P,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*p+t*o*p)*P,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*f-t*o*f)*P,e[12]=R*P,e[13]=(h*_*r-g*u*r+g*i*d-t*_*d-h*i*m+t*u*m)*P,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*P,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*d+t*o*d)*P,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,A=l*c,T=l*h,S=l*u,R=i.x,E=i.y,P=i.z;return r[0]=(1-(_+p))*R,r[1]=(f+S)*R,r[2]=(g-T)*R,r[3]=0,r[4]=(f-S)*E,r[5]=(1-(d+p))*E,r[6]=(m+A)*E,r[7]=0,r[8]=(g+T)*P,r[9]=(m-A)*P,r[10]=(1-(d+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=tr.set(r[0],r[1],r[2]).length(),a=tr.set(r[4],r[5],r[6]).length(),o=tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],un.copy(this);let c=1/s,h=1/a,u=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=fn,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===fn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===jr)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=fn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),f=-(i+r)/(i-r),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===fn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===jr)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},tr=new L,un=new dt,Xf=new L(0,0,0),qf=new L(1,1,1),jn=new L,Js=new L,qt=new L,gh=new dt,yh=new mn,bn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yf=0,_h=new L,nr=new mn,Nn=new dt,$s=new L,Gr=new L,Zf=new L,Jf=new mn,xh=new L(1,0,0),vh=new L(0,1,0),Sh=new L(0,0,1),Mh={type:"added"},$f={type:"removed"},ir={type:"childadded",child:null},dl={type:"childremoved",child:null},Jt=class n extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new bn,i=new mn,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ve}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(vh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return _h.copy(e).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(vh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$s.copy(e):$s.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Gr,$s,this.up):Nn.lookAt($s,Gr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),nr.setFromRotationMatrix(Nn),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mh),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($f),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mh),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,Zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Jf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Jt.DEFAULT_UP=new L(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new L,Bn=new L,fl=new L,zn=new L,rr=new L,sr=new L,bh=new L,pl=new L,ml=new L,gl=new L,yl=new yt,_l=new yt,xl=new yt,ti=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),dn.subVectors(e,t),r.cross(dn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){dn.subVectors(r,t),Bn.subVectors(i,t),fl.subVectors(e,t);let a=dn.dot(dn),o=dn.dot(Bn),l=dn.dot(fl),c=Bn.dot(Bn),h=Bn.dot(fl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return yl.setScalar(0),_l.setScalar(0),xl.setScalar(0),yl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,i),xl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(yl,s.x),a.addScaledVector(_l,s.y),a.addScaledVector(xl,s.z),a}static isFrontFacing(e,t,i,r){return dn.subVectors(i,t),Bn.subVectors(e,t),dn.cross(Bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),dn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;rr.subVectors(r,i),sr.subVectors(s,i),pl.subVectors(e,i);let l=rr.dot(pl),c=sr.dot(pl);if(l<=0&&c<=0)return t.copy(i);ml.subVectors(e,r);let h=rr.dot(ml),u=sr.dot(ml);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(rr,a);gl.subVectors(e,s);let f=rr.dot(gl),g=sr.dot(gl);if(g>=0&&f<=g)return t.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(sr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return bh.subVectors(s,r),o=(u-h)/(u-h+(f-g)),t.copy(r).addScaledVector(bh,o);let p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(rr,a).addScaledVector(sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function vl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=tc(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=vl(a,s,e+1/3),this.g=vl(a,s,e),this.b=vl(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let i=Tu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Ke.workingToColorSpace(It.copy(this),e),Math.round(Xe(It.r*255,0,255))*65536+Math.round(Xe(It.g*255,0,255))*256+Math.round(Xe(It.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(It.copy(this),t);let i=It.r,r=It.g,s=It.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=wt){Ke.workingToColorSpace(It.copy(this),e);let t=It.r,i=It.g,r=It.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Ks);let i=Yr(Qn.h,Ks.h,t),r=Yr(Qn.s,Ks.s,t),s=Yr(Qn.l,Ks.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},It=new qe;qe.NAMES=Tu;var Kf=0,Ri=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Ei,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=fa,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(i.blending=this.blending),this.side!==On&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==da&&(i.blendSrc=this.blendSrc),this.blendDst!==fa&&(i.blendDst=this.blendDst),this.blendEquation!==ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Hn=class extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vt=new L,js=new ge,jf=0,Et=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Il,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),e}};var ns=class extends Et{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var is=class extends Et{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Lt=class extends Et{constructor(e,t,i){super(new Float32Array(e),t,i)}},Qf=0,en=new dt,Sl=new Jt,ar=new L,Yt=new ri,Wr=new ri,Tt=new L,rn=class n extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nc(e)?is:ns)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Yt.min,Wr.min),Yt.expandByPoint(Tt),Tt.addVectors(Yt.max,Wr.max),Yt.expandByPoint(Tt)):(Yt.expandByPoint(Wr.min),Yt.expandByPoint(Wr.max))}Yt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(ar.fromBufferAttribute(e,c),Tt.add(ar)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new L,l[U]=new L;let c=new L,h=new L,u=new L,d=new ge,f=new ge,g=new ge,_=new L,m=new L;function p(U,M,v){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,v),d.fromBufferAttribute(s,U),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[U].add(_),o[M].add(_),o[v].add(_),l[U].add(m),l[M].add(m),l[v].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,M=A.length;U<M;++U){let v=A[U],C=v.start,z=v.count;for(let k=C,W=C+z;k<W;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let T=new L,S=new L,R=new L,E=new L;function P(U){R.fromBufferAttribute(r,U),E.copy(R);let M=o[U];T.copy(M),T.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(E,M);let C=S.dot(l[U])<0?-1:1;a.setXYZW(U,T.x,T.y,T.z,C)}for(let U=0,M=A.length;U<M;++U){let v=A[U],C=v.start,z=v.count;for(let k=C,W=C+z;k<W;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Th=new dt,Mi=new ts,Qs=new mr,wh=new L,ea=new L,ta=new L,na=new L,Ml=new L,ia=new L,Eh=new L,ra=new L,ft=class extends Jt{constructor(e=new rn,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ia.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Ml.fromBufferAttribute(u,e),a?ia.addScaledVector(Ml,h):ia.addScaledVector(Ml.sub(t),h))}t.add(ia)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(Qs.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Qs,wh)===null||Mi.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Th.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(Th),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=A,R=T;S<R;S+=3){let E=o.getX(S),P=o.getX(S+1),U=o.getX(S+2);r=sa(this,p,e,i,c,h,u,E,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let A=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);r=sa(this,a,e,i,c,h,u,A,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=A,R=T;S<R;S+=3){let E=S,P=S+1,U=S+2;r=sa(this,p,e,i,c,h,u,E,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let A=m,T=m+1,S=m+2;r=sa(this,a,e,i,c,h,u,A,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function ep(n,e,t,i,r,s,a,o){let l;if(e.side===zt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===On,o),l===null)return null;ra.copy(o),ra.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:n}}function sa(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ea),n.getVertexPosition(l,ta),n.getVertexPosition(c,na);let h=ep(n,e,t,i,ea,ta,na,Eh);if(h){let u=new L;ti.getBarycoord(Eh,ea,ta,na,u),r&&(h.uv=ti.getInterpolatedAttribute(r,o,l,c,u,new ge)),s&&(h.uv1=ti.getInterpolatedAttribute(s,o,l,c,u,new ge)),a&&(h.normal=ti.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};ti.getNormal(ea,ta,na,d.normal),h.face=d,h.barycoord=u}return h}var yr=class n extends rn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function g(_,m,p,A,T,S,R,E,P,U,M){let v=S/P,C=R/U,z=S/2,k=R/2,W=E/2,q=P+1,G=U+1,ie=0,V=0,de=new L;for(let xe=0;xe<G;xe++){let Me=xe*C-k;for(let He=0;He<q;He++){let Je=He*v-z;de[_]=Je*A,de[m]=Me*T,de[p]=W,c.push(de.x,de.y,de.z),de[_]=0,de[m]=0,de[p]=E>0?1:-1,h.push(de.x,de.y,de.z),u.push(He/P),u.push(1-xe/U),ie+=1}}for(let xe=0;xe<U;xe++)for(let Me=0;Me<P;Me++){let He=d+Me+q*xe,Je=d+Me+q*(xe+1),tt=d+(Me+1)+q*(xe+1),$e=d+(Me+1)+q*xe;l.push(He,Je,$e),l.push(Je,tt,$e),V+=6}o.addGroup(f,V,M),f+=V,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Bi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Dt(n){let e={};for(let t=0;t<n.length;t++){let i=Bi(n[t]);for(let r in i)e[r]=i[r]}return e}function tp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ic(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var wu={clone:Bi,merge:Dt},np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Pi=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ei=new L,Ah=new ge,Ch=new ge,Ht=class extends Pi{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,Ah,Ch),t.subVectors(Ch,Ah)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},or=-90,lr=1,va=class extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ht(or,lr,e,t);r.layers=this.layers,this.add(r);let s=new Ht(or,lr,e,t);s.layers=this.layers,this.add(s);let a=new Ht(or,lr,e,t);a.layers=this.layers,this.add(a);let o=new Ht(or,lr,e,t);o.layers=this.layers,this.add(o);let l=new Ht(or,lr,e,t);l.layers=this.layers,this.add(l);let c=new Ht(or,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},rs=class extends Vt{constructor(e=[],t=Di,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sa=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yr(5,5,5),s=new At({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Vn});s.uniforms.tEquirect.value=t;let a=new ft(r,s),o=t.minFilter;return t.minFilter===li&&(t.minFilter=Zt),new va(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},pn=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},rp={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var xr=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var bl=new L,sp=new L,ap=new Ve,tn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=bl.subVectors(i,t).cross(sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(bl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ap.getNormalMatrix(e),r=this.coplanarPoint(bl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bi=new mr,op=new ge(.5,.5),aa=new L,ss=class{constructor(e=new tn,t=new tn,i=new tn,r=new tn,s=new tn,a=new tn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fn,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],A=s[12],T=s[13],S=s[14],R=s[15];if(r[0].setComponents(c-a,f-h,p-g,R-A).normalize(),r[1].setComponents(c+a,f+h,p+g,R+A).normalize(),r[2].setComponents(c+o,f+u,p+_,R+T).normalize(),r[3].setComponents(c-o,f-u,p-_,R-T).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,f-d,p-m,R-S).normalize();else if(r[4].setComponents(c-l,f-d,p-m,R-S).normalize(),t===fn)r[5].setComponents(c+l,f+d,p+m,R+S).normalize();else if(t===jr)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);let t=op.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(aa.x=r.normal.x>0?e.max.x:e.min.x,aa.y=r.normal.y>0?e.max.y:e.min.y,aa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var si=class extends Vt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},as=class extends Vt{constructor(e,t,i=ci,r,s,a,o=nn,l=nn,c,h=ur,u=1){if(h!==ur&&h!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},os=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ls=class n extends rn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,_=[],m=i/2,p=0;A(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(f,2));function A(){let S=new L,R=new L,E=0,P=(t-e)/i;for(let U=0;U<=s;U++){let M=[],v=U/s,C=v*(t-e)+e;for(let z=0;z<=r;z++){let k=z/r,W=k*l+o,q=Math.sin(W),G=Math.cos(W);R.x=C*q,R.y=-v*i+m,R.z=C*G,u.push(R.x,R.y,R.z),S.set(q,P,G).normalize(),d.push(S.x,S.y,S.z),f.push(k,1-v),M.push(g++)}_.push(M)}for(let U=0;U<r;U++)for(let M=0;M<s;M++){let v=_[M][U],C=_[M+1][U],z=_[M+1][U+1],k=_[M][U+1];(e>0||M!==0)&&(h.push(v,C,k),E+=3),(t>0||M!==s-1)&&(h.push(C,z,k),E+=3)}c.addGroup(p,E,0),p+=E}function T(S){let R=g,E=new ge,P=new L,U=0,M=S===!0?e:t,v=S===!0?1:-1;for(let z=1;z<=r;z++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let C=g;for(let z=0;z<=r;z++){let W=z/r*l+o,q=Math.cos(W),G=Math.sin(W);P.x=M*G,P.y=m*v,P.z=M*q,u.push(P.x,P.y,P.z),d.push(0,v,0),E.x=q*.5+.5,E.y=G*.5*v+.5,f.push(E.x,E.y),g++}for(let z=0;z<r;z++){let k=R+z,W=C+z;S===!0?h.push(W,W+1,k):h.push(W+1,W,k),U+=3}c.addGroup(p,U,S===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var $t=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);let h=i[r],d=i[r+1]-h,f=(a-h)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ge:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,r=[],s=[],a=[],o=new L,l=new dt;for(let f=0;f<=e;f++){let g=f/e;r[f]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Xe(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Xe(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vr=class extends $t{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ge){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ma=class extends vr{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rc(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,r(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return n+e*s+t*a+i*o}}}var oa=new L,Tl=new rc,wl=new rc,El=new rc,ba=class extends $t{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(oa.subVectors(r[0],r[1]).add(r[0]),c=oa);let u=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(oa.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=oa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Tl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),wl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),El.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),wl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),El.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Tl.calc(l),wl.calc(l),El.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rh(n,e,t,i,r){let s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function lp(n,e){let t=1-n;return t*t*e}function cp(n,e){return 2*(1-n)*n*e}function hp(n,e){return n*n*e}function Zr(n,e,t,i){return lp(n,e)+cp(n,t)+hp(n,i)}function up(n,e){let t=1-n;return t*t*t*e}function dp(n,e){let t=1-n;return 3*t*t*n*e}function fp(n,e){return 3*(1-n)*n*n*e}function pp(n,e){return n*n*n*e}function Jr(n,e,t,i,r){return up(n,e)+dp(n,t)+fp(n,i)+pp(n,r)}var cs=class extends $t{constructor(e=new ge,t=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ge){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Jr(e,r.x,s.x,a.x,o.x),Jr(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ta=class extends $t{constructor(e=new L,t=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Jr(e,r.x,s.x,a.x,o.x),Jr(e,r.y,s.y,a.y,o.y),Jr(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hs=class extends $t{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends $t{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},us=class extends $t{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Zr(e,r.x,s.x,a.x),Zr(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends $t{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Zr(e,r.x,s.x,a.x),Zr(e,r.y,s.y,a.y),Zr(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ds=class extends $t{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(Rh(o,l.x,c.x,h.x,u.x),Rh(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ge().fromArray(r))}return this}},Ll=Object.freeze({__proto__:null,ArcCurve:Ma,CatmullRomCurve3:ba,CubicBezierCurve:cs,CubicBezierCurve3:Ta,EllipseCurve:vr,LineCurve:hs,LineCurve3:wa,QuadraticBezierCurve:us,QuadraticBezierCurve3:Ea,SplineCurve:ds}),Aa=class extends $t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ll[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Ll[r.type]().fromJSON(r))}return this}},fs=class extends Aa{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new hs(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new us(this.currentPoint.clone(),new ge(e,t),new ge(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new cs(this.currentPoint.clone(),new ge(e,t),new ge(i,r),new ge(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ds(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new vr(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Sr=class extends fs{constructor(e){super(e),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new fs().fromJSON(r))}return this}};function mp(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Eu(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=vp(n,e,s,t)),n.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<r;d+=t){let f=n[d],g=n[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ps(s,a,t,o,l,c,0),a}function Eu(n,e,t,i,r){let s;if(r===Ip(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=Ph(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Ph(a/i|0,n[a],n[a+1],s);return s&&Mr(s,s.next)&&(gs(s),s=s.next),s}function Ii(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Mr(t,t.next)||ut(t.prev,t,t.next)===0)){if(gs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ps(n,e,t,i,r,s,a){if(!n)return;!a&&s&&wp(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?yp(n,i,r,s):gp(n)){e.push(l.i,n.i,c.i),gs(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=_p(Ii(n),e),ps(n,e,t,i,r,s,2)):a===2&&xp(n,e,t,i,r,s):ps(Ii(n),e,t,i,r,s,1);break}}}function gp(n){let e=n.prev,t=n,i=n.next;if(ut(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),u=Math.min(o,l,c),d=Math.max(r,s,a),f=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Xr(r,o,s,l,a,c,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yp(n,e,t,i){let r=n.prev,s=n,a=n.next;if(ut(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),p=Dl(f,g,e,t,i),A=Dl(_,m,e,t,i),T=n.prevZ,S=n.nextZ;for(;T&&T.z>=p&&S&&S.z<=A;){if(T.x>=f&&T.x<=_&&T.y>=g&&T.y<=m&&T!==r&&T!==a&&Xr(o,h,l,u,c,d,T.x,T.y)&&ut(T.prev,T,T.next)>=0||(T=T.prevZ,S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&Xr(o,h,l,u,c,d,S.x,S.y)&&ut(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=_&&T.y>=g&&T.y<=m&&T!==r&&T!==a&&Xr(o,h,l,u,c,d,T.x,T.y)&&ut(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;S&&S.z<=A;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&Xr(o,h,l,u,c,d,S.x,S.y)&&ut(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function _p(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Mr(i,r)&&Cu(i,t,t.next,r)&&ms(i,r)&&ms(r,i)&&(e.push(i.i,t.i,r.i),gs(t),gs(t.next),t=n=r),t=t.next}while(t!==n);return Ii(t)}function xp(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cp(a,o)){let l=Ru(a,o);a=Ii(a,a.next),l=Ii(l,l.next),ps(a,e,t,i,r,s,0),ps(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function vp(n,e,t,i){let r=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=Eu(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Ap(c))}r.sort(Sp);for(let s=0;s<r.length;s++)t=Mp(r[s],t);return t}function Sp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Mp(n,e){let t=bp(n,e);if(!t)return e;let i=Ru(t,n);return Ii(i,i.next),Ii(t,t.next)}function bp(n,e){let t=e,i=n.x,r=n.y,s=-1/0,a;if(Mr(n,t))return t;do{if(Mr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Au(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let u=Math.abs(r-t.y)/(i-t.x);ms(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Tp(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Tp(n,e){return ut(n.prev,n,e.prev)<0&&ut(e.next,n,n.next)<0}function wp(n,e,t,i){let r=n;do r.z===0&&(r.z=Dl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Ep(r)}function Ep(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function Dl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ap(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Au(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Xr(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&Au(n,e,t,i,r,s,a,o)}function Cp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Rp(n,e)&&(ms(n,e)&&ms(e,n)&&Pp(n,e)&&(ut(n.prev,n,e.prev)||ut(n,e.prev,e))||Mr(n,e)&&ut(n.prev,n,n.next)>0&&ut(e.prev,e,e.next)>0)}function ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Mr(n,e){return n.x===e.x&&n.y===e.y}function Cu(n,e,t,i){let r=ca(ut(n,e,t)),s=ca(ut(n,e,i)),a=ca(ut(t,i,n)),o=ca(ut(t,i,e));return!!(r!==s&&a!==o||r===0&&la(n,t,e)||s===0&&la(n,i,e)||a===0&&la(t,n,i)||o===0&&la(t,e,i))}function la(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ca(n){return n>0?1:n<0?-1:0}function Rp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Cu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ms(n,e){return ut(n.prev,n,n.next)<0?ut(n,e,n.next)>=0&&ut(n,n.prev,e)>=0:ut(n,e,n.prev)<0||ut(n,n.next,e)<0}function Pp(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ru(n,e){let t=Ul(n.i,n.x,n.y),i=Ul(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ph(n,e,t,i){let r=Ul(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function gs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ul(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ip(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}var Nl=class{static triangulate(e,t,i=2){return mp(e,t,i)}},wi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Ih(e),Lh(i,e);let a=e.length;t.forEach(Ih);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Lh(i,t[l]);let o=Nl.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Ih(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Lh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ys=class n extends rn{constructor(e=new Sr([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Lt(r,3)),this.setAttribute("uv",new Lt(s,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Lp,T,S=!1,R,E,P,U;p&&(T=p.getSpacedPoints(h),S=!0,d=!1,R=p.computeFrenetFrames(h,!1),E=new L,P=new L,U=new L),d||(m=0,f=0,g=0,_=0);let M=o.extractPoints(c),v=M.shape,C=M.holes;if(!wi.isClockWise(v)){v=v.reverse();for(let ee=0,$=C.length;ee<$;ee++){let J=C[ee];wi.isClockWise(J)&&(C[ee]=J.reverse())}}function k(ee){let J=10000000000000001e-36,Z=ee[0];for(let he=1;he<=ee.length;he++){let re=he%ee.length,ue=ee[re],Oe=ue.x-Z.x,Fe=ue.y-Z.y,b=Oe*Oe+Fe*Fe,y=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(Z.x),Math.abs(Z.y)),B=J*y*y;if(b<=B){ee.splice(re,1),he--;continue}Z=ue}}k(v),C.forEach(k);let W=C.length,q=v;for(let ee=0;ee<W;ee++){let $=C[ee];v=v.concat($)}function G(ee,$,J){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector($,J)}let ie=v.length;function V(ee,$,J){let Z,he,re,ue=ee.x-$.x,Oe=ee.y-$.y,Fe=J.x-ee.x,b=J.y-ee.y,y=ue*ue+Oe*Oe,B=ue*b-Oe*Fe;if(Math.abs(B)>Number.EPSILON){let H=Math.sqrt(y),j=Math.sqrt(Fe*Fe+b*b),X=$.x-Oe/H,Re=$.y+ue/H,ce=J.x-b/j,Ee=J.y+Fe/j,Ae=((ce-X)*b-(Ee-Re)*Fe)/(ue*b-Oe*Fe);Z=X+ue*Ae-ee.x,he=Re+Oe*Ae-ee.y;let se=Z*Z+he*he;if(se<=2)return new ge(Z,he);re=Math.sqrt(se/2)}else{let H=!1;ue>Number.EPSILON?Fe>Number.EPSILON&&(H=!0):ue<-Number.EPSILON?Fe<-Number.EPSILON&&(H=!0):Math.sign(Oe)===Math.sign(b)&&(H=!0),H?(Z=-Oe,he=ue,re=Math.sqrt(y)):(Z=ue,he=Oe,re=Math.sqrt(y/2))}return new ge(Z/re,he/re)}let de=[];for(let ee=0,$=q.length,J=$-1,Z=ee+1;ee<$;ee++,J++,Z++)J===$&&(J=0),Z===$&&(Z=0),de[ee]=V(q[ee],q[J],q[Z]);let xe=[],Me,He=de.concat();for(let ee=0,$=W;ee<$;ee++){let J=C[ee];Me=[];for(let Z=0,he=J.length,re=he-1,ue=Z+1;Z<he;Z++,re++,ue++)re===he&&(re=0),ue===he&&(ue=0),Me[Z]=V(J[Z],J[re],J[ue]);xe.push(Me),He=He.concat(Me)}let Je;if(m===0)Je=wi.triangulateShape(q,C);else{let ee=[],$=[];for(let J=0;J<m;J++){let Z=J/m,he=f*Math.cos(Z*Math.PI/2),re=g*Math.sin(Z*Math.PI/2)+_;for(let ue=0,Oe=q.length;ue<Oe;ue++){let Fe=G(q[ue],de[ue],re);Ie(Fe.x,Fe.y,-he),Z===0&&ee.push(Fe)}for(let ue=0,Oe=W;ue<Oe;ue++){let Fe=C[ue];Me=xe[ue];let b=[];for(let y=0,B=Fe.length;y<B;y++){let H=G(Fe[y],Me[y],re);Ie(H.x,H.y,-he),Z===0&&b.push(H)}Z===0&&$.push(b)}}Je=wi.triangulateShape(ee,$)}let tt=Je.length,$e=g+_;for(let ee=0;ee<ie;ee++){let $=d?G(v[ee],He[ee],$e):v[ee];S?(P.copy(R.normals[0]).multiplyScalar($.x),E.copy(R.binormals[0]).multiplyScalar($.y),U.copy(T[0]).add(P).add(E),Ie(U.x,U.y,U.z)):Ie($.x,$.y,0)}for(let ee=1;ee<=h;ee++)for(let $=0;$<ie;$++){let J=d?G(v[$],He[$],$e):v[$];S?(P.copy(R.normals[ee]).multiplyScalar(J.x),E.copy(R.binormals[ee]).multiplyScalar(J.y),U.copy(T[ee]).add(P).add(E),Ie(U.x,U.y,U.z)):Ie(J.x,J.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){let $=ee/m,J=f*Math.cos($*Math.PI/2),Z=g*Math.sin($*Math.PI/2)+_;for(let he=0,re=q.length;he<re;he++){let ue=G(q[he],de[he],Z);Ie(ue.x,ue.y,u+J)}for(let he=0,re=C.length;he<re;he++){let ue=C[he];Me=xe[he];for(let Oe=0,Fe=ue.length;Oe<Fe;Oe++){let b=G(ue[Oe],Me[Oe],Z);S?Ie(b.x,b.y+T[h-1].y,T[h-1].x+J):Ie(b.x,b.y,u+J)}}}Y(),te();function Y(){let ee=r.length/3;if(d){let $=0,J=ie*$;for(let Z=0;Z<tt;Z++){let he=Je[Z];we(he[2]+J,he[1]+J,he[0]+J)}$=h+m*2,J=ie*$;for(let Z=0;Z<tt;Z++){let he=Je[Z];we(he[0]+J,he[1]+J,he[2]+J)}}else{for(let $=0;$<tt;$++){let J=Je[$];we(J[2],J[1],J[0])}for(let $=0;$<tt;$++){let J=Je[$];we(J[0]+ie*h,J[1]+ie*h,J[2]+ie*h)}}i.addGroup(ee,r.length/3-ee,0)}function te(){let ee=r.length/3,$=0;Se(q,$),$+=q.length;for(let J=0,Z=C.length;J<Z;J++){let he=C[J];Se(he,$),$+=he.length}i.addGroup(ee,r.length/3-ee,1)}function Se(ee,$){let J=ee.length;for(;--J>=0;){let Z=J,he=J-1;he<0&&(he=ee.length-1);for(let re=0,ue=h+m*2;re<ue;re++){let Oe=ie*re,Fe=ie*(re+1),b=$+Z+Oe,y=$+he+Oe,B=$+he+Fe,H=$+Z+Fe;Ye(b,y,B,H)}}}function Ie(ee,$,J){l.push(ee),l.push($),l.push(J)}function we(ee,$,J){st(ee),st($),st(J);let Z=r.length/3,he=A.generateTopUV(i,r,Z-3,Z-2,Z-1);w(he[0]),w(he[1]),w(he[2])}function Ye(ee,$,J,Z){st(ee),st($),st(Z),st($),st(J),st(Z);let he=r.length/3,re=A.generateSideWallUV(i,r,he-6,he-3,he-2,he-1);w(re[0]),w(re[1]),w(re[3]),w(re[1]),w(re[2]),w(re[3])}function st(ee){r.push(l[ee*3+0]),r.push(l[ee*3+1]),r.push(l[ee*3+2])}function w(ee){s.push(ee.x),s.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Dp(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ll[r.type]().fromJSON(r)),new n(i,e.options)}},Lp={generateTopUV:function(n,e,t,i,r){let s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new ge(s,a),new ge(o,l),new ge(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[r*3],f=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ge(a,1-l),new ge(c,1-u),new ge(d,1-g),new ge(_,1-p)]:[new ge(o,1-l),new ge(h,1-u),new ge(f,1-g),new ge(m,1-p)]}};function Dp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var sn=class n extends rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let A=p*d-a;for(let T=0;T<c;T++){let S=T*u-s;g.push(S,-A,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){let T=A+c*p,S=A+c*(p+1),R=A+1+c*(p+1),E=A+1+c*p;f.push(T,S,E),f.push(S,R,E)}this.setIndex(f),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ca=class extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ra=class extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ha(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Up(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Li=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pa=class extends Li{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cl:s=e,o=2*t-i;break;case Rl:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cl:a=e,l=2*i-t;break;case Rl:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,A=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,T=(-1-f)*m+(1.5+f)*_+.5*g,S=f*m-f*_;for(let R=0;R!==o;++R)s[R]=p*a[h+R]+A*a[c+R]+T*a[l+R]+S*a[u+R];return s}},Ia=class extends Li{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},La=class extends Li{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Kt=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ha(t,this.TimeBufferType),this.values=ha(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ha(e.times,Array),values:ha(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $r:t=this.InterpolantFactoryMethodDiscrete;break;case ga:t=this.InterpolantFactoryMethodLinear;break;case ua:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Up(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ua,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Kt.prototype.ValueTypeName="";Kt.prototype.TimeBufferType=Float32Array;Kt.prototype.ValueBufferType=Float32Array;Kt.prototype.DefaultInterpolation=ga;var ai=class extends Kt{constructor(e,t,i){super(e,t,i)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=$r;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends Kt{constructor(e,t,i,r){super(e,t,i,r)}};Da.prototype.ValueTypeName="color";var Ua=class extends Kt{constructor(e,t,i,r){super(e,t,i,r)}};Ua.prototype.ValueTypeName="number";var Na=class extends Li{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)mn.slerpFlat(s,0,a,c-o,a,c,l);return s}},_s=class extends Kt{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Na(this.times,this.values,this.getValueSize(),e)}};_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends Kt{constructor(e,t,i){super(e,t,i)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=$r;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Kt{constructor(e,t,i,r){super(e,t,i,r)}};Ba.prototype.ValueTypeName="vector";var za=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Pu=new za,Fa=class{constructor(e){this.manager=e!==void 0?e:Pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oa=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var br=class extends Pi{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var xs=class extends Oa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ka=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var sc="\\[\\]\\.:\\/",Np=new RegExp("["+sc+"]","g"),ac="[^"+sc+"]",Bp="[^"+sc.replace("\\.","")+"]",zp=/((?:WC+[\/:])*)/.source.replace("WC",ac),Fp=/(WCOD+)?/.source.replace("WCOD",Bp),Op=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),Hp=new RegExp("^"+zp+Fp+Op+kp+"$"),Vp=["material","materials","bones","map"],Bl=class{constructor(e,t,i){let r=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Np,"")}static parseTrackName(e){let t=Hp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Vp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Bl;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ax=new Float32Array(1);var Dh=new dt,vs=class{constructor(e,t,i=0,r=1/0){this.ray=new ts(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dh),this}intersectObject(e,t=!0,i=[]){return zl(e,this,i,t),i.sort(Uh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)zl(e[r],this,i,t);return i.sort(Uh),i}};function Uh(n,e){return n.distance-e.distance}function zl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let a=0,o=s.length;a<o;a++)zl(s[a],e,t,!0)}}function oc(n,e,t,i){let r=Gp(i);switch(t){case Jl:return n*e;case Kl:return n*e/r.components*r.byteLength;case to:return n*e/r.components*r.byteLength;case jl:return n*e*2/r.components*r.byteLength;case no:return n*e*2/r.components*r.byteLength;case $l:return n*e*3/r.components*r.byteLength;case an:return n*e*4/r.components*r.byteLength;case io:return n*e*4/r.components*r.byteLength;case bs:case Ts:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ws:case Es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case so:case oo:return Math.max(n,16)*Math.max(e,8)/4;case ro:case ao:return Math.max(n,8)*Math.max(e,8)/2;case lo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Ao:case Co:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ro:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Io:case Lo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gp(n){switch(n){case En:case Xl:return{byteLength:1,components:1};case Tr:case ql:case wr:return{byteLength:2,components:1};case Qa:case eo:return{byteLength:2,components:4};case ci:case ja:case An:return{byteLength:4,components:1};case Yl:case Zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ed(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Kp(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qp=`#ifdef USE_ALPHAHASH
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
#endif`,em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
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
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,am=`#ifdef USE_BATCHING
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
#endif`,om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,um=`#ifdef USE_IRIDESCENCE
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
#endif`,dm=`#ifdef USE_BUMPMAP
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bm=`vec3 transformedNormal = objectNormal;
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
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Om=`#ifdef USE_GRADIENTMAP
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
}`,km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gm=`uniform bool receiveShadow;
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
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jm=`PhysicalMaterial material;
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
#endif`,$m=`struct PhysicalMaterial {
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
}`,Km=`
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,og=`#if defined( USE_POINTS_UV )
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
#endif`,lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`#ifdef USE_MORPHTARGETS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vg=`#ifdef USE_NORMALMAP
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
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bg=`float getShadowMask() {
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
}`,zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`#include <common>
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
}`,r0=`#if DEPTH_PACKING == 3200
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
}`,s0=`#define DISTANCE
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
}`,a0=`#define DISTANCE
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#include <common>
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#define LAMBERT
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define MATCAP
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
}`,g0=`#define MATCAP
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
}`,y0=`#define NORMAL
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
}`,_0=`#define NORMAL
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
}`,x0=`#define PHONG
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
}`,v0=`#define PHONG
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
}`,S0=`#define STANDARD
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
}`,M0=`#define STANDARD
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
}`,b0=`#define TOON
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
}`,T0=`#define TOON
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
}`,w0=`uniform float size;
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
}`,E0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,C0=`uniform vec3 color;
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
}`,R0=`uniform float rotation;
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
}`,P0=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:jp,alphahash_pars_fragment:Qp,alphamap_fragment:em,alphamap_pars_fragment:tm,alphatest_fragment:nm,alphatest_pars_fragment:im,aomap_fragment:rm,aomap_pars_fragment:sm,batching_pars_vertex:am,batching_vertex:om,begin_vertex:lm,beginnormal_vertex:cm,bsdfs:hm,iridescence_fragment:um,bumpmap_pars_fragment:dm,clipping_planes_fragment:fm,clipping_planes_pars_fragment:pm,clipping_planes_pars_vertex:mm,clipping_planes_vertex:gm,color_fragment:ym,color_pars_fragment:_m,color_pars_vertex:xm,color_vertex:vm,common:Sm,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:bm,displacementmap_pars_vertex:Tm,displacementmap_vertex:wm,emissivemap_fragment:Em,emissivemap_pars_fragment:Am,colorspace_fragment:Cm,colorspace_pars_fragment:Rm,envmap_fragment:Pm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Lm,envmap_pars_vertex:Dm,envmap_physical_pars_fragment:Wm,envmap_vertex:Um,fog_vertex:Nm,fog_pars_vertex:Bm,fog_fragment:zm,fog_pars_fragment:Fm,gradientmap_pars_fragment:Om,lightmap_pars_fragment:km,lights_lambert_fragment:Hm,lights_lambert_pars_fragment:Vm,lights_pars_begin:Gm,lights_toon_fragment:Xm,lights_toon_pars_fragment:qm,lights_phong_fragment:Ym,lights_phong_pars_fragment:Zm,lights_physical_fragment:Jm,lights_physical_pars_fragment:$m,lights_fragment_begin:Km,lights_fragment_maps:jm,lights_fragment_end:Qm,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:rg,map_pars_fragment:sg,map_particle_fragment:ag,map_particle_pars_fragment:og,metalnessmap_fragment:lg,metalnessmap_pars_fragment:cg,morphinstance_vertex:hg,morphcolor_vertex:ug,morphnormal_vertex:dg,morphtarget_pars_vertex:fg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:yg,normal_pars_vertex:_g,normal_vertex:xg,normalmap_pars_fragment:vg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:Tg,opaque_fragment:wg,packing:Eg,premultiplied_alpha_fragment:Ag,project_vertex:Cg,dithering_fragment:Rg,dithering_pars_fragment:Pg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Dg,shadowmap_pars_vertex:Ug,shadowmap_vertex:Ng,shadowmask_pars_fragment:Bg,skinbase_vertex:zg,skinning_pars_vertex:Fg,skinning_vertex:Og,skinnormal_vertex:kg,specularmap_fragment:Hg,specularmap_pars_fragment:Vg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:qg,uv_pars_fragment:Yg,uv_pars_vertex:Zg,uv_vertex:Jg,worldpos_vertex:$g,background_vert:Kg,background_frag:jg,backgroundCube_vert:Qg,backgroundCube_frag:e0,cube_vert:t0,cube_frag:n0,depth_vert:i0,depth_frag:r0,distanceRGBA_vert:s0,distanceRGBA_frag:a0,equirect_vert:o0,equirect_frag:l0,linedashed_vert:c0,linedashed_frag:h0,meshbasic_vert:u0,meshbasic_frag:d0,meshlambert_vert:f0,meshlambert_frag:p0,meshmatcap_vert:m0,meshmatcap_frag:g0,meshnormal_vert:y0,meshnormal_frag:_0,meshphong_vert:x0,meshphong_frag:v0,meshphysical_vert:S0,meshphysical_frag:M0,meshtoon_vert:b0,meshtoon_frag:T0,points_vert:w0,points_frag:E0,shadow_vert:A0,shadow_frag:C0,sprite_vert:R0,sprite_frag:P0},pe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Cn={basic:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Dt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Dt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Dt([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Dt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Dt([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Dt([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Dt([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Dt([pe.lights,pe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Cn.physical={uniforms:Dt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Do={r:0,b:0,g:0},zi=new bn,I0=new dt;function L0(n,e,t,i,r,s,a){let o=new qe(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function _(T){let S=!1,R=g(T);R===null?p(o,l):R&&R.isColor&&(p(R,1),S=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,S){let R=g(S);R&&(R.isCubeTexture||R.mapping===Ss)?(h===void 0&&(h=new ft(new yr(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Bi(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),zi.copy(S.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(I0.makeRotationFromEuler(zi)),h.material.toneMapped=Ke.getTransfer(R.colorSpace)!==nt,(u!==R||d!==R.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ft(new sn(2,2),new At({name:"BackgroundMaterial",uniforms:Bi(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(R.colorSpace)!==nt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,S){T.getRGB(Do,ic(n)),i.buffers.color.setClear(Do.r,Do.g,Do.b,S,a)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:_,addToRenderList:m,dispose:A}}function D0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,a=!1;function o(v,C,z,k,W){let q=!1,G=u(k,z,C);s!==G&&(s=G,c(s.object)),q=f(v,k,z,W),q&&g(v,k,z,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(v,C,z,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,C,z){let k=z.wireframe===!0,W=i[v.id];W===void 0&&(W={},i[v.id]=W);let q=W[C.id];q===void 0&&(q={},W[C.id]=q);let G=q[k];return G===void 0&&(G=d(l()),q[k]=G),G}function d(v){let C=[],z=[],k=[];for(let W=0;W<t;W++)C[W]=0,z[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:k,object:v,attributes:{},index:null}}function f(v,C,z,k){let W=s.attributes,q=C.attributes,G=0,ie=z.getAttributes();for(let V in ie)if(ie[V].location>=0){let xe=W[V],Me=q[V];if(Me===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Me=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Me=v.instanceColor)),xe===void 0||xe.attribute!==Me||Me&&xe.data!==Me.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function g(v,C,z,k){let W={},q=C.attributes,G=0,ie=z.getAttributes();for(let V in ie)if(ie[V].location>=0){let xe=q[V];xe===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(xe=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(xe=v.instanceColor));let Me={};Me.attribute=xe,xe&&xe.data&&(Me.data=xe.data),W[V]=Me,G++}s.attributes=W,s.attributesNum=G,s.index=k}function _(){let v=s.newAttributes;for(let C=0,z=v.length;C<z;C++)v[C]=0}function m(v){p(v,0)}function p(v,C){let z=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;z[v]=1,k[v]===0&&(n.enableVertexAttribArray(v),k[v]=1),W[v]!==C&&(n.vertexAttribDivisor(v,C),W[v]=C)}function A(){let v=s.newAttributes,C=s.enabledAttributes;for(let z=0,k=C.length;z<k;z++)C[z]!==v[z]&&(n.disableVertexAttribArray(z),C[z]=0)}function T(v,C,z,k,W,q,G){G===!0?n.vertexAttribIPointer(v,C,z,W,q):n.vertexAttribPointer(v,C,z,k,W,q)}function S(v,C,z,k){_();let W=k.attributes,q=z.getAttributes(),G=C.defaultAttributeValues;for(let ie in q){let V=q[ie];if(V.location>=0){let de=W[ie];if(de===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(de=v.instanceColor)),de!==void 0){let xe=de.normalized,Me=de.itemSize,He=e.get(de);if(He===void 0)continue;let Je=He.buffer,tt=He.type,$e=He.bytesPerElement,Y=tt===n.INT||tt===n.UNSIGNED_INT||de.gpuType===ja;if(de.isInterleavedBufferAttribute){let te=de.data,Se=te.stride,Ie=de.offset;if(te.isInstancedInterleavedBuffer){for(let we=0;we<V.locationSize;we++)p(V.location+we,te.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let we=0;we<V.locationSize;we++)m(V.location+we);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let we=0;we<V.locationSize;we++)T(V.location+we,Me/V.locationSize,tt,xe,Se*$e,(Ie+Me/V.locationSize*we)*$e,Y)}else{if(de.isInstancedBufferAttribute){for(let te=0;te<V.locationSize;te++)p(V.location+te,de.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let te=0;te<V.locationSize;te++)m(V.location+te);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let te=0;te<V.locationSize;te++)T(V.location+te,Me/V.locationSize,tt,xe,Me*$e,Me/V.locationSize*te*$e,Y)}}else if(G!==void 0){let xe=G[ie];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(V.location,xe);break;case 3:n.vertexAttrib3fv(V.location,xe);break;case 4:n.vertexAttrib4fv(V.location,xe);break;default:n.vertexAttrib1fv(V.location,xe)}}}}A()}function R(){U();for(let v in i){let C=i[v];for(let z in C){let k=C[z];for(let W in k)h(k[W].object),delete k[W];delete C[z]}delete i[v]}}function E(v){if(i[v.id]===void 0)return;let C=i[v.id];for(let z in C){let k=C[z];for(let W in k)h(k[W].object),delete k[W];delete C[z]}delete i[v.id]}function P(v){for(let C in i){let z=i[C];if(z[v.id]===void 0)continue;let k=z[v.id];for(let W in k)h(k[W].object),delete k[W];delete z[v.id]}}function U(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function U0(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function N0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==an&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let U=P===wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==En&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==An&&!U)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:R,maxSamples:E}}function B0(n){let e=this,t=null,i=0,r=!1,s=!1,a=new tn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let A=s?0:i,T=A*4,S=p.clippingState||null;l.value=S,S=h(g,d,T,f);for(let R=0;R!==T;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,S=f;T!==_;++T,S+=4)a.copy(u[T]).applyMatrix4(A,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function z0(n){let e=new WeakMap;function t(a,o){return o===Ja?a.mapping=Di:o===$a&&(a.mapping=Ui),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ja||o===$a)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Sa(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Rr=4,Iu=[.125,.215,.35,.446,.526,.582],ki=20,lc=new br,Lu=new qe,cc=null,hc=0,uc=0,dc=!1,Oi=(1+Math.sqrt(5))/2,Cr=1/Oi,Du=[new L(-Oi,Cr,0),new L(Oi,Cr,0),new L(-Cr,0,Oi),new L(Cr,0,Oi),new L(0,Oi,-Cr),new L(0,Oi,Cr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],F0=new L,Bo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=F0}=s;cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,hc,uc),this._renderer.xr.enabled=dc,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:wr,format:an,colorSpace:Ci,depthBuffer:!1},r=Uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O0(s)),this._blurMaterial=k0(s,e,t)}return r}_compileMaterial(e){let t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,lc)}_sceneToCubeUV(e,t,i,r,s){let l=new Ht(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Lu),u.toneMapping=Gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let _=new Hn({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),m=new ft(new yr,_),p=!1,A=e.background;A?A.isColor&&(_.color.copy(A),e.background=null,p=!0):(_.color.copy(Lu),p=!0);for(let T=0;T<6;T++){let S=T%3;S===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[T],s.y,s.z)):S===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[T]));let R=this._cubeSize;Uo(r,S*R,T>2?R:0,R,R),u.setRenderTarget(r),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=A}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Di||e.mapping===Ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,lc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Du[(r-s-1)%Du.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ft(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ki-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ki;m>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);let p=[],A=0;for(let P=0;P<ki;++P){let U=P/_,M=Math.exp(-U*U/2);p.push(M),P===0?A+=M:P<m&&(A+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;let S=this._sizeLods[r],R=3*S*(r>T-Rr?r-T+Rr:0),E=4*(this._cubeSize-S);Uo(t,R,E,3*S,2*S),l.setRenderTarget(t),l.render(u,lc)}};function O0(n){let e=[],t=[],i=[],r=n,s=n-Rr+1+Iu.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Rr?l=Iu[a-n+Rr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,A=new Float32Array(_*g*f),T=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let E=0;E<f;E++){let P=E%3*2/3-1,U=E>2?0:-1,M=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];A.set(M,_*g*E),T.set(d,m*g*E);let v=[E,E,E,E,E,E];S.set(v,p*g*E)}let R=new rn;R.setAttribute("position",new Et(A,_)),R.setAttribute("uv",new Et(T,m)),R.setAttribute("faceIndex",new Et(S,p)),e.push(R),r>Rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uu(n,e,t){let i=new Mn(n,e,t);return i.texture.mapping=Ss,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function k0(n,e,t){let i=new Float32Array(ki),r=new L(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Nu(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Bu(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function H0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ja||l===$a,h=l===Di||l===Ui;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Bo(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new Bo(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function V0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function G0(n,e,t,i){let r={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let A=f.array;_=f.version;for(let T=0,S=A.length;T<S;T+=3){let R=A[T+0],E=A[T+1],P=A[T+2];d.push(R,E,E,P,P,R)}}else if(g!==void 0){let A=g.array;_=g.version;for(let T=0,S=A.length/3-1;T<S;T+=3){let R=T+0,E=T+1,P=T+2;d.push(R,E,E,P,P,R)}}else return;let m=new(nc(d)?is:ns)(d,1);m.version=_;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function W0(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let A=0;A<g;A++)p+=f[A]*_[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function X0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function q0(n,e,t){let i=new WeakMap,r=new yt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let M=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let S=o.attributes.position.count*T,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let E=new Float32Array(S*R*4*u),P=new es(E,S,R,u);P.type=An,P.needsUpdate=!0;let U=T*4;for(let v=0;v<u;v++){let C=m[v],z=p[v],k=A[v],W=S*R*4*v;for(let q=0;q<C.count;q++){let G=q*U;f===!0&&(r.fromBufferAttribute(C,q),E[W+G+0]=r.x,E[W+G+1]=r.y,E[W+G+2]=r.z,E[W+G+3]=0),g===!0&&(r.fromBufferAttribute(z,q),E[W+G+4]=r.x,E[W+G+5]=r.y,E[W+G+6]=r.z,E[W+G+7]=0),_===!0&&(r.fromBufferAttribute(k,q),E[W+G+8]=r.x,E[W+G+9]=r.y,E[W+G+10]=r.z,E[W+G+11]=k.itemSize===4?r.w:1)}}d={count:u,texture:P,size:new ge(S,R)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Y0(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var td=new Vt,zu=new as(1,1),nd=new es,id=new xa,rd=new rs,Fu=[],Ou=[],ku=new Float32Array(16),Hu=new Float32Array(9),Vu=new Float32Array(4);function Ir(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Fu[r];if(s===void 0&&(s=new Float32Array(r),Fu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zo(n,e){let t=Ou[e];t===void 0&&(t=new Int32Array(e),Ou[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Z0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function J0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function $0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function K0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function j0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Vu.set(i),n.uniformMatrix2fv(this.addr,!1,Vu),Mt(t,i)}}function Q0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Hu.set(i),n.uniformMatrix3fv(this.addr,!1,Hu),Mt(t,i)}}function ey(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;ku.set(i),n.uniformMatrix4fv(this.addr,!1,ku),Mt(t,i)}}function ty(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ny(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function iy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function ry(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function sy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function oy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function ly(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function cy(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(zu.compareFunction=Ql,s=zu):s=td,t.setTexture2D(e||s,r)}function hy(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||id,r)}function uy(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rd,r)}function dy(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nd,r)}function fy(n){switch(n){case 5126:return Z0;case 35664:return J0;case 35665:return $0;case 35666:return K0;case 35674:return j0;case 35675:return Q0;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return ry;case 5125:return sy;case 36294:return ay;case 36295:return oy;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return dy}}function py(n,e){n.uniform1fv(this.addr,e)}function my(n,e){let t=Ir(e,this.size,2);n.uniform2fv(this.addr,t)}function gy(n,e){let t=Ir(e,this.size,3);n.uniform3fv(this.addr,t)}function yy(n,e){let t=Ir(e,this.size,4);n.uniform4fv(this.addr,t)}function _y(n,e){let t=Ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xy(n,e){let t=Ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vy(n,e){let t=Ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sy(n,e){n.uniform1iv(this.addr,e)}function My(n,e){n.uniform2iv(this.addr,e)}function by(n,e){n.uniform3iv(this.addr,e)}function Ty(n,e){n.uniform4iv(this.addr,e)}function wy(n,e){n.uniform1uiv(this.addr,e)}function Ey(n,e){n.uniform2uiv(this.addr,e)}function Ay(n,e){n.uniform3uiv(this.addr,e)}function Cy(n,e){n.uniform4uiv(this.addr,e)}function Ry(n,e,t){let i=this.cache,r=e.length,s=zo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||td,s[a])}function Py(n,e,t){let i=this.cache,r=e.length,s=zo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||id,s[a])}function Iy(n,e,t){let i=this.cache,r=e.length,s=zo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||rd,s[a])}function Ly(n,e,t){let i=this.cache,r=e.length,s=zo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nd,s[a])}function Dy(n){switch(n){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return yy;case 35674:return _y;case 35675:return xy;case 35676:return vy;case 5124:case 35670:return Sy;case 35667:case 35671:return My;case 35668:case 35672:return by;case 35669:case 35673:return Ty;case 5125:return wy;case 36294:return Ey;case 36295:return Ay;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Ly}}var pc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fy(t.type)}},mc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dy(t.type)}},gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},fc=/(\w+)(\])?(\[|\.)?/g;function Gu(n,e){n.seq.push(e),n.map[e.id]=e}function Uy(n,e,t){let i=n.name,r=i.length;for(fc.lastIndex=0;;){let s=fc.exec(i),a=fc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Gu(t,c===void 0?new pc(o,n,e):new mc(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new gc(o),Gu(t,u)),t=u}}}var Pr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Uy(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Wu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ny=37297,By=0;function zy(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Xu=new Ve;function Fy(n){Ke._getMatrix(Xu,Ke.workingColorSpace,n);let e=`mat3( ${Xu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Kr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function qu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+zy(n.getShaderSource(e),o)}else return s}function Oy(n,e){let t=Fy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ky(n,e){let t;switch(e){case ru:t="Linear";break;case su:t="Reinhard";break;case au:t="Cineon";break;case Za:t="ACESFilmic";break;case lu:t="AgX";break;case cu:t="Neutral";break;case ou:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var No=new L;function Hy(){Ke.getLuminanceCoefficients(No);let n=No.x.toFixed(4),e=No.y.toFixed(4),t=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function Gy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Wy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Cs(n){return n!==""}function Yu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(n){return n.replace(Xy,Yy)}var qy=new Map;function Yy(n,e){let t=We[e];if(t===void 0){let i=qy.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}var Zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(n){return n.replace(Zy,Jy)}function Jy(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $u(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $y(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ky(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Di:case Ui:e="ENVMAP_TYPE_CUBE";break;case Ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function Qy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gl:e="ENVMAP_BLENDING_MULTIPLY";break;case nu:e="ENVMAP_BLENDING_MIX";break;case iu:e="ENVMAP_BLENDING_ADD";break}return e}function e_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function t_(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=$y(t),c=Ky(t),h=jy(t),u=Qy(t),d=e_(t),f=Vy(t),g=Gy(s),_=r.createProgram(),m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(m=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?We.tonemapping_pars_fragment:"",t.toneMapping!==Gn?ky("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Oy("linearToOutputTexel",t.outputColorSpace),Hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=yc(a),a=Yu(a,t),a=Zu(a,t),o=yc(o),o=Yu(o,t),o=Zu(o,t),a=Ju(a),o=Ju(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=A+m+a,S=A+p+o,R=Wu(r,r.VERTEX_SHADER,T),E=Wu(r,r.FRAGMENT_SHADER,S);r.attachShader(_,R),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(C){if(n.debug.checkShaderErrors){let z=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(R)||"",W=r.getShaderInfoLog(E)||"",q=z.trim(),G=k.trim(),ie=W.trim(),V=!0,de=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,E);else{let xe=qu(r,R,"vertex"),Me=qu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+xe+`
`+Me)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||ie==="")&&(de=!1);de&&(C.diagnostics={runnable:V,programLog:q,vertexShader:{log:G,prefix:m},fragmentShader:{log:ie,prefix:p}})}r.deleteShader(R),r.deleteShader(E),U=new Pr(r,_),M=Wy(r,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,Ny)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=By++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=E,this}var n_=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new xc(e),t.set(e,i)),i}},xc=class{constructor(e){this.id=n_++,this.code=e,this.usedTimes=0}};function i_(n,e,t,i,r,s,a){let o=new gr,l=new _c,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,C,z,k){let W=z.fog,q=k.geometry,G=M.isMeshStandardMaterial?z.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),V=ie&&ie.mapping===Ss?ie.image.height:null,de=g[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let xe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Me=xe!==void 0?xe.length:0,He=0;q.morphAttributes.position!==void 0&&(He=1),q.morphAttributes.normal!==void 0&&(He=2),q.morphAttributes.color!==void 0&&(He=3);let Je,tt,$e,Y;if(de){let et=Cn[de];Je=et.vertexShader,tt=et.fragmentShader}else Je=M.vertexShader,tt=M.fragmentShader,l.update(M),$e=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);let te=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,we=k.isBatchedMesh===!0,Ye=!!M.map,st=!!M.matcap,w=!!ie,ee=!!M.aoMap,$=!!M.lightMap,J=!!M.bumpMap,Z=!!M.normalMap,he=!!M.displacementMap,re=!!M.emissiveMap,ue=!!M.metalnessMap,Oe=!!M.roughnessMap,Fe=M.anisotropy>0,b=M.clearcoat>0,y=M.dispersion>0,B=M.iridescence>0,H=M.sheen>0,j=M.transmission>0,X=Fe&&!!M.anisotropyMap,Re=b&&!!M.clearcoatMap,ce=b&&!!M.clearcoatNormalMap,Ee=b&&!!M.clearcoatRoughnessMap,Ae=B&&!!M.iridescenceMap,se=B&&!!M.iridescenceThicknessMap,_e=H&&!!M.sheenColorMap,Be=H&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,me=!!M.specularColorMap,Ge=!!M.specularIntensityMap,I=j&&!!M.transmissionMap,le=j&&!!M.thicknessMap,fe=!!M.gradientMap,be=!!M.alphaMap,ae=M.alphaTest>0,K=!!M.alphaHash,Ce=!!M.extensions,ke=Gn;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ke=n.toneMapping);let at={shaderID:de,shaderType:M.type,shaderName:M.name,vertexShader:Je,fragmentShader:tt,defines:M.defines,customVertexShaderID:$e,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:we,batchingColor:we&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ci,alphaToCoverage:!!M.alphaToCoverage,map:Ye,matcap:st,envMap:w,envMapMode:w&&ie.mapping,envMapCubeUVHeight:V,aoMap:ee,lightMap:$,bumpMap:J,normalMap:Z,displacementMap:d&&he,emissiveMap:re,normalMapObjectSpace:Z&&M.normalMapType===pu,normalMapTangentSpace:Z&&M.normalMapType===fu,metalnessMap:ue,roughnessMap:Oe,anisotropy:Fe,anisotropyMap:X,clearcoat:b,clearcoatMap:Re,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ee,dispersion:y,iridescence:B,iridescenceMap:Ae,iridescenceThicknessMap:se,sheen:H,sheenColorMap:_e,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:me,specularIntensityMap:Ge,transmission:j,transmissionMap:I,thicknessMap:le,gradientMap:fe,opaque:M.transparent===!1&&M.blending===Ei&&M.alphaToCoverage===!1,alphaMap:be,alphaTest:ae,alphaHash:K,combine:M.combine,mapUv:Ye&&_(M.map.channel),aoMapUv:ee&&_(M.aoMap.channel),lightMapUv:$&&_(M.lightMap.channel),bumpMapUv:J&&_(M.bumpMap.channel),normalMapUv:Z&&_(M.normalMap.channel),displacementMapUv:he&&_(M.displacementMap.channel),emissiveMapUv:re&&_(M.emissiveMap.channel),metalnessMapUv:ue&&_(M.metalnessMap.channel),roughnessMapUv:Oe&&_(M.roughnessMap.channel),anisotropyMapUv:X&&_(M.anisotropyMap.channel),clearcoatMapUv:Re&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(M.sheenRoughnessMap.channel),specularMapUv:Pe&&_(M.specularMap.channel),specularColorMapUv:me&&_(M.specularColorMap.channel),specularIntensityMapUv:Ge&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:le&&_(M.thicknessMap.channel),alphaMapUv:be&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Z||Fe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Ye||be),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:He,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ye&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:re&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wn,flipSided:M.side===zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ce&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&M.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function p(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)v.push(C),v.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(A(v,M),T(v,M),v.push(n.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function A(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function T(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){let v=g[M.type],C;if(v){let z=Cn[v];C=wu.clone(z.uniforms)}else C=M.uniforms;return C}function R(M,v){let C;for(let z=0,k=h.length;z<k;z++){let W=h[z];if(W.cacheKey===v){C=W,++C.usedTimes;break}}return C===void 0&&(C=new t_(n,v,M,s),h.push(C)),C}function E(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function P(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:U}}function r_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function s_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ju(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||s_),i.length>1&&i.sort(d||Ku),r.length>1&&r.sort(d||Ku)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function a_(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new ju,n.set(i,[a])):r>=s.length?(a=new ju,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function o_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new qe};break;case"SpotLight":t={position:new L,direction:new L,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function l_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var c_=0;function h_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function u_(n){let e=new o_,t=l_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let r=new L,s=new dt,a=new dt;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,A=0,T=0,S=0,R=0,E=0,P=0;c.sort(h_);for(let M=0,v=c.length;M<v;M++){let C=c[M],z=C.color,k=C.intensity,W=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],k);P++}else if(C.isDirectionalLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ie=C.shadow,V=t.get(C);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=C.shadow.matrix,A++}i.directional[f]=G,f++}else if(C.isSpotLight){let G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(z).multiplyScalar(k),G.distance=W,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[_]=G;let ie=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,ie.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[_]=ie.matrix,C.castShadow){let V=t.get(C);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=q,S++}_++}else if(C.isRectAreaLight){let G=e.get(C);G.color.copy(z).multiplyScalar(k),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=G,m++}else if(C.isPointLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let ie=C.shadow,V=t.get(C);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,V.shadowCameraNear=ie.camera.near,V.shadowCameraFar=ie.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=C.shadow.matrix,T++}i.point[g]=G,g++}else if(C.isHemisphereLight){let G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(k),G.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let U=i.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==R||U.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+R-E,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,U.directionalLength=f,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=R,U.numLightProbes=P,i.version=c_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){let T=c[p];if(T.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(T.isSpotLight){let S=i.spot[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(T.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){let S=i.hemi[_];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Qu(n){let e=new u_(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function d_(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Qu(n),e.set(r,[o])):s>=a.length?(o=new Qu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
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
}`;function m_(n,e,t){let i=new ss,r=new ge,s=new ge,a=new yt,o=new Ca({depthPacking:du}),l=new Ra,c={},h=t.maxTextureSize,u={[On]:zt,[zt]:On,[wn]:wn},d=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:f_,fragmentShader:p_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new rn;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let p=this.type;this.render=function(E,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=n.getRenderTarget(),v=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Vn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=p!==Tn&&this.type===Tn,W=p===Tn&&this.type!==Tn;for(let q=0,G=E.length;q<G;q++){let ie=E[q],V=ie.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let de=V.getFrameExtents();if(r.multiply(de),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/de.x),r.x=s.x*de.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/de.y),r.y=s.y*de.y,V.mapSize.y=s.y)),V.map===null||k===!0||W===!0){let Me=this.type!==Tn?{minFilter:nn,magFilter:nn}:{};V.map!==null&&V.map.dispose(),V.map=new Mn(r.x,r.y,Me),V.map.texture.name=ie.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let xe=V.getViewportCount();for(let Me=0;Me<xe;Me++){let He=V.getViewport(Me);a.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),z.viewport(a),V.updateMatrices(ie,Me),i=V.getFrustum(),S(P,U,V.camera,ie,this.type)}V.isPointLightShadow!==!0&&this.type===Tn&&A(V,U),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,v,C)};function A(E,P){let U=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Mn(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(P,null,U,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(P,null,U,f,_,null)}function T(E,P,U,M){let v=null,C=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)v=C;else if(v=U.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=v.uuid,k=P.uuid,W=c[z];W===void 0&&(W={},c[z]=W);let q=W[k];q===void 0&&(q=v.clone(),W[k]=q,P.addEventListener("dispose",R)),v=q}if(v.visible=P.visible,v.wireframe=P.wireframe,M===Tn?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:u[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let z=n.properties.get(v);z.light=U}return v}function S(E,P,U,M,v){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Tn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);let k=e.update(E),W=E.material;if(Array.isArray(W)){let q=k.groups;for(let G=0,ie=q.length;G<ie;G++){let V=q[G],de=W[V.materialIndex];if(de&&de.visible){let xe=T(E,de,M,v);E.onBeforeShadow(n,E,P,U,k,xe,V),n.renderBufferDirect(U,null,k,xe,E,V),E.onAfterShadow(n,E,P,U,k,xe,V)}}}else if(W.visible){let q=T(E,W,M,v);E.onBeforeShadow(n,E,P,U,k,q,null),n.renderBufferDirect(U,null,k,q,E,null),E.onAfterShadow(n,E,P,U,k,q,null)}}let z=E.children;for(let k=0,W=z.length;k<W;k++)S(z[k],P,U,M,v)}function R(E){E.target.removeEventListener("dispose",R);for(let U in c){let M=c[U],v=E.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var g_={[Ha]:Va,[Ga]:qa,[Wa]:Ya,[Ai]:Xa,[Va]:Ha,[qa]:Ga,[Ya]:Wa,[Xa]:Ai};function y_(n,e){function t(){let I=!1,le=new yt,fe=null,be=new yt(0,0,0,0);return{setMask:function(ae){fe!==ae&&!I&&(n.colorMask(ae,ae,ae,ae),fe=ae)},setLocked:function(ae){I=ae},setClear:function(ae,K,Ce,ke,at){at===!0&&(ae*=ke,K*=ke,Ce*=ke),le.set(ae,K,Ce,ke),be.equals(le)===!1&&(n.clearColor(ae,K,Ce,ke),be.copy(le))},reset:function(){I=!1,fe=null,be.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,fe=null,be=null,ae=null;return{setReversed:function(K){if(le!==K){let Ce=e.get("EXT_clip_control");K?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),le=K;let ke=ae;ae=null,this.setClear(ke)}},getReversed:function(){return le},setTest:function(K){K?te(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(K){fe!==K&&!I&&(n.depthMask(K),fe=K)},setFunc:function(K){if(le&&(K=g_[K]),be!==K){switch(K){case Ha:n.depthFunc(n.NEVER);break;case Va:n.depthFunc(n.ALWAYS);break;case Ga:n.depthFunc(n.LESS);break;case Ai:n.depthFunc(n.LEQUAL);break;case Wa:n.depthFunc(n.EQUAL);break;case Xa:n.depthFunc(n.GEQUAL);break;case qa:n.depthFunc(n.GREATER);break;case Ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=K}},setLocked:function(K){I=K},setClear:function(K){ae!==K&&(le&&(K=1-K),n.clearDepth(K),ae=K)},reset:function(){I=!1,fe=null,be=null,ae=null,le=!1}}}function r(){let I=!1,le=null,fe=null,be=null,ae=null,K=null,Ce=null,ke=null,at=null;return{setTest:function(et){I||(et?te(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(et){le!==et&&!I&&(n.stencilMask(et),le=et)},setFunc:function(et,Ln,Sn){(fe!==et||be!==Ln||ae!==Sn)&&(n.stencilFunc(et,Ln,Sn),fe=et,be=Ln,ae=Sn)},setOp:function(et,Ln,Sn){(K!==et||Ce!==Ln||ke!==Sn)&&(n.stencilOp(et,Ln,Sn),K=et,Ce=Ln,ke=Sn)},setLocked:function(et){I=et},setClear:function(et){at!==et&&(n.clearStencil(et),at=et)},reset:function(){I=!1,le=null,fe=null,be=null,ae=null,K=null,Ce=null,ke=null,at=null}}}let s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,A=null,T=null,S=null,R=null,E=null,P=new qe(0,0,0),U=0,M=!1,v=null,C=null,z=null,k=null,W=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ie=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=ie>=2);let de=null,xe={},Me=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),Je=new yt().fromArray(Me),tt=new yt().fromArray(He);function $e(I,le,fe,be){let ae=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<fe;Ce++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(le+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return K}let Y={};Y[n.TEXTURE_2D]=$e(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=$e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=$e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=$e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(Ai),J(!1),Z(Fl),te(n.CULL_FACE),ee(Vn);function te(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Se(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ie(I,le){return u[I]!==le?(n.bindFramebuffer(I,le),u[I]=le,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=le),!0):!1}function we(I,le){let fe=f,be=!1;if(I){fe=d.get(le),fe===void 0&&(fe=[],d.set(le,fe));let ae=I.textures;if(fe.length!==ae.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let K=0,Ce=ae.length;K<Ce;K++)fe[K]=n.COLOR_ATTACHMENT0+K;fe.length=ae.length,be=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,be=!0);be&&n.drawBuffers(fe)}function Ye(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let st={[ii]:n.FUNC_ADD,[Oh]:n.FUNC_SUBTRACT,[kh]:n.FUNC_REVERSE_SUBTRACT};st[Hh]=n.MIN,st[Vh]=n.MAX;let w={[Gh]:n.ZERO,[Wh]:n.ONE,[Xh]:n.SRC_COLOR,[da]:n.SRC_ALPHA,[Kh]:n.SRC_ALPHA_SATURATE,[Jh]:n.DST_COLOR,[Yh]:n.DST_ALPHA,[qh]:n.ONE_MINUS_SRC_COLOR,[fa]:n.ONE_MINUS_SRC_ALPHA,[$h]:n.ONE_MINUS_DST_COLOR,[Zh]:n.ONE_MINUS_DST_ALPHA,[jh]:n.CONSTANT_COLOR,[Qh]:n.ONE_MINUS_CONSTANT_COLOR,[eu]:n.CONSTANT_ALPHA,[tu]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(I,le,fe,be,ae,K,Ce,ke,at,et){if(I===Vn){_===!0&&(Se(n.BLEND),_=!1);return}if(_===!1&&(te(n.BLEND),_=!0),I!==Fh){if(I!==m||et!==M){if((p!==ii||S!==ii)&&(n.blendEquation(n.FUNC_ADD),p=ii,S=ii),et)switch(I){case Ei:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kl:n.blendFunc(n.ONE,n.ONE);break;case Hl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,T=null,R=null,E=null,P.set(0,0,0),U=0,m=I,M=et}return}ae=ae||le,K=K||fe,Ce=Ce||be,(le!==p||ae!==S)&&(n.blendEquationSeparate(st[le],st[ae]),p=le,S=ae),(fe!==A||be!==T||K!==R||Ce!==E)&&(n.blendFuncSeparate(w[fe],w[be],w[K],w[Ce]),A=fe,T=be,R=K,E=Ce),(ke.equals(P)===!1||at!==U)&&(n.blendColor(ke.r,ke.g,ke.b,at),P.copy(ke),U=at),m=I,M=!1}function $(I,le){I.side===wn?Se(n.CULL_FACE):te(n.CULL_FACE);let fe=I.side===zt;le&&(fe=!fe),J(fe),I.blending===Ei&&I.transparent===!1?ee(Vn):ee(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);let be=I.stencilWrite;o.setTest(be),be&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(I){v!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),v=I)}function Z(I){I!==Nh?(te(n.CULL_FACE),I!==C&&(I===Fl?n.cullFace(n.BACK):I===Bh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),C=I}function he(I){I!==z&&(G&&n.lineWidth(I),z=I)}function re(I,le,fe){I?(te(n.POLYGON_OFFSET_FILL),(k!==le||W!==fe)&&(n.polygonOffset(le,fe),k=le,W=fe)):Se(n.POLYGON_OFFSET_FILL)}function ue(I){I?te(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Oe(I){I===void 0&&(I=n.TEXTURE0+q-1),de!==I&&(n.activeTexture(I),de=I)}function Fe(I,le,fe){fe===void 0&&(de===null?fe=n.TEXTURE0+q-1:fe=de);let be=xe[fe];be===void 0&&(be={type:void 0,texture:void 0},xe[fe]=be),(be.type!==I||be.texture!==le)&&(de!==fe&&(n.activeTexture(fe),de=fe),n.bindTexture(I,le||Y[I]),be.type=I,be.texture=le)}function b(){let I=xe[de];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(I){Je.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function Be(I){tt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),tt.copy(I))}function Pe(I,le){let fe=c.get(le);fe===void 0&&(fe=new WeakMap,c.set(le,fe));let be=fe.get(I);be===void 0&&(be=n.getUniformBlockIndex(le,I.name),fe.set(I,be))}function me(I,le){let be=c.get(le).get(I);l.get(le)!==be&&(n.uniformBlockBinding(le,be,I.__bindingPointIndex),l.set(le,be))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},de=null,xe={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,A=null,T=null,S=null,R=null,E=null,P=new qe(0,0,0),U=0,M=!1,v=null,C=null,z=null,k=null,W=null,Je.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:Se,bindFramebuffer:Ie,drawBuffers:we,useProgram:Ye,setBlending:ee,setMaterial:$,setFlipSided:J,setCullFace:Z,setLineWidth:he,setPolygonOffset:re,setScissorTest:ue,activeTexture:Oe,bindTexture:Fe,unbindTexture:b,compressedTexImage2D:y,compressedTexImage3D:B,texImage2D:Ae,texImage3D:se,updateUBOMapping:Pe,uniformBlockBinding:me,texStorage2D:ce,texStorage3D:Ee,texSubImage2D:H,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:Re,scissor:_e,viewport:Be,reset:Ge}}function __(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return f?new OffscreenCanvas(b,y):Qr("canvas")}function _(b,y,B){let H=1,j=Fe(b);if((j.width>B||j.height>B)&&(H=B/Math.max(j.width,j.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let X=Math.floor(H*j.width),Re=Math.floor(H*j.height);u===void 0&&(u=g(X,Re));let ce=y?g(X,Re):u;return ce.width=X,ce.height=Re,ce.getContext("2d").drawImage(b,0,0,X,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+Re+")."),ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(b,y,B,H,j=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=y;if(y===n.RED&&(B===n.FLOAT&&(X=n.R32F),B===n.HALF_FLOAT&&(X=n.R16F),B===n.UNSIGNED_BYTE&&(X=n.R8)),y===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.R8UI),B===n.UNSIGNED_SHORT&&(X=n.R16UI),B===n.UNSIGNED_INT&&(X=n.R32UI),B===n.BYTE&&(X=n.R8I),B===n.SHORT&&(X=n.R16I),B===n.INT&&(X=n.R32I)),y===n.RG&&(B===n.FLOAT&&(X=n.RG32F),B===n.HALF_FLOAT&&(X=n.RG16F),B===n.UNSIGNED_BYTE&&(X=n.RG8)),y===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RG8UI),B===n.UNSIGNED_SHORT&&(X=n.RG16UI),B===n.UNSIGNED_INT&&(X=n.RG32UI),B===n.BYTE&&(X=n.RG8I),B===n.SHORT&&(X=n.RG16I),B===n.INT&&(X=n.RG32I)),y===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RGB8UI),B===n.UNSIGNED_SHORT&&(X=n.RGB16UI),B===n.UNSIGNED_INT&&(X=n.RGB32UI),B===n.BYTE&&(X=n.RGB8I),B===n.SHORT&&(X=n.RGB16I),B===n.INT&&(X=n.RGB32I)),y===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),B===n.UNSIGNED_INT&&(X=n.RGBA32UI),B===n.BYTE&&(X=n.RGBA8I),B===n.SHORT&&(X=n.RGBA16I),B===n.INT&&(X=n.RGBA32I)),y===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),y===n.RGBA){let Re=j?Kr:Ke.getTransfer(H);B===n.FLOAT&&(X=n.RGBA32F),B===n.HALF_FLOAT&&(X=n.RGBA16F),B===n.UNSIGNED_BYTE&&(X=Re===nt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(b,y){let B;return b?y===null||y===ci||y===Er?B=n.DEPTH24_STENCIL8:y===An?B=n.DEPTH32F_STENCIL8:y===Tr&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ci||y===Er?B=n.DEPTH_COMPONENT24:y===An?B=n.DEPTH_COMPONENT32F:y===Tr&&(B=n.DEPTH_COMPONENT16),B}function R(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==nn&&b.minFilter!==Zt?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function E(b){let y=b.target;y.removeEventListener("dispose",E),U(y),y.isVideoTexture&&h.delete(y)}function P(b){let y=b.target;y.removeEventListener("dispose",P),v(y)}function U(b){let y=i.get(b);if(y.__webglInit===void 0)return;let B=b.source,H=d.get(B);if(H){let j=H[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(b),Object.keys(H).length===0&&d.delete(B)}i.remove(b)}function M(b){let y=i.get(b);n.deleteTexture(y.__webglTexture);let B=b.source,H=d.get(B);delete H[y.__cacheKey],a.memory.textures--}function v(b){let y=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let j=0;j<y.__webglFramebuffer[H].length;j++)n.deleteFramebuffer(y.__webglFramebuffer[H][j]);else n.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)n.deleteFramebuffer(y.__webglFramebuffer[H]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=b.textures;for(let H=0,j=B.length;H<j;H++){let X=i.get(B[H]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(B[H])}i.remove(b)}let C=0;function z(){C=0}function k(){let b=C;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),C+=1,b}function W(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function q(b,y){let B=i.get(b);if(b.isVideoTexture&&ue(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){let H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,b,y);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+y)}function G(b,y){let B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){Y(B,b,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+y)}function ie(b,y){let B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){Y(B,b,y);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+y)}function V(b,y){let B=i.get(b);if(b.version>0&&B.__version!==b.version){te(B,b,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+y)}let de={[pa]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[ma]:n.MIRRORED_REPEAT},xe={[nn]:n.NEAREST,[hu]:n.NEAREST_MIPMAP_NEAREST,[Ms]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Ka]:n.LINEAR_MIPMAP_NEAREST,[li]:n.LINEAR_MIPMAP_LINEAR},Me={[mu]:n.NEVER,[Su]:n.ALWAYS,[gu]:n.LESS,[Ql]:n.LEQUAL,[yu]:n.EQUAL,[vu]:n.GEQUAL,[_u]:n.GREATER,[xu]:n.NOTEQUAL};function He(b,y){if(y.type===An&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Zt||y.magFilter===Ka||y.magFilter===Ms||y.magFilter===li||y.minFilter===Zt||y.minFilter===Ka||y.minFilter===Ms||y.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,de[y.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,de[y.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,de[y.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,xe[y.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===nn||y.minFilter!==Ms&&y.minFilter!==li||y.type===An&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Je(b,y){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",E));let H=y.source,j=d.get(H);j===void 0&&(j={},d.set(H,j));let X=W(y);if(X!==b.__cacheKey){j[X]===void 0&&(j[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[X].usedTimes++;let Re=j[b.__cacheKey];Re!==void 0&&(j[b.__cacheKey].usedTimes--,Re.usedTimes===0&&M(y)),b.__cacheKey=X,b.__webglTexture=j[X].texture}return B}function tt(b,y,B){return Math.floor(Math.floor(b/B)/y)}function $e(b,y,B,H){let X=b.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,B,H,y.data);else{X.sort((se,_e)=>se.start-_e.start);let Re=0;for(let se=1;se<X.length;se++){let _e=X[Re],Be=X[se],Pe=_e.start+_e.count,me=tt(Be.start,y.width,4),Ge=tt(_e.start,y.width,4);Be.start<=Pe+1&&me===Ge&&tt(Be.start+Be.count-1,y.width,4)===me?_e.count=Math.max(_e.count,Be.start+Be.count-_e.start):(++Re,X[Re]=Be)}X.length=Re+1;let ce=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let se=0,_e=X.length;se<_e;se++){let Be=X[se],Pe=Math.floor(Be.start/4),me=Math.ceil(Be.count/4),Ge=Pe%y.width,I=Math.floor(Pe/y.width),le=me,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ge,I,le,fe,B,H,y.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function Y(b,y,B){let H=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=n.TEXTURE_3D);let j=Je(b,y),X=y.source;t.bindTexture(H,b.__webglTexture,n.TEXTURE0+B);let Re=i.get(X);if(X.version!==Re.__version||j===!0){t.activeTexture(n.TEXTURE0+B);let ce=Ke.getPrimaries(Ke.workingColorSpace),Ee=y.colorSpace===Wn?null:Ke.getPrimaries(y.colorSpace),Ae=y.colorSpace===Wn||ce===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let se=_(y.image,!1,r.maxTextureSize);se=Oe(y,se);let _e=s.convert(y.format,y.colorSpace),Be=s.convert(y.type),Pe=T(y.internalFormat,_e,Be,y.colorSpace,y.isVideoTexture);He(H,y);let me,Ge=y.mipmaps,I=y.isVideoTexture!==!0,le=Re.__version===void 0||j===!0,fe=X.dataReady,be=R(y,se);if(y.isDepthTexture)Pe=S(y.format===Ar,y.type),le&&(I?t.texStorage2D(n.TEXTURE_2D,1,Pe,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Pe,se.width,se.height,0,_e,Be,null));else if(y.isDataTexture)if(Ge.length>0){I&&le&&t.texStorage2D(n.TEXTURE_2D,be,Pe,Ge[0].width,Ge[0].height);for(let ae=0,K=Ge.length;ae<K;ae++)me=Ge[ae],I?fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,me.width,me.height,_e,Be,me.data):t.texImage2D(n.TEXTURE_2D,ae,Pe,me.width,me.height,0,_e,Be,me.data);y.generateMipmaps=!1}else I?(le&&t.texStorage2D(n.TEXTURE_2D,be,Pe,se.width,se.height),fe&&$e(y,se,_e,Be)):t.texImage2D(n.TEXTURE_2D,0,Pe,se.width,se.height,0,_e,Be,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Pe,Ge[0].width,Ge[0].height,se.depth);for(let ae=0,K=Ge.length;ae<K;ae++)if(me=Ge[ae],y.format!==an)if(_e!==null)if(I){if(fe)if(y.layerUpdates.size>0){let Ce=oc(me.width,me.height,y.format,y.type);for(let ke of y.layerUpdates){let at=me.data.subarray(ke*Ce/me.data.BYTES_PER_ELEMENT,(ke+1)*Ce/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,ke,me.width,me.height,1,_e,at)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,se.depth,_e,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Pe,me.width,me.height,se.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,se.depth,_e,Be,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Pe,me.width,me.height,se.depth,0,_e,Be,me.data)}else{I&&le&&t.texStorage2D(n.TEXTURE_2D,be,Pe,Ge[0].width,Ge[0].height);for(let ae=0,K=Ge.length;ae<K;ae++)me=Ge[ae],y.format!==an?_e!==null?I?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,me.width,me.height,_e,me.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,me.width,me.height,_e,Be,me.data):t.texImage2D(n.TEXTURE_2D,ae,Pe,me.width,me.height,0,_e,Be,me.data)}else if(y.isDataArrayTexture)if(I){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Pe,se.width,se.height,se.depth),fe)if(y.layerUpdates.size>0){let ae=oc(se.width,se.height,y.format,y.type);for(let K of y.layerUpdates){let Ce=se.data.subarray(K*ae/se.data.BYTES_PER_ELEMENT,(K+1)*ae/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,se.width,se.height,1,_e,Be,Ce)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Be,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,_e,Be,se.data);else if(y.isData3DTexture)I?(le&&t.texStorage3D(n.TEXTURE_3D,be,Pe,se.width,se.height,se.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Be,se.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,_e,Be,se.data);else if(y.isFramebufferTexture){if(le)if(I)t.texStorage2D(n.TEXTURE_2D,be,Pe,se.width,se.height);else{let ae=se.width,K=se.height;for(let Ce=0;Ce<be;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Pe,ae,K,0,_e,Be,null),ae>>=1,K>>=1}}else if(Ge.length>0){if(I&&le){let ae=Fe(Ge[0]);t.texStorage2D(n.TEXTURE_2D,be,Pe,ae.width,ae.height)}for(let ae=0,K=Ge.length;ae<K;ae++)me=Ge[ae],I?fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,_e,Be,me):t.texImage2D(n.TEXTURE_2D,ae,Pe,_e,Be,me);y.generateMipmaps=!1}else if(I){if(le){let ae=Fe(se);t.texStorage2D(n.TEXTURE_2D,be,Pe,ae.width,ae.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Be,se)}else t.texImage2D(n.TEXTURE_2D,0,Pe,_e,Be,se);m(y)&&p(H),Re.__version=X.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function te(b,y,B){if(y.image.length!==6)return;let H=Je(b,y),j=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+B);let X=i.get(j);if(j.version!==X.__version||H===!0){t.activeTexture(n.TEXTURE0+B);let Re=Ke.getPrimaries(Ke.workingColorSpace),ce=y.colorSpace===Wn?null:Ke.getPrimaries(y.colorSpace),Ee=y.colorSpace===Wn||Re===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Ae=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,_e=[];for(let K=0;K<6;K++)!Ae&&!se?_e[K]=_(y.image[K],!0,r.maxCubemapSize):_e[K]=se?y.image[K].image:y.image[K],_e[K]=Oe(y,_e[K]);let Be=_e[0],Pe=s.convert(y.format,y.colorSpace),me=s.convert(y.type),Ge=T(y.internalFormat,Pe,me,y.colorSpace),I=y.isVideoTexture!==!0,le=X.__version===void 0||H===!0,fe=j.dataReady,be=R(y,Be);He(n.TEXTURE_CUBE_MAP,y);let ae;if(Ae){I&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ge,Be.width,Be.height);for(let K=0;K<6;K++){ae=_e[K].mipmaps;for(let Ce=0;Ce<ae.length;Ce++){let ke=ae[Ce];y.format!==an?Pe!==null?I?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,0,0,ke.width,ke.height,Pe,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,Ge,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,0,0,ke.width,ke.height,Pe,me,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,Ge,ke.width,ke.height,0,Pe,me,ke.data)}}}else{if(ae=y.mipmaps,I&&le){ae.length>0&&be++;let K=Fe(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ge,K.width,K.height)}for(let K=0;K<6;K++)if(se){I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,_e[K].width,_e[K].height,Pe,me,_e[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,_e[K].width,_e[K].height,0,Pe,me,_e[K].data);for(let Ce=0;Ce<ae.length;Ce++){let at=ae[Ce].image[K].image;I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,0,0,at.width,at.height,Pe,me,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,Ge,at.width,at.height,0,Pe,me,at.data)}}else{I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pe,me,_e[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,Pe,me,_e[K]);for(let Ce=0;Ce<ae.length;Ce++){let ke=ae[Ce];I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,0,0,Pe,me,ke.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,Ge,Pe,me,ke.image[K])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),X.__version=j.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Se(b,y,B,H,j,X){let Re=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),Ee=T(B.internalFormat,Re,ce,B.colorSpace),Ae=i.get(y),se=i.get(B);if(se.__renderTarget=y,!Ae.__hasExternalTextures){let _e=Math.max(1,y.width>>X),Be=Math.max(1,y.height>>X);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,X,Ee,_e,Be,y.depth,0,Re,ce,null):t.texImage2D(j,X,Ee,_e,Be,0,Re,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),re(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,j,se.__webglTexture,0,he(y)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,j,se.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(b,y,B){if(n.bindRenderbuffer(n.RENDERBUFFER,b),y.depthBuffer){let H=y.depthTexture,j=H&&H.isDepthTexture?H.type:null,X=S(y.stencilBuffer,j),Re=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=he(y);re(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,X,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,X,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,X,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,b)}else{let H=y.textures;for(let j=0;j<H.length;j++){let X=H[j],Re=s.convert(X.format,X.colorSpace),ce=s.convert(X.type),Ee=T(X.internalFormat,Re,ce,X.colorSpace),Ae=he(y);B&&re(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Ee,y.width,y.height):re(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,Ee,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=i.get(y.depthTexture);H.__renderTarget=y,(!H.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);let j=H.__webglTexture,X=he(y);if(y.depthTexture.format===ur)re(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(y.depthTexture.format===Ar)re(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ye(b){let y=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){let H=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",j)};H.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=H}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let H=b.texture.mipmaps;H&&H.length>0?we(y.__webglFramebuffer[0],b):we(y.__webglFramebuffer,b)}else if(B){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=n.createRenderbuffer(),Ie(y.__webglDepthbuffer[H],b,!1);else{let j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}else{let H=b.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ie(y.__webglDepthbuffer,b,!1);else{let j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(b,y,B){let H=i.get(b);y!==void 0&&Se(H.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ye(b)}function w(b){let y=b.texture,B=i.get(b),H=i.get(y);b.addEventListener("dispose",P);let j=b.textures,X=b.isWebGLCubeRenderTarget===!0,Re=j.length>1;if(Re||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=y.version,a.memory.textures++),X){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let Ee=0;Ee<y.mipmaps.length;Ee++)B.__webglFramebuffer[ce][Ee]=n.createFramebuffer()}else B.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)B.__webglFramebuffer[ce]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Re)for(let ce=0,Ee=j.length;ce<Ee;ce++){let Ae=i.get(j[ce]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&re(b)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<j.length;ce++){let Ee=j[ce];B.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);let Ae=s.convert(Ee.format,Ee.colorSpace),se=s.convert(Ee.type),_e=T(Ee.internalFormat,Ae,se,Ee.colorSpace,b.isXRRenderTarget===!0),Be=he(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,_e,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),He(n.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)Se(B.__webglFramebuffer[ce][Ee],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee);else Se(B.__webglFramebuffer[ce],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ce=0,Ee=j.length;ce<Ee;ce++){let Ae=j[ce],se=i.get(Ae),_e=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(_e=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,se.__webglTexture),He(_e,Ae),Se(B.__webglFramebuffer,b,Ae,n.COLOR_ATTACHMENT0+ce,_e,0),m(Ae)&&p(_e)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,H.__webglTexture),He(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)Se(B.__webglFramebuffer[Ee],b,y,n.COLOR_ATTACHMENT0,ce,Ee);else Se(B.__webglFramebuffer,b,y,n.COLOR_ATTACHMENT0,ce,0);m(y)&&p(ce),t.unbindTexture()}b.depthBuffer&&Ye(b)}function ee(b){let y=b.textures;for(let B=0,H=y.length;B<H;B++){let j=y[B];if(m(j)){let X=A(b),Re=i.get(j).__webglTexture;t.bindTexture(X,Re),p(X),t.unbindTexture()}}}let $=[],J=[];function Z(b){if(b.samples>0){if(re(b)===!1){let y=b.textures,B=b.width,H=b.height,j=n.COLOR_BUFFER_BIT,X=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(b),ce=y.length>1;if(ce)for(let Ae=0;Ae<y.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Ee=b.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ae=0;Ae<y.length;Ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);let se=i.get(y[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,B,H,0,0,B,H,j,n.NEAREST),l===!0&&($.length=0,J.length=0,$.push(n.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&b.resolveDepthBuffer===!1&&($.push(X),J.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,J)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Ae=0;Ae<y.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);let se=i.get(y[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function he(b){return Math.min(r.maxSamples,b.samples)}function re(b){let y=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ue(b){let y=a.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function Oe(b,y){let B=b.colorSpace,H=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Ci&&B!==Wn&&(Ke.getTransfer(B)===nt?(H!==an||j!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function Fe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=st,this.setupRenderTarget=w,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=re}function x_(n,e){function t(i,r=Wn){let s,a=Ke.getTransfer(r);if(i===En)return n.UNSIGNED_BYTE;if(i===Qa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===eo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xl)return n.BYTE;if(i===ql)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===ja)return n.INT;if(i===ci)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===wr)return n.HALF_FLOAT;if(i===Jl)return n.ALPHA;if(i===$l)return n.RGB;if(i===an)return n.RGBA;if(i===ur)return n.DEPTH_COMPONENT;if(i===Ar)return n.DEPTH_STENCIL;if(i===Kl)return n.RED;if(i===to)return n.RED_INTEGER;if(i===jl)return n.RG;if(i===no)return n.RG_INTEGER;if(i===io)return n.RGBA_INTEGER;if(i===bs||i===Ts||i===ws||i===Es)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ts)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ro||i===so||i===ao||i===oo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ro)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===so)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ao)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lo||i===co||i===ho)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lo||i===co)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ho)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uo||i===fo||i===po||i===mo||i===go||i===yo||i===_o||i===xo||i===vo||i===So||i===Mo||i===bo||i===To||i===wo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===po)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===go)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_o)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===So)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===To)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eo||i===Ao||i===Co)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Eo)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ro||i===Po||i===Io||i===Lo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ro)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Po)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
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

}`,vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new os(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new At({vertexShader:v_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new sn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sc=class extends kn{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new vc,p={},A=t.getContextAttributes(),T=null,S=null,R=[],E=[],P=new ge,U=null,M=new Ht;M.viewport=new yt;let v=new Ht;v.viewport=new yt;let C=[M,v],z=new ka,k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=R[Y];return te===void 0&&(te=new _r,R[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=R[Y];return te===void 0&&(te=new _r,R[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=R[Y];return te===void 0&&(te=new _r,R[Y]=te),te.getHandSpace()};function q(Y){let te=E.indexOf(Y.inputSource);if(te===-1)return;let Se=R[te];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,c||a),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<R.length;Y++){let te=E[Y];te!==null&&(E[Y]=null,R[Y].disconnect(te))}k=null,W=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(T),f=null,d=null,u=null,r=null,S=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",G),r.addEventListener("inputsourceschange",ie),A.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ie=null,we=null;A.depth&&(we=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=A.stencil?Ar:ur,Ie=A.stencil?Er:ci);let Ye={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Mn(d.textureWidth,d.textureHeight,{format:an,type:En,depthTexture:new as(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Mn(f.framebufferWidth,f.framebufferHeight,{format:an,type:En,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Y){for(let te=0;te<Y.removed.length;te++){let Se=Y.removed[te],Ie=E.indexOf(Se);Ie>=0&&(E[Ie]=null,R[Ie].disconnect(Se))}for(let te=0;te<Y.added.length;te++){let Se=Y.added[te],Ie=E.indexOf(Se);if(Ie===-1){for(let Ye=0;Ye<R.length;Ye++)if(Ye>=E.length){E.push(Se),Ie=Ye;break}else if(E[Ye]===null){E[Ye]=Se,Ie=Ye;break}if(Ie===-1)break}let we=R[Ie];we&&we.connect(Se)}}let V=new L,de=new L;function xe(Y,te,Se){V.setFromMatrixPosition(te.matrixWorld),de.setFromMatrixPosition(Se.matrixWorld);let Ie=V.distanceTo(de),we=te.projectionMatrix.elements,Ye=Se.projectionMatrix.elements,st=we[14]/(we[10]-1),w=we[14]/(we[10]+1),ee=(we[9]+1)/we[5],$=(we[9]-1)/we[5],J=(we[8]-1)/we[0],Z=(Ye[8]+1)/Ye[0],he=st*J,re=st*Z,ue=Ie/(-J+Z),Oe=ue*-J;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Oe),Y.translateZ(ue),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),we[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Fe=st+ue,b=w+ue,y=he-Oe,B=re+(Ie-Oe),H=ee*w/b*Fe,j=$*w/b*Fe;Y.projectionMatrix.makePerspective(y,B,H,j,Fe,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Me(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let te=Y.near,Se=Y.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),z.near=v.near=M.near=te,z.far=v.far=M.far=Se,(k!==z.near||W!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),k=z.near,W=z.far),z.layers.mask=Y.layers.mask|6,M.layers.mask=z.layers.mask&3,v.layers.mask=z.layers.mask&5;let Ie=Y.parent,we=z.cameras;Me(z,Ie);for(let Ye=0;Ye<we.length;Ye++)Me(we[Ye],Ie);we.length===2?xe(z,M,v):z.projectionMatrix.copy(M.projectionMatrix),He(Y,z,Ie)};function He(Y,te,Se){Se===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=dr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Y){return p[Y]};let Je=null;function tt(Y,te){if(h=te.getViewerPose(c||a),g=te,h!==null){let Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ie=!1;Se.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let w=0;w<Se.length;w++){let ee=Se[w],$=null;if(f!==null)$=f.getViewport(ee);else{let Z=u.getViewSubImage(d,ee);$=Z.viewport,w===0&&(e.setRenderTargetTextures(S,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(S))}let J=C[w];J===void 0&&(J=new Ht,J.layers.enable(w),J.viewport=new yt,C[w]=J),J.matrix.fromArray(ee.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ee.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set($.x,$.y,$.width,$.height),w===0&&(z.matrix.copy(J.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(J)}let we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let w=u.getDepthInformation(Se[0]);w&&w.isValid&&w.texture&&m.init(w,r.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let w=0;w<Se.length;w++){let ee=Se[w].camera;if(ee){let $=p[ee];$||($=new os,p[ee]=$);let J=u.getCameraImage(ee);$.sourceTexture=J}}}}for(let Se=0;Se<R.length;Se++){let Ie=E[Se],we=R[Se];Ie!==null&&we!==void 0&&we.update(Ie,te,c||a)}Je&&Je(Y,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let $e=new ed;$e.setAnimationLoop(tt),this.setAnimationLoop=function(Y){Je=Y},this.dispose=function(){}}},Fi=new bn,M_=new dt;function b_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ic(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,T,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A=e.get(p),T=A.envMap,S=A.envMapRotation;T&&(m.envMap.value=T,Fi.copy(S),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(M_.makeRotationFromEuler(Fi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function T_(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){let S=T.program;i.uniformBlockBinding(A,S)}function c(A,T){let S=r[A.id];S===void 0&&(g(A),S=h(A),r[A.id]=S,A.addEventListener("dispose",m));let R=T.program;i.updateUBOMapping(A,R);let E=e.render.frame;s[A.id]!==E&&(d(A),s[A.id]=E)}function h(A){let T=u();A.__bindingPointIndex=T;let S=n.createBuffer(),R=A.__size,E=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let T=r[A.id],S=A.uniforms,R=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let E=0,P=S.length;E<P;E++){let U=Array.isArray(S[E])?S[E]:[S[E]];for(let M=0,v=U.length;M<v;M++){let C=U[M];if(f(C,E,M,R)===!0){let z=C.__offset,k=Array.isArray(C.value)?C.value:[C.value],W=0;for(let q=0;q<k.length;q++){let G=k[q],ie=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,z+W,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,W),W+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(A,T,S,R){let E=A.value,P=T+"_"+S;if(R[P]===void 0)return typeof E=="number"||typeof E=="boolean"?R[P]=E:R[P]=E.clone(),!0;{let U=R[P];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return R[P]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function g(A){let T=A.uniforms,S=0,R=16;for(let P=0,U=T.length;P<U;P++){let M=Array.isArray(T[P])?T[P]:[T[P]];for(let v=0,C=M.length;v<C;v++){let z=M[v],k=Array.isArray(z.value)?z.value:[z.value];for(let W=0,q=k.length;W<q;W++){let G=k[W],ie=_(G),V=S%R,de=V%ie.boundary,xe=V+de;S+=de,xe!==0&&R-xe<ie.storage&&(S+=R-xe),z.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=ie.storage}}}let E=S%R;return E>0&&(S+=R-E),A.__size=S,A.__cache={},this}function _(A){let T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){let T=A.target;T.removeEventListener("dispose",m);let S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(let A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}var Rs=class{constructor(e={}){let{canvas:t=Mu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1;this._outputColorSpace=wt;let E=0,P=0,U=null,M=-1,v=null,C=new yt,z=new yt,k=null,W=new qe(0),q=0,G=t.width,ie=t.height,V=1,de=null,xe=null,Me=new yt(0,0,G,ie),He=new yt(0,0,G,ie),Je=!1,tt=new ss,$e=!1,Y=!1,te=new dt,Se=new L,Ie=new yt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function st(){return U===null?V:1}let w=i;function ee(x,D){return t.getContext(x,D)}try{let x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",ae,!1),w===null){let D="webgl2";if(w=ee(D,x),w===null)throw ee(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let $,J,Z,he,re,ue,Oe,Fe,b,y,B,H,j,X,Re,ce,Ee,Ae,se,_e,Be,Pe,me,Ge;function I(){$=new V0(w),$.init(),Pe=new x_(w,$),J=new N0(w,$,e,Pe),Z=new y_(w,$),J.reversedDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),he=new X0(w),re=new r_,ue=new __(w,$,Z,re,J,Pe,he),Oe=new z0(S),Fe=new H0(S),b=new Kp(w),me=new D0(w,b),y=new G0(w,b,he,me),B=new Y0(w,y,b,he),se=new q0(w,J,ue),ce=new B0(re),H=new i_(S,Oe,Fe,$,J,me,ce),j=new b_(S,re),X=new a_,Re=new d_($),Ae=new L0(S,Oe,Fe,Z,B,f,l),Ee=new m_(S,B,J),Ge=new T_(w,he,J,Z),_e=new U0(w,$,he),Be=new W0(w,$,he),he.programs=H.programs,S.capabilities=J,S.extensions=$,S.properties=re,S.renderLists=X,S.shadowMap=Ee,S.state=Z,S.info=he}I();let le=new Sc(S,w);this.xr=le,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let x=$.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=$.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(G,ie,!1))},this.getSize=function(x){return x.set(G,ie)},this.setSize=function(x,D,F=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,ie=D,t.width=Math.floor(x*V),t.height=Math.floor(D*V),F===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(G*V,ie*V).floor()},this.setDrawingBufferSize=function(x,D,F){G=x,ie=D,V=F,t.width=Math.floor(x*F),t.height=Math.floor(D*F),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(Me)},this.setViewport=function(x,D,F,O){x.isVector4?Me.set(x.x,x.y,x.z,x.w):Me.set(x,D,F,O),Z.viewport(C.copy(Me).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(He)},this.setScissor=function(x,D,F,O){x.isVector4?He.set(x.x,x.y,x.z,x.w):He.set(x,D,F,O),Z.scissor(z.copy(He).multiplyScalar(V).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(x){Z.setScissorTest(Je=x)},this.setOpaqueSort=function(x){de=x},this.setTransparentSort=function(x){xe=x},this.getClearColor=function(x){return x.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,F=!0){let O=0;if(x){let N=!1;if(U!==null){let oe=U.texture.format;N=oe===io||oe===no||oe===to}if(N){let oe=U.texture.type,ye=oe===En||oe===ci||oe===Tr||oe===Er||oe===Qa||oe===eo,Te=Ae.getClearColor(),ve=Ae.getClearAlpha(),Ue=Te.r,ze=Te.g,Le=Te.b;ye?(g[0]=Ue,g[1]=ze,g[2]=Le,g[3]=ve,w.clearBufferuiv(w.COLOR,0,g)):(_[0]=Ue,_[1]=ze,_[2]=Le,_[3]=ve,w.clearBufferiv(w.COLOR,0,_))}else O|=w.COLOR_BUFFER_BIT}D&&(O|=w.DEPTH_BUFFER_BIT),F&&(O|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ae.dispose(),X.dispose(),Re.dispose(),re.dispose(),Oe.dispose(),Fe.dispose(),B.dispose(),me.dispose(),Ge.dispose(),H.dispose(),le.dispose(),le.removeEventListener("sessionstart",Sn),le.removeEventListener("sessionend",sh),_i.stop()};function fe(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let x=he.autoReset,D=Ee.enabled,F=Ee.autoUpdate,O=Ee.needsUpdate,N=Ee.type;I(),he.autoReset=x,Ee.enabled=D,Ee.autoUpdate=F,Ee.needsUpdate=O,Ee.type=N}function ae(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function K(x){let D=x.target;D.removeEventListener("dispose",K),Ce(D)}function Ce(x){ke(x),re.remove(x)}function ke(x){let D=re.get(x).programs;D!==void 0&&(D.forEach(function(F){H.releaseProgram(F)}),x.isShaderMaterial&&H.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,F,O,N,oe){D===null&&(D=we);let ye=N.isMesh&&N.matrixWorld.determinant()<0,Te=_f(x,D,F,O,N);Z.setMaterial(O,ye);let ve=F.index,Ue=1;if(O.wireframe===!0){if(ve=y.getWireframeAttribute(F),ve===void 0)return;Ue=2}let ze=F.drawRange,Le=F.attributes.position,Ze=ze.start*Ue,it=(ze.start+ze.count)*Ue;oe!==null&&(Ze=Math.max(Ze,oe.start*Ue),it=Math.min(it,(oe.start+oe.count)*Ue)),ve!==null?(Ze=Math.max(Ze,0),it=Math.min(it,ve.count)):Le!=null&&(Ze=Math.max(Ze,0),it=Math.min(it,Le.count));let gt=it-Ze;if(gt<0||gt===1/0)return;me.setup(N,O,Te,F,ve);let ot,rt=_e;if(ve!==null&&(ot=b.get(ve),rt=Be,rt.setIndex(ot)),N.isMesh)O.wireframe===!0?(Z.setLineWidth(O.wireframeLinewidth*st()),rt.setMode(w.LINES)):rt.setMode(w.TRIANGLES);else if(N.isLine){let De=O.linewidth;De===void 0&&(De=1),Z.setLineWidth(De*st()),N.isLineSegments?rt.setMode(w.LINES):N.isLineLoop?rt.setMode(w.LINE_LOOP):rt.setMode(w.LINE_STRIP)}else N.isPoints?rt.setMode(w.POINTS):N.isSprite&&rt.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($.get("WEBGL_multi_draw"))rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let De=N._multiDrawStarts,ct=N._multiDrawCounts,je=N._multiDrawCount,Wt=ve?b.get(ve).bytesPerElement:1,$i=re.get(O).currentProgram.getUniforms();for(let Xt=0;Xt<je;Xt++)$i.setValue(w,"_gl_DrawID",Xt),rt.render(De[Xt]/Wt,ct[Xt])}else if(N.isInstancedMesh)rt.renderInstances(Ze,gt,N.count);else if(F.isInstancedBufferGeometry){let De=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ct=Math.min(F.instanceCount,De);rt.renderInstances(Ze,gt,ct)}else rt.render(Ze,gt)};function at(x,D,F){x.transparent===!0&&x.side===wn&&x.forceSinglePass===!1?(x.side=zt,x.needsUpdate=!0,Vs(x,D,F),x.side=On,x.needsUpdate=!0,Vs(x,D,F),x.side=wn):Vs(x,D,F)}this.compile=function(x,D,F=null){F===null&&(F=x),p=Re.get(F),p.init(D),T.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==F&&x.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let O=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let oe=N.material;if(oe)if(Array.isArray(oe))for(let ye=0;ye<oe.length;ye++){let Te=oe[ye];at(Te,F,N),O.add(Te)}else at(oe,F,N),O.add(oe)}),p=T.pop(),O},this.compileAsync=function(x,D,F=null){let O=this.compile(x,D,F);return new Promise(N=>{function oe(){if(O.forEach(function(ye){re.get(ye).currentProgram.isReady()&&O.delete(ye)}),O.size===0){N(x);return}setTimeout(oe,10)}$.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let et=null;function Ln(x){et&&et(x)}function Sn(){_i.stop()}function sh(){_i.start()}let _i=new ed;_i.setAnimationLoop(Ln),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(x){et=x,le.setAnimationLoop(x),x===null?_i.stop():_i.start()},le.addEventListener("sessionstart",Sn),le.addEventListener("sessionend",sh),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(D),D=le.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,D,U),p=Re.get(x,T.length),p.init(D),T.push(p),te.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),tt.setFromProjectionMatrix(te,fn,D.reversedDepth),Y=this.localClippingEnabled,$e=ce.init(this.clippingPlanes,Y),m=X.get(x,A.length),m.init(),A.push(m),le.enabled===!0&&le.isPresenting===!0){let oe=S.xr.getDepthSensingMesh();oe!==null&&tl(oe,D,-1/0,S.sortObjects)}tl(x,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(de,xe),Ye=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ye&&Ae.addToRenderList(m,x),this.info.render.frame++,$e===!0&&ce.beginShadows();let F=p.state.shadowsArray;Ee.render(F,x,D),$e===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){let oe=D.cameras;if(N.length>0)for(let ye=0,Te=oe.length;ye<Te;ye++){let ve=oe[ye];oh(O,N,x,ve)}Ye&&Ae.render(x);for(let ye=0,Te=oe.length;ye<Te;ye++){let ve=oe[ye];ah(m,x,ve,ve.viewport)}}else N.length>0&&oh(O,N,x,D),Ye&&Ae.render(x),ah(m,x,D);U!==null&&P===0&&(ue.updateMultisampleRenderTarget(U),ue.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(S,x,D),me.resetDefaultState(),M=-1,v=null,T.pop(),T.length>0?(p=T[T.length-1],$e===!0&&ce.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function tl(x,D,F,O){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||tt.intersectsSprite(x)){O&&Ie.setFromMatrixPosition(x.matrixWorld).applyMatrix4(te);let ye=B.update(x),Te=x.material;Te.visible&&m.push(x,ye,Te,F,Ie.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||tt.intersectsObject(x))){let ye=B.update(x),Te=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ie.copy(x.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ie.copy(ye.boundingSphere.center)),Ie.applyMatrix4(x.matrixWorld).applyMatrix4(te)),Array.isArray(Te)){let ve=ye.groups;for(let Ue=0,ze=ve.length;Ue<ze;Ue++){let Le=ve[Ue],Ze=Te[Le.materialIndex];Ze&&Ze.visible&&m.push(x,ye,Ze,F,Ie.z,Le)}}else Te.visible&&m.push(x,ye,Te,F,Ie.z,null)}}let oe=x.children;for(let ye=0,Te=oe.length;ye<Te;ye++)tl(oe[ye],D,F,O)}function ah(x,D,F,O){let N=x.opaque,oe=x.transmissive,ye=x.transparent;p.setupLightsView(F),$e===!0&&ce.setGlobalState(S.clippingPlanes,F),O&&Z.viewport(C.copy(O)),N.length>0&&Hs(N,D,F),oe.length>0&&Hs(oe,D,F),ye.length>0&&Hs(ye,D,F),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function oh(x,D,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[O.id]===void 0&&(p.state.transmissionRenderTarget[O.id]=new Mn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?wr:En,minFilter:li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let oe=p.state.transmissionRenderTarget[O.id],ye=O.viewport||C;oe.setSize(ye.z*S.transmissionResolutionScale,ye.w*S.transmissionResolutionScale);let Te=S.getRenderTarget(),ve=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(oe),S.getClearColor(W),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),Ye&&Ae.render(F);let ze=S.toneMapping;S.toneMapping=Gn;let Le=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),p.setupLightsView(O),$e===!0&&ce.setGlobalState(S.clippingPlanes,O),Hs(x,F,O),ue.updateMultisampleRenderTarget(oe),ue.updateRenderTargetMipmap(oe),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let it=0,gt=D.length;it<gt;it++){let ot=D[it],rt=ot.object,De=ot.geometry,ct=ot.material,je=ot.group;if(ct.side===wn&&rt.layers.test(O.layers)){let Wt=ct.side;ct.side=zt,ct.needsUpdate=!0,lh(rt,F,O,De,ct,je),ct.side=Wt,ct.needsUpdate=!0,Ze=!0}}Ze===!0&&(ue.updateMultisampleRenderTarget(oe),ue.updateRenderTargetMipmap(oe))}S.setRenderTarget(Te,ve,Ue),S.setClearColor(W,q),Le!==void 0&&(O.viewport=Le),S.toneMapping=ze}function Hs(x,D,F){let O=D.isScene===!0?D.overrideMaterial:null;for(let N=0,oe=x.length;N<oe;N++){let ye=x[N],Te=ye.object,ve=ye.geometry,Ue=ye.group,ze=ye.material;ze.allowOverride===!0&&O!==null&&(ze=O),Te.layers.test(F.layers)&&lh(Te,D,F,ve,ze,Ue)}}function lh(x,D,F,O,N,oe){x.onBeforeRender(S,D,F,O,N,oe),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,D,F,O,x,oe),N.transparent===!0&&N.side===wn&&N.forceSinglePass===!1?(N.side=zt,N.needsUpdate=!0,S.renderBufferDirect(F,D,O,N,x,oe),N.side=On,N.needsUpdate=!0,S.renderBufferDirect(F,D,O,N,x,oe),N.side=wn):S.renderBufferDirect(F,D,O,N,x,oe),x.onAfterRender(S,D,F,O,N,oe)}function Vs(x,D,F){D.isScene!==!0&&(D=we);let O=re.get(x),N=p.state.lights,oe=p.state.shadowsArray,ye=N.state.version,Te=H.getParameters(x,N.state,oe,D,F),ve=H.getProgramCacheKey(Te),Ue=O.programs;O.environment=x.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(x.isMeshStandardMaterial?Fe:Oe).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Ue===void 0&&(x.addEventListener("dispose",K),Ue=new Map,O.programs=Ue);let ze=Ue.get(ve);if(ze!==void 0){if(O.currentProgram===ze&&O.lightsStateVersion===ye)return hh(x,Te),ze}else Te.uniforms=H.getUniforms(x),x.onBeforeCompile(Te,S),ze=H.acquireProgram(Te,ve),Ue.set(ve,ze),O.uniforms=Te.uniforms;let Le=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Le.clippingPlanes=ce.uniform),hh(x,Te),O.needsLights=vf(x),O.lightsStateVersion=ye,O.needsLights&&(Le.ambientLightColor.value=N.state.ambient,Le.lightProbe.value=N.state.probe,Le.directionalLights.value=N.state.directional,Le.directionalLightShadows.value=N.state.directionalShadow,Le.spotLights.value=N.state.spot,Le.spotLightShadows.value=N.state.spotShadow,Le.rectAreaLights.value=N.state.rectArea,Le.ltc_1.value=N.state.rectAreaLTC1,Le.ltc_2.value=N.state.rectAreaLTC2,Le.pointLights.value=N.state.point,Le.pointLightShadows.value=N.state.pointShadow,Le.hemisphereLights.value=N.state.hemi,Le.directionalShadowMap.value=N.state.directionalShadowMap,Le.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Le.spotShadowMap.value=N.state.spotShadowMap,Le.spotLightMatrix.value=N.state.spotLightMatrix,Le.spotLightMap.value=N.state.spotLightMap,Le.pointShadowMap.value=N.state.pointShadowMap,Le.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=ze,O.uniformsList=null,ze}function ch(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=Pr.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function hh(x,D){let F=re.get(x);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function _f(x,D,F,O,N){D.isScene!==!0&&(D=we),ue.resetTextureUnits();let oe=D.fog,ye=O.isMeshStandardMaterial?D.environment:null,Te=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ci,ve=(O.isMeshStandardMaterial?Fe:Oe).get(O.envMap||ye),Ue=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,ze=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Le=!!F.morphAttributes.position,Ze=!!F.morphAttributes.normal,it=!!F.morphAttributes.color,gt=Gn;O.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(gt=S.toneMapping);let ot=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,rt=ot!==void 0?ot.length:0,De=re.get(O),ct=p.state.lights;if($e===!0&&(Y===!0||x!==v)){let Nt=x===v&&O.id===M;ce.setState(O,x,Nt)}let je=!1;O.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ct.state.version||De.outputColorSpace!==Te||N.isBatchedMesh&&De.batching===!1||!N.isBatchedMesh&&De.batching===!0||N.isBatchedMesh&&De.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&De.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&De.instancing===!1||!N.isInstancedMesh&&De.instancing===!0||N.isSkinnedMesh&&De.skinning===!1||!N.isSkinnedMesh&&De.skinning===!0||N.isInstancedMesh&&De.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&De.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&De.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&De.instancingMorph===!1&&N.morphTexture!==null||De.envMap!==ve||O.fog===!0&&De.fog!==oe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ce.numPlanes||De.numIntersection!==ce.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==ze||De.morphTargets!==Le||De.morphNormals!==Ze||De.morphColors!==it||De.toneMapping!==gt||De.morphTargetsCount!==rt)&&(je=!0):(je=!0,De.__version=O.version);let Wt=De.currentProgram;je===!0&&(Wt=Vs(O,D,N));let $i=!1,Xt=!1,kr=!1,ht=Wt.getUniforms(),jt=De.uniforms;if(Z.useProgram(Wt.program)&&($i=!0,Xt=!0,kr=!0),O.id!==M&&(M=O.id,Xt=!0),$i||v!==x){Z.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ht.setValue(w,"projectionMatrix",x.projectionMatrix),ht.setValue(w,"viewMatrix",x.matrixWorldInverse);let kt=ht.map.cameraPosition;kt!==void 0&&kt.setValue(w,Se.setFromMatrixPosition(x.matrixWorld)),J.logarithmicDepthBuffer&&ht.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ht.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),v!==x&&(v=x,Xt=!0,kr=!0)}if(N.isSkinnedMesh){ht.setOptional(w,N,"bindMatrix"),ht.setOptional(w,N,"bindMatrixInverse");let Nt=N.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),ht.setValue(w,"boneTexture",Nt.boneTexture,ue))}N.isBatchedMesh&&(ht.setOptional(w,N,"batchingTexture"),ht.setValue(w,"batchingTexture",N._matricesTexture,ue),ht.setOptional(w,N,"batchingIdTexture"),ht.setValue(w,"batchingIdTexture",N._indirectTexture,ue),ht.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&ht.setValue(w,"batchingColorTexture",N._colorsTexture,ue));let Qt=F.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&se.update(N,F,Wt),(Xt||De.receiveShadow!==N.receiveShadow)&&(De.receiveShadow=N.receiveShadow,ht.setValue(w,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(jt.envMap.value=ve,jt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(jt.envMapIntensity.value=D.environmentIntensity),Xt&&(ht.setValue(w,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&xf(jt,kr),oe&&O.fog===!0&&j.refreshFogUniforms(jt,oe),j.refreshMaterialUniforms(jt,O,V,ie,p.state.transmissionRenderTarget[x.id]),Pr.upload(w,ch(De),jt,ue)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Pr.upload(w,ch(De),jt,ue),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ht.setValue(w,"center",N.center),ht.setValue(w,"modelViewMatrix",N.modelViewMatrix),ht.setValue(w,"normalMatrix",N.normalMatrix),ht.setValue(w,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Nt=O.uniformsGroups;for(let kt=0,nl=Nt.length;kt<nl;kt++){let xi=Nt[kt];Ge.update(xi,Wt),Ge.bind(xi,Wt)}}return Wt}function xf(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function vf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,D,F){let O=re.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),re.get(x.texture).__webglTexture=D,re.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:F,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){let F=re.get(x);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0};let Sf=w.createFramebuffer();this.setRenderTarget=function(x,D=0,F=0){U=x,E=D,P=F;let O=!0,N=null,oe=!1,ye=!1;if(x){let ve=re.get(x);if(ve.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(w.FRAMEBUFFER,null),O=!1;else if(ve.__webglFramebuffer===void 0)ue.setupRenderTarget(x);else if(ve.__hasExternalTextures)ue.rebindTextures(x,re.get(x.texture).__webglTexture,re.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Le=x.depthTexture;if(ve.__boundDepthTexture!==Le){if(Le!==null&&re.has(Le)&&(x.width!==Le.image.width||x.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(x)}}let Ue=x.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ye=!0);let ze=re.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ze[D])?N=ze[D][F]:N=ze[D],oe=!0):x.samples>0&&ue.useMultisampledRTT(x)===!1?N=re.get(x).__webglMultisampledFramebuffer:Array.isArray(ze)?N=ze[F]:N=ze,C.copy(x.viewport),z.copy(x.scissor),k=x.scissorTest}else C.copy(Me).multiplyScalar(V).floor(),z.copy(He).multiplyScalar(V).floor(),k=Je;if(F!==0&&(N=Sf),Z.bindFramebuffer(w.FRAMEBUFFER,N)&&O&&Z.drawBuffers(x,N),Z.viewport(C),Z.scissor(z),Z.setScissorTest(k),oe){let ve=re.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+D,ve.__webglTexture,F)}else if(ye){let ve=D;for(let Ue=0;Ue<x.textures.length;Ue++){let ze=re.get(x.textures[Ue]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ue,ze.__webglTexture,F,ve)}}else if(x!==null&&F!==0){let ve=re.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ve.__webglTexture,F)}M=-1},this.readRenderTargetPixels=function(x,D,F,O,N,oe,ye,Te=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(ve=ve[ye]),ve){Z.bindFramebuffer(w.FRAMEBUFFER,ve);try{let Ue=x.textures[Te],ze=Ue.format,Le=Ue.type;if(!J.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-O&&F>=0&&F<=x.height-N&&(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Te),w.readPixels(D,F,O,N,Pe.convert(ze),Pe.convert(Le),oe))}finally{let Ue=U!==null?re.get(U).__webglFramebuffer:null;Z.bindFramebuffer(w.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(x,D,F,O,N,oe,ye,Te=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(ve=ve[ye]),ve)if(D>=0&&D<=x.width-O&&F>=0&&F<=x.height-N){Z.bindFramebuffer(w.FRAMEBUFFER,ve);let Ue=x.textures[Te],ze=Ue.format,Le=Ue.type;if(!J.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ze),w.bufferData(w.PIXEL_PACK_BUFFER,oe.byteLength,w.STREAM_READ),x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Te),w.readPixels(D,F,O,N,Pe.convert(ze),Pe.convert(Le),0);let it=U!==null?re.get(U).__webglFramebuffer:null;Z.bindFramebuffer(w.FRAMEBUFFER,it);let gt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await bu(w,gt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ze),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,oe),w.deleteBuffer(Ze),w.deleteSync(gt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,F=0){let O=Math.pow(2,-F),N=Math.floor(x.image.width*O),oe=Math.floor(x.image.height*O),ye=D!==null?D.x:0,Te=D!==null?D.y:0;ue.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,F,0,0,ye,Te,N,oe),Z.unbindTexture()};let Mf=w.createFramebuffer(),bf=w.createFramebuffer();this.copyTextureToTexture=function(x,D,F=null,O=null,N=0,oe=null){oe===null&&(N!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=N,N=0):oe=0);let ye,Te,ve,Ue,ze,Le,Ze,it,gt,ot=x.isCompressedTexture?x.mipmaps[oe]:x.image;if(F!==null)ye=F.max.x-F.min.x,Te=F.max.y-F.min.y,ve=F.isBox3?F.max.z-F.min.z:1,Ue=F.min.x,ze=F.min.y,Le=F.isBox3?F.min.z:0;else{let Qt=Math.pow(2,-N);ye=Math.floor(ot.width*Qt),Te=Math.floor(ot.height*Qt),x.isDataArrayTexture?ve=ot.depth:x.isData3DTexture?ve=Math.floor(ot.depth*Qt):ve=1,Ue=0,ze=0,Le=0}O!==null?(Ze=O.x,it=O.y,gt=O.z):(Ze=0,it=0,gt=0);let rt=Pe.convert(D.format),De=Pe.convert(D.type),ct;D.isData3DTexture?(ue.setTexture3D(D,0),ct=w.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(ue.setTexture2DArray(D,0),ct=w.TEXTURE_2D_ARRAY):(ue.setTexture2D(D,0),ct=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);let je=w.getParameter(w.UNPACK_ROW_LENGTH),Wt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),$i=w.getParameter(w.UNPACK_SKIP_PIXELS),Xt=w.getParameter(w.UNPACK_SKIP_ROWS),kr=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ot.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ot.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ue),w.pixelStorei(w.UNPACK_SKIP_ROWS,ze),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Le);let ht=x.isDataArrayTexture||x.isData3DTexture,jt=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){let Qt=re.get(x),Nt=re.get(D),kt=re.get(Qt.__renderTarget),nl=re.get(Nt.__renderTarget);Z.bindFramebuffer(w.READ_FRAMEBUFFER,kt.__webglFramebuffer),Z.bindFramebuffer(w.DRAW_FRAMEBUFFER,nl.__webglFramebuffer);for(let xi=0;xi<ve;xi++)ht&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,re.get(x).__webglTexture,N,Le+xi),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,re.get(D).__webglTexture,oe,gt+xi)),w.blitFramebuffer(Ue,ze,ye,Te,Ze,it,ye,Te,w.DEPTH_BUFFER_BIT,w.NEAREST);Z.bindFramebuffer(w.READ_FRAMEBUFFER,null),Z.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||re.has(x)){let Qt=re.get(x),Nt=re.get(D);Z.bindFramebuffer(w.READ_FRAMEBUFFER,Mf),Z.bindFramebuffer(w.DRAW_FRAMEBUFFER,bf);for(let kt=0;kt<ve;kt++)ht?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Qt.__webglTexture,N,Le+kt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Qt.__webglTexture,N),jt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Nt.__webglTexture,oe,gt+kt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Nt.__webglTexture,oe),N!==0?w.blitFramebuffer(Ue,ze,ye,Te,Ze,it,ye,Te,w.COLOR_BUFFER_BIT,w.NEAREST):jt?w.copyTexSubImage3D(ct,oe,Ze,it,gt+kt,Ue,ze,ye,Te):w.copyTexSubImage2D(ct,oe,Ze,it,Ue,ze,ye,Te);Z.bindFramebuffer(w.READ_FRAMEBUFFER,null),Z.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else jt?x.isDataTexture||x.isData3DTexture?w.texSubImage3D(ct,oe,Ze,it,gt,ye,Te,ve,rt,De,ot.data):D.isCompressedArrayTexture?w.compressedTexSubImage3D(ct,oe,Ze,it,gt,ye,Te,ve,rt,ot.data):w.texSubImage3D(ct,oe,Ze,it,gt,ye,Te,ve,rt,De,ot):x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,oe,Ze,it,ye,Te,rt,De,ot.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,oe,Ze,it,ot.width,ot.height,rt,ot.data):w.texSubImage2D(w.TEXTURE_2D,oe,Ze,it,ye,Te,rt,De,ot);w.pixelStorei(w.UNPACK_ROW_LENGTH,je),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Wt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,$i),w.pixelStorei(w.UNPACK_SKIP_ROWS,Xt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,kr),oe===0&&D.generateMipmaps&&w.generateMipmap(ct),Z.unbindTexture()},this.initRenderTarget=function(x){re.get(x).__webglFramebuffer===void 0&&ue.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?ue.setTextureCube(x,0):x.isData3DTexture?ue.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?ue.setTexture2DArray(x,0):ue.setTexture2D(x,0),Z.unbindTexture()},this.resetState=function(){E=0,P=0,U=null,Z.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};function od(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new rn,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=ad(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);let g=ad(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ad(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new Et(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,l);l+=h.count*t}return r!==void 0&&(o.gpuType=r),o}var Fo="varying vec3 vNormal;varying vec3 vView;varying vec3 vWorld;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vNormal=normalize(normalMatrix*normal);vView=-mv.xyz;vWorld=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*mv;}",Oo=`uniform vec3 uColor;uniform float uGloss;varying vec3 vNormal;varying vec3 vView;varying vec3 vWorld;float grain(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,42.319)))*43758.5453);}void main(){vec3 n=normalize(vNormal),v=normalize(vView),l=normalize(vec3(-.6,.85,1.2));float diffuse=max(dot(n,l),0.);float sheen=pow(max(dot(n,normalize(l+v)),0.),mix(16.,90.,uGloss));float rim=pow(1.-max(dot(n,v),0.),2.5);vec3 col=uColor*(.54+.55*diffuse)+vec3(1.,.95,.88)*sheen*.24+rim*.055;col+=(grain(vWorld*370.)-.5)*.017;gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,bc="varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;void main(){vUv=uv;vNormal=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vView=-mv.xyz;gl_Position=projectionMatrix*mv;}",ld=`uniform sampler2D uMap;uniform float uTime;uniform float uReduced;varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;void main(){vec4 ink=texture2D(uMap,vUv);float angle=dot(normalize(vNormal),normalize(vView));float strip=pow(max(0.,1.-abs(vUv.x*.8+vUv.y*.35-(1.-angle)*1.2-.53)),26.);vec3 spectrum=.5+.5*cos(vec3(0.,2.,4.)+(vUv.x+vUv.y)*6.+(1.-angle)*15.);vec3 col=ink.rgb+strip*spectrum*.14;col+=pow(1.-angle,3.)*.12;gl_FragColor=vec4(col,ink.a);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,cd=`uniform sampler2D uMap;uniform float uTime;uniform float uBoot;uniform float uReduced;varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;void main(){vec2 uv=vUv;vec3 col=texture2D(uMap,uv).rgb;float scan=.955+.045*cos(uv.y*448.*3.14159);float vignette=1.-.17*length((uv-.5)*1.25);col*=scan*vignette;float glare=pow(max(0.,1.-abs(uv.x*.5+uv.y*.35-.64)),15.);col+=vec3(.08,.09,.06)*glare;col+=vec3(.025,.04,.018)*uBoot;gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,hd="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",ud="uniform float uProgress;uniform float uAspect;uniform vec3 uTone;uniform vec3 uPaper;uniform float uReduced;varying vec2 vUv;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){float p=clamp(uProgress,0.,1.);vec2 uv=(vUv-.5)*vec2(uAspect,1.);vec2 cell=floor(uv*180.);vec2 px=cell/180.;float r=length(px),a=atan(px.y,px.x);float ring=exp(-abs(r-(.04+p*.92))*48.);float trails=pow(max(0.,cos(a*16.+r*24.-p*5.)),28.)*exp(-r*1.6);float stars=step(.995,hash(cell))*smoothstep(0.,.3,p)*(1.-smoothstep(.7,1.,p));float aperture=smoothstep(p*.9-.09,p*.9+.09,r);vec3 color=mix(uPaper*.08,vec3(.055,.025,.10),aperture);color+=uTone*(ring*1.2+trails*.26+stars*.85)*(1.-uReduced);float glow=exp(-r*r*12.)*sin(p*3.14159);color+=vec3(.36,.22,.11)*glow;gl_FragColor=vec4(color,1.);}";var w_=Fo.replace("void main(){","attribute vec3 tint;attribute float gloss;varying vec3 vTint;varying float vGloss;void main(){vTint=tint;vGloss=gloss;"),E_=Oo.replace("uniform vec3 uColor;uniform float uGloss;","varying vec3 vTint;varying float vGloss;").replaceAll("uColor","vTint").replaceAll("uGloss","vGloss");function Tc(n){n.updateMatrixWorld(!0);let e=n.matrixWorld.clone().invert(),t=[];if(n.traverse(a=>{let o=a.material;a.isMesh&&o?.uniforms?.uColor&&o.uniforms.uGloss&&!o.userData.role&&t.push(a)}),t.length<2)return n;let i=t.map(a=>{let o=a.geometry,l=o.index?o.toNonIndexed():o.clone();l.applyMatrix4(new dt().multiplyMatrices(e,a.matrixWorld)),l.clearGroups();let c=l.attributes.position.count,h=new Float32Array(c*3),u=new Float32Array(c),d=a.material.uniforms.uColor.value;for(let f=0;f<c;f++)h[f*3]=d.r,h[f*3+1]=d.g,h[f*3+2]=d.b,u[f]=a.material.uniforms.uGloss.value;return l.setAttribute("tint",new Et(h,3)),l.setAttribute("gloss",new Et(u,1)),l}),r=od(i,!1);if(!r)throw new Error("Incompatible cartridge geometry");let s=new At({vertexShader:w_,fragmentShader:E_});n.add(new ft(r,s));for(let a of t)a.removeFromParent(),a.geometry.dispose(),a.material.dispose();for(let a of i)a.dispose();return n}var Rc={};Gs(Rc,{choose:()=>Cc,dispose:()=>di,id:()=>C_,init:()=>R_,input:()=>I_,point:()=>P_,rect:()=>Ac,render:()=>D_,update:()=>L_});var HM=Object.freeze({title:Object.freeze([92,113]),status:Object.freeze([114,139]),hint:Object.freeze([462,480]),play:Object.freeze([140,460]),feedback:Object.freeze([475,495]),controls:Object.freeze([505,535])});function Hi(n,e,t,{row:i=0,color:r="#fff1cc",size:s=12,plain:a=!1}={}){if(!t)return;let o=a&&["title","status"].includes(e)?e==="title"?43:i?88:68:{title:110,status:i?138:125,hint:474,feedback:490,controls:i?532:514}[e];n.save(),n.textBaseline="alphabetic",n.textAlign="center",n.fillStyle=r,n.font=`${e==="title"||e==="feedback"?"bold ":""}${s}px sans-serif`,n.fillText(t,140,o,264),n.restore()}function dd(n,{title:e,status:t,detail:i,hint:r,elapsed:s=0,feedback:a,controls:o,touch:l,encounter:c,plain:h=!1}){Hi(n,"title",e,{size:h?20:18,plain:h}),Hi(n,"status",t,{size:h?12:11,plain:h});let u=c&&Number.isFinite(c.hp)?`HP ${c.hp}`:"";Hi(n,"status",[i,u].filter(Boolean).join(" \xB7 "),{row:1,size:h?10:9,plain:h}),s<3e3&&Hi(n,"hint",r),Hi(n,"feedback",c?.result||a),Hi(n,"controls",o),Hi(n,"controls",l,{row:1,size:11})}var GM=Object.freeze({ink:"#140c25",glass:"#372247",gold:"#d6b36e",light:"#fff0c6",heart:"#ff5178"}),gn=null;function ko(n,{x:e=0,y:t=0,w:i=280,h:r=560,time:s=0,reduced:a=!1,variant:o="palace",bands:l=!0}={}){!gn&&typeof Image<"u"&&(gn=new Image,gn.src=new URL("./assets/pride-palace.webp",import.meta.url).href),n.save(),n.beginPath(),n.rect(e,t,i,r),n.clip();let c=a?0:s,h=n.createLinearGradient(e,t,e+i,t+r);if(h?.addColorStop(0,"#281339"),h?.addColorStop(.55,"#1e122d"),h?.addColorStop(1,"#100c1c"),n.fillStyle=h||"#1e122d",n.fillRect(e,t,i,r),gn?.naturalWidth){let u=Math.max(i/gn.naturalWidth,r/gn.naturalHeight);n.globalAlpha=.32,n.drawImage(gn,e+(i-gn.naturalWidth*u)/2,t+(r-gn.naturalHeight*u)/2,gn.naturalWidth*u,gn.naturalHeight*u),n.globalAlpha=1}for(let u=0;u<5;u++){let d=e+(u+.5)*i/5,f=t+r*.27,g=t+r*.82,_=i*.062;n.fillStyle=u%2?"#3d285433":"#71577722",n.strokeStyle="#c7a56933",n.lineWidth=1,n.beginPath(),n.moveTo(d-_,f+10),n.lineTo(d,f),n.lineTo(d+_,f+10),n.lineTo(d+_,g),n.lineTo(d-_,g),n.closePath(),n.fill(),n.stroke(),n.strokeStyle="#e2baf422",n.beginPath(),n.moveTo(d-_+3,g-18),n.lineTo(d+_-3,f+30),n.stroke()}n.strokeStyle="#b18b5022",n.lineWidth=1;for(let u=0;u<4;u++){let d=t+r*(.82+u*.06);n.beginPath(),n.moveTo(e,d),n.lineTo(e+i,d),n.stroke()}for(let u=0;u<12;u++){let d=e+(17+u*67)%i,f=t+r*.28+(u*47+c*.006)%(r*.5);n.fillStyle=u%3?"#dfc4ff33":"#d6b36e44",n.fillRect(Math.round(d),Math.round(f),2,2)}if(o.includes("nested")||o.includes("maze")){n.strokeStyle="#9874bb22";for(let u=0;u<3;u++)n.strokeRect(e+i*(.1+u*.06),t+r*(.3+u*.05),i*(.8-u*.12),r*(.5-u*.1))}l&&(n.fillStyle="#140c25ee",n.fillRect(e,t,i,Math.min(140,r)),n.fillRect(e,t+r-100,i,100),n.fillStyle="#d6b36e55",n.fillRect(e+12,t+139,i-24,1),n.fillRect(e+12,t+r-100,i-24,1)),n.restore()}function Ho(n,{x:e,y:t,w:i,h:r},s=0,a=!1){n.save(),n.lineWidth=4,n.strokeStyle="#120b24",n.strokeRect(e+1,t+1,i-2,r-2),n.lineWidth=2,n.strokeStyle=a?"#98ffe0":"#fff2c6",n.strokeRect(e+1,t+1,i-2,r-2),n.strokeStyle=a?"#98ffe0":"#f4c771",n.lineWidth=4;let o=Math.min(11,i/4,r/4);for(let[l,c,h,u]of[[e,t,1,1],[e+i,t,-1,1],[e,t+r,1,-1],[e+i,t+r,-1,-1]])n.beginPath(),n.moveTo(l+h*o,c),n.lineTo(l,c),n.lineTo(l,c+u*o),n.stroke();n.fillStyle=a?"#98ffe0":"#ffffff",n.fillRect(e+i/2-4,t-3,8,3),n.restore()}function bt(n,e,t,i){n.beginPath(),e.forEach(([r,s],a)=>a?n.lineTo(r,s):n.moveTo(r,s)),n.closePath(),t&&(n.fillStyle=t,n.fill()),i&&(n.strokeStyle=i,n.stroke())}function Lr(n,e,t,i=3,r="#fff1b0"){n.fillStyle=r,n.fillRect(e-i,t,i*2+1,1),n.fillRect(e,t-i,1,i*2+1)}function hi(n,e,t,i,r,s="#98e8ff"){bt(n,[[e-i/2,t],[e-i/2+2,t-r/2],[e+i/2-2,t-r/2],[e+i/2,t],[e+i/2-2,t+r/2],[e-i/2+2,t+r/2]],s,"#d9b45e"),bt(n,[[e-i/2+2,t-r/2],[e,t],[e+i/2-2,t-r/2]],"#ffffff99"),bt(n,[[e,t],[e+i/2,t],[e+i/2-2,t+r/2]],"#28305277")}function fd(n,e,t=12){n.save(),n.scale(t/12,t/12);let i=["\u265B","\u25C8","\u2726","\u265C","\u263E","\u2756","\u269C","\u2727"],r=i.indexOf(e);return r===0?bt(n,[[-10,6],[-11,-7],[-5,-2],[0,-11],[5,-2],[11,-7],[10,6]],"#d6b36e","#fff0c6"):r===1||r===5?(hi(n,0,0,r===1?9:6,12,"#d4a9ef"),r===5&&(hi(n,-8,0,3,6,"#e5c886"),hi(n,8,0,3,6,"#e5c886"))):r===2||r===7?(bt(n,[[0,-12],[3,-3],[12,0],[3,3],[0,12],[-3,3],[-12,0],[-3,-3]],r===2?"#e5c886":"#b9a1ee","#fff0c6"),r===7&&hi(n,0,0,4,4,"#352143")):r===3?(n.fillStyle="#d6b36e",n.fillRect(-8,-9,16,5),n.fillRect(-5,-4,10,12),n.fillRect(-9,8,18,3),n.fillStyle="#261734",n.fillRect(-2,0,4,6)):r===4?(n.fillStyle="#d4a9ef",n.beginPath(),n.arc(0,0,11,0,Math.PI*2),n.fill(),n.fillStyle="#372247",n.beginPath(),n.arc(5,-4,9,0,Math.PI*2),n.fill()):r===6&&bt(n,[[0,-12],[5,-5],[2,2],[10,-3],[8,5],[2,6],[2,11],[-2,11],[-2,6],[-8,5],[-10,-3],[-2,2],[-5,-5]],"#e5c886","#fff0c6"),n.restore(),r>=0}function wc(n,e,t,i=10,r=0,s=1){n.save(),n.translate(e,t),n.scale(s,s),n.lineWidth=1;let a=[-17,-20,-15,-22][r%4]-Math.floor(r/4),o=[-6,-3,0][Math.floor(r/4)%3];bt(n,[[-24,15],[-28,a],[-15,-6],[0,-25],[15,-6],[28,a],[24,15]],"#ae762e","#ffe898"),bt(n,[[-22,10],[-24,a+6],[-14,-2],[0,-19],[14,-2],[24,a+6],[22,10]],"#ffd700"),bt(n,[[-19,7],[-14,-2],[0,-15],[14,-2],[19,7]],"#6b4d9e");for(let l of[-26,0,26])hi(n,l,l===0?-25:a,5,6,l===0?"#d7b4ff":"#fff1b0");for(let l=-18;l<=18;l+=6)n.strokeStyle="#e9b84f",n.beginPath(),n.arc(l,8,3,Math.PI,Math.PI*2),n.stroke();n.fillStyle="#8d5429",n.fillRect(-24,10,48,9),n.fillStyle="#edbd59",n.fillRect(-24,10,48,2),n.fillStyle="#ffeab1",n.fillRect(-24,17,48,2);for(let l of[-16,16])hi(n,l,o,3+r%3,5,r%2?"#a6ddeb":"#d7b4ff");for(let l of[-17,17])hi(n,l,14,4,5,r%2?"#cab2ff":"#e4a5d6");hi(n,0,12,i,10),n.fillStyle="#fff0ad";for(let l=-21;l<23;l+=7)n.fillRect(l,20,2,2);n.restore()}function Ec(n,e,t,i,r,s=0,{theme:a}={}){ko(n,{x:e,y:t,w:i,h:r,time:s,variant:a||"palace",bands:!1})}var A_=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."];function Dr(n,e,t,i="#ff5178",r=1){n.save(),n.globalAlpha=r,n.fillStyle=i,A_.forEach((s,a)=>[...s].forEach((o,l)=>{o==="X"&&n.fillRect(Math.round(e-7+l*2),Math.round(t-6+a*2),2,2)})),n.restore()}function pd(n,e,t,i,r="#ffd700",s=18){n.save();for(let a=0;a<s;a++){let o=a*2.399,l=5+i%500/500*(12+a%5*5);n.globalAlpha=1-i%500/500,Lr(n,e+Math.cos(o)*l,t+Math.sin(o)*l,1+a%2,r)}n.restore()}var Ps=["\u265B","\u25C8","\u2726","\u265C","\u263E","\u2756","\u269C","\u2727"];function Vi(n,e){let t=[...n];for(let i=t.length-1;i>0;i--){let r=Math.floor(e()*(i+1));[t[i],t[r]]=[t[r],t[i]]}return t}function ui(n,e,t){let i=n.difficulty==="hard"?"hard":"normal";return{elapsed:0,difficulty:i,random:n.random||Math.random,timeLeft:i==="hard"?t:e,score:0,hp:100,status:"playing",focus:0,selected:[],feedback:"",lock:0,disposed:!1}}function Ur(n,e){n.disposed||n.status!=="playing"||(e=Number.isFinite(e)?Math.max(0,e):0,n.elapsed+=e,n.timeLeft=Math.max(0,n.timeLeft-e),n.lock=Math.max(0,n.lock-e),!n.lock&&n.mismatch&&(n.selected=[],n.mismatch=!1),n.timeLeft||(n.status="lost"))}function di(n){n.disposed=!0,n.selected=[]}function fi(n){return!n.disposed&&n.status==="playing"&&!n.lock}function pi(n,e,t,i,r="mirror",s={}){n.textBaseline="alphabetic",ko(n,{time:e.elapsed,variant:r}),n.strokeStyle="#d6b36e",n.lineWidth=1,n.strokeRect(6,6,268,548),dd(n,{title:t,encounter:s.encounter,status:`${Math.ceil(e.timeLeft/1e3)}\u79D2 \xB7 ${e.score}\u5206${s.encounter?"":` \xB7 HP ${e.hp}`}`,detail:s.status,hint:i,elapsed:e.elapsed,feedback:e.feedback,controls:e.status==="won"?"\u904E\u95DC\uFF01":e.status==="lost"?"\u6311\u6230\u5931\u6557":s.controls||"\u65B9\u5411\u9375\u79FB\u52D5 \xB7 \u7A7A\u767D\u9375\u63C0\u9078",touch:e.status==="playing"?s.touch||"\u89F8\u63A7\u76F4\u63A5\u63C0":""})}function Vo(n,e,t,i,r,s=!1,a="mirror"){let{x:o,y:l,w:c,h}=i,u=e.selected.includes(t),d=e.focus===t,f=a==="links";n.save(),n.shadowColor="#0008",n.shadowBlur=5,n.shadowOffsetY=3;let g=n.createLinearGradient(o,l,o+c,l+h);g?.addColorStop(0,u?"#80633d":"#50335f"),g?.addColorStop(1,u?"#493649":"#24162f"),n.fillStyle=g||"#372247",n.beginPath(),n.roundRect(o,l,c,h,5),n.fill(),n.shadowBlur=0,n.lineWidth=d?2:1,n.strokeStyle=d?"#fff0c6":"#b89863",n.stroke(),f||(n.strokeStyle="#addcff66",n.strokeRect(o+5,l+5,c-10,h-10),n.fillStyle="#d0edff22",n.fillRect(o+9,l+8,5,h-16)),n.save(),n.translate(o+c/2,l+h/2),s&&n.scale(-1,1),n.fillStyle="#fff0c6",n.font=f?"24px serif":"28px serif",n.textAlign="center",n.textBaseline="middle",fd(n,r,f?10:14)||n.fillText(r,0,0),n.restore(),(d||u)&&Ho(n,i,e.elapsed,u),d&&Dr(n,o+c-9,l+9,"#ff5178"),n.restore()}function Gi(n,e,t){return e>=n.x&&e<n.x+n.w&&t>=n.y&&t<n.y+n.h}function Go(n,e,t,i,r){if(!fi(n))return;let s={left:-1,right:1,up:-i,down:i}[e];s&&(n.focus=(n.focus+s+t)%t),e==="action"&&r(n,n.focus)}var C_="pride-mirror-match";function R_(n={}){let e=ui(n,22e3,26e3);return e.pairs=e.difficulty==="hard"?6:4,e.items=[...Vi(Ps.slice(0,e.pairs),e.random),...Vi(Ps.slice(0,e.pairs),e.random)],e.removed=[],e}function Ac(n,e){return{x:e<n.pairs?25:165,y:142+e%n.pairs*52,w:90,h:44}}function Cc(n,e){if(!fi(n)||!Number.isInteger(e)||e<0||e>=n.items.length||n.removed.includes(e)||n.selected.includes(e)||(n.focus=e,n.selected.length&&n.selected[0]<n.pairs==e<n.pairs&&(n.selected=[]),n.selected.push(e),n.selected.length<2))return;let[t,i]=n.selected;n.items[t]===n.items[i]?(n.removed.push(t,i),n.score+=100,n.selected=[],n.feedback="\u93E1\u50CF\u914D\u5C0D +100",n.removed.length===n.items.length&&(n.status="won")):(n.timeLeft=Math.max(0,n.timeLeft-2e3),n.lock=650,n.mismatch=!0,n.feedback="\u914D\u932F \u22122\u79D2",n.timeLeft||(n.status="lost"))}function P_(n,e,t){let i=n.items.findIndex((r,s)=>Gi(Ac(n,s),e,t));Cc(n,i)}function I_(n,e){if(fi(n)){if((e==="left"||e==="right")&&(n.focus=(n.focus+n.pairs)%n.items.length),e==="up"||e==="down"){let t=n.focus<n.pairs?0:n.pairs;n.focus=t+(n.focus%n.pairs+(e==="up"?-1:1)+n.pairs)%n.pairs}e==="action"&&Cc(n,n.focus)}}function L_(n,e){Ur(n,e)}function D_(n,e,t){pi(n,e,"\u93E1\u50CF\u914D\u5C0D","\u5DE6\u53F3\u5404\u7FFB\u4E00\u5F35\uFF0C\u914D\u5C0D\u76F8\u540C\u5716\u6848","mirror",{encounter:t}),n.strokeStyle="#8bbacb",n.beginPath(),n.moveTo(140,140),n.lineTo(140,450),n.stroke(),e.items.forEach((i,r)=>{e.removed.includes(r)||Vo(n,e,r,Ac(e,r),e.selected.includes(r)?i:"?",r>=e.pairs)})}var Ic={};Gs(Ic,{choose:()=>Pc,dispose:()=>di,id:()=>U_,init:()=>N_,input:()=>z_,point:()=>B_,rect:()=>Wo,render:()=>O_,update:()=>F_});var U_="pride-crown-choice";function N_(n={}){let e=ui(n,12e3,9e3),t=Math.max(0,Math.min(1,n.bossHpRatio??1));return e.phase=t<=1/3?3:t<=2/3?2:1,e.count=(e.difficulty==="hard"?6:3)+(e.phase-1)*3,e.target=Math.floor(e.random()*e.count),e.rejected=[],e.difference=Math.max(1,4-e.phase-(e.difficulty==="hard"?.5:0)),e.gemWidth=[10,8,6][e.phase-1]-(e.difficulty==="hard"?1:0),e}function Wo(n,e){return{x:16+e%3*84,y:188+Math.floor(e/3)*66,w:78,h:58}}function Pc(n,e){!fi(n)||!Number.isInteger(e)||e<0||e>=n.count||n.rejected.includes(e)||(n.focus=e,n.visualSelection=0,e===n.target?(n.score=300,n.status="won",n.feedback="\u771F\u6B63\u738B\u51A0 +300"):(n.rejected.push(e),n.hp=Math.max(0,n.hp-(n.difficulty==="hard"?15:10)),n.lock=350,n.feedback="\u5047\u7687\u51A0\uFF0C\u6263\u8840\uFF01",n.hp||(n.status="lost")))}function B_(n,e,t){Pc(n,Array.from({length:n.count},(i,r)=>r).find(i=>Gi(Wo(n,i),e,t)))}function z_(n,e){Go(n,e,n.count,3,Pc)}function F_(n,e){Ur(n,e),!n.disposed&&Number.isFinite(e)&&(n.visualTime=(n.visualTime||0)+Math.max(0,e),n.visualSelection=(n.visualSelection??500)+Math.max(0,e))}function O_(n,e,t){pi(n,e,"\u52A0\u5195\u6289\u64C7","\u6BD4\u8F03\u4E2D\u592E\u51B0\u85CD\u5BF6\u77F3\u95CA\u5EA6","crown",{encounter:t});let i=e.visualTime||0;if(n.canvas?.addEventListener&&n.getTransform){let r=n.getTransform();n.canvas._prideCrownHover={s:e,matrix:r},n.canvas._prideCrownListener||(n.canvas._prideCrownListener=!0,n.canvas.addEventListener("pointermove",s=>{let a=n.canvas._prideCrownHover;if(a.s.disposed)return;let o=n.canvas.getBoundingClientRect(),l=new DOMPoint((s.clientX-o.left)*n.canvas.width/o.width,(s.clientY-o.top)*n.canvas.height/o.height).matrixTransform(a.matrix.inverse());a.s.hover=Array.from({length:a.s.count},(c,h)=>h).find(c=>Gi(Wo(a.s,c),l.x,l.y))}),n.canvas.addEventListener("pointerleave",()=>{n.canvas._prideCrownHover&&(n.canvas._prideCrownHover.s.hover=void 0)}))}n.save(),Ec(n,15,142,250,38,i),wc(n,140,159,e.gemWidth+e.difference,0,.8),n.fillStyle="#dfc78c",n.font="9px sans-serif",n.fillText("\u5FA1\u85CF\u539F\u77F3",65,174),n.fillText("\u8FA8\u8A8D\u95CA\u5EA6",216,174);for(let r=0;r<e.count;r++){let s=Wo(e,r),a=e.focus===r,o=e.hover===r,l=e.status==="won"&&r===e.target;n.globalAlpha=e.rejected.includes(r)?.25:1,Ec(n,s.x,s.y,s.w,s.h,i),n.fillStyle=o||a?"#6b4d9e66":"#35234299",n.fillRect(s.x+4,s.y+4,s.w-8,s.h-8),n.strokeStyle=l?"#fff4c1":o||a?"#ffd700":"#936f48",n.lineWidth=o||a?2:1,n.strokeRect(s.x+2,s.y+2,s.w-4,s.h-4);let c=l?Math.sin(Math.min(1,(e.visualSelection||0)/350)*Math.PI)*4:0;wc(n,s.x+s.w/2,s.y+30-c,e.gemWidth+(r===e.target?e.difference:0),r,.8),(o||a||l)&&Ho(n,{x:s.x+2,y:s.y+2,w:s.w-4,h:s.h-4},i,l),a&&Dr(n,s.x+s.w-10,s.y+10,"#ff5178"),(o||a)&&(Lr(n,s.x+8,s.y+8,2),Lr(n,s.x+s.w-9,s.y+s.h-9,2)),l&&pd(n,s.x+s.w/2,s.y+28,i)}n.restore()}var Uc={};Gs(Uc,{dispose:()=>di,id:()=>V_,init:()=>G_,input:()=>_d,point:()=>W_,render:()=>q_,update:()=>X_});function k_(n){let e=Math.min(1,n/16),t=Math.sin(n*2.3)*3;return{light:`rgb(${238-e*38+t} ${208-e*47+t} ${155+e*31+t})`,stone:`rgb(${188-e*38+t} ${138-e*40+t} ${82+e*55+t})`,shade:`rgb(${113-e*26+t} ${76-e*21+t} ${51+e*53+t})`,roof:`hsl(${44-e*7} 67% ${82-e*9}%)`,gold:"#e5bb68",mortar:"#503650",window:"#302139"}}function Lc(n,e,t,i){n.beginPath(),n.rect(e,t,i,22)}function H_(n,e,t,i){bt(n,[[e,t],[e+2.4,t+.7],[e+.7,t+2.5]],i),bt(n,[[e+3.1,t+.2],[e+5.6,t+.8],[e+3.8,t+2]],i),n.strokeStyle=i,n.lineWidth=.5,n.beginPath(),n.moveTo(e+.7,t+1),n.lineTo(e+2,t+3.5),n.stroke()}function md(n,e,t,i,r,{clock:s=0,stress:a=0,reduced:o=!1}={}){let l=k_(r);n.save(),n.lineWidth=.8,n.fillStyle=l.stone,n.fillRect(e,t,i,22),n.beginPath(),n.rect(e,t,i,22),n.clip();let c=n.createLinearGradient(e,t,e,t+22);c.addColorStop(0,l.light),c.addColorStop(.38,l.stone),c.addColorStop(.86,l.stone),c.addColorStop(1,l.shade),Lc(n,e,t,i),n.fillStyle=c,n.fill(),n.save(),Lc(n,e,t,i),n.clip();let h=o?0:Math.sin(s*.006+r*1.7)*Math.min(.65,Math.abs(a)*.02);for(let u=0;u<3;u++){let d=t+6+u*5,f=(u%2?-1:1)*h;for(let g=-1;g<Math.ceil(i/13);g++){let _=e+g*13+(u%2?6:0)+f;n.fillStyle=(g+u+r)%3?"#fff0c51a":"#39254624",n.fillRect(_+.6,d+.5,12,4),n.strokeStyle="#63415366",n.lineWidth=.5,n.strokeRect(_,d,13,5),n.fillStyle="#fff0c54a",n.fillRect(_+1,d+.5,5+(g+u+4)%4,.5)}}n.restore(),n.fillStyle=l.gold,n.fillRect(e,t,i,1.5),n.fillStyle="#fff0bb",n.fillRect(e+1,t+1.5,i-2,.7),n.fillStyle="#754d4377",n.fillRect(e+2,t+3,i-4,3);for(let u=5;u<i-6;u+=10)H_(n,e+u,t+3.1,"#ffe1a6cc");for(let u=15;u<i-7;u+=25){let d=e+u;n.beginPath(),n.moveTo(d-4,t+18.5),n.lineTo(d-4,t+12),n.arc(d,t+12,4,Math.PI,0),n.lineTo(d+4,t+18.5),n.closePath(),n.fillStyle=l.window,n.fill(),n.strokeStyle=l.roof,n.lineWidth=1.6,n.stroke(),n.fillStyle="#bd8bd166",n.fillRect(d-2.5,t+12,1,5),n.fillStyle="#f2ca76",n.fillRect(d-5,t+19,10,1),n.strokeStyle="#8f664b",n.lineWidth=.6,n.beginPath(),n.moveTo(d,t+7.5),n.lineTo(d,t+9.5),n.stroke()}n.fillStyle="#432d4266",n.fillRect(e+2,t+20,i-4,1),n.fillStyle=l.gold,n.fillRect(e,t+21,i,1),Lc(n,e,t,i),n.strokeStyle="#6b4b54",n.lineWidth=.7,n.stroke(),n.restore()}function Dc(n,e,t,i){n.save(),n.translate(e,t),n.scale(i,i),n.beginPath(),n.moveTo(-42,4),n.bezierCurveTo(-51,-6,-33,-13,-23,-10),n.bezierCurveTo(-22,-30,6,-33,12,-14),n.bezierCurveTo(27,-24,40,-11,38,-4),n.bezierCurveTo(58,-3,53,10,38,11),n.bezierCurveTo(7,15,-20,12,-42,4),n.closePath();let r=n.createLinearGradient(0,-30,0,15);r.addColorStop(0,"#ffe5c7cc"),r.addColorStop(1,"#c1a1db08"),n.fillStyle=r,n.fill(),n.restore()}function gd(n,e,t){n.save();let i=n.createLinearGradient(0,0,0,460);i.addColorStop(0,"#21152f"),i.addColorStop(.33,"#583769"),i.addColorStop(.68,"#9d6d91"),i.addColorStop(1,"#e7bb83"),n.fillStyle=i,n.fillRect(0,0,280,560),bt(n,[[190,155],[280,315],[280,430],[226,228]],"#fff1c20d"),bt(n,[[47,249],[0,345],[0,402],[71,279]],"#f4d6ff0c");let r=t?0:Math.sin(e*16e-5)*5;Dc(n,42+r,199,.9),Dc(n,226-r,256,1.05),Dc(n,80-r*.5,332,.58),n.save(),n.beginPath(),n.rect(0,140,280,320),n.clip();for(let[o,l,c]of[[-9,346,27],[32,380,22],[65,359,25],[211,370,23],[248,327,31]])bt(n,[[o,453],[o,l+13],[o+c/2,l],[o+c,l+13],[o+c,453]],"#65527655","#ebc89666"),bt(n,[[o+2,l+15],[o+c/2,l+4],[o+c/2,450],[o+2,450]],"#f6d9e033"),bt(n,[[o+3,l+48],[o+c-3,l+27],[o+c-3,l+35],[o+3,l+56]],"#fff3d677"),n.strokeStyle="#ffe9bb77",n.lineWidth=.7,n.beginPath(),n.moveTo(o+c/2,l),n.lineTo(o+c/2,452),n.stroke();for(let o=0;o<3;o++)n.fillStyle=["#98778766","#80607c66","#76567366"][o],n.fillRect(12+o*8,448-o*8,68-o*16,8),n.fillRect(205+o*7,450-o*7,64-o*14,7);for(let[o,l]of[[254,349],[44,401],[222,389]])Lr(n,o,l,2,"#fff0c7bb");n.restore();let s=n.createLinearGradient(0,445,0,460);s.addColorStop(0,"#93728600"),s.addColorStop(1,"#5a3e63"),n.fillStyle=s,n.fillRect(0,445,280,15);let a=n.createLinearGradient(0,90,0,140);a.addColorStop(0,"#21152f77"),a.addColorStop(1,"#21152f00"),n.fillStyle=a,n.fillRect(0,0,280,140),n.fillStyle="#24182f",n.fillRect(0,460,280,100),n.fillStyle="#d0a96866",n.fillRect(12,460,256,1),n.restore()}var V_="pride-doodle",Is=(n,e,t)=>Math.max(e,Math.min(t,n));function G_(n={}){let e=ui(n,32e3,26e3);return Object.assign(e,{x:140,y:430,vy:-340,camera:0,height:0,goal:e.difficulty==="hard"?1200:900,held:new Set,platforms:[{x:105,y:460,w:70,landed:!0}],shots:[],fire:0,targetX:null}),yd(e),e}function yd(n){for(;n.platforms.at(-1).y>n.camera-120;){let e=n.platforms.at(-1),t=Is(e.x+(n.random()-.5)*130,12,198);n.platforms.push({x:t,y:e.y-62,w:70,enemy:n.platforms.length%5===0})}}function _d(n,e){n.disposed||n.status!=="playing"||((e==="left"||e==="right")&&(n.targetX=Is(n.x+(e==="left"?-42:42),12,268)),e==="action"&&!n.fire&&(n.shots.push({x:n.x,y:n.y}),n.fire=220))}function W_(n,e,t){n.disposed||n.status!=="playing"||e<0||e>280||t<0||t>560||(n.targetX=Is(e,12,268),t<220&&_d(n,"action"))}function X_(n,e){if(n.disposed||n.status!=="playing")return;let t=Number.isFinite(e)?Math.max(0,e):0;for(;t>0&&n.status==="playing";){let i=Math.min(16,t),r=i/1e3;t-=i,n.elapsed+=i,n.timeLeft=Math.max(0,n.timeLeft-i),n.fire=Math.max(0,n.fire-i);let s=Number(n.held.has("right"))-Number(n.held.has("left"));s?n.targetX=null:n.targetX!=null&&(s=Is((n.targetX-n.x)/(170*r||1),-1,1)),n.x=Is(n.x+s*170*r,12,268);let a=n.y;n.vy+=700*r,n.y+=n.vy*r;for(let o of n.shots){o.y-=430*r;for(let l of n.platforms)if(l.enemy&&Math.hypot(o.x-(l.x+l.w/2),o.y-(l.y-13))<20){l.enemy=!1,o.dead=!0,n.score+=100,n.feedback="\u53CD\u653B\u547D\u4E2D +100";break}}n.shots=n.shots.filter(o=>!o.dead&&o.y>n.camera-30);for(let o of n.platforms){if(o.enemy&&Math.hypot(n.x-(o.x+o.w/2),n.y-(o.y-13))<18){n.status="lost",n.feedback="\u649E\u5230\u5E7B\u5F71\uFF01\u7A7A\u767D\u9375 \u53EF\u5411\u4E0A\u53CD\u653B";break}if(n.vy>0&&a+8<=o.y&&n.y+8>=o.y&&n.x>=o.x-5&&n.x<=o.x+o.w+5){n.y=o.y-8,n.vy=-340,o.landed||(o.landed=!0,n.score+=100);break}}n.height=Math.max(n.height,430-n.y),n.camera=Math.min(n.camera,n.y-280),yd(n),n.platforms=n.platforms.filter(o=>o.y<n.camera+590),n.status==="playing"&&n.height>=n.goal?(n.status="won",n.feedback="\u767B\u4E0A\u50B2\u6162\u4E4B\u5854\uFF01"):(!n.timeLeft||n.y>n.camera+565)&&(n.status="lost")}}function q_(n,e,t){n.save(),pi(n,e,"\u722C\u5854","\u5DE6\u53F3\u79FB\u52D5\u81EA\u52D5\u8DF3 \xB7 \u7A7A\u767D\u9375 \u5411\u4E0A\u53CD\u653B","links",{encounter:t,status:`${Math.floor(e.height)}/${e.goal} \u7C73`,controls:"\u5DE6\u53F3\u79FB\u52D5 \xB7 \u7A7A\u767D\u9375 \u5411\u4E0A\u53CD\u653B",touch:"\u9EDE\u5DE6\u53F3\u79FB\u52D5 \xB7 \u9EDE\u4E0A\u65B9\u5C04\u64CA"}),n.save(),n.beginPath(),n.rect(8,140,264,320),n.clip(),gd(n,e.elapsed,!0);let i=r=>r-e.camera-100;n.strokeStyle="#b8976355",n.lineWidth=1;for(let r=115;r<460;r+=20)n.beginPath(),n.moveTo(8,r),n.lineTo(272,r),n.stroke();for(let r of e.platforms){let s=i(r.y);md(n,r.x,s,r.w,Math.floor((460-r.y)/62),{reduced:!0}),r.enemy&&bt(n,[[r.x+35,s-27],[r.x+48,s-13],[r.x+35,s-2],[r.x+22,s-13]],"#bd8bea","#fff")}n.fillStyle="#ffdf86";for(let r of e.shots)n.fillRect(r.x-2,i(r.y)-4,4,9);Dr(n,e.x,i(e.y),"#ff5178"),n.restore(),n.restore()}var Oc={};Gs(Oc,{availablePair:()=>Xo,choose:()=>Fc,dispose:()=>di,findPath:()=>Nc,id:()=>Y_,init:()=>Z_,input:()=>$_,point:()=>J_,rect:()=>zc,render:()=>j_,reshuffle:()=>Bc,update:()=>K_});var Y_="pride-lianliankan";function Nc(n,e,t,i,r){if(i===r||i<0||r<0||i>=n.length||r>=n.length||n[i]==null||n[i]!==n[r])return null;let s={x:i%e+1,y:Math.floor(i/e)+1},a={x:r%e+1,y:Math.floor(r/e)+1},o=[{...s,dir:-1,bends:0,path:[s]}],l=new Map,c=[[1,0],[0,1],[-1,0],[0,-1]];for(let h=0;h<o.length;h++){let u=o[h];for(let d=0;d<4;d++){let f=u.bends+(u.dir!==-1&&u.dir!==d?1:0);if(f>2)continue;let g=u.x+c[d][0],_=u.y+c[d][1];if(g<0||_<0||g>e+1||_>t+1)continue;let m=[...u.path,{x:g,y:_}];if(g===a.x&&_===a.y)return m;if(g>=1&&g<=e&&_>=1&&_<=t&&n[(_-1)*e+g-1]!=null)continue;let p=`${g},${_},${d}`;(l.get(p)??1/0)<=f||(l.set(p,f),o.push({x:g,y:_,dir:d,bends:f,path:m}))}}return null}function Xo(n){for(let e=0;e<n.items.length;e++)for(let t=e+1;t<n.items.length;t++)if(Nc(n.items,n.cols,n.rows,e,t))return[e,t];return null}function Bc(n){let e=n.items.map(s=>s==null?null:0),t=[];for(;e.some(s=>s!=null);){let s=Xo({...n,items:e});if(!s)throw new Error("Invalid even tile geometry");t.push(s),s.forEach(a=>{e[a]=null})}let i=Vi(n.items.filter(s=>s!=null),n.random),r=Vi([...new Set(i)].flatMap(s=>Array(i.filter(a=>a===s).length/2).fill(s)),n.random);t.forEach(([s,a],o)=>{n.items[s]=n.items[a]=r[o]}),n.selected=[],n.feedback="\u5DF2\u91CD\u65B0\u6392\u5217\uFF0C\u7E7C\u7E8C\u914D\u5C0D"}function Z_(n={}){let e=ui(n,3e4,3e4);e.cols=6,e.rows=e.difficulty==="hard"?6:4,e.items=Array.from({length:e.cols*e.rows},(t,i)=>Ps[Math.floor(i/2)%(e.difficulty==="hard"?8:6)]),e.targetScore=e.items.length/2*100;for(let t=0;t<100;t++){e.items=Vi(e.items,e.random);let i={...e,items:[...e.items]},r;for(;r=Xo(i);)r.forEach(s=>{i.items[s]=null});if(i.items.every(s=>s==null))return e}return Bc(e),e.feedback="",e}function zc(n,e){return{x:20+e%n.cols*40,y:150+Math.floor(e/n.cols)*46,w:36,h:40}}function Fc(n,e){if(!fi(n)||!Number.isInteger(e)||e<0||e>=n.items.length||n.items[e]==null)return;if(n.focus=e,n.selected[0]===e){n.selected=[];return}if(n.selected.push(e),n.selected.length<2)return;let[t,i]=n.selected,r=Nc(n.items,n.cols,n.rows,t,i);r?(n.items[t]=n.items[i]=null,n.score+=100,n.path=r,n.pathTime=350,n.feedback="\u9023\u7DDA\u6210\u529F +100",n.score>=n.targetScore?n.status="won":Xo(n)||Bc(n)):n.feedback="\u5716\u6848\u9808\u76F8\u540C\uFF0C\u9023\u7DDA\u6700\u591A\u5169\u500B\u5F4E",n.selected=[]}function J_(n,e,t){Fc(n,n.items.findIndex((i,r)=>Gi(zc(n,r),e,t)))}function $_(n,e){Go(n,e,n.items.length,n.cols,Fc)}function K_(n,e){n.disposed||n.status!=="playing"||(Ur(n,e),n.pathTime=Math.max(0,(n.pathTime||0)-Math.max(0,e)))}function j_(n,e,t){pi(n,e,"\u5BAE\u6BBF\u9023\u9023\u770B",`\u6700\u591A\u5169\u500B\u5F4E \xB7 \u76EE\u6A19 ${e.targetScore}\u5206`,"links",{encounter:t}),e.items.forEach((i,r)=>{i!=null&&Vo(n,e,r,zc(e,r),i,!1,"links")}),e.pathTime>0&&(n.strokeStyle="#9de8ff",n.lineWidth=3,n.beginPath(),e.path.forEach((i,r)=>n[r?"lineTo":"moveTo"](38+(i.x-1)*40,170+(i.y-1)*46)),n.stroke())}var Q_=Object.freeze(Object.fromEntries([Rc,Ic,Oc,Uc].map(n=>[n.id,n]))),kc=Object.freeze(Object.keys(Q_));function xd(n,{imageFactory:e=()=>typeof Image>"u"?null:new Image}={}){let t={},i=new Map;function r(o){if(!Object.hasOwn(n,o)||Object.hasOwn(t,o))return t[o];let l=e();if(!l)return;t[o]=l;let c=new Promise(h=>{l.onload=()=>h(!0),l.onerror=()=>h(!1)});return i.set(o,c),l.src=n[o],l}let s=new Proxy(t,{get(o,l){return Object.hasOwn(o,l)?o[l]:r(l)}});function a(o){return Promise.all(o.map(l=>(r(l),i.get(l)||Promise.resolve(!!t[l]))))}return{images:s,load:a}}var ex=xd(Object.fromEntries([["first","greed-first.webp"],["second","greed-second.webp"],["defeated","greed-defeated.webp"]].map(([n,e])=>[n,new URL("./assets/"+e,import.meta.url).href]))),hb=ex.images;function vd(n){try{return n.getItem("bridge-greed-cleared")==="1"}catch{return!1}}var tx="bridge-filming-unlock";function Sd(n){try{return(n??globalThis.sessionStorage)?.getItem(tx)==="1"}catch{return!1}}var nx=Object.freeze([{id:"greed",name:"\u8CAA\u5A6A",icon:"\u{1F4B0}",minigames:["slots","tiger","pachinko","cards","mahjong","breakout","pinball","bbtan","sand","dodge"],attacks:["jump","coins","motion","vortex","roulette"],finisher:"vault",arcadePool:["breakout","pinball","bbtan","sand"],recovery:["cards","mahjong","slots"],label:"crazyGreed",developed:!0},{id:"pride",name:"\u50B2\u6162",icon:"\u{1F451}",minigames:kc,attacks:["pride-gaze","pride-mirror","pride-crown-shock"],finisher:"pride-mirror-duel",arcadePool:["breakout","pinball","bbtan","sand"],recovery:kc,label:"sinPride",developed:!0},{id:"envy",name:"\u5AC9\u5992",icon:"\u{1F441}",entry:"envy.html",minigames:["difference","tarot","rolling","window","pack","territory","pellets","eye-room"],attacks:["laser","steal","gaze","net","breath","pupil","laser-up","steal-up","gaze-up"],finisher:"chase",arcadePool:[],recovery:["tarot","pack","territory","pellets"],label:"sinEnvy",developed:!0},{id:"lust",name:"\u8272\u617E",icon:"\u{1F498}",entry:"lust.html",minigames:["archery","piano","claw","tennis","feeding","cinema","wheel","volley","haunted","dance"],attacks:["wave","bomb","arrows","wave-up","bomb-up","arrows-up","ribbon","echo","shatter"],finisher:"dating",arcadePool:[],recovery:["archery","piano","claw","tennis","feeding","cinema","wheel","volley","haunted","dance"],label:"sinLust",developed:!0},{id:"gluttony",name:"\u66B4\u98DF",icon:"\u{1F354}",entry:"gluttony.html",minigames:["snake","match","merge","rope","slice"],attacks:["gravity","ricochet","floor"],finisher:"escape",arcadePool:[],recovery:["snake","match","merge","rope","slice"],label:"sinGluttony",developed:!0},{id:"sloth",name:"\u6020\u60F0",icon:"\u{1F634}",minigames:[],attacks:[],finisher:null,arcadePool:[],recovery:[],label:"sinSloth",developed:!1},{id:"wrath",name:"\u61A4\u6012",icon:"\u{1F525}",minigames:[],attacks:[],finisher:null,arcadePool:[],recovery:[],label:"sinWrath",developed:!1}].map(n=>Object.freeze({...n,minigames:Object.freeze(n.minigames),attacks:Object.freeze(n.attacks),arcadePool:Object.freeze(n.arcadePool),recovery:Object.freeze(n.recovery)})));function Md(n,e=nx,{filming:t=Sd()}={}){let i=r=>{if(r==="greed")return vd(n);try{return n.getItem(`bridge-crazy-cleared-${r}`)==="1"}catch{return!1}};return e.map((r,s)=>({...r,cleared:i(r.id),unlocked:r.developed&&(t||s===0||i(e[s-1].id))}))}function bd(n="greed",e="hard"){return(n==="greed"?"bridge-best-crazy":`bridge-best-crazy-${n}`)+(e==="normal"?"-normal":"")}var ix="bridge-filming-unlock";function qo(n){try{return(n??globalThis.sessionStorage)?.getItem(ix)==="1"}catch{return!1}}function rx(n){if(n==null||n==="")return[];let e=n;if(typeof n=="string")try{e=JSON.parse(n)}catch{e=Number(n)}return(Array.isArray(e)?e:[e]).map(Number).filter(i=>Number.isFinite(i)&&i>0)}function sx(n,{lower:e=!1,limit:t=5}={}){return n.map(Number).filter(i=>Number.isFinite(i)&&i>0).sort((i,r)=>e?i-r:r-i).slice(0,t)}function Td(n,e){let t=n.map(s=>rx(s)),i=t[0]||[],r=[...i];for(let s of t.slice(1).flat())i.includes(s)||r.push(s);return sx(r,e)}function wd(n,e){return Md(n,void 0,{filming:qo(e)})}function Ed(n,e,t,i="normal"){let r=e.find(a=>a.id===n);if(!r?.developed||!r.unlocked)throw new RangeError("Locked Boss");let s=new URL(r.entry||"index.html",t);return r.entry||s.searchParams.set("campaign",n),s.searchParams.set("difficulty",i==="hard"?"hard":"normal"),s.href}function Ad(n){let e=t=>{try{return n?.getItem(t)}catch{return null}};return["greed","pride","envy","lust","gluttony"].flatMap(t=>["normal","hard"].map(i=>({sin:t,difficulty:i,scores:Td([e(bd(t,i))])})))}var _t=Object.freeze([{id:"greed",title:"\u8CAA\u5A6A",english:"GREED",subtitle:"The Mad Dealer",color:"#b27343",art:"./assets/greed-first.webp",available:!0},{id:"pride",title:"\u50B2\u6162",english:"PRIDE",subtitle:"The Mirror Palace",color:"#8464ae",art:"./assets/pride-first.webp",available:!0},{id:"envy",title:"\u5AC9\u5992",english:"ENVY",subtitle:"The Watching Child",color:"#548c76",art:"./assets/envy-first.webp",available:!0},{id:"lust",title:"\u8272\u617E",english:"LUST",subtitle:"Cupid in the Clouds",color:"#c56b8a",art:"./assets/lust-cupid-r2.webp",available:!0,preview:!0},{id:"gluttony",title:"\u66B4\u98DF",english:"GLUTTONY",subtitle:"The Ravenous Chef",color:"#b88b58",art:"./assets/gluttony-intro-r1.webp",available:!0,preview:!0},...[6,7].map(n=>({id:"sealed-"+n,title:"\u5C01\u5370 "+n,english:"SEALED "+n,color:"#8a8982",available:!1}))]);function Cd(){return{index:0,phase:"browse",elapsed:0,rotate:!1,yaw:0,pitch:0,drop:{x:0,y:0},message:"",available:_t.map(n=>n.available)}}function Hc(n,e){return n.phase!=="browse"||!_t[e]?!1:n.available[e]?(n.index=e,n.drop={x:0,y:0},n.yaw=0,n.pitch=0,n.message="",!0):(n.message="sealed",!1)}function Vc(n,e,t){return n.phase!=="browse"?!1:(n.drop.x=Math.max(-6,Math.min(6,e)),n.drop.y=Math.max(-6,Math.min(6,t)),!0)}function Rd(n,e,t){return n.phase!=="browse"?!1:(n.yaw=Math.max(-Math.PI,Math.min(Math.PI,n.yaw+e)),n.pitch=Math.max(-1.1,Math.min(1.1,n.pitch+t)),!0)}function Pd(n,{distance:e,aligned:t=!0}){return n.phase!=="browse"?!1:e>.72||!t?(n.drop={x:0,y:0},n.message=t?"returned":"align",!1):Gc(n)}function Gc(n){return n.phase!=="browse"||!n.available[n.index]?!1:(n.phase="insert",n.elapsed=0,n.rotate=!1,n.message="",!0)}function Id(n,e,{paused:t=!1,reduced:i=!1}={}){t||(n.elapsed+=Math.max(0,Math.min(250,e)),n.phase==="insert"&&n.elapsed>=(i?300:1250)?(n.phase="boot",n.elapsed=0):n.phase==="boot"&&n.elapsed>=(i?250:2100)&&(n.phase="playing",n.elapsed=0))}function Ld(n){return n.phase==="browse"?!1:(n.phase="browse",n.elapsed=0,n.drop={x:0,y:0},n.yaw=0,n.pitch=0,n.message="",!0)}var Ls=n=>(n=Math.max(0,Math.min(1,n)),n*n*(3-2*n));var Wi=["zh-Hant","zh-Hans","en","ja","ko","pt","es"],Wc={"zh-Hant":{dangerEffect:"\u5371\u96AA\u63D0\u793A\u6548\u679C",screenShake:"\u6296\u52D5",noScreenShake:"\u4E0D\u6296\u52D5",crazyDifficulty:"\u96E3\u5EA6",gameMenu:"\u904A\u6232\u9078\u55AE",bgmVolume:"BGM \u97F3\u91CF",sfxVolume:"\u8072\u6548\u97F3\u91CF",quitToMenu:"\u9000\u51FA\u56DE\u4E3B\u9078\u55AE",quitConfirm:"\u78BA\u5B9A\u9000\u51FA\uFF1F\u9019\u6B21\u904A\u6232\u5C07\u6703\u7D50\u675F\u3002",cancel:"\u53D6\u6D88",confirmExit:"\u78BA\u5B9A\u9000\u51FA",crazyMenuLive:"\u6230\u9B25\u7E7C\u7E8C\u9032\u884C\uFF0C\u9019\u500B\u9078\u55AE\u4E0D\u6703\u66AB\u505C Boss\u3002",crazyGreed:"\u8CAA\u5A6A",crazyCatPlayerWarning:"\u8C93\u4F38\u722A\uFF01\u5DE6\u53F3\u8EB2\u907F\uFF01",crazyCatBossWarning:"\u8C93\u76EF\u4E0A\u838A\u5BB6\u2026\u2026",crazyCatGiftWarning:"\u8C93\u5E36\u4E86\u9B5A\u4E7E\uFF01",crazyCatBlocksWarning:"\u8C93\u76EF\u4E0A\u65B9\u584A\u2026\u2026",crazyCatSmash:"\u8C93\u6253\u788E\u65B9\u584A\uFF01",crazyCatBossScratch:"\u8C93\u6293\u50B7 Boss",crazyCatPlayerScratch:"\u88AB\u8C93\u6293\u50B7",crazyCatDodge:"\u8EB2\u904E\u8C93\u722A\uFF01",crazyCatGift:"\u9B5A\u4E7E\u56DE\u8840",crazySevenSins:"\u4E03\u5927\u7F6A",crazyChooseBoss:"\u4F9D\u5E8F\u6311\u6230\u4E03\u5927\u7F6A \xB7 \u901A\u95DC\u5F8C\u63ED\u958B\u4E0B\u4E00\u95DC",crazyChallenge:"\u6311\u6230",crazyLocked:"\u672A\u89E3\u9396",crazyCleared:"\u5B8C\u6574\u901A\u95DC",sinPride:"\u50B2\u6162",sinEnvy:"\u5AC9\u5992",sinWrath:"\u61A4\u6012",sinLust:"\u8272\u617E",sinGluttony:"\u66B4\u98DF",sinSloth:"\u6020\u60F0",crazyGreedLore:"\u838A\u5BB6\u60F3\u8981\u4E00\u5207\u3002\u6311\u6230\u8CAA\u5A6A\u7684\u8CED\u5C40\u3002",crazyTrueName:"\u566C\u91D1\u838A\u5BB6",crazyTrueForm:"\u8CAA\u5A6A\u771F\u8EAB\u30FB\u566C\u91D1\u838A\u5BB6",crazyTransform:"\u9762\u5177\u788E\u88C2",crazyNeverEnough:"\u300C\u9084\u4E0D\u5920\u2026\u2026\u5168\u90E8\u90FD\u662F\u6211\u7684\u3002\u300D",crazyTransformSub:"\u91D1\u5EAB\u5DF2\u958B\uFF0C\u8FFD\u50B5\u958B\u59CB\u3002",crazyGreedBroken:"\u8CAA\u5A6A\uFF0C\u64CA\u7834\u3002",crazyVictorySub:"\u838A\u5BB6\u7684\u91D1\u5EAB\uFF0C\u7D42\u65BC\u4E0D\u518D\u5C6C\u65BC\u4ED6\u3002",crazySkip:"\u8DF3\u904E",crazyContinue:"\u7E7C\u7E8C",crazyClearUnlock:"\u5DF2\u89E3\u9396\u566C\u91D1\u838A\u5BB6\u526A\u5F71",crazyHealth:"\u5269\u9918\u8840\u91CF",crazyCounters:"\u53CD\u64CA\u6B21\u6578",crazyCoins:"\u6536\u96C6\u786C\u5E63",crazyDamageTaken:"\u627F\u53D7\u50B7\u5BB3",crazyHealed:"\u56DE\u5FA9\u8840\u91CF",crazyMode_jump:"\u8DF3\u8E8D\u8FFD\u50B5",crazyMode_coins:"\u91D1\u5E63\u6D2A\u6D41",crazyMode_motion:"\u52D5\uFF0F\u505C\u5951\u7D04",crazyMode_vortex:"\u8CAA\u5A6A\u5438\u5F15",crazyMode_roulette:"\u8F2A\u76E4\u8FFD\u6BBA",crazyMode_pusher:"\u63A8\u5E63\u734E\u52F5",crazyHint_jump:"\u5DE6\u53F3\u79FB\u52D5\uFF0C\u7A7A\u767D\u9375\uFF0F\u8DF3\u8E8D\u907F\u958B\u8CBC\u5730\u91D1\u689D\uFF1B\u9577\u6309\u8DF3\u5F97\u8F03\u9AD8\u3002\u4E0A\u65B9\u969C\u7919\u5247\u7559\u5728\u5730\u9762\uFF0C\u6BCF\u5B58\u6D3B\u5169\u79D2\u53CD\u64CA\u3002",crazyHint_coins:"\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52D5\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002\u907F\u958B\u91D1\u5E63\u6D2A\u6D41\uFF0C\u7DA0\u5E63\u56DE\u5FA9 3 HP\uFF1B\u7D05\u8272\u7BAD\u982D\u5148\u9810\u544A\u3002",crazyHint_motion:"\u6383\u7DDA\u53EF\u5F9E\u516B\u500B\u65B9\u5411\u4F86\uFF1A\u85CD\u8272\u79FB\u52D5\u3001\u6A59\u8272\u505C\u4F4F\uFF0C\u4E5F\u53EF\u79FB\u51FA\u6383\u7DDA\uFF1B\u7A7A\u767D\u9375\u885D\u523A\u3002",crazyHint_vortex:"\u91D1\u5EAB\u6703\u5438\u5F15\u6838\u5FC3\uFF0C\u53CD\u65B9\u5411\u62B5\u6297\u4E26\u907F\u958B\u91D1\u5E63\u3002\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52D5\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002",crazyHint_roulette:"\u6BCF\u6CE2 1\u20133 \u689D\u9810\u544A\u5C04\u7DDA\uFF0C\u53EF\u80FD\u4F9D\u6B21\u767C\u5C04\u3002\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u907F\u958B\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002",crazyHint_pusher:"\u5DE6\u53F3\uFF0F\u9EDE\u9078\u4F4D\u7F6E\uFF0C\u7A7A\u767D\u9375\u6295\u5E63\u3002\u7DA0\u5E63\u56DE\u8840\u3001\u7D05\u5E63\xD72\u30017\u5E63\u62BD JP\uFF1BC \u6536\u4E0B\uFF0C\u5269 2 \u79D2\u6536\u5C3E\u3002",crazyJump:"\u8DF3\u8E8D",crazyJumpHint:"SPACE \u8DF3\u8E8D \xB7 \u9577\u6309\u8DF3\u9AD8",crazyKeepMoving:"\u2192 \u85CD\u8272\uFF1A\u4FDD\u6301\u79FB\u52D5",crazyStayStill:"\u25A0 \u6A59\u8272\uFF1A\u505C\u4F4F",crazyPusherJackpot:"Jackpot\uFF01",crazyPusherStock:"\u786C\u5E63",crazyPusherSettle:"\u505C\u6B62\u6295\u5E63 \xB7 \u6536\u5C3E\u4E2D",crazyPusherReward:"\u53CD\u64CA\u734E\u52F5 \xB7 \u672C\u56DE\u5408\u4E0D\u53D7\u50B7",crazyPusherAgain:"\u518D\u63A8\u4E00\u6B21",crazyInsertCoin:"\u6295\u5E63",crazyPusherRisk:"\u518D\u63A8\u6311\u6230\uFF1A60% \u4FDD\u7559\uFF0C\u5426\u5247\u672A\u6536\u734E\u52F5\u6E1B\u534A",crazyPusherSettled:"\u63A8\u5E63\u6311\u6230\u5DF2\u7D50\u7B97",crazyPusherBank:"\u63A8\u5E63\u734E\u52F5\u5DF2\u6536\u4E0B",crazyDashSound:"\u885D\u523A",crazyLaserSound:"\u8F2A\u76E4\u958B\u706B",crazyVictorySound:"\u91D1\u5E63\u7051\u843D",crazyCoinSound:"\u786C\u5E63",crazyPusherInsertSound:"\u6295\u5E63",crazyPusherDropSound:"\u786C\u5E63\u843D\u4E0B",crazyPusherStepSound:"\u843D\u5230\u4E0B\u5C64",crazyCardSound:"\u9078\u724C",crazyTileSound:"\u9078\u724C",crazyReelStop:"\u8F49\u8F2A\u505C\u4E0B",crazyLaunchSound:"\u767C\u5C04",crazyPegSound:"\u91D8\u677F\u53CD\u5F48",crazyFlipperSound:"\u5F48\u677F",crazyBossBattle:"Boss \u6230",crazyPreviewHint:"\u518D\u6309 Crazy \u9032\u5834\u3002100 HP \xB7 \u4E09\u968E\u6BB5 \xB7 \u7121\u5012\u6578\u7B49\u5F85\u3002",crazyDealer:"\u72C2\u5BB4\u838A\u5BB6",crazyOpening:"\u838A\u5BB6\u958B\u5C40\uFF0C\u6E96\u5099\u53CD\u64CA\u3002",crazyPhaseLabel:"\u968E\u6BB5",crazyPhase:"\u65B0\u968E\u6BB5\uFF01\u56DE\u5FA9\u8840\u91CF\u3002",crazySwitch:"\u65B0\u73A9\u6CD5\uFF0C\u63A5\u6230\uFF01",crazyHurt:"\u53D7\u50B7\uFF01",crazyHeal:"\u56DE\u8840",crazyHit:"Boss \u50B7\u5BB3",crazyGuard:"\u838A\u5BB6\u9632\u79A6 \xB7 \u7E7C\u7E8C\u53CD\u64CA",crazyCounter:"\u53CD\u64CA\u6210\u529F\uFF01",crazyAttackWarning:"\u547D\u4E2D\u963B\u6B62\u653B\u64CA\uFF01",crazyBossAttack:"\u838A\u5BB6\u653B\u64CA",crazyWrong:"\u914D\u5C0D\u932F\u8AA4",crazyMiss:"\u5931\u624B",crazyRiskLost:"\u5192\u96AA\u5931\u6557",crazyBankOrRisk:"\u6536\u4E0B\u9084\u662F\u7FFB\u500D\uFF1F",crazyTopout:"\u5835\u9802\uFF1A\u6263 20 HP",crazyBallLost:"\u6F0F\u7403",crazyCatWarning:"\u55B5\u2026\u2026\u8C93\u722A\u4F86\u4E86\uFF01",crazyCatSwipe:"\u8C93\u8C93\u6417\u86CB\uFF01",crazyTimeout:"\u838A\u5BB6\u6536\u684C\uFF0C\u6642\u9593\u8017\u76E1\u3002",crazyTimeoutRound:"\u672C\u56DE\u5408\u672A\u547D\u4E2D",crazyVictory:"\u64CA\u6557\u838A\u5BB6\uFF01",crazyDefeat:"\u8840\u91CF\u8017\u76E1",crazyStop:"\u505C\u8F2A",crazyPending:"\u5F85\u6536\u734E\u52F5",crazyPull:"\u62C9\u687F",crazyBankHint:"C\uFF0F\u6536\u4E0B\uFF1A\u9818\u734E\u4E26\u56DE\u5FA9 4 HP",crazyRiskHint:"\u7A7A\u767D\u9375\uFF0F\u7FFB\u500D\uFF1A\u6210\u529F 55%\uFF0C\u5931\u6557 \u221210 HP",crazyFindPair:"\u627E\u5169\u5F35",crazyPairHint:"\u9EDE\u9078\u724C\uFF0C\u6216\u5DE6\u53F3\u9078\u64C7\uFF0B\u7A7A\u767D\u9375",crazyAction:"\u884C\u52D5",crazyBank:"\u6536\u4E0B",crazyReset:"\u91CD\u9078",crazyMode_bridge:"\u67B6\u584A",crazyMode_sand:"\u6C99\u584A",crazyMode_slots:"\u89D2\u5B50\u6A5F",crazyMode_tiger:"\u8001\u864E\u6A5F",crazyMode_pachinko:"\u62CD\u6E05\u54E5",crazyMode_cards:"\u5564\u724C",crazyMode_mahjong:"\u9EBB\u5C07",crazyMode_breakout:"Brickout",crazyMode_pinball:"\u5F48\u73E0\u53F0",crazyMode_bbtan:"BBTAN",crazyHint_bridge:"\u6D88\u884C\u653B\u64CA\u3002\u5DE6\u53F3\u79FB\u52D5\uFF0CX\uFF0FZ \u65CB\u8F49\uFF0CC \u4FDD\u7559\uFF0C\u7A7A\u767D\u9375\u843D\u4E0B\u3002",crazyHint_sand:"\u540C\u8272\u6C99\u7C92\u9023\u901A\u5DE6\u53F3\u5169\u908A\u5373\u53EF\u653B\u64CA\uFF0C\u64CD\u4F5C\u540C\u67B6\u584A\u3002",crazyHint_slots:"\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u9010\u8F2A\u505C\u8F49\uFF0C\u914D\u6210\u5169\u500B\u6216\u4E09\u500B\u540C\u5716\u6848\u3002",crazyHint_tiger:"\u62C9\u687F\u7B49\u4E09\u8F2A\u505C\u4E0B\u3002\u4E2D\u734E\u5F8C\u300C\u6536\u4E0B\u300D\u9818\u734E\u56DE\u8840\uFF0C\u6216\u300C\u7FFB\u500D\u300D\u5192\u96AA\uFF1A55% \u6210\u529F\uFF0C\u5931\u6557\u5931\u734E\u6263 10 HP\u3002",crazyHint_pachinko:"\u5DE6\u53F3\u6216\u9EDE\u9078\u7784\u6E96\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u767C\u7403\u3002\u69FD\u4F4D\u53CA\u6578\u503C\u6BCF\u56DE\u5408\u96A8\u6A5F\uFF1B\u7DA0\u69FD\u56DE\u8840\u3001\u7D2B\u69FD\u653B\u64CA\u3001\u7D05\u69FD\u6263\u8840\u3002",crazyHint_cards:"\u5012\u6578\u5167\u9078\u6307\u5B9A\u6578\u5B57\u5C0D\u5B50\uFF01\u9EDE\u724C\u6216\u5DE6\u53F3\uFF0B\u9078\u724C\uFF1B\u9023\u7E8C\u7B54\u5C0D\u52A0\u50B7\u5BB3\uFF0C\u8D85\u6642\uFF0F\u932F\u724C\u6263 5 HP\u3002",crazyHint_mahjong:"\u5012\u6578\u5167\u914D\u51FA\u4E0A\u65B9\u6307\u5B9A\u724C\uFF0C\u6BCF\u5C0D\u6539\u8B8A\u76EE\u6A19\uFF01\u9EDE\u724C\u6216\u5DE6\u53F3\uFF0B\u9078\u724C\uFF1B\u9023\u7E8C\u914D\u5C0D\u52A0\u50B7\u5BB3\uFF0CC \u91CD\u9078\u3002",crazyHint_breakout:"\u5DE6\u53F3\u79FB\u52D5\u7403\u677F\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u767C\u7403\u3002\u6253\u788E\u65B9\u584A\u653B\u64CA\u3002",crazyHint_pinball:"\u9577\u6309\u5DE6\u53F3\u6258\u8D77\u5F48\u677F\u3002\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u767C\u7403\u3002",crazyHint_bbtan:"\u5DE6\u53F3\u7784\u6E96\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u767C\u5C04\u7403\u7FA4\u3002",crazyMode_dodge:"\u838A\u5BB6\u8FFD\u6BBA",crazyHint_dodge:"\u65B9\u5411\u9375\uFF0F\u89F8\u63A7\u65B9\u5411\u79FB\u52D5\uFF0C\u6216\u62D6\u66F3\u6838\u5FC3\u3002\u7A7A\u767D\u9375\uFF0F\u885D\u523A\u53EF\u77ED\u66AB\u7121\u6575\uFF1B\u907F\u958B\u7D05\u8272\u9810\u8B66\uFF0C\u627E\u7F3A\u53E3\uFF0C\u6BCF\u5B58\u6D3B\u5169\u79D2\u53CD\u64CA\u3002",crazyDash:"\u885D\u523A",crazyDashReady:"\u885D\u523A\u5C31\u7DD2 \xB7 SPACE",crazyDodgeHit:"\u88AB\u653B\u64CA\u547D\u4E2D",crazyRisk:"\u7FFB\u500D",crazyRolling:"\u8F49\u8F2A\u4E2D\u2026",crazyRiskRolling:"\u7FFB\u500D\u6311\u6230\u4E2D\u2026",crazyLeverPrompt:"\u6309\u300C\u62C9\u687F\u300D\u958B\u59CB\u8F49\u8F2A",crazyOdds:"\u7FFB\u500D\u6210\u529F 55% \xB7 \u5931\u6557\u5931\u53BB\u734E\u52F5 \u221210 HP",crazyPairTimeout:"\u9078\u724C\u8D85\u6642",crazyIncoming:"\u838A\u5BB6\u51FA\u62DB\uFF01",crazySelect:"\u9078\u724C",crazyUp:"\u4E0A",title:"\u67B6\u584A",back:"\u56DE\u4F5C\u54C1\u5217\u8868",marathon:"\u99AC\u62C9\u677E",sprint:"40 \u884C\u7AF6\u901F",settings:"\u8A2D\u5B9A",donate:"\u8D0A\u52A9",language:"\u8A9E\u8A00",volume:"\u97F3\u91CF",theme:"\u80CC\u666F",touch:"\u89F8\u5C4F",touchAuto:"\u81EA\u52D5",touchOn:"\u958B",touchOff:"\u95DC",dark:"\u9ED1\u5E95",light:"\u767D\u5E95",close:"\u8FD4\u56DE",hold:"\u4FDD\u7559",next:"\u4E0B\u4E00\u500B",score:"\u5206\u6578",lines:"\u6D88\u9664",stage:"\u968E\u6BB5",best:"\u6700\u9AD8",time:"\u6642\u9593",holdReady:"\u53EF\u4FDD\u7559",holdUsed:"\u843D\u4E0B\u524D\u4E0D\u80FD\u518D\u63DB",left:"\u5DE6",right:"\u53F3",rotate:"\u8F49",rotateLeft:"\u5DE6\u65CB",rotateRight:"\u53F3\u65CB",warning:"\u8B66\u6212",fever:"Fever",feverStart:"\u9023\u64CA\uFF0B\u7206\u7834 Fever\uFF01",danger:"\u5371\u6025",keep:"\u7559",drop:"\u843D",soft:"\u964D",fire:"\u5C04",start:"\u958B\u59CB",again:"\u518D\u4E00\u5C40",menu:"\u56DE\u9078\u55AE",resume:"\u7E7C\u7E8C",paused:"\u66AB\u505C",pauseHint:"P \u6216 Esc \u7E7C\u7E8C\u3002",teachBreakout:"\u5DE6\u53F3\u9375\u79FB\u52D5\u5E95\u677F\uFF0C\u628A\u7403\u63A5\u4F4F\u3002",arcadeSpeed:"\u7403\u901F \xD72",arcadeDouble:"\u7403 \xD72",arcadeTriple:"\u7403 \xD73",arcadeWide:"\u677F\u653E\u5927",arcadeNarrow:"\u677F\u7E2E\u5C0F",teachBbtan:"\u5DE6\u53F3\u9375\u7784\u6E96\uFF0C\u7A7A\u767D\u9375\u6216\u4E0A\u9375\u767C\u5C04\u3002",teachPinball:"\u5DE6\u9375\u62CD\u5DE6\u64CB\u677F\uFF0C\u53F3\u9375\u62CD\u53F3\u64CB\u677F\u3002",curseReverse:"\u5DE6\u53F3\u76F8\u53CD",curseBlind:"\u9ED1\u5C4F",curseRush:"\u52A0\u901F",curseNorotate:"\u4E0D\u80FD\u8F49",curseNoHold:"\u4E0D\u80FD\u4FDD\u7559",garbageAdded:"\u5783\u573E\u4E0A\u5347",garbageStable:"\u5783\u573E\u7A69\u56FA",topped:"\u5230\u9802\u4E86",cleared:"40 \u884C\u5B8C\u6210",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"\u5F48\u73E0\u53F0",rewardSand:"\u6D41\u6C99",teachSand:"\u4E8C\u5341\u6B21\u843D\u4E0B\u3002\u540C\u4E00\u984F\u8272\u9023\u6EFF\u6574\u500B\u6A6B\u5411\u5C31\u6574\u8272\u6D88\u53BB\u3002",tspin:"T\u65CB",tspinSingle:"T\u65CB\u55AE\u6D88",tspinDouble:"T\u65CB\u96D9\u6D88",tspinTriple:"T\u65CB\u4E09\u6D88",tspinMini:"\u5C0FT\u65CB",tspinMiniSingle:"\u5C0FT\u65CB\u55AE\u6D88",combo:"\u9023\u6D88",comboLines:"\u984D\u5916\u689D\u6578",sand:"\u6D41\u6C99",normal:"\u666E\u901A",hard:"\u56F0\u96E3",custom:"\u81EA\u8A02",pace:"\u901F\u5EA6",boards:"\u6392\u884C\u699C",gameBridge:"\u67B6\u584A",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"\u5F48\u73E0\u53F0",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"\u99AC\u62C9\u677E\u6703\u96A8\u968E\u6BB5\u7FFB\u8F49\uFF0C\u4E26\u5076\u767C Breakout\u3001BBTAN \u8207\u5F48\u73E0\u53F0\u300240 \u884C\u7AF6\u901F\u53EA\u8A08\u6642\u3002",menuHint:"\u65B9\u584A\u53EF\u4EE5\u67B6\u5728\u7A7A\u6D1E\u4E0A\u3002\u6D88\u5230\u9EC3\u9EDE\u624D\u7206\u70B8\uFF0C\u734E\u52F5\u6A21\u5F0F\u88E1\u70B8\u5F48\u6703\u9023\u74B0\u70B8\u3002",keys:"\u65B9\u5411\u9375\u79FB\u52D5\uFF0C\u4E0A / X \u8F49\uFF0CZ \u53CD\u8F49\uFF0C\u7A7A\u767D\u9375\u76F4\u843D\uFF0CC \u4FDD\u7559\uFF0CP \u66AB\u505C\u3002"},"zh-Hans":{dangerEffect:"\u5371\u9669\u63D0\u793A\u6548\u679C",screenShake:"\u6296\u52A8",noScreenShake:"\u4E0D\u6296\u52A8",crazyDifficulty:"\u96BE\u5EA6",gameMenu:"\u6E38\u620F\u83DC\u5355",bgmVolume:"BGM \u97F3\u91CF",sfxVolume:"\u58F0\u6548\u97F3\u91CF",quitToMenu:"\u9000\u51FA\u56DE\u4E3B\u83DC\u5355",quitConfirm:"\u786E\u5B9A\u9000\u51FA\uFF1F\u672C\u6B21\u6E38\u620F\u5C06\u4F1A\u7ED3\u675F\u3002",cancel:"\u53D6\u6D88",confirmExit:"\u786E\u5B9A\u9000\u51FA",crazyMenuLive:"\u6218\u6597\u7EE7\u7EED\u8FDB\u884C\uFF0C\u8FD9\u4E2A\u83DC\u5355\u4E0D\u4F1A\u6682\u505C Boss\u3002",crazyGreed:"\u8D2A\u5A6A",crazyCatPlayerWarning:"\u732B\u4F38\u722A\uFF01\u5DE6\u53F3\u8EB2\u907F\uFF01",crazyCatBossWarning:"\u732B\u76EF\u4E0A\u5E84\u5BB6\u2026\u2026",crazyCatGiftWarning:"\u732B\u5E26\u4E86\u9C7C\u5E72\uFF01",crazyCatBlocksWarning:"\u732B\u76EF\u4E0A\u65B9\u5757\u2026\u2026",crazyCatSmash:"\u732B\u6253\u788E\u65B9\u5757\uFF01",crazyCatBossScratch:"\u732B\u6293\u4F24 Boss",crazyCatPlayerScratch:"\u88AB\u732B\u6293\u4F24",crazyCatDodge:"\u8EB2\u8FC7\u732B\u722A\uFF01",crazyCatGift:"\u9C7C\u5E72\u56DE\u8840",crazySevenSins:"\u4E03\u5927\u7F6A",crazyChooseBoss:"\u4F9D\u5E8F\u6311\u6218\u4E03\u5927\u7F6A \xB7 \u901A\u5173\u540E\u63ED\u5F00\u4E0B\u4E00\u5173",crazyChallenge:"\u6311\u6230",crazyLocked:"\u672A\u89E3\u9501",crazyCleared:"\u5B8C\u6574\u901A\u95DC",sinPride:"\u50B2\u6162",sinEnvy:"\u5AC9\u5992",sinWrath:"\u6124\u6012",sinLust:"\u8272\u6B32",sinGluttony:"\u66B4\u98DF",sinSloth:"\u6020\u60F0",crazyGreedLore:"\u5E84\u5BB6\u60F3\u8981\u4E00\u5207\u3002\u6311\u6218\u8D2A\u5A6A\u7684\u8D4C\u5C40\u3002",crazyTrueName:"\u566C\u91D1\u5E84\u5BB6",crazyTrueForm:"\u8D2A\u5A6A\u771F\u8EAB\u30FB\u566C\u91D1\u5E84\u5BB6",crazyTransform:"\u9762\u5177\u788E\u88C2",crazyNeverEnough:"\u300C\u9084\u4E0D\u5920\u2026\u2026\u5168\u90E8\u90FD\u662F\u6211\u7684\u3002\u300D",crazyTransformSub:"\u91D1\u5E93\u5DF2\u5F00\uFF0C\u8FFD\u503A\u5F00\u59CB\u3002",crazyGreedBroken:"\u8D2A\u5A6A\uFF0C\u51FB\u7834\u3002",crazyVictorySub:"\u5E84\u5BB6\u7684\u91D1\u5E93\uFF0C\u7EC8\u4E8E\u4E0D\u518D\u5C5E\u4E8E\u4ED6\u3002",crazySkip:"\u8DF3\u8FC7",crazyContinue:"\u7EE7\u7EED",crazyClearUnlock:"\u5DF2\u89E3\u9501\u566C\u91D1\u5E84\u5BB6\u526A\u5F71",crazyHealth:"\u5269\u4F59\u8840\u91CF",crazyCounters:"\u53CD\u51FB\u6B21\u6578",crazyCoins:"\u6536\u96C6\u786C\u5E01",crazyDamageTaken:"\u627F\u53D7\u4F24\u5BB3",crazyHealed:"\u56DE\u590D\u8840\u91CF",crazyMode_jump:"\u8DF3\u8DC3\u8FFD\u503A",crazyMode_coins:"\u91D1\u5E01\u6D2A\u6D41",crazyMode_motion:"\u52A8\uFF0F\u505C\u5951\u7D04",crazyMode_vortex:"\u8D2A\u5A6A\u5438\u5F15",crazyMode_roulette:"\u8F2A\u76E4\u8FFD\u6BBA",crazyMode_pusher:"\u63A8\u5E01\u5956\u52B1",crazyHint_jump:"\u5DE6\u53F3\u79FB\u52A8\uFF0C\u7A7A\u767D\u9375\uFF0F\u8DF3\u8DC3\u907F\u5F00\u8CBC\u5730\u91D1\u689D\uFF1B\u957F\u6309\u8DF3\u5F97\u8F83\u9AD8\u3002\u4E0A\u65B9\u969C\u788D\u5219\u7559\u5728\u5730\u9762\uFF0C\u6BCF\u5B58\u6D3B\u4E24\u79D2\u53CD\u51FB\u3002",crazyHint_coins:"\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52A8\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002\u907F\u5F00\u91D1\u5E01\u6D2A\u6D41\uFF0C\u7DA0\u5E01\u56DE\u590D 3 HP\uFF1B\u7D05\u8272\u7BAD\u982D\u5148\u9810\u544A\u3002",crazyHint_motion:"\u626B\u7EBF\u53EF\u4ECE\u516B\u4E2A\u65B9\u5411\u6765\uFF1A\u84DD\u8272\u79FB\u52A8\u3001\u6A59\u8272\u505C\u4F4F\uFF0C\u4E5F\u53EF\u79FB\u51FA\u626B\u7EBF\uFF1B\u7A7A\u683C\u952E\u51B2\u523A\u3002",crazyHint_vortex:"\u91D1\u5E93\u6703\u5438\u5F15\u6838\u5FC3\uFF0C\u53CD\u65B9\u5411\u62B5\u6297\u4E26\u907F\u5F00\u91D1\u5E01\u3002\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52A8\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002",crazyHint_roulette:"\u6BCF\u6CE2 1\u20133 \u6761\u9884\u544A\u5C04\u7EBF\uFF0C\u53EF\u80FD\u4F9D\u6B21\u53D1\u5C04\u3002\u65B9\u5411\u952E\uFF0F\u62D6\u66F3\u907F\u5F00\uFF0C\u7A7A\u683C\u952E\u51B2\u523A\u3002",crazyHint_pusher:"\u5DE6\u53F3\uFF0F\u70B9\u9009\u4F4D\u7F6E\uFF0C\u7A7A\u683C\u952E\u6295\u5E01\u3002\u7EFF\u5E01\u56DE\u8840\u3001\u7EA2\u5E01\xD72\u30017\u5E01\u62BD JP\uFF1BC \u6536\u4E0B\uFF0C\u5269 2 \u79D2\u6536\u5C3E\u3002",crazyJump:"\u8DF3\u8DC3",crazyJumpHint:"SPACE \u8DF3\u8DC3 \xB7 \u957F\u6309\u8DF3\u9AD8",crazyKeepMoving:"\u2192 \u84DD\u8272\uFF1A\u4FDD\u6301\u79FB\u52A8",crazyStayStill:"\u25A0 \u6A59\u8272\uFF1A\u505C\u4F4F",crazyPusherJackpot:"Jackpot\uFF01",crazyPusherStock:"\u786C\u5E01",crazyPusherSettle:"\u505C\u6B62\u6295\u5E01 \xB7 \u6536\u5C3E\u4E2D",crazyPusherReward:"\u53CD\u51FB\u5956\u52B1 \xB7 \u672C\u56DE\u5408\u4E0D\u53D7\u4F24",crazyPusherAgain:"\u518D\u63A8\u4E00\u6B21",crazyInsertCoin:"\u6295\u5E01",crazyPusherRisk:"\u518D\u63A8\u6311\u6230\uFF1A60% \u4FDD\u7559\uFF0C\u5426\u5219\u672A\u6536\u5956\u52B1\u51CF\u534A",crazyPusherSettled:"\u63A8\u5E01\u6311\u6230\u5DF2\u7ED3\u7B97",crazyPusherBank:"\u63A8\u5E01\u5956\u52B1\u5DF2\u6536\u4E0B",crazyDashSound:"\u885D\u523A",crazyLaserSound:"\u8F2A\u76E4\u5F00\u706B",crazyVictorySound:"\u91D1\u5E01\u7051\u843D",crazyCoinSound:"\u786C\u5E01",crazyPusherInsertSound:"\u6295\u5E01",crazyPusherDropSound:"\u786C\u5E01\u843D\u4E0B",crazyPusherStepSound:"\u843D\u5230\u4E0B\u5C42",crazyCardSound:"\u9009\u724C",crazyTileSound:"\u9009\u724C",crazyReelStop:"\u8F49\u8F2A\u505C\u4E0B",crazyLaunchSound:"\u53D1\u5C04",crazyPegSound:"\u9489\u677F\u53CD\u5F39",crazyFlipperSound:"\u5F39\u677F",crazyBossBattle:"Boss \u6218",crazyPreviewHint:"\u518D\u6309 Crazy \u9032\u5834\u3002100 HP \xB7 \u4E09\u9636\u6BB5 \xB7 \u65E0\u5012\u6570\u7B49\u5F85\u3002",crazyDealer:"\u72C2\u5BB4\u838A\u5BB6",crazyOpening:"\u838A\u5BB6\u5F00\u5C40\uFF0C\u51C6\u5907\u53CD\u51FB\u3002",crazyPhaseLabel:"\u9636\u6BB5",crazyPhase:"\u65B0\u9636\u6BB5\uFF01\u56DE\u590D\u8840\u91CF\u3002",crazySwitch:"\u65B0\u73A9\u6CD5\uFF0C\u63A5\u6218\uFF01",crazyHurt:"\u53D7\u4F24\uFF01",crazyHeal:"\u56DE\u8840",crazyHit:"Boss \u4F24\u5BB3",crazyCounter:"\u53CD\u51FB\u6210\u529F\uFF01",crazyAttackWarning:"\u547D\u4E2D\u963B\u6B62\u653B\u51FB\uFF01",crazyBossAttack:"\u838A\u5BB6\u653B\u51FB",crazyWrong:"\u914D\u5BF9\u932F\u8BEF",crazyMiss:"\u5931\u624B",crazyRiskLost:"\u5192\u96AA\u5931\u8D25",crazyBankOrRisk:"\u6536\u4E0B\u8FD8\u662F\u7FFB\u500D\uFF1F",crazyTopout:"\u5835\u9802\uFF1A\u6263 20 HP",crazyBallLost:"\u6F0F\u7403",crazyCatWarning:"\u55B5\u2026\u2026\u732B\u722A\u6765\u4E86\uFF01",crazyCatSwipe:"\u732B\u732B\u6417\u86CB\uFF01",crazyTimeout:"\u838A\u5BB6\u6536\u684C\uFF0C\u65F6\u9593\u8017\u5C3D\u3002",crazyTimeoutRound:"\u672C\u56DE\u5408\u672A\u547D\u4E2D",crazyVictory:"\u51FB\u8D25\u838A\u5BB6\uFF01",crazyDefeat:"\u8840\u91CF\u8017\u5C3D",crazyStop:"\u505C\u8F2A",crazyPending:"\u5F85\u6536\u5956\u52F5",crazyPull:"\u62C9\u687F",crazyBankHint:"C\uFF0F\u6536\u4E0B\uFF1A\u9886\u5956\u5E76\u6062\u590D 4 HP",crazyRiskHint:"\u7A7A\u767D\u952E\uFF0F\u7FFB\u500D\uFF1A\u6210\u529F 55%\uFF0C\u5931\u8D25 \u221210 HP",crazyFindPair:"\u627E\u4E24\u5F20",crazyPairHint:"\u70B9\u9009\u724C\uFF0C\u6216\u5DE6\u53F3\u9009\u64C7\uFF0B\u7A7A\u767D\u9375",crazyAction:"\u884C\u52D5",crazyBank:"\u6536\u4E0B",crazyReset:"\u91CD\u9009",crazyMode_bridge:"\u67B6\u5757",crazyMode_sand:"\u6C99\u5757",crazyMode_slots:"\u89D2\u5B50\u673A",crazyMode_tiger:"\u8001\u864E\u673A",crazyMode_pachinko:"\u62CD\u6E05\u54E5",crazyMode_cards:"\u5564\u724C",crazyMode_mahjong:"\u9EBB\u5C06",crazyMode_breakout:"Brickout",crazyMode_pinball:"\u5F39\u73E0\u53F0",crazyMode_bbtan:"BBTAN",crazyHint_bridge:"\u6D88\u884C\u653B\u51FB\u3002\u5DE6\u53F3\u79FB\u52D5\uFF0CX\uFF0FZ \u65CB\u8F6C\uFF0CC \u4FDD\u7559\uFF0C\u7A7A\u767D\u9375\u843D\u4E0B\u3002",crazyHint_sand:"\u540C\u8272\u6C99\u7C92\u9023\u901A\u5DE6\u53F3\u4E24\u8FB9\u5373\u53EF\u653B\u51FB\uFF0C\u64CD\u4F5C\u540C\u67B6\u5757\u3002",crazyHint_slots:"\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u9010\u8F2A\u505C\u8F6C\uFF0C\u914D\u6210\u4E24\u4E2A\u6216\u4E09\u4E2A\u540C\u5716\u6848\u3002",crazyHint_tiger:"\u62C9\u6746\u7B49\u4E09\u8F6E\u505C\u4E0B\u3002\u4E2D\u5956\u540E\u300C\u6536\u4E0B\u300D\u9886\u5956\u56DE\u8840\uFF0C\u6216\u300C\u7FFB\u500D\u300D\u5192\u9669\uFF1A55% \u6210\u529F\uFF0C\u5931\u8D25\u5931\u5956\u6263 10 HP\u3002",crazyHint_pachinko:"\u5DE6\u53F3\u6216\u70B9\u9009\u7784\u51C6\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u53D1\u7403\u3002\u69FD\u4F4D\u53CA\u6570\u503C\u6BCF\u56DE\u5408\u968F\u673A\uFF1B\u7EFF\u69FD\u56DE\u8840\u3001\u7D2B\u69FD\u653B\u51FB\u3001\u7EA2\u69FD\u6263\u8840\u3002",crazyHint_cards:"\u5012\u6570\u5185\u9009\u6307\u5B9A\u6570\u5B57\u5BF9\u5B50\uFF01\u70B9\u724C\u6216\u5DE6\u53F3\uFF0B\u9009\u724C\uFF1B\u8FDE\u7EED\u7B54\u5BF9\u52A0\u4F24\u5BB3\uFF0C\u8D85\u65F6\uFF0F\u9519\u724C\u6263 5 HP\u3002",crazyHint_mahjong:"\u5012\u6570\u5185\u914D\u51FA\u4E0A\u65B9\u6307\u5B9A\u724C\uFF0C\u6BCF\u5BF9\u6539\u53D8\u76EE\u6807\uFF01\u70B9\u724C\u6216\u5DE6\u53F3\uFF0B\u9009\u724C\uFF1B\u8FDE\u7EED\u914D\u5BF9\u52A0\u4F24\u5BB3\uFF0CC \u91CD\u9009\u3002",crazyHint_breakout:"\u5DE6\u53F3\u79FB\u52D5\u7403\u677F\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u53D1\u7403\u3002\u6253\u788E\u65B9\u5757\u653B\u51FB\u3002",crazyHint_pinball:"\u9577\u6309\u5DE6\u53F3\u6258\u8D77\u5F39\u677F\u3002\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u53D1\u7403\u3002",crazyHint_bbtan:"\u5DE6\u53F3\u7784\u51C6\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u53D1\u5C04\u7403\u7FA4\u3002",crazyMode_dodge:"\u5E84\u5BB6\u8FFD\u6740",crazyHint_dodge:"\u65B9\u5411\u952E\uFF0F\u89E6\u63A7\u65B9\u5411\u79FB\u52A8\uFF0C\u6216\u62D6\u66F3\u6838\u5FC3\u3002\u7A7A\u767D\u952E\uFF0F\u51B2\u523A\u53EF\u77ED\u6682\u65E0\u654C\uFF1B\u907F\u5F00\u7EA2\u8272\u9884\u8B66\uFF0C\u627E\u7F3A\u53E3\uFF0C\u6BCF\u5B58\u6D3B\u4E24\u79D2\u53CD\u51FB\u3002",crazyDash:"\u51B2\u523A",crazyDashReady:"\u51B2\u523A\u5C31\u7EEA \xB7 SPACE",crazyDodgeHit:"\u88AB\u653B\u51FB\u547D\u4E2D",crazyRisk:"\u7FFB\u500D",crazyRolling:"\u8F6C\u8F6E\u4E2D\u2026",crazyRiskRolling:"\u7FFB\u500D\u6311\u6218\u4E2D\u2026",crazyLeverPrompt:"\u6309\u300C\u62C9\u6746\u300D\u5F00\u59CB\u8F6C\u8F6E",crazyOdds:"\u7FFB\u500D\u6210\u529F 55% \xB7 \u5931\u8D25\u5931\u53BB\u5956\u52B1 \u221210 HP",crazyPairTimeout:"\u9009\u724C\u8D85\u65F6",crazyIncoming:"\u5E84\u5BB6\u51FA\u62DB\uFF01",crazySelect:"\u9009\u724C",crazyUp:"\u4E0A",title:"\u67B6\u5757",back:"\u56DE\u4F5C\u54C1\u5217\u8868",marathon:"\u9A6C\u62C9\u677E",sprint:"40 \u884C\u7ADE\u901F",settings:"\u8BBE\u7F6E",donate:"\u8D5E\u52A9",language:"\u8BED\u8A00",volume:"\u97F3\u91CF",theme:"\u80CC\u666F",touch:"\u89E6\u5C4F",touchAuto:"\u81EA\u52A8",touchOn:"\u5F00",touchOff:"\u5173",dark:"\u9ED1\u5E95",light:"\u767D\u5E95",close:"\u8FD4\u56DE",hold:"\u4FDD\u7559",next:"\u4E0B\u4E00\u4E2A",score:"\u5206\u6570",lines:"\u6D88\u9664",stage:"\u9636\u6BB5",best:"\u6700\u9AD8",time:"\u65F6\u95F4",holdReady:"\u53EF\u4FDD\u7559",holdUsed:"\u843D\u4E0B\u524D\u4E0D\u80FD\u518D\u6362",left:"\u5DE6",right:"\u53F3",rotate:"\u8F6C",rotateLeft:"\u5DE6\u65CB",rotateRight:"\u53F3\u65CB",warning:"\u8B66\u6212",fever:"Fever",feverStart:"\u8FDE\u51FB\uFF0B\u7206\u7834 Fever\uFF01",danger:"\u5371\u6025",keep:"\u7559",drop:"\u843D",soft:"\u964D",fire:"\u5C04",start:"\u5F00\u59CB",again:"\u518D\u4E00\u5C40",menu:"\u56DE\u9009\u5355",resume:"\u7EE7\u7EED",paused:"\u6682\u505C",pauseHint:"P \u6216 Esc \u7EE7\u7EED\u3002",teachBreakout:"\u5DE6\u53F3\u952E\u79FB\u52A8\u5E95\u677F\uFF0C\u628A\u7403\u63A5\u4F4F\u3002",arcadeSpeed:"\u7403\u901F \xD72",arcadeDouble:"\u7403 \xD72",arcadeTriple:"\u7403 \xD73",arcadeWide:"\u677F\u653E\u5927",arcadeNarrow:"\u677F\u7F29\u5C0F",teachBbtan:"\u5DE6\u53F3\u952E\u7784\u51C6\uFF0C\u7A7A\u683C\u952E\u6216\u4E0A\u952E\u53D1\u5C04\u3002",teachPinball:"\u5DE6\u952E\u6253\u5DE6\u6321\u677F\uFF0C\u53F3\u952E\u6253\u53F3\u6321\u677F\u3002",curseReverse:"\u5DE6\u53F3\u76F8\u53CD",curseBlind:"\u9ED1\u5C4F",curseRush:"\u52A0\u901F",curseNorotate:"\u4E0D\u80FD\u8F6C",curseNoHold:"\u4E0D\u80FD\u4FDD\u7559",garbageAdded:"\u5783\u573E\u4E0A\u5347",garbageStable:"\u5783\u573E\u7A33\u56FA",topped:"\u5230\u9876\u4E86",cleared:"40 \u884C\u5B8C\u6210",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"\u5F39\u73E0\u53F0",rewardSand:"\u6D41\u6C99",teachSand:"\u843D\u4E0B\u4E8C\u5341\u6B21\u3002\u540C\u4E00\u989C\u8272\u8FDE\u6EE1\u6574\u4E2A\u6A2A\u5411\u5C31\u6574\u8272\u6D88\u53BB\u3002",tspin:"T\u65CB",tspinSingle:"T\u65CB\u5355\u6D88",tspinDouble:"T\u65CB\u53CC\u6D88",tspinTriple:"T\u65CB\u4E09\u6D88",tspinMini:"\u5C0FT\u65CB",tspinMiniSingle:"\u5C0FT\u65CB\u5355\u6D88",combo:"\u8FDE\u6D88",comboLines:"\u989D\u5916\u6761\u6570",sand:"\u6D41\u6C99",normal:"\u666E\u901A",hard:"\u56F0\u96BE",custom:"\u81EA\u5B9A\u4E49",pace:"\u901F\u5EA6",boards:"\u6392\u884C\u699C",gameBridge:"\u67B6\u5757",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"\u5F39\u73E0\u53F0",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"\u9A6C\u62C9\u677E\u4F1A\u968F\u9636\u6BB5\u7FFB\u8F6C\uFF0C\u5E76\u5076\u53D1 Breakout\u3001BBTAN \u4E0E\u5F39\u73E0\u53F0\u300240 \u884C\u7ADE\u901F\u53EA\u8BA1\u65F6\u3002",menuHint:"\u65B9\u5757\u53EF\u4EE5\u67B6\u5728\u7A7A\u6D1E\u4E0A\u3002\u6D88\u5230\u9EC4\u70B9\u624D\u7206\u70B8\uFF0C\u5956\u52B1\u6A21\u5F0F\u91CC\u70B8\u5F39\u4F1A\u8FDE\u73AF\u70B8\u3002",keys:"\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u4E0A / X \u8F6C\uFF0CZ \u53CD\u8F6C\uFF0C\u7A7A\u683C\u76F4\u843D\uFF0CC \u4FDD\u7559\uFF0CP \u6682\u505C\u3002"},en:{dangerEffect:"Danger effect",screenShake:"Shake",noScreenShake:"No shake",crazyDifficulty:"Difficulty",gameMenu:"Game menu",bgmVolume:"BGM volume",sfxVolume:"Sound effects",quitToMenu:"Exit to main menu",quitConfirm:"Exit this game? Your current run will end.",cancel:"Cancel",confirmExit:"Exit",crazyMenuLive:"The battle continues while this menu is open.",crazyGreed:"GREED",crazyCatPlayerWarning:"Cat claw! Move left/right!",crazyCatBossWarning:"Cat eyes the dealer\u2026",crazyCatGiftWarning:"Cat brought a treat!",crazyCatBlocksWarning:"Cat eyes the blocks\u2026",crazyCatSmash:"Cat smashed blocks!",crazyCatBossScratch:"Cat scratched the boss",crazyCatPlayerScratch:"Cat scratched you",crazyCatDodge:"Dodged the cat!",crazyCatGift:"Cat treat \xB7 HP",crazySevenSins:"Seven Deadly Sins",crazyChooseBoss:"Challenge the sins in order \xB7 Clear a boss to reveal the next",crazyChallenge:"Challenge",crazyLocked:"Locked",crazyCleared:"Cleared",sinPride:"Pride",sinEnvy:"Envy",sinWrath:"Wrath",sinLust:"Lust",sinGluttony:"Gluttony",sinSloth:"Sloth",crazyGreedLore:"The house wants everything. Challenge the dealer's greed.",crazyTrueName:"The Gilded Devourer",crazyTrueForm:"GREED \xB7 GILDED DEVOURER",crazyTransform:"THE MASK BREAKS",crazyNeverEnough:"\u201CNot enough\u2026 it is all mine.\u201D",crazyTransformSub:"The vault is open. Your debt is due.",crazyGreedBroken:"GREED DEFEATED",crazyVictorySub:"The vault no longer belongs to the dealer.",crazySkip:"Skip",crazyContinue:"Continue",crazyClearUnlock:"Gilded Devourer silhouette unlocked",crazyHealth:"Health left",crazyCounters:"Counters",crazyCoins:"Coins collected",crazyDamageTaken:"Damage taken",crazyHealed:"Healing",crazyMode_jump:"DEBT RUNNER",crazyMode_coins:"COIN BARRAGE",crazyMode_motion:"MOVE / STOP",crazyMode_vortex:"GREED VORTEX",crazyMode_roulette:"ROULETTE HUNT",crazyMode_pusher:"COIN PUSHER",crazyHint_jump:"Left/Right move; SPACE / Jump clears low gold bars. Hold to jump higher; stay grounded for high bars. Survive two seconds to counter.",crazyHint_coins:"Arrows / drag to move; SPACE dashes. Dodge gold, collect green for 3 HP. Red arrows warn first.",crazyHint_motion:"Sweeps come from eight directions: MOVE for blue, STOP for orange. Leave the line or SPACE to dash.",crazyHint_vortex:"Resist the vault pull and dodge coins. Arrows / drag to move; SPACE dashes.",crazyHint_roulette:"Dodge 1\u20133 preview lines; shots may fire in sequence. Arrows/drag move; SPACE dashes.",crazyHint_pusher:"Move/tap to aim; SPACE drops. Green heals, ruby \xD72, 7 spins JP. C banks; last 2s settle.",crazyJump:"Jump",crazyJumpHint:"SPACE jumps \xB7 Hold for height",crazyKeepMoving:"\u2192 BLUE: KEEP MOVING",crazyStayStill:"\u25A0 ORANGE: STOP",crazyPusherJackpot:"Jackpot\uFF01",crazyPusherStock:"Coins",crazyPusherSettle:"NO MORE COINS \xB7 SETTLING",crazyPusherReward:"EARNED REWARD \xB7 NO DAMAGE",crazyPusherAgain:"Push again",crazyInsertCoin:"Insert coin",crazyPusherRisk:"Extra push: 60% keep; otherwise halve unbanked reward",crazyPusherSettled:"Extra push settled",crazyPusherBank:"Coin reward banked",crazyDashSound:"Dash",crazyLaserSound:"Roulette fires",crazyVictorySound:"Coin shower",crazyCoinSound:"Coin",crazyPusherInsertSound:"Coin inserted",crazyPusherDropSound:"Coins collected",crazyPusherStepSound:"Coin reached lower shelf",crazyCardSound:"Card",crazyTileSound:"Tile",crazyReelStop:"Reel stopped",crazyLaunchSound:"Launch",crazyPegSound:"Peg bounce",crazyFlipperSound:"Flipper",crazyBossBattle:"Boss battle",crazyPreviewHint:"Tap Crazy again to enter. 100 HP \xB7 three phases \xB7 no countdowns.",crazyDealer:"THE MAD DEALER",crazyOpening:"The dealer opens the game.",crazyPhaseLabel:"PHASE",crazyPhase:"New phase! HP restored.",crazySwitch:"New game. Make your move.",crazyHurt:"Hit!",crazyHeal:"HP restored",crazyHit:"Boss damage",crazyGuard:"Guard up \xB7 keep countering",crazyCounter:"Attack interrupted!",crazyAttackWarning:"Hit to interrupt!",crazyBossAttack:"Dealer strike",crazyWrong:"Wrong pair",crazyMiss:"Miss",crazyRiskLost:"Risk lost",crazyBankOrRisk:"Bank or double?",crazyTopout:"Top blocked: \u221220 HP",crazyBallLost:"Ball lost",crazyCatWarning:"Meow\u2026 incoming paw!",crazyCatSwipe:"Cat mischief!",crazyTimeout:"The dealer closes the table.",crazyTimeoutRound:"No hits this round",crazyVictory:"DEALER DEFEATED",crazyDefeat:"OUT OF HP",crazyStop:"STOP REEL",crazyPending:"REWARD",crazyPull:"PULL THE LEVER",crazyBankHint:"C / Bank: collect and heal 4 HP",crazyRiskHint:"SPACE / Risk: 55% win; failure costs 10 HP",crazyFindPair:"MATCH TWO",crazyPairHint:"Tap tiles, or \u2190 \u2192 + SPACE",crazyAction:"Action",crazyBank:"Bank",crazyReset:"Reset",crazyMode_bridge:"BRIDGE",crazyMode_sand:"SANDTRIX",crazyMode_slots:"REEL STOP",crazyMode_tiger:"LUCKY LEVER",crazyMode_pachinko:"PACHINKO",crazyMode_cards:"CARDS",crazyMode_mahjong:"MAHJONG",crazyMode_breakout:"BRICKOUT",crazyMode_pinball:"PINBALL",crazyMode_bbtan:"BBTAN",crazyHint_bridge:"Clear lines to attack. Arrows move; X / Z turn; C holds; SPACE drops.",crazyHint_sand:"Connect one sand color across both edges to attack. Same block controls.",crazyHint_slots:"SPACE / Action stops each reel. Match two or three symbols.",crazyHint_tiger:"Pull, then wait for three reels to stop. Bank collects and heals; Risk doubles at 55% odds, or loses the reward and 10 HP.",crazyHint_pachinko:"Move or tap to aim; SPACE / Action launches. Bins and values vary each round: green heals, purple attacks, red hurts.",crazyHint_cards:"Match the requested rank before time runs out! Tap or Left/Right + Select. Streaks boost damage; wrong / timeout costs 5 HP.",crazyHint_mahjong:"Match the shown tile before time runs out; the target changes each pair! Tap or Left/Right + Select. Streaks boost damage; C resets selection.",crazyHint_breakout:"Move the paddle with \u2190 \u2192; SPACE launches. Breaking bricks attacks.",crazyHint_pinball:"Hold \u2190 \u2192 to lift the flippers. SPACE / Action launches.",crazyHint_bbtan:"Move \u2190 \u2192 to aim; SPACE / Action fires a volley.",crazyMode_dodge:"DEALER ASSAULT",crazyHint_dodge:"Arrows / touch directions move; drag the core to steer. SPACE / Dash grants brief invulnerability. Avoid red warnings, find gaps; survive two seconds to counter.",crazyDash:"Dash",crazyDashReady:"DASH READY \xB7 SPACE",crazyDodgeHit:"Attack hit",crazyRisk:"Risk \xD72",crazyRolling:"Spinning\u2026",crazyRiskRolling:"Double or lose\u2026",crazyLeverPrompt:"Press Pull to spin the reels",crazyOdds:"55% win \xB7 Lose reward & 10 HP on failure",crazyPairTimeout:"Pair deadline missed",crazyIncoming:"DEALER ATTACK!",crazySelect:"Select",crazyUp:"Up",title:"Bridge",back:"Back to works",marathon:"Marathon",sprint:"40-line sprint",settings:"Settings",donate:"Donate",language:"Language",volume:"Volume",theme:"Background",touch:"Touch",touchAuto:"Auto",touchOn:"On",touchOff:"Off",dark:"Black",light:"White",close:"Back",hold:"Hold",next:"Next",score:"Score",lines:"Lines",stage:"Stage",best:"Best",time:"Time",holdReady:"Hold ready",holdUsed:"Hold used",left:"Left",right:"Right",rotate:"Turn",rotateLeft:"Left turn",rotateRight:"Right turn",warning:"WARNING",fever:"Fever",feverStart:"Combo + Blast Fever!",danger:"CRITICAL",keep:"Hold",drop:"Drop",soft:"Down",fire:"Fire",start:"Start",again:"Again",menu:"Menu",resume:"Resume",paused:"Paused",pauseHint:"P or Esc to resume.",teachBreakout:"Left and right move the paddle. Keep the ball up.",arcadeSpeed:"Speed \xD72",arcadeDouble:"Balls \xD72",arcadeTriple:"Balls \xD73",arcadeWide:"Wide paddle",arcadeNarrow:"Narrow paddle",teachBbtan:"Left and right aim. Space or Up fires.",teachPinball:"Left flips the left flipper. Right flips the right one.",curseReverse:"Reversed",curseBlind:"Blackout",curseRush:"Rush",curseNorotate:"No turn",curseNoHold:"No hold",garbageAdded:"Garbage rises",garbageStable:"Stack stable",topped:"Topped out",cleared:"40 lines",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"Pinball",rewardSand:"Sand",teachSand:"Twenty drops. A color spanning the full width clears.",tspin:"T-Spin",tspinSingle:"T-Spin Single",tspinDouble:"T-Spin Double",tspinTriple:"T-Spin Triple",tspinMini:"T-Spin Mini",tspinMiniSingle:"Mini Single",combo:"Combo",comboLines:"Bonus lines",sand:"Sand",normal:"Normal",hard:"Hard",custom:"Custom",pace:"Speed",boards:"Ranks",gameBridge:"Bridge",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"Pinball",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"Marathon flips the well as stages climb, and sometimes opens Breakout, BBTAN, or pinball. Sprint is a 40-line timer.",menuHint:"Pieces can bridge gaps. A yellow dot explodes only when cleared, and bombs chain during bonus modes.",keys:"Arrows move, Up / X rotate, Z reverse, Space drops, C holds, P pauses."},ja:{dangerEffect:"\u5371\u967A\u6642\u306E\u8868\u793A",screenShake:"\u63FA\u3089\u3059",noScreenShake:"\u63FA\u3089\u3055\u306A\u3044",crazyDifficulty:"\u96E3\u6613\u5EA6",title:"\u30D6\u30EA\u30C3\u30B8",back:"\u4F5C\u54C1\u4E00\u89A7\u3078",marathon:"\u30DE\u30E9\u30BD\u30F3",sprint:"40\u30E9\u30A4\u30F3",settings:"\u8A2D\u5B9A",donate:"\u5BC4\u4ED8",language:"\u8A00\u8A9E",volume:"\u97F3\u91CF",theme:"\u80CC\u666F",touch:"\u30BF\u30C3\u30C1",touchAuto:"\u81EA\u52D5",touchOn:"\u30AA\u30F3",touchOff:"\u30AA\u30D5",dark:"\u9ED2",light:"\u767D",close:"\u623B\u308B",hold:"\u30DB\u30FC\u30EB\u30C9",next:"\u6B21",score:"\u30B9\u30B3\u30A2",lines:"\u6D88\u53BB",stage:"\u30B9\u30C6\u30FC\u30B8",best:"\u30D9\u30B9\u30C8",time:"\u30BF\u30A4\u30E0",holdReady:"\u30DB\u30FC\u30EB\u30C9\u53EF",holdUsed:"\u843D\u4E0B\u307E\u3067\u4EA4\u63DB\u4E0D\u53EF",left:"\u5DE6",right:"\u53F3",rotate:"\u56DE\u8EE2",rotateLeft:"\u5DE6\u56DE\u8EE2",rotateRight:"\u53F3\u56DE\u8EE2",warning:"\u8B66\u6212",fever:"Fever",feverStart:"\u30B3\u30F3\u30DC\uFF0B\u7206\u7834 Fever\uFF01",danger:"\u5371\u967A",keep:"\u4FDD",drop:"\u843D",soft:"\u4E0B",fire:"\u5C04",start:"\u30B9\u30BF\u30FC\u30C8",again:"\u3082\u3046\u4E00\u5C40",menu:"\u30E1\u30CB\u30E5\u30FC",resume:"\u7D9A\u3051\u308B",paused:"\u4E00\u6642\u505C\u6B62",pauseHint:"P \u304B Esc \u3067\u518D\u958B\u3002",teachBreakout:"\u5DE6\u53F3\u3067\u30D1\u30C9\u30EB\u3092\u52D5\u304B\u3057\u3001\u30DC\u30FC\u30EB\u3092\u53D7\u3051\u308B\u3002",arcadeSpeed:"\u901F\u5EA6 \xD72",arcadeDouble:"\u30DC\u30FC\u30EB \xD72",arcadeTriple:"\u30DC\u30FC\u30EB \xD73",arcadeWide:"\u30D1\u30C9\u30EB\u62E1\u5927",arcadeNarrow:"\u30D1\u30C9\u30EB\u7E2E\u5C0F",teachBbtan:"\u5DE6\u53F3\u3067\u72D9\u3044\u3001\u30B9\u30DA\u30FC\u30B9\u304B\u4E0A\u3067\u6483\u3064\u3002",teachPinball:"\u5DE6\u3067\u5DE6\u30D5\u30EA\u30C3\u30D1\u30FC\u3001\u53F3\u3067\u53F3\u30D5\u30EA\u30C3\u30D1\u30FC\u3002",curseReverse:"\u5DE6\u53F3\u53CD\u8EE2",curseBlind:"\u6697\u8EE2",curseRush:"\u52A0\u901F",curseNorotate:"\u56DE\u8EE2\u4E0D\u53EF",curseNoHold:"\u30DB\u30FC\u30EB\u30C9\u4E0D\u53EF",garbageAdded:"\u304A\u3058\u3083\u307E\u8FFD\u52A0",garbageStable:"\u843D\u4E0B\u7336\u4E88",topped:"\u4E0A\u307E\u3067\u57CB\u307E\u3063\u305F",cleared:"40\u30E9\u30A4\u30F3\u9054\u6210",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"\u30D4\u30F3\u30DC\u30FC\u30EB",rewardSand:"\u30B5\u30F3\u30C9",teachSand:"20\u56DE\u843D\u3068\u3059\u3002\u540C\u3058\u8272\u304C\u6A2A\u3044\u3063\u3071\u3044\u306B\u7E4B\u304C\u308B\u3068\u305D\u306E\u8272\u304C\u6D88\u3048\u308B\u3002",tspin:"T\u30B9\u30D4\u30F3",tspinSingle:"T\u30B9\u30D4\u30F3\u30B7\u30F3\u30B0\u30EB",tspinDouble:"T\u30B9\u30D4\u30F3\u30C0\u30D6\u30EB",tspinTriple:"T\u30B9\u30D4\u30F3\u30C8\u30EA\u30D7\u30EB",tspinMini:"T\u30B9\u30D4\u30F3\u30DF\u30CB",tspinMiniSingle:"\u30DF\u30CB\u30B7\u30F3\u30B0\u30EB",combo:"\u30B3\u30F3\u30DC",comboLines:"\u30DC\u30FC\u30CA\u30B9\u30E9\u30A4\u30F3",sand:"\u30B5\u30F3\u30C9",normal:"\u30CE\u30FC\u30DE\u30EB",hard:"\u30CF\u30FC\u30C9",custom:"\u30AB\u30B9\u30BF\u30E0",pace:"\u901F\u5EA6",boards:"\u30E9\u30F3\u30AD\u30F3\u30B0",gameBridge:"\u30D6\u30EA\u30C3\u30B8",gameTetris:"\u30C6\u30C8\u30EA\u30B9",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"\u30D4\u30F3\u30DC\u30FC\u30EB",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"\u30DE\u30E9\u30BD\u30F3\u306F\u30B9\u30C6\u30FC\u30B8\u3054\u3068\u306B\u76E4\u9762\u304C\u53CD\u8EE2\u3057\u3001\u3068\u304D\u3069\u304D Breakout\u3001BBTAN\u3001\u30D4\u30F3\u30DC\u30FC\u30EB\u304C\u59CB\u307E\u308B\u300240\u30E9\u30A4\u30F3\u306F\u30BF\u30A4\u30E0\u30A2\u30BF\u30C3\u30AF\u3002",menuHint:"\u30D6\u30ED\u30C3\u30AF\u306F\u7A74\u306E\u4E0A\u306B\u6A4B\u3092\u67B6\u3051\u3089\u308C\u308B\u3002\u9EC4\u70B9\u306F\u6D88\u3057\u305F\u3068\u304D\u3060\u3051\u7206\u767A\u3057\u3001\u30DC\u30FC\u30CA\u30B9\u4E2D\u306F\u7206\u5F3E\u304C\u9023\u9396\u3059\u308B\u3002",keys:"\u77E2\u5370\u3067\u79FB\u52D5\u3001\u4E0A / X \u3067\u56DE\u8EE2\u3001Z \u3067\u9006\u56DE\u8EE2\u3001Space \u3067\u843D\u4E0B\u3001C \u3067\u30DB\u30FC\u30EB\u30C9\u3001P \u3067\u4E00\u6642\u505C\u6B62\u3002"},ko:{dangerEffect:"\uC704\uD5D8 \uC54C\uB9BC \uD6A8\uACFC",screenShake:"\uD754\uB4E4\uB9BC",noScreenShake:"\uD754\uB4E4\uB9BC \uC5C6\uC74C",crazyDifficulty:"\uB09C\uC774\uB3C4",title:"\uBE0C\uB9AC\uC9C0",back:"\uC791\uD488 \uBAA9\uB85D",marathon:"\uB9C8\uB77C\uD1A4",sprint:"40\uC904 \uC2A4\uD53C\uB4DC",settings:"\uC124\uC815",donate:"\uD6C4\uC6D0",language:"\uC5B8\uC5B4",volume:"\uC74C\uB7C9",theme:"\uBC30\uACBD",touch:"\uD130\uCE58",touchAuto:"\uC790\uB3D9",touchOn:"\uCF1C\uAE30",touchOff:"\uB044\uAE30",dark:"\uAC80\uC815",light:"\uD770\uC0C9",close:"\uB3CC\uC544\uAC00\uAE30",hold:"\uD640\uB4DC",next:"\uB2E4\uC74C",score:"\uC810\uC218",lines:"\uC9C0\uC6B4 \uC904",stage:"\uB2E8\uACC4",best:"\uCD5C\uACE0",time:"\uC2DC\uAC04",holdReady:"\uD640\uB4DC \uAC00\uB2A5",holdUsed:"\uCC29\uC9C0 \uC804\uC5D0\uB294 \uB2E4\uC2DC \uBC14\uAFC0 \uC218 \uC5C6\uC74C",left:"\uC67C",right:"\uC624\uB978",rotate:"\uD68C\uC804",rotateLeft:"\uC67C\uCABD \uD68C\uC804",rotateRight:"\uC624\uB978\uCABD \uD68C\uC804",warning:"\uC8FC\uC758",fever:"Fever",feverStart:"\uCF64\uBCF4\uFF0B\uD3ED\uBC1C Fever!",danger:"\uC704\uD5D8",keep:"\uD640\uB4DC",drop:"\uB099\uD558",soft:"\uC544\uB798",fire:"\uBC1C\uC0AC",start:"\uC2DC\uC791",again:"\uD55C \uD310 \uB354",menu:"\uBA54\uB274",resume:"\uACC4\uC18D",paused:"\uC77C\uC2DC\uC815\uC9C0",pauseHint:"P \uB610\uB294 Esc\uB85C \uACC4\uC18D\uD569\uB2C8\uB2E4.",teachBreakout:"\uC88C\uC6B0\uB85C \uD328\uB4E4\uC744 \uC6C0\uC9C1\uC5EC \uACF5\uC744 \uBC1B\uC544 \uC8FC\uC138\uC694.",arcadeSpeed:"\uC18D\uB3C4 \xD72",arcadeDouble:"\uACF5 \xD72",arcadeTriple:"\uACF5 \xD73",arcadeWide:"\uD328\uB4E4 \uD655\uB300",arcadeNarrow:"\uD328\uB4E4 \uCD95\uC18C",teachBbtan:"\uC88C\uC6B0\uB85C \uC870\uC900\uD558\uACE0, \uC2A4\uD398\uC774\uC2A4\uB098 \uC704\uCABD\uC73C\uB85C \uBC1C\uC0AC\uD569\uB2C8\uB2E4.",teachPinball:"\uC67C\uCABD\uC740 \uC67C\uCABD \uD50C\uB9AC\uD37C, \uC624\uB978\uCABD\uC740 \uC624\uB978\uCABD \uD50C\uB9AC\uD37C.",curseReverse:"\uC88C\uC6B0 \uBC18\uC804",curseBlind:"\uC554\uC804",curseRush:"\uAC00\uC18D",curseNorotate:"\uD68C\uC804 \uAE08\uC9C0",curseNoHold:"\uD640\uB4DC \uAE08\uC9C0",garbageAdded:"\uC4F0\uB808\uAE30 \uC0C1\uC2B9",garbageStable:"\uB099\uD558 \uC720\uC608",topped:"\uAF2D\uB300\uAE30\uAE4C\uC9C0 \uCC3C\uC2B5\uB2C8\uB2E4",cleared:"40\uC904 \uC644\uB8CC",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"\uD540\uBCFC",rewardSand:"\uC0CC\uB4DC",teachSand:"20\uBC88 \uB5A8\uC5B4\uC9C4\uB2E4. \uAC19\uC740 \uC0C9\uC774 \uAC00\uB85C \uC804\uCCB4\uB97C \uC787\uBA74 \uADF8 \uC0C9\uC774 \uC0AC\uB77C\uC9C4\uB2E4.",tspin:"T\uC2A4\uD540",tspinSingle:"T\uC2A4\uD540 \uC2F1\uAE00",tspinDouble:"T\uC2A4\uD540 \uB354\uBE14",tspinTriple:"T\uC2A4\uD540 \uD2B8\uB9AC\uD50C",tspinMini:"T\uC2A4\uD540 \uBBF8\uB2C8",tspinMiniSingle:"\uBBF8\uB2C8 \uC2F1\uAE00",combo:"\uCF64\uBCF4",comboLines:"\uBCF4\uB108\uC2A4 \uC904",sand:"\uC0CC\uB4DC",normal:"\uB178\uBA40",hard:"\uD558\uB4DC",custom:"\uCEE4\uC2A4\uD140",pace:"\uC18D\uB3C4",boards:"\uC21C\uC704",gameBridge:"\uBE0C\uB9AC\uC9C0",gameTetris:"\uD14C\uD2B8\uB9AC\uC2A4",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"\uD540\uBCFC",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"\uB9C8\uB77C\uD1A4\uC740 \uB2E8\uACC4\uB9C8\uB2E4 \uD310\uC774 \uB4A4\uC9D1\uD788\uACE0, \uAC00\uB054 Breakout, BBTAN, \uD540\uBCFC\uC774 \uC5F4\uB9BD\uB2C8\uB2E4. 40\uC904\uC740 \uC2DC\uAC04 \uAE30\uB85D\uC785\uB2C8\uB2E4.",menuHint:"\uBE14\uB85D\uC740 \uAD6C\uBA4D \uC704\uC5D0 \uAC78\uCCD0 \uB193\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB178\uB780 \uC810\uC740 \uC9C0\uC6CC\uC57C \uD130\uC9C0\uACE0, \uBCF4\uB108\uC2A4\uC5D0\uC11C\uB294 \uD3ED\uD0C4\uC774 \uC5F0\uC1C4\uD569\uB2C8\uB2E4.",keys:"\uD654\uC0B4\uD45C \uC774\uB3D9, \uC704 / X \uD68C\uC804, Z \uC5ED\uD68C\uC804, Space \uB099\uD558, C \uD640\uB4DC, P \uC77C\uC2DC\uC815\uC9C0."},pt:{dangerEffect:"Efeito de perigo",screenShake:"Vibra\xE7\xE3o",noScreenShake:"Sem vibra\xE7\xE3o",crazyDifficulty:"Dificuldade",title:"Ponte",back:"Voltar aos trabalhos",marathon:"Maratona",sprint:"40 linhas",settings:"Defini\xE7\xF5es",donate:"Doar",language:"Idioma",volume:"Volume",theme:"Fundo",touch:"Toque",touchAuto:"Auto",touchOn:"Ligado",touchOff:"Desligado",dark:"Preto",light:"Branco",close:"Voltar",hold:"Reserva",next:"Seguinte",score:"Pontos",lines:"Linhas",stage:"Fase",best:"Recorde",time:"Tempo",holdReady:"Pode reservar",holdUsed:"J\xE1 reservada",left:"Esq.",right:"Dir.",rotate:"Girar",rotateLeft:"Girar esquerda",rotateRight:"Girar direita",warning:"ATEN\xC7\xC3O",fever:"Fever",feverStart:"Fever de combo e explos\xE3o!",danger:"PERIGO",keep:"Reter",drop:"Cair",soft:"Descer",fire:"Atirar",start:"Come\xE7ar",again:"Outra vez",menu:"Menu",resume:"Continuar",paused:"Pausa",pauseHint:"P ou Esc para continuar.",teachBreakout:"Esquerda e direita movem a raquete. Segura a bola.",arcadeSpeed:"Velocidade \xD72",arcadeDouble:"Bolas \xD72",arcadeTriple:"Bolas \xD73",arcadeWide:"Raquete maior",arcadeNarrow:"Raquete menor",teachBbtan:"Esquerda e direita miram. Espa\xE7o ou cima dispara.",teachPinball:"Esquerda sobe o flipper esquerdo. Direita sobe o direito.",curseReverse:"Invertido",curseBlind:"Apag\xE3o",curseRush:"Pressa",curseNorotate:"Sem girar",curseNoHold:"Sem reservar",garbageAdded:"Lixo sobe",garbageStable:"Pilha est\xE1vel",topped:"Chegou ao topo",cleared:"40 linhas",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"Pinball",rewardSand:"Areia",teachSand:"Vinte quedas. Uma cor ligada na largura toda some.",tspin:"T-Spin",tspinSingle:"T-Spin Single",tspinDouble:"T-Spin Double",tspinTriple:"T-Spin Triple",tspinMini:"T-Spin Mini",tspinMiniSingle:"Mini Single",combo:"Combo",comboLines:"Linhas extras",sand:"Areia",normal:"Normal",hard:"Dif\xEDcil",custom:"Personalizado",pace:"Velocidade",boards:"Ranking",gameBridge:"Bridge",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"Pinball",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"A maratona vira o po\xE7o em cada fase e \xE0s vezes abre Breakout, BBTAN ou pinball. As 40 linhas s\xE3o contra o tempo.",menuHint:"As pe\xE7as podem fazer ponte sobre buracos. O ponto amarelo s\xF3 explode quando \xE9 apagado, e no b\xF3nus as bombas encadeiam.",keys:"Setas movem, Cima / X roda, Z inverte, Espa\xE7o larga, C reserva, P pausa."},es:{dangerEffect:"Efecto de peligro",screenShake:"Temblor",noScreenShake:"Sin temblor",crazyDifficulty:"Dificultad",title:"Puente",back:"Volver a los trabajos",marathon:"Marat\xF3n",sprint:"40 l\xEDneas",settings:"Ajustes",donate:"Donar",language:"Idioma",volume:"Volumen",theme:"Fondo",touch:"T\xE1ctil",touchAuto:"Auto",touchOn:"S\xED",touchOff:"No",dark:"Negro",light:"Blanco",close:"Volver",hold:"Reserva",next:"Siguiente",score:"Puntos",lines:"L\xEDneas",stage:"Fase",best:"Mejor",time:"Tiempo",holdReady:"Puedes reservar",holdUsed:"Ya reservada",left:"Izq.",right:"Der.",rotate:"Girar",rotateLeft:"Giro izquierdo",rotateRight:"Giro derecho",warning:"ALERTA",fever:"Fever",feverStart:"\xA1Fever de combo y explosi\xF3n!",danger:"PELIGRO",keep:"Guardar",drop:"Caer",soft:"Bajar",fire:"Disparar",start:"Empezar",again:"Otra vez",menu:"Men\xFA",resume:"Seguir",paused:"Pausa",pauseHint:"P o Esc para seguir.",teachBreakout:"Izquierda y derecha mueven la pala. No dejes caer la bola.",arcadeSpeed:"Velocidad \xD72",arcadeDouble:"Bolas \xD72",arcadeTriple:"Bolas \xD73",arcadeWide:"Pala grande",arcadeNarrow:"Pala peque\xF1a",teachBbtan:"Izquierda y derecha apuntan. Espacio o arriba dispara.",teachPinball:"Izquierda sube la aleta izquierda. Derecha sube la derecha.",curseReverse:"Invertido",curseBlind:"Oscuro",curseRush:"Prisa",curseNorotate:"Sin girar",curseNoHold:"Sin reserva",garbageAdded:"Sube basura",garbageStable:"Pila estable",topped:"Lleg\xF3 arriba",cleared:"40 l\xEDneas",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"Pinball",rewardSand:"Arena",teachSand:"Veinte ca\xEDdas. Un color unido en todo el ancho desaparece.",tspin:"T-Spin",tspinSingle:"T-Spin Single",tspinDouble:"T-Spin Double",tspinTriple:"T-Spin Triple",tspinMini:"T-Spin Mini",tspinMiniSingle:"Mini Single",combo:"Combo",comboLines:"L\xEDneas extra",sand:"Arena",normal:"Normal",hard:"Dif\xEDcil",custom:"Personalizado",pace:"Velocidad",boards:"R\xE9cords",gameBridge:"Bridge",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"Pinball",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"El marat\xF3n gira el pozo en cada fase y a veces abre Breakout, BBTAN o pinball. Las 40 l\xEDneas son contra el reloj.",menuHint:"Las piezas pueden tender un puente sobre huecos. El punto amarillo explota solo al borrarse, y en los bonus las bombas encadenan.",keys:"Flechas mueven, Arriba / X gira, Z invierte, Espacio suelta, C reserva, P pausa."}},Dd={crazyMode_vault:"\u91D1\u5EAB\u8DD1\u8DF3",crazyVaultStart:"60 \u79D2\uFF1A\u8DD1\u8DF3\u64BF\u5E63\uFF0C\u5E36\u56DE\u9280\u884C\u5B58\u5165 360",crazyVaultCleared:"\u91D1\u5EAB\u7834\u89E3\uFF01Boss \u89E3\u9664\u9396\u8840",crazyVaultFailed:"\u91D1\u5EAB\u5931\u6557 \xB7 \u6263 80 HP",crazyVaultMove:"\u79FB\u52D5"},Ud={envyIntro:["\u7ABA\u8996\u4E4B\u5B50","The Watching Child"],envyLore:["\u5E7D\u6797\u88E1\u7684\u5B69\u5B50\uFF0C\u7ABA\u8996\u8457\u4E0D\u5C6C\u65BC\u81EA\u5DF1\u7684\u5E78\u798F\u3002","A child in the dark woods watches happiness that belongs to others."],pridePuzzleFailed:["\u5DF4\u5225\u5854\u5931\u6557","Tower challenge failed"],prideRedFailed:["\u7D05\u93E1\u6311\u6230\u5931\u6557","Red mirror challenge failed"],prideShardHit:["\u788E\u93E1\u547D\u4E2D","Mirror shard hit"],"crazyMode_pride-escape":["\u9003\u96E2\u50B2\u6162\u4E4B\u5854","Escape the Tower of Pride"],"crazyHint_pride-escape":["\u5DE6\u53F3\u627E\u843D\u8173\u9EDE\uFF0C\u7A7A\u767D\u9375\uFF0F\u4E0B\u9375\u4E0B\u964D\uFF0C\u9003\u5230 100 \u5C64","Move left/right to land safely; Space / down drops; reach floor 100"],"crazyHint_pride-doodle":["\u81EA\u52D5\u5F48\u8DF3\uFF1B\u5DE6\u53F3\u79FB\u52D5\uFF0C\u7A7A\u767D\u9375 \u5C04\u64CA\u5E7B\u5F71","Auto-jump; move left/right and shoot phantoms with Space"],"crazyHint_pride-tower":["\u5C0D\u6E96\u9802\u5C64\u518D\u653E\u5C64\uFF1B\u758A\u6EFF\u76EE\u6A19\u624D\u904E\u95DC","Align with the top floor, then drop; reach the target height"],"crazyHint_pride-shard-puzzle":["\u65CB\u8F49\u788E\u7247\u62FC\u56DE\u93E1\u5B50\uFF1BC\uFF0FShift \u63D0\u793A\u6263 1 \u79D2","Rotate the fragments to restore the mirror; C / Shift hints cost 1 second"],"crazyHint_pride-truth-trial":["\u8FFD\u8E64\u771F\u93E1\uFF1BC\uFF0FShift \u91CD\u770B\u6263 2 \u79D2","Track the real mirror; C / Shift replays cost 2 seconds"],"crazyHint_pride-mirror-maze":["\u65CB\u93E1\u5C0E\u5149\uFF0C\u6536\u96C6 3 \u7C92\u6C34\u6676\uFF1BC\uFF0FShift \u9A57\u8B49","Turn mirrors to collect 3 crystals; C / Shift checks the route"],"crazyHint_pride-kaleidoscope":["\u63C0\u76F8\u540C\u91D1\u9EDE\u5716\u6848\uFF0C\u518D\u6309 \u7A7A\u767D\u9375 \u53CD\u653B","Find the matching gold dots, then press Space to counter"],prideRedUnlocked:["\u7D05\u93E1\u9396\u8840\u89E3\u9664\uFF01","The red mirror's health lock is broken!"],"crazyHint_pride-shard-storm":["\u4E09\u8ECC\u5230\u91D1\u7DDA\u6642\u6309 \u5DE6\uFF0F\u7A7A\u767D\u9375\uFF0F\u53F3\uFF1Bbest\uFF0Fgood \u53CD\u653B\uFF0Cdamage \u6263\u8840","Three lanes: Left / Space / Right; best / good reflect, damage hurts"],"crazyHint_pride-nested":["\u9023\u63A5\u5169\u500B\u5C01\u5370\u5230\u51FA\u53E3\uFF1BC\uFF0FShift \u9A57\u8B49\uFF0C\u7A7A\u767D\u9375 \u53CD\u653B","Connect both seals to the exit; C / Shift checks, Space counters"],"crazyHint_pride-gaze-up":["\u4E09\u93E1\u9396\u5B9A\u5F8C\u96E2\u958B\u5C04\u7DDA\uFF1B\u93E1\u4EAE\u6642 \u7A7A\u767D\u9375 \u53CD\u653B","Dodge the locked mirror beams; Space counters glowing mirrors"],"crazyHint_pride-reflect-up":["\u7A7A\u767D\u9375 \u5C04\u6307\u5B9A\u93E1\uFF1B\u79FB\u52D5\u907F\u958B\u53CD\u5C04\u5F48","Space shoots the marked mirror; move to dodge reflections"],"crazyHint_pride-crown-up":["\u907F\u958B\u6CE2\u7D0B\u6216 \u7A7A\u767D\u9375 \u8DF3\uFF1B\u93E1\u4EAE\u6642\u53EF\u53CD\u653B","Dodge shockwaves or jump with Space; counter glowing mirrors"],"crazyHint_pride-red-survival":["\u81EA\u52D5\u5C04\u64CA\u3001\u62FE\u9053\u5177\uFF1B\u7A7A\u767D\u9375 \u96C6\u706B\uFF0CC\uFF0FShift \u7CBE\u6E96","Auto-fire and collect power-ups; Space bursts, C / Shift precision"],prideMirrorName:["\u93E1\u4E4B\u5316\u8EAB","Mirror Incarnation"],sinPride:["\u50B2\u6162","Pride"],prideIntro:["\u93E1\u5BAE\u4E4B\u738B","King of the mirror palace"],prideLore:["\u93E1\u5BAE\u4E4B\u738B\u4FEF\u8996\u4E00\u5207\u3002\u6311\u6230\u4ED6\u7684\u50B2\u6162\u738B\u6B0A\u3002","The king looks down upon all. Challenge his arrogant rule."],prideDefeated:["\u50B2\u6162\u64CA\u7834\uFF01","Pride defeated!"],prideCleared:["\u50B2\u6162\u5DF2\u901A\u95DC","Pride cleared"],prideRetry:["\u93E1\u4E2D\u5C0D\u6C7A\u91CD\u8A66 \xB7 Boss \u9396\u8840","Mirror duel retry \xB7 Boss locked"],prideDuelFailed:["\u93E1\u4E2D\u5C0D\u6C7A\u5931\u6557 \xB7 \u6263 80 HP","Mirror duel failed \xB7 80 HP penalty"],prideWrongCrown:["\u5047\u7687\u51A0\uFF01","False crown!"],prideAttackHit:["\u738B\u6B0A\u653B\u64CA\uFF01","Royal strike!"],"crazyMode_pride-mirror-match":["\u93E1\u50CF\u914D\u5C0D","Mirror match"],"crazyMode_pride-crown-choice":["\u52A0\u5195\u6289\u64C7","Crown choice"],"crazyMode_pride-lianliankan":["\u9023\u9023\u770B","Tile connect"],"crazyMode_pride-gaze":["\u738B\u4E4B\u8511\u8996","Royal contempt"],"crazyMode_pride-mirror":["\u93E1\u50CF\u53CD\u5C04","Mirror reflection"],"crazyMode_pride-crown-shock":["\u52A0\u5195\u885D\u64CA","Coronation shock"],"crazyMode_pride-mirror-duel":["\u93E1\u4E2D\u5C0D\u6C7A","Mirror duel"],"crazyHint_pride-mirror-match":["\u5DE6\u53F3\u5404\u63C0\u4E00\u5F35\uFF0C\u914D\u5C0D\u76F8\u540C\u5716\u6848","Match a card from each side"],"crazyHint_pride-crown-choice":["\u6BD4\u8F03\u539F\u77F3\uFF0C\u63C0\u5BF6\u77F3\u95CA\u5EA6\u76F8\u540C\u7684\u7687\u51A0","Choose the crown whose gem matches the reference"],"crazyHint_pride-lianliankan":["\u9023\u63A5\u76F8\u540C\u5716\u6848\uFF0C\u8DEF\u5F91\u6700\u591A\u5169\u5F4E","Connect matching tiles with at most two turns"],"crazyHint_pride-gaze":["\u907F\u958B\u96D9\u773C\u6383\u5C04\uFF1B\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52D5","Move with arrows or drag to dodge the gaze"],"crazyHint_pride-mirror":["\u7A7A\u767D\u9375 \u5C04\u64CA\u6307\u5B9A\u93E1\uFF1B\u907F\u958B\u53CD\u5C04\u5F48\u5E55","SPACE shoots the marked mirror; dodge reflected bullets"],"crazyHint_pride-crown-shock":["\u7A7A\u767D\u9375 \u8DF3\u8E8D\uFF1B\u907F\u958B\u843D\u9EDE\u53CA\u885D\u64CA\u6CE2","SPACE jumps; avoid crown landings and shockwaves"],"crazyHint_pride-mirror-duel":["\u8E29\u4EAE\u93E1\u5EA7 \u2192 \u96E2\u958B \u2192 \u7A7A\u767D\u9375\u5C01\u4F4F\u5EF6\u9072\u93E1\u50CF","Charge a seal, leave, then press Space to catch your delayed mirror"]},Nd={controlsGuide:["\u63A7\u5236\u6309\u9215\u8AAA\u660E","\u63A7\u5236\u6309\u94AE\u8BF4\u660E","Controls","\u64CD\u4F5C\u8AAC\u660E","\uC870\uC791 \uC548\uB0B4","Controlos","Controles"],controlsMove:["\u79FB\u52D5\uFF0F\u9078\u64C7","\u79FB\u52A8\uFF0F\u9009\u62E9","Move / select","\u79FB\u52D5\uFF0F\u9078\u629E","\uC774\uB3D9 / \uC120\uD0DD","Mover / selecionar","Mover / seleccionar"],controlsUp:["\u65CB\u8F49\uFF0F\u5411\u4E0A","\u65CB\u8F6C\uFF0F\u5411\u4E0A","Rotate / up","\u56DE\u8EE2\uFF0F\u4E0A","\uD68C\uC804 / \uC704","Rodar / cima","Girar / arriba"],controlsRotate:["\u65B9\u584A\u53F3\u65CB\uFF0F\u5DE6\u65CB","\u65B9\u5757\u53F3\u65CB\uFF0F\u5DE6\u65CB","Blocks: rotate right / left","\u30D6\u30ED\u30C3\u30AF\uFF1A\u53F3\u56DE\u8EE2\uFF0F\u5DE6\u56DE\u8EE2","\uBE14\uB85D: \uC624\uB978\uCABD / \uC67C\uCABD \uD68C\uC804","Blocos: rodar \xE0 direita / esquerda","Bloques: girar a la derecha / izquierda"],controlsDown:["\u7DE9\u964D\uFF0F\u5411\u4E0B","\u7F13\u964D\uFF0F\u5411\u4E0B","Soft drop / down","\u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7\uFF0F\u4E0B","\uC18C\uD504\uD2B8 \uB4DC\uB86D / \uC544\uB798","Descida suave / baixo","Ca\xEDda suave / abajo"],controlsMain:["\u4E0B\u843D\uFF0F\u4E3B\u52D5\u4F5C","\u4E0B\u843D\uFF0F\u4E3B\u52A8\u4F5C","Drop / main action","\u843D\u4E0B\uFF0F\u4E3B\u64CD\u4F5C","\uB099\uD558 / \uC8FC \uB3D9\uC791","Largar / a\xE7\xE3o principal","Caer / acci\xF3n principal"],controlsAlt:["\u4FDD\u7559\uFF0F\u526F\u52D5\u4F5C","\u4FDD\u7559\uFF0F\u526F\u52A8\u4F5C","Hold / secondary action","\u30DB\u30FC\u30EB\u30C9\uFF0F\u526F\u64CD\u4F5C","\uD640\uB4DC / \uBCF4\uC870 \uB3D9\uC791","Reservar / a\xE7\xE3o secund\xE1ria","Reservar / acci\xF3n secundaria"],controlsOpenMenu:["\u958B\u555F\u83DC\u55AE","\u6253\u5F00\u83DC\u5355","Open menu","\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F","\uBA54\uB274 \uC5F4\uAE30","Abrir menu","Abrir men\xFA"],controlsTouch:["\u89F8\u63A7\u6309\u9215\u529F\u80FD\u76F8\u540C\uFF1B\u5C0F\u904A\u6232\u4EE5\u6309\u9215\u7576\u524D\u540D\u7A31\u70BA\u6E96\u3002","\u89E6\u63A7\u6309\u94AE\u529F\u80FD\u76F8\u540C\uFF1B\u5C0F\u6E38\u620F\u4EE5\u6309\u94AE\u5F53\u524D\u540D\u79F0\u4E3A\u51C6\u3002","Touch buttons have the same functions; follow the current labels in minigames.","\u30BF\u30C3\u30C1\u30DC\u30BF\u30F3\u3082\u540C\u3058\u6A5F\u80FD\u3002\u30DF\u30CB\u30B2\u30FC\u30E0\u3067\u306F\u73FE\u5728\u306E\u30DC\u30BF\u30F3\u8868\u793A\u306B\u5F93\u3063\u3066\u304F\u3060\u3055\u3044\u3002","\uD130\uCE58 \uBC84\uD2BC\uB3C4 \uAC19\uC740 \uAE30\uB2A5\uC785\uB2C8\uB2E4. \uBBF8\uB2C8\uAC8C\uC784\uC5D0\uC11C\uB294 \uD604\uC7AC \uBC84\uD2BC \uD45C\uC2DC\uB97C \uB530\uB974\uC138\uC694.","Os bot\xF5es no ecr\xE3 t\xEAm as mesmas fun\xE7\xF5es; nos minijogos, siga as etiquetas atuais.","Los botones t\xE1ctiles tienen las mismas funciones; en minijuegos, sigue las etiquetas actuales."]};function Bd(n,e){return Nd[e]?Nd[e][Math.max(0,Wi.indexOf(n))]:Ud[e]?Ud[e][n?.startsWith("zh")?0:1]:Dd[e]?Dd[e]:(Wc[n]||Wc["zh-Hant"])[e]??Wc.en[e]??e}var zd=["\u7E41\u9AD4\u4E2D\u6587","\u7B80\u4F53\u4E2D\u6587","English","\u65E5\u672C\u8A9E","\uD55C\uAD6D\uC5B4","Portugu\xEAs","Espa\xF1ol"],ax={cleared:["\u5DF2\u901A\u95DC","\u5DF2\u901A\u5173","Cleared","\u30AF\u30EA\u30A2\u6E08\u307F","\uD074\uB9AC\uC5B4","Conclu\xEDdo","Completado"],campaignSettings:["\u8A2D\u5B9A","\u8BBE\u7F6E","Settings","\u8A2D\u5B9A","\uC124\uC815","Defini\xE7\xF5es","Ajustes"],campaignNote:["\u6CBF\u7528\u4E3B\u904A\u6232\u8A2D\u5B9A\uFF0C\u4F9D\u5E8F\u6311\u6230\u4E03\u5927\u7F6A\u3002","\u6CBF\u7528\u4E3B\u6E38\u620F\u8BBE\u7F6E\uFF0C\u4F9D\u5E8F\u6311\u6218\u4E03\u5927\u7F6A\u3002","Use your game settings and challenge the sins in order.","\u672C\u7DE8\u306E\u8A2D\u5B9A\u3092\u4F7F\u3044\u3001\u4E03\u3064\u306E\u5927\u7F6A\u306B\u9806\u306B\u6311\u307F\u307E\u3059\u3002","\uAC8C\uC784 \uC124\uC815\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB300\uC8C4\uC5D0 \uCC28\uB840\uB85C \uB3C4\uC804\uD558\uC138\uC694.","Use as defini\xE7\xF5es do jogo e desafie os pecados por ordem.","Usa los ajustes del juego y desaf\xEDa a los pecados en orden."],mainMenu:["\u8FD4\u56DE\u4E3B\u9078\u55AE","\u8FD4\u56DE\u4E3B\u83DC\u5355","Main menu","\u30E1\u30CB\u30E5\u30FC\u3078","\uBA54\uC778 \uBA54\uB274","Menu principal","Men\xFA principal"],ranks:["\u6392\u884C\u699C","\u6392\u884C\u699C","Rankings","\u30E9\u30F3\u30AD\u30F3\u30B0","\uC21C\uC704","Classifica\xE7\xF5es","Clasificaciones"],quality:["\u6E32\u67D3\u54C1\u8CEA","\u6E32\u67D3\u8D28\u91CF","Rendering quality","\u63CF\u753B\u54C1\u8CEA","\uB80C\uB354\uB9C1 \uD488\uC9C8","Qualidade gr\xE1fica","Calidad gr\xE1fica"],qualityAuto:["\u81EA\u52D5","\u81EA\u52A8","Auto","\u81EA\u52D5","\uC790\uB3D9","Autom\xE1tico","Autom\xE1tico"],qualityStandard:["\u6A19\u6E96","\u6807\u51C6","Standard","\u6A19\u6E96","\uD45C\uC900","Normal","Est\xE1ndar"],qualityLight:["\u8F15\u91CF","\u8F7B\u91CF","Lightweight","\u8EFD\u91CF","\uACBD\uB7C9","Leve","Ligera"],crazyContinue:["\u7E7C\u7E8C","\u7EE7\u7EED","Continue","\u7D9A\u3051\u308B","\uACC4\uC18D","Continuar","Continuar"],crazySevenSins:["\u4E03\u5927\u7F6A","\u4E03\u5927\u7F6A","Seven Deadly Sins","\u4E03\u3064\u306E\u5927\u7F6A","\uC77C\uACF1 \uAC00\uC9C0 \uB300\uC8C4","Sete Pecados Capitais","Siete Pecados Capitales"],crazyDifficulty:["\u96E3\u5EA6","\u96BE\u5EA6","Difficulty","\u96E3\u6613\u5EA6","\uB09C\uC774\uB3C4","Dificuldade","Dificultad"],normal:["Normal","Normal","Normal","Normal","Normal","Normal","Normal"],hard:["Hard","Hard","Hard","Hard","Hard","Hard","Hard"],close:["\u8FD4\u56DE","\u8FD4\u56DE","Back","\u623B\u308B","\uB3CC\uC544\uAC00\uAE30","Voltar","Volver"],crazyLocked:["\u5C01\u5370","\u5C01\u5370","Sealed","\u5C01\u5370","\uBD09\uC778","Selado","Sellado"],crazyGreed:["\u8CAA\u5A6A","\u8D2A\u5A6A","Greed","\u5F37\u6B32","\uD0D0\uC695","Gan\xE2ncia","Codicia"],sinPride:["\u50B2\u6162","\u50B2\u6162","Pride","\u50B2\u6162","\uC624\uB9CC","Orgulho","Soberbia"],sinEnvy:["\u5AC9\u5992","\u5AC9\u5992","Envy","\u5AC9\u59AC","\uC9C8\uD22C","Inveja","Envidia"],sinLust:["\u8272\u617E","\u8272\u6B32","Lust","\u8272\u6B32","\uC0C9\uC695","Lux\xFAria","Lujuria"],sinGluttony:["\u66B4\u98DF","\u66B4\u98DF","Gluttony","\u66B4\u98DF","\uD3ED\uC2DD","Gula","Gula"],sinSloth:["\u6020\u60F0","\u6020\u60F0","Sloth","\u6020\u60F0","\uB098\uD0DC","Pregui\xE7a","Pereza"],sinWrath:["\u61A4\u6012","\u6124\u6012","Wrath","\u61A4\u6012","\uBD84\uB178","Ira","Ira"],crazyDealer:["\u72C2\u5BB4\u838A\u5BB6","\u72C2\u5BB4\u5E84\u5BB6","THE MAD DEALER","\u72C2\u5BB4\u306E\u30C7\u30A3\u30FC\u30E9\u30FC","\uAD11\uB780\uC758 \uB51C\uB7EC","O CROUPIER LOUCO","EL CRUPIER LOCO"],crazyGreedLore:["\u838A\u5BB6\u60F3\u8981\u4E00\u5207\u3002\u6311\u6230\u8CAA\u5A6A\u7684\u8CED\u5C40\u3002","\u5E84\u5BB6\u60F3\u8981\u4E00\u5207\u3002\u6311\u6218\u8D2A\u5A6A\u7684\u8D4C\u5C40\u3002","The house wants everything. Challenge the dealer's greed.","\u80F4\u5143\u306F\u3059\u3079\u3066\u3092\u6B32\u3057\u304C\u308B\u3002\u5F37\u6B32\u306A\u8CED\u3051\u306B\u6311\u3081\u3002","\uB51C\uB7EC\uB294 \uBAA8\uB4E0 \uAC83\uC744 \uC6D0\uD569\uB2C8\uB2E4. \uD0D0\uC695\uC758 \uB3C4\uBC15\uC5D0 \uB3C4\uC804\uD558\uC138\uC694.","A casa quer tudo. Desafie a gan\xE2ncia do croupier.","La banca lo quiere todo. Desaf\xEDa la codicia del crupier."],demo:["\u7368\u7ACB\u8A66\u73A9","\u72EC\u7ACB\u8BD5\u73A9","PREVIEW","\u4F53\u9A13\u7248","\uCCB4\uD5D8\uD310","DEMO","DEMO"],insert:["\u63D2\u5165\u5361\u5E36 \u2197","\u63D2\u5165\u5361\u5E26 \u2197","Insert cartridge \u2197","\u30AB\u30BB\u30C3\u30C8\u3092\u633F\u3059 \u2197","\uCE74\uD2B8\uB9AC\uC9C0 \uC0BD\uC785 \u2197","Inserir cartucho \u2197","Insertar cartucho \u2197"],rotate:["\u65CB\u8F49\u5361\u5E36","\u65CB\u8F6C\u5361\u5E26","Rotate cartridge","\u30AB\u30BB\u30C3\u30C8\u56DE\u8EE2","\uCE74\uD2B8\uB9AC\uC9C0 \uD68C\uC804","Rodar cartucho","Girar cartucho"],reset:["\u64FA\u6B63","\u6446\u6B63","Reset","\u30EA\u30BB\u30C3\u30C8","\uCD08\uAE30\uD654","Repor","Reiniciar"],eject:["\u8FD4\u56DE\u9078\u95DC","\u8FD4\u56DE\u9009\u5173","Back to selection","\u9078\u629E\u306B\u623B\u308B","\uC120\uD0DD\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30","Voltar \xE0 sele\xE7\xE3o","Volver a selecci\xF3n"],zoomIn:["\u653E\u5927","\u653E\u5927","Zoom in","\u62E1\u5927","\uD655\uB300","Ampliar","Acercar"],zoomOut:["\u7E2E\u5C0F","\u7F29\u5C0F","Zoom out","\u7E2E\u5C0F","\uCD95\uC18C","Reduzir","Alejar"],settings:["\u8A66\u73A9\u8A2D\u5B9A","\u8BD5\u73A9\u8BBE\u7F6E","Preview settings","\u4F53\u9A13\u7248\u8A2D\u5B9A","\uCCB4\uD5D8\uD310 \uC124\uC815","Op\xE7\xF5es da demo","Opciones de demo"],reduced:["\u6E1B\u5C11\u52D5\u614B\u6548\u679C","\u51CF\u5C11\u52A8\u6001\u6548\u679C","Reduce motion","\u52D5\u304D\u3092\u6E1B\u3089\u3059","\uB3D9\uC791 \uC904\uC774\uAE30","Reduzir movimento","Reducir movimiento"],sound:["\u63D2\u5361\uFF0F\u958B\u6A5F\u97F3\u6548","\u63D2\u5361\uFF0F\u5F00\u673A\u97F3\u6548","Insert / boot sounds","\u633F\u5165\u30FB\u8D77\u52D5\u97F3","\uC0BD\uC785 / \uC2DC\uC791 \uC18C\uB9AC","Som de inser\xE7\xE3o / arranque","Sonido de inserci\xF3n / inicio"],theme:["\u5916\u89C0","\u5916\u89C2","Appearance","\u5916\u89B3","\uC678\uAD00","Aspeto","Aspecto"],light:["\u767D\u8272\u6A21\u5F0F","\u767D\u8272\u6A21\u5F0F","Light mode","\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9","\uB77C\uC774\uD2B8 \uBAA8\uB4DC","Modo claro","Modo claro"],dark:["\u9ED1\u8272\u6A21\u5F0F","\u9ED1\u8272\u6A21\u5F0F","Dark mode","\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9","\uB2E4\uD06C \uBAA8\uB4DC","Modo escuro","Modo oscuro"],note:["\u7368\u7ACB\u8A66\u73A9\uFF0C\u4E0D\u5BEB\u6B63\u5F0F\u9032\u5EA6\u3002\u5916\u89C0\u53CA\u8A9E\u8A00\u6CBF\u7528\u4E3B\u904A\u6232\uFF1B\u6B64\u8655\u5207\u63DB\u53EA\u5F71\u97FF\u793A\u7BC4\u3002","\u72EC\u7ACB\u8BD5\u73A9\uFF0C\u4E0D\u5199\u6B63\u5F0F\u8FDB\u5EA6\u3002\u5916\u89C2\u53CA\u8BED\u8A00\u6CBF\u7528\u4E3B\u6E38\u620F\uFF1B\u6B64\u5904\u5207\u6362\u53EA\u5F71\u54CD\u793A\u8303\u3002","Independent preview; no saved progress. Theme and language follow the main game; demo changes stay here.","\u4F53\u9A13\u7248\u3002\u9032\u884C\u306F\u4FDD\u5B58\u3055\u308C\u307E\u305B\u3093\u3002\u5916\u89B3\u3068\u8A00\u8A9E\u306F\u672C\u7DE8\u3092\u5F15\u304D\u7D99\u304E\u3001\u5909\u66F4\u306F\u4F53\u9A13\u7248\u306E\u307F\u3067\u3059\u3002","\uB3C5\uB9BD \uCCB4\uD5D8\uD310\uC73C\uB85C \uC9C4\uD589\uC744 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uBCF8 \uAC8C\uC784\uC758 \uD14C\uB9C8\uC640 \uC5B8\uC5B4\uB97C \uB530\uB974\uBA70 \uBCC0\uACBD\uC740 \uB370\uBAA8\uC5D0\uB9CC \uC801\uC6A9\uB429\uB2C8\uB2E4.","Demo independente sem guardar progresso. Tema e idioma seguem o jogo; altera\xE7\xF5es ficam nesta demo.","Demo independiente sin guardar progreso. Tema e idioma siguen el juego; los cambios quedan en esta demo."],help:["\u62D6\u52D5\u5361\u5E36\u81F3\u6A5F\u9802\u653E\u624B\u3002\u53F3\u9375\uFF0FShift \u62D6\u52D5\u6216\u65CB\u8F49\u6A21\u5F0F\u8F49\u52D5\uFF1B\u6EFE\u8F2A\uFF0F\u96D9\u6307\u53CA \xB1 \u7E2E\u653E\u3002\u2190 \u2192 \u63DB\u5361\uFF0C\u7A7A\u767D\u63D2\u5165\u3002","\u62D6\u52A8\u5361\u5E26\u81F3\u673A\u9876\u677E\u624B\u3002\u53F3\u952E\uFF0FShift \u62D6\u52A8\u6216\u65CB\u8F6C\u6A21\u5F0F\u8F6C\u52A8\uFF1B\u6EDA\u8F6E\uFF0F\u53CC\u6307\u53CA \xB1 \u7F29\u653E\u3002\u2190 \u2192 \u6362\u5361\uFF0C\u7A7A\u683C\u63D2\u5165\u3002","Drag to the top slot and release. Right-drag / Shift-drag or rotation mode to turn; wheel / pinch or \xB1 to zoom. \u2190 \u2192 select; Space inserts.","\u4E0A\u306E\u633F\u5165\u53E3\u307E\u3067\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u96E2\u3057\u307E\u3059\u3002\u53F3\u30C9\u30E9\u30C3\u30B0\u30FBShift\u30FB\u56DE\u8EE2\u30E2\u30FC\u30C9\u3067\u56DE\u8EE2\u3002\u30DB\u30A4\u30FC\u30EB\u30FB\u30D4\u30F3\u30C1\u30FB\xB1\u3067\u62E1\u7E2E\u3002\u2190 \u2192 \u9078\u629E\u3001Space \u633F\u5165\u3002","\uC0C1\uB2E8 \uC2AC\uB86F\uC73C\uB85C \uB4DC\uB798\uADF8 \uD6C4 \uB193\uC73C\uC138\uC694. \uC6B0\uD074\uB9AD / Shift \uB4DC\uB798\uADF8 \uB610\uB294 \uD68C\uC804 \uBAA8\uB4DC\uB85C \uD68C\uC804, \uD720 / \uB450 \uC190\uAC00\uB77D / \xB1\uB85C \uD655\uB300\xB7\uCD95\uC18C. \u2190 \u2192 \uC120\uD0DD, Space \uC0BD\uC785.","Arraste at\xE9 \xE0 ranhura superior e solte. Bot\xE3o direito / Shift ou modo de rota\xE7\xE3o para rodar; roda / pin\xE7a / \xB1 para zoom. \u2190 \u2192 escolher; Space inserir.","Arrastra hasta la ranura superior y suelta. Bot\xF3n derecho / Shift o modo de giro para girar; rueda / pellizco / \xB1 para zoom. \u2190 \u2192 elegir; Space insertar."],ready:["\u9078\u4E00\u76D2\u5361\u5E36\uFF0C\u958B\u59CB\u6311\u6230\u3002","\u9009\u4E00\u76D2\u5361\u5E26\uFF0C\u5F00\u59CB\u6311\u6218\u3002","Choose a cartridge and challenge its Boss.","\u30AB\u30BB\u30C3\u30C8\u3092\u9078\u3093\u3067\u6311\u6226\u3002","\uCE74\uD2B8\uB9AC\uC9C0\uB97C \uACE8\uB77C \uB3C4\uC804\uD558\uC138\uC694.","Escolha um cartucho e desafie o Boss.","Elige un cartucho y desaf\xEDa al Boss."],sealed:["\u9019\u76D2\u4ECD\u88AB\u5C01\u5370\u3002","\u8FD9\u76D2\u4ECD\u88AB\u5C01\u5370\u3002","This cartridge is sealed.","\u3053\u306E\u30AB\u30BB\u30C3\u30C8\u306F\u5C01\u5370\u4E2D\u3002","\uC544\uC9C1 \uBD09\uC778\uB41C \uCE74\uD2B8\uB9AC\uC9C0\uC785\uB2C8\uB2E4.","Este cartucho est\xE1 selado.","Este cartucho est\xE1 sellado."],align:["\u8ACB\u5148\u64FA\u6B63\u5361\u5E36\uFF0C\u518D\u5C0D\u6E96\u63D2\u69FD\u3002","\u8BF7\u5148\u6446\u6B63\u5361\u5E26\uFF0C\u518D\u5BF9\u51C6\u63D2\u69FD\u3002","Straighten the cartridge and align it with the slot.","\u30AB\u30BB\u30C3\u30C8\u3092\u6B63\u9762\u306B\u5411\u3051\u3066\u633F\u5165\u53E3\u3078\u3002","\uCE74\uD2B8\uB9AC\uC9C0\uB97C \uBC14\uB974\uAC8C \uC815\uB82C\uD558\uC138\uC694.","Endireite e alinhe com a ranhura.","Endereza y alinea con la ranura."],reading:["\u5361\u5E36\u8B80\u53D6\u4E2D\u2026","\u5361\u5E26\u8BFB\u53D6\u4E2D\u2026","Reading cartridge\u2026","\u30AB\u30BB\u30C3\u30C8\u8AAD\u8FBC\u4E2D\u2026","\uCE74\uD2B8\uB9AC\uC9C0 \uC77D\uB294 \uC911\u2026","A ler o cartucho\u2026","Leyendo cartucho\u2026"],boot:["\u6B63\u5728\u9023\u63A5\u6311\u6230\u2026","\u6B63\u5728\u8FDE\u63A5\u6311\u6218\u2026","Connecting to the challenge\u2026","\u6311\u6226\u3078\u63A5\u7D9A\u4E2D\u2026","\uB3C4\uC804\uC73C\uB85C \uC5F0\uACB0 \uC911\u2026","A entrar no desafio\u2026","Entrando al desaf\xEDo\u2026"],loading:["\u958B\u555F\u5361\u5E36\u4E4B\u5323\u2026","\u6253\u5F00\u5361\u5E26\u4E4B\u5323\u2026","Opening cartridge archive\u2026","\u30AB\u30BB\u30C3\u30C8\u306E\u5323\u3092\u958B\u304F\u2026","\uCE74\uD2B8\uB9AC\uC9C0 \uBCF4\uAD00\uD568 \uC5EC\uB294 \uC911\u2026","A abrir os cartuchos\u2026","Abriendo los cartuchos\u2026"],fallback:["\u6B64\u88DD\u7F6E\u4E0D\u652F\u63F4\u7ACB\u9AD4\u6548\u679C\uFF0C\u4ECD\u53EF\u6309\u63D2\u5361\u9032\u5165 Boss\u3002","\u6B64\u8BBE\u5907\u4E0D\u652F\u6301\u7ACB\u4F53\u6548\u679C\uFF0C\u4ECD\u53EF\u6309\u63D2\u5361\u8FDB\u5165 Boss\u3002","3D is unavailable; the insert button still launches each Boss.","\u7ACB\u4F53\u8868\u793A\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002\u633F\u5165\u30DC\u30BF\u30F3\u3067\u6311\u6226\u3067\u304D\u307E\u3059\u3002","3D\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC9C0\uB9CC \uC0BD\uC785 \uBC84\uD2BC\uC73C\uB85C \uB3C4\uC804\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","3D indispon\xEDvel; o bot\xE3o ainda inicia cada Boss.","3D no disponible; el bot\xF3n inicia cada Boss."],error:["\u672A\u80FD\u8F09\u5165\u95DC\u5361\uFF0C\u8ACB\u8FD4\u56DE\u9078\u95DC\u518D\u8A66\u3002","\u672A\u80FD\u52A0\u8F7D\u5173\u5361\uFF0C\u8BF7\u8FD4\u56DE\u9009\u5173\u91CD\u8BD5\u3002","Could not load the encounter. Return to selection and retry.","\u8AAD\u8FBC\u5931\u6557\u3002\u9078\u629E\u306B\u623B\u3063\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC120\uD0DD\uC73C\uB85C \uB3CC\uC544\uAC00 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.","Falha ao carregar. Volte e tente novamente.","No se pudo cargar. Vuelve y reintenta."],gluttonyIntro:["\u7121\u98FD\u5EDA\u5E2B","\u65E0\u9971\u53A8\u5E08","The Ravenous Chef","\u6E80\u305F\u3055\u308C\u306C\u6599\u7406\u4EBA","\uAD76\uC8FC\uB9B0 \uC694\uB9AC\uC0AC","O Cozinheiro Insaci\xE1vel","El Chef Insaciable"],gluttonyLore:["\u5DE8\u5927\u9910\u684C\u3001\u98DF\u7269\u5C71\u8207\u6DF1\u6DF5\u5DE8\u53E3\u3002\u586B\u4E0D\u6EFF\u7684\u7A7A\u865B\u3002","\u5DE8\u5927\u9910\u684C\u3001\u98DF\u7269\u5C71\u4E0E\u6DF1\u6E0A\u5DE8\u53E3\u3002\u586B\u4E0D\u6EE1\u7684\u7A7A\u865A\u3002","An immense table, mountains of food, and hunger without end.","\u5DE8\u5927\u306A\u98DF\u5353\u3068\u98DF\u3079\u7269\u306E\u5C71\u3002\u6E80\u305F\u3055\u308C\u306C\u7A7A\u865A\u3002","\uAC70\uB300\uD55C \uC2DD\uD0C1\uACFC \uC74C\uC2DD\uC758 \uC0B0. \uB05D\uC5C6\uB294 \uD5C8\uAE30.","Uma mesa imensa, montanhas de comida e fome sem fim.","Una mesa inmensa, monta\xF1as de comida y hambre sin fin."],lustIntro:["\u96F2\u4E0A\u4E18\u6BD4\u7279","\u4E91\u4E0A\u4E18\u6BD4\u7279","Cupid in the Clouds","\u96F2\u306E\u4E0A\u306E\u30AD\u30E5\u30FC\u30D4\u30C3\u30C9","\uAD6C\uB984 \uC704\uC758 \uD050\uD53C\uB4DC","Cupido nas Nuvens","Cupido en las Nubes"],lustLore:["\u96F2\u5CF6\u3001\u5F13\u5F26\u6A4B\u8207\u7834\u788E\u91D1\u7BAD\u3002\u9B45\u60D1\u8207\u81EA\u7531\u7684\u9078\u64C7\u3002","\u4E91\u5C9B\u3001\u5F13\u5F26\u6865\u4E0E\u7834\u788E\u91D1\u7BAD\u3002\u9B45\u60D1\u4E0E\u81EA\u7531\u7684\u9009\u62E9\u3002","Cloud islands, bowstring paths, and a choice freely made.","\u96F2\u306E\u5CF6\u3001\u5F13\u5F26\u306E\u6A4B\u3001\u7815\u3051\u305F\u91D1\u306E\u77E2\u3002\u9B45\u60D1\u3068\u81EA\u7531\u306E\u9078\u629E\u3002","\uAD6C\uB984\uC12C, \uD65C\uC2DC\uC704 \uB2E4\uB9AC, \uBD80\uC11C\uC9C4 \uD669\uAE08 \uD654\uC0B4. \uB9E4\uD639\uACFC \uC790\uC720\uC758 \uC120\uD0DD.","Ilhas nas nuvens, pontes de corda e flechas douradas partidas. Encanto e livre escolha.","Islas entre nubes, puentes de cuerda y flechas doradas rotas. Encanto y libre elecci\xF3n."],prideIntro:["\u93E1\u5BAE\u4E4B\u738B","\u955C\u5BAB\u4E4B\u738B","King of the mirror palace","\u93E1\u5BAE\u306E\u738B","\uAC70\uC6B8 \uAD81\uC804\uC758 \uC655","Rei do pal\xE1cio dos espelhos","Rey del palacio de espejos"],prideLore:["\u93E1\u5BAE\u4E4B\u738B\u4FEF\u8996\u4E00\u5207\u3002\u6311\u6230\u4ED6\u7684\u50B2\u6162\u738B\u6B0A\u3002","\u955C\u5BAB\u4E4B\u738B\u4FEF\u89C6\u4E00\u5207\u3002\u6311\u6218\u4ED6\u7684\u50B2\u6162\u738B\u6743\u3002","The king looks down upon all. Challenge his arrogant rule.","\u738B\u306F\u3059\u3079\u3066\u3092\u898B\u4E0B\u3059\u3002\u305D\u306E\u50B2\u6162\u306A\u738B\u6A29\u306B\u6311\u3081\u3002","\uC655\uC740 \uBAA8\uB4E0 \uAC83\uC744 \uB0B4\uB824\uB2E4\uBD05\uB2C8\uB2E4. \uC624\uB9CC\uD55C \uC655\uAD8C\uC5D0 \uB3C4\uC804\uD558\uC138\uC694.","O rei despreza todos. Desafie o seu reinado arrogante.","El rey desprecia a todos. Desaf\xEDa su arrogante dominio."],envyIntro:["\u7ABA\u8996\u4E4B\u5B50","\u7AA5\u89C6\u4E4B\u5B50","The Watching Child","\u8997\u304D\u898B\u308B\u5B50","\uC5FF\uBCF4\uB294 \uC544\uC774","A Crian\xE7a que Espia","El Ni\xF1o que Esp\xEDa"],envyLore:["\u5E7D\u6797\u88E1\u7684\u5B69\u5B50\uFF0C\u7ABA\u8996\u8457\u4E0D\u5C6C\u65BC\u81EA\u5DF1\u7684\u5E78\u798F\u3002","\u5E7D\u6797\u91CC\u7684\u5B69\u5B50\uFF0C\u7AA5\u89C6\u7740\u4E0D\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5E78\u798F\u3002","A child in the dark woods watches happiness that belongs to others.","\u6697\u3044\u68EE\u306E\u5B50\u306F\u3001\u4ED6\u4EBA\u306E\u5E78\u305B\u3092\u8997\u304D\u898B\u308B\u3002","\uC5B4\uB450\uC6B4 \uC232\uC758 \uC544\uC774\uB294 \uB0A8\uC758 \uD589\uBCF5\uC744 \uC5FF\uBD05\uB2C8\uB2E4.","Uma crian\xE7a no bosque escuro espreita a felicidade dos outros.","Un ni\xF1o en el bosque oscuro observa la felicidad ajena."]},ox=["crazyGreed","sinPride","sinEnvy","sinLust","sinGluttony","sinSloth","sinWrath"];function pt(n,e){let t=ax[e];return t?t[Math.max(0,Wi.indexOf(n))]:Bd(n,e)}function Xn(n,e){return pt(n,ox[e])}function Yo(n,e){return pt(n,e==="greed"?"crazyDealer":e+"Intro")}function Fd(n,e){return pt(n,e==="greed"?"crazyGreedLore":e+"Lore")}function Ds(n){return{"zh-Hant":"PixelHant","zh-Hans":"PixelHans",ja:"PixelJa",ko:"PixelKo"}[n]||"PixelLatin"}function Xc(n){return{greed:"index.html",pride:"index.html",envy:"envy-preview.html",lust:"lust-preview.html",gluttony:"gluttony-preview.html"}[n]||null}var Od=n=>JSON.stringify(n).replaceAll("<","\\u003c");function lx({settings:n,local:e={},session:t={}}){return`(()=>{const local=${Od({...e,"bridge-settings":JSON.stringify(n)})},session=${Od({...t,"bridge-filming-unlock":"1"})};const memory=data=>({get length(){return Object.keys(data).length},key:i=>Object.keys(data)[i]??null,getItem:k=>Object.prototype.hasOwnProperty.call(data,k)?String(data[k]):null,setItem:(k,v)=>{data[String(k)]=String(v)},removeItem:k=>{delete data[k]},clear:()=>{for(const k of Object.keys(data))delete data[k]}});Object.defineProperty(window,'localStorage',{value:memory(local)});Object.defineProperty(window,'sessionStorage',{value:memory(session)});window.__cartridgeReadOnly=true;})();`}function kd(n,{id:e,base:t,settings:i,local:r,session:s}){if(!Xc(e))throw new RangeError("Unavailable Boss");let a=JSON.stringify({lang:i.lang,theme:i.theme,difficulty:i.crazyDifficulty||"normal"}),o=lx({settings:i,local:r,session:s});if(n=n.replace("<head>",`<head><base href="${t.replaceAll("&","&amp;").replaceAll('"',"&quot;")}"><script>${o.replaceAll("<\/script","<\\/script")}<\/script>`),!n.includes("window.__cartridgeReadOnly"))throw new Error("Missing isolated storage bootstrap");if(e==="greed"||e==="pride"){e==="pride"&&(n=n.replace('<body data-theme="light">','<body data-theme="light" data-pride-preview>'));let l=n.lastIndexOf("<\/script>");n=n.slice(0,l)+`
// Local cartridge adapter: normal encounter initialization, no state or score injection.
settings.lang=${JSON.stringify(i.lang)};settings.theme=${JSON.stringify(i.theme)};settings.crazyDifficulty=${JSON.stringify(i.crazyDifficulty||"normal")};applySettings();
${e==="pride"?'previewScenario="full";previewDifficulty=settings.crazyDifficulty;':""}addEventListener('message',e=>{if(e.source===parent&&e.data?.type==='cartridge-start')beginCrazy(${JSON.stringify(e)});});window.__cartridgeEncounter={id:${JSON.stringify(e)},get mode(){return crazy?.mode},get hp(){return crazy?.hp},get over(){return !!crazy?.over},get won(){return !!crazy?.won},get scene(){return crazy?.cutscene},get difficulty(){return crazy?.difficulty},get bridge(){return crazy?.bridge},get preview(){return !!crazy?.preview},get filming(){return !!crazy?.filming}};
`+n.slice(l)}else{let l=`<script>addEventListener('message',e=>{if(e.source!==parent||e.data?.type!=='cartridge-start')return;const config=${a};const scenario=document.getElementById('scenario'),difficulty=document.getElementById('difficulty');scenario.value='full';difficulty.value=config.difficulty;document.getElementById('launch-form').requestSubmit();});<\/script>`;n=n.replace("</body>",l+"</body>")}return n=n.replace("</body>","<script>function cartridgeFocusBoard(){const s=window.lustPreview||window.envyPreview||window.gluttonyPreview||window.__cartridgeEncounter;if(!s||s.scene||s.over||s.won)return;const board=document.querySelector('#board,#envy-board,#lust-board,#gluttony-board');if(board){const game=document.getElementById('game');if(game)game.inert=false;board.tabIndex=-1;board.focus({preventScroll:true});}}addEventListener('click',e=>{if(e.target.closest('#cinematic-skip,#scene-continue,#play-menu-close,#resume,#menu-return')){cartridgeFocusBoard();requestAnimationFrame(cartridgeFocusBoard);}if(e.target.closest('#pick,#scene-pick,#result-bosses,#pride-preview-pick,#bosses-back,#play-menu-exit,#veil-menu'))parent.postMessage({type:'cartridge-return'},'*');});<\/script></body>"),n}function Hd({memory:n,cores:e}={}){let t=Number.isFinite(n)&&n<=4||Number.isFinite(e)&&e<=4,i="auto",r=t,s=[];return{get preference(){return i},get quality(){return i==="auto"?r?"light":"standard":i},set(a){["auto","standard","light"].includes(a)&&(i=a,r=t,s=[])},observe(a){i!=="auto"||r||!Number.isFinite(a)||(s.push(a),s.length>24&&s.shift(),s.length===24&&s.filter(o=>o>24).length>=12&&(r=!0))},ratio(a,o,l=1){let c=this.quality==="light";return Math.min(l,c?1:1.5,Math.sqrt((c?24e4:6e5)/Math.max(1,a*o)))},interval({active:a=!1,reduced:o=!1}={}){return 1e3/(a?this.quality==="light"?30:60:o?1:this.quality==="light"?6:12)}}}var Q=n=>document.getElementById(n),cn=Q("stage"),ne=Cd(),In={};try{In=JSON.parse(localStorage.getItem("bridge-settings")||"{}")}catch{}var Ct=document.body.dataset.cartridgeCampaign==="true",Yi=[];function Ko(){if(!Ct)return;let n,e;try{n=localStorage,e=sessionStorage}catch{}Yi=wd(n,e),ne.available=Yi.map(t=>t.unlocked)}Ko();if(Ct){let n=_t.findIndex(e=>e.id===new URLSearchParams(location.search).get("sin"));n>=0&&ne.available[n]&&Hc(ne,n)}var Ne=Wi.includes(In.lang)?In.lang:"en",vn=In.theme==="dark"?"dark":"light",Or=In.crazyDifficulty==="hard"?"hard":"normal",xn=1,Rn=matchMedia("(prefers-reduced-motion:reduce)").matches,Ft=!1,zs=Math.max(0,Math.min(1,Number(In.sfxVolume??In.volume??.7))),Os=zs>0;function nh(){if(!(!Ct||qo()))try{let n=JSON.parse(localStorage.getItem("bridge-settings")||"{}");Object.assign(n,{lang:Ne,theme:vn,crazyDifficulty:Or}),localStorage.setItem("bridge-settings",JSON.stringify(n)),In=n}catch{}}var Yn=Hd({memory:navigator.deviceMemory,cores:navigator.hardwareConcurrency});if(Ct)try{Yn.set(localStorage.getItem("bridge-cartridge-quality")||"auto")}catch{}var Vd=0,Gd=0,yn=!0,Wd="",rf=0,Xd=0,Zo=!1,sf=0,qd=!1,Yd=new Map,qc=new Map,Yc="";function eh(){Zo||document.hidden||(Zo=!0,requestAnimationFrame(bx))}function Ot(){yn=!0,sf=performance.now()+800,Zo||(yi=performance.now()),eh()}var cx=null,Br=[],yi=performance.now(),Ut,ln,Gt,xt,Qe,gi=[],mt=null,Zc="browse",_n=null,jo=!1,Jc=0,Zi=new L,Jo=new L,$o=new L,Zd=new L,af=new L,of=new mn,Ns=new vs,Jd=new ge,lf=new tn(new L(0,0,1),-1.6),Bs=new L,ks=document.createElement("canvas");ks.width=512;ks.height=448;var on=ks.getContext("2d"),Qo=new si(ks);Qo.colorSpace=wt;Qo.minFilter=Zt;var cf=[],$d=[];Object.defineProperty(window,"cartridgeDemo",{get:()=>({state:ne,game:cx,renderer:jo?"fallback":"three-webgl",card:Qc(Qe?.position),slot:Qc(Jo),version:"1.2.40",campaign:Ct,progress:Yi,performance:{quality:Yn.quality,frames:rf,drawCalls:Ut?.info.render.calls||0,triangles:Ut?.info.render.triangles||0,buffer:Ut?[Ut.domElement.width,Ut.domElement.height]:null},zoom:xn,theme:vn,lang:Ne,difficulty:Or,sound:Os,sfxLevel:zs,reduced:Rn,slotAbove:Qc($o),encounter:zr,loading:Pn})});var hx={title:"crazySevenSins","demo-badge":"demo","local-label":"demo",insert:"insert",rotate:"rotate",reset:"reset",eject:"eject",resume:"crazyContinue","settings-title":"settings","theme-label":"theme","quality-label":"quality","reduced-label":"reduced","sound-label":"sound","settings-note":"note","help-note":"help","options-return":"close","difficulty-title":"crazyDifficulty",normal:"normal",hard:"hard","loading-title":"loading","fallback-note":"fallback"},ux=["greed","pride","envy","lust","gluttony","sloth","wrath"],zr=null,Pn=!1,Nr=0,mi,$c,Kd,Xi,Kc=new Set,qn=new Map,qi=null;function dx(){!Ct||!Br.length||ne.available.forEach((n,e)=>{if(!n||Br[e]||Kc.has(e)||!_t[e].art)return;Kc.add(e);let t=new Image;t.onload=()=>{Br[e]=t,Kc.delete(e),Zn()},t.src=_t[e].art})}var jd=null,Qd="";function Zn(){if(Ot(),document.documentElement.lang=Ne,document.body.dataset.theme=vn,jd!==Ne){jd=Ne;for(let[t,i]of Object.entries(hx))Q(t)&&(Q(t).textContent=pt(Ne,i));Ct&&(Q("settings-title").textContent=pt(Ne,"campaignSettings"),Q("settings-note").textContent=pt(Ne,"campaignNote"),Q("main-menu").ariaLabel=pt(Ne,"mainMenu"),Q("ranks-toggle").ariaLabel=pt(Ne,"ranks"),Q("ranks-title").textContent=pt(Ne,"ranks"),Q("ranks-close").textContent=pt(Ne,"close")),Q("settings").ariaLabel=pt(Ne,"settings"),Q("zoom-in").ariaLabel=pt(Ne,"zoomIn"),Q("zoom-out").ariaLabel=pt(Ne,"zoomOut");for(let t of Q("quality").options)t.textContent=pt(Ne,"quality"+t.value[0].toUpperCase()+t.value.slice(1));for(let t of["light","dark"])Q("theme").querySelector(`[value="${t}"]`).textContent=pt(Ne,t);Q("description").textContent=pt(Ne,"ready")}Q("demo-badge").hidden=Ct,Q("lang").value=Ne,Q("rotate").setAttribute("aria-pressed",String(ne.rotate)),Q("theme").value=vn,Q("quality").value=Yn.preference;for(let t of["normal","hard"])Q(t).setAttribute("aria-pressed",String(Or===t));let n=_t[ne.index];Q("concept").dataset.sin=n.id,Q("concept").style.setProperty("--tone",n.color),Q("concept-art").getAttribute("src")!==n.art&&(Q("concept-art").src=n.art),Q("concept-art").alt=Yo(Ne,n.id),Q("boss-emblem").setAttribute("href","#sin-icon-"+n.id),Q("boss-title").textContent=Xn(Ne,ne.index)+" \xB7 "+Yo(Ne,n.id),Q("boss-lore").textContent=Fd(Ne,n.id),Q("local-label").hidden=Ct||!n.preview,wx(),Q("game-label").textContent=Xn(Ne,ne.index)+" \xB7 "+pt(Ne,"demo"),Q("fx-title").textContent=Xn(Ne,ne.index);let e=Ne+ne.available.join(",")+Yi.map(t=>t.cleared).join(",");e!==Qd&&(Qd=e,Q("shelf").replaceChildren(..._t.map((t,i)=>{let r=document.createElement("button");return r.type="button",r.dataset.index=i,r.style.setProperty("--tone",t.color),r.setAttribute("aria-label",ne.available[i]?Xn(Ne,i):pt(Ne,"crazyLocked")),r.innerHTML=`<svg class="sin-emblem" aria-hidden="true"><use href="#sin-icon-${ux[i]}"/></svg><span><b>${ne.available[i]?Xn(Ne,i):"\u25A3"}</b><small>${ne.available[i]?Ct&&Yi[i]?.cleared?pt(Ne,"cleared"):t.preview&&!Ct?pt(Ne,"demo"):Yo(Ne,t.id):pt(Ne,"crazyLocked")}</small></span>`,r.onclick=()=>rh(i),r})));for(let[t,i]of[...Q("shelf").children].entries())i.setAttribute("aria-pressed",String(t===ne.index));ih(),hf(),Br.length&&gi.forEach((t,i)=>t.traverse(r=>{r.material?.uniforms?.uMap&&(r.material.uniforms.uMap.value=df(_t[i],Br[i]))})),dx(),Ji()}function ih(){Q("zoom-value").textContent=Math.round(xn*100)+"%",Q("zoom-in").disabled=xn>=1.45,Q("zoom-out").disabled=xn<=.7}function el(n){Ot(),ne.phase==="browse"&&(xn=Math.max(.7,Math.min(1.45,n)),ih())}function hf(){for(let n of cf)n.userData.role&&n.uniforms.uColor.value.set(vn==="dark"?n.userData.role==="shell"?"#24252c":"#36383f":n.userData.role==="shell"?"#d0c9b9":"#eee5d4")}function Ji(){let n=ne.message==="sealed"?"sealed":ne.message==="align"?"align":ne.phase==="insert"?"reading":ne.phase==="boot"||Pn?"boot":ne.message==="error"?"error":"ready",e=pt(Ne,n);Q("status").textContent!==e&&(Q("status").textContent=e)}function ef(n){let e={};try{for(let t=0;t<n.length;t++){let i=n.key(t);e[i]=n.getItem(i)}}catch{}return e}var th=null;async function fx(){if(Ct){try{Ko(),th=Ed(_t[ne.index].id,Yi,new URL("./",document.baseURI).href,Or),zr=_t[ne.index].id,Pn=!1}catch{Fr(),ne.message="sealed",Ji()}return}let n=_t[ne.index].id,e=++Nr;Pn=!0;try{let t=await fetch(new URL("./"+Xc(n),document.baseURI));if(!t.ok)throw new Error("Encounter HTTP "+t.status);let i=await t.text();if(e!==Nr)return;let r={...In,lang:["envy","lust","gluttony"].includes(n)?Ne.startsWith("zh")?"zh-Hant":"en":Ne,theme:vn,crazyDifficulty:Or};if(Q("game-shell").hidden=!1,Q("game-shell").style.visibility="hidden",Q("boss-frame").srcdoc=kd(i,{id:n,base:new URL("./",document.baseURI).href,settings:r,local:ef(localStorage),session:ef(sessionStorage)}),zr=n,await new Promise((s,a)=>{let o=Q("boss-frame"),l=setTimeout(()=>a(new Error("Encounter load timeout")),2e4);o.onload=()=>{if(e!==Nr)return clearTimeout(l),s();let c=o.contentWindow;c.__cartridgeReadOnly&&(clearTimeout(l),c.addEventListener("keydown",h=>{h.code==="Escape"&&h.shiftKey&&Fr()}),s())}}),e!==Nr)return;Pn=!1}catch(t){if(e!==Nr)return;console.warn(t),Pn=!1,zr=null,ne.message="error",Fr(),ne.message="error",Ji()}}function tf(){if(Ct){th&&location.assign(th);return}Pn||!zr||(document.body.classList.add("playing"),Q("game-shell").hidden=!1,Q("game-shell").style.visibility="visible",Q("eject").hidden=!0,Q("boss-frame").contentWindow.postMessage({type:"cartridge-start"},"*"),Q("boss-frame").contentWindow.focus(),Q("launch-fx").classList.remove("active"))}function px(){try{let n=Q("boss-frame").contentWindow,e=n?.lustPreview||n?.envyPreview||n?.gluttonyPreview||n?.__cartridgeEncounter;e&&e.hp!==void 0&&(Q("eject").hidden=!!e.scene&&!e.over&&!e.won)}catch{}}function mx(){if(ne.phase!=="boot"||(Q("launch-fx").classList.add("active"),Ft||document.hidden||performance.now()-Xd<1e3/30))return;if(Xd=performance.now(),!mi)try{mi=new Rs({canvas:Q("fx-canvas"),antialias:!1,powerPreference:"low-power"}),$c=new xr,Kd=new Pi,Xi=new At({vertexShader:hd,fragmentShader:ud,uniforms:{uProgress:{value:0},uAspect:{value:1},uTone:{value:new qe},uPaper:{value:new qe},uReduced:{value:0}}}),$c.add(new ft(new sn(2,2),Xi))}catch{return}let n=innerWidth,e=innerHeight,t=Yn.ratio(n,e,1);Math.abs(mi.getPixelRatio()-t)>.001&&mi.setPixelRatio(t),(Math.abs(mi.domElement.width-n*t)>1||Math.abs(mi.domElement.height-e*t)>1)&&mi.setSize(n,e,!1),Xi.uniforms.uProgress.value=Math.min(1,ne.elapsed/(Rn?250:2100)),Xi.uniforms.uAspect.value=n/e,Xi.uniforms.uTone.value.set(_t[ne.index].color),Xi.uniforms.uPaper.value.set(vn==="dark"?"#000000":"#f5f5f7"),Xi.uniforms.uReduced.value=Rn?1:0,mi.render($c,Kd)}function uf(n){if(Os)try{_n??=new AudioContext,_n.resume(),(n==="boot"?[262,392,523]:[110,75]).forEach((t,i)=>{let r=_n.createOscillator(),s=_n.createGain(),a=_n.currentTime+i*.09;r.type=n==="boot"?"sine":"triangle",r.frequency.value=t,s.gain.setValueAtTime(.001,a),s.gain.exponentialRampToValueAtTime(.065*zs,a+.008),s.gain.exponentialRampToValueAtTime(.001,a+.15),r.connect(s),s.connect(_n.destination),r.start(a),r.stop(a+.16)})}catch{}}function gx(n,e,t){let i=new Sr,r=-n/2,s=-e/2;return i.moveTo(r+t,s),i.lineTo(r+n-t,s),i.quadraticCurveTo(r+n,s,r+n,s+t),i.lineTo(r+n,s+e-t),i.quadraticCurveTo(r+n,s+e,r+n-t,s+e),i.lineTo(r+t,s+e),i.quadraticCurveTo(r,s+e,r,s+e-t),i.lineTo(r,s+t),i.quadraticCurveTo(r,s,r+t,s),i}function Fs(n,e=.3){let t=new At({vertexShader:Fo,fragmentShader:Oo,uniforms:{uColor:{value:new qe(n)},uGloss:{value:e}}});return cf.push(t),t}function Rt(n,e,t,i,r,s=0,a=0,o=0,l=.07){let c=gx(e,t,l),h=new ys(c,{depth:i,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:l*.35,bevelThickness:l*.3,curveSegments:7});h.translate(0,0,-i/2);let u=new ft(h,typeof r=="string"?Fs(r):r);return u.position.set(s,a,o),n.add(u),u}function jc(n,e,t,i,r,s){let a=new ft(new ls(e,e,.1,40),Fs(t,.8));return a.rotation.x=Math.PI/2,a.position.set(i,r,s),n.add(a),a}function Us(n,e,t,i,r,s,a="#756971",o=null){let l=document.createElement("canvas");l.width=512,l.height=128;let c=l.getContext("2d");o&&(c.fillStyle=o,c.fillRect(0,0,512,128)),c.font="48px PixelLatin,monospace",c.fillStyle=a,c.textAlign="center",c.textBaseline="middle",c.fillText(e,256,64);let h=new si(l);h.colorSpace=wt;let u=new ft(new sn(r,s),new Hn({map:h,transparent:!0,depthWrite:!1}));return u.position.set(t,i,.65),n.add(u),u}function nf(n,e,t,i,r,s){let a=document.createElement("canvas");a.width=256,a.height=128;let o=a.getContext("2d"),l=o.createRadialGradient(128,64,0,128,64,120);l.addColorStop(0,"rgba(76,61,46,.22)"),l.addColorStop(.55,"rgba(76,61,46,.10)"),l.addColorStop(1,"rgba(76,61,46,0)"),o.fillStyle=l,o.fillRect(0,0,256,128);let c=new ft(new sn(e,t),new Hn({map:new si(a),transparent:!0,depthWrite:!1}));return c.position.set(i,r,s),n.add(c),c}function yx(){let n=new pn,e=Fs("#d0c9b9");e.userData.role="shell",Rt(n,3.65,5.6,.64,e,0,0,0,.28);let t=Fs("#eee5d4");t.userData.role="face",Rt(n,3.57,5.43,.05,t,0,.03,.335,.29),Rt(n,3.12,2.92,.08,"#626069",0,.79,.43,.25),Rt(n,2.69,2.37,.045,"#252d25",0,.86,.5,.12);let i=new ft(new sn(2.56,2.24),new At({vertexShader:bc,fragmentShader:cd,uniforms:{uMap:{value:Qo},uTime:{value:0},uBoot:{value:0},uReduced:{value:0}}}));i.position.set(0,.86,.58),n.add(i),n.userData.screen=i,Rt(n,2.9,.12,.34,"#302d32",0,2.78,-.025,.015),Rt(n,3.1,.04,.12,"#847b70",0,2.84,.26,.01),jc(n,.042,"#a94d48",-1.49,1.38,.51),Us(n,"POWER",-1.48,.98,.27,.06,"#c6bcba"),Us(n,"DOT MATRIX",.08,2.1,1.2,.1,"#e4d8d4"),Us(n,"BRIDGE / POCKET",-.22,-.88,1.8,.2,"#575168");let r=new pn;r.position.set(-.95,-1.48,.44),Rt(r,1.02,.34,.16,"#393640",0,0,0,.04),Rt(r,.34,1.02,.16,"#393640",0,0,.01,.04),jc(r,.13,"#24212c",0,0,.11),n.add(r);for(let[s,a,o]of[["left",-.34,0],["right",.34,0],["up",0,.34],["down",0,-.34]]){let l=new ft(new sn(.4,.4),new Hn({transparent:!0,opacity:0,depthWrite:!1}));l.visible=!1,l.position.set(a,o,.2),l.userData.action=s,r.add(l),$d.push(l)}for(let[s,a,o]of[["alt",.67,-1.52],["action",1.26,-1.2]]){let l=jc(n,.29,"#955464",a,o,.49);l.userData.action=s,$d.push(l)}Rt(n,.51,.16,.085,"#7e797c",-.32,-2.23,.43,.07).rotation.z=.12,Rt(n,.51,.16,.085,"#7e797c",.35,-2.23,.43,.07).rotation.z=.12,Us(n,"SELECT     START",0,-2.52,1.35,.1,"#756876");for(let s=0;s<5;s++)Rt(n,.045,.48,.025,"#a1998c",.89+s*.13,-2.23,.38,.013).rotation.z=.32;return Tc(n)}function df(n,e){let t=Yd.get(n.id);if(t?.lang===Ne&&t.image===e)return t.texture;let i=document.createElement("canvas");i.width=512,i.height=600;let r=i.getContext("2d");if(r.fillStyle="#eee9dd",r.fillRect(0,0,512,600),r.fillStyle=n.color,r.fillRect(0,0,512,36),r.fillStyle="#efe7db",r.font="bold 15px PixelLatin,monospace",r.fillText("BRIDGE   /   CRAZY COLLECTION",24,24),e){let a=Math.max(488/e.naturalWidth,380/e.naturalHeight),o=e.naturalWidth*a,l=e.naturalHeight*a;r.save(),r.beginPath(),r.rect(12,47,488,380),r.clip(),r.drawImage(e,256-o/2,237-l/2,o,l),r.restore()}else r.fillStyle="#bcb7ab",r.fillRect(12,47,488,380),r.fillStyle="#777267",r.font="90px PixelLatin,monospace",r.fillText("\u25A3",211,268);r.fillStyle="#3f3940",r.font="600 50px PixelLatin,monospace",r.fillText(n.english,24,484),r.fillStyle=n.color,r.font="32px PixelLatin,monospace",r.font="32px "+Ds(Ne)+",monospace",r.fillText(Xn(Ne,_t.indexOf(n)),26,532),r.fillStyle="#8a8074",r.font="18px PixelLatin,monospace",r.fillText(n.preview&&!Ct?"INDEPENDENT PREVIEW":"VOL. 0"+(_t.indexOf(n)+1)+"    /    POCKET EDITION",26,576);let s=new si(i);return s.colorSpace=wt,Yd.set(n.id,{lang:Ne,image:e,texture:s}),t?.texture.dispose(),s}function _x(n,e){let t=new pn,i=Fs(n.available?"#bbb9ae":"#898981",.42);Rt(t,2.15,2.6,.28,i,0,0,0,.1),Rt(t,1.97,.25,.02,"#929088",0,1.1,.164,.025);for(let a=0;a<4;a++)Rt(t,.2,.043,.015,"#dbd9cc",-.92,1.06-a*.085,.17,.012),Rt(t,.2,.043,.015,"#dbd9cc",.92,1.06-a*.085,.17,.012);Rt(t,1.89,2.07,.026,"#8c897d",0,-.12,.168,.09);let r=new At({vertexShader:bc,fragmentShader:ld,uniforms:{uMap:{value:df(n,e)},uTime:{value:0},uReduced:{value:0}}}),s=new ft(new sn(1.74,1.9),r);return s.position.set(0,-.13,.225),t.add(s),t.userData.index=_t.indexOf(n),Rt(t,1.32,.17,.01,"#777468",0,-1.13,.18,.03),Us(t,"\u25BC",0,1.11,.12,.1,"#bfbdb2").position.z=.235,Tc(t)}function Qc(n){if(!n||!Gt)return null;let e=n.clone().project(Gt),t=cn.getBoundingClientRect();return{x:t.left+(e.x+1)*t.width/2,y:t.top+(1-e.y)*t.height/2}}function ff(){let n=cn.getBoundingClientRect();if(!n.width||!n.height)return{portrait:!1,short:!1};let e=innerWidth>innerHeight&&innerHeight<540,t=innerWidth<=680&&!e,i=t?7.4:e?7.8:7.4;i=Math.max(i,(t?7:7.7)*n.height/n.width)/xn,Gt.left=-i*n.width/n.height/2,Gt.right=i*n.width/n.height/2,Gt.top=i/2,Gt.bottom=-i/2,Gt.updateProjectionMatrix();let s=Yn.ratio(n.width,n.height,devicePixelRatio||1);return(n.width!==Vd||n.height!==Gd||Math.abs(Ut.getPixelRatio()-s)>.001)&&(Vd=n.width,Gd=n.height,Ut.setPixelRatio(s),Ut.setSize(n.width,n.height,!1)),ln.background=new qe(vn==="dark"?"#000000":"#f5f5f7"),{portrait:t,short:e}}function rh(n){if(!Hc(ne,n)){Ji();return}Qe&&(ln.remove(Qe),Qe=gi[n].clone(!0),Qe.position.copy(Zi),Qe.traverse(e=>{e.isMesh&&(e.userData.index=n)}),ln.add(Qe)),Zn()}function pf(){Ko(),Gc(ne)&&mf()}function mf(){Ot(),Qe&&(af.copy(Qe.position),of.copy(Qe.quaternion)),Ft=!1,uf("insert"),fx(),Ji()}function Fr(){Ld(ne)&&(Nr++,zr=null,Pn=!1,Q("boss-frame").removeAttribute("srcdoc"),Q("game-shell").hidden=!0,Q("launch-fx").classList.remove("active"),Ft=!1,Q("pause-banner").hidden=!0,document.body.classList.remove("playing"),xt&&Qe&&(xt.remove(Qe),ln.add(Qe)),Zn())}function xx(){let n=[Ne,ne.index,ne.phase].join(":");n!==Wd&&(Wd=n,on.fillStyle="#a4b081",on.fillRect(0,0,512,448),on.textAlign="center",on.fillStyle="#34443a",on.font="24px PixelLatin,monospace",on.fillText("BRIDGE",256,148),on.font="18px PixelLatin,monospace",on.fillText("CRAZY",256,195),on.font="20px "+Ds(Ne)+",monospace",on.fillText(Xn(Ne,ne.index),256,254),on.font="14px PixelLatin,monospace",on.fillText(ne.phase==="browse"?"01 \u2014 07":ne.phase==="insert"?"READING\u2026":"LINK START",256,325),Qo.needsUpdate=!0,jo&&Q("fallback-lcd").getContext("2d").drawImage(ks,0,0))}function gf(){ne.phase!=="playing"&&(Ft=!0,mt=null,qi=null,qn.clear()),_n&&_n.suspend()}function vx(n){if(jo||!Gt||!Qe||(yf(n),ne.phase==="playing")||ne.phase!=="browse")return;if(!Ns.intersectObject(Qe,!0)[0]){let t=Ns.intersectObjects(gi.filter(i=>i.visible),!0)[0];t&&typeof t.object.userData.index=="number"&&rh(t.object.userData.index);return}n.preventDefault(),cn.setPointerCapture(n.pointerId),Vc(ne,Qe.position.x-Zi.x,Qe.position.y-Zi.y),Ns.ray.intersectPlane(lf,Bs),mt={id:n.pointerId,x:n.clientX,y:n.clientY,world:Bs.clone(),base:{...ne.drop},rot:ne.rotate||n.button===2||n.shiftKey,moved:!1}}function yf(n){let e=cn.getBoundingClientRect();Jd.set((n.clientX-e.left)/e.width*2-1,-(n.clientY-e.top)/e.height*2+1),Ns.setFromCamera(Jd,Gt)}function Sx(n){if(!mt||mt.id!==n.pointerId)return;Ot(),n.preventDefault();let e=n.clientX-mt.x,t=n.clientY-mt.y;mt.moved||=Math.abs(e)+Math.abs(t)>5,mt.rot?(Rd(ne,e*.004,t*.004),mt.x=n.clientX,mt.y=n.clientY):(yf(n),Ns.ray.intersectPlane(lf,Bs),Vc(ne,mt.base.x+Bs.x-mt.world.x,mt.base.y+Bs.y-mt.world.y))}function Mx(n,e=!1){if(!mt||mt.id!==n.pointerId)return;Ot();let t=mt;if(mt=null,e){ne.drop={x:0,y:0};return}if(!t.rot&&t.moved){let i=Zi.x+ne.drop.x,r=Zi.y+ne.drop.y,s=Math.max(0,Jo.y-.2-r,r-$o.y-.2),a=Math.hypot(i-Jo.x,s);Pd(ne,{distance:a,aligned:Math.abs(ne.yaw)<.6&&Math.abs(ne.pitch)<.6})&&mf(),Ji()}}function bx(n){Zo=!1;let e=n-yi,t=Math.min(50,e);if(yi=n,document.hidden||Ft&&!yn||(Id(ne,e,{paused:Ft,reduced:Rn}),ne.phase!==Zc&&(yn=!0,ne.phase==="boot"&&(Qe&&xt&&(xt.attach(Qe),Qe.position.set(0,2.17,-.27),Qe.quaternion.identity(),Qe.scale.setScalar(1)),uf("boot")),ne.phase==="playing"&&tf(),Zc=ne.phase),ne.phase==="playing"&&!Pn&&Q("game-shell").style.visibility==="hidden"&&tf(),mx(),Ct&&ne.phase==="playing"))return;if(ne.phase==="playing"&&!Pn&&Q("game-shell").style.visibility==="visible"){px(),setTimeout(eh,200);return}let i=!!mt||ne.phase!=="browse"||n<sf;if(qd&&!i&&(yn=!0),qd=i,(yn||ne.phase!==Zc)&&(xx(),Ji()),Ut&&ne.phase!=="boot"&&(!Ft||yn)&&(i||yn)&&n-Jc>=Yn.interval({active:!0,reduced:Rn})){let r=performance.now(),s=Math.min(100,n-Jc),a=Rn||!i,o=d=>a?1:1-Math.exp(-s/d);Jc=n,yn=!1;let{portrait:l,short:c}=ff(),h=ne.phase==="playing",u=h?new L(0,0,0):l?new L(-1.28,-.65,0):new L(-1.65,-.42,0);if(xt.position.lerp(u,o(100)),xt.scale.lerp(new L(1,1,1).multiplyScalar(l&&!h?.97:1.08),o(100)),xt.rotation.x=As.lerp(xt.rotation.x,h?0:-.08,o(100)),xt.rotation.y=As.lerp(xt.rotation.y,h?0:.1,o(100)),xt.rotation.z=As.lerp(xt.rotation.z,h?0:l?-.045:.045,o(100)),Gt.position.set(h?-.2:0,h?.74:0,14),Gt.lookAt(h?-.2:0,h?.74:0,0),xt.updateMatrixWorld(!0),Jo.copy(xt.localToWorld(new L(0,2.96,0))),$o.copy(xt.localToWorld(new L(0,4.28,-.27))),Zd.copy(xt.localToWorld(new L(0,2.17,-.27))),ne.phase==="browse"){Zi.set(l?1.65:1.92,l?1.45:.8,1.6);let d=Zi.clone().add(new L(ne.drop.x,ne.drop.y,0));Qe.position.lerp(d,mt?1:o(100)),Qe.rotation.set(ne.pitch-.08,ne.yaw-.23,.055),Qe.scale.setScalar(l?.93:1.07),gi.forEach((f,g)=>{f.visible=g!==ne.index&&ne.available[g],f.position.set(l?1.4+g*.1:1.2+g*.36,l?-2.45:-2.5,-.38-g*.05),f.rotation.set(.08,0,-.27+g*.12),f.scale.setScalar(l?.28:.34)})}else if(ne.phase==="insert"){let d=Ls(ne.elapsed/(Rn?300:1250)),f=d<.63?Ls(d/.63):1;Qe.position.copy(af).lerp($o,f),d>=.63&&Qe.position.lerp(Zd,Ls((d-.63)/.37)),Qe.quaternion.copy(of).slerp(xt.quaternion,Ls(d/.5)),Qe.scale.setScalar(l?.94:1),gi.forEach(g=>g.visible=!1)}else gi.forEach(d=>d.visible=!1);xt.userData.screen.material.uniforms.uTime.value=n/1e3,xt.userData.screen.material.uniforms.uBoot.value=ne.phase==="boot"?1:0,Ut.render(ln,Gt),rf++,Yn.observe(performance.now()-r)}ne.phase==="boot"&&(yn=!1),Ut||(yn=!1),(yn||!Ft&&i&&(!Rn||mt||ne.phase!=="browse"))&&eh()}Q("insert").onclick=pf;Q("rotate").onclick=()=>{ne.phase==="browse"&&(ne.rotate=!ne.rotate,Q("rotate").setAttribute("aria-pressed",String(ne.rotate)))};Q("reset").onclick=()=>{ne.phase==="browse"&&(ne.yaw=0,ne.pitch=0,ne.drop={x:0,y:0},ne.message="",xn=1,ih(),Ot())};Q("zoom-in").onclick=()=>el(xn+.1);Q("zoom-out").onclick=()=>el(xn-.1);Q("eject").onclick=Fr;Q("lang").replaceChildren(...Wi.map((n,e)=>{let t=document.createElement("option");return t.value=n,t.textContent=zd[e],t}));Q("lang").onchange=async()=>{Ne=Q("lang").value,nh(),await document.fonts.load("16px "+Ds(Ne)),Zn()};for(let n of["normal","hard"])Q(n).onclick=()=>{ne.phase==="browse"&&(Or=n,nh(),Zn())};Q("settings").onclick=()=>{Ft=!0,Q("reduced").checked=Rn,Q("sound").checked=Os,Q("theme").value=vn,_n?.suspend(),Q("options").showModal()};Q("theme").onchange=()=>{vn=Q("theme").value,nh(),Zn()};Q("quality").onchange=()=>{if(Yn.set(Q("quality").value),Ct)try{localStorage.setItem("bridge-cartridge-quality",Yn.preference)}catch{}Ot()};addEventListener("resize",Ot);Q("options").onclose=()=>{Rn=Q("reduced").checked,Os=Q("sound").checked,Ft=!1,yi=performance.now(),Ot(),_n?.resume()};Q("resume").onclick=()=>{Ft=!1,Q("pause-banner").hidden=!0,yi=performance.now(),Ot(),_n?.resume()};addEventListener("storage",n=>{if((n.key?.startsWith("bridge-crazy-cleared-")||n.key==="bridge-greed-cleared")&&(Ko(),Zn()),n.key==="bridge-settings")try{let e=JSON.parse(n.newValue||"{}");In=e,zs=Math.max(0,Math.min(1,Number(e.sfxVolume??e.volume??.7))),Os=zs>0,vn=e.theme==="dark"?"dark":"light",Wi.includes(e.lang)&&(Ne=e.lang),Zn()}catch{}});addEventListener("message",n=>{n.source===Q("boss-frame").contentWindow&&n.data?.type==="cartridge-return"&&Fr()});addEventListener("keydown",n=>{if(!n.target.closest("dialog,input,select")){if(n.code==="Escape"){ne.phase==="browse"?Q("reset").click():Fr();return}if(!(ne.phase!=="browse"||n.repeat)){if(["Space","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),n.code==="Space")pf();else if(n.code==="ArrowLeft"||n.code==="ArrowRight"){let e=n.code==="ArrowLeft"?-1:1;for(let t=1;t<=_t.length;t++){let i=(ne.index+e*t+_t.length)%_t.length;if(ne.available[i]){rh(i);break}}}}}});addEventListener("blur",gf);addEventListener("focus",()=>{!Q("options").open&&!Q("ranks-dialog")?.open&&(Ft=!1,yi=performance.now(),Ot())});document.addEventListener("visibilitychange",()=>{document.hidden?gf():!Q("options").open&&!Q("ranks-dialog")?.open&&(Ft=!1,yi=performance.now(),Ot())});cn.addEventListener("pointerdown",n=>{if(ne.phase==="browse"){if(qn.set(n.pointerId,{x:n.clientX,y:n.clientY}),cn.setPointerCapture(n.pointerId),qn.size===2){let[e,t]=[...qn.values()];qi={distance:Math.hypot(e.x-t.x,e.y-t.y),zoom:xn},mt=null,cn.setPointerCapture(n.pointerId),n.preventDefault();return}vx(n)}});cn.addEventListener("pointermove",n=>{if(qn.has(n.pointerId)&&qn.set(n.pointerId,{x:n.clientX,y:n.clientY}),qi&&qn.size===2){let[e,t]=[...qn.values()];el(qi.zoom*Math.hypot(e.x-t.x,e.y-t.y)/Math.max(1,qi.distance)),n.preventDefault();return}Sx(n)});for(let n of["pointerup","pointercancel"])cn.addEventListener(n,e=>{let t=!!qi;if(qn.delete(e.pointerId),t){qi=null,mt=null;return}Mx(e,n==="pointercancel")});cn.addEventListener("contextmenu",n=>n.preventDefault());cn.addEventListener("wheel",n=>{ne.phase==="browse"&&(n.preventDefault(),el(xn*Math.exp(-n.deltaY*.001)))},{passive:!1});async function Tx(){Zn();try{await document.fonts.load("16px "+Ds(Ne)),await document.fonts.load("16px PixelLatin"),await document.fonts.ready;let n=Br=await Promise.all(_t.map((e,t)=>e.art&&(!Ct||ne.available[t])?new Promise(i=>{let r=new Image;r.onload=()=>i(r),r.onerror=()=>i(null),r.src=e.art}):null));Ut=new Rs({antialias:!1,alpha:!1,powerPreference:"low-power"}),Ut.outputColorSpace=wt,Ut.toneMapping=Za,Ut.toneMappingExposure=1.1,cn.prepend(Ut.domElement),ln=new xr,Gt=new br(-6,6,4,-4,.1,40),Gt.position.set(0,0,14),ln.add(new xs(16777215)),xt=yx(),ln.add(xt),nf(ln,5,1.6,-2.1,-3,-.9),nf(ln,3,1.1,2.6,-3,-.9),gi=_t.map((e,t)=>{let i=_x(e,n[t]);return i.traverse(r=>r.userData.index=t),ln.add(i),i}),Qe=gi[ne.index].clone(!0),ln.add(Qe),ff(),hf(),Q("loading").hidden=!0,Ot()}catch(n){console.warn("Cartridge WebGL fallback",n.message),jo=!0,Q("loading").hidden=!0,Q("fallback").hidden=!1,Ot()}}Tx();function wx(){if(!Ct)return;let n=Yi[ne.index],e=Q("concept"),t=Q("clear-shadow"),i=n.id+":"+!!n.cleared;if(e.classList.toggle("cleared",!!n.cleared),t.hidden=!n.cleared,i===Yc||(Yc=i,!n.cleared))return;let r=n.id,s=o=>{Yc===i&&(t.width=540,t.height=760,t.getContext("2d").drawImage(o,0,0))},a=qc.get(r);a||(a=new Promise(o=>{let l=new Image;l.decoding="async",l.onload=async()=>{try{await l.decode()}catch{}let c=document.createElement("canvas");c.width=540,c.height=760;let h=c.getContext("2d"),u=r==="envy"?l.naturalWidth/2:l.naturalWidth,d=r==="envy"?l.naturalHeight/2:l.naturalHeight,f=r==="envy"?u:0,g=Math.min(540/u,760/d);h.drawImage(l,f,0,u,d,(540-u*g)/2,(760-d*g)/2,u*g,d*g),o(c)},l.onerror=()=>{qc.delete(r),o(null)},l.src="./assets/"+{greed:"greed-second.webp",pride:"pride-second.webp",envy:"envy-heads.webp",lust:"lust-vn-shadow-pc98-r4.webp",gluttony:"gluttony-abyss-r1.webp"}[r]}),qc.set(r,a)),t.getContext("2d").clearRect(0,0,t.width,t.height),a.then(o=>{o&&s(o)})}Q("main-menu")?.addEventListener("click",()=>location.assign(new URL("./index.html",document.baseURI)));Q("ranks-toggle")?.addEventListener("click",()=>{Ft=!0;let n;try{n=localStorage}catch{}let e=Ad(n);Q("ranks-content").replaceChildren(...e.map(t=>{let i=document.createElement("section"),r=document.createElement("h3");r.textContent=Xn(Ne,["greed","pride","envy","lust","gluttony"].indexOf(t.sin))+" \xB7 "+t.difficulty,i.append(r);for(let s=0;s<5;s++){let a=document.createElement("p");a.textContent=s+1+". "+(t.scores[s]??"\u2013"),i.append(a)}return i})),Q("ranks-dialog").showModal()});Q("ranks-dialog")?.addEventListener("close",()=>{Ft=!1,yi=performance.now(),Ot()});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
