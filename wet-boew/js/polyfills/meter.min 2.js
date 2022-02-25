/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.44.5 - 2021-11-18
 *
 */
!function(u,a){"use strict";var m="wb-meter",r="meter",t=a.doc,n=function(t){var e,a=u(t),r=parseFloat(a.attr("min")||0),n=parseFloat(a.attr("max")||1),l=parseFloat(a.attr("high")),o=parseFloat(a.attr("low")),i=parseFloat(a.attr("optimum")),d=null!==a.attr("value")?parseFloat(a.attr("value")):t.textContent||t.innerText,s=t.children;t.textContent?t.textContent="":t.innerText&&(t.innerText=""),d<r?d=r:n<d&&(d=n),null!==o&&o<r&&(o=r,a.attr("low",o)),null!==i&&(i<r||n<i)&&(i=(n-r)/2),null!==l&&n<l&&(l=n,a.attr("high",l)),e=t.offsetWidth*((d-r)/(n-r)),(i=0===s.length?document.createElement("div"):s[0]).style.width=Math.ceil(e)+"px",0===s.length&&t.appendChild(i),l&&l<=d?a.addClass("meterValueTooHigh"):o&&d<=o?a.addClass("meterValueTooLow"):a.removeClass("meterValueTooHigh meterValueTooLow"),n<=d?a.addClass("meterIsMaxed"):a.removeClass("meterIsMaxed"),a.attr({min:r,max:n,value:d,title:a.attr("title")||d}).trigger("wb-updated."+m)};t.on("timerpoke.wb wb-init.wb-meter wb-update.wb-meter",r,function(t){var e=t.target;"wb-update"===t.type?t.namespace===m&&t.currentTarget===e&&n(e):function(t){t=a.init(t,m,r);t&&(n(t),a.ready(u(t),m))}(t)}),a.add(r)}(jQuery,(window,wb));
//# sourceMappingURL=meter.min.js.map