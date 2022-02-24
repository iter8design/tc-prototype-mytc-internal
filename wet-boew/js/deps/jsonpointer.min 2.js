/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v10.0.4 - 2021-11-18
 *
 */
!function(){"use strict";var u=[["/","~1"],["~","~0"]],_="/",n="JSON Pointer: ",f=/(\/[^\/]*)+/,c={HYPHEN_IS_NOT_SUPPORTED_IN_ARRAY_CONTEXT:'Implementation does not support "-" token for arrays.',INVALID_DOCUMENT:"JSON document is not valid.",INVALID_DOCUMENT_TYPE:"JSON document must be a string or object.",INVALID_POINTER:"Pointer is not valid.",NON_NUMBER_TOKEN_IN_ARRAY_CONTEXT:"Non-number tokens cannot be used in array context.",TOKEN_WITH_LEADING_ZERO_IN_ARRAY_CONTEXT:"Token with leading zero cannot be used in array context."};function a(t){return new Error(n+t)}function T(t){return"object"==typeof t&&null!==t}function s(t){return"string"==typeof t||t instanceof String}function E(t){return void 0===t}var t={get:function(t,n){if(s(t))try{t=JSON.parse(t)}catch(t){throw a(c.INVALID_DOCUMENT)}else if(!T(t))throw a(c.INVALID_DOCUMENT_TYPE);var i,N,t=(i=t,N={},function(t){if(!s(n=t)||""!==n&&!f.test(n))throw a(c.INVALID_POINTER);var n;if(N.hasOwnProperty(t))return N[t];for(var r,e=function(t){t=t.split(_).reverse();return t.pop(),t}(t),o=i;!E(o)&&!E(r=e.pop());)o=function(t,n){if(n=function(t){for(var n,r,e=t,o=0;o<u.length;o++)r=u[o],n=r[0],r=r[1],r=new RegExp(r,"g"),e=e.replace(r,n);return e}(n),function(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)}(t)){if("-"===n)throw a(c.HYPHEN_IS_NOT_SUPPORTED_IN_ARRAY_CONTEXT);if(!function(t){return!isNaN(Number(t))}(n))throw a(c.NON_NUMBER_TOKEN_IN_ARRAY_CONTEXT);if(1<n.length&&"0"===n[0])throw a(c.TOKEN_WITH_LEADING_ZERO_IN_ARRAY_CONTEXT);return t[n]}if(T(t))return t[n]}(o,r);return N[t]=o});return E(n)?t:t(n)}};"object"==typeof exports?module.exports=t:"function"==typeof define&&define.amd?define(function(){return t}):this.jsonpointer=t}.call(function(){"use strict";return"undefined"!=typeof window?window:this}());