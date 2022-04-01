// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=n,v=s,p=t()?l:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var h=function(r){return"number"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return m&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,w=y;var E=function(r){return w.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",O=P,T=_,V=y;var x=E,S=function(r){var e,t,n;if(null==r)return V.call(r);t=r[T],e=O(r,T);try{r[T]=void 0}catch(e){return V.call(r)}return n=V.call(r),e?r[T]=t:delete r[T],n},A=b()?S:x,k=Number,F=k.prototype.toString;var I=A,N=k,M=function(r){try{return F.call(r),!0}catch(r){return!1}},R=b();var $=function(r){return"object"==typeof r&&(r instanceof N||(R?M(r):"[object Number]"===I(r)))},C=h,B=$;var G=d,L=function(r){return C(r)||B(r)},Z=$;G(L,"isPrimitive",h),G(L,"isObject",Z);var W=L,X=Number.POSITIVE_INFINITY,z=k.NEGATIVE_INFINITY,U=Math.floor;var Y=function(r){return U(r)===r},D=X,q=z,H=Y;var J=function(r){return r<D&&r>q&&H(r)},K=W.isPrimitive,Q=J;var rr=function(r){return K(r)&&Q(r)},er=W.isObject,tr=J;var nr=function(r){return er(r)&&tr(r.valueOf())},ir=rr,ar=nr;var or=d,ur=function(r){return ir(r)||ar(r)},cr=nr;or(ur,"isPrimitive",rr),or(ur,"isObject",cr);var fr=ur,sr=fr.isPrimitive;var lr=function(r){return sr(r)&&r>0},vr=fr.isObject;var pr=function(r){return vr(r)&&r.valueOf()>0},gr=lr,dr=pr;var hr=d,mr=function(r){return gr(r)||dr(r)},br=pr;hr(mr,"isPrimitive",lr),hr(mr,"isObject",br);var yr=mr;var wr=function(r){return r!=r},Er=A,jr="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null,_r=function(r){return jr&&r instanceof Float64Array||"[object Float64Array]"===Er(r)},Or=Pr;var Tr,Vr="function"==typeof Float64Array?Float64Array:void 0,xr=function(){throw new Error("not implemented")};Tr=function(){var r,e;if("function"!=typeof Or)return!1;try{e=new Or([1,3.14,-3.14,NaN]),r=_r(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Vr:xr;var Sr=yr.isPrimitive,Ar=wr,kr=Tr;var Fr=function(r){var e,t,n,i,a;if(!Sr(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return t=new kr(r),n=0,a=-1,i=0,function(o){var u;if(0===arguments.length)return 0===i?null:n;if(a=(a+1)%r,Ar(o))i=r,n=NaN;else if(i<r)n+=(e=o-n)/(i+=1);else if(Ar(t[a])){for(i=1,n=o,u=0;u<r;u++)if(u!==a){if(Ar(t[u])){i=r,n=NaN;break}i+=1,e=t[u]-n,n+=e/i}}else!1===Ar(n)&&(e=o-t[a],n+=e/r);return t[a]=o,n}};var Ir=function(r){return"string"==typeof r},Nr=String.prototype.valueOf;var Mr=A,Rr=function(r){try{return Nr.call(r),!0}catch(r){return!1}},$r=b();var Cr=function(r){return"object"==typeof r&&(r instanceof String||($r?Rr(r):"[object String]"===Mr(r)))},Br=Ir,Gr=Cr;var Lr=d,Zr=function(r){return Br(r)||Gr(r)},Wr=Cr;Lr(Zr,"isPrimitive",Ir),Lr(Zr,"isObject",Wr);var Xr=Zr,zr=Y;var Ur=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&zr(r.length)&&r.length>=0&&r.length<=9007199254740991},Yr=W.isPrimitive,Dr=wr;var qr=function(r){return Yr(r)&&Dr(r)},Hr=W.isObject,Jr=wr;var Kr=function(r){return Hr(r)&&Jr(r.valueOf())},Qr=qr,re=Kr;var ee=d,te=function(r){return Qr(r)||re(r)},ne=Kr;ee(te,"isPrimitive",qr),ee(te,"isObject",ne);var ie=Ur,ae=fr.isPrimitive,oe=Xr.isPrimitive,ue=te.isPrimitive;var ce=function(r,e,t){var n,i,a;if(!ie(r)&&!oe(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!ae(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(oe(r)){if(!oe(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,ue(e)){for(a=i;a<n;a++)if(ue(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},fe=Xr.isPrimitive;var se=function(r){if(!fe(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},le=Xr.isPrimitive;var ve=function(r){if(!le(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},pe=se,ge=ve,de=Xr.isPrimitive;var he=function(r){return de(r)&&r===ge(r)&&r!==pe(r)},me=X,be=z;var ye=function(r){return r==r&&r>be&&r<me},we=fr.isPrimitive;var Ee=function(r){return we(r)&&r>=0},je=fr.isObject;var Pe=function(r){return je(r)&&r.valueOf()>=0},_e=Ee,Oe=Pe;var Te=d,Ve=function(r){return _e(r)||Oe(r)},xe=Pe;Te(Ve,"isPrimitive",Ee),Te(Ve,"isObject",xe);var Se=Ve.isPrimitive,Ae=Xr.isPrimitive;var ke=function(r,e){var t,n;if(!Ae(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Se(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Fe=fr.isPrimitive,Ie=Xr.isPrimitive;var Ne=ke,Me=function(r,e,t){var n,i;if(!Ie(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Ie(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Fe(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var Re=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Me(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Ne("0",i):Ne("0",i)+r,n&&(r="-"+r)),r},$e=he,Ce=ve,Be=se,Ge=ye,Le=W.isPrimitive,Ze=Re;var We=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Ge(n)){if(!Le(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Ze(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Ze(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=$e(r.specifier)?Ce(t):Be(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Xe=Xr.isPrimitive,ze=/[-\/\\^$*+?.()|[\]{}]/g;var Ue=function(r){var e,t;if(!Xe(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(ze,"\\$&"):(e=(e=r.substring(1,t)).replace(ze,"\\$&"),r=r[0]+e+r.substring(t))},Ye=/./;var De=function(r){return"boolean"==typeof r},qe=Boolean.prototype.toString;var He=A,Je=function(r){try{return qe.call(r),!0}catch(r){return!1}},Ke=b();var Qe=function(r){return"object"==typeof r&&(r instanceof Boolean||(Ke?Je(r):"[object Boolean]"===He(r)))},rt=De,et=Qe;var tt=d,nt=function(r){return rt(r)||et(r)},it=Qe;tt(nt,"isPrimitive",De),tt(nt,"isObject",it);var at="object"==typeof self?self:null,ot="object"==typeof window?window:null,ut=nt.isPrimitive,ct=function(){return new Function("return this;")()},ft=at,st=ot,lt=r(Object.freeze({__proto__:null}));var vt=function(r){if(arguments.length){if(!ut(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ct()}if(ft)return ft;if(st)return st;if(lt)return lt;throw new Error("unexpected error. Unable to resolve global object.")},pt=vt(),gt=pt.document&&pt.document.childNodes,dt=Int8Array,ht=Ye,mt=gt,bt=dt;var yt=function(){return"function"==typeof ht||"object"==typeof bt||"function"==typeof mt};var wt=function(){return/^\s*function\s*([^(]*)/i},Et=wt;d(Et,"REGEXP",wt());var jt=Et,Pt=A;var _t=Array.isArray?Array.isArray:function(r){return"[object Array]"===Pt(r)};var Ot=function(r){return null!==r&&"object"==typeof r};d(Ot,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!_t(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ot));var Tt=Ot;var Vt=A,xt=jt.REGEXP,St=function(r){return Tt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var At=function(r){var e,t,n;if(("Object"===(t=Vt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=xt.exec(n.toString()))return e[1]}return St(r)?"Buffer":t},kt=At;var Ft=At;var It=function(r){var e;return null===r?"null":"object"===(e=typeof r)?kt(r).toLowerCase():e},Nt=function(r){return Ft(r).toLowerCase()},Mt=yt()?Nt:It;var Rt=function(r){return"function"===Mt(r)},$t=RegExp.prototype.exec;var Ct=A,Bt=function(r){try{return $t.call(r),!0}catch(r){return!1}},Gt=b();var Lt=Ue,Zt=Rt,Wt=Xr.isPrimitive,Xt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Gt?Bt(r):"[object RegExp]"===Ct(r)))};var zt=he,Ut=ve,Yt=se,Dt=function(r,e,t){if(!Wt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Wt(e))e=Lt(e),e=new RegExp(e,"g");else if(!Xt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Wt(t)&&!Zt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},qt=ye,Ht=W.isPrimitive,Jt=function(r){return Math.abs(r)},Kt=/e\+(\d)$/,Qt=/e-(\d)$/,rn=/^(\d+)$/,en=/^(\d+)e/,tn=/\.0$/,nn=/\.0*e/,an=/(\..*[^0])0*e/;var on=function(r){var e,t,n=parseFloat(r.arg);if(!qt(n)){if(!Ht(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Jt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Dt(t,an,"$1e"),t=Dt(t,nn,"e"),t=Dt(t,tn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Dt(t,Kt,"e+0$1"),t=Dt(t,Qt,"e-0$1"),r.alternate&&(t=Dt(t,rn,"$1."),t=Dt(t,en,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=zt(r.specifier)?Ut(t):Yt(t)},un=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var cn=ke;var fn=Xr.isPrimitive,sn=ce,ln=wr,vn=We,pn=on,gn=function(r){var e,t,n,i,a;for(e=0,n=[],a=un.exec(r);a;)(t=r.slice(e,un.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=un.lastIndex,a=un.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},dn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+cn(" ",n):cn(" ",n)+r},hn=Re,mn=String.fromCharCode;var bn=yr.isPrimitive,yn=Fr,wn=function(r){var e,t,n,i,a,o,u,c,f;if(!fn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=gn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],fn(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!sn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ln(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,ln(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=vn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!ln(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ln(a)?String(n.arg):mn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=pn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=hn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=dn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var En=function(r){var e;if(!bn(r))throw new TypeError(wn("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=yn(r),function(r,t){if(0===arguments.length)return e();return e((t-r)/t*100)}},jn=En;export{jn as default};
//# sourceMappingURL=mod.js.map
