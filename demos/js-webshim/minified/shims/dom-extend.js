jQuery.webshims.ready("es5",function(l,k,z,s,n){var t=l.support,y=k.modules,w=Object.prototype.hasOwnProperty,u=l.attr,p={},o={};l.attr=function(b,c,a,f,g){var i=(b.nodeName||"").toLowerCase();if(!i||b.nodeType!==1)return u(b,c,a,f,g);var d=p[i],e,j,h;if(d)d=d[c];if(!d)if(d=p["*"])d=d[c];if(d){h=l.data(b,"_polyfillblockProperty")||l.data(b,"_polyfillblockProperty",{get:{},set:{},contentInit:{}});if(a===n){if(h.get[c])return;h.get[c]=true;j=d.get?d.get.call(b):d.value;h.get[c]=false;return j}else if(d.set){if(h.set[c])return;
h.set[c]=true;if(b.readyState==="loading"&&!h.contentInit&&!h.get[c]&&d.get&&a===k.contentAttr(b,c)){h.contentInit=true;a=d.get.call(b)}j=d.set.call(b,a);e=true;h.set[c]=false}}e||(j=u(b,c,a,f,g));a!==n&&o[i]&&o[i][c]&&l.each(o[i][c],function(m,q){q.call(b,a)});return j};var x=function(b,c,a){p[b]||(p[b]={});var f=p[b][c],g=function(i,d,e){if(d&&d[i])return d[i];if(e&&e[i])return e[i];return function(j){return u(this,c,j)}};p[b][c]=a;if(a.value===n){if(!a.set)a.set=a.writeable?g("set",a,f):function(){throw c+
"is readonly on "+b;};if(!a.get)a.get=g("get",a,f)}l.each(["value","get","set"],function(i,d){if(a[d])a["_sup"+d]=g(d,f)})};(function(){var b=s.createElement("span"),c=b.style,a={},f=function(g){g.props.forEach(function(i){if(!a[i]){a[i]=true;c.behavior+=", "+i;if(g.feature&&b.readyState!="complete"){k.waitReady(g.feature);l(b).one("readystatechange",function(){k.unwaitReady(g.feature)})}}})};k.preloadHTCs.forEach(f);k.preloadHTCs={push:f}})();var r=function(){var b={},c={},a;k.addReady(function(d,
e){var j=function(h){if(!b[h]){b[h]=l(d.getElementsByTagName(h));if(e[0]&&l.nodeName(e[0],h))b[h]=b[h].add(e)}};b={};l.each(c,function(h,m){j(h);m.forEach(function(q){b[h].each(q)})});a=true});var f=function(d,e){if(c[d])c[d].push(e);else c[d]=[e];if(a){b[d]=b[d]||l(s.getElementsByTagName(d));b[d].each(e)}},g={},i={};return{extend:function(d,e,j){g[e]||(g[e]=0);g[e]++;f(d,function(){v(this,e,j,"_sup"+e+g[e]);k.defineProperty(this,e,j)})},extendDHTML:function(d,e,j,h){k.preloadHTCs.push({feature:h,
props:[e]});i[d]||(i[d]="");if(i[d].indexOf(e)==-1){i[d]+=e;f(d,function(){this.style.behavior+=this.style.behavior?", "+e:e})}},init:function(d,e,j){f(d,function(){var h=l(this);if(j!=="all")h=h.filter("["+e+"]");h.attr(e,function(m,q){return q})})}}}(),v=function(b,c,a,f){var g,i=function(d,e){if(d&&d[e])return d[e];if(d.value!==n){if(e=="set")return f?function(j){l.data(b,f).value=j}:function(j){d.value=j};if(e=="get")return f?function(){return l.data(b,f).value}:function(){return d.value}}return function(j){return k.contentAttr(this,
c,j)}};if(b&&c){for(;b&&c in b&&!w.call(b,c);)b=k.getPrototypeOf(b);g=k.getOwnPropertyDescriptor(b,c)||{configurable:true};if(!g.configurable&&!g.writeable)return false;f&&l.data(b,f,g);if(a.get)a._supget=i(g,"get");if(a.set)a._supset=i(g,"set");if(a.value||g.value!==n)a._supvalue=g.value}if(a.value===n){if(!a.set)a.set=a._supset||!a.writeable?function(){throw c+"is readonly on "+this.nodeName;}:i(a,"set");if(!a.get)a.get=a._supget||i(a,"get")}return true};l.extend(k,{defineNodeNameProperty:function(b,
c,a,f,g,i){a=l.extend({writeable:true},a);var d,e=false,j;k.cfg.extendNative&&f&&function(){var h=s.createElement(b);if(t.objectAccessor&&t.contentAttr){var m=k.getPrototypeOf(h);if(c in h)if(w.call(h,c)){d=k.getOwnPropertyDescriptor(h,c);if(d.configurable){r.extend(b,c,a);e=true}}else{if(v(m,c,a)){k.defineProperty(m,c,a);e=true}}else{v(false,false,a);k.defineProperty(m,c,a);e=true}}else if(a.value!==n){r.extend(b,c,a);e=true}else if(g&&t.dhtmlBehavior&&!(c in h)){j=e=true;x(b,c,a);r.extendDHTML(b,
"url("+k.loader.makePath("htc/"+(typeof g=="string"?g:c)+".htc")+")",c,i)}}();if(!e){f&&k.cfg.extendNative&&k.log("could not extend "+b+"["+c+"] fallback to jQuery extend");x(b,c,a)}if(a.contentAttr&&!j||a.init)r.init(b,c);return a},defineNodeNamesProperty:function(b,c,a,f,g,i){if(typeof b=="string")b=b.split(/\s*,\s*/);b.forEach(function(d){k.defineNodeNameProperty(d,c,a,f,g,i)})},onNodeNamesPropertyModify:function(b,c,a){if(typeof b=="string")b=b.split(/\s*,\s*/);if(l.isFunction(a))a={set:a};b.forEach(function(f){o[f]||
(o[f]={});o[f][c]||(o[f][c]=[]);a.set&&o[f][c].push(a.set);a.init&&r.init(f,c)})},defineNodeNamesBooleanProperty:function(b,c,a,f,g,i){k.defineNodeNamesProperty(b,c,{set:function(d){d=this.readyState==="loading"&&typeof d=="string"&&d===k.contentAttr(this,c)?true:!!d;k.contentAttr(this,c,d);a&&a.set.call(this,d);return d},get:function(){return k.contentAttr(this,c)!=null}},f,g,i)},contentAttr:function(b,c,a){if(b.nodeName){if(a===n){a=(b.attributes[c]||{}).value;return a==null?n:a}if(typeof a=="boolean")a?
b.setAttribute(c,c):b.removeAttribute(c);else b.setAttribute(c,a)}},activeLang:function(){var b=[navigator.browserLanguage||navigator.language||""],c=l("html").attr("lang"),a;c&&b.push(c);return function(f,g,i){if(f)if(!g||!i){if(f!==b[0]){b[0]=f;clearTimeout(a);a=setTimeout(function(){l(s).triggerHandler("webshimLocalizationReady",b)},0)}}else{var d=(g=y[g].options)&&g.availabeLangs,e=function(j){if(l.inArray(j,d)!==-1){k.loader.loadScript(g.langSrc+j+".js",function(){f[j]&&i(f[j])});return true}return false};
l.each(b,function(j,h){var m=h.split("-")[0];if(f[h]||f[m]){i(f[h]||f[m]);return false}if(d&&g.langSrc&&(e(h)||e(m)))return false})}return b}}()});k.isReady("webshimLocalization",true);k.isReady("dom-extend",true)});
