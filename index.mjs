// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.3.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex-floating-point-data-type@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-boolean-data-type@v0.0.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex@v0.1.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-boolean@v0.0.2-esm/index.mjs";function l(e,t,r,s,n){var i,d;for(i=n,d=0;d<e.length;d++)d!==t&&(r[i]=e[d],i+=s);return r}function p(e,r,s,p,j){var c,h;if((r=t(r,e.length-1))<0)throw new RangeError(n("invalid argument. Index argument is out-of-bounds. Value: `%d`.",r));return c=o(e),h=o(s),c.accessorProtocol||h.accessorProtocol?i(c.dtype)&&i(h.dtype)?(function(e,t,r,s,n){var i,d,o,a;for(i=2*s,d=2*n,o=0;o<e.length/2;o++)o!==t&&(a=2*o,r[d]=e[a],r[d+1]=e[a+1],d+=i)}(a(e,0),r,a(s,0),p,j),s):d(c.dtype)&&d(h.dtype)?(l(m(e,0),r,m(s,0),p,j),s):(function(e,t,r,s,n){var i,d,o,a,m,l;for(i=e.data,d=r.data,o=e.accessors[0],a=r.accessors[1],m=n,l=0;l<i.length;l++)l!==t&&(a(d,m,o(i,l)),m+=s)}(c,r,h,p,j),s):(l(e,r,s,p,j),s)}function j(e,i){var d;if((i=t(i,e.length-1))<0)throw new RangeError(n("invalid argument. Index argument is out-of-bounds. Value: `%d`.",i));return p(e,i,d=r(e.length-1,s(e)||"generic"),1,0),d}e(j,"assign",p);export{p as assign,j as default};
//# sourceMappingURL=index.mjs.map