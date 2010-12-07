(function(b){if(!navigator.geolocation){var i=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatibel with this plugin";},1)},u=0;navigator.geolocation=function(){var o,j={getCurrentPosition:function(p,g,d){var e=function(){clearTimeout(a);if(!(o||!window.google||!google.loader||!google.loader.ClientLocation)){var c=google.loader.ClientLocation;o={coords:{latitude:c.latitude,longitude:c.longitude,altitude:null,accuracy:43E3,altitudeAccuracy:null,
heading:parseInt("NaN",10),velocity:null},address:b.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},c.address)}}if(o)p(b.extend(o,{timestamp:(new Date).getTime()}));else g&&g({code:2,message:"POSITION_UNAVAILABLE"})},a;if(!window.google||!google.loader){if(b.webshims.modules.geolocation.options.destroyWrite){document.write=i;document.writeln=i}b(document).one("google-loader",e);b.webshims.loader.loadScript("http://www.google.com/jsapi",false,"google-loader");if(d&&d.timeout)a=
setTimeout(function(){b(document).unbind("google-loader",e);g&&g({code:3,message:"TIMEOUT"})},d.timeout)}else setTimeout(e,1)},clearWatch:b.noop};j.watchPosition=function(p,g,d){j.getCurrentPosition(p,g,d);u++;return u};return j}()}})(jQuery);
jQuery.webshims.ready("es5",function(b,i,u,o,j){i.getVisualInput=function(h){h=b(h);return(h.data("inputUIReplace")||{visual:h}).visual};var p=b.support,g=i.getVisualInput,d={checkbox:1,radio:1},e=b([]),a=function(h){h=b(h);return d[h[0].type]&&h[0].name?b(o.getElementsByName(h[0].name)).not(h[0]):e};b.extend(b.expr.filters,{"valid-element":function(h){return(b.attr(h,"validity")||{valid:true}).valid},"invalid-element":function(h){return!c(h)},willValidate:function(h){return b.attr(h,"willValidate")}});
var c=b.expr.filters["valid-element"],f=b.attr,l={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1},m;b.attr=function(h,k,n){if(h.form&&l[k]&&n!==j&&b(h).hasClass("form-ui-invalid")){var q=f.apply(this,arguments);if(c(h)){g(h).removeClass("form-ui-invalid");k=="checked"&&n&&a(h).removeClass("form-ui-invalid")}return q}return f.apply(this,arguments)};b(document).bind("focusout change refreshValidityStyle",function(h){if(!(m||!h.target||!h.target.form)){var k=b.attr(h.target,"html5element")||
h.target;if(b.attr(k,"willValidate")){var n,q;if(c(h.target)){n="form-ui-valid";q="form-ui-invalid";d[h.target.type]&&h.target.checked&&a(k).removeClass(q).removeAttr("aria-invalid")}else{n="form-ui-invalid";q="form-ui-valid";d[h.target.type]&&!h.target.checked&&a(k).removeClass(q)}g(k).addClass(n).removeClass(q);m=true;setTimeout(function(){m=false},9)}else g(k).removeClass("form-ui-invalid form-ui-valid")}});i.triggerInlineForm=function(){var h=function(k){if(typeof k!="string"||k.indexOf("-")!==
-1||k.indexOf(".")!==-1||k.indexOf('"')!==-1)return"";return"var "+k+' = this.form["'+k+'"];'};return function(k,n){var q=k["on"+n]||k.getAttribute("on"+n)||"",v;n=b.Event({type:n,target:k[0],currentTarget:k[0]});if(q&&typeof q=="string"&&k.form&&k.form.elements){var x="";v=0;for(var z=k.form.elements,s=z.length;v<s;v++){var t=z[v].name,w=z[v].id;if(t)x+=h(t);if(w&&w!==t)x+=h(w)}v=function(){eval(x+q)}.call(k,n)}b(k).trigger(n);return v}}();var r=function(){i.scrollRoot=b.browser.webkit||o.compatMode==
"BackCompat"?b(o.body):b(o.documentElement)};r();b(r);i.validityAlert=function(){var h=!b.browser.msie||parseInt(b.browser.version,10)>7?"span":"label",k={hideDelay:5E3,showFor:function(s,t,w){s=b(s);var y=g(s);z();k.clear();this.getMessage(s,t);this.position(y);this.show();if(this.hideDelay)q=setTimeout(v,this.hideDelay);w||this.setFocus(y,s[0])},setFocus:function(s,t){var w=b("input, select, textarea, .ui-slider-handle",s).filter(":visible:first");w[0]||(w=s);var y=i.scrollRoot.scrollTop(),A=w.offset().top,
B;n.attr("for",i.getID(w));if(y>A){if((B=t.id&&b('label[for="'+t.id+'"]',t.form).offset())&&B.top<A)A=B.top;i.scrollRoot.animate({scrollTop:A-5},{queue:false,duration:Math.max(Math.min(450,(y-A)*2),140)});B=true}try{w[0].focus()}catch(C){}B&&i.scrollRoot.scrollTop(y);b(o).bind("focusout.validityalert",v)},getMessage:function(s,t){b("> span",n).text(t||s.attr("validationMessage"))},position:function(s){var t=s.offset();t.top+=s.outerHeight();n.css(t)},show:function(){n.css("display")==="none"?n.fadeIn():
n.fadeTo(400,1)},hide:function(){k.clear();n.fadeOut()},clear:function(){clearTimeout(q);b(o).unbind("focusout.validityalert");n.stop().removeAttr("for")},alert:b("<"+h+' class="validity-alert" role="alert"><span class="va-box" /></'+h+">").css({position:"absolute",display:"none"})},n=k.alert,q=false,v=b.proxy(k,"hide"),x=false,z=function(){if(!x){x=true;b(function(){n.appendTo("body")})}};return k}();(function(){var h,k=[],n;b(o).bind("invalid",function(q){var v=b(q.target).addClass("form-ui-invalid").removeClass("form-ui-valid");
if(!h){h=b.Event("firstinvalid");v.trigger(h)}h&&h.isDefaultPrevented()&&q.preventDefault();k.push(q.target);q.extraData="fix";clearTimeout(n);n=setTimeout(function(){var x={type:"lastinvalid",cancelable:false,invalidlist:b(k)};h=false;k=[];b(void 0).unbind("submit.preventInvalidSubmit");v.trigger(x,x)},9)})})();(function(){if(!(!p.validity||u.noHTMLExtFixes||p.fieldsetValidation)){var h=function(k){var n=(b.attr(k,"validity")||{valid:true}).valid;!n&&k.checkValidity()&&b(k).trigger("invalid");return n};
i.addMethod("checkValidity",function(){if(this.elements||b.nodeName(this,"fieldset")){var k=true;b(this.elements||"input, textarea, select",this).each(function(){h(this)||(k=false)});return k}else if(this.checkValidity)return h(this)})}})();i.createReadyEvent("form-core")},true);
jQuery.webshims.ready("form-core",function(b,i,u,o){var j=i.validityMessages,p=b.support;j.en=j.en||j["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",
stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};j["en-US"]=j["en-US"]||j.en;j[""]=j[""]||j["en-US"];j.de=j.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",
date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",
patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var g=j[""];b(o).bind("htmlExtLangChange",function(){i.activeLang(j,"form-message",function(d){g=d})});i.createValidationMessage=function(d,e){var a=g[e];if(a&&typeof a!=="string")a=a[(d.getAttribute("type")||"").toLowerCase()]||a.defaultMessage;a&&["value","min","max","title","maxlength","label"].forEach(function(c){if(a.indexOf("{%"+c)!==-1){var f=(c=="label"?b.trim(b('label[for="'+
d.id+'"]',d.form).text()).replace(/\*$|:$/,""):b.attr(d,c))||"";a=a.replace("{%"+c+"}",f);if("value"==c)a=a.replace("{%valueLen}",f.length)}});return a||""};o=i.overrideValidationMessages||i.implement.customValidationMessage?["customValidationMessage"]:[];if(!u.noHTMLExtFixes&&!p.validationMessage||!p.validity)o.push("validationMessage");b.each(o,function(d,e){i.attr(e,{elementNames:["input","select","textarea"],getter:function(a){var c="";if(!b.attr(a,"willValidate"))return c;var f=b.attr(a,"validity")||
{valid:1};if(f.valid)return c;if(c=a.getAttribute("x-moz-errormessage")||a.getAttribute("data-errormessage")||"")return c;if(f.customError||e==="validationMessage")if(c="validationMessage"in a?a.validationMessage:b.data(a,"customvalidationMessage"))return c;b.each(f,function(l,m){if(!(l=="valid"||!m))if(c=i.createValidationMessage(a,l))return false});return c||""}})})},true);
jQuery.webshims.ready("form-core",function(b,i,u){if(!b.support.validity){i.inputTypes=i.inputTypes||{};var o=i.inputTypes,j={radio:1,checkbox:1};i.addInputType=function(a,c){o[a]=c};var p={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},g={valueMissing:function(a,c,f){var l=a[0].getAttribute("aria-required");if(!a.attr("required")){l=="true"&&a[0].setAttribute("aria-required","false");
return false}l=="false"&&a[0].setAttribute("aria-required","true");l=false;if(!("type"in f))f.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();return l=f.nodeName=="select"?!c&&a[0].type=="select-one"&&a[0].size<2&&b("> option:first-child:not(:disabled)",a).attr("selected"):j[f.type]?!b(a[0].form&&a[0].name?a[0].form[a[0].name]:[]).filter(":checked")[0]:!c},tooLong:function(a,c,f){if(c===""||f.nodeName=="select")return false;a=a.attr("maxlength");f=false;var l=c.length;if(l&&a>=0&&c.replace&&
(typeof a=="number"||a&&a==a*1))f=l>a;return f},typeMismatch:function(a,c,f){if(c===""||f.nodeName=="select")return false;var l=false;if(!("type"in f))f.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();if(o[f.type]&&o[f.type].mismatch)l=o[f.type].mismatch(c,a);return l},patternMismatch:function(a,c,f){if(c===""||f.nodeName=="select")return false;a=a.attr("pattern");if(!a)return false;return!RegExp("^(?:"+a+")$").test(c)}};i.addValidityRule=function(a,c){g[a]=c};i.addMethod("checkValidity",
function(){var a,c=function(f){var l,m=b.attr(f,"validity");if(m)b.data(f,"cachedValidity",m);else return true;if(!m.valid){l=b.Event("invalid");var r=b(f).trigger(l);if(!a&&!l.isDefaultPrevented()){i.validityAlert.showFor(r);a=true}}b.data(f,"cachedValidity",false);return m.valid};return function(){a=false;if(b.nodeName(this,"form")||b.nodeName(this,"fieldset")){for(var f=true,l=this.elements||b("input, textarea, select",this),m=0,r=l.length;m<r;m++)c(l[m])||(f=false);return f}else return this.form?
c(this):true}}());i.addMethod("setCustomValidity",function(a){b.data(this,"customvalidationMessage",""+a)});b.event.special.invalid={add:function(){b.data(this,"invalidEventShim")||b.event.special.invalid.setup.call(this)},setup:function(){b(this).bind("submit",b.event.special.invalid.handler).data("invalidEventShim",true);var a=b(this).data("events").submit;a&&a.length>1&&a.unshift(a.pop())},teardown:function(){b(this).unbind("submit",b.event.special.invalid.handler).data("invalidEventShim",false)},
handler:function(a){if(!(a.type!="submit"||!b.nodeName(a.target,"form")||b.attr(a.target,"novalidate")!=null||b.data(a.target,"novalidate")))if(!b(a.target).checkValidity()){!a.originalEvent&&u.console&&console.log&&console.log("submit");a.stopImmediatePropagation();return false}}};i.attr("validity",{elementNames:["input","select","textarea"],getter:function(a){var c=b.data(a,"cachedValidity");if(c)return c;c=b.extend({},p);if(!b.attr(a,"willValidate")||a.type=="submit")return c;var f=b(a),l=f.val(),
m={nodeName:a.nodeName.toLowerCase()};a.getAttribute("aria-invalid");c.customError=!!b.data(a,"customvalidationMessage");if(c.customError)c.valid=false;b.each(g,function(r,h){if(h(f,l,m)){c[r]=true;c.valid=false}});a.setAttribute("aria-invalid",c.valid?"false":"true");return c}});i.createBooleanAttrs("required",["input","textarea","select"]);i.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var a={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1};
return function(c){return!!(c.form&&!c.disabled&&!c.readOnly&&!a[c.type]&&b.attr(c.form,"novalidate")==null)}}()});i.addInputType("email",{mismatch:function(){var a=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(c){return!a.test(c)}}()});i.addInputType("url",{mismatch:function(){var a=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!a.test(c)}}()});var d=function(){var a=this;if(a.form){b.data(a.form,"novalidate",true);setTimeout(function(){b.data(a.form,"novalidate",false)},1)}},e={submit:1,button:1};b(document).bind("click",function(a){a.target&&a.target.form&&e[a.target.type]&&b.attr(a.target,"formnovalidate")!=null&&d.call(a.target)});i.addReady(function(a,c){var f=b("form",a).add(c.filter("form")).bind("invalid",b.noop).find("button[formnovalidate]").bind("click",d).end();setTimeout(function(){if(!document.activeElement||
!document.activeElement.form){var l=true;b("input, select, textarea",f).each(function(){if(!l)return false;if(this.getAttribute("autofocus")!=null){l=false;var m=i.getVisualInput(this),r=b("input, select, textarea, .ui-slider-handle",m).filter(":visible:first");r[0]||(r=m);try{r[0].focus()}catch(h){}}})}},9)});i.createReadyEvent("form-extend")}},true);
(function(b){if(!b.support.placeholder){var i=function(g,d,e,a,c){if(!a){a=b.data(g,"placeHolder");if(!a)return}if(c=="focus"||!c&&g===document.activeElement)a.box.removeClass("placeholder-visible");else{if(d===false)d=b.attr(g,"value");if(d)a.box.removeClass("placeholder-visible");else{if(e===false)e=b.attr(g,"placeholder");a.box[e&&!d?"addClass":"removeClass"]("placeholder-visible")}}},u=function(g){g=b(g);var d=g.attr("id"),e=!!(g.attr("title")||g.attr("aria-labeledby"));if(!e&&d)e=!!b('label[for="'+
d+'"]',g[0].form)[0];return b(e?'<span class="placeholder-text"></span>':'<label for="'+(d||b.webshims.getID(g))+'" class="placeholder-text"></label>')},o=function(){var g=/\n|\r|\f|\t/g,d={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(e){var a=b.data(e,"placeHolder");if(a)return a;a=b.data(e,"placeHolder",{text:u(e)});a.box=b(e).wrap('<span class="placeholder-box placeholder-box-'+(e.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",function(l){i(this,
false,false,a,l.type)}).parent();a.text.insertAfter(e).bind("mousedown.placeholder",function(){i(this,false,false,a,"focus");e.focus();return false});b.each(["Left","Top"],function(l,m){var r=(parseInt(b.curCSS(e,"padding"+m),10)||0)+Math.max(parseInt(b.curCSS(e,"margin"+m),10)||0,0)+(parseInt(b.curCSS(e,"border"+m+"Width"),10)||0);a.text.css("padding"+m,r)});b.curCSS(e,"lineHeight");var c={width:b(e).width(),height:b(e).height()},f=b.curCSS(e,"float");b.each(["lineHeight","fontSize","fontFamily",
"fontWeight"],function(l,m){var r=b.curCSS(e,m);a.text.css(m)!=r&&a.text.css(m,r)});c.width&&c.height&&a.text.css(c);f!=="none"&&a.box.addClass("placeholder-box-"+f);return a},update:function(e,a){if(d[b.attr(e,"type")]||b.nodeName(e,"textarea")){if(b.nodeName(e,"input"))a=a.replace(g,"");var c=o.create(e);e.setAttribute("placeholder",a);c.text.text(a);i(e,false,a,c)}}}}();b.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(g,d){o.update(g,d)},getter:function(g){return g.getAttribute("placeholder")||
""}});var j={elementNames:["input","textarea"],setter:function(g,d,e){var a=g.getAttribute("placeholder");a&&"value"in g&&i(g,d,a);e()},getter:true};b.webshims.attr("value",j);var p=b.fn.val;b.fn.val=function(g){g!==undefined&&this.each(function(){this.nodeType===1&&j.setter(this,g,b.noop)});return p.apply(this,arguments)};b.webshims.addReady(function(g,d){b("input[placeholder], textarea[placeholder]",g).add(d.filter("input[placeholder], textarea[placeholder]")).attr("placeholder",function(e,a){return a})})}})(jQuery);
jQuery.webshims.ready("form-core",function(b,i){if(!("value"in document.createElement("output"))){var u=document;(function(){var j={input:1,textarea:1},p={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1},g=function(d){var e,a=d.attr("value"),c=function(l){if(d){var m=d.attr("value");if(m!==a){a=m;if(!l||l.type!="input")i.triggerInlineForm(d[0],"input")}}},f=function(){d.unbind("focusout",f).unbind("input",c);clearInterval(e);c();d=null};clearInterval(e);e=setInterval(c,b.browser.mozilla?
250:111);setTimeout(c,9);d.bind("focusout",f).bind("input",c)};b(u).bind("focusin",function(d){if(d.target&&d.target.type&&!d.target.readonly&&!d.target.readOnly&&!d.target.disabled&&j[(d.target.nodeName||"").toLowerCase()]&&!p[d.target.type])g(b(d.target))})})();var o=function(j){if(!j.getAttribute("aria-live")){j=b(j);var p=(j.text()||"").trim(),g=j.attr("id"),d=j.attr("for"),e=b('<input class="output-shim" type="hidden" name="'+(j.attr("name")||"")+'" value="'+p+'" style="display: none" />').insertAfter(j),
a=e[0].form||u,c=function(f){e[0].value=f;f=e[0].value;j.text(f);j[0].value=f};j[0].defaultValue=p;j[0].value=p;j.attr({"aria-live":"polite"});if(g){e.attr("id",g);j.attr("aria-labeldby",i.getID(b('label[for="'+g+'"]',a)))}if(d){g=i.getID(j);d.split(" ").forEach(function(f){(f=a.getElementById(f))&&f.setAttribute("aria-controls",g)})}j.data("outputShim",c);e.data("outputShim",c);return c}};i.attr("value",{elementNames:["output","input"],getter:true,setter:function(j,p,g){var d=b.data(j,"outputShim");
if(!d)if(b.nodeName(j,"output"))d=o(j);else return g();d(p)}});i.addReady(function(j,p){b("output",j).add(p.filter("output")).each(function(){o(this)})});i.createReadyEvent("form-output")}},true);
