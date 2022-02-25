/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.44.5 - 2021-11-18
 *
 */
!function(c,u,n){"use strict";function d(e,t){var a,i=c(e.nextSibling.firstChild),n=i.next().children().clone();t&&0!==t.length&&(a=t.toLowerCase(),n=n.filter(function(){var e=c(this),t=e.find("span.al-val").html();return 0===t.length&&(t=e.find("span.al-lbl").html()),0===a.length||0===t.toLowerCase().indexOf(a)})),i.empty().append(n),0!==n.length?(p(e),i.removeClass("hide").attr("aria-hidden","false"),e.setAttribute("aria-expanded","true")):(i.addClass("hide").attr("aria-hidden","true"),e.setAttribute("aria-expanded","false"))}function o(e){var t=e.nextSibling.firstChild;t.className+=" hide",t.innerHTML="",t.setAttribute("aria-hidden","true"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-activedescendent","")}var r="wb-datalist",g="input[list]",b="setfocus.wb",h=!1,f=n.doc,l=function(e){var t,a,i,n,r=c(e),l="<div class='wb-al-cnt'><ul role='listbox' id='wb-al-"+e.id+"' class='wb-al hide' aria-hidden='true' aria-live='polite'></ul>",s=u.getElementById(e.getAttribute("list")).getElementsByTagName("option"),d=s.length;for(l+="<ul class='wb-al-src hide' aria-hidden='true'>",n=0;n!==d;n+=1)a=(t=s[n]).getAttribute("value"),i=t.getAttribute("label"),a=a||t.innerHTML,l+="<li id='al-opt-"+e.id+"-"+n+"'><a href='javascript:;' tabindex='-1'><span class='al-val'>"+(a||"")+"</span><span class='al-lbl'>"+(i&&i!==a?i:"")+"</span></a></li>";r.after(l+"</ul></div>")},p=function(e){var t=c(e);c(e.nextSibling.firstChild).css({width:t.outerWidth(),left:t.position().left})};f.on("timerpoke.wb wb-init.wb-datalist wb-update.wb-datalist keydown click vclick touchstart",g,function(e){var t=e.target,a=e.type,i=e.which;switch(a){case"timerpoke":case"wb-init":!function(e){e=n.init(e,r,g);e&&(e.setAttribute("autocomplete","off"),e.setAttribute("role","textbox"),e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-autocomplete","list"),e.setAttribute("aria-owns","wb-al-"+e.id),e.setAttribute("aria-activedescendent",""),l(e),n.ready(c(e),r),h=!0)}(e);break;case"wb-update":e.namespace===r&&l(e.target);break;case"keydown":if(!e.ctrlKey&&!e.metaKey)return function(e,t){var a=t.target,i=a.nextSibling.firstChild,n=-1!==i.className.indexOf("hide");if(!(t.ctrlKey||t.altKey||t.metaKey))if(32===e||47<e&&e<91||95<e&&e<112||159<e&&e<177||187<e&&e<223)t.altKey||d(a,a.value+String.fromCharCode(e));else if(8!==e||t.altKey){if((38===e||40===e)&&""===a.getAttribute("aria-activedescendent"))return n&&d(a),i=(i=i.getElementsByTagName("a"))[38===e?i.length-1:0],a.setAttribute("aria-activedescendent",i.parentNode.getAttribute("id")),c(i).trigger(b),!1;n||9!==e&&27!==e&&(27!==e||t.altKey)||o(a)}else 0!==(t=(e=a.value).length)&&d(a,e.substring(0,t-1))}(i,e);break;case"click":case"vclick":case"touchstart":h&&(i&&1!==i||(-1===t.nextSibling.firstChild.className.indexOf("hide")?o(t):d(t,t.value)))}return!0}),f.on("keydown click vclick touchstart",".wb-al a, .wb-al span",function(e){var t,a,i,n,r=e.target,l=e.type,s=e.which;switch(l){case"keydown":if(!e.ctrlKey&&!e.metaKey)return function(e,t){var a,i,n,r=t.parentNode.parentNode,l=r.parentNode.previousSibling,s=c(l);if(!(event.ctrlKey||event.altKey||event.metaKey))return 32===e||47<e&&e<91||95<e&&e<112||159<e&&e<177||187<e&&e<223?(l.value+=String.fromCharCode(e),s.trigger(b),d(l,l.value),!1):8===e?(0!==(n=(i=l.value).length)&&(l.value=i.substring(0,n-1),d(l,l.value)),s.trigger(b),!1):13===e?(0===(i=(n=t.getElementsByTagName("span"))[0].innerHTML).length&&(i=n[1].innerHTML),l.value=i,s.trigger(b),o(l),!1):9===e||27===e?(s.trigger(b),o(l),!1):38===e||40===e?(a=(a=38===e?(a=t.parentNode.previousSibling)||(e=r.getElementsByTagName("li"))[e.length-1]:(a=t.parentNode.nextSibling)||r.getElementsByTagName("li")[0]).getElementsByTagName("a")[0],l.setAttribute("aria-activedescendent",a.parentNode.getAttribute("id")),c(a).trigger(b),!1):void 0}(s,r);break;case"click":case"vclick":case"touchstart":if(!s||1===s)return a="a"===(t=r).nodeName.toLowerCase()?t:t.parentNode,i=a.parentNode.parentNode.parentNode.previousSibling,n=c(i),0===(a=(t=a.getElementsByTagName("span"))[0].innerHTML).length&&(a=t[1].innerHTML),i.value=a,n.trigger(b),o(i),!1}}),f.on("focusin txt-rsz.wb win-rsz-width.wb win-rsz-height.wb",function(e){var t,a,i,n,r,l="focusin"===e.type,s=e.target;if(h)for(r=(t=f.find(g).get()).length,n=0;n!==r;n+=1)a=t[n],l?-1!==(i=a.nextElementSibling||c(a).next().get(0)).firstChild.className.indexOf("hide")||s===i||c.contains(i,s)||o(a):p(a)}),n.add(g)}(jQuery,(window,document),wb);
//# sourceMappingURL=datalist.min.js.map