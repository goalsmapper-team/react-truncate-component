"use strict";var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);const r=e=>e.replace(/\s+$/,"");module.exports=t=>{var{children:l,ellipsis:o="...",lines:u=1,trimWhitespace:i=!1,onTruncate:c,width:a}=t,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n}(t,["children","ellipsis","lines","trimWhitespace","onTruncate","width"]);const f=e.useRef(null),d=e.useRef(null),p=e.useRef(null),m=e.useRef(null),v=e.useRef(null),[h,b]=function(e){const t=n.default.useRef(null),[r,l]=n.default.useState(e);n.default.useEffect((()=>{t.current&&(t.current(r),t.current=null)}),[r]);const o=n.default.useCallback(((e,n)=>(t.current=n||null,l(e))),[]);return[r,o]}(0);e.useEffect((()=>{const e=document.createElement("canvas");v.current=e.getContext("2d");const t=p.current;return()=>{var e;m.current&&cancelAnimationFrame(m.current),t&&(null===(e=t.parentNode)||void 0===e||e.removeChild(t))}}),[]);const g=e.useCallback((e=>{var t;if(!f.current)return;let n=a;if(n||(n=f.current.parentNode instanceof HTMLElement?Math.floor(null===(t=f.current.parentNode)||void 0===t?void 0:t.getBoundingClientRect().width):0),!n)return window.requestAnimationFrame((()=>g(e)));const r=window.getComputedStyle(f.current),l=[r.fontWeight,r.fontStyle,r.fontSize,r.fontFamily].join(" ");v.current&&(v.current.font=l),b(n,e)}),[b,a]);e.useEffect((()=>{const e=()=>{g()};return g((()=>{var e;d.current&&(null===(e=d.current.parentNode)||void 0===e||e.removeChild(d.current))})),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[a,g]);const y=e.useCallback((e=>{"function"==typeof c&&(m.current=window.requestAnimationFrame((()=>{c(e)})))}),[c]),w=e.useCallback(((e,t,r)=>{if(t===r.length-1)return n.default.createElement("span",{key:t},e,o);{const r=n.default.createElement("br",{key:t+"br"});return e?[n.default.createElement("span",{key:t},e),r]:r}}),[o]),E=e=>{var t;return(null===(t=v.current)||void 0===t?void 0:t.measureText(e).width)||0},j=e.useMemo((()=>{if(!!(!f.current||!h))return null;const e=()=>{var e;const t=[],n=((e,t="")=>{var n;if(!e)return t;const r=document.createElement("div"),l="innerText"in e?"innerText":"textContent";r.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");let o=r[l];const u=document.createElement("div");return u.innerHTML="foo<br/>bar","foo\nbar"!==(null===(n=u[l])||void 0===n?void 0:n.replace(/\r\n|\r/g,"\n"))&&(r.innerHTML=r.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),o=r[l]),o||t})(d.current),l=n.split("\n").map((e=>e.split(" ")));let o=!0;const c=(null===(e=p.current)||void 0===e?void 0:e.offsetWidth)||0;for(let e=1;e<=u;e++){const n=l[0];if(0===n.length){t.push(),l.shift(),e--;continue}let a=n.join(" ");if(E(a)<=h&&1===l.length){o=!1,t.push(a);break}if(e===u){const e=n.join(" ");let l=0,o=e.length-1;for(;l<=o;){const t=Math.floor((l+o)/2),n=e.slice(0,t+1);E(n)+c<=h?l=t+1:o=t-1}let u=e.slice(0,l);if(i)for(u=r(u);!u.length&&t.length;){const e=t.pop();u=r(e||"")}t.push(u)}else{let r=0,o=n.length-1;for(;r<=o;){const e=Math.floor((r+o)/2),t=n.slice(0,e+1).join(" ");E(t)<=h?r=e+1:o=e-1}if(0===r){e=u-1;continue}a=n.slice(0,r).join(" "),l[0].splice(0,r),t.push(a)}}return y(o),t};return u>0?e().map(w):l}),[l,y,u,w,h,i]);return n.default.createElement("span",Object.assign({},s,{ref:f}),n.default.createElement("span",null,j),n.default.createElement("span",{ref:d},l),n.default.createElement("span",{ref:p,style:{position:"fixed",visibility:"hidden",top:0,left:0}},o))};
//# sourceMappingURL=index.js.map