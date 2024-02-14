// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+t(n):t(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):n.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,a=parseFloat(e.arg);if(!isFinite(a)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);a=e.arg}switch(e.specifier){case"e":case"E":t=a.toExponential(e.precision);break;case"f":case"F":t=a.toFixed(e.precision);break;case"g":case"G":p(a)<1e-4?((r=e.precision)>0&&(r-=1),t=a.toExponential(r)):t=a.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,b,"e"),t=f.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),a>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function k(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var x=String.fromCharCode,S=isNaN,F=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,i,t,n,o,p,l,u,f;if(!F(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,i,t,a;for(i=[],a=0,t=$.exec(e);t;)(r=e.slice(a,$.lastIndex-t[0].length)).length&&i.push(r),i.push(_(t)),a=$.lastIndex,t=$.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function A(e){return"string"==typeof e}function N(e){var r,i;if(!A(e))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return V.apply(null,r)}var C=Object.prototype,j=C.toString,R=C.__defineGetter__,O=C.__defineSetter__,Z=C.__lookupGetter__,P=C.__lookupSetter__;var W=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===j.call(e))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===j.call(i))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(Z.call(e,r)||P.call(e,r)?(t=e.__proto__,e.__proto__=C,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&R&&R.call(e,r,i.get),o&&O&&O.call(e,r,i.set),e};function G(e,r,i){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function L(e){return"number"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";var B=U()?function(e){var r,i,t,a,n;if(null==e)return X.call(e);i=e[q],n=q,r=null!=(a=e)&&z.call(a,n);try{e[q]=void 0}catch(r){return X.call(e)}return t=X.call(e),r?e[q]=i:delete e[q],t}:function(e){return X.call(e)},D=Number,H=D.prototype.toString;var J=U();function K(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===B(e)))}function Q(e){return L(e)||K(e)}G(Q,"isPrimitive",L),G(Q,"isObject",K);var ee=Number.POSITIVE_INFINITY,re=D.NEGATIVE_INFINITY,ie=Math.floor;function te(e){return e<ee&&e>re&&ie(r=e)===r;var r}function ae(e){return L(e)&&te(e)}function ne(e){return K(e)&&te(e.valueOf())}function oe(e){return ae(e)||ne(e)}function se(e){return ae(e)&&e>0}function ce(e){return ne(e)&&e.valueOf()>0}function pe(e){return se(e)||ce(e)}function le(e){return e!=e}G(oe,"isPrimitive",ae),G(oe,"isObject",ne),G(pe,"isPrimitive",se),G(pe,"isObject",ce);var ue="function"==typeof Float64Array;var fe="function"==typeof Float64Array?Float64Array:null;var ge="function"==typeof Float64Array?Float64Array:void 0;var de=function(){var e,r,i;if("function"!=typeof fe)return!1;try{r=new fe([1,3.14,-3.14,NaN]),i=r,e=(ue&&i instanceof Float64Array||"[object Float64Array]"===B(i))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ge:function(){throw new Error("not implemented")};function he(e){return"number"==typeof e}function we(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ve(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+we(a):we(a)+e,t&&(e="-"+e)),e}var be=String.prototype.toLowerCase,ye=String.prototype.toUpperCase;function me(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!he(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ve(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ve(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===ye.call(e.specifier)?ye.call(i):be.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Ee(e){return"string"==typeof e}var ke=Math.abs,xe=String.prototype.toLowerCase,Se=String.prototype.toUpperCase,Fe=String.prototype.replace,Ie=/e\+(\d)$/,Ve=/e-(\d)$/,$e=/^(\d+)$/,_e=/^(\d+)e/,Te=/\.0$/,Ae=/\.0*e/,Ne=/(\..*[^0])0*e/;function Ce(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!he(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":ke(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Fe.call(i,Ne,"$1e"),i=Fe.call(i,Ae,"e"),i=Fe.call(i,Te,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Fe.call(i,Ie,"e+0$1"),i=Fe.call(i,Ve,"e-0$1"),e.alternate&&(i=Fe.call(i,$e,"$1."),i=Fe.call(i,_e,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Se.call(e.specifier)?Se.call(i):xe.call(i)}function je(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Re(e,r,i){var t=r-e.length;return t<0?e:e=i?e+je(t):je(t)+e}var Oe=String.fromCharCode,Ze=isNaN,Pe=Array.isArray;function We(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ge(e){var r,i,t,a,n,o,s,c,p;if(!Pe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Ee(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=We(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(a=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Ze(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Ze(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=me(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ze(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ze(n)?String(t.arg):Oe(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ce(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ve(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Re(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Le=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Me(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ue(e){var r,i,t,a;for(i=[],a=0,t=Le.exec(e);t;)(r=e.slice(a,Le.lastIndex-t[0].length)).length&&i.push(r),i.push(Me(t)),a=Le.lastIndex,t=Le.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function Xe(e){return"string"==typeof e}function ze(e){var r,i;if(!Xe(e))throw new TypeError(ze("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ue(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Ge.apply(null,r)}function Ye(e){var r,i,t,a,n;if(!se(e))throw new TypeError(ze("invalid argument. Must provide a positive integer. Value: `%s`.",e));return i=new de(e),t=0,n=-1,a=0,function(o){var s;if(0===arguments.length)return 0===a?null:t;if(n=(n+1)%e,le(o))a=e,t=NaN;else if(a<e)t+=(r=o-t)/(a+=1);else if(le(i[n])){for(a=1,t=o,s=0;s<e;s++)if(s!==n){if(le(i[s])){a=e,t=NaN;break}a+=1,r=i[s]-t,t+=r/a}}else!1===le(t)&&(r=o-i[n],t+=r/e);return i[n]=o,t}}function qe(e){return"number"==typeof e}function Be(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function De(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Be(a):Be(a)+e,t&&(e="-"+e)),e}var He=String.prototype.toLowerCase,Je=String.prototype.toUpperCase;function Ke(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!qe(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=De(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=De(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Je.call(e.specifier)?Je.call(i):He.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Qe(e){return"string"==typeof e}var er=Math.abs,rr=String.prototype.toLowerCase,ir=String.prototype.toUpperCase,tr=String.prototype.replace,ar=/e\+(\d)$/,nr=/e-(\d)$/,or=/^(\d+)$/,sr=/^(\d+)e/,cr=/\.0$/,pr=/\.0*e/,lr=/(\..*[^0])0*e/;function ur(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!qe(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":er(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=tr.call(i,lr,"$1e"),i=tr.call(i,pr,"e"),i=tr.call(i,cr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=tr.call(i,ar,"e+0$1"),i=tr.call(i,nr,"e-0$1"),e.alternate&&(i=tr.call(i,or,"$1."),i=tr.call(i,sr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ir.call(e.specifier)?ir.call(i):rr.call(i)}function fr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function gr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+fr(t):fr(t)+e}var dr=String.fromCharCode,hr=isNaN,wr=Array.isArray;function vr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function br(e){var r,i,t,a,n,o,s,c,p;if(!wr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Qe(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=vr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(a=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,hr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,hr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Ke(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!hr(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=hr(n)?String(t.arg):dr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=ur(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=De(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=gr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var yr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function mr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Er(e){var r,i,t,a;for(i=[],a=0,t=yr.exec(e);t;)(r=e.slice(a,yr.lastIndex-t[0].length)).length&&i.push(r),i.push(mr(t)),a=yr.lastIndex,t=yr.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function kr(e){return"string"==typeof e}function xr(e){var r,i,t;if(!kr(e))throw new TypeError(xr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Er(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return br.apply(null,i)}function Sr(e){var r;if(!se(e))throw new TypeError(xr("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=Ye(e),function(e,i){if(0===arguments.length)return r();return r((i-e)/i*100)}}export{Sr as default};
//# sourceMappingURL=mod.js.map
