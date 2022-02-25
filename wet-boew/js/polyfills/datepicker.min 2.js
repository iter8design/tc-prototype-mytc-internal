/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.44.5 - 2021-11-18
 *
 */
!function(l,s){"use strict";var c,o,i,d,t,p="wb-date",u="input[type=date]",a="wb-picker",n="-picker-toggle",f=new Date,e=s.doc,h=s.date.fromDateISO,b={minDate:new Date(1800,0,1),maxDate:new Date(2100,0,1),year:f.getFullYear(),month:f.getMonth(),daysCallback:function(e,t,a,i){var n,r=a,l=this.date;i&&(i.max&&(r=r.filter(":lt("+(i.max+1)+")")),i.min&&(r=r.filter(":gt("+(i.min-1)+")"))),r.wrap("<a href='javascript:;' tabindex='-1'></a>"),l&&e===l.getFullYear()&&t===l.getMonth()?(n=a.eq(l.getDate()-1)).parent().attr("aria-selected",!0):n=e===f.getFullYear()&&t===f.getMonth()?a.eq(f.getDate()-1):r.eq(0),n.parent().removeAttr("tabindex")}},g=function(e){var t=o.hide;(i=l("<div id='"+a+"' class='picker-overlay' role='dialog' tabindex='-1' aria-hidden='true'></div>")).find("a").attr("tabindex","-1"),l("main").after(i),d=s.calendar.create(i,e.state),l("<button type='button' class='picker-close mfp-close overlay-close' title=\""+t+"\">&#xd7;<span class='wb-inv'> "+t+"</span></button>").appendTo(i)},m=function(e){var t=e.id,e=e.state.labelText,e=o.show+e,e="<span class='input-group-btn'><a href='javascript:;' button id='"+t+"-picker-toggle' class='btn btn-default picker-toggle' href='javascript:;' title=\""+e+"\"><span class='glyphicon glyphicon-calendar'></span><span class='wb-inv'>"+e+"</span></a></span>";l("#"+s.jqEscape(t)).wrap("<span class='wb-date-wrap input-group'></span>").after(e),i.slideUp(0)},w=function(){var e=this.state,t=h(this.getAttribute("min"))||e.minDate,a=h(this.getAttribute("max"))||e.maxDate,i=h(this.value);this.state.minDate=t,this.state.maxDate=a,i&&t<=i&&i<=a?(e.date=i,e.year=i.getFullYear(),e.month=i.getMonth()):e.date=null},r=function(){var e=d.field,t=d.$field,a=o.show+d.labelText;l("#"+s.jqEscape(e.id+n)).attr("title",a.replace("&#32;"," ")).children(".wb-inv").html(a),i.removeClass("open").attr("aria-hidden","true"),t.trigger("setfocus.wb")},v=function(e){var t=e.id,a=o.hide;w.call(e),d.reInit(e.state),x(),i.addClass("open").attr({"aria-controls":t,"aria-labelledby":t+n,"aria-hidden":"false"}).get(0).focus(),l("#"+s.jqEscape(t+n)).attr("title",a).children(".wb-inv").text(a)},x=function(){var e=d.field,t=d.$field.offset();i.attr("style","top:"+(t.top+e.offsetHeight)+"px;left:"+t.left+"px")};e.on("timerpoke.wb wb-init.wb-date",u,function(e){var t,a,i,n=s.init(e,p,u),r={};n&&(t=n.id,-1===n.className.indexOf("picker-field")&&(o||(a=(c=s.i18n)("space").replace("&#32;"," ").replace("&#178;",""),o={show:c("date-show").replace("\\'","'")+a,hide:c("date-hide").replace("\\'","'")+a+a+c("esc-key").replace("\\'","'"),selected:c("date-sel").replace("\\'","'")}),n.className+=" picker-field",i={field:this,$field:l(this),labelText:l("label[for="+s.jqEscape(n.id)+"]").clone().find(".datepicker-format, .error").remove().end().text()},e=h(n.getAttribute("min")),a=h(n.getAttribute("max")),e&&(i.minDate=e),a&&(i.maxDate=a),n.state=l.extend(r,b,i),(i=f>=r.minDate&&f<=r.maxDate?f:r.minDate>f?r.minDate:r.maxDate)&&(r.year=i.getFullYear(),r.month=i.getMonth()),w.call(n),d||g(n),t&&m(n),s.ready(l(n),p)))}),e.on("focusout focusin","#"+a+" .wb-clndr",function(e){switch(e.type){case"focusout":t=setTimeout(r,10);break;case"focusin":clearTimeout(t)}}),e.on("keydown","#"+a,function(e){27===e.which&&r()}),e.on("click",".picker-overlay .cal-days a",function(e){var t=e.which,a=d.field;if(!(t&&1!==t||a.disabled||a.readOnly))return a.value=l(e.currentTarget).find("time").attr("datetime"),l(a).trigger("change"),r(),!1}),e.on("click",".picker-toggle",function(e){e.preventDefault();var t,a=e.which;if(!(a&&1!==a||(t=e.currentTarget.id,(t=l("#"+s.jqEscape(t.substring(0,t.indexOf(n)))).get(0)).disabled||t.readOnly)))return t=t,"false"!==i.attr("aria-hidden")?v(t):r(),!1}),e.on("click",".picker-close",function(e){var t=e.which;t&&1!==t||(e.stopPropagation?e.stopImmediatePropagation():e.cancelBubble=!0,r())}),e.on("txt-rsz.wb win-rsz-width.wb win-rsz-height.wb",function(){i&&i.hasClass("open")&&x()}),s.add(u)}(jQuery,(window,document,wb));
//# sourceMappingURL=datepicker.min.js.map