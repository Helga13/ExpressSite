/*
 AngularJS v1.1.0
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(T,aa,s){'use strict';function m(b,a,c){var d;if(b)if(L(b))for(d in b)d!="prototype"&&d!="length"&&d!="name"&&b.hasOwnProperty(d)&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==m)b.forEach(a,c);else if(I(b)&&wa(b.length))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function mb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function fc(b,a,c){for(var d=mb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}
function nb(b){return function(a,c){b(c,a)}}function xa(){for(var b=Y.length,a;b;){b--;a=Y[b].charCodeAt(0);if(a==57)return Y[b]="A",Y.join("");if(a==90)Y[b]="0";else return Y[b]=String.fromCharCode(a+1),Y.join("")}Y.unshift("0");return Y.join("")}function D(b){m(arguments,function(a){a!==b&&m(a,function(a,d){b[d]=a})});return b}function G(b){return parseInt(b,10)}function ya(b,a){return D(new (D(function(){},{prototype:b})),a)}function C(){}function ma(b){return b}function J(b){return function(){return b}}
function v(b){return typeof b=="undefined"}function x(b){return typeof b!="undefined"}function I(b){return b!=null&&typeof b=="object"}function F(b){return typeof b=="string"}function wa(b){return typeof b=="number"}function na(b){return Ta.apply(b)=="[object Date]"}function K(b){return Ta.apply(b)=="[object Array]"}function L(b){return typeof b=="function"}function oa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Q(b){return F(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b}function gc(b){return b&&
(b.nodeName||b.bind&&b.find)}function Ua(b,a,c){var d=[];m(b,function(b,g,h){d.push(a.call(c,b,g,h))});return d}function hc(b,a){var c=0,d;if(K(b)||F(b))return b.length;else if(I(b))for(d in b)(!a||b.hasOwnProperty(d))&&c++;return c}function Va(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function za(b,a){var c=Va(b,a);c>=0&&b.splice(c,1);return a}function U(b,a){if(oa(b)||b&&b.$evalAsync&&b.$watch)throw y("Can't copy Window or Scope");if(a){if(b===
a)throw y("Can't copy equivalent objects or arrays");if(K(b)){for(;a.length;)a.pop();for(var c=0;c<b.length;c++)a.push(U(b[c]))}else for(c in m(a,function(b,c){delete a[c]}),b)a[c]=U(b[c])}else(a=b)&&(K(b)?a=U(b,[]):na(b)?a=new Date(b.getTime()):I(b)&&(a=U(b,{})));return a}function ic(b,a){var a=a||{},c;for(c in b)b.hasOwnProperty(c)&&c.substr(0,2)!=="$$"&&(a[c]=b[c]);return a}function ga(b,a){if(b===a)return!0;if(b===null||a===null)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&
c=="object")if(K(b)){if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ga(b[d],a[d]))return!1;return!0}}else if(na(b))return na(a)&&b.getTime()==a.getTime();else{if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||oa(b)||oa(a))return!1;c={};for(d in b){if(d.charAt(0)!=="$"&&!L(b[d])&&!ga(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c[d]&&d.charAt(0)!=="$"&&!L(a[d]))return!1;return!0}return!1}function Wa(b,a){var c=arguments.length>2?ha.call(arguments,2):[];return L(a)&&!(a instanceof RegExp)?c.length?
function(){return arguments.length?a.apply(b,c.concat(ha.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}:a}function jc(b,a){var c=a;/^\$+/.test(b)?c=s:oa(a)?c="$WINDOW":a&&aa===a?c="$DOCUMENT":a&&a.$evalAsync&&a.$watch&&(c="$SCOPE");return c}function ba(b,a){return JSON.stringify(b,jc,a?"  ":null)}function ob(b){return F(b)?JSON.parse(b):b}function Xa(b){b&&b.length!==0?(b=B(""+b),b=!(b=="f"||b=="0"||b=="false"||b=="no"||b=="n"||b=="[]")):b=!1;
return b}function pa(b){b=u(b).clone();try{b.html("")}catch(a){}return u("<div>").append(b).html().match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+B(b)})}function Ya(b){var a={},c,d;m((b||"").split("&"),function(b){b&&(c=b.split("="),d=decodeURIComponent(c[0]),a[d]=x(c[1])?decodeURIComponent(c[1]):!0)});return a}function pb(b){var a=[];m(b,function(b,d){a.push(Za(d,!0)+(b===!0?"":"="+Za(b,!0)))});return a.length?a.join("&"):""}function $a(b){return Za(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function Za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(a?null:/%20/g,"+")}function kc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,h=["ng:app","ng-app","x-ng-app","data-ng-app"],f=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;m(h,function(a){h[a]=!0;c(aa.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(m(b.querySelectorAll("."+a),c),m(b.querySelectorAll("."+a+"\\:"),c),m(b.querySelectorAll("["+
a+"]"),c))});m(d,function(a){if(!e){var b=f.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):m(a.attributes,function(b){if(!e&&h[b.name])e=a,g=b.value})}});e&&a(e,g?[g]:[])}function qb(b,a){b=u(b);a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");var c=rb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,h){a.$apply(function(){b.data("$injector",h);c(b)(a)})}]);return c}function ab(b,a){a=a||"_";return b.replace(lc,
function(b,d){return(d?a:"")+b.toLowerCase()})}function qa(b,a,c){if(!b)throw new y("Argument '"+(a||"?")+"' is "+(c||"required"));return b}function ra(b,a,c){c&&K(b)&&(b=b[b.length-1]);qa(L(b),a,"not a function, got "+(b&&typeof b=="object"?b.constructor.name||"Object":typeof b));return b}function mc(b){function a(a,b,e){return a[b]||(a[b]=e())}return a(a(b,"angular",Object),"module",function(){var b={};return function(d,e,g){e&&b.hasOwnProperty(d)&&(b[d]=null);return a(b,d,function(){function a(c,
d,e){return function(){b[e||"push"]([c,d,arguments]);return k}}if(!e)throw y("No module: "+d);var b=[],c=[],j=a("$injector","invoke"),k={_invokeQueue:b,_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:j,run:function(a){c.push(a);
return this}};g&&j(g);return k})}})}function sb(b){return b.replace(nc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(oc,"Moz$1")}function bb(b,a){function c(){var e;for(var b=[this],c=a,h,f,i,j,k,l,n;b.length;){h=b.shift();f=0;for(i=h.length;f<i;f++){j=u(h[f]);c?(n=(k=j.data("events"))&&k.$destroy)&&m(n,function(a){a.handler()}):c=!c;k=0;for(e=(l=j.children()).length,j=e;k<j;k++)b.push(ia(l[k]))}}return d.apply(this,arguments)}var d=ia.fn[b],d=d.$original||d;c.$original=d;ia.fn[b]=c}function O(b){if(b instanceof
O)return b;if(!(this instanceof O)){if(F(b)&&b.charAt(0)!="<")throw y("selectors not implemented");return new O(b)}if(F(b)){var a=aa.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);cb(this,a.childNodes);this.remove()}else cb(this,b)}function db(b){return b.cloneNode(!0)}function sa(b){tb(b);for(var a=0,b=b.childNodes||[];a<b.length;a++)sa(b[a])}function ub(b,a,c){var d=ca(b,"events");ca(b,"handle")&&(v(a)?m(d,function(a,c){eb(b,c,a);delete d[c]}):v(c)?(eb(b,a,d[a]),
delete d[a]):za(d[a],c))}function tb(b){var a=b[Aa],c=Ba[a];c&&(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),ub(b)),delete Ba[a],b[Aa]=s)}function ca(b,a,c){var d=b[Aa],d=Ba[d||-1];if(x(c))d||(b[Aa]=d=++pc,d=Ba[d]={}),d[a]=c;else return d&&d[a]}function vb(b,a,c){var d=ca(b,"data"),e=x(c),g=!e&&x(a),h=g&&!I(a);!d&&!h&&ca(b,"data",d={});if(e)d[a]=c;else if(g)if(h)return d&&d[a];else D(d,a);else return d}function Ca(b,a){return(" "+b.className+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" ")>
-1}function wb(b,a){a&&m(a.split(" "),function(a){b.className=Q((" "+b.className+" ").replace(/[\n\t]/g," ").replace(" "+Q(a)+" "," "))})}function xb(b,a){a&&m(a.split(" "),function(a){if(!Ca(b,a))b.className=Q(b.className+" "+Q(a))})}function cb(b,a){if(a)for(var a=!a.nodeName&&x(a.length)&&!oa(a)?a:[a],c=0;c<a.length;c++)b.push(a[c])}function yb(b,a){return Da(b,"$"+(a||"ngController")+"Controller")}function Da(b,a,c){b=u(b);for(b[0].nodeType==9&&(b=b.find("html"));b.length;){if(c=b.data(a))return c;
b=b.parent()}}function zb(b,a){var c=Ea[a.toLowerCase()];return c&&Ab[b.nodeName]&&c}function qc(b,a){var c=function(c,e){if(!c.preventDefault)c.preventDefault=function(){c.returnValue=!1};if(!c.stopPropagation)c.stopPropagation=function(){c.cancelBubble=!0};if(!c.target)c.target=c.srcElement||aa;if(v(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented};m(a[e||c.type],
function(a){a.call(b,c)});Z<=8?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function ja(b){var a=typeof b,c;if(a=="object"&&b!==null)if(typeof(c=b.$$hashKey)=="function")c=b.$$hashKey();else{if(c===s)c=b.$$hashKey=xa()}else c=b;return a+":"+c}function Fa(b){m(b,this.put,this)}function fb(){}function Bb(b){var a,c;if(typeof b=="function"){if(!(a=b.$inject))a=[],c=b.toString().replace(rc,
""),c=c.match(sc),m(c[1].split(tc),function(b){b.replace(uc,function(b,c,d){a.push(d)})}),b.$inject=a}else K(b)?(c=b.length-1,ra(b[c],"fn"),a=b.slice(0,c)):ra(b,"fn",!0);return a}function rb(b){function a(a){return function(b,c){if(I(b))m(b,nb(a));else return a(b,c)}}function c(a,b){L(b)&&(b=l.instantiate(b));if(!b.$get)throw y("Provider "+a+" must define $get factory method.");return k[a+f]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];m(a,function(a){if(!j.get(a))if(j.put(a,!0),
F(a)){var c=ta(a);b=b.concat(e(c.requires)).concat(c._runBlocks);try{for(var d=c._invokeQueue,c=0,f=d.length;c<f;c++){var g=d[c],i=l.get(g[0]);i[g[1]].apply(i,g[2])}}catch(h){throw h.message&&(h.message+=" from "+a),h;}}else if(L(a))try{b.push(l.invoke(a))}catch(o){throw o.message&&(o.message+=" from "+a),o;}else if(K(a))try{b.push(l.invoke(a))}catch(n){throw n.message&&(n.message+=" from "+String(a[a.length-1])),n;}else ra(a,"module")});return b}function g(a,b){function c(d){if(typeof d!=="string")throw y("Service name expected");
if(a.hasOwnProperty(d)){if(a[d]===h)throw y("Circular dependency: "+i.join(" <- "));return a[d]}else try{return i.unshift(d),a[d]=h,a[d]=b(d)}finally{i.shift()}}function d(a,b,e){var f=[],g=Bb(a),j,h,o;h=0;for(j=g.length;h<j;h++)o=g[h],f.push(e&&e.hasOwnProperty(o)?e[o]:c(o,i));a.$inject||(a=a[j]);switch(b?-1:f.length){case 0:return a();case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],f[1],f[2],f[3],f[4]);case 6:return a(f[0],
f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(K(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return I(e)?e:c},get:c,annotate:Bb}}var h={},f="Provider",i=[],j=new Fa,k={$provide:{provider:a(c),
factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,J(b))}),constant:a(function(a,b){k[a]=b;n[a]=b}),decorator:function(a,b){var c=l.get(a+f),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},l=k.$injector=g(k,function(){throw y("Unknown provider: "+i.join(" <- "));}),n={},p=n.$injector=g(n,function(a){a=l.get(a+f);return p.invoke(a.$get,a)});m(e(b),function(a){p.invoke(a||C)});
return p}function vc(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;m(a,function(a){!b&&B(a.nodeName)==="a"&&(b=a)});return b}function g(){var b=c.hash(),d;b?(d=h.getElementById(b))?d.scrollIntoView():(d=e(h.getElementsByName(b)))?d.scrollIntoView():b==="top"&&a.scrollTo(0,0):a.scrollTo(0,0)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function wc(b,a,c,
d){function e(a){try{a.apply(null,ha.call(arguments,1))}finally{if(o--,o===0)for(;t.length;)try{t.pop()()}catch(b){c.error(b)}}}function g(a,b){(function ea(){m(q,function(a){a()});r=b(ea,a)})()}function h(){da!=f.url()&&(da=f.url(),m(w,function(a){a(f.url())}))}var f=this,i=a[0],j=b.location,k=b.history,l=b.setTimeout,n=b.clearTimeout,p={};f.isMock=!1;var o=0,t=[];f.$$completeOutstandingRequest=e;f.$$incOutstandingRequestCount=function(){o++};f.notifyWhenNoOutstandingRequests=function(a){m(q,function(a){a()});
o===0?a():t.push(a)};var q=[],r;f.addPollFn=function(a){v(r)&&g(100,l);q.push(a);return a};var da=j.href,E=a.find("base");f.url=function(a,b){if(a){if(da!=a)return da=a,d.history?b?k.replaceState(null,"",a):(k.pushState(null,"",a),E.attr("href",E.attr("href"))):b?j.replace(a):j.href=a,f}else return j.href.replace(/%27/g,"'")};var w=[],P=!1;f.onUrlChange=function(a){P||(d.history&&u(b).bind("popstate",h),d.hashchange?u(b).bind("hashchange",h):f.addPollFn(h),P=!0);w.push(a);return a};f.baseHref=function(){var a=
E.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):a};var V={},z="",M=f.baseHref();f.cookies=function(a,b){var d,e,f,g;if(a)if(b===s)i.cookie=escape(a)+"=;path="+M+";expires=Thu, 01 Jan 1970 00:00:00 GMT";else{if(F(b))d=(i.cookie=escape(a)+"="+escape(b)+";path="+M).length+1,d>4096&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"),V.length>20&&c.warn("Cookie '"+a+"' possibly not set or overflowed because too many cookies were already set ("+
V.length+" > 20 )")}else{if(i.cookie!==z){z=i.cookie;d=z.split("; ");V={};for(f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),g>0&&(V[unescape(e.substring(0,g))]=unescape(e.substring(g+1)))}return V}};f.defer=function(a,b){var c;o++;c=l(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};f.defer.cancel=function(a){return p[a]?(delete p[a],n(a),e(C),!0):!1}}function xc(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new wc(b,d,a,c)}]}function yc(){this.$get=function(){function b(b,
d){function e(a){if(a!=l){if(n){if(n==a)n=a.n}else n=a;g(a.n,a.p);g(a,l);l=a;l.n=null}}function g(a,b){if(a!=b){if(a)a.p=b;if(b)b.n=a}}if(b in a)throw y("cacheId "+b+" taken");var h=0,f=D({},d,{id:b}),i={},j=d&&d.capacity||Number.MAX_VALUE,k={},l=null,n=null;return a[b]={put:function(a,b){var c=k[a]||(k[a]={key:a});e(c);v(b)||(a in i||h++,i[a]=b,h>j&&this.remove(n.key))},get:function(a){var b=k[a];if(b)return e(b),i[a]},remove:function(a){var b=k[a];if(b==l)l=b.p;if(b==n)n=b.n;g(b.n,b.p);delete k[a];
delete i[a];h--},removeAll:function(){i={};h=0;k={};l=n=null},destroy:function(){k=f=i=null;delete a[b]},info:function(){return D({},f,{size:h})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function zc(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Cb(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g="Template must have exactly one root element. was: ";
this.directive=function f(d,e){F(d)?(qa(e,"directive"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];m(a[d],function(a){try{var f=b.invoke(a);if(L(f))f={compile:J(f)};else if(!f.compile&&f.link)f.compile=J(f.link);f.priority=f.priority||0;f.name=f.name||d;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(g){c(g)}});return e}])),a[d].push(e)):m(d,nb(f));return this};this.$get=["$injector","$interpolate","$exceptionHandler",
"$http","$templateCache","$parse","$controller","$rootScope",function(b,i,j,k,l,n,p,o){function t(a,b,c){a instanceof u||(a=u(a));m(a,function(b,c){b.nodeType==3&&(a[c]=u(b).wrap("<span></span>").parent()[0])});var d=r(a,b,a,c);return function(b,c){qa(b,"scope");var e=c?ua.clone.call(a):a;e.data("$scope",b);q(e,"ng-scope");c&&c(e,b);d&&d(b,e,e);return e}}function q(a,b){try{a.addClass(b)}catch(c){}}function r(a,b,c,d){function e(a,c,d,g){for(var j,i,n,k,l,o=0,p=0,q=f.length;o<q;p++)n=c[p],j=f[o++],
i=f[o++],j?(j.scope?(k=a.$new(I(j.scope)),u(n).data("$scope",k)):k=a,(l=j.transclude)||!g&&b?j(i,k,n,d,function(b){return function(c){var d=a.$new();return b(d,c).bind("$destroy",Wa(d,d.$destroy))}}(l||b)):j(i,k,n,s,g)):i&&i(a,n.childNodes,s,g)}for(var f=[],g,j,i,n=0;n<a.length;n++)j=new ea,g=da(a[n],[],j,d),j=(g=g.length?E(g,a[n],j,b,c):null)&&g.terminal?null:r(a[n].childNodes,g?g.transclude:b),f.push(g),f.push(j),i=i||g||j;return i?e:null}function da(a,b,c,f){var g=c.$attr,j;switch(a.nodeType){case 1:w(b,
fa(Db(a).toLowerCase()),"E",f);var i,n,k;j=a.attributes;for(var l=0,o=j&&j.length;l<o;l++)if(i=j[l],i.specified)n=i.name,k=fa(n.toLowerCase()),g[k]=n,c[k]=i=Q(Z&&n=="href"?decodeURIComponent(a.getAttribute(n,2)):i.value),zb(a,k)&&(c[k]=!0),W(a,b,i,k),w(b,k,"A",f);a=a.className;if(F(a))for(;j=e.exec(a);)k=fa(j[2]),w(b,k,"C",f)&&(c[k]=Q(j[3])),a=a.substr(j.index+j[0].length);break;case 3:H(b,a.nodeValue);break;case 8:try{if(j=d.exec(a.nodeValue))k=fa(j[1]),w(b,k,"M",f)&&(c[k]=Q(j[2]))}catch(p){}}b.sort(z);
return b}function E(a,b,c,d,e){function f(a,b){if(a)a.require=A.require,o.push(a);if(b)b.require=A.require,$.push(b)}function i(a,b){var c,d="data",e=!1;if(F(a)){for(;(c=a.charAt(0))=="^"||c=="?";)a=a.substr(1),c=="^"&&(d="inheritedData"),e=e||c=="?";c=b[d]("$"+a+"Controller");if(!c&&!e)throw y("No controller: "+a);}else K(a)&&(c=[],m(a,function(a){c.push(i(a,b))}));return c}function k(a,d,e,f,g){var l,q,P,t,Ha;l=b===e?c:ic(c,new ea(u(e),c.$attr));q=l.$$element;if(r&&I(r.scope)){var E=/^\s*([@=&])\s*(\w*)\s*$/,
z=d.$parent||d;m(r.scope,function(a,b){var c=a.match(E)||[],e=c[2]||b,f,g,j;switch(c[1]){case "@":l.$observe(e,function(a){d[b]=a});l.$$observers[e].$$scope=z;break;case "=":g=n(l[e]);j=g.assign||function(){f=d[b]=g(z);throw y(Eb+l[e]+" (directive: "+r.name+")");};f=d[b]=g(z);d.$watch(function(){var a=g(z);a!==d[b]&&(a!==f?f=d[b]=a:j(z,f=d[b]));return a});break;case "&":g=n(l[e]);d[b]=function(a){return g(z,a)};break;default:throw y("Invalid isolate scope definition for directive "+r.name+": "+a);
}})}x&&m(x,function(a){var b={$scope:d,$element:q,$attrs:l,$transclude:g};Ha=a.controller;Ha=="@"&&(Ha=l[a.name]);q.data("$"+a.name+"Controller",p(Ha,b))});f=0;for(P=o.length;f<P;f++)try{t=o[f],t(d,q,l,t.require&&i(t.require,q))}catch(w){j(w,pa(q))}a&&a(d,e.childNodes,s,g);f=0;for(P=$.length;f<P;f++)try{t=$[f],t(d,q,l,t.require&&i(t.require,q))}catch(Ia){j(Ia,pa(q))}}for(var l=-Number.MAX_VALUE,o=[],$=[],r=null,E=null,w=null,z=c.$$element=u(b),A,H,W,C,v=d,x,D,X,B=0,G=a.length;B<G;B++){A=a[B];W=s;
if(l>A.priority)break;if(X=A.scope)M("isolated scope",E,A,z),I(X)&&(q(z,"ng-isolate-scope"),E=A),q(z,"ng-scope"),r=r||A;H=A.name;if(X=A.controller)x=x||{},M("'"+H+"' controller",x[H],A,z),x[H]=A;if(X=A.transclude)M("transclusion",C,A,z),C=A,l=A.priority,X=="element"?(W=u(b),z=c.$$element=u("<\!-- "+H+": "+c[H]+" --\>"),b=z[0],Ga(e,u(W[0]),b),v=t(W,d,l)):(W=u(db(b)).contents(),z.html(""),v=t(W,d));if(X=A.template)if(M("template",w,A,z),w=A,X=Ia(X),A.replace){W=u("<div>"+Q(X)+"</div>").contents();b=
W[0];if(W.length!=1||b.nodeType!==1)throw new y(g+X);Ga(e,z,b);H={$attr:{}};a=a.concat(da(b,a.splice(B+1,a.length-(B+1)),H));P(c,H);G=a.length}else z.html(X);if(A.templateUrl)M("template",w,A,z),w=A,k=V(a.splice(B,a.length-B),k,z,c,e,A.replace,v),G=a.length;else if(A.compile)try{D=A.compile(z,c,v),L(D)?f(null,D):D&&f(D.pre,D.post)}catch(J){j(J,pa(z))}if(A.terminal)k.terminal=!0,l=Math.max(l,A.priority)}k.scope=r&&r.scope;k.transclude=C&&v;return k}function w(d,e,g,i){var n=!1;if(a.hasOwnProperty(e))for(var k,
e=b.get(e+c),l=0,o=e.length;l<o;l++)try{if(k=e[l],(i===s||i>k.priority)&&k.restrict.indexOf(g)!=-1)d.push(k),n=!0}catch(p){j(p)}return n}function P(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){e.charAt(0)!="$"&&(b[e]&&(d+=(e==="style"?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){f=="class"?(q(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):f=="style"?e.attr("style",e.attr("style")+";"+b):f.charAt(0)!="$"&&!a.hasOwnProperty(f)&&(a[f]=b,d[f]=c[f])})}function V(a,b,c,d,e,
f,j){var i=[],n,o,p=c[0],q=a.shift(),t=D({},q,{controller:null,templateUrl:null,transclude:null});c.html("");k.get(q.templateUrl,{cache:l}).success(function(k){var l,q,k=Ia(k);if(f){q=u("<div>"+Q(k)+"</div>").contents();l=q[0];if(q.length!=1||l.nodeType!==1)throw new y(g+k);k={$attr:{}};Ga(e,c,l);da(l,a,k);P(d,k)}else l=p,c.html(k);a.unshift(t);n=E(a,c,d,j);for(o=r(c.contents(),j);i.length;){var $=i.pop(),k=i.pop();q=i.pop();var z=i.pop(),m=l;q!==p&&(m=db(l),Ga(k,u(q),m));n(function(){b(o,z,m,e,$)},
z,m,e,$)}i=null}).error(function(a,b,c,d){throw y("Failed to load template: "+d.url);});return function(a,c,d,e,f){i?(i.push(c),i.push(d),i.push(e),i.push(f)):n(function(){b(o,c,d,e,f)},c,d,e,f)}}function z(a,b){return b.priority-a.priority}function M(a,b,c,d){if(b)throw y("Multiple directives ["+b.name+", "+c.name+"] asking for "+a+" on: "+pa(d));}function H(a,b){var c=i(b,!0);c&&a.push({priority:0,compile:J(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);q(d.data("$binding",e),
"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function W(a,b,c,d){var e=i(c,!0);e&&b.push({priority:100,compile:J(function(a,b,c){b=c.$$observers||(c.$$observers={});d==="class"&&(e=i(c[d],!0));c[d]=s;(b[d]||(b[d]=[])).$$inter=!0;(c.$$observers&&c.$$observers[d].$$scope||a).$watch(e,function(a){c.$set(d,a)})})})}function Ga(a,b,c){var d=b[0],e=d.parentNode,f,g;if(a){f=0;for(g=a.length;f<g;f++)if(a[f]==d){a[f]=c;break}}e&&e.replaceChild(c,d);c[u.expando]=d[u.expando];b[0]=c}var ea=function(a,
b){this.$$element=a;this.$attr=b||{}};ea.prototype={$normalize:fa,$set:function(a,b,c,d){var e=zb(this.$$element[0],a),f=this.$$observers;e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=ab(a,"-"));c!==!1&&(b===null||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));f&&m(f[a],function(a){try{a(b)}catch(c){j(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);o.$evalAsync(function(){e.$$inter||
b(c[a])});return b}};var C=i.startSymbol(),$=i.endSymbol(),Ia=C=="{{"||$=="}}"?ma:function(a){return a.replace(/\{\{/g,C).replace(/}}/g,$)};return t}]}function fa(b){return sb(b.replace(Ac,""))}function Bc(){var b={};this.register=function(a,c){I(a)?D(b,a):b[a]=c};this.$get=["$injector","$window",function(a,c){return function(d,e){if(F(d)){var g=d,d=b.hasOwnProperty(g)?b[g]:gb(e.$scope,g,!0)||gb(c,g,!0);ra(d,g,!0)}return a.instantiate(d,e)}}]}function Cc(){this.$get=["$window",function(b){return u(b.document)}]}
function Dc(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Ec(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler",function(c,d){function e(e,i){for(var j,k,l=0,n=[],p=e.length,o=!1,t=[];l<p;)(j=e.indexOf(b,l))!=-1&&(k=e.indexOf(a,j+g))!=-1?(l!=j&&n.push(e.substring(l,j)),n.push(l=c(o=e.substring(j+g,k))),l.exp=o,l=k+h,o=!0):(l!=p&&n.push(e.substring(l)),
l=p);if(!(p=n.length))n.push(""),p=1;if(!i||o)return t.length=p,l=function(a){try{for(var b=0,c=p,g;b<c;b++){if(typeof(g=n[b])=="function")g=g(a),g==null||g==s?g="":typeof g!="string"&&(g=ba(g));t[b]=g}return t.join("")}catch(j){a=new y("Error while interpolating: "+e+"\n"+j.toString()),d(a)}},l.exp=e,l.parts=n,l}var g=b.length,h=a.length;e.startSymbol=function(){return b};e.endSymbol=function(){return a};return e}]}function Fb(b){for(var b=b.split("/"),a=b.length;a--;)b[a]=$a(b[a]);return b.join("/")}
function va(b,a){var c=Gb.exec(b),c={protocol:c[1],host:c[3],port:G(c[5])||Hb[c[1]]||null,path:c[6]||"/",search:c[8],hash:c[10]};if(a)a.$$protocol=c.protocol,a.$$host=c.host,a.$$port=c.port;return c}function ka(b,a,c){return b+"://"+a+(c==Hb[b]?"":":"+c)}function Fc(b,a,c){var d=va(b);return decodeURIComponent(d.path)!=a||v(d.hash)||d.hash.indexOf(c)!==0?b:ka(d.protocol,d.host,d.port)+a.substr(0,a.lastIndexOf("/"))+d.hash.substr(c.length)}function Gc(b,a,c){var d=va(b);if(decodeURIComponent(d.path)==
a)return b;else{var e=d.search&&"?"+d.search||"",g=d.hash&&"#"+d.hash||"",h=a.substr(0,a.lastIndexOf("/")),f=d.path.substr(h.length);if(d.path.indexOf(h)!==0)throw y('Invalid url "'+b+'", missing path prefix "'+h+'" !');return ka(d.protocol,d.host,d.port)+a+"#"+c+f+e+g}}function hb(b,a,c){a=a||"";this.$$parse=function(b){var c=va(b,this);if(c.path.indexOf(a)!==0)throw y('Invalid url "'+b+'", missing path prefix "'+a+'" !');this.$$path=decodeURIComponent(c.path.substr(a.length));this.$$search=Ya(c.search);
this.$$hash=c.hash&&decodeURIComponent(c.hash)||"";this.$$compose()};this.$$compose=function(){var b=pb(this.$$search),c=this.$$hash?"#"+$a(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+a+this.$$url};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Ja(b,a,c){var d;this.$$parse=function(b){var c=va(b,this);if(c.hash&&c.hash.indexOf(a)!==0)throw y('Invalid url "'+b+'", missing hash prefix "'+
a+'" !');d=c.path+(c.search?"?"+c.search:"");c=Hc.exec((c.hash||"").substr(a.length));this.$$path=c[1]?(c[1].charAt(0)=="/"?"":"/")+decodeURIComponent(c[1]):"";this.$$search=Ya(c[3]);this.$$hash=c[5]&&decodeURIComponent(c[5])||"";this.$$compose()};this.$$compose=function(){var b=pb(this.$$search),c=this.$$hash?"#"+$a(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+d+(this.$$url?"#"+a+this.$$url:"")};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==
0)return a};this.$$parse(b)}function Ib(b,a,c,d){Ja.apply(this,arguments);this.$$rewriteAppUrl=function(b){if(b.indexOf(c)==0)return c+d+"#"+a+b.substr(c.length)}}function Ka(b){return function(){return this[b]}}function Jb(b,a){return function(c){if(v(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ic(){var b="",a=!1;this.hashPrefix=function(a){return x(a)?(b=a,this):b};this.html5Mode=function(b){return x(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",
function(c,d,e,g){function h(a){c.$broadcast("$locationChangeSuccess",f.absUrl(),a)}var f,i,j,k=d.url(),l=va(k);a?(i=d.baseHref()||"/",j=i.substr(0,i.lastIndexOf("/")),l=ka(l.protocol,l.host,l.port)+j+"/",f=e.history?new hb(Fc(k,i,b),j,l):new Ib(Gc(k,i,b),b,l,i.substr(j.length+1))):(l=ka(l.protocol,l.host,l.port)+(l.path||"")+(l.search?"?"+l.search:"")+"#"+b+"/",f=new Ja(k,b,l));g.bind("click",function(a){if(!a.ctrlKey&&!(a.metaKey||a.which==2)){for(var b=u(a.target);B(b[0].nodeName)!=="a";)if(b[0]===
g[0]||!(b=b.parent())[0])return;var d=b.prop("href"),e=f.$$rewriteAppUrl(d);d&&!b.attr("target")&&e&&(f.$$parse(e),c.$apply(),a.preventDefault(),T.angular["ff-684208-preventDefault"]=!0)}});f.absUrl()!=k&&d.url(f.absUrl(),!0);d.onUrlChange(function(a){f.absUrl()!=a&&(c.$evalAsync(function(){var b=f.absUrl();f.$$parse(a);h(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url();if(!n||a!=f.absUrl())n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",f.absUrl(),a).defaultPrevented?
f.$$parse(a):(d.url(f.absUrl(),f.$$replace),f.$$replace=!1,h(a))});return n});return f}]}function Jc(){this.$get=["$window",function(b){function a(a){a instanceof y&&(a.stack?a=a.message&&a.stack.indexOf(a.message)===-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function c(c){var e=b.console||{},g=e[c]||e.log||C;return g.apply?function(){var b=[];m(arguments,function(c){b.push(a(c))});return g.apply(e,b)}:function(a,b){g(a,b)}}return{log:c("log"),
warn:c("warn"),info:c("info"),error:c("error")}}]}function Kc(b,a){function c(a){return a.indexOf(q)!=-1}function d(){return o+1<b.length?b.charAt(o+1):!1}function e(a){return"0"<=a&&a<="9"}function g(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||a=="\u000b"||a=="\u00a0"}function h(a){return"a"<=a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function f(a){return a=="-"||a=="+"||e(a)}function i(a,c,d){d=d||o;throw y("Lexer Error: "+a+" at column"+(x(c)?"s "+c+"-"+o+" ["+b.substring(c,d)+"]":" "+d)+" in expression ["+
b+"].");}function j(){for(var a="",c=o;o<b.length;){var g=B(b.charAt(o));if(g=="."||e(g))a+=g;else{var j=d();if(g=="e"&&f(j))a+=g;else if(f(g)&&j&&e(j)&&a.charAt(a.length-1)=="e")a+=g;else if(f(g)&&(!j||!e(j))&&a.charAt(a.length-1)=="e")i("Invalid exponent");else break}o++}a*=1;n.push({index:c,text:a,json:!0,fn:function(){return a}})}function k(){for(var c="",d=o,f,j,i;o<b.length;){var k=b.charAt(o);if(k=="."||h(k)||e(k))k=="."&&(f=o),c+=k;else break;o++}if(f)for(j=o;j<b.length;){k=b.charAt(j);if(k==
"("){i=c.substr(f-d+1);c=c.substr(0,f-d);o=j;break}if(g(k))j++;else break}d={index:d,text:c};if(La.hasOwnProperty(c))d.fn=d.json=La[c];else{var l=Kb(c,a);d.fn=D(function(a,b){return l(a,b)},{assign:function(a,b){return Lb(a,c,b)}})}n.push(d);i&&(n.push({index:f,text:".",json:!1}),n.push({index:f+1,text:i,json:!1}))}function l(a){var c=o;o++;for(var d="",e=a,f=!1;o<b.length;){var g=b.charAt(o);e+=g;if(f)g=="u"?(g=b.substring(o+1,o+5),g.match(/[\da-f]{4}/i)||i("Invalid unicode escape [\\u"+g+"]"),o+=
4,d+=String.fromCharCode(parseInt(g,16))):(f=Lc[g],d+=f?f:g),f=!1;else if(g=="\\")f=!0;else if(g==a){o++;n.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}else d+=g;o++}i("Unterminated quote",c)}for(var n=[],p,o=0,t=[],q,r=":";o<b.length;){q=b.charAt(o);if(c("\"'"))l(q);else if(e(q)||c(".")&&e(d()))j();else if(h(q)){if(k(),"{,".indexOf(r)!=-1&&t[0]=="{"&&(p=n[n.length-1]))p.json=p.text.indexOf(".")==-1}else if(c("(){}[].,;:"))n.push({index:o,text:q,json:":[,".indexOf(r)!=-1&&
c("{[")||c("}]:,")}),c("{[")&&t.unshift(q),c("}]")&&t.shift(),o++;else if(g(q)){o++;continue}else{var m=q+d(),E=La[q],w=La[m];w?(n.push({index:o,text:m,fn:w}),o+=2):E?(n.push({index:o,text:q,fn:E,json:"[,:".indexOf(r)!=-1&&c("+-")}),o+=1):i("Unexpected next character ",o,o+1)}r=q}return n}function Mc(b,a,c,d){function e(a,c){throw y("Syntax Error: Token '"+c.text+"' "+a+" at column "+(c.index+1)+" of the expression ["+b+"] starting at ["+b.substring(c.index)+"].");}function g(){if(M.length===0)throw y("Unexpected end of expression: "+
b);return M[0]}function h(a,b,c,d){if(M.length>0){var e=M[0],f=e.text;if(f==a||f==b||f==c||f==d||!a&&!b&&!c&&!d)return e}return!1}function f(b,c,d,f){return(b=h(b,c,d,f))?(a&&!b.json&&e("is not valid json",b),M.shift(),b):!1}function i(a){f(a)||e("is unexpected, expecting ["+a+"]",h())}function j(a,b){return function(c,d){return a(c,d,b)}}function k(a,b,c){return function(d,e){return b(d,e,a,c)}}function l(){for(var a=[];;)if(M.length>0&&!h("}",")",";","]")&&a.push(v()),!f(";"))return a.length==1?
a[0]:function(b,c){for(var d,e=0;e<a.length;e++){var f=a[e];f&&(d=f(b,c))}return d}}function n(){for(var a=f(),b=c(a.text),d=[];;)if(a=f(":"))d.push(H());else{var e=function(a,c,e){for(var e=[e],f=0;f<d.length;f++)e.push(d[f](a,c));return b.apply(a,e)};return function(){return e}}}function p(){for(var a=o(),b;;)if(b=f("||"))a=k(a,b.fn,o());else return a}function o(){var a=t(),b;if(b=f("&&"))a=k(a,b.fn,o());return a}function t(){var a=q(),b;if(b=f("==","!="))a=k(a,b.fn,t());return a}function q(){var a;
a=r();for(var b;b=f("+","-");)a=k(a,b.fn,r());if(b=f("<",">","<=",">="))a=k(a,b.fn,q());return a}function r(){for(var a=m(),b;b=f("*","/","%");)a=k(a,b.fn,m());return a}function m(){var a;return f("+")?E():(a=f("-"))?k(V,a.fn,m()):(a=f("!"))?j(a.fn,m()):E()}function E(){var a;if(f("("))a=v(),i(")");else if(f("["))a=w();else if(f("{"))a=P();else{var b=f();(a=b.fn)||e("not a primary expression",b)}for(var c;b=f("(","[",".");)b.text==="("?(a=u(a,c),c=null):b.text==="["?(c=a,a=ea(a)):b.text==="."?(c=
a,a=x(a)):e("IMPOSSIBLE");return a}function w(){var a=[];if(g().text!="]"){do a.push(H());while(f(","))}i("]");return function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d}}function P(){var a=[];if(g().text!="}"){do{var b=f(),b=b.string||b.text;i(":");var c=H();a.push({key:b,value:c})}while(f(","))}i("}");return function(b,c){for(var d={},e=0;e<a.length;e++){var f=a[e],g=f.value(b,c);d[f.key]=g}return d}}var V=J(0),z,M=Kc(b,d),H=function(){var a=p(),c,d;return(d=f("="))?(a.assign||
e("implies assignment but ["+b.substring(0,d.index)+"] can not be assigned to",d),c=p(),function(b,d){return a.assign(b,c(b,d),d)}):a},u=function(a,b){var c=[];if(g().text!=")"){do c.push(H());while(f(","))}i(")");return function(d,e){for(var f=[],g=b?b(d,e):d,j=0;j<c.length;j++)f.push(c[j](d,e));j=a(d,e)||C;return j.apply?j.apply(g,f):j(f[0],f[1],f[2],f[3],f[4])}},x=function(a){var b=f().text,c=Kb(b,d);return D(function(b,d){return c(a(b,d),d)},{assign:function(c,d,e){return Lb(a(c,e),b,d)}})},ea=
function(a){var b=H();i("]");return D(function(c,d){var e=a(c,d),f=b(c,d),g;if(!e)return s;if((e=e[f])&&e.then){g=e;if(!("$$v"in e))g.$$v=s,g.then(function(a){g.$$v=a});e=e.$$v}return e},{assign:function(c,d,e){return a(c,e)[b(c,e)]=d}})},v=function(){for(var a=H(),b;;)if(b=f("|"))a=k(a,b.fn,n());else return a};a?(H=p,u=x=ea=v=function(){e("is not valid json",{text:b,index:0})},z=E()):z=l();M.length!==0&&e("is an unexpected token",M[0]);return z}function Lb(b,a,c){for(var a=a.split("."),d=0;a.length>
1;d++){var e=a.shift(),g=b[e];g||(g={},b[e]=g);b=g}return b[a.shift()]=c}function gb(b,a,c){if(!a)return b;for(var a=a.split("."),d,e=b,g=a.length,h=0;h<g;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&L(b)?Wa(e,b):b}function Mb(b,a,c,d,e){return function(g,h){var f=h&&h.hasOwnProperty(b)?h:g,i;if(f===null||f===s)return f;if((f=f[b])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}if(!a||f===null||f===s)return f;if((f=f[a])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=
a});f=f.$$v}if(!c||f===null||f===s)return f;if((f=f[c])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}if(!d||f===null||f===s)return f;if((f=f[d])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}if(!e||f===null||f===s)return f;if((f=f[e])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}return f}}function Kb(b,a){if(ib.hasOwnProperty(b))return ib[b];var c=b.split("."),d=c.length,e;if(a)e=d<6?Mb(c[0],c[1],c[2],c[3],c[4]):
function(a,b){var e=0,g;do g=Mb(c[e++],c[e++],c[e++],c[e++],c[e++])(a,b),b=s,a=g;while(e<d);return g};else{var g="var l, fn, p;\n";m(c,function(a,b){g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});g+="return s;";e=Function("s","k",g);e.toString=function(){return g}}return ib[b]=e}function Nc(){var b={};this.$get=
["$filter","$sniffer",function(a,c){return function(d){switch(typeof d){case "string":return b.hasOwnProperty(d)?b[d]:b[d]=Mc(d,!1,a,c.csp);case "function":return d;default:return C}}}]}function Oc(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Pc(function(a){b.$evalAsync(a)},a)}]}function Pc(b,a){function c(a){return a}function d(a){return h(a)}var e=function(){var f=[],i,j;return j={resolve:function(a){if(f){var c=f;f=s;i=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<
d;b++)a=c[b],i.then(a[0],a[1])})}},reject:function(a){j.resolve(h(a))},promise:{then:function(b,g){var j=e(),h=function(d){try{j.resolve((b||c)(d))}catch(e){a(e),j.reject(e)}},o=function(b){try{j.resolve((g||d)(b))}catch(c){a(c),j.reject(c)}};f?f.push([h,o]):i.then(h,o);return j.promise}}}},g=function(a){return a&&a.then?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},h=function(a){return{then:function(c,g){var h=e();b(function(){h.resolve((g||d)(a))});return h.promise}}};
return{defer:e,reject:h,when:function(f,i,j){var k=e(),l,n=function(b){try{return(i||c)(b)}catch(d){return a(d),h(d)}},p=function(b){try{return(j||d)(b)}catch(c){return a(c),h(c)}};b(function(){g(f).then(function(a){l||(l=!0,k.resolve(g(a).then(n,p)))},function(a){l||(l=!0,k.resolve(p(a)))})});return k.promise},all:function(a){var b=e(),c=a.length,d=[];c?m(a,function(a,e){g(a).then(function(a){e in d||(d[e]=a,--c||b.resolve(d))},function(a){e in d||b.reject(a)})}):b.resolve(d);return b.promise}}}
function Qc(){var b={};this.when=function(a,c){b[a]=D({reloadOnSearch:!0},c);if(a){var d=a[a.length-1]=="/"?a.substr(0,a.length-1):a+"/";b[d]={redirectTo:a}}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache",function(a,c,d,e,g,h,f){function i(){var b=j(),i=p.current;if(b&&i&&b.$route===i.$route&&ga(b.pathParams,i.pathParams)&&!b.reloadOnSearch&&!n)i.params=b.params,U(i.params,d),a.$broadcast("$routeUpdate",
i);else if(b||i)n=!1,a.$broadcast("$routeChangeStart",b,i),(p.current=b)&&b.redirectTo&&(F(b.redirectTo)?c.path(k(b.redirectTo,b.params)).search(b.params).replace():c.url(b.redirectTo(b.pathParams,c.path(),c.search())).replace()),e.when(b).then(function(){if(b){var a=[],c=[],d;m(b.resolve||{},function(b,d){a.push(d);c.push(L(b)?g.invoke(b):g.get(b))});if(!x(d=b.template))if(x(d=b.templateUrl))d=h.get(d,{cache:f}).then(function(a){return a.data});x(d)&&(a.push("$template"),c.push(d));return e.all(c).then(function(b){var c=
{};m(b,function(b,d){c[a[d]]=b});return c})}}).then(function(c){if(b==p.current){if(b)b.locals=c,U(b.params,d);a.$broadcast("$routeChangeSuccess",b,i)}},function(c){b==p.current&&a.$broadcast("$routeChangeError",b,i,c)})}function j(){var a,d;m(b,function(b,e){if(!d&&(a=l(c.path(),e)))d=ya(b,{params:D({},c.search(),a),pathParams:a}),d.$route=b});return d||b[null]&&ya(b[null],{params:{},pathParams:{}})}function k(a,b){var c=[];m((a||"").split(":"),function(a,d){if(d==0)c.push(a);else{var e=a.match(/(\w+)(.*)/),
f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var l=function(a,b){var c="^"+b.replace(/([\.\\\(\)\^\$])/g,"\\$1")+"$",d=[],e={};m(b.split(/\W/),function(a){if(a){var b=RegExp(":"+a+"([\\W])");c.match(b)&&(c=c.replace(b,"([^\\/]*)$1"),d.push(a))}});var f=a.match(RegExp(c));f&&m(d,function(a,b){e[a]=f[b+1]});return f?e:null},n=!1,p={routes:b,reload:function(){n=!0;a.$evalAsync(i)}};a.$on("$locationChangeSuccess",i);return p}]}function Rc(){this.$get=J({})}function Sc(){var b=
10;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse",function(a,c,d){function e(){this.$id=xa();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$asyncQueue=[];this.$$listeners={}}function g(a){if(i.$$phase)throw y(i.$$phase+" already in progress");i.$$phase=a}function h(a,b){var c=d(a);ra(c,b);return c}function f(){}e.prototype={$new:function(a){if(L(a))throw y("API-CHANGE: Use $controller to instantiate controllers.");
a?(a=new e,a.$root=this.$root):(a=function(){},a.prototype=this,a=new a,a.$id=xa());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$asyncQueue=[];a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=h(a,"watch"),e=this.$$watchers,g={fn:b,last:f,get:d,exp:a,eq:!!c};if(!L(b)){var i=h(b||C,"listener");g.fn=function(a,b,
c){i(c)}}if(!e)e=this.$$watchers=[];e.unshift(g);return function(){za(e,g)}},$digest:function(){var a,d,e,h,p,o,m,q=b,r,s=[],E,w;g("$digest");do{m=!1;r=this;do{for(p=r.$$asyncQueue;p.length;)try{r.$eval(p.shift())}catch(P){c(P)}if(h=r.$$watchers)for(o=h.length;o--;)try{if(a=h[o],(d=a.get(r))!==(e=a.last)&&!(a.eq?ga(d,e):typeof d=="number"&&typeof e=="number"&&isNaN(d)&&isNaN(e)))m=!0,a.last=a.eq?U(d):d,a.fn(d,e===f?d:e,r),q<5&&(E=4-q,s[E]||(s[E]=[]),w=L(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):
a.exp,w+="; newVal: "+ba(d)+"; oldVal: "+ba(e),s[E].push(w))}catch(V){c(V)}if(!(h=r.$$childHead||r!==this&&r.$$nextSibling))for(;r!==this&&!(h=r.$$nextSibling);)r=r.$parent}while(r=h);if(m&&!q--)throw i.$$phase=null,y(b+" $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+ba(s));}while(m||p.length);i.$$phase=null},$destroy:function(){if(i!=this){var a=this.$parent;this.$broadcast("$destroy");if(a.$$childHead==this)a.$$childHead=this.$$nextSibling;if(a.$$childTail==
this)a.$$childTail=this.$$prevSibling;if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling}},$eval:function(a,b){return d(a)(this,b)},$evalAsync:function(a){this.$$asyncQueue.push(a)},$apply:function(a){try{return g("$apply"),this.$eval(a)}catch(b){c(b)}finally{i.$$phase=null;try{i.$digest()}catch(d){throw c(d),d;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){za(c,
b)}},$emit:function(a,b){var d=[],e,f=this,g=!1,i={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1},h=[i].concat(ha.call(arguments,1)),m,s;do{e=f.$$listeners[a]||d;i.currentScope=f;m=0;for(s=e.length;m<s;m++)try{if(e[m].apply(null,h),g)return i}catch(E){c(E)}f=f.$parent}while(f);return i},$broadcast:function(a,b){var d=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},
g=[f].concat(ha.call(arguments,1));do if(d=e,f.currentScope=d,m(d.$$listeners[a],function(a){try{a.apply(null,g)}catch(b){c(b)}}),!(e=d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent;while(d=e);return f}};var i=new e;return i}]}function Tc(){this.$get=["$window","$document",function(b,a){var c={},d=G((/android (\d+)/.exec(B(b.navigator.userAgent))||[])[1]),e=a[0];return{history:!(!b.history||!b.history.pushState||d<4),hashchange:"onhashchange"in b&&(!e.documentMode||
e.documentMode>7),hasEvent:function(a){if(a=="input"&&Z==9)return!1;if(v(c[a])){var b=e.createElement("div");c[a]="on"+a in b}return c[a]},csp:e.SecurityPolicy?e.SecurityPolicy.isActive():!1}}]}function Uc(){this.$get=J(T)}function Nb(b){var a={},c,d,e;if(!b)return a;m(b.split("\n"),function(b){e=b.indexOf(":");c=B(Q(b.substr(0,e)));d=Q(b.substr(e+1));c&&(a[c]?a[c]+=", "+d:a[c]=d)});return a}function Ob(b){var a=I(b)?b:s;return function(c){a||(a=Nb(b));return c?a[B(c)]||null:a}}function Pb(b,a,c){if(L(c))return c(b,
a);m(c,function(c){b=c(b,a)});return b}function Vc(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d=this.defaults={transformResponse:[function(d){F(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ob(d,!0)));return d}],transformRequest:[function(a){return I(a)&&Ta.apply(a)!=="[object File]"?ba(a):a}],headers:{common:{Accept:"application/json, text/plain, */*","X-Requested-With":"XMLHttpRequest"},post:{"Content-Type":"application/json;charset=utf-8"},put:{"Content-Type":"application/json;charset=utf-8"}}},
e=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,i,j,k){function l(a){function c(a){var b=D({},a,{data:Pb(a.data,a.headers,f)});return 200<=a.status&&a.status<300?b:j.reject(b)}a.method=la(a.method);var e=a.transformRequest||d.transformRequest,f=a.transformResponse||d.transformResponse,g=d.headers,g=D({"X-XSRF-TOKEN":b.cookies()["XSRF-TOKEN"]},g.common,g[B(a.method)],a.headers),e=Pb(a.data,Ob(g),e),i;v(a.data)&&delete g["Content-Type"];
i=n(a,e,g);i=i.then(c,c);m(t,function(a){i=a(i)});i.success=function(b){i.then(function(c){b(c.data,c.status,c.headers,a)});return i};i.error=function(b){i.then(null,function(c){b(c.data,c.status,c.headers,a)});return i};return i}function n(b,c,d){function e(a,b,c){m&&(200<=a&&a<300?m.put(s,[a,b,Nb(c)]):m.remove(s));f(b,a,c);i.$apply()}function f(a,c,d){c=Math.max(c,0);(200<=c&&c<300?k.resolve:k.reject)({data:a,status:c,headers:Ob(d),config:b})}function h(){var a=Va(l.pendingRequests,b);a!==-1&&l.pendingRequests.splice(a,
1)}var k=j.defer(),n=k.promise,m,t,s=p(b.url,b.params);l.pendingRequests.push(b);n.then(h,h);b.cache&&b.method=="GET"&&(m=I(b.cache)?b.cache:o);if(m)if(t=m.get(s))if(t.then)return t.then(h,h),t;else K(t)?f(t[1],t[0],U(t[2])):f(t,200,{});else m.put(s,n);t||a(b.method,s,c,e,d,b.timeout,b.withCredentials,b.responseType);return n}function p(a,b){if(!b)return a;var c=[];fc(b,function(a,b){a==null||a==s||(I(a)&&(a=ba(a)),c.push(encodeURIComponent(b)+"="+encodeURIComponent(a)))});return a+(a.indexOf("?")==
-1?"?":"&")+c.join("&")}var o=c("$http"),t=[];m(e,function(a){t.push(F(a)?k.get(a):k.invoke(a))});l.pendingRequests=[];(function(a){m(arguments,function(a){l[a]=function(b,c){return l(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){l[a]=function(b,c,d){return l(D(d||{},{method:a,url:b,data:c}))}})})("post","put");l.defaults=d;return l}]}function Wc(){this.$get=["$browser","$window","$document",function(b,a,c){return Xc(b,Yc,b.defer,a.angular.callbacks,
c[0],a.location.protocol.replace(":",""))}]}function Xc(b,a,c,d,e,g){function h(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;Z?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c)}return function(e,i,j,k,l,n,p,o){function t(a,c,d,e){c=(i.match(Gb)||["",g])[1]=="file"?d?200:404:c;a(c==1223?204:c,d,e);b.$$completeOutstandingRequest(C)}b.$$incOutstandingRequestCount();
i=i||b.url();if(B(e)=="jsonp"){var q="_"+(d.counter++).toString(36);d[q]=function(a){d[q].data=a};h(i.replace("JSON_CALLBACK","angular.callbacks."+q),function(){d[q].data?t(k,200,d[q].data):t(k,-2);delete d[q]})}else{var r=new a;r.open(e,i,!0);m(l,function(a,b){a&&r.setRequestHeader(b,a)});var s;r.onreadystatechange=function(){r.readyState==4&&t(k,s||r.status,r.response||r.responseText,r.getAllResponseHeaders())};if(p)r.withCredentials=!0;if(o)r.responseType=o;r.send(j||"");n>0&&c(function(){s=-1;
r.abort()},n)}}}function Zc(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return b===1?"one":"other"}}}}function $c(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,f,i){var j=c.defer(),
k=j.promise,l=x(i)&&!i,f=a.defer(function(){try{j.resolve(e())}catch(a){j.reject(a),d(a)}l||b.$apply()},f),i=function(){delete g[k.$$timeoutId]};k.$$timeoutId=f;g[f]=j;k.then(i,i);return k}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),a.defer.cancel(b.$$timeoutId)):!1};return e}]}function Qb(b){function a(a,e){return b.factory(a+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",
Rb);a("date",Sb);a("filter",ad);a("json",bd);a("limitTo",cd);a("lowercase",dd);a("number",Tb);a("orderBy",Ub);a("uppercase",ed)}function ad(){return function(b,a){if(!(b instanceof Array))return b;var c=[];c.check=function(a){for(var b=0;b<c.length;b++)if(!c[b](a))return!1;return!0};var d=function(a,b){if(b.charAt(0)==="!")return!d(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return(""+a).toLowerCase().indexOf(b)>-1;case "object":for(var c in a)if(c.charAt(0)!=="$"&&
d(a[c],b))return!0;return!1;case "array":for(c=0;c<a.length;c++)if(d(a[c],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var e in a)e=="$"?function(){var b=(""+a[e]).toLowerCase();b&&c.push(function(a){return d(a,b)})}():function(){var b=e,f=(""+a[e]).toLowerCase();f&&c.push(function(a){return d(gb(a,b),f)})}();break;case "function":c.push(a);break;default:return b}for(var g=[],h=0;h<b.length;h++){var f=b[h];c.check(f)&&
g.push(f)}return g}}function Rb(b){var a=b.NUMBER_FORMATS;return function(b,d){if(v(d))d=a.CURRENCY_SYM;return Vb(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Tb(b){var a=b.NUMBER_FORMATS;return function(b,d){return Vb(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Vb(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=b<0,b=Math.abs(b),h=b+"",f="",i=[];if(h.indexOf("e")!==-1)f=h;else{h=(h.split(Wb)[1]||"").length;v(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));
var h=Math.pow(10,e),b=Math.round(b*h)/h,b=(""+b).split(Wb),h=b[0],b=b[1]||"",j=0,k=a.lgSize,l=a.gSize;if(h.length>=k+l)for(var j=h.length-k,n=0;n<j;n++)(j-n)%l===0&&n!==0&&(f+=c),f+=h.charAt(n);for(n=j;n<h.length;n++)(h.length-n)%k===0&&n!==0&&(f+=c),f+=h.charAt(n);for(;b.length<e;)b+="0";e&&(f+=d+b.substr(0,e))}i.push(g?a.negPre:a.posPre);i.push(f);i.push(g?a.negSuf:a.posSuf);return i.join("")}function jb(b,a,c){var d="";b<0&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));
return d+b}function N(b,a,c,d){return function(e){e=e["get"+b]();if(c>0||e>-c)e+=c;e===0&&c==-12&&(e=12);return jb(e,a,d)}}function Ma(b,a){return function(c,d){var e=c["get"+b](),g=la(a?"SHORT"+b:b);return d[g][e]}}function Sb(b){function a(a){var b;if(b=a.match(c)){var a=new Date(0),g=0,h=0;b[9]&&(g=G(b[9]+b[10]),h=G(b[9]+b[11]));a.setUTCFullYear(G(b[1]),G(b[2])-1,G(b[3]));a.setUTCHours(G(b[4]||0)-g,G(b[5]||0)-h,G(b[6]||0),G(b[7]||0))}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;
return function(c,e){var g="",h=[],f,i,e=e||"mediumDate",e=b.DATETIME_FORMATS[e]||e;F(c)&&(c=fd.test(c)?G(c):a(c));wa(c)&&(c=new Date(c));if(!na(c))return c;for(;e;)(i=gd.exec(e))?(h=h.concat(ha.call(i,1)),e=h.pop()):(h.push(e),e=null);m(h,function(a){f=hd[a];g+=f?f(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function bd(){return function(b){return ba(b,!0)}}function cd(){return function(b,a){if(!(b instanceof Array))return b;var a=G(a),c=[],d,e;if(!b||!(b instanceof
Array))return c;a>b.length?a=b.length:a<-b.length&&(a=-b.length);a>0?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Ub(b){return function(a,c,d){function e(a,b){return Xa(b)?function(b,c){return a(c,b)}:a}if(!(a instanceof Array))return a;if(!c)return a;for(var c=K(c)?c:[c],c=Ua(c,function(a){var c=!1,d=a||ma;if(F(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")c=a.charAt(0)=="-",a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;
f==g?(f=="string"&&(c=c.toLowerCase()),f=="string"&&(e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)}),g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e!==0)return e}return 0},d))}}function R(b){L(b)&&(b={link:b});b.restrict=b.restrict||"AC";return J(b)}function Xb(b,a){function c(a,c){c=c?"-"+ab(c,"-"):"";b.removeClass((a?Na:Oa)+c).addClass((a?Oa:Na)+c)}var d=this,e=b.parent().controller("form")||Pa,g=0,h=d.$error={};
d.$name=a.name;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Qa);c(!0);d.$addControl=function(a){a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];m(h,function(b,c){d.$setValidity(c,!0,a)})};d.$setValidity=function(a,b,j){var k=h[a];if(b){if(k&&(za(k,j),!k.length)){g--;if(!g)c(b),d.$valid=!0,d.$invalid=!1;h[a]=!1;c(!0,a);e.$setValidity(a,!0,d)}}else{g||c(b);if(k){if(Va(k,j)!=-1)return}else h[a]=
k=[],g++,c(!1,a),e.$setValidity(a,!1,d);k.push(j);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Qa).addClass(Yb);d.$dirty=!0;d.$pristine=!1}}function S(b){return v(b)||b===""||b===null||b!==b}function Ra(b,a,c,d,e,g){var h=function(){var c=Q(a.val());d.$viewValue!==c&&b.$apply(function(){d.$setViewValue(c)})};if(e.hasEvent("input"))a.bind("input",h);else{var f;a.bind("keydown",function(a){a=a.keyCode;a===91||15<a&&a<19||37<=a&&a<=40||f||(f=g.defer(function(){h();f=null}))});a.bind("change",
h)}d.$render=function(){a.val(S(d.$viewValue)?"":d.$viewValue)};var i=c.ngPattern,j=function(a,b){return S(b)||a.test(b)?(d.$setValidity("pattern",!0),b):(d.$setValidity("pattern",!1),s)};i&&(i.match(/^\/(.*)\/$/)?(i=RegExp(i.substr(1,i.length-2)),e=function(a){return j(i,a)}):e=function(a){var c=b.$eval(i);if(!c||!c.test)throw new y("Expected "+i+" to be a RegExp but was "+c);return j(c,a)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var k=G(c.ngMinlength),e=function(a){return!S(a)&&
a.length<k?(d.$setValidity("minlength",!1),s):(d.$setValidity("minlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var l=G(c.ngMaxlength),c=function(a){return!S(a)&&a.length>l?(d.$setValidity("maxlength",!1),s):(d.$setValidity("maxlength",!0),a)};d.$parsers.push(c);d.$formatters.push(c)}}function kb(b,a){b="ngClass"+b;return R(function(c,d,e){c.$watch(e[b],function(b,e){if(a===!0||c.$index%2===a)e&&b!==e&&(I(e)&&!K(e)&&(e=Ua(e,function(a,b){if(a)return b})),d.removeClass(K(e)?
e.join(" "):e)),I(b)&&!K(b)&&(b=Ua(b,function(a,b){if(a)return b})),b&&d.addClass(K(b)?b.join(" "):b)},!0)})}var B=function(b){return F(b)?b.toLowerCase():b},la=function(b){return F(b)?b.toUpperCase():b},y=T.Error,Z=G((/msie (\d+)/.exec(B(navigator.userAgent))||[])[1]),u,ia,ha=[].slice,Sa=[].push,Ta=Object.prototype.toString,Zb=T.angular||(T.angular={}),ta,Db,Y=["0","0","0"];C.$inject=[];ma.$inject=[];Db=Z<9?function(b){b=b.nodeName?b:b[0];return b.scopeName&&b.scopeName!="HTML"?la(b.scopeName+":"+
b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var lc=/[A-Z]/g,id={full:"1.1.0",major:1,minor:1,dot:0,codeName:"increase-gravatas"},Ba=O.cache={},Aa=O.expando="ng-"+(new Date).getTime(),pc=1,$b=T.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},eb=T.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},nc=/([\:\-\_]+(.))/g,oc=/^moz([A-Z])/,ua=
O.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;this.bind("DOMContentLoaded",a);O(T).bind("load",a)},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return b>=0?u(this[b]):u(this[this.length+b])},length:0,push:Sa,sort:[].sort,splice:[].splice},Ea={};m("multiple,selected,checked,disabled,readOnly,required".split(","),function(b){Ea[B(b)]=b});var Ab={};m("input,select,option,textarea,button,form".split(","),function(b){Ab[la(b)]=
!0});m({data:vb,inheritedData:Da,scope:function(b){return Da(b,"$scope")},controller:yb,injector:function(b){return Da(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ca,css:function(b,a,c){a=sb(a);if(x(c))b.style[a]=c;else{var d;Z<=8&&(d=b.currentStyle&&b.currentStyle[a],d===""&&(d="auto"));d=d||b.style[a];Z<=8&&(d=d===""?s:d);return d}},attr:function(b,a,c){var d=B(a);if(Ea[d])if(x(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||
C).specified?d:s;else if(x(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),b===null?s:b},prop:function(b,a,c){if(x(c))b[a]=c;else return b[a]},text:D(Z<9?function(b,a){if(b.nodeType==1){if(v(a))return b.innerText;b.innerText=a}else{if(v(a))return b.nodeValue;b.nodeValue=a}}:function(b,a){if(v(a))return b.textContent;b.textContent=a},{$dv:""}),val:function(b,a){if(v(a))return b.value;b.value=a},html:function(b,a){if(v(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)sa(d[c]);
b.innerHTML=a}},function(b,a){O.prototype[a]=function(a,d){var e,g;if((b.length==2&&b!==Ca&&b!==yb?a:d)===s)if(I(a)){for(e=0;e<this.length;e++)if(b===vb)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}else{if(this.length)return b(this[0],a,d)}else{for(e=0;e<this.length;e++)b(this[e],a,d);return this}return b.$dv}});m({removeData:tb,dealoc:sa,bind:function a(c,d,e){var g=ca(c,"events"),h=ca(c,"handle");g||ca(c,"events",g={});h||ca(c,"handle",h=qc(c,g));m(d.split(" "),function(d){var i=g[d];
if(!i){if(d=="mouseenter"||d=="mouseleave"){var j=0;g.mouseenter=[];g.mouseleave=[];a(c,"mouseover",function(a){j++;j==1&&h(a,"mouseenter")});a(c,"mouseout",function(a){j--;j==0&&h(a,"mouseleave")})}else $b(c,d,h),g[d]=[];i=g[d]}i.push(e)})},unbind:ub,replaceWith:function(a,c){var d,e=a.parentNode;sa(a);m(new O(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeName!="#text"&&c.push(a)});return c},contents:function(a){return a.childNodes},
append:function(a,c){m(new O(c),function(c){a.nodeType===1&&a.appendChild(c)})},prepend:function(a,c){if(a.nodeType===1){var d=a.firstChild;m(new O(c),function(c){d?a.insertBefore(c,d):(a.appendChild(c),d=c)})}},wrap:function(a,c){var c=u(c)[0],d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){sa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;m(new O(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:xb,removeClass:wb,toggleClass:function(a,
c,d){v(d)&&(d=!Ca(a,c));(d?xb:wb)(a,c)},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},next:function(a){return a.nextSibling},find:function(a,c){return a.getElementsByTagName(c)},clone:db},function(a,c){O.prototype[c]=function(c,e){for(var g,h=0;h<this.length;h++)g==s?(g=a(this[h],c,e),g!==s&&(g=u(g))):cb(g,a(this[h],c,e));return g==s?this:g}});Fa.prototype={put:function(a,c){this[ja(a)]=c},get:function(a){return this[ja(a)]},remove:function(a){var c=this[a=ja(a)];delete this[a];
return c}};fb.prototype={push:function(a,c){var d=this[a=ja(a)];d?d.push(c):this[a]=[c]},shift:function(a){var c=this[a=ja(a)];if(c)return c.length==1?(delete this[a],c[0]):c.shift()}};var sc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,tc=/,/,uc=/^\s*(_?)(.+?)\1\s*$/,rc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Eb="Non-assignable model expression: ";Cb.$inject=["$provide"];var Ac=/^(x[\:\-_]|data[\:\-_])/i,Gb=/^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,ac=/^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
Hc=ac,Hb={http:80,https:443,ftp:21};hb.prototype={$$replace:!1,absUrl:Ka("$$absUrl"),url:function(a,c){if(v(a))return this.$$url;var d=ac.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));if(d[2]||d[1])this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:Ka("$$protocol"),host:Ka("$$host"),port:Ka("$$port"),path:Jb("$$path",function(a){return a.charAt(0)=="/"?a:"/"+a}),search:function(a,c){if(v(a))return this.$$search;x(c)?c===null?delete this.$$search[a]:this.$$search[a]=c:this.$$search=
F(a)?Ya(a):a;this.$$compose();return this},hash:Jb("$$hash",ma),replace:function(){this.$$replace=!0;return this}};Ja.prototype=ya(hb.prototype);Ib.prototype=ya(Ja.prototype);var La={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:C,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return(x(d)?d:0)+(x(e)?e:0)},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(x(d)?d:0)-(x(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/
e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":C,"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&
e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Lc={n:"\n",f:"\u000c",r:"\r",t:"\t",v:"\u000b","'":"'",'"':'"'},ib={},Yc=T.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw new y("This browser does not support XMLHttpRequest.");};Qb.$inject=["$provide"];Rb.$inject=["$locale"];Tb.$inject=["$locale"];
var Wb=".",hd={yyyy:N("FullYear",4),yy:N("FullYear",2,0,!0),y:N("FullYear",1),MMMM:Ma("Month"),MMM:Ma("Month",!0),MM:N("Month",2,1),M:N("Month",1,1),dd:N("Date",2),d:N("Date",1),HH:N("Hours",2),H:N("Hours",1),hh:N("Hours",2,-12),h:N("Hours",1,-12),mm:N("Minutes",2),m:N("Minutes",1),ss:N("Seconds",2),s:N("Seconds",1),EEEE:Ma("Day"),EEE:Ma("Day",!0),a:function(a,c){return a.getHours()<12?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=a.getTimezoneOffset();return jb(a/60,2)+jb(Math.abs(a%60),2)}},gd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
fd=/^\d+$/;Sb.$inject=["$locale"];var dd=J(B),ed=J(la);Ub.$inject=["$parse"];var jd=J({restrict:"E",compile:function(a,c){c.href||c.$set("href","");return function(a,c){c.bind("click",function(a){c.attr("href")||a.preventDefault()})}}}),lb={};m(Ea,function(a,c){var d=fa("ng-"+c);lb[d]=function(){return{priority:100,compile:function(){return function(a,g,h){a.$watch(h[d],function(a){h.$set(c,!!a)})}}}}});m(["src","href"],function(a){var c=fa("ng-"+a);lb[c]=function(){return{priority:99,link:function(d,
e,g){g.$observe(c,function(c){g.$set(a,c);Z&&e.prop(a,c)})}}}});var Pa={$addControl:C,$removeControl:C,$setValidity:C,$setDirty:C};Xb.$inject=["$element","$attrs","$scope"];var Sa=function(a){return["$timeout",function(c){var d={name:"form",restrict:"E",controller:Xb,compile:function(){return{pre:function(a,d,h,f){if(!h.action){var i=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};$b(d[0],"submit",i);d.bind("$destroy",function(){c(function(){eb(d[0],"submit",i)},0,!1)})}var j=d.parent().controller("form"),
k=h.name||h.ngForm;k&&(a[k]=f);j&&d.bind("$destroy",function(){j.$removeControl(f);k&&(a[k]=s);D(f,Pa)})}}}};return a?D(U(d),{restrict:"EAC"}):d}]},kd=Sa(),ld=Sa(!0),md=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,nd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,od=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,bc={text:Ra,number:function(a,c,d,e,g,h){Ra(a,c,d,e,g,h);e.$parsers.push(function(a){var c=S(a);return c||od.test(a)?(e.$setValidity("number",!0),a===""?
null:c?a:parseFloat(a)):(e.$setValidity("number",!1),s)});e.$formatters.push(function(a){return S(a)?"":""+a});if(d.min){var f=parseFloat(d.min),a=function(a){return!S(a)&&a<f?(e.$setValidity("min",!1),s):(e.$setValidity("min",!0),a)};e.$parsers.push(a);e.$formatters.push(a)}if(d.max){var i=parseFloat(d.max),d=function(a){return!S(a)&&a>i?(e.$setValidity("max",!1),s):(e.$setValidity("max",!0),a)};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(a){return S(a)||wa(a)?(e.$setValidity("number",
!0),a):(e.$setValidity("number",!1),s)})},url:function(a,c,d,e,g,h){Ra(a,c,d,e,g,h);a=function(a){return S(a)||md.test(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),s)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,h){Ra(a,c,d,e,g,h);a=function(a){return S(a)||nd.test(a)?(e.$setValidity("email",!0),a):(e.$setValidity("email",!1),s)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){v(d.name)&&c.attr("name",xa());c.bind("click",function(){c[0].checked&&
a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,h=d.ngFalseValue;F(g)||(g=!0);F(h)||(h=!1);c.bind("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:h})},hidden:C,button:C,submit:C,reset:C},cc=["$browser","$sniffer",
function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,h){h&&(bc[B(g.type)]||bc.text)(d,e,g,h,c,a)}}}],Oa="ng-valid",Na="ng-invalid",Qa="ng-pristine",Yb="ng-dirty",pd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function h(a,c){c=c?"-"+ab(c,"-"):"";e.removeClass((a?Na:Oa)+c).addClass((a?Oa:Na)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=
!0;this.$invalid=!1;this.$name=d.name;var g=g(d.ngModel),f=g.assign;if(!f)throw y(Eb+d.ngModel+" ("+pa(e)+")");this.$render=C;var i=e.inheritedData("$formController")||Pa,j=0,k=this.$error={};e.addClass(Qa);h(!0);this.$setValidity=function(a,c){if(k[a]!==!c){if(c){if(k[a]&&j--,!j)h(!0),this.$valid=!0,this.$invalid=!1}else h(!1),this.$invalid=!0,this.$valid=!1,j++;k[a]=!c;h(c,a);i.$setValidity(a,c,this)}};this.$setViewValue=function(d){this.$viewValue=d;if(this.$pristine)this.$dirty=!0,this.$pristine=
!1,e.removeClass(Qa).addClass(Yb),i.$setDirty();m(this.$parsers,function(a){d=a(d)});if(this.$modelValue!==d)this.$modelValue=d,f(a,d),m(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};var l=this;a.$watch(g,function(a){if(l.$modelValue!==a){var c=l.$formatters,d=c.length;for(l.$modelValue=a;d--;)a=c[d](a);if(l.$viewValue!==a)l.$viewValue=a,l.$render()}})}],qd=function(){return{require:["ngModel","^?form"],controller:pd,link:function(a,c,d,e){var g=e[0],h=e[1]||Pa;h.$addControl(g);
c.bind("$destroy",function(){h.$removeControl(g)})}}},rd=J({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),dc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&(S(a)||a===!1))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},sd=function(){return{require:"ngModel",
link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){var c=[];a&&m(a.split(g),function(a){a&&c.push(Q(a))});return c});e.$formatters.push(function(a){return K(a)?a.join(", "):s})}}},td=/^(true|false|\d+)$/,ud=function(){return{priority:100,compile:function(a,c){return td.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a,!1)})}}}},vd=R(function(a,c,d){c.addClass("ng-binding").data("$binding",
d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),wd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],xd=[function(){return function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe,function(a){c.html(a||"")})}}],yd=kb("",!0),zd=kb("Odd",0),Ad=kb("Even",1),Bd=R({compile:function(a,c){c.$set("ngCloak",s);
a.removeClass("ng-cloak")}}),Cd=[function(){return{scope:!0,controller:"@"}}],Dd=["$sniffer",function(a){return{priority:1E3,compile:function(){a.csp=!0}}}],ec={};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "),function(a){var c=fa("ng-"+a);ec[c]=["$parse",function(d){return function(e,g,h){var f=d(h[c]);g.bind(B(a),function(a){e.$apply(function(){f(e,{$event:a})})})}}]});var Ed=R(function(a,c,d){c.bind("submit",function(){a.$apply(d.ngSubmit)})}),
Fd=["$http","$templateCache","$anchorScroll","$compile",function(a,c,d,e){return{restrict:"ECA",terminal:!0,compile:function(g,h){var f=h.ngInclude||h.src,i=h.onload||"",j=h.autoscroll;return function(g,h){var n=0,m,o=function(){m&&(m.$destroy(),m=null);h.html("")};g.$watch(f,function(f){var q=++n;f?a.get(f,{cache:c}).success(function(a){q===n&&(m&&m.$destroy(),m=g.$new(),h.html(a),e(h.contents())(m),x(j)&&(!j||g.$eval(j))&&d(),m.$emit("$includeContentLoaded"),g.$eval(i))}).error(function(){q===n&&
o()}):o()})}}}}],Gd=R({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Hd=R({terminal:!0,priority:1E3}),Id=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,h){var f=h.count,i=g.attr(h.$attr.when),j=h.offset||0,k=e.$eval(i),l={},n=c.startSymbol(),p=c.endSymbol();m(k,function(a,e){l[e]=c(a.replace(d,n+f+"-"+j+p))});e.$watch(function(){var c=parseFloat(e.$eval(f));return isNaN(c)?"":(k[c]||(c=a.pluralCat(c-j)),l[c](e,g,!0))},function(a){g.text(a)})}}}],
Jd=R({transclude:"element",priority:1E3,terminal:!0,compile:function(a,c,d){return function(a,c,h){var f=h.ngRepeat,h=f.match(/^\s*(.+)\s+in\s+(.*)\s*$/),i,j,k;if(!h)throw y("Expected ngRepeat in form of '_item_ in _collection_' but got '"+f+"'.");f=h[1];i=h[2];h=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!h)throw y("'item' in 'item in collection' should be identifier or (key, value) but got '"+f+"'.");j=h[3]||h[1];k=h[2];var l=new fb;a.$watch(function(a){var e,f,h=a.$eval(i),m=hc(h,
!0),r,s=new fb,u,w,v,x,z=c;if(K(h))v=h||[];else{v=[];for(u in h)h.hasOwnProperty(u)&&u.charAt(0)!="$"&&v.push(u);v.sort()}e=0;for(f=v.length;e<f;e++){u=h===v?e:v[e];w=h[u];if(x=l.shift(w)){r=x.scope;s.push(w,x);if(e!==x.index)x.index=e,z.after(x.element);z=x.element}else r=a.$new();r[j]=w;k&&(r[k]=u);r.$index=e;r.$first=e===0;r.$last=e===m-1;r.$middle=!(r.$first||r.$last);x||d(r,function(a){z.after(a);x={scope:r,element:z=a,index:e};s.push(w,x)})}for(u in l)if(l.hasOwnProperty(u))for(v=l[u];v.length;)w=
v.pop(),w.element.remove(),w.scope.$destroy();l=s})}}}),Kd=R(function(a,c,d){a.$watch(d.ngShow,function(a){c.css("display",Xa(a)?"":"none")})}),Ld=R(function(a,c,d){a.$watch(d.ngHide,function(a){c.css("display",Xa(a)?"none":"")})}),Md=R(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Nd=J({restrict:"EA",compile:function(a,c){var d=c.ngSwitch||c.on,e={};a.data("ng-switch",e);return function(a,h){var f,i,j;a.$watch(d,function(d){i&&(j.$destroy(),
i.remove(),i=j=null);if(f=e["!"+d]||e["?"])a.$eval(c.change),j=a.$new(),f(j,function(a){i=a;h.append(a)})})}}}),Od=R({transclude:"element",priority:500,compile:function(a,c,d){a=a.inheritedData("ng-switch");qa(a);a["!"+c.ngSwitchWhen]=d}}),Pd=R({transclude:"element",priority:500,compile:function(a,c,d){a=a.inheritedData("ng-switch");qa(a);a["?"]=d}}),Qd=R({controller:["$transclude","$element",function(a,c){a(function(a){c.append(a)})}]}),Rd=["$http","$templateCache","$route","$anchorScroll","$compile",
"$controller",function(a,c,d,e,g,h){return{restrict:"ECA",terminal:!0,link:function(a,c,j){function k(){var j=d.current&&d.current.locals,k=j&&j.$template;if(k){c.html(k);l&&(l.$destroy(),l=null);var k=g(c.contents()),m=d.current;l=m.scope=a.$new();if(m.controller)j.$scope=l,j=h(m.controller,j),c.contents().data("$ngControllerController",j);k(l);l.$emit("$viewContentLoaded");l.$eval(n);e()}else c.html(""),l&&(l.$destroy(),l=null)}var l,n=j.onload||"";a.$on("$routeChangeSuccess",k);k()}}}],Sd=["$templateCache",
function(a){return{restrict:"E",terminal:!0,compile:function(c,d){d.type=="text/ng-template"&&a.put(d.id,c[0].text)}}}],Td=J({terminal:!0}),Ud=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,e={$setViewValue:C};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var i=this,j={},k=e,l;i.databound=d.ngModel;
i.init=function(a,c,d){k=a;l=d};i.addOption=function(c){j[c]=!0;k.$viewValue==c&&(a.val(c),l.parent()&&l.remove())};i.removeOption=function(a){this.hasOption(a)&&(delete j[a],k.$viewValue==a&&this.renderUnknownOption(a))};i.renderUnknownOption=function(c){c="? "+ja(c)+" ?";l.val(c);a.prepend(l);a.val(c);l.prop("selected",!0)};i.hasOption=function(a){return j.hasOwnProperty(a)};c.$on("$destroy",function(){i.renderUnknownOption=C})}],link:function(e,h,f,i){function j(a,c,d,e){d.$render=function(){var a=
d.$viewValue;e.hasOption(a)?(w.parent()&&w.remove(),c.val(a),a===""&&r.prop("selected",!0)):v(a)&&r?c.val(""):e.renderUnknownOption(a)};c.bind("change",function(){a.$apply(function(){w.parent()&&w.remove();d.$setViewValue(c.val())})})}function k(a,c,d){var e;d.$render=function(){var a=new Fa(d.$viewValue);m(c.children(),function(c){c.selected=x(a.get(c.value))})};a.$watch(function(){ga(e,d.$viewValue)||(e=U(d.$viewValue),d.$render())});c.bind("change",function(){a.$apply(function(){var a=[];m(c.children(),
function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function l(e,f,g){function i(){var a={"":[]},c=[""],d,h,t,u,v;t=g.$modelValue;u=r(e)||[];var x=l?mb(u):u,z,w,y;w={};v=!1;var A,B;if(o)v=new Fa(t);else if(t===null||q)a[""].push({selected:t===null,id:"",label:""}),v=!0;for(y=0;z=x.length,y<z;y++){w[k]=u[l?w[l]=x[y]:y];d=m(e,w)||"";if(!(h=a[d]))h=a[d]=[],c.push(d);o?d=v.remove(n(e,w))!=s:(d=t===n(e,w),v=v||d);h.push({id:l?x[y]:y,label:j(e,w)||"",selected:d})}!o&&!v&&a[""].unshift({id:"?",
label:"",selected:!0});w=0;for(x=c.length;w<x;w++){d=c[w];h=a[d];if(p.length<=w)t={element:D.clone().attr("label",d),label:h.label},u=[t],p.push(u),f.append(t.element);else if(u=p[w],t=u[0],t.label!=d)t.element.attr("label",t.label=d);A=null;y=0;for(z=h.length;y<z;y++)if(d=h[y],v=u[y+1]){A=v.element;if(v.label!==d.label)A.text(v.label=d.label);if(v.id!==d.id)A.val(v.id=d.id);if(v.element.selected!==d.selected)A.prop("selected",v.selected=d.selected)}else d.id===""&&q?B=q:(B=C.clone()).val(d.id).attr("selected",
d.selected).text(d.label),u.push({element:B,label:d.label,id:d.id,selected:d.selected}),A?A.after(B):t.element.append(B),A=B;for(y++;u.length>y;)u.pop().element.remove()}for(;p.length>w;)p.pop()[0].element.remove()}var h;if(!(h=t.match(d)))throw y("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '"+t+"'.");var j=c(h[2]||h[1]),k=h[4]||h[6],l=h[5],m=c(h[3]||""),n=c(h[2]?h[1]:k),r=c(h[7]),p=[[{element:f,label:""}]];q&&(a(q)(e),q.removeClass("ng-scope"),
q.remove());f.html("");f.bind("change",function(){e.$apply(function(){var a,c=r(e)||[],d={},h,i,j,m,q,t;if(o){i=[];m=0;for(t=p.length;m<t;m++){a=p[m];j=1;for(q=a.length;j<q;j++)if((h=a[j].element)[0].selected)h=h.val(),l&&(d[l]=h),d[k]=c[h],i.push(n(e,d))}}else h=f.val(),h=="?"?i=s:h==""?i=null:(d[k]=c[h],l&&(d[l]=h),i=n(e,d));g.$setViewValue(i)})});g.$render=i;e.$watch(i)}if(i[1]){for(var n=i[0],p=i[1],o=f.multiple,t=f.ngOptions,q=!1,r,C=u(aa.createElement("option")),D=u(aa.createElement("optgroup")),
w=C.clone(),i=0,B=h.children(),F=B.length;i<F;i++)if(B[i].value==""){r=q=B.eq(i);break}n.init(p,q,w);if(o&&(f.required||f.ngRequired)){var z=function(a){p.$setValidity("required",!f.required||a&&a.length);return a};p.$parsers.push(z);p.$formatters.unshift(z);f.$observe("required",function(){z(p.$viewValue)})}t?l(e,h,p):o?k(e,h,p):j(e,h,p,n)}}}}],Vd=["$interpolate",function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(v(e.value)){var g=a(d.text(),
!0);g||e.$set("value",d.text())}return function(a,d,e){var j=d.parent(),k=j.data("$selectController")||j.parent().data("$selectController");k&&k.databound?d.prop("selected",!1):k=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&k.removeOption(c);k.addOption(a)}):k.addOption(e.value);d.bind("$destroy",function(){k.removeOption(e.value)})}}}}],Wd=J({restrict:"E",terminal:!0});(ia=T.jQuery)?(u=ia,D(ia.fn,{scope:ua.scope,controller:ua.controller,injector:ua.injector,inheritedData:ua.inheritedData}),
bb("remove",!0),bb("empty"),bb("html")):u=O;Zb.element=u;(function(a){D(a,{bootstrap:qb,copy:U,extend:D,equals:ga,element:u,forEach:m,injector:rb,noop:C,bind:Wa,toJson:ba,fromJson:ob,identity:ma,isUndefined:v,isDefined:x,isString:F,isFunction:L,isObject:I,isNumber:wa,isElement:gc,isArray:K,version:id,isDate:na,lowercase:B,uppercase:la,callbacks:{counter:0}});ta=mc(T);try{ta("ngLocale")}catch(c){ta("ngLocale",[]).provider("$locale",Zc)}ta("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",
Cb).directive({a:jd,input:cc,textarea:cc,form:kd,script:Sd,select:Ud,style:Wd,option:Vd,ngBind:vd,ngBindHtmlUnsafe:xd,ngBindTemplate:wd,ngClass:yd,ngClassEven:Ad,ngClassOdd:zd,ngCsp:Dd,ngCloak:Bd,ngController:Cd,ngForm:ld,ngHide:Ld,ngInclude:Fd,ngInit:Gd,ngNonBindable:Hd,ngPluralize:Id,ngRepeat:Jd,ngShow:Kd,ngSubmit:Ed,ngStyle:Md,ngSwitch:Nd,ngSwitchWhen:Od,ngSwitchDefault:Pd,ngOptions:Td,ngView:Rd,ngTransclude:Qd,ngModel:qd,ngList:sd,ngChange:rd,required:dc,ngRequired:dc,ngValue:ud}).directive(lb).directive(ec);
a.provider({$anchorScroll:vc,$browser:xc,$cacheFactory:yc,$controller:Bc,$document:Cc,$exceptionHandler:Dc,$filter:Qb,$interpolate:Ec,$http:Vc,$httpBackend:Wc,$location:Ic,$log:Jc,$parse:Nc,$route:Qc,$routeParams:Rc,$rootScope:Sc,$q:Oc,$sniffer:Tc,$templateCache:zc,$timeout:$c,$window:Uc})}])})(Zb);u(aa).ready(function(){kc(aa,qb)})})(window,document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');
function CastController($scope){
	$scope.items = [
		{title: 'Name1', quantity:1, price: 3.95},
		{title: 'Name2', quantity:1, price: 3.95},
		{title: 'Name3', quantity:1, price: 3.95},
		{title: 'Name4', quantity:1, price: 3.95},
		{title: 'Name5', quantity:1, price: 3.95}
	];
	
	$scope.totalCart = function(){
		var total = 0;
			for(var i=0, len=$scope.items.length; i<len; i++){
				total = total + $scope.items[i].price * $scope.items[i].quantity
			}
		return total;
	};
	
	function calculateDiscount(newValue){
		$scope.bill = newValue>100?10:0;
	};

	function allSum(){
		$scope.sum = total - total * bill/100;
		return sum;
	};
	
	$scope.$watch($scope.totalCart, calculateDiscount, allSum);
}
var source1, drop;

function initiate(){
	source1 = document.getElementById('img');
	source1 = addEventListener('dragstart', dragged);
	drop = document.getElementById('dropbox');
	drop.addEventListener('dragenter', dragentered);
	drop.addEventListener('dragover', dragovered);
	drop.addEventListener('drop', dropped);
};

function dragentered(e){
	// предотвращаем действия по умолчанию
	e.preventDefault();
};

function dragovered(e){
	e.preventDefault();
};

function dropped(e){
	e.preventDefault();
	drop.innerHTML = e.dataTransfer.getData('Text');
};

function dragget(e){
	var code = "<img src='"+source1.getAttribute('src')+"'/>";
	e.dataTransfer.setData('Text', code);
};

addEventListener('load', initiate);
/*
 AngularJS v1.1.0
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(T,aa,s){'use strict';function m(b,a,c){var d;if(b)if(L(b))for(d in b)d!="prototype"&&d!="length"&&d!="name"&&b.hasOwnProperty(d)&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==m)b.forEach(a,c);else if(I(b)&&wa(b.length))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function mb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function fc(b,a,c){for(var d=mb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}
function nb(b){return function(a,c){b(c,a)}}function xa(){for(var b=Y.length,a;b;){b--;a=Y[b].charCodeAt(0);if(a==57)return Y[b]="A",Y.join("");if(a==90)Y[b]="0";else return Y[b]=String.fromCharCode(a+1),Y.join("")}Y.unshift("0");return Y.join("")}function D(b){m(arguments,function(a){a!==b&&m(a,function(a,d){b[d]=a})});return b}function G(b){return parseInt(b,10)}function ya(b,a){return D(new (D(function(){},{prototype:b})),a)}function C(){}function ma(b){return b}function J(b){return function(){return b}}
function v(b){return typeof b=="undefined"}function x(b){return typeof b!="undefined"}function I(b){return b!=null&&typeof b=="object"}function F(b){return typeof b=="string"}function wa(b){return typeof b=="number"}function na(b){return Ta.apply(b)=="[object Date]"}function K(b){return Ta.apply(b)=="[object Array]"}function L(b){return typeof b=="function"}function oa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Q(b){return F(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b}function gc(b){return b&&
(b.nodeName||b.bind&&b.find)}function Ua(b,a,c){var d=[];m(b,function(b,g,h){d.push(a.call(c,b,g,h))});return d}function hc(b,a){var c=0,d;if(K(b)||F(b))return b.length;else if(I(b))for(d in b)(!a||b.hasOwnProperty(d))&&c++;return c}function Va(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function za(b,a){var c=Va(b,a);c>=0&&b.splice(c,1);return a}function U(b,a){if(oa(b)||b&&b.$evalAsync&&b.$watch)throw y("Can't copy Window or Scope");if(a){if(b===
a)throw y("Can't copy equivalent objects or arrays");if(K(b)){for(;a.length;)a.pop();for(var c=0;c<b.length;c++)a.push(U(b[c]))}else for(c in m(a,function(b,c){delete a[c]}),b)a[c]=U(b[c])}else(a=b)&&(K(b)?a=U(b,[]):na(b)?a=new Date(b.getTime()):I(b)&&(a=U(b,{})));return a}function ic(b,a){var a=a||{},c;for(c in b)b.hasOwnProperty(c)&&c.substr(0,2)!=="$$"&&(a[c]=b[c]);return a}function ga(b,a){if(b===a)return!0;if(b===null||a===null)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&
c=="object")if(K(b)){if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ga(b[d],a[d]))return!1;return!0}}else if(na(b))return na(a)&&b.getTime()==a.getTime();else{if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||oa(b)||oa(a))return!1;c={};for(d in b){if(d.charAt(0)!=="$"&&!L(b[d])&&!ga(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c[d]&&d.charAt(0)!=="$"&&!L(a[d]))return!1;return!0}return!1}function Wa(b,a){var c=arguments.length>2?ha.call(arguments,2):[];return L(a)&&!(a instanceof RegExp)?c.length?
function(){return arguments.length?a.apply(b,c.concat(ha.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}:a}function jc(b,a){var c=a;/^\$+/.test(b)?c=s:oa(a)?c="$WINDOW":a&&aa===a?c="$DOCUMENT":a&&a.$evalAsync&&a.$watch&&(c="$SCOPE");return c}function ba(b,a){return JSON.stringify(b,jc,a?"  ":null)}function ob(b){return F(b)?JSON.parse(b):b}function Xa(b){b&&b.length!==0?(b=B(""+b),b=!(b=="f"||b=="0"||b=="false"||b=="no"||b=="n"||b=="[]")):b=!1;
return b}function pa(b){b=u(b).clone();try{b.html("")}catch(a){}return u("<div>").append(b).html().match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+B(b)})}function Ya(b){var a={},c,d;m((b||"").split("&"),function(b){b&&(c=b.split("="),d=decodeURIComponent(c[0]),a[d]=x(c[1])?decodeURIComponent(c[1]):!0)});return a}function pb(b){var a=[];m(b,function(b,d){a.push(Za(d,!0)+(b===!0?"":"="+Za(b,!0)))});return a.length?a.join("&"):""}function $a(b){return Za(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function Za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(a?null:/%20/g,"+")}function kc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,h=["ng:app","ng-app","x-ng-app","data-ng-app"],f=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;m(h,function(a){h[a]=!0;c(aa.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(m(b.querySelectorAll("."+a),c),m(b.querySelectorAll("."+a+"\\:"),c),m(b.querySelectorAll("["+
a+"]"),c))});m(d,function(a){if(!e){var b=f.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):m(a.attributes,function(b){if(!e&&h[b.name])e=a,g=b.value})}});e&&a(e,g?[g]:[])}function qb(b,a){b=u(b);a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");var c=rb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,h){a.$apply(function(){b.data("$injector",h);c(b)(a)})}]);return c}function ab(b,a){a=a||"_";return b.replace(lc,
function(b,d){return(d?a:"")+b.toLowerCase()})}function qa(b,a,c){if(!b)throw new y("Argument '"+(a||"?")+"' is "+(c||"required"));return b}function ra(b,a,c){c&&K(b)&&(b=b[b.length-1]);qa(L(b),a,"not a function, got "+(b&&typeof b=="object"?b.constructor.name||"Object":typeof b));return b}function mc(b){function a(a,b,e){return a[b]||(a[b]=e())}return a(a(b,"angular",Object),"module",function(){var b={};return function(d,e,g){e&&b.hasOwnProperty(d)&&(b[d]=null);return a(b,d,function(){function a(c,
d,e){return function(){b[e||"push"]([c,d,arguments]);return k}}if(!e)throw y("No module: "+d);var b=[],c=[],j=a("$injector","invoke"),k={_invokeQueue:b,_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:j,run:function(a){c.push(a);
return this}};g&&j(g);return k})}})}function sb(b){return b.replace(nc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(oc,"Moz$1")}function bb(b,a){function c(){var e;for(var b=[this],c=a,h,f,i,j,k,l,n;b.length;){h=b.shift();f=0;for(i=h.length;f<i;f++){j=u(h[f]);c?(n=(k=j.data("events"))&&k.$destroy)&&m(n,function(a){a.handler()}):c=!c;k=0;for(e=(l=j.children()).length,j=e;k<j;k++)b.push(ia(l[k]))}}return d.apply(this,arguments)}var d=ia.fn[b],d=d.$original||d;c.$original=d;ia.fn[b]=c}function O(b){if(b instanceof
O)return b;if(!(this instanceof O)){if(F(b)&&b.charAt(0)!="<")throw y("selectors not implemented");return new O(b)}if(F(b)){var a=aa.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);cb(this,a.childNodes);this.remove()}else cb(this,b)}function db(b){return b.cloneNode(!0)}function sa(b){tb(b);for(var a=0,b=b.childNodes||[];a<b.length;a++)sa(b[a])}function ub(b,a,c){var d=ca(b,"events");ca(b,"handle")&&(v(a)?m(d,function(a,c){eb(b,c,a);delete d[c]}):v(c)?(eb(b,a,d[a]),
delete d[a]):za(d[a],c))}function tb(b){var a=b[Aa],c=Ba[a];c&&(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),ub(b)),delete Ba[a],b[Aa]=s)}function ca(b,a,c){var d=b[Aa],d=Ba[d||-1];if(x(c))d||(b[Aa]=d=++pc,d=Ba[d]={}),d[a]=c;else return d&&d[a]}function vb(b,a,c){var d=ca(b,"data"),e=x(c),g=!e&&x(a),h=g&&!I(a);!d&&!h&&ca(b,"data",d={});if(e)d[a]=c;else if(g)if(h)return d&&d[a];else D(d,a);else return d}function Ca(b,a){return(" "+b.className+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" ")>
-1}function wb(b,a){a&&m(a.split(" "),function(a){b.className=Q((" "+b.className+" ").replace(/[\n\t]/g," ").replace(" "+Q(a)+" "," "))})}function xb(b,a){a&&m(a.split(" "),function(a){if(!Ca(b,a))b.className=Q(b.className+" "+Q(a))})}function cb(b,a){if(a)for(var a=!a.nodeName&&x(a.length)&&!oa(a)?a:[a],c=0;c<a.length;c++)b.push(a[c])}function yb(b,a){return Da(b,"$"+(a||"ngController")+"Controller")}function Da(b,a,c){b=u(b);for(b[0].nodeType==9&&(b=b.find("html"));b.length;){if(c=b.data(a))return c;
b=b.parent()}}function zb(b,a){var c=Ea[a.toLowerCase()];return c&&Ab[b.nodeName]&&c}function qc(b,a){var c=function(c,e){if(!c.preventDefault)c.preventDefault=function(){c.returnValue=!1};if(!c.stopPropagation)c.stopPropagation=function(){c.cancelBubble=!0};if(!c.target)c.target=c.srcElement||aa;if(v(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented};m(a[e||c.type],
function(a){a.call(b,c)});Z<=8?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function ja(b){var a=typeof b,c;if(a=="object"&&b!==null)if(typeof(c=b.$$hashKey)=="function")c=b.$$hashKey();else{if(c===s)c=b.$$hashKey=xa()}else c=b;return a+":"+c}function Fa(b){m(b,this.put,this)}function fb(){}function Bb(b){var a,c;if(typeof b=="function"){if(!(a=b.$inject))a=[],c=b.toString().replace(rc,
""),c=c.match(sc),m(c[1].split(tc),function(b){b.replace(uc,function(b,c,d){a.push(d)})}),b.$inject=a}else K(b)?(c=b.length-1,ra(b[c],"fn"),a=b.slice(0,c)):ra(b,"fn",!0);return a}function rb(b){function a(a){return function(b,c){if(I(b))m(b,nb(a));else return a(b,c)}}function c(a,b){L(b)&&(b=l.instantiate(b));if(!b.$get)throw y("Provider "+a+" must define $get factory method.");return k[a+f]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];m(a,function(a){if(!j.get(a))if(j.put(a,!0),
F(a)){var c=ta(a);b=b.concat(e(c.requires)).concat(c._runBlocks);try{for(var d=c._invokeQueue,c=0,f=d.length;c<f;c++){var g=d[c],i=l.get(g[0]);i[g[1]].apply(i,g[2])}}catch(h){throw h.message&&(h.message+=" from "+a),h;}}else if(L(a))try{b.push(l.invoke(a))}catch(o){throw o.message&&(o.message+=" from "+a),o;}else if(K(a))try{b.push(l.invoke(a))}catch(n){throw n.message&&(n.message+=" from "+String(a[a.length-1])),n;}else ra(a,"module")});return b}function g(a,b){function c(d){if(typeof d!=="string")throw y("Service name expected");
if(a.hasOwnProperty(d)){if(a[d]===h)throw y("Circular dependency: "+i.join(" <- "));return a[d]}else try{return i.unshift(d),a[d]=h,a[d]=b(d)}finally{i.shift()}}function d(a,b,e){var f=[],g=Bb(a),j,h,o;h=0;for(j=g.length;h<j;h++)o=g[h],f.push(e&&e.hasOwnProperty(o)?e[o]:c(o,i));a.$inject||(a=a[j]);switch(b?-1:f.length){case 0:return a();case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],f[1],f[2],f[3],f[4]);case 6:return a(f[0],
f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(K(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return I(e)?e:c},get:c,annotate:Bb}}var h={},f="Provider",i=[],j=new Fa,k={$provide:{provider:a(c),
factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,J(b))}),constant:a(function(a,b){k[a]=b;n[a]=b}),decorator:function(a,b){var c=l.get(a+f),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},l=k.$injector=g(k,function(){throw y("Unknown provider: "+i.join(" <- "));}),n={},p=n.$injector=g(n,function(a){a=l.get(a+f);return p.invoke(a.$get,a)});m(e(b),function(a){p.invoke(a||C)});
return p}function vc(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;m(a,function(a){!b&&B(a.nodeName)==="a"&&(b=a)});return b}function g(){var b=c.hash(),d;b?(d=h.getElementById(b))?d.scrollIntoView():(d=e(h.getElementsByName(b)))?d.scrollIntoView():b==="top"&&a.scrollTo(0,0):a.scrollTo(0,0)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function wc(b,a,c,
d){function e(a){try{a.apply(null,ha.call(arguments,1))}finally{if(o--,o===0)for(;t.length;)try{t.pop()()}catch(b){c.error(b)}}}function g(a,b){(function ea(){m(q,function(a){a()});r=b(ea,a)})()}function h(){da!=f.url()&&(da=f.url(),m(w,function(a){a(f.url())}))}var f=this,i=a[0],j=b.location,k=b.history,l=b.setTimeout,n=b.clearTimeout,p={};f.isMock=!1;var o=0,t=[];f.$$completeOutstandingRequest=e;f.$$incOutstandingRequestCount=function(){o++};f.notifyWhenNoOutstandingRequests=function(a){m(q,function(a){a()});
o===0?a():t.push(a)};var q=[],r;f.addPollFn=function(a){v(r)&&g(100,l);q.push(a);return a};var da=j.href,E=a.find("base");f.url=function(a,b){if(a){if(da!=a)return da=a,d.history?b?k.replaceState(null,"",a):(k.pushState(null,"",a),E.attr("href",E.attr("href"))):b?j.replace(a):j.href=a,f}else return j.href.replace(/%27/g,"'")};var w=[],P=!1;f.onUrlChange=function(a){P||(d.history&&u(b).bind("popstate",h),d.hashchange?u(b).bind("hashchange",h):f.addPollFn(h),P=!0);w.push(a);return a};f.baseHref=function(){var a=
E.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):a};var V={},z="",M=f.baseHref();f.cookies=function(a,b){var d,e,f,g;if(a)if(b===s)i.cookie=escape(a)+"=;path="+M+";expires=Thu, 01 Jan 1970 00:00:00 GMT";else{if(F(b))d=(i.cookie=escape(a)+"="+escape(b)+";path="+M).length+1,d>4096&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"),V.length>20&&c.warn("Cookie '"+a+"' possibly not set or overflowed because too many cookies were already set ("+
V.length+" > 20 )")}else{if(i.cookie!==z){z=i.cookie;d=z.split("; ");V={};for(f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),g>0&&(V[unescape(e.substring(0,g))]=unescape(e.substring(g+1)))}return V}};f.defer=function(a,b){var c;o++;c=l(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};f.defer.cancel=function(a){return p[a]?(delete p[a],n(a),e(C),!0):!1}}function xc(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new wc(b,d,a,c)}]}function yc(){this.$get=function(){function b(b,
d){function e(a){if(a!=l){if(n){if(n==a)n=a.n}else n=a;g(a.n,a.p);g(a,l);l=a;l.n=null}}function g(a,b){if(a!=b){if(a)a.p=b;if(b)b.n=a}}if(b in a)throw y("cacheId "+b+" taken");var h=0,f=D({},d,{id:b}),i={},j=d&&d.capacity||Number.MAX_VALUE,k={},l=null,n=null;return a[b]={put:function(a,b){var c=k[a]||(k[a]={key:a});e(c);v(b)||(a in i||h++,i[a]=b,h>j&&this.remove(n.key))},get:function(a){var b=k[a];if(b)return e(b),i[a]},remove:function(a){var b=k[a];if(b==l)l=b.p;if(b==n)n=b.n;g(b.n,b.p);delete k[a];
delete i[a];h--},removeAll:function(){i={};h=0;k={};l=n=null},destroy:function(){k=f=i=null;delete a[b]},info:function(){return D({},f,{size:h})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function zc(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Cb(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g="Template must have exactly one root element. was: ";
this.directive=function f(d,e){F(d)?(qa(e,"directive"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];m(a[d],function(a){try{var f=b.invoke(a);if(L(f))f={compile:J(f)};else if(!f.compile&&f.link)f.compile=J(f.link);f.priority=f.priority||0;f.name=f.name||d;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(g){c(g)}});return e}])),a[d].push(e)):m(d,nb(f));return this};this.$get=["$injector","$interpolate","$exceptionHandler",
"$http","$templateCache","$parse","$controller","$rootScope",function(b,i,j,k,l,n,p,o){function t(a,b,c){a instanceof u||(a=u(a));m(a,function(b,c){b.nodeType==3&&(a[c]=u(b).wrap("<span></span>").parent()[0])});var d=r(a,b,a,c);return function(b,c){qa(b,"scope");var e=c?ua.clone.call(a):a;e.data("$scope",b);q(e,"ng-scope");c&&c(e,b);d&&d(b,e,e);return e}}function q(a,b){try{a.addClass(b)}catch(c){}}function r(a,b,c,d){function e(a,c,d,g){for(var j,i,n,k,l,o=0,p=0,q=f.length;o<q;p++)n=c[p],j=f[o++],
i=f[o++],j?(j.scope?(k=a.$new(I(j.scope)),u(n).data("$scope",k)):k=a,(l=j.transclude)||!g&&b?j(i,k,n,d,function(b){return function(c){var d=a.$new();return b(d,c).bind("$destroy",Wa(d,d.$destroy))}}(l||b)):j(i,k,n,s,g)):i&&i(a,n.childNodes,s,g)}for(var f=[],g,j,i,n=0;n<a.length;n++)j=new ea,g=da(a[n],[],j,d),j=(g=g.length?E(g,a[n],j,b,c):null)&&g.terminal?null:r(a[n].childNodes,g?g.transclude:b),f.push(g),f.push(j),i=i||g||j;return i?e:null}function da(a,b,c,f){var g=c.$attr,j;switch(a.nodeType){case 1:w(b,
fa(Db(a).toLowerCase()),"E",f);var i,n,k;j=a.attributes;for(var l=0,o=j&&j.length;l<o;l++)if(i=j[l],i.specified)n=i.name,k=fa(n.toLowerCase()),g[k]=n,c[k]=i=Q(Z&&n=="href"?decodeURIComponent(a.getAttribute(n,2)):i.value),zb(a,k)&&(c[k]=!0),W(a,b,i,k),w(b,k,"A",f);a=a.className;if(F(a))for(;j=e.exec(a);)k=fa(j[2]),w(b,k,"C",f)&&(c[k]=Q(j[3])),a=a.substr(j.index+j[0].length);break;case 3:H(b,a.nodeValue);break;case 8:try{if(j=d.exec(a.nodeValue))k=fa(j[1]),w(b,k,"M",f)&&(c[k]=Q(j[2]))}catch(p){}}b.sort(z);
return b}function E(a,b,c,d,e){function f(a,b){if(a)a.require=A.require,o.push(a);if(b)b.require=A.require,$.push(b)}function i(a,b){var c,d="data",e=!1;if(F(a)){for(;(c=a.charAt(0))=="^"||c=="?";)a=a.substr(1),c=="^"&&(d="inheritedData"),e=e||c=="?";c=b[d]("$"+a+"Controller");if(!c&&!e)throw y("No controller: "+a);}else K(a)&&(c=[],m(a,function(a){c.push(i(a,b))}));return c}function k(a,d,e,f,g){var l,q,P,t,Ha;l=b===e?c:ic(c,new ea(u(e),c.$attr));q=l.$$element;if(r&&I(r.scope)){var E=/^\s*([@=&])\s*(\w*)\s*$/,
z=d.$parent||d;m(r.scope,function(a,b){var c=a.match(E)||[],e=c[2]||b,f,g,j;switch(c[1]){case "@":l.$observe(e,function(a){d[b]=a});l.$$observers[e].$$scope=z;break;case "=":g=n(l[e]);j=g.assign||function(){f=d[b]=g(z);throw y(Eb+l[e]+" (directive: "+r.name+")");};f=d[b]=g(z);d.$watch(function(){var a=g(z);a!==d[b]&&(a!==f?f=d[b]=a:j(z,f=d[b]));return a});break;case "&":g=n(l[e]);d[b]=function(a){return g(z,a)};break;default:throw y("Invalid isolate scope definition for directive "+r.name+": "+a);
}})}x&&m(x,function(a){var b={$scope:d,$element:q,$attrs:l,$transclude:g};Ha=a.controller;Ha=="@"&&(Ha=l[a.name]);q.data("$"+a.name+"Controller",p(Ha,b))});f=0;for(P=o.length;f<P;f++)try{t=o[f],t(d,q,l,t.require&&i(t.require,q))}catch(w){j(w,pa(q))}a&&a(d,e.childNodes,s,g);f=0;for(P=$.length;f<P;f++)try{t=$[f],t(d,q,l,t.require&&i(t.require,q))}catch(Ia){j(Ia,pa(q))}}for(var l=-Number.MAX_VALUE,o=[],$=[],r=null,E=null,w=null,z=c.$$element=u(b),A,H,W,C,v=d,x,D,X,B=0,G=a.length;B<G;B++){A=a[B];W=s;
if(l>A.priority)break;if(X=A.scope)M("isolated scope",E,A,z),I(X)&&(q(z,"ng-isolate-scope"),E=A),q(z,"ng-scope"),r=r||A;H=A.name;if(X=A.controller)x=x||{},M("'"+H+"' controller",x[H],A,z),x[H]=A;if(X=A.transclude)M("transclusion",C,A,z),C=A,l=A.priority,X=="element"?(W=u(b),z=c.$$element=u("<\!-- "+H+": "+c[H]+" --\>"),b=z[0],Ga(e,u(W[0]),b),v=t(W,d,l)):(W=u(db(b)).contents(),z.html(""),v=t(W,d));if(X=A.template)if(M("template",w,A,z),w=A,X=Ia(X),A.replace){W=u("<div>"+Q(X)+"</div>").contents();b=
W[0];if(W.length!=1||b.nodeType!==1)throw new y(g+X);Ga(e,z,b);H={$attr:{}};a=a.concat(da(b,a.splice(B+1,a.length-(B+1)),H));P(c,H);G=a.length}else z.html(X);if(A.templateUrl)M("template",w,A,z),w=A,k=V(a.splice(B,a.length-B),k,z,c,e,A.replace,v),G=a.length;else if(A.compile)try{D=A.compile(z,c,v),L(D)?f(null,D):D&&f(D.pre,D.post)}catch(J){j(J,pa(z))}if(A.terminal)k.terminal=!0,l=Math.max(l,A.priority)}k.scope=r&&r.scope;k.transclude=C&&v;return k}function w(d,e,g,i){var n=!1;if(a.hasOwnProperty(e))for(var k,
e=b.get(e+c),l=0,o=e.length;l<o;l++)try{if(k=e[l],(i===s||i>k.priority)&&k.restrict.indexOf(g)!=-1)d.push(k),n=!0}catch(p){j(p)}return n}function P(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){e.charAt(0)!="$"&&(b[e]&&(d+=(e==="style"?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){f=="class"?(q(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):f=="style"?e.attr("style",e.attr("style")+";"+b):f.charAt(0)!="$"&&!a.hasOwnProperty(f)&&(a[f]=b,d[f]=c[f])})}function V(a,b,c,d,e,
f,j){var i=[],n,o,p=c[0],q=a.shift(),t=D({},q,{controller:null,templateUrl:null,transclude:null});c.html("");k.get(q.templateUrl,{cache:l}).success(function(k){var l,q,k=Ia(k);if(f){q=u("<div>"+Q(k)+"</div>").contents();l=q[0];if(q.length!=1||l.nodeType!==1)throw new y(g+k);k={$attr:{}};Ga(e,c,l);da(l,a,k);P(d,k)}else l=p,c.html(k);a.unshift(t);n=E(a,c,d,j);for(o=r(c.contents(),j);i.length;){var $=i.pop(),k=i.pop();q=i.pop();var z=i.pop(),m=l;q!==p&&(m=db(l),Ga(k,u(q),m));n(function(){b(o,z,m,e,$)},
z,m,e,$)}i=null}).error(function(a,b,c,d){throw y("Failed to load template: "+d.url);});return function(a,c,d,e,f){i?(i.push(c),i.push(d),i.push(e),i.push(f)):n(function(){b(o,c,d,e,f)},c,d,e,f)}}function z(a,b){return b.priority-a.priority}function M(a,b,c,d){if(b)throw y("Multiple directives ["+b.name+", "+c.name+"] asking for "+a+" on: "+pa(d));}function H(a,b){var c=i(b,!0);c&&a.push({priority:0,compile:J(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);q(d.data("$binding",e),
"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function W(a,b,c,d){var e=i(c,!0);e&&b.push({priority:100,compile:J(function(a,b,c){b=c.$$observers||(c.$$observers={});d==="class"&&(e=i(c[d],!0));c[d]=s;(b[d]||(b[d]=[])).$$inter=!0;(c.$$observers&&c.$$observers[d].$$scope||a).$watch(e,function(a){c.$set(d,a)})})})}function Ga(a,b,c){var d=b[0],e=d.parentNode,f,g;if(a){f=0;for(g=a.length;f<g;f++)if(a[f]==d){a[f]=c;break}}e&&e.replaceChild(c,d);c[u.expando]=d[u.expando];b[0]=c}var ea=function(a,
b){this.$$element=a;this.$attr=b||{}};ea.prototype={$normalize:fa,$set:function(a,b,c,d){var e=zb(this.$$element[0],a),f=this.$$observers;e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=ab(a,"-"));c!==!1&&(b===null||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));f&&m(f[a],function(a){try{a(b)}catch(c){j(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);o.$evalAsync(function(){e.$$inter||
b(c[a])});return b}};var C=i.startSymbol(),$=i.endSymbol(),Ia=C=="{{"||$=="}}"?ma:function(a){return a.replace(/\{\{/g,C).replace(/}}/g,$)};return t}]}function fa(b){return sb(b.replace(Ac,""))}function Bc(){var b={};this.register=function(a,c){I(a)?D(b,a):b[a]=c};this.$get=["$injector","$window",function(a,c){return function(d,e){if(F(d)){var g=d,d=b.hasOwnProperty(g)?b[g]:gb(e.$scope,g,!0)||gb(c,g,!0);ra(d,g,!0)}return a.instantiate(d,e)}}]}function Cc(){this.$get=["$window",function(b){return u(b.document)}]}
function Dc(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Ec(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler",function(c,d){function e(e,i){for(var j,k,l=0,n=[],p=e.length,o=!1,t=[];l<p;)(j=e.indexOf(b,l))!=-1&&(k=e.indexOf(a,j+g))!=-1?(l!=j&&n.push(e.substring(l,j)),n.push(l=c(o=e.substring(j+g,k))),l.exp=o,l=k+h,o=!0):(l!=p&&n.push(e.substring(l)),
l=p);if(!(p=n.length))n.push(""),p=1;if(!i||o)return t.length=p,l=function(a){try{for(var b=0,c=p,g;b<c;b++){if(typeof(g=n[b])=="function")g=g(a),g==null||g==s?g="":typeof g!="string"&&(g=ba(g));t[b]=g}return t.join("")}catch(j){a=new y("Error while interpolating: "+e+"\n"+j.toString()),d(a)}},l.exp=e,l.parts=n,l}var g=b.length,h=a.length;e.startSymbol=function(){return b};e.endSymbol=function(){return a};return e}]}function Fb(b){for(var b=b.split("/"),a=b.length;a--;)b[a]=$a(b[a]);return b.join("/")}
function va(b,a){var c=Gb.exec(b),c={protocol:c[1],host:c[3],port:G(c[5])||Hb[c[1]]||null,path:c[6]||"/",search:c[8],hash:c[10]};if(a)a.$$protocol=c.protocol,a.$$host=c.host,a.$$port=c.port;return c}function ka(b,a,c){return b+"://"+a+(c==Hb[b]?"":":"+c)}function Fc(b,a,c){var d=va(b);return decodeURIComponent(d.path)!=a||v(d.hash)||d.hash.indexOf(c)!==0?b:ka(d.protocol,d.host,d.port)+a.substr(0,a.lastIndexOf("/"))+d.hash.substr(c.length)}function Gc(b,a,c){var d=va(b);if(decodeURIComponent(d.path)==
a)return b;else{var e=d.search&&"?"+d.search||"",g=d.hash&&"#"+d.hash||"",h=a.substr(0,a.lastIndexOf("/")),f=d.path.substr(h.length);if(d.path.indexOf(h)!==0)throw y('Invalid url "'+b+'", missing path prefix "'+h+'" !');return ka(d.protocol,d.host,d.port)+a+"#"+c+f+e+g}}function hb(b,a,c){a=a||"";this.$$parse=function(b){var c=va(b,this);if(c.path.indexOf(a)!==0)throw y('Invalid url "'+b+'", missing path prefix "'+a+'" !');this.$$path=decodeURIComponent(c.path.substr(a.length));this.$$search=Ya(c.search);
this.$$hash=c.hash&&decodeURIComponent(c.hash)||"";this.$$compose()};this.$$compose=function(){var b=pb(this.$$search),c=this.$$hash?"#"+$a(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+a+this.$$url};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Ja(b,a,c){var d;this.$$parse=function(b){var c=va(b,this);if(c.hash&&c.hash.indexOf(a)!==0)throw y('Invalid url "'+b+'", missing hash prefix "'+
a+'" !');d=c.path+(c.search?"?"+c.search:"");c=Hc.exec((c.hash||"").substr(a.length));this.$$path=c[1]?(c[1].charAt(0)=="/"?"":"/")+decodeURIComponent(c[1]):"";this.$$search=Ya(c[3]);this.$$hash=c[5]&&decodeURIComponent(c[5])||"";this.$$compose()};this.$$compose=function(){var b=pb(this.$$search),c=this.$$hash?"#"+$a(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+d+(this.$$url?"#"+a+this.$$url:"")};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==
0)return a};this.$$parse(b)}function Ib(b,a,c,d){Ja.apply(this,arguments);this.$$rewriteAppUrl=function(b){if(b.indexOf(c)==0)return c+d+"#"+a+b.substr(c.length)}}function Ka(b){return function(){return this[b]}}function Jb(b,a){return function(c){if(v(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ic(){var b="",a=!1;this.hashPrefix=function(a){return x(a)?(b=a,this):b};this.html5Mode=function(b){return x(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",
function(c,d,e,g){function h(a){c.$broadcast("$locationChangeSuccess",f.absUrl(),a)}var f,i,j,k=d.url(),l=va(k);a?(i=d.baseHref()||"/",j=i.substr(0,i.lastIndexOf("/")),l=ka(l.protocol,l.host,l.port)+j+"/",f=e.history?new hb(Fc(k,i,b),j,l):new Ib(Gc(k,i,b),b,l,i.substr(j.length+1))):(l=ka(l.protocol,l.host,l.port)+(l.path||"")+(l.search?"?"+l.search:"")+"#"+b+"/",f=new Ja(k,b,l));g.bind("click",function(a){if(!a.ctrlKey&&!(a.metaKey||a.which==2)){for(var b=u(a.target);B(b[0].nodeName)!=="a";)if(b[0]===
g[0]||!(b=b.parent())[0])return;var d=b.prop("href"),e=f.$$rewriteAppUrl(d);d&&!b.attr("target")&&e&&(f.$$parse(e),c.$apply(),a.preventDefault(),T.angular["ff-684208-preventDefault"]=!0)}});f.absUrl()!=k&&d.url(f.absUrl(),!0);d.onUrlChange(function(a){f.absUrl()!=a&&(c.$evalAsync(function(){var b=f.absUrl();f.$$parse(a);h(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url();if(!n||a!=f.absUrl())n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",f.absUrl(),a).defaultPrevented?
f.$$parse(a):(d.url(f.absUrl(),f.$$replace),f.$$replace=!1,h(a))});return n});return f}]}function Jc(){this.$get=["$window",function(b){function a(a){a instanceof y&&(a.stack?a=a.message&&a.stack.indexOf(a.message)===-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function c(c){var e=b.console||{},g=e[c]||e.log||C;return g.apply?function(){var b=[];m(arguments,function(c){b.push(a(c))});return g.apply(e,b)}:function(a,b){g(a,b)}}return{log:c("log"),
warn:c("warn"),info:c("info"),error:c("error")}}]}function Kc(b,a){function c(a){return a.indexOf(q)!=-1}function d(){return o+1<b.length?b.charAt(o+1):!1}function e(a){return"0"<=a&&a<="9"}function g(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||a=="\u000b"||a=="\u00a0"}function h(a){return"a"<=a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function f(a){return a=="-"||a=="+"||e(a)}function i(a,c,d){d=d||o;throw y("Lexer Error: "+a+" at column"+(x(c)?"s "+c+"-"+o+" ["+b.substring(c,d)+"]":" "+d)+" in expression ["+
b+"].");}function j(){for(var a="",c=o;o<b.length;){var g=B(b.charAt(o));if(g=="."||e(g))a+=g;else{var j=d();if(g=="e"&&f(j))a+=g;else if(f(g)&&j&&e(j)&&a.charAt(a.length-1)=="e")a+=g;else if(f(g)&&(!j||!e(j))&&a.charAt(a.length-1)=="e")i("Invalid exponent");else break}o++}a*=1;n.push({index:c,text:a,json:!0,fn:function(){return a}})}function k(){for(var c="",d=o,f,j,i;o<b.length;){var k=b.charAt(o);if(k=="."||h(k)||e(k))k=="."&&(f=o),c+=k;else break;o++}if(f)for(j=o;j<b.length;){k=b.charAt(j);if(k==
"("){i=c.substr(f-d+1);c=c.substr(0,f-d);o=j;break}if(g(k))j++;else break}d={index:d,text:c};if(La.hasOwnProperty(c))d.fn=d.json=La[c];else{var l=Kb(c,a);d.fn=D(function(a,b){return l(a,b)},{assign:function(a,b){return Lb(a,c,b)}})}n.push(d);i&&(n.push({index:f,text:".",json:!1}),n.push({index:f+1,text:i,json:!1}))}function l(a){var c=o;o++;for(var d="",e=a,f=!1;o<b.length;){var g=b.charAt(o);e+=g;if(f)g=="u"?(g=b.substring(o+1,o+5),g.match(/[\da-f]{4}/i)||i("Invalid unicode escape [\\u"+g+"]"),o+=
4,d+=String.fromCharCode(parseInt(g,16))):(f=Lc[g],d+=f?f:g),f=!1;else if(g=="\\")f=!0;else if(g==a){o++;n.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}else d+=g;o++}i("Unterminated quote",c)}for(var n=[],p,o=0,t=[],q,r=":";o<b.length;){q=b.charAt(o);if(c("\"'"))l(q);else if(e(q)||c(".")&&e(d()))j();else if(h(q)){if(k(),"{,".indexOf(r)!=-1&&t[0]=="{"&&(p=n[n.length-1]))p.json=p.text.indexOf(".")==-1}else if(c("(){}[].,;:"))n.push({index:o,text:q,json:":[,".indexOf(r)!=-1&&
c("{[")||c("}]:,")}),c("{[")&&t.unshift(q),c("}]")&&t.shift(),o++;else if(g(q)){o++;continue}else{var m=q+d(),E=La[q],w=La[m];w?(n.push({index:o,text:m,fn:w}),o+=2):E?(n.push({index:o,text:q,fn:E,json:"[,:".indexOf(r)!=-1&&c("+-")}),o+=1):i("Unexpected next character ",o,o+1)}r=q}return n}function Mc(b,a,c,d){function e(a,c){throw y("Syntax Error: Token '"+c.text+"' "+a+" at column "+(c.index+1)+" of the expression ["+b+"] starting at ["+b.substring(c.index)+"].");}function g(){if(M.length===0)throw y("Unexpected end of expression: "+
b);return M[0]}function h(a,b,c,d){if(M.length>0){var e=M[0],f=e.text;if(f==a||f==b||f==c||f==d||!a&&!b&&!c&&!d)return e}return!1}function f(b,c,d,f){return(b=h(b,c,d,f))?(a&&!b.json&&e("is not valid json",b),M.shift(),b):!1}function i(a){f(a)||e("is unexpected, expecting ["+a+"]",h())}function j(a,b){return function(c,d){return a(c,d,b)}}function k(a,b,c){return function(d,e){return b(d,e,a,c)}}function l(){for(var a=[];;)if(M.length>0&&!h("}",")",";","]")&&a.push(v()),!f(";"))return a.length==1?
a[0]:function(b,c){for(var d,e=0;e<a.length;e++){var f=a[e];f&&(d=f(b,c))}return d}}function n(){for(var a=f(),b=c(a.text),d=[];;)if(a=f(":"))d.push(H());else{var e=function(a,c,e){for(var e=[e],f=0;f<d.length;f++)e.push(d[f](a,c));return b.apply(a,e)};return function(){return e}}}function p(){for(var a=o(),b;;)if(b=f("||"))a=k(a,b.fn,o());else return a}function o(){var a=t(),b;if(b=f("&&"))a=k(a,b.fn,o());return a}function t(){var a=q(),b;if(b=f("==","!="))a=k(a,b.fn,t());return a}function q(){var a;
a=r();for(var b;b=f("+","-");)a=k(a,b.fn,r());if(b=f("<",">","<=",">="))a=k(a,b.fn,q());return a}function r(){for(var a=m(),b;b=f("*","/","%");)a=k(a,b.fn,m());return a}function m(){var a;return f("+")?E():(a=f("-"))?k(V,a.fn,m()):(a=f("!"))?j(a.fn,m()):E()}function E(){var a;if(f("("))a=v(),i(")");else if(f("["))a=w();else if(f("{"))a=P();else{var b=f();(a=b.fn)||e("not a primary expression",b)}for(var c;b=f("(","[",".");)b.text==="("?(a=u(a,c),c=null):b.text==="["?(c=a,a=ea(a)):b.text==="."?(c=
a,a=x(a)):e("IMPOSSIBLE");return a}function w(){var a=[];if(g().text!="]"){do a.push(H());while(f(","))}i("]");return function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d}}function P(){var a=[];if(g().text!="}"){do{var b=f(),b=b.string||b.text;i(":");var c=H();a.push({key:b,value:c})}while(f(","))}i("}");return function(b,c){for(var d={},e=0;e<a.length;e++){var f=a[e],g=f.value(b,c);d[f.key]=g}return d}}var V=J(0),z,M=Kc(b,d),H=function(){var a=p(),c,d;return(d=f("="))?(a.assign||
e("implies assignment but ["+b.substring(0,d.index)+"] can not be assigned to",d),c=p(),function(b,d){return a.assign(b,c(b,d),d)}):a},u=function(a,b){var c=[];if(g().text!=")"){do c.push(H());while(f(","))}i(")");return function(d,e){for(var f=[],g=b?b(d,e):d,j=0;j<c.length;j++)f.push(c[j](d,e));j=a(d,e)||C;return j.apply?j.apply(g,f):j(f[0],f[1],f[2],f[3],f[4])}},x=function(a){var b=f().text,c=Kb(b,d);return D(function(b,d){return c(a(b,d),d)},{assign:function(c,d,e){return Lb(a(c,e),b,d)}})},ea=
function(a){var b=H();i("]");return D(function(c,d){var e=a(c,d),f=b(c,d),g;if(!e)return s;if((e=e[f])&&e.then){g=e;if(!("$$v"in e))g.$$v=s,g.then(function(a){g.$$v=a});e=e.$$v}return e},{assign:function(c,d,e){return a(c,e)[b(c,e)]=d}})},v=function(){for(var a=H(),b;;)if(b=f("|"))a=k(a,b.fn,n());else return a};a?(H=p,u=x=ea=v=function(){e("is not valid json",{text:b,index:0})},z=E()):z=l();M.length!==0&&e("is an unexpected token",M[0]);return z}function Lb(b,a,c){for(var a=a.split("."),d=0;a.length>
1;d++){var e=a.shift(),g=b[e];g||(g={},b[e]=g);b=g}return b[a.shift()]=c}function gb(b,a,c){if(!a)return b;for(var a=a.split("."),d,e=b,g=a.length,h=0;h<g;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&L(b)?Wa(e,b):b}function Mb(b,a,c,d,e){return function(g,h){var f=h&&h.hasOwnProperty(b)?h:g,i;if(f===null||f===s)return f;if((f=f[b])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}if(!a||f===null||f===s)return f;if((f=f[a])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=
a});f=f.$$v}if(!c||f===null||f===s)return f;if((f=f[c])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}if(!d||f===null||f===s)return f;if((f=f[d])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}if(!e||f===null||f===s)return f;if((f=f[e])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}return f}}function Kb(b,a){if(ib.hasOwnProperty(b))return ib[b];var c=b.split("."),d=c.length,e;if(a)e=d<6?Mb(c[0],c[1],c[2],c[3],c[4]):
function(a,b){var e=0,g;do g=Mb(c[e++],c[e++],c[e++],c[e++],c[e++])(a,b),b=s,a=g;while(e<d);return g};else{var g="var l, fn, p;\n";m(c,function(a,b){g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});g+="return s;";e=Function("s","k",g);e.toString=function(){return g}}return ib[b]=e}function Nc(){var b={};this.$get=
["$filter","$sniffer",function(a,c){return function(d){switch(typeof d){case "string":return b.hasOwnProperty(d)?b[d]:b[d]=Mc(d,!1,a,c.csp);case "function":return d;default:return C}}}]}function Oc(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Pc(function(a){b.$evalAsync(a)},a)}]}function Pc(b,a){function c(a){return a}function d(a){return h(a)}var e=function(){var f=[],i,j;return j={resolve:function(a){if(f){var c=f;f=s;i=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<
d;b++)a=c[b],i.then(a[0],a[1])})}},reject:function(a){j.resolve(h(a))},promise:{then:function(b,g){var j=e(),h=function(d){try{j.resolve((b||c)(d))}catch(e){a(e),j.reject(e)}},o=function(b){try{j.resolve((g||d)(b))}catch(c){a(c),j.reject(c)}};f?f.push([h,o]):i.then(h,o);return j.promise}}}},g=function(a){return a&&a.then?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},h=function(a){return{then:function(c,g){var h=e();b(function(){h.resolve((g||d)(a))});return h.promise}}};
return{defer:e,reject:h,when:function(f,i,j){var k=e(),l,n=function(b){try{return(i||c)(b)}catch(d){return a(d),h(d)}},p=function(b){try{return(j||d)(b)}catch(c){return a(c),h(c)}};b(function(){g(f).then(function(a){l||(l=!0,k.resolve(g(a).then(n,p)))},function(a){l||(l=!0,k.resolve(p(a)))})});return k.promise},all:function(a){var b=e(),c=a.length,d=[];c?m(a,function(a,e){g(a).then(function(a){e in d||(d[e]=a,--c||b.resolve(d))},function(a){e in d||b.reject(a)})}):b.resolve(d);return b.promise}}}
function Qc(){var b={};this.when=function(a,c){b[a]=D({reloadOnSearch:!0},c);if(a){var d=a[a.length-1]=="/"?a.substr(0,a.length-1):a+"/";b[d]={redirectTo:a}}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache",function(a,c,d,e,g,h,f){function i(){var b=j(),i=p.current;if(b&&i&&b.$route===i.$route&&ga(b.pathParams,i.pathParams)&&!b.reloadOnSearch&&!n)i.params=b.params,U(i.params,d),a.$broadcast("$routeUpdate",
i);else if(b||i)n=!1,a.$broadcast("$routeChangeStart",b,i),(p.current=b)&&b.redirectTo&&(F(b.redirectTo)?c.path(k(b.redirectTo,b.params)).search(b.params).replace():c.url(b.redirectTo(b.pathParams,c.path(),c.search())).replace()),e.when(b).then(function(){if(b){var a=[],c=[],d;m(b.resolve||{},function(b,d){a.push(d);c.push(L(b)?g.invoke(b):g.get(b))});if(!x(d=b.template))if(x(d=b.templateUrl))d=h.get(d,{cache:f}).then(function(a){return a.data});x(d)&&(a.push("$template"),c.push(d));return e.all(c).then(function(b){var c=
{};m(b,function(b,d){c[a[d]]=b});return c})}}).then(function(c){if(b==p.current){if(b)b.locals=c,U(b.params,d);a.$broadcast("$routeChangeSuccess",b,i)}},function(c){b==p.current&&a.$broadcast("$routeChangeError",b,i,c)})}function j(){var a,d;m(b,function(b,e){if(!d&&(a=l(c.path(),e)))d=ya(b,{params:D({},c.search(),a),pathParams:a}),d.$route=b});return d||b[null]&&ya(b[null],{params:{},pathParams:{}})}function k(a,b){var c=[];m((a||"").split(":"),function(a,d){if(d==0)c.push(a);else{var e=a.match(/(\w+)(.*)/),
f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var l=function(a,b){var c="^"+b.replace(/([\.\\\(\)\^\$])/g,"\\$1")+"$",d=[],e={};m(b.split(/\W/),function(a){if(a){var b=RegExp(":"+a+"([\\W])");c.match(b)&&(c=c.replace(b,"([^\\/]*)$1"),d.push(a))}});var f=a.match(RegExp(c));f&&m(d,function(a,b){e[a]=f[b+1]});return f?e:null},n=!1,p={routes:b,reload:function(){n=!0;a.$evalAsync(i)}};a.$on("$locationChangeSuccess",i);return p}]}function Rc(){this.$get=J({})}function Sc(){var b=
10;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse",function(a,c,d){function e(){this.$id=xa();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$asyncQueue=[];this.$$listeners={}}function g(a){if(i.$$phase)throw y(i.$$phase+" already in progress");i.$$phase=a}function h(a,b){var c=d(a);ra(c,b);return c}function f(){}e.prototype={$new:function(a){if(L(a))throw y("API-CHANGE: Use $controller to instantiate controllers.");
a?(a=new e,a.$root=this.$root):(a=function(){},a.prototype=this,a=new a,a.$id=xa());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$asyncQueue=[];a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=h(a,"watch"),e=this.$$watchers,g={fn:b,last:f,get:d,exp:a,eq:!!c};if(!L(b)){var i=h(b||C,"listener");g.fn=function(a,b,
c){i(c)}}if(!e)e=this.$$watchers=[];e.unshift(g);return function(){za(e,g)}},$digest:function(){var a,d,e,h,p,o,m,q=b,r,s=[],E,w;g("$digest");do{m=!1;r=this;do{for(p=r.$$asyncQueue;p.length;)try{r.$eval(p.shift())}catch(P){c(P)}if(h=r.$$watchers)for(o=h.length;o--;)try{if(a=h[o],(d=a.get(r))!==(e=a.last)&&!(a.eq?ga(d,e):typeof d=="number"&&typeof e=="number"&&isNaN(d)&&isNaN(e)))m=!0,a.last=a.eq?U(d):d,a.fn(d,e===f?d:e,r),q<5&&(E=4-q,s[E]||(s[E]=[]),w=L(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):
a.exp,w+="; newVal: "+ba(d)+"; oldVal: "+ba(e),s[E].push(w))}catch(V){c(V)}if(!(h=r.$$childHead||r!==this&&r.$$nextSibling))for(;r!==this&&!(h=r.$$nextSibling);)r=r.$parent}while(r=h);if(m&&!q--)throw i.$$phase=null,y(b+" $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+ba(s));}while(m||p.length);i.$$phase=null},$destroy:function(){if(i!=this){var a=this.$parent;this.$broadcast("$destroy");if(a.$$childHead==this)a.$$childHead=this.$$nextSibling;if(a.$$childTail==
this)a.$$childTail=this.$$prevSibling;if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling}},$eval:function(a,b){return d(a)(this,b)},$evalAsync:function(a){this.$$asyncQueue.push(a)},$apply:function(a){try{return g("$apply"),this.$eval(a)}catch(b){c(b)}finally{i.$$phase=null;try{i.$digest()}catch(d){throw c(d),d;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){za(c,
b)}},$emit:function(a,b){var d=[],e,f=this,g=!1,i={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1},h=[i].concat(ha.call(arguments,1)),m,s;do{e=f.$$listeners[a]||d;i.currentScope=f;m=0;for(s=e.length;m<s;m++)try{if(e[m].apply(null,h),g)return i}catch(E){c(E)}f=f.$parent}while(f);return i},$broadcast:function(a,b){var d=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},
g=[f].concat(ha.call(arguments,1));do if(d=e,f.currentScope=d,m(d.$$listeners[a],function(a){try{a.apply(null,g)}catch(b){c(b)}}),!(e=d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent;while(d=e);return f}};var i=new e;return i}]}function Tc(){this.$get=["$window","$document",function(b,a){var c={},d=G((/android (\d+)/.exec(B(b.navigator.userAgent))||[])[1]),e=a[0];return{history:!(!b.history||!b.history.pushState||d<4),hashchange:"onhashchange"in b&&(!e.documentMode||
e.documentMode>7),hasEvent:function(a){if(a=="input"&&Z==9)return!1;if(v(c[a])){var b=e.createElement("div");c[a]="on"+a in b}return c[a]},csp:e.SecurityPolicy?e.SecurityPolicy.isActive():!1}}]}function Uc(){this.$get=J(T)}function Nb(b){var a={},c,d,e;if(!b)return a;m(b.split("\n"),function(b){e=b.indexOf(":");c=B(Q(b.substr(0,e)));d=Q(b.substr(e+1));c&&(a[c]?a[c]+=", "+d:a[c]=d)});return a}function Ob(b){var a=I(b)?b:s;return function(c){a||(a=Nb(b));return c?a[B(c)]||null:a}}function Pb(b,a,c){if(L(c))return c(b,
a);m(c,function(c){b=c(b,a)});return b}function Vc(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d=this.defaults={transformResponse:[function(d){F(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ob(d,!0)));return d}],transformRequest:[function(a){return I(a)&&Ta.apply(a)!=="[object File]"?ba(a):a}],headers:{common:{Accept:"application/json, text/plain, */*","X-Requested-With":"XMLHttpRequest"},post:{"Content-Type":"application/json;charset=utf-8"},put:{"Content-Type":"application/json;charset=utf-8"}}},
e=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,i,j,k){function l(a){function c(a){var b=D({},a,{data:Pb(a.data,a.headers,f)});return 200<=a.status&&a.status<300?b:j.reject(b)}a.method=la(a.method);var e=a.transformRequest||d.transformRequest,f=a.transformResponse||d.transformResponse,g=d.headers,g=D({"X-XSRF-TOKEN":b.cookies()["XSRF-TOKEN"]},g.common,g[B(a.method)],a.headers),e=Pb(a.data,Ob(g),e),i;v(a.data)&&delete g["Content-Type"];
i=n(a,e,g);i=i.then(c,c);m(t,function(a){i=a(i)});i.success=function(b){i.then(function(c){b(c.data,c.status,c.headers,a)});return i};i.error=function(b){i.then(null,function(c){b(c.data,c.status,c.headers,a)});return i};return i}function n(b,c,d){function e(a,b,c){m&&(200<=a&&a<300?m.put(s,[a,b,Nb(c)]):m.remove(s));f(b,a,c);i.$apply()}function f(a,c,d){c=Math.max(c,0);(200<=c&&c<300?k.resolve:k.reject)({data:a,status:c,headers:Ob(d),config:b})}function h(){var a=Va(l.pendingRequests,b);a!==-1&&l.pendingRequests.splice(a,
1)}var k=j.defer(),n=k.promise,m,t,s=p(b.url,b.params);l.pendingRequests.push(b);n.then(h,h);b.cache&&b.method=="GET"&&(m=I(b.cache)?b.cache:o);if(m)if(t=m.get(s))if(t.then)return t.then(h,h),t;else K(t)?f(t[1],t[0],U(t[2])):f(t,200,{});else m.put(s,n);t||a(b.method,s,c,e,d,b.timeout,b.withCredentials,b.responseType);return n}function p(a,b){if(!b)return a;var c=[];fc(b,function(a,b){a==null||a==s||(I(a)&&(a=ba(a)),c.push(encodeURIComponent(b)+"="+encodeURIComponent(a)))});return a+(a.indexOf("?")==
-1?"?":"&")+c.join("&")}var o=c("$http"),t=[];m(e,function(a){t.push(F(a)?k.get(a):k.invoke(a))});l.pendingRequests=[];(function(a){m(arguments,function(a){l[a]=function(b,c){return l(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){l[a]=function(b,c,d){return l(D(d||{},{method:a,url:b,data:c}))}})})("post","put");l.defaults=d;return l}]}function Wc(){this.$get=["$browser","$window","$document",function(b,a,c){return Xc(b,Yc,b.defer,a.angular.callbacks,
c[0],a.location.protocol.replace(":",""))}]}function Xc(b,a,c,d,e,g){function h(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;Z?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c)}return function(e,i,j,k,l,n,p,o){function t(a,c,d,e){c=(i.match(Gb)||["",g])[1]=="file"?d?200:404:c;a(c==1223?204:c,d,e);b.$$completeOutstandingRequest(C)}b.$$incOutstandingRequestCount();
i=i||b.url();if(B(e)=="jsonp"){var q="_"+(d.counter++).toString(36);d[q]=function(a){d[q].data=a};h(i.replace("JSON_CALLBACK","angular.callbacks."+q),function(){d[q].data?t(k,200,d[q].data):t(k,-2);delete d[q]})}else{var r=new a;r.open(e,i,!0);m(l,function(a,b){a&&r.setRequestHeader(b,a)});var s;r.onreadystatechange=function(){r.readyState==4&&t(k,s||r.status,r.response||r.responseText,r.getAllResponseHeaders())};if(p)r.withCredentials=!0;if(o)r.responseType=o;r.send(j||"");n>0&&c(function(){s=-1;
r.abort()},n)}}}function Zc(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return b===1?"one":"other"}}}}function $c(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,f,i){var j=c.defer(),
k=j.promise,l=x(i)&&!i,f=a.defer(function(){try{j.resolve(e())}catch(a){j.reject(a),d(a)}l||b.$apply()},f),i=function(){delete g[k.$$timeoutId]};k.$$timeoutId=f;g[f]=j;k.then(i,i);return k}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),a.defer.cancel(b.$$timeoutId)):!1};return e}]}function Qb(b){function a(a,e){return b.factory(a+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",
Rb);a("date",Sb);a("filter",ad);a("json",bd);a("limitTo",cd);a("lowercase",dd);a("number",Tb);a("orderBy",Ub);a("uppercase",ed)}function ad(){return function(b,a){if(!(b instanceof Array))return b;var c=[];c.check=function(a){for(var b=0;b<c.length;b++)if(!c[b](a))return!1;return!0};var d=function(a,b){if(b.charAt(0)==="!")return!d(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return(""+a).toLowerCase().indexOf(b)>-1;case "object":for(var c in a)if(c.charAt(0)!=="$"&&
d(a[c],b))return!0;return!1;case "array":for(c=0;c<a.length;c++)if(d(a[c],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var e in a)e=="$"?function(){var b=(""+a[e]).toLowerCase();b&&c.push(function(a){return d(a,b)})}():function(){var b=e,f=(""+a[e]).toLowerCase();f&&c.push(function(a){return d(gb(a,b),f)})}();break;case "function":c.push(a);break;default:return b}for(var g=[],h=0;h<b.length;h++){var f=b[h];c.check(f)&&
g.push(f)}return g}}function Rb(b){var a=b.NUMBER_FORMATS;return function(b,d){if(v(d))d=a.CURRENCY_SYM;return Vb(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Tb(b){var a=b.NUMBER_FORMATS;return function(b,d){return Vb(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Vb(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=b<0,b=Math.abs(b),h=b+"",f="",i=[];if(h.indexOf("e")!==-1)f=h;else{h=(h.split(Wb)[1]||"").length;v(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));
var h=Math.pow(10,e),b=Math.round(b*h)/h,b=(""+b).split(Wb),h=b[0],b=b[1]||"",j=0,k=a.lgSize,l=a.gSize;if(h.length>=k+l)for(var j=h.length-k,n=0;n<j;n++)(j-n)%l===0&&n!==0&&(f+=c),f+=h.charAt(n);for(n=j;n<h.length;n++)(h.length-n)%k===0&&n!==0&&(f+=c),f+=h.charAt(n);for(;b.length<e;)b+="0";e&&(f+=d+b.substr(0,e))}i.push(g?a.negPre:a.posPre);i.push(f);i.push(g?a.negSuf:a.posSuf);return i.join("")}function jb(b,a,c){var d="";b<0&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));
return d+b}function N(b,a,c,d){return function(e){e=e["get"+b]();if(c>0||e>-c)e+=c;e===0&&c==-12&&(e=12);return jb(e,a,d)}}function Ma(b,a){return function(c,d){var e=c["get"+b](),g=la(a?"SHORT"+b:b);return d[g][e]}}function Sb(b){function a(a){var b;if(b=a.match(c)){var a=new Date(0),g=0,h=0;b[9]&&(g=G(b[9]+b[10]),h=G(b[9]+b[11]));a.setUTCFullYear(G(b[1]),G(b[2])-1,G(b[3]));a.setUTCHours(G(b[4]||0)-g,G(b[5]||0)-h,G(b[6]||0),G(b[7]||0))}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;
return function(c,e){var g="",h=[],f,i,e=e||"mediumDate",e=b.DATETIME_FORMATS[e]||e;F(c)&&(c=fd.test(c)?G(c):a(c));wa(c)&&(c=new Date(c));if(!na(c))return c;for(;e;)(i=gd.exec(e))?(h=h.concat(ha.call(i,1)),e=h.pop()):(h.push(e),e=null);m(h,function(a){f=hd[a];g+=f?f(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function bd(){return function(b){return ba(b,!0)}}function cd(){return function(b,a){if(!(b instanceof Array))return b;var a=G(a),c=[],d,e;if(!b||!(b instanceof
Array))return c;a>b.length?a=b.length:a<-b.length&&(a=-b.length);a>0?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Ub(b){return function(a,c,d){function e(a,b){return Xa(b)?function(b,c){return a(c,b)}:a}if(!(a instanceof Array))return a;if(!c)return a;for(var c=K(c)?c:[c],c=Ua(c,function(a){var c=!1,d=a||ma;if(F(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")c=a.charAt(0)=="-",a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;
f==g?(f=="string"&&(c=c.toLowerCase()),f=="string"&&(e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)}),g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e!==0)return e}return 0},d))}}function R(b){L(b)&&(b={link:b});b.restrict=b.restrict||"AC";return J(b)}function Xb(b,a){function c(a,c){c=c?"-"+ab(c,"-"):"";b.removeClass((a?Na:Oa)+c).addClass((a?Oa:Na)+c)}var d=this,e=b.parent().controller("form")||Pa,g=0,h=d.$error={};
d.$name=a.name;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Qa);c(!0);d.$addControl=function(a){a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];m(h,function(b,c){d.$setValidity(c,!0,a)})};d.$setValidity=function(a,b,j){var k=h[a];if(b){if(k&&(za(k,j),!k.length)){g--;if(!g)c(b),d.$valid=!0,d.$invalid=!1;h[a]=!1;c(!0,a);e.$setValidity(a,!0,d)}}else{g||c(b);if(k){if(Va(k,j)!=-1)return}else h[a]=
k=[],g++,c(!1,a),e.$setValidity(a,!1,d);k.push(j);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Qa).addClass(Yb);d.$dirty=!0;d.$pristine=!1}}function S(b){return v(b)||b===""||b===null||b!==b}function Ra(b,a,c,d,e,g){var h=function(){var c=Q(a.val());d.$viewValue!==c&&b.$apply(function(){d.$setViewValue(c)})};if(e.hasEvent("input"))a.bind("input",h);else{var f;a.bind("keydown",function(a){a=a.keyCode;a===91||15<a&&a<19||37<=a&&a<=40||f||(f=g.defer(function(){h();f=null}))});a.bind("change",
h)}d.$render=function(){a.val(S(d.$viewValue)?"":d.$viewValue)};var i=c.ngPattern,j=function(a,b){return S(b)||a.test(b)?(d.$setValidity("pattern",!0),b):(d.$setValidity("pattern",!1),s)};i&&(i.match(/^\/(.*)\/$/)?(i=RegExp(i.substr(1,i.length-2)),e=function(a){return j(i,a)}):e=function(a){var c=b.$eval(i);if(!c||!c.test)throw new y("Expected "+i+" to be a RegExp but was "+c);return j(c,a)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var k=G(c.ngMinlength),e=function(a){return!S(a)&&
a.length<k?(d.$setValidity("minlength",!1),s):(d.$setValidity("minlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var l=G(c.ngMaxlength),c=function(a){return!S(a)&&a.length>l?(d.$setValidity("maxlength",!1),s):(d.$setValidity("maxlength",!0),a)};d.$parsers.push(c);d.$formatters.push(c)}}function kb(b,a){b="ngClass"+b;return R(function(c,d,e){c.$watch(e[b],function(b,e){if(a===!0||c.$index%2===a)e&&b!==e&&(I(e)&&!K(e)&&(e=Ua(e,function(a,b){if(a)return b})),d.removeClass(K(e)?
e.join(" "):e)),I(b)&&!K(b)&&(b=Ua(b,function(a,b){if(a)return b})),b&&d.addClass(K(b)?b.join(" "):b)},!0)})}var B=function(b){return F(b)?b.toLowerCase():b},la=function(b){return F(b)?b.toUpperCase():b},y=T.Error,Z=G((/msie (\d+)/.exec(B(navigator.userAgent))||[])[1]),u,ia,ha=[].slice,Sa=[].push,Ta=Object.prototype.toString,Zb=T.angular||(T.angular={}),ta,Db,Y=["0","0","0"];C.$inject=[];ma.$inject=[];Db=Z<9?function(b){b=b.nodeName?b:b[0];return b.scopeName&&b.scopeName!="HTML"?la(b.scopeName+":"+
b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var lc=/[A-Z]/g,id={full:"1.1.0",major:1,minor:1,dot:0,codeName:"increase-gravatas"},Ba=O.cache={},Aa=O.expando="ng-"+(new Date).getTime(),pc=1,$b=T.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},eb=T.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},nc=/([\:\-\_]+(.))/g,oc=/^moz([A-Z])/,ua=
O.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;this.bind("DOMContentLoaded",a);O(T).bind("load",a)},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return b>=0?u(this[b]):u(this[this.length+b])},length:0,push:Sa,sort:[].sort,splice:[].splice},Ea={};m("multiple,selected,checked,disabled,readOnly,required".split(","),function(b){Ea[B(b)]=b});var Ab={};m("input,select,option,textarea,button,form".split(","),function(b){Ab[la(b)]=
!0});m({data:vb,inheritedData:Da,scope:function(b){return Da(b,"$scope")},controller:yb,injector:function(b){return Da(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ca,css:function(b,a,c){a=sb(a);if(x(c))b.style[a]=c;else{var d;Z<=8&&(d=b.currentStyle&&b.currentStyle[a],d===""&&(d="auto"));d=d||b.style[a];Z<=8&&(d=d===""?s:d);return d}},attr:function(b,a,c){var d=B(a);if(Ea[d])if(x(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||
C).specified?d:s;else if(x(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),b===null?s:b},prop:function(b,a,c){if(x(c))b[a]=c;else return b[a]},text:D(Z<9?function(b,a){if(b.nodeType==1){if(v(a))return b.innerText;b.innerText=a}else{if(v(a))return b.nodeValue;b.nodeValue=a}}:function(b,a){if(v(a))return b.textContent;b.textContent=a},{$dv:""}),val:function(b,a){if(v(a))return b.value;b.value=a},html:function(b,a){if(v(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)sa(d[c]);
b.innerHTML=a}},function(b,a){O.prototype[a]=function(a,d){var e,g;if((b.length==2&&b!==Ca&&b!==yb?a:d)===s)if(I(a)){for(e=0;e<this.length;e++)if(b===vb)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}else{if(this.length)return b(this[0],a,d)}else{for(e=0;e<this.length;e++)b(this[e],a,d);return this}return b.$dv}});m({removeData:tb,dealoc:sa,bind:function a(c,d,e){var g=ca(c,"events"),h=ca(c,"handle");g||ca(c,"events",g={});h||ca(c,"handle",h=qc(c,g));m(d.split(" "),function(d){var i=g[d];
if(!i){if(d=="mouseenter"||d=="mouseleave"){var j=0;g.mouseenter=[];g.mouseleave=[];a(c,"mouseover",function(a){j++;j==1&&h(a,"mouseenter")});a(c,"mouseout",function(a){j--;j==0&&h(a,"mouseleave")})}else $b(c,d,h),g[d]=[];i=g[d]}i.push(e)})},unbind:ub,replaceWith:function(a,c){var d,e=a.parentNode;sa(a);m(new O(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeName!="#text"&&c.push(a)});return c},contents:function(a){return a.childNodes},
append:function(a,c){m(new O(c),function(c){a.nodeType===1&&a.appendChild(c)})},prepend:function(a,c){if(a.nodeType===1){var d=a.firstChild;m(new O(c),function(c){d?a.insertBefore(c,d):(a.appendChild(c),d=c)})}},wrap:function(a,c){var c=u(c)[0],d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){sa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;m(new O(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:xb,removeClass:wb,toggleClass:function(a,
c,d){v(d)&&(d=!Ca(a,c));(d?xb:wb)(a,c)},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},next:function(a){return a.nextSibling},find:function(a,c){return a.getElementsByTagName(c)},clone:db},function(a,c){O.prototype[c]=function(c,e){for(var g,h=0;h<this.length;h++)g==s?(g=a(this[h],c,e),g!==s&&(g=u(g))):cb(g,a(this[h],c,e));return g==s?this:g}});Fa.prototype={put:function(a,c){this[ja(a)]=c},get:function(a){return this[ja(a)]},remove:function(a){var c=this[a=ja(a)];delete this[a];
return c}};fb.prototype={push:function(a,c){var d=this[a=ja(a)];d?d.push(c):this[a]=[c]},shift:function(a){var c=this[a=ja(a)];if(c)return c.length==1?(delete this[a],c[0]):c.shift()}};var sc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,tc=/,/,uc=/^\s*(_?)(.+?)\1\s*$/,rc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Eb="Non-assignable model expression: ";Cb.$inject=["$provide"];var Ac=/^(x[\:\-_]|data[\:\-_])/i,Gb=/^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,ac=/^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
Hc=ac,Hb={http:80,https:443,ftp:21};hb.prototype={$$replace:!1,absUrl:Ka("$$absUrl"),url:function(a,c){if(v(a))return this.$$url;var d=ac.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));if(d[2]||d[1])this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:Ka("$$protocol"),host:Ka("$$host"),port:Ka("$$port"),path:Jb("$$path",function(a){return a.charAt(0)=="/"?a:"/"+a}),search:function(a,c){if(v(a))return this.$$search;x(c)?c===null?delete this.$$search[a]:this.$$search[a]=c:this.$$search=
F(a)?Ya(a):a;this.$$compose();return this},hash:Jb("$$hash",ma),replace:function(){this.$$replace=!0;return this}};Ja.prototype=ya(hb.prototype);Ib.prototype=ya(Ja.prototype);var La={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:C,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return(x(d)?d:0)+(x(e)?e:0)},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(x(d)?d:0)-(x(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/
e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":C,"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&
e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Lc={n:"\n",f:"\u000c",r:"\r",t:"\t",v:"\u000b","'":"'",'"':'"'},ib={},Yc=T.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw new y("This browser does not support XMLHttpRequest.");};Qb.$inject=["$provide"];Rb.$inject=["$locale"];Tb.$inject=["$locale"];
var Wb=".",hd={yyyy:N("FullYear",4),yy:N("FullYear",2,0,!0),y:N("FullYear",1),MMMM:Ma("Month"),MMM:Ma("Month",!0),MM:N("Month",2,1),M:N("Month",1,1),dd:N("Date",2),d:N("Date",1),HH:N("Hours",2),H:N("Hours",1),hh:N("Hours",2,-12),h:N("Hours",1,-12),mm:N("Minutes",2),m:N("Minutes",1),ss:N("Seconds",2),s:N("Seconds",1),EEEE:Ma("Day"),EEE:Ma("Day",!0),a:function(a,c){return a.getHours()<12?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=a.getTimezoneOffset();return jb(a/60,2)+jb(Math.abs(a%60),2)}},gd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
fd=/^\d+$/;Sb.$inject=["$locale"];var dd=J(B),ed=J(la);Ub.$inject=["$parse"];var jd=J({restrict:"E",compile:function(a,c){c.href||c.$set("href","");return function(a,c){c.bind("click",function(a){c.attr("href")||a.preventDefault()})}}}),lb={};m(Ea,function(a,c){var d=fa("ng-"+c);lb[d]=function(){return{priority:100,compile:function(){return function(a,g,h){a.$watch(h[d],function(a){h.$set(c,!!a)})}}}}});m(["src","href"],function(a){var c=fa("ng-"+a);lb[c]=function(){return{priority:99,link:function(d,
e,g){g.$observe(c,function(c){g.$set(a,c);Z&&e.prop(a,c)})}}}});var Pa={$addControl:C,$removeControl:C,$setValidity:C,$setDirty:C};Xb.$inject=["$element","$attrs","$scope"];var Sa=function(a){return["$timeout",function(c){var d={name:"form",restrict:"E",controller:Xb,compile:function(){return{pre:function(a,d,h,f){if(!h.action){var i=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};$b(d[0],"submit",i);d.bind("$destroy",function(){c(function(){eb(d[0],"submit",i)},0,!1)})}var j=d.parent().controller("form"),
k=h.name||h.ngForm;k&&(a[k]=f);j&&d.bind("$destroy",function(){j.$removeControl(f);k&&(a[k]=s);D(f,Pa)})}}}};return a?D(U(d),{restrict:"EAC"}):d}]},kd=Sa(),ld=Sa(!0),md=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,nd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,od=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,bc={text:Ra,number:function(a,c,d,e,g,h){Ra(a,c,d,e,g,h);e.$parsers.push(function(a){var c=S(a);return c||od.test(a)?(e.$setValidity("number",!0),a===""?
null:c?a:parseFloat(a)):(e.$setValidity("number",!1),s)});e.$formatters.push(function(a){return S(a)?"":""+a});if(d.min){var f=parseFloat(d.min),a=function(a){return!S(a)&&a<f?(e.$setValidity("min",!1),s):(e.$setValidity("min",!0),a)};e.$parsers.push(a);e.$formatters.push(a)}if(d.max){var i=parseFloat(d.max),d=function(a){return!S(a)&&a>i?(e.$setValidity("max",!1),s):(e.$setValidity("max",!0),a)};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(a){return S(a)||wa(a)?(e.$setValidity("number",
!0),a):(e.$setValidity("number",!1),s)})},url:function(a,c,d,e,g,h){Ra(a,c,d,e,g,h);a=function(a){return S(a)||md.test(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),s)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,h){Ra(a,c,d,e,g,h);a=function(a){return S(a)||nd.test(a)?(e.$setValidity("email",!0),a):(e.$setValidity("email",!1),s)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){v(d.name)&&c.attr("name",xa());c.bind("click",function(){c[0].checked&&
a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,h=d.ngFalseValue;F(g)||(g=!0);F(h)||(h=!1);c.bind("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:h})},hidden:C,button:C,submit:C,reset:C},cc=["$browser","$sniffer",
function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,h){h&&(bc[B(g.type)]||bc.text)(d,e,g,h,c,a)}}}],Oa="ng-valid",Na="ng-invalid",Qa="ng-pristine",Yb="ng-dirty",pd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function h(a,c){c=c?"-"+ab(c,"-"):"";e.removeClass((a?Na:Oa)+c).addClass((a?Oa:Na)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=
!0;this.$invalid=!1;this.$name=d.name;var g=g(d.ngModel),f=g.assign;if(!f)throw y(Eb+d.ngModel+" ("+pa(e)+")");this.$render=C;var i=e.inheritedData("$formController")||Pa,j=0,k=this.$error={};e.addClass(Qa);h(!0);this.$setValidity=function(a,c){if(k[a]!==!c){if(c){if(k[a]&&j--,!j)h(!0),this.$valid=!0,this.$invalid=!1}else h(!1),this.$invalid=!0,this.$valid=!1,j++;k[a]=!c;h(c,a);i.$setValidity(a,c,this)}};this.$setViewValue=function(d){this.$viewValue=d;if(this.$pristine)this.$dirty=!0,this.$pristine=
!1,e.removeClass(Qa).addClass(Yb),i.$setDirty();m(this.$parsers,function(a){d=a(d)});if(this.$modelValue!==d)this.$modelValue=d,f(a,d),m(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};var l=this;a.$watch(g,function(a){if(l.$modelValue!==a){var c=l.$formatters,d=c.length;for(l.$modelValue=a;d--;)a=c[d](a);if(l.$viewValue!==a)l.$viewValue=a,l.$render()}})}],qd=function(){return{require:["ngModel","^?form"],controller:pd,link:function(a,c,d,e){var g=e[0],h=e[1]||Pa;h.$addControl(g);
c.bind("$destroy",function(){h.$removeControl(g)})}}},rd=J({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),dc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&(S(a)||a===!1))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},sd=function(){return{require:"ngModel",
link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){var c=[];a&&m(a.split(g),function(a){a&&c.push(Q(a))});return c});e.$formatters.push(function(a){return K(a)?a.join(", "):s})}}},td=/^(true|false|\d+)$/,ud=function(){return{priority:100,compile:function(a,c){return td.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a,!1)})}}}},vd=R(function(a,c,d){c.addClass("ng-binding").data("$binding",
d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),wd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],xd=[function(){return function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe,function(a){c.html(a||"")})}}],yd=kb("",!0),zd=kb("Odd",0),Ad=kb("Even",1),Bd=R({compile:function(a,c){c.$set("ngCloak",s);
a.removeClass("ng-cloak")}}),Cd=[function(){return{scope:!0,controller:"@"}}],Dd=["$sniffer",function(a){return{priority:1E3,compile:function(){a.csp=!0}}}],ec={};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "),function(a){var c=fa("ng-"+a);ec[c]=["$parse",function(d){return function(e,g,h){var f=d(h[c]);g.bind(B(a),function(a){e.$apply(function(){f(e,{$event:a})})})}}]});var Ed=R(function(a,c,d){c.bind("submit",function(){a.$apply(d.ngSubmit)})}),
Fd=["$http","$templateCache","$anchorScroll","$compile",function(a,c,d,e){return{restrict:"ECA",terminal:!0,compile:function(g,h){var f=h.ngInclude||h.src,i=h.onload||"",j=h.autoscroll;return function(g,h){var n=0,m,o=function(){m&&(m.$destroy(),m=null);h.html("")};g.$watch(f,function(f){var q=++n;f?a.get(f,{cache:c}).success(function(a){q===n&&(m&&m.$destroy(),m=g.$new(),h.html(a),e(h.contents())(m),x(j)&&(!j||g.$eval(j))&&d(),m.$emit("$includeContentLoaded"),g.$eval(i))}).error(function(){q===n&&
o()}):o()})}}}}],Gd=R({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Hd=R({terminal:!0,priority:1E3}),Id=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,h){var f=h.count,i=g.attr(h.$attr.when),j=h.offset||0,k=e.$eval(i),l={},n=c.startSymbol(),p=c.endSymbol();m(k,function(a,e){l[e]=c(a.replace(d,n+f+"-"+j+p))});e.$watch(function(){var c=parseFloat(e.$eval(f));return isNaN(c)?"":(k[c]||(c=a.pluralCat(c-j)),l[c](e,g,!0))},function(a){g.text(a)})}}}],
Jd=R({transclude:"element",priority:1E3,terminal:!0,compile:function(a,c,d){return function(a,c,h){var f=h.ngRepeat,h=f.match(/^\s*(.+)\s+in\s+(.*)\s*$/),i,j,k;if(!h)throw y("Expected ngRepeat in form of '_item_ in _collection_' but got '"+f+"'.");f=h[1];i=h[2];h=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!h)throw y("'item' in 'item in collection' should be identifier or (key, value) but got '"+f+"'.");j=h[3]||h[1];k=h[2];var l=new fb;a.$watch(function(a){var e,f,h=a.$eval(i),m=hc(h,
!0),r,s=new fb,u,w,v,x,z=c;if(K(h))v=h||[];else{v=[];for(u in h)h.hasOwnProperty(u)&&u.charAt(0)!="$"&&v.push(u);v.sort()}e=0;for(f=v.length;e<f;e++){u=h===v?e:v[e];w=h[u];if(x=l.shift(w)){r=x.scope;s.push(w,x);if(e!==x.index)x.index=e,z.after(x.element);z=x.element}else r=a.$new();r[j]=w;k&&(r[k]=u);r.$index=e;r.$first=e===0;r.$last=e===m-1;r.$middle=!(r.$first||r.$last);x||d(r,function(a){z.after(a);x={scope:r,element:z=a,index:e};s.push(w,x)})}for(u in l)if(l.hasOwnProperty(u))for(v=l[u];v.length;)w=
v.pop(),w.element.remove(),w.scope.$destroy();l=s})}}}),Kd=R(function(a,c,d){a.$watch(d.ngShow,function(a){c.css("display",Xa(a)?"":"none")})}),Ld=R(function(a,c,d){a.$watch(d.ngHide,function(a){c.css("display",Xa(a)?"none":"")})}),Md=R(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Nd=J({restrict:"EA",compile:function(a,c){var d=c.ngSwitch||c.on,e={};a.data("ng-switch",e);return function(a,h){var f,i,j;a.$watch(d,function(d){i&&(j.$destroy(),
i.remove(),i=j=null);if(f=e["!"+d]||e["?"])a.$eval(c.change),j=a.$new(),f(j,function(a){i=a;h.append(a)})})}}}),Od=R({transclude:"element",priority:500,compile:function(a,c,d){a=a.inheritedData("ng-switch");qa(a);a["!"+c.ngSwitchWhen]=d}}),Pd=R({transclude:"element",priority:500,compile:function(a,c,d){a=a.inheritedData("ng-switch");qa(a);a["?"]=d}}),Qd=R({controller:["$transclude","$element",function(a,c){a(function(a){c.append(a)})}]}),Rd=["$http","$templateCache","$route","$anchorScroll","$compile",
"$controller",function(a,c,d,e,g,h){return{restrict:"ECA",terminal:!0,link:function(a,c,j){function k(){var j=d.current&&d.current.locals,k=j&&j.$template;if(k){c.html(k);l&&(l.$destroy(),l=null);var k=g(c.contents()),m=d.current;l=m.scope=a.$new();if(m.controller)j.$scope=l,j=h(m.controller,j),c.contents().data("$ngControllerController",j);k(l);l.$emit("$viewContentLoaded");l.$eval(n);e()}else c.html(""),l&&(l.$destroy(),l=null)}var l,n=j.onload||"";a.$on("$routeChangeSuccess",k);k()}}}],Sd=["$templateCache",
function(a){return{restrict:"E",terminal:!0,compile:function(c,d){d.type=="text/ng-template"&&a.put(d.id,c[0].text)}}}],Td=J({terminal:!0}),Ud=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,e={$setViewValue:C};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var i=this,j={},k=e,l;i.databound=d.ngModel;
i.init=function(a,c,d){k=a;l=d};i.addOption=function(c){j[c]=!0;k.$viewValue==c&&(a.val(c),l.parent()&&l.remove())};i.removeOption=function(a){this.hasOption(a)&&(delete j[a],k.$viewValue==a&&this.renderUnknownOption(a))};i.renderUnknownOption=function(c){c="? "+ja(c)+" ?";l.val(c);a.prepend(l);a.val(c);l.prop("selected",!0)};i.hasOption=function(a){return j.hasOwnProperty(a)};c.$on("$destroy",function(){i.renderUnknownOption=C})}],link:function(e,h,f,i){function j(a,c,d,e){d.$render=function(){var a=
d.$viewValue;e.hasOption(a)?(w.parent()&&w.remove(),c.val(a),a===""&&r.prop("selected",!0)):v(a)&&r?c.val(""):e.renderUnknownOption(a)};c.bind("change",function(){a.$apply(function(){w.parent()&&w.remove();d.$setViewValue(c.val())})})}function k(a,c,d){var e;d.$render=function(){var a=new Fa(d.$viewValue);m(c.children(),function(c){c.selected=x(a.get(c.value))})};a.$watch(function(){ga(e,d.$viewValue)||(e=U(d.$viewValue),d.$render())});c.bind("change",function(){a.$apply(function(){var a=[];m(c.children(),
function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function l(e,f,g){function i(){var a={"":[]},c=[""],d,h,t,u,v;t=g.$modelValue;u=r(e)||[];var x=l?mb(u):u,z,w,y;w={};v=!1;var A,B;if(o)v=new Fa(t);else if(t===null||q)a[""].push({selected:t===null,id:"",label:""}),v=!0;for(y=0;z=x.length,y<z;y++){w[k]=u[l?w[l]=x[y]:y];d=m(e,w)||"";if(!(h=a[d]))h=a[d]=[],c.push(d);o?d=v.remove(n(e,w))!=s:(d=t===n(e,w),v=v||d);h.push({id:l?x[y]:y,label:j(e,w)||"",selected:d})}!o&&!v&&a[""].unshift({id:"?",
label:"",selected:!0});w=0;for(x=c.length;w<x;w++){d=c[w];h=a[d];if(p.length<=w)t={element:D.clone().attr("label",d),label:h.label},u=[t],p.push(u),f.append(t.element);else if(u=p[w],t=u[0],t.label!=d)t.element.attr("label",t.label=d);A=null;y=0;for(z=h.length;y<z;y++)if(d=h[y],v=u[y+1]){A=v.element;if(v.label!==d.label)A.text(v.label=d.label);if(v.id!==d.id)A.val(v.id=d.id);if(v.element.selected!==d.selected)A.prop("selected",v.selected=d.selected)}else d.id===""&&q?B=q:(B=C.clone()).val(d.id).attr("selected",
d.selected).text(d.label),u.push({element:B,label:d.label,id:d.id,selected:d.selected}),A?A.after(B):t.element.append(B),A=B;for(y++;u.length>y;)u.pop().element.remove()}for(;p.length>w;)p.pop()[0].element.remove()}var h;if(!(h=t.match(d)))throw y("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '"+t+"'.");var j=c(h[2]||h[1]),k=h[4]||h[6],l=h[5],m=c(h[3]||""),n=c(h[2]?h[1]:k),r=c(h[7]),p=[[{element:f,label:""}]];q&&(a(q)(e),q.removeClass("ng-scope"),
q.remove());f.html("");f.bind("change",function(){e.$apply(function(){var a,c=r(e)||[],d={},h,i,j,m,q,t;if(o){i=[];m=0;for(t=p.length;m<t;m++){a=p[m];j=1;for(q=a.length;j<q;j++)if((h=a[j].element)[0].selected)h=h.val(),l&&(d[l]=h),d[k]=c[h],i.push(n(e,d))}}else h=f.val(),h=="?"?i=s:h==""?i=null:(d[k]=c[h],l&&(d[l]=h),i=n(e,d));g.$setViewValue(i)})});g.$render=i;e.$watch(i)}if(i[1]){for(var n=i[0],p=i[1],o=f.multiple,t=f.ngOptions,q=!1,r,C=u(aa.createElement("option")),D=u(aa.createElement("optgroup")),
w=C.clone(),i=0,B=h.children(),F=B.length;i<F;i++)if(B[i].value==""){r=q=B.eq(i);break}n.init(p,q,w);if(o&&(f.required||f.ngRequired)){var z=function(a){p.$setValidity("required",!f.required||a&&a.length);return a};p.$parsers.push(z);p.$formatters.unshift(z);f.$observe("required",function(){z(p.$viewValue)})}t?l(e,h,p):o?k(e,h,p):j(e,h,p,n)}}}}],Vd=["$interpolate",function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(v(e.value)){var g=a(d.text(),
!0);g||e.$set("value",d.text())}return function(a,d,e){var j=d.parent(),k=j.data("$selectController")||j.parent().data("$selectController");k&&k.databound?d.prop("selected",!1):k=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&k.removeOption(c);k.addOption(a)}):k.addOption(e.value);d.bind("$destroy",function(){k.removeOption(e.value)})}}}}],Wd=J({restrict:"E",terminal:!0});(ia=T.jQuery)?(u=ia,D(ia.fn,{scope:ua.scope,controller:ua.controller,injector:ua.injector,inheritedData:ua.inheritedData}),
bb("remove",!0),bb("empty"),bb("html")):u=O;Zb.element=u;(function(a){D(a,{bootstrap:qb,copy:U,extend:D,equals:ga,element:u,forEach:m,injector:rb,noop:C,bind:Wa,toJson:ba,fromJson:ob,identity:ma,isUndefined:v,isDefined:x,isString:F,isFunction:L,isObject:I,isNumber:wa,isElement:gc,isArray:K,version:id,isDate:na,lowercase:B,uppercase:la,callbacks:{counter:0}});ta=mc(T);try{ta("ngLocale")}catch(c){ta("ngLocale",[]).provider("$locale",Zc)}ta("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",
Cb).directive({a:jd,input:cc,textarea:cc,form:kd,script:Sd,select:Ud,style:Wd,option:Vd,ngBind:vd,ngBindHtmlUnsafe:xd,ngBindTemplate:wd,ngClass:yd,ngClassEven:Ad,ngClassOdd:zd,ngCsp:Dd,ngCloak:Bd,ngController:Cd,ngForm:ld,ngHide:Ld,ngInclude:Fd,ngInit:Gd,ngNonBindable:Hd,ngPluralize:Id,ngRepeat:Jd,ngShow:Kd,ngSubmit:Ed,ngStyle:Md,ngSwitch:Nd,ngSwitchWhen:Od,ngSwitchDefault:Pd,ngOptions:Td,ngView:Rd,ngTransclude:Qd,ngModel:qd,ngList:sd,ngChange:rd,required:dc,ngRequired:dc,ngValue:ud}).directive(lb).directive(ec);
a.provider({$anchorScroll:vc,$browser:xc,$cacheFactory:yc,$controller:Bc,$document:Cc,$exceptionHandler:Dc,$filter:Qb,$interpolate:Ec,$http:Vc,$httpBackend:Wc,$location:Ic,$log:Jc,$parse:Nc,$route:Qc,$routeParams:Rc,$rootScope:Sc,$q:Oc,$sniffer:Tc,$templateCache:zc,$timeout:$c,$window:Uc})}])})(Zb);u(aa).ready(function(){kc(aa,qb)})})(window,document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');
function CastController($scope){
	$scope.items = [
		{title: 'Name1', quantity:1, price: 3.95},
		{title: 'Name2', quantity:1, price: 3.95},
		{title: 'Name3', quantity:1, price: 3.95},
		{title: 'Name4', quantity:1, price: 3.95},
		{title: 'Name5', quantity:1, price: 3.95}
	];
	
	$scope.totalCart = function(){
		var total = 0;
			for(var i=0, len=$scope.items.length; i<len; i++){
				total = total + $scope.items[i].price * $scope.items[i].quantity
			}
		return total;
	};
	
	function calculateDiscount(newValue){
		$scope.bill = newValue>100?10:0;
	};

	function allSum(){
		$scope.sum = total - total * bill/100;
		return sum;
	};
	
	$scope.$watch($scope.totalCart, calculateDiscount, allSum);
}
var source1, drop;

function initiate(){
	source1 = document.getElementById('img');
	source1 = addEventListener('dragstart', dragged);
	drop = document.getElementById('dropbox');
	drop.addEventListener('dragenter', dragentered);
	drop.addEventListener('dragover', dragovered);
	drop.addEventListener('drop', dropped);
};

function dragentered(e){
	// предотвращаем действия по умолчанию
	e.preventDefault();
};

function dragovered(e){
	e.preventDefault();
};

function dropped(e){
	e.preventDefault();
	drop.innerHTML = e.dataTransfer.getData('Text');
};

function dragget(e){
	var code = "<img src='"+source1.getAttribute('src')+"'/>";
	e.dataTransfer.setData('Text', code);
};

addEventListener('load', initiate);
/*
 AngularJS v1.1.0
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(T,aa,s){'use strict';function m(b,a,c){var d;if(b)if(L(b))for(d in b)d!="prototype"&&d!="length"&&d!="name"&&b.hasOwnProperty(d)&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==m)b.forEach(a,c);else if(I(b)&&wa(b.length))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function mb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function fc(b,a,c){for(var d=mb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}
function nb(b){return function(a,c){b(c,a)}}function xa(){for(var b=Y.length,a;b;){b--;a=Y[b].charCodeAt(0);if(a==57)return Y[b]="A",Y.join("");if(a==90)Y[b]="0";else return Y[b]=String.fromCharCode(a+1),Y.join("")}Y.unshift("0");return Y.join("")}function D(b){m(arguments,function(a){a!==b&&m(a,function(a,d){b[d]=a})});return b}function G(b){return parseInt(b,10)}function ya(b,a){return D(new (D(function(){},{prototype:b})),a)}function C(){}function ma(b){return b}function J(b){return function(){return b}}
function v(b){return typeof b=="undefined"}function x(b){return typeof b!="undefined"}function I(b){return b!=null&&typeof b=="object"}function F(b){return typeof b=="string"}function wa(b){return typeof b=="number"}function na(b){return Ta.apply(b)=="[object Date]"}function K(b){return Ta.apply(b)=="[object Array]"}function L(b){return typeof b=="function"}function oa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Q(b){return F(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b}function gc(b){return b&&
(b.nodeName||b.bind&&b.find)}function Ua(b,a,c){var d=[];m(b,function(b,g,h){d.push(a.call(c,b,g,h))});return d}function hc(b,a){var c=0,d;if(K(b)||F(b))return b.length;else if(I(b))for(d in b)(!a||b.hasOwnProperty(d))&&c++;return c}function Va(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function za(b,a){var c=Va(b,a);c>=0&&b.splice(c,1);return a}function U(b,a){if(oa(b)||b&&b.$evalAsync&&b.$watch)throw y("Can't copy Window or Scope");if(a){if(b===
a)throw y("Can't copy equivalent objects or arrays");if(K(b)){for(;a.length;)a.pop();for(var c=0;c<b.length;c++)a.push(U(b[c]))}else for(c in m(a,function(b,c){delete a[c]}),b)a[c]=U(b[c])}else(a=b)&&(K(b)?a=U(b,[]):na(b)?a=new Date(b.getTime()):I(b)&&(a=U(b,{})));return a}function ic(b,a){var a=a||{},c;for(c in b)b.hasOwnProperty(c)&&c.substr(0,2)!=="$$"&&(a[c]=b[c]);return a}function ga(b,a){if(b===a)return!0;if(b===null||a===null)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&
c=="object")if(K(b)){if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ga(b[d],a[d]))return!1;return!0}}else if(na(b))return na(a)&&b.getTime()==a.getTime();else{if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||oa(b)||oa(a))return!1;c={};for(d in b){if(d.charAt(0)!=="$"&&!L(b[d])&&!ga(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c[d]&&d.charAt(0)!=="$"&&!L(a[d]))return!1;return!0}return!1}function Wa(b,a){var c=arguments.length>2?ha.call(arguments,2):[];return L(a)&&!(a instanceof RegExp)?c.length?
function(){return arguments.length?a.apply(b,c.concat(ha.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}:a}function jc(b,a){var c=a;/^\$+/.test(b)?c=s:oa(a)?c="$WINDOW":a&&aa===a?c="$DOCUMENT":a&&a.$evalAsync&&a.$watch&&(c="$SCOPE");return c}function ba(b,a){return JSON.stringify(b,jc,a?"  ":null)}function ob(b){return F(b)?JSON.parse(b):b}function Xa(b){b&&b.length!==0?(b=B(""+b),b=!(b=="f"||b=="0"||b=="false"||b=="no"||b=="n"||b=="[]")):b=!1;
return b}function pa(b){b=u(b).clone();try{b.html("")}catch(a){}return u("<div>").append(b).html().match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+B(b)})}function Ya(b){var a={},c,d;m((b||"").split("&"),function(b){b&&(c=b.split("="),d=decodeURIComponent(c[0]),a[d]=x(c[1])?decodeURIComponent(c[1]):!0)});return a}function pb(b){var a=[];m(b,function(b,d){a.push(Za(d,!0)+(b===!0?"":"="+Za(b,!0)))});return a.length?a.join("&"):""}function $a(b){return Za(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function Za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(a?null:/%20/g,"+")}function kc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,h=["ng:app","ng-app","x-ng-app","data-ng-app"],f=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;m(h,function(a){h[a]=!0;c(aa.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(m(b.querySelectorAll("."+a),c),m(b.querySelectorAll("."+a+"\\:"),c),m(b.querySelectorAll("["+
a+"]"),c))});m(d,function(a){if(!e){var b=f.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):m(a.attributes,function(b){if(!e&&h[b.name])e=a,g=b.value})}});e&&a(e,g?[g]:[])}function qb(b,a){b=u(b);a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");var c=rb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,h){a.$apply(function(){b.data("$injector",h);c(b)(a)})}]);return c}function ab(b,a){a=a||"_";return b.replace(lc,
function(b,d){return(d?a:"")+b.toLowerCase()})}function qa(b,a,c){if(!b)throw new y("Argument '"+(a||"?")+"' is "+(c||"required"));return b}function ra(b,a,c){c&&K(b)&&(b=b[b.length-1]);qa(L(b),a,"not a function, got "+(b&&typeof b=="object"?b.constructor.name||"Object":typeof b));return b}function mc(b){function a(a,b,e){return a[b]||(a[b]=e())}return a(a(b,"angular",Object),"module",function(){var b={};return function(d,e,g){e&&b.hasOwnProperty(d)&&(b[d]=null);return a(b,d,function(){function a(c,
d,e){return function(){b[e||"push"]([c,d,arguments]);return k}}if(!e)throw y("No module: "+d);var b=[],c=[],j=a("$injector","invoke"),k={_invokeQueue:b,_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:j,run:function(a){c.push(a);
return this}};g&&j(g);return k})}})}function sb(b){return b.replace(nc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(oc,"Moz$1")}function bb(b,a){function c(){var e;for(var b=[this],c=a,h,f,i,j,k,l,n;b.length;){h=b.shift();f=0;for(i=h.length;f<i;f++){j=u(h[f]);c?(n=(k=j.data("events"))&&k.$destroy)&&m(n,function(a){a.handler()}):c=!c;k=0;for(e=(l=j.children()).length,j=e;k<j;k++)b.push(ia(l[k]))}}return d.apply(this,arguments)}var d=ia.fn[b],d=d.$original||d;c.$original=d;ia.fn[b]=c}function O(b){if(b instanceof
O)return b;if(!(this instanceof O)){if(F(b)&&b.charAt(0)!="<")throw y("selectors not implemented");return new O(b)}if(F(b)){var a=aa.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);cb(this,a.childNodes);this.remove()}else cb(this,b)}function db(b){return b.cloneNode(!0)}function sa(b){tb(b);for(var a=0,b=b.childNodes||[];a<b.length;a++)sa(b[a])}function ub(b,a,c){var d=ca(b,"events");ca(b,"handle")&&(v(a)?m(d,function(a,c){eb(b,c,a);delete d[c]}):v(c)?(eb(b,a,d[a]),
delete d[a]):za(d[a],c))}function tb(b){var a=b[Aa],c=Ba[a];c&&(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),ub(b)),delete Ba[a],b[Aa]=s)}function ca(b,a,c){var d=b[Aa],d=Ba[d||-1];if(x(c))d||(b[Aa]=d=++pc,d=Ba[d]={}),d[a]=c;else return d&&d[a]}function vb(b,a,c){var d=ca(b,"data"),e=x(c),g=!e&&x(a),h=g&&!I(a);!d&&!h&&ca(b,"data",d={});if(e)d[a]=c;else if(g)if(h)return d&&d[a];else D(d,a);else return d}function Ca(b,a){return(" "+b.className+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" ")>
-1}function wb(b,a){a&&m(a.split(" "),function(a){b.className=Q((" "+b.className+" ").replace(/[\n\t]/g," ").replace(" "+Q(a)+" "," "))})}function xb(b,a){a&&m(a.split(" "),function(a){if(!Ca(b,a))b.className=Q(b.className+" "+Q(a))})}function cb(b,a){if(a)for(var a=!a.nodeName&&x(a.length)&&!oa(a)?a:[a],c=0;c<a.length;c++)b.push(a[c])}function yb(b,a){return Da(b,"$"+(a||"ngController")+"Controller")}function Da(b,a,c){b=u(b);for(b[0].nodeType==9&&(b=b.find("html"));b.length;){if(c=b.data(a))return c;
b=b.parent()}}function zb(b,a){var c=Ea[a.toLowerCase()];return c&&Ab[b.nodeName]&&c}function qc(b,a){var c=function(c,e){if(!c.preventDefault)c.preventDefault=function(){c.returnValue=!1};if(!c.stopPropagation)c.stopPropagation=function(){c.cancelBubble=!0};if(!c.target)c.target=c.srcElement||aa;if(v(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented};m(a[e||c.type],
function(a){a.call(b,c)});Z<=8?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function ja(b){var a=typeof b,c;if(a=="object"&&b!==null)if(typeof(c=b.$$hashKey)=="function")c=b.$$hashKey();else{if(c===s)c=b.$$hashKey=xa()}else c=b;return a+":"+c}function Fa(b){m(b,this.put,this)}function fb(){}function Bb(b){var a,c;if(typeof b=="function"){if(!(a=b.$inject))a=[],c=b.toString().replace(rc,
""),c=c.match(sc),m(c[1].split(tc),function(b){b.replace(uc,function(b,c,d){a.push(d)})}),b.$inject=a}else K(b)?(c=b.length-1,ra(b[c],"fn"),a=b.slice(0,c)):ra(b,"fn",!0);return a}function rb(b){function a(a){return function(b,c){if(I(b))m(b,nb(a));else return a(b,c)}}function c(a,b){L(b)&&(b=l.instantiate(b));if(!b.$get)throw y("Provider "+a+" must define $get factory method.");return k[a+f]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];m(a,function(a){if(!j.get(a))if(j.put(a,!0),
F(a)){var c=ta(a);b=b.concat(e(c.requires)).concat(c._runBlocks);try{for(var d=c._invokeQueue,c=0,f=d.length;c<f;c++){var g=d[c],i=l.get(g[0]);i[g[1]].apply(i,g[2])}}catch(h){throw h.message&&(h.message+=" from "+a),h;}}else if(L(a))try{b.push(l.invoke(a))}catch(o){throw o.message&&(o.message+=" from "+a),o;}else if(K(a))try{b.push(l.invoke(a))}catch(n){throw n.message&&(n.message+=" from "+String(a[a.length-1])),n;}else ra(a,"module")});return b}function g(a,b){function c(d){if(typeof d!=="string")throw y("Service name expected");
if(a.hasOwnProperty(d)){if(a[d]===h)throw y("Circular dependency: "+i.join(" <- "));return a[d]}else try{return i.unshift(d),a[d]=h,a[d]=b(d)}finally{i.shift()}}function d(a,b,e){var f=[],g=Bb(a),j,h,o;h=0;for(j=g.length;h<j;h++)o=g[h],f.push(e&&e.hasOwnProperty(o)?e[o]:c(o,i));a.$inject||(a=a[j]);switch(b?-1:f.length){case 0:return a();case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],f[1],f[2],f[3],f[4]);case 6:return a(f[0],
f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(K(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return I(e)?e:c},get:c,annotate:Bb}}var h={},f="Provider",i=[],j=new Fa,k={$provide:{provider:a(c),
factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,J(b))}),constant:a(function(a,b){k[a]=b;n[a]=b}),decorator:function(a,b){var c=l.get(a+f),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},l=k.$injector=g(k,function(){throw y("Unknown provider: "+i.join(" <- "));}),n={},p=n.$injector=g(n,function(a){a=l.get(a+f);return p.invoke(a.$get,a)});m(e(b),function(a){p.invoke(a||C)});
return p}function vc(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;m(a,function(a){!b&&B(a.nodeName)==="a"&&(b=a)});return b}function g(){var b=c.hash(),d;b?(d=h.getElementById(b))?d.scrollIntoView():(d=e(h.getElementsByName(b)))?d.scrollIntoView():b==="top"&&a.scrollTo(0,0):a.scrollTo(0,0)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function wc(b,a,c,
d){function e(a){try{a.apply(null,ha.call(arguments,1))}finally{if(o--,o===0)for(;t.length;)try{t.pop()()}catch(b){c.error(b)}}}function g(a,b){(function ea(){m(q,function(a){a()});r=b(ea,a)})()}function h(){da!=f.url()&&(da=f.url(),m(w,function(a){a(f.url())}))}var f=this,i=a[0],j=b.location,k=b.history,l=b.setTimeout,n=b.clearTimeout,p={};f.isMock=!1;var o=0,t=[];f.$$completeOutstandingRequest=e;f.$$incOutstandingRequestCount=function(){o++};f.notifyWhenNoOutstandingRequests=function(a){m(q,function(a){a()});
o===0?a():t.push(a)};var q=[],r;f.addPollFn=function(a){v(r)&&g(100,l);q.push(a);return a};var da=j.href,E=a.find("base");f.url=function(a,b){if(a){if(da!=a)return da=a,d.history?b?k.replaceState(null,"",a):(k.pushState(null,"",a),E.attr("href",E.attr("href"))):b?j.replace(a):j.href=a,f}else return j.href.replace(/%27/g,"'")};var w=[],P=!1;f.onUrlChange=function(a){P||(d.history&&u(b).bind("popstate",h),d.hashchange?u(b).bind("hashchange",h):f.addPollFn(h),P=!0);w.push(a);return a};f.baseHref=function(){var a=
E.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):a};var V={},z="",M=f.baseHref();f.cookies=function(a,b){var d,e,f,g;if(a)if(b===s)i.cookie=escape(a)+"=;path="+M+";expires=Thu, 01 Jan 1970 00:00:00 GMT";else{if(F(b))d=(i.cookie=escape(a)+"="+escape(b)+";path="+M).length+1,d>4096&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"),V.length>20&&c.warn("Cookie '"+a+"' possibly not set or overflowed because too many cookies were already set ("+
V.length+" > 20 )")}else{if(i.cookie!==z){z=i.cookie;d=z.split("; ");V={};for(f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),g>0&&(V[unescape(e.substring(0,g))]=unescape(e.substring(g+1)))}return V}};f.defer=function(a,b){var c;o++;c=l(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};f.defer.cancel=function(a){return p[a]?(delete p[a],n(a),e(C),!0):!1}}function xc(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new wc(b,d,a,c)}]}function yc(){this.$get=function(){function b(b,
d){function e(a){if(a!=l){if(n){if(n==a)n=a.n}else n=a;g(a.n,a.p);g(a,l);l=a;l.n=null}}function g(a,b){if(a!=b){if(a)a.p=b;if(b)b.n=a}}if(b in a)throw y("cacheId "+b+" taken");var h=0,f=D({},d,{id:b}),i={},j=d&&d.capacity||Number.MAX_VALUE,k={},l=null,n=null;return a[b]={put:function(a,b){var c=k[a]||(k[a]={key:a});e(c);v(b)||(a in i||h++,i[a]=b,h>j&&this.remove(n.key))},get:function(a){var b=k[a];if(b)return e(b),i[a]},remove:function(a){var b=k[a];if(b==l)l=b.p;if(b==n)n=b.n;g(b.n,b.p);delete k[a];
delete i[a];h--},removeAll:function(){i={};h=0;k={};l=n=null},destroy:function(){k=f=i=null;delete a[b]},info:function(){return D({},f,{size:h})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function zc(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Cb(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g="Template must have exactly one root element. was: ";
this.directive=function f(d,e){F(d)?(qa(e,"directive"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];m(a[d],function(a){try{var f=b.invoke(a);if(L(f))f={compile:J(f)};else if(!f.compile&&f.link)f.compile=J(f.link);f.priority=f.priority||0;f.name=f.name||d;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(g){c(g)}});return e}])),a[d].push(e)):m(d,nb(f));return this};this.$get=["$injector","$interpolate","$exceptionHandler",
"$http","$templateCache","$parse","$controller","$rootScope",function(b,i,j,k,l,n,p,o){function t(a,b,c){a instanceof u||(a=u(a));m(a,function(b,c){b.nodeType==3&&(a[c]=u(b).wrap("<span></span>").parent()[0])});var d=r(a,b,a,c);return function(b,c){qa(b,"scope");var e=c?ua.clone.call(a):a;e.data("$scope",b);q(e,"ng-scope");c&&c(e,b);d&&d(b,e,e);return e}}function q(a,b){try{a.addClass(b)}catch(c){}}function r(a,b,c,d){function e(a,c,d,g){for(var j,i,n,k,l,o=0,p=0,q=f.length;o<q;p++)n=c[p],j=f[o++],
i=f[o++],j?(j.scope?(k=a.$new(I(j.scope)),u(n).data("$scope",k)):k=a,(l=j.transclude)||!g&&b?j(i,k,n,d,function(b){return function(c){var d=a.$new();return b(d,c).bind("$destroy",Wa(d,d.$destroy))}}(l||b)):j(i,k,n,s,g)):i&&i(a,n.childNodes,s,g)}for(var f=[],g,j,i,n=0;n<a.length;n++)j=new ea,g=da(a[n],[],j,d),j=(g=g.length?E(g,a[n],j,b,c):null)&&g.terminal?null:r(a[n].childNodes,g?g.transclude:b),f.push(g),f.push(j),i=i||g||j;return i?e:null}function da(a,b,c,f){var g=c.$attr,j;switch(a.nodeType){case 1:w(b,
fa(Db(a).toLowerCase()),"E",f);var i,n,k;j=a.attributes;for(var l=0,o=j&&j.length;l<o;l++)if(i=j[l],i.specified)n=i.name,k=fa(n.toLowerCase()),g[k]=n,c[k]=i=Q(Z&&n=="href"?decodeURIComponent(a.getAttribute(n,2)):i.value),zb(a,k)&&(c[k]=!0),W(a,b,i,k),w(b,k,"A",f);a=a.className;if(F(a))for(;j=e.exec(a);)k=fa(j[2]),w(b,k,"C",f)&&(c[k]=Q(j[3])),a=a.substr(j.index+j[0].length);break;case 3:H(b,a.nodeValue);break;case 8:try{if(j=d.exec(a.nodeValue))k=fa(j[1]),w(b,k,"M",f)&&(c[k]=Q(j[2]))}catch(p){}}b.sort(z);
return b}function E(a,b,c,d,e){function f(a,b){if(a)a.require=A.require,o.push(a);if(b)b.require=A.require,$.push(b)}function i(a,b){var c,d="data",e=!1;if(F(a)){for(;(c=a.charAt(0))=="^"||c=="?";)a=a.substr(1),c=="^"&&(d="inheritedData"),e=e||c=="?";c=b[d]("$"+a+"Controller");if(!c&&!e)throw y("No controller: "+a);}else K(a)&&(c=[],m(a,function(a){c.push(i(a,b))}));return c}function k(a,d,e,f,g){var l,q,P,t,Ha;l=b===e?c:ic(c,new ea(u(e),c.$attr));q=l.$$element;if(r&&I(r.scope)){var E=/^\s*([@=&])\s*(\w*)\s*$/,
z=d.$parent||d;m(r.scope,function(a,b){var c=a.match(E)||[],e=c[2]||b,f,g,j;switch(c[1]){case "@":l.$observe(e,function(a){d[b]=a});l.$$observers[e].$$scope=z;break;case "=":g=n(l[e]);j=g.assign||function(){f=d[b]=g(z);throw y(Eb+l[e]+" (directive: "+r.name+")");};f=d[b]=g(z);d.$watch(function(){var a=g(z);a!==d[b]&&(a!==f?f=d[b]=a:j(z,f=d[b]));return a});break;case "&":g=n(l[e]);d[b]=function(a){return g(z,a)};break;default:throw y("Invalid isolate scope definition for directive "+r.name+": "+a);
}})}x&&m(x,function(a){var b={$scope:d,$element:q,$attrs:l,$transclude:g};Ha=a.controller;Ha=="@"&&(Ha=l[a.name]);q.data("$"+a.name+"Controller",p(Ha,b))});f=0;for(P=o.length;f<P;f++)try{t=o[f],t(d,q,l,t.require&&i(t.require,q))}catch(w){j(w,pa(q))}a&&a(d,e.childNodes,s,g);f=0;for(P=$.length;f<P;f++)try{t=$[f],t(d,q,l,t.require&&i(t.require,q))}catch(Ia){j(Ia,pa(q))}}for(var l=-Number.MAX_VALUE,o=[],$=[],r=null,E=null,w=null,z=c.$$element=u(b),A,H,W,C,v=d,x,D,X,B=0,G=a.length;B<G;B++){A=a[B];W=s;
if(l>A.priority)break;if(X=A.scope)M("isolated scope",E,A,z),I(X)&&(q(z,"ng-isolate-scope"),E=A),q(z,"ng-scope"),r=r||A;H=A.name;if(X=A.controller)x=x||{},M("'"+H+"' controller",x[H],A,z),x[H]=A;if(X=A.transclude)M("transclusion",C,A,z),C=A,l=A.priority,X=="element"?(W=u(b),z=c.$$element=u("<\!-- "+H+": "+c[H]+" --\>"),b=z[0],Ga(e,u(W[0]),b),v=t(W,d,l)):(W=u(db(b)).contents(),z.html(""),v=t(W,d));if(X=A.template)if(M("template",w,A,z),w=A,X=Ia(X),A.replace){W=u("<div>"+Q(X)+"</div>").contents();b=
W[0];if(W.length!=1||b.nodeType!==1)throw new y(g+X);Ga(e,z,b);H={$attr:{}};a=a.concat(da(b,a.splice(B+1,a.length-(B+1)),H));P(c,H);G=a.length}else z.html(X);if(A.templateUrl)M("template",w,A,z),w=A,k=V(a.splice(B,a.length-B),k,z,c,e,A.replace,v),G=a.length;else if(A.compile)try{D=A.compile(z,c,v),L(D)?f(null,D):D&&f(D.pre,D.post)}catch(J){j(J,pa(z))}if(A.terminal)k.terminal=!0,l=Math.max(l,A.priority)}k.scope=r&&r.scope;k.transclude=C&&v;return k}function w(d,e,g,i){var n=!1;if(a.hasOwnProperty(e))for(var k,
e=b.get(e+c),l=0,o=e.length;l<o;l++)try{if(k=e[l],(i===s||i>k.priority)&&k.restrict.indexOf(g)!=-1)d.push(k),n=!0}catch(p){j(p)}return n}function P(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){e.charAt(0)!="$"&&(b[e]&&(d+=(e==="style"?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){f=="class"?(q(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):f=="style"?e.attr("style",e.attr("style")+";"+b):f.charAt(0)!="$"&&!a.hasOwnProperty(f)&&(a[f]=b,d[f]=c[f])})}function V(a,b,c,d,e,
f,j){var i=[],n,o,p=c[0],q=a.shift(),t=D({},q,{controller:null,templateUrl:null,transclude:null});c.html("");k.get(q.templateUrl,{cache:l}).success(function(k){var l,q,k=Ia(k);if(f){q=u("<div>"+Q(k)+"</div>").contents();l=q[0];if(q.length!=1||l.nodeType!==1)throw new y(g+k);k={$attr:{}};Ga(e,c,l);da(l,a,k);P(d,k)}else l=p,c.html(k);a.unshift(t);n=E(a,c,d,j);for(o=r(c.contents(),j);i.length;){var $=i.pop(),k=i.pop();q=i.pop();var z=i.pop(),m=l;q!==p&&(m=db(l),Ga(k,u(q),m));n(function(){b(o,z,m,e,$)},
z,m,e,$)}i=null}).error(function(a,b,c,d){throw y("Failed to load template: "+d.url);});return function(a,c,d,e,f){i?(i.push(c),i.push(d),i.push(e),i.push(f)):n(function(){b(o,c,d,e,f)},c,d,e,f)}}function z(a,b){return b.priority-a.priority}function M(a,b,c,d){if(b)throw y("Multiple directives ["+b.name+", "+c.name+"] asking for "+a+" on: "+pa(d));}function H(a,b){var c=i(b,!0);c&&a.push({priority:0,compile:J(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);q(d.data("$binding",e),
"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function W(a,b,c,d){var e=i(c,!0);e&&b.push({priority:100,compile:J(function(a,b,c){b=c.$$observers||(c.$$observers={});d==="class"&&(e=i(c[d],!0));c[d]=s;(b[d]||(b[d]=[])).$$inter=!0;(c.$$observers&&c.$$observers[d].$$scope||a).$watch(e,function(a){c.$set(d,a)})})})}function Ga(a,b,c){var d=b[0],e=d.parentNode,f,g;if(a){f=0;for(g=a.length;f<g;f++)if(a[f]==d){a[f]=c;break}}e&&e.replaceChild(c,d);c[u.expando]=d[u.expando];b[0]=c}var ea=function(a,
b){this.$$element=a;this.$attr=b||{}};ea.prototype={$normalize:fa,$set:function(a,b,c,d){var e=zb(this.$$element[0],a),f=this.$$observers;e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=ab(a,"-"));c!==!1&&(b===null||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));f&&m(f[a],function(a){try{a(b)}catch(c){j(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);o.$evalAsync(function(){e.$$inter||
b(c[a])});return b}};var C=i.startSymbol(),$=i.endSymbol(),Ia=C=="{{"||$=="}}"?ma:function(a){return a.replace(/\{\{/g,C).replace(/}}/g,$)};return t}]}function fa(b){return sb(b.replace(Ac,""))}function Bc(){var b={};this.register=function(a,c){I(a)?D(b,a):b[a]=c};this.$get=["$injector","$window",function(a,c){return function(d,e){if(F(d)){var g=d,d=b.hasOwnProperty(g)?b[g]:gb(e.$scope,g,!0)||gb(c,g,!0);ra(d,g,!0)}return a.instantiate(d,e)}}]}function Cc(){this.$get=["$window",function(b){return u(b.document)}]}
function Dc(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Ec(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler",function(c,d){function e(e,i){for(var j,k,l=0,n=[],p=e.length,o=!1,t=[];l<p;)(j=e.indexOf(b,l))!=-1&&(k=e.indexOf(a,j+g))!=-1?(l!=j&&n.push(e.substring(l,j)),n.push(l=c(o=e.substring(j+g,k))),l.exp=o,l=k+h,o=!0):(l!=p&&n.push(e.substring(l)),
l=p);if(!(p=n.length))n.push(""),p=1;if(!i||o)return t.length=p,l=function(a){try{for(var b=0,c=p,g;b<c;b++){if(typeof(g=n[b])=="function")g=g(a),g==null||g==s?g="":typeof g!="string"&&(g=ba(g));t[b]=g}return t.join("")}catch(j){a=new y("Error while interpolating: "+e+"\n"+j.toString()),d(a)}},l.exp=e,l.parts=n,l}var g=b.length,h=a.length;e.startSymbol=function(){return b};e.endSymbol=function(){return a};return e}]}function Fb(b){for(var b=b.split("/"),a=b.length;a--;)b[a]=$a(b[a]);return b.join("/")}
function va(b,a){var c=Gb.exec(b),c={protocol:c[1],host:c[3],port:G(c[5])||Hb[c[1]]||null,path:c[6]||"/",search:c[8],hash:c[10]};if(a)a.$$protocol=c.protocol,a.$$host=c.host,a.$$port=c.port;return c}function ka(b,a,c){return b+"://"+a+(c==Hb[b]?"":":"+c)}function Fc(b,a,c){var d=va(b);return decodeURIComponent(d.path)!=a||v(d.hash)||d.hash.indexOf(c)!==0?b:ka(d.protocol,d.host,d.port)+a.substr(0,a.lastIndexOf("/"))+d.hash.substr(c.length)}function Gc(b,a,c){var d=va(b);if(decodeURIComponent(d.path)==
a)return b;else{var e=d.search&&"?"+d.search||"",g=d.hash&&"#"+d.hash||"",h=a.substr(0,a.lastIndexOf("/")),f=d.path.substr(h.length);if(d.path.indexOf(h)!==0)throw y('Invalid url "'+b+'", missing path prefix "'+h+'" !');return ka(d.protocol,d.host,d.port)+a+"#"+c+f+e+g}}function hb(b,a,c){a=a||"";this.$$parse=function(b){var c=va(b,this);if(c.path.indexOf(a)!==0)throw y('Invalid url "'+b+'", missing path prefix "'+a+'" !');this.$$path=decodeURIComponent(c.path.substr(a.length));this.$$search=Ya(c.search);
this.$$hash=c.hash&&decodeURIComponent(c.hash)||"";this.$$compose()};this.$$compose=function(){var b=pb(this.$$search),c=this.$$hash?"#"+$a(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+a+this.$$url};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Ja(b,a,c){var d;this.$$parse=function(b){var c=va(b,this);if(c.hash&&c.hash.indexOf(a)!==0)throw y('Invalid url "'+b+'", missing hash prefix "'+
a+'" !');d=c.path+(c.search?"?"+c.search:"");c=Hc.exec((c.hash||"").substr(a.length));this.$$path=c[1]?(c[1].charAt(0)=="/"?"":"/")+decodeURIComponent(c[1]):"";this.$$search=Ya(c[3]);this.$$hash=c[5]&&decodeURIComponent(c[5])||"";this.$$compose()};this.$$compose=function(){var b=pb(this.$$search),c=this.$$hash?"#"+$a(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+d+(this.$$url?"#"+a+this.$$url:"")};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==
0)return a};this.$$parse(b)}function Ib(b,a,c,d){Ja.apply(this,arguments);this.$$rewriteAppUrl=function(b){if(b.indexOf(c)==0)return c+d+"#"+a+b.substr(c.length)}}function Ka(b){return function(){return this[b]}}function Jb(b,a){return function(c){if(v(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ic(){var b="",a=!1;this.hashPrefix=function(a){return x(a)?(b=a,this):b};this.html5Mode=function(b){return x(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",
function(c,d,e,g){function h(a){c.$broadcast("$locationChangeSuccess",f.absUrl(),a)}var f,i,j,k=d.url(),l=va(k);a?(i=d.baseHref()||"/",j=i.substr(0,i.lastIndexOf("/")),l=ka(l.protocol,l.host,l.port)+j+"/",f=e.history?new hb(Fc(k,i,b),j,l):new Ib(Gc(k,i,b),b,l,i.substr(j.length+1))):(l=ka(l.protocol,l.host,l.port)+(l.path||"")+(l.search?"?"+l.search:"")+"#"+b+"/",f=new Ja(k,b,l));g.bind("click",function(a){if(!a.ctrlKey&&!(a.metaKey||a.which==2)){for(var b=u(a.target);B(b[0].nodeName)!=="a";)if(b[0]===
g[0]||!(b=b.parent())[0])return;var d=b.prop("href"),e=f.$$rewriteAppUrl(d);d&&!b.attr("target")&&e&&(f.$$parse(e),c.$apply(),a.preventDefault(),T.angular["ff-684208-preventDefault"]=!0)}});f.absUrl()!=k&&d.url(f.absUrl(),!0);d.onUrlChange(function(a){f.absUrl()!=a&&(c.$evalAsync(function(){var b=f.absUrl();f.$$parse(a);h(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url();if(!n||a!=f.absUrl())n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",f.absUrl(),a).defaultPrevented?
f.$$parse(a):(d.url(f.absUrl(),f.$$replace),f.$$replace=!1,h(a))});return n});return f}]}function Jc(){this.$get=["$window",function(b){function a(a){a instanceof y&&(a.stack?a=a.message&&a.stack.indexOf(a.message)===-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function c(c){var e=b.console||{},g=e[c]||e.log||C;return g.apply?function(){var b=[];m(arguments,function(c){b.push(a(c))});return g.apply(e,b)}:function(a,b){g(a,b)}}return{log:c("log"),
warn:c("warn"),info:c("info"),error:c("error")}}]}function Kc(b,a){function c(a){return a.indexOf(q)!=-1}function d(){return o+1<b.length?b.charAt(o+1):!1}function e(a){return"0"<=a&&a<="9"}function g(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||a=="\u000b"||a=="\u00a0"}function h(a){return"a"<=a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function f(a){return a=="-"||a=="+"||e(a)}function i(a,c,d){d=d||o;throw y("Lexer Error: "+a+" at column"+(x(c)?"s "+c+"-"+o+" ["+b.substring(c,d)+"]":" "+d)+" in expression ["+
b+"].");}function j(){for(var a="",c=o;o<b.length;){var g=B(b.charAt(o));if(g=="."||e(g))a+=g;else{var j=d();if(g=="e"&&f(j))a+=g;else if(f(g)&&j&&e(j)&&a.charAt(a.length-1)=="e")a+=g;else if(f(g)&&(!j||!e(j))&&a.charAt(a.length-1)=="e")i("Invalid exponent");else break}o++}a*=1;n.push({index:c,text:a,json:!0,fn:function(){return a}})}function k(){for(var c="",d=o,f,j,i;o<b.length;){var k=b.charAt(o);if(k=="."||h(k)||e(k))k=="."&&(f=o),c+=k;else break;o++}if(f)for(j=o;j<b.length;){k=b.charAt(j);if(k==
"("){i=c.substr(f-d+1);c=c.substr(0,f-d);o=j;break}if(g(k))j++;else break}d={index:d,text:c};if(La.hasOwnProperty(c))d.fn=d.json=La[c];else{var l=Kb(c,a);d.fn=D(function(a,b){return l(a,b)},{assign:function(a,b){return Lb(a,c,b)}})}n.push(d);i&&(n.push({index:f,text:".",json:!1}),n.push({index:f+1,text:i,json:!1}))}function l(a){var c=o;o++;for(var d="",e=a,f=!1;o<b.length;){var g=b.charAt(o);e+=g;if(f)g=="u"?(g=b.substring(o+1,o+5),g.match(/[\da-f]{4}/i)||i("Invalid unicode escape [\\u"+g+"]"),o+=
4,d+=String.fromCharCode(parseInt(g,16))):(f=Lc[g],d+=f?f:g),f=!1;else if(g=="\\")f=!0;else if(g==a){o++;n.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}else d+=g;o++}i("Unterminated quote",c)}for(var n=[],p,o=0,t=[],q,r=":";o<b.length;){q=b.charAt(o);if(c("\"'"))l(q);else if(e(q)||c(".")&&e(d()))j();else if(h(q)){if(k(),"{,".indexOf(r)!=-1&&t[0]=="{"&&(p=n[n.length-1]))p.json=p.text.indexOf(".")==-1}else if(c("(){}[].,;:"))n.push({index:o,text:q,json:":[,".indexOf(r)!=-1&&
c("{[")||c("}]:,")}),c("{[")&&t.unshift(q),c("}]")&&t.shift(),o++;else if(g(q)){o++;continue}else{var m=q+d(),E=La[q],w=La[m];w?(n.push({index:o,text:m,fn:w}),o+=2):E?(n.push({index:o,text:q,fn:E,json:"[,:".indexOf(r)!=-1&&c("+-")}),o+=1):i("Unexpected next character ",o,o+1)}r=q}return n}function Mc(b,a,c,d){function e(a,c){throw y("Syntax Error: Token '"+c.text+"' "+a+" at column "+(c.index+1)+" of the expression ["+b+"] starting at ["+b.substring(c.index)+"].");}function g(){if(M.length===0)throw y("Unexpected end of expression: "+
b);return M[0]}function h(a,b,c,d){if(M.length>0){var e=M[0],f=e.text;if(f==a||f==b||f==c||f==d||!a&&!b&&!c&&!d)return e}return!1}function f(b,c,d,f){return(b=h(b,c,d,f))?(a&&!b.json&&e("is not valid json",b),M.shift(),b):!1}function i(a){f(a)||e("is unexpected, expecting ["+a+"]",h())}function j(a,b){return function(c,d){return a(c,d,b)}}function k(a,b,c){return function(d,e){return b(d,e,a,c)}}function l(){for(var a=[];;)if(M.length>0&&!h("}",")",";","]")&&a.push(v()),!f(";"))return a.length==1?
a[0]:function(b,c){for(var d,e=0;e<a.length;e++){var f=a[e];f&&(d=f(b,c))}return d}}function n(){for(var a=f(),b=c(a.text),d=[];;)if(a=f(":"))d.push(H());else{var e=function(a,c,e){for(var e=[e],f=0;f<d.length;f++)e.push(d[f](a,c));return b.apply(a,e)};return function(){return e}}}function p(){for(var a=o(),b;;)if(b=f("||"))a=k(a,b.fn,o());else return a}function o(){var a=t(),b;if(b=f("&&"))a=k(a,b.fn,o());return a}function t(){var a=q(),b;if(b=f("==","!="))a=k(a,b.fn,t());return a}function q(){var a;
a=r();for(var b;b=f("+","-");)a=k(a,b.fn,r());if(b=f("<",">","<=",">="))a=k(a,b.fn,q());return a}function r(){for(var a=m(),b;b=f("*","/","%");)a=k(a,b.fn,m());return a}function m(){var a;return f("+")?E():(a=f("-"))?k(V,a.fn,m()):(a=f("!"))?j(a.fn,m()):E()}function E(){var a;if(f("("))a=v(),i(")");else if(f("["))a=w();else if(f("{"))a=P();else{var b=f();(a=b.fn)||e("not a primary expression",b)}for(var c;b=f("(","[",".");)b.text==="("?(a=u(a,c),c=null):b.text==="["?(c=a,a=ea(a)):b.text==="."?(c=
a,a=x(a)):e("IMPOSSIBLE");return a}function w(){var a=[];if(g().text!="]"){do a.push(H());while(f(","))}i("]");return function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d}}function P(){var a=[];if(g().text!="}"){do{var b=f(),b=b.string||b.text;i(":");var c=H();a.push({key:b,value:c})}while(f(","))}i("}");return function(b,c){for(var d={},e=0;e<a.length;e++){var f=a[e],g=f.value(b,c);d[f.key]=g}return d}}var V=J(0),z,M=Kc(b,d),H=function(){var a=p(),c,d;return(d=f("="))?(a.assign||
e("implies assignment but ["+b.substring(0,d.index)+"] can not be assigned to",d),c=p(),function(b,d){return a.assign(b,c(b,d),d)}):a},u=function(a,b){var c=[];if(g().text!=")"){do c.push(H());while(f(","))}i(")");return function(d,e){for(var f=[],g=b?b(d,e):d,j=0;j<c.length;j++)f.push(c[j](d,e));j=a(d,e)||C;return j.apply?j.apply(g,f):j(f[0],f[1],f[2],f[3],f[4])}},x=function(a){var b=f().text,c=Kb(b,d);return D(function(b,d){return c(a(b,d),d)},{assign:function(c,d,e){return Lb(a(c,e),b,d)}})},ea=
function(a){var b=H();i("]");return D(function(c,d){var e=a(c,d),f=b(c,d),g;if(!e)return s;if((e=e[f])&&e.then){g=e;if(!("$$v"in e))g.$$v=s,g.then(function(a){g.$$v=a});e=e.$$v}return e},{assign:function(c,d,e){return a(c,e)[b(c,e)]=d}})},v=function(){for(var a=H(),b;;)if(b=f("|"))a=k(a,b.fn,n());else return a};a?(H=p,u=x=ea=v=function(){e("is not valid json",{text:b,index:0})},z=E()):z=l();M.length!==0&&e("is an unexpected token",M[0]);return z}function Lb(b,a,c){for(var a=a.split("."),d=0;a.length>
1;d++){var e=a.shift(),g=b[e];g||(g={},b[e]=g);b=g}return b[a.shift()]=c}function gb(b,a,c){if(!a)return b;for(var a=a.split("."),d,e=b,g=a.length,h=0;h<g;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&L(b)?Wa(e,b):b}function Mb(b,a,c,d,e){return function(g,h){var f=h&&h.hasOwnProperty(b)?h:g,i;if(f===null||f===s)return f;if((f=f[b])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}if(!a||f===null||f===s)return f;if((f=f[a])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=
a});f=f.$$v}if(!c||f===null||f===s)return f;if((f=f[c])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}if(!d||f===null||f===s)return f;if((f=f[d])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}if(!e||f===null||f===s)return f;if((f=f[e])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}return f}}function Kb(b,a){if(ib.hasOwnProperty(b))return ib[b];var c=b.split("."),d=c.length,e;if(a)e=d<6?Mb(c[0],c[1],c[2],c[3],c[4]):
function(a,b){var e=0,g;do g=Mb(c[e++],c[e++],c[e++],c[e++],c[e++])(a,b),b=s,a=g;while(e<d);return g};else{var g="var l, fn, p;\n";m(c,function(a,b){g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});g+="return s;";e=Function("s","k",g);e.toString=function(){return g}}return ib[b]=e}function Nc(){var b={};this.$get=
["$filter","$sniffer",function(a,c){return function(d){switch(typeof d){case "string":return b.hasOwnProperty(d)?b[d]:b[d]=Mc(d,!1,a,c.csp);case "function":return d;default:return C}}}]}function Oc(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Pc(function(a){b.$evalAsync(a)},a)}]}function Pc(b,a){function c(a){return a}function d(a){return h(a)}var e=function(){var f=[],i,j;return j={resolve:function(a){if(f){var c=f;f=s;i=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<
d;b++)a=c[b],i.then(a[0],a[1])})}},reject:function(a){j.resolve(h(a))},promise:{then:function(b,g){var j=e(),h=function(d){try{j.resolve((b||c)(d))}catch(e){a(e),j.reject(e)}},o=function(b){try{j.resolve((g||d)(b))}catch(c){a(c),j.reject(c)}};f?f.push([h,o]):i.then(h,o);return j.promise}}}},g=function(a){return a&&a.then?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},h=function(a){return{then:function(c,g){var h=e();b(function(){h.resolve((g||d)(a))});return h.promise}}};
return{defer:e,reject:h,when:function(f,i,j){var k=e(),l,n=function(b){try{return(i||c)(b)}catch(d){return a(d),h(d)}},p=function(b){try{return(j||d)(b)}catch(c){return a(c),h(c)}};b(function(){g(f).then(function(a){l||(l=!0,k.resolve(g(a).then(n,p)))},function(a){l||(l=!0,k.resolve(p(a)))})});return k.promise},all:function(a){var b=e(),c=a.length,d=[];c?m(a,function(a,e){g(a).then(function(a){e in d||(d[e]=a,--c||b.resolve(d))},function(a){e in d||b.reject(a)})}):b.resolve(d);return b.promise}}}
function Qc(){var b={};this.when=function(a,c){b[a]=D({reloadOnSearch:!0},c);if(a){var d=a[a.length-1]=="/"?a.substr(0,a.length-1):a+"/";b[d]={redirectTo:a}}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache",function(a,c,d,e,g,h,f){function i(){var b=j(),i=p.current;if(b&&i&&b.$route===i.$route&&ga(b.pathParams,i.pathParams)&&!b.reloadOnSearch&&!n)i.params=b.params,U(i.params,d),a.$broadcast("$routeUpdate",
i);else if(b||i)n=!1,a.$broadcast("$routeChangeStart",b,i),(p.current=b)&&b.redirectTo&&(F(b.redirectTo)?c.path(k(b.redirectTo,b.params)).search(b.params).replace():c.url(b.redirectTo(b.pathParams,c.path(),c.search())).replace()),e.when(b).then(function(){if(b){var a=[],c=[],d;m(b.resolve||{},function(b,d){a.push(d);c.push(L(b)?g.invoke(b):g.get(b))});if(!x(d=b.template))if(x(d=b.templateUrl))d=h.get(d,{cache:f}).then(function(a){return a.data});x(d)&&(a.push("$template"),c.push(d));return e.all(c).then(function(b){var c=
{};m(b,function(b,d){c[a[d]]=b});return c})}}).then(function(c){if(b==p.current){if(b)b.locals=c,U(b.params,d);a.$broadcast("$routeChangeSuccess",b,i)}},function(c){b==p.current&&a.$broadcast("$routeChangeError",b,i,c)})}function j(){var a,d;m(b,function(b,e){if(!d&&(a=l(c.path(),e)))d=ya(b,{params:D({},c.search(),a),pathParams:a}),d.$route=b});return d||b[null]&&ya(b[null],{params:{},pathParams:{}})}function k(a,b){var c=[];m((a||"").split(":"),function(a,d){if(d==0)c.push(a);else{var e=a.match(/(\w+)(.*)/),
f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var l=function(a,b){var c="^"+b.replace(/([\.\\\(\)\^\$])/g,"\\$1")+"$",d=[],e={};m(b.split(/\W/),function(a){if(a){var b=RegExp(":"+a+"([\\W])");c.match(b)&&(c=c.replace(b,"([^\\/]*)$1"),d.push(a))}});var f=a.match(RegExp(c));f&&m(d,function(a,b){e[a]=f[b+1]});return f?e:null},n=!1,p={routes:b,reload:function(){n=!0;a.$evalAsync(i)}};a.$on("$locationChangeSuccess",i);return p}]}function Rc(){this.$get=J({})}function Sc(){var b=
10;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse",function(a,c,d){function e(){this.$id=xa();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$asyncQueue=[];this.$$listeners={}}function g(a){if(i.$$phase)throw y(i.$$phase+" already in progress");i.$$phase=a}function h(a,b){var c=d(a);ra(c,b);return c}function f(){}e.prototype={$new:function(a){if(L(a))throw y("API-CHANGE: Use $controller to instantiate controllers.");
a?(a=new e,a.$root=this.$root):(a=function(){},a.prototype=this,a=new a,a.$id=xa());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$asyncQueue=[];a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=h(a,"watch"),e=this.$$watchers,g={fn:b,last:f,get:d,exp:a,eq:!!c};if(!L(b)){var i=h(b||C,"listener");g.fn=function(a,b,
c){i(c)}}if(!e)e=this.$$watchers=[];e.unshift(g);return function(){za(e,g)}},$digest:function(){var a,d,e,h,p,o,m,q=b,r,s=[],E,w;g("$digest");do{m=!1;r=this;do{for(p=r.$$asyncQueue;p.length;)try{r.$eval(p.shift())}catch(P){c(P)}if(h=r.$$watchers)for(o=h.length;o--;)try{if(a=h[o],(d=a.get(r))!==(e=a.last)&&!(a.eq?ga(d,e):typeof d=="number"&&typeof e=="number"&&isNaN(d)&&isNaN(e)))m=!0,a.last=a.eq?U(d):d,a.fn(d,e===f?d:e,r),q<5&&(E=4-q,s[E]||(s[E]=[]),w=L(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):
a.exp,w+="; newVal: "+ba(d)+"; oldVal: "+ba(e),s[E].push(w))}catch(V){c(V)}if(!(h=r.$$childHead||r!==this&&r.$$nextSibling))for(;r!==this&&!(h=r.$$nextSibling);)r=r.$parent}while(r=h);if(m&&!q--)throw i.$$phase=null,y(b+" $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+ba(s));}while(m||p.length);i.$$phase=null},$destroy:function(){if(i!=this){var a=this.$parent;this.$broadcast("$destroy");if(a.$$childHead==this)a.$$childHead=this.$$nextSibling;if(a.$$childTail==
this)a.$$childTail=this.$$prevSibling;if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling}},$eval:function(a,b){return d(a)(this,b)},$evalAsync:function(a){this.$$asyncQueue.push(a)},$apply:function(a){try{return g("$apply"),this.$eval(a)}catch(b){c(b)}finally{i.$$phase=null;try{i.$digest()}catch(d){throw c(d),d;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){za(c,
b)}},$emit:function(a,b){var d=[],e,f=this,g=!1,i={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1},h=[i].concat(ha.call(arguments,1)),m,s;do{e=f.$$listeners[a]||d;i.currentScope=f;m=0;for(s=e.length;m<s;m++)try{if(e[m].apply(null,h),g)return i}catch(E){c(E)}f=f.$parent}while(f);return i},$broadcast:function(a,b){var d=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},
g=[f].concat(ha.call(arguments,1));do if(d=e,f.currentScope=d,m(d.$$listeners[a],function(a){try{a.apply(null,g)}catch(b){c(b)}}),!(e=d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent;while(d=e);return f}};var i=new e;return i}]}function Tc(){this.$get=["$window","$document",function(b,a){var c={},d=G((/android (\d+)/.exec(B(b.navigator.userAgent))||[])[1]),e=a[0];return{history:!(!b.history||!b.history.pushState||d<4),hashchange:"onhashchange"in b&&(!e.documentMode||
e.documentMode>7),hasEvent:function(a){if(a=="input"&&Z==9)return!1;if(v(c[a])){var b=e.createElement("div");c[a]="on"+a in b}return c[a]},csp:e.SecurityPolicy?e.SecurityPolicy.isActive():!1}}]}function Uc(){this.$get=J(T)}function Nb(b){var a={},c,d,e;if(!b)return a;m(b.split("\n"),function(b){e=b.indexOf(":");c=B(Q(b.substr(0,e)));d=Q(b.substr(e+1));c&&(a[c]?a[c]+=", "+d:a[c]=d)});return a}function Ob(b){var a=I(b)?b:s;return function(c){a||(a=Nb(b));return c?a[B(c)]||null:a}}function Pb(b,a,c){if(L(c))return c(b,
a);m(c,function(c){b=c(b,a)});return b}function Vc(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d=this.defaults={transformResponse:[function(d){F(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ob(d,!0)));return d}],transformRequest:[function(a){return I(a)&&Ta.apply(a)!=="[object File]"?ba(a):a}],headers:{common:{Accept:"application/json, text/plain, */*","X-Requested-With":"XMLHttpRequest"},post:{"Content-Type":"application/json;charset=utf-8"},put:{"Content-Type":"application/json;charset=utf-8"}}},
e=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,i,j,k){function l(a){function c(a){var b=D({},a,{data:Pb(a.data,a.headers,f)});return 200<=a.status&&a.status<300?b:j.reject(b)}a.method=la(a.method);var e=a.transformRequest||d.transformRequest,f=a.transformResponse||d.transformResponse,g=d.headers,g=D({"X-XSRF-TOKEN":b.cookies()["XSRF-TOKEN"]},g.common,g[B(a.method)],a.headers),e=Pb(a.data,Ob(g),e),i;v(a.data)&&delete g["Content-Type"];
i=n(a,e,g);i=i.then(c,c);m(t,function(a){i=a(i)});i.success=function(b){i.then(function(c){b(c.data,c.status,c.headers,a)});return i};i.error=function(b){i.then(null,function(c){b(c.data,c.status,c.headers,a)});return i};return i}function n(b,c,d){function e(a,b,c){m&&(200<=a&&a<300?m.put(s,[a,b,Nb(c)]):m.remove(s));f(b,a,c);i.$apply()}function f(a,c,d){c=Math.max(c,0);(200<=c&&c<300?k.resolve:k.reject)({data:a,status:c,headers:Ob(d),config:b})}function h(){var a=Va(l.pendingRequests,b);a!==-1&&l.pendingRequests.splice(a,
1)}var k=j.defer(),n=k.promise,m,t,s=p(b.url,b.params);l.pendingRequests.push(b);n.then(h,h);b.cache&&b.method=="GET"&&(m=I(b.cache)?b.cache:o);if(m)if(t=m.get(s))if(t.then)return t.then(h,h),t;else K(t)?f(t[1],t[0],U(t[2])):f(t,200,{});else m.put(s,n);t||a(b.method,s,c,e,d,b.timeout,b.withCredentials,b.responseType);return n}function p(a,b){if(!b)return a;var c=[];fc(b,function(a,b){a==null||a==s||(I(a)&&(a=ba(a)),c.push(encodeURIComponent(b)+"="+encodeURIComponent(a)))});return a+(a.indexOf("?")==
-1?"?":"&")+c.join("&")}var o=c("$http"),t=[];m(e,function(a){t.push(F(a)?k.get(a):k.invoke(a))});l.pendingRequests=[];(function(a){m(arguments,function(a){l[a]=function(b,c){return l(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){l[a]=function(b,c,d){return l(D(d||{},{method:a,url:b,data:c}))}})})("post","put");l.defaults=d;return l}]}function Wc(){this.$get=["$browser","$window","$document",function(b,a,c){return Xc(b,Yc,b.defer,a.angular.callbacks,
c[0],a.location.protocol.replace(":",""))}]}function Xc(b,a,c,d,e,g){function h(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;Z?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c)}return function(e,i,j,k,l,n,p,o){function t(a,c,d,e){c=(i.match(Gb)||["",g])[1]=="file"?d?200:404:c;a(c==1223?204:c,d,e);b.$$completeOutstandingRequest(C)}b.$$incOutstandingRequestCount();
i=i||b.url();if(B(e)=="jsonp"){var q="_"+(d.counter++).toString(36);d[q]=function(a){d[q].data=a};h(i.replace("JSON_CALLBACK","angular.callbacks."+q),function(){d[q].data?t(k,200,d[q].data):t(k,-2);delete d[q]})}else{var r=new a;r.open(e,i,!0);m(l,function(a,b){a&&r.setRequestHeader(b,a)});var s;r.onreadystatechange=function(){r.readyState==4&&t(k,s||r.status,r.response||r.responseText,r.getAllResponseHeaders())};if(p)r.withCredentials=!0;if(o)r.responseType=o;r.send(j||"");n>0&&c(function(){s=-1;
r.abort()},n)}}}function Zc(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return b===1?"one":"other"}}}}function $c(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,f,i){var j=c.defer(),
k=j.promise,l=x(i)&&!i,f=a.defer(function(){try{j.resolve(e())}catch(a){j.reject(a),d(a)}l||b.$apply()},f),i=function(){delete g[k.$$timeoutId]};k.$$timeoutId=f;g[f]=j;k.then(i,i);return k}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),a.defer.cancel(b.$$timeoutId)):!1};return e}]}function Qb(b){function a(a,e){return b.factory(a+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",
Rb);a("date",Sb);a("filter",ad);a("json",bd);a("limitTo",cd);a("lowercase",dd);a("number",Tb);a("orderBy",Ub);a("uppercase",ed)}function ad(){return function(b,a){if(!(b instanceof Array))return b;var c=[];c.check=function(a){for(var b=0;b<c.length;b++)if(!c[b](a))return!1;return!0};var d=function(a,b){if(b.charAt(0)==="!")return!d(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return(""+a).toLowerCase().indexOf(b)>-1;case "object":for(var c in a)if(c.charAt(0)!=="$"&&
d(a[c],b))return!0;return!1;case "array":for(c=0;c<a.length;c++)if(d(a[c],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var e in a)e=="$"?function(){var b=(""+a[e]).toLowerCase();b&&c.push(function(a){return d(a,b)})}():function(){var b=e,f=(""+a[e]).toLowerCase();f&&c.push(function(a){return d(gb(a,b),f)})}();break;case "function":c.push(a);break;default:return b}for(var g=[],h=0;h<b.length;h++){var f=b[h];c.check(f)&&
g.push(f)}return g}}function Rb(b){var a=b.NUMBER_FORMATS;return function(b,d){if(v(d))d=a.CURRENCY_SYM;return Vb(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Tb(b){var a=b.NUMBER_FORMATS;return function(b,d){return Vb(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Vb(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=b<0,b=Math.abs(b),h=b+"",f="",i=[];if(h.indexOf("e")!==-1)f=h;else{h=(h.split(Wb)[1]||"").length;v(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));
var h=Math.pow(10,e),b=Math.round(b*h)/h,b=(""+b).split(Wb),h=b[0],b=b[1]||"",j=0,k=a.lgSize,l=a.gSize;if(h.length>=k+l)for(var j=h.length-k,n=0;n<j;n++)(j-n)%l===0&&n!==0&&(f+=c),f+=h.charAt(n);for(n=j;n<h.length;n++)(h.length-n)%k===0&&n!==0&&(f+=c),f+=h.charAt(n);for(;b.length<e;)b+="0";e&&(f+=d+b.substr(0,e))}i.push(g?a.negPre:a.posPre);i.push(f);i.push(g?a.negSuf:a.posSuf);return i.join("")}function jb(b,a,c){var d="";b<0&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));
return d+b}function N(b,a,c,d){return function(e){e=e["get"+b]();if(c>0||e>-c)e+=c;e===0&&c==-12&&(e=12);return jb(e,a,d)}}function Ma(b,a){return function(c,d){var e=c["get"+b](),g=la(a?"SHORT"+b:b);return d[g][e]}}function Sb(b){function a(a){var b;if(b=a.match(c)){var a=new Date(0),g=0,h=0;b[9]&&(g=G(b[9]+b[10]),h=G(b[9]+b[11]));a.setUTCFullYear(G(b[1]),G(b[2])-1,G(b[3]));a.setUTCHours(G(b[4]||0)-g,G(b[5]||0)-h,G(b[6]||0),G(b[7]||0))}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;
return function(c,e){var g="",h=[],f,i,e=e||"mediumDate",e=b.DATETIME_FORMATS[e]||e;F(c)&&(c=fd.test(c)?G(c):a(c));wa(c)&&(c=new Date(c));if(!na(c))return c;for(;e;)(i=gd.exec(e))?(h=h.concat(ha.call(i,1)),e=h.pop()):(h.push(e),e=null);m(h,function(a){f=hd[a];g+=f?f(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function bd(){return function(b){return ba(b,!0)}}function cd(){return function(b,a){if(!(b instanceof Array))return b;var a=G(a),c=[],d,e;if(!b||!(b instanceof
Array))return c;a>b.length?a=b.length:a<-b.length&&(a=-b.length);a>0?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Ub(b){return function(a,c,d){function e(a,b){return Xa(b)?function(b,c){return a(c,b)}:a}if(!(a instanceof Array))return a;if(!c)return a;for(var c=K(c)?c:[c],c=Ua(c,function(a){var c=!1,d=a||ma;if(F(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")c=a.charAt(0)=="-",a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;
f==g?(f=="string"&&(c=c.toLowerCase()),f=="string"&&(e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)}),g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e!==0)return e}return 0},d))}}function R(b){L(b)&&(b={link:b});b.restrict=b.restrict||"AC";return J(b)}function Xb(b,a){function c(a,c){c=c?"-"+ab(c,"-"):"";b.removeClass((a?Na:Oa)+c).addClass((a?Oa:Na)+c)}var d=this,e=b.parent().controller("form")||Pa,g=0,h=d.$error={};
d.$name=a.name;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Qa);c(!0);d.$addControl=function(a){a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];m(h,function(b,c){d.$setValidity(c,!0,a)})};d.$setValidity=function(a,b,j){var k=h[a];if(b){if(k&&(za(k,j),!k.length)){g--;if(!g)c(b),d.$valid=!0,d.$invalid=!1;h[a]=!1;c(!0,a);e.$setValidity(a,!0,d)}}else{g||c(b);if(k){if(Va(k,j)!=-1)return}else h[a]=
k=[],g++,c(!1,a),e.$setValidity(a,!1,d);k.push(j);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Qa).addClass(Yb);d.$dirty=!0;d.$pristine=!1}}function S(b){return v(b)||b===""||b===null||b!==b}function Ra(b,a,c,d,e,g){var h=function(){var c=Q(a.val());d.$viewValue!==c&&b.$apply(function(){d.$setViewValue(c)})};if(e.hasEvent("input"))a.bind("input",h);else{var f;a.bind("keydown",function(a){a=a.keyCode;a===91||15<a&&a<19||37<=a&&a<=40||f||(f=g.defer(function(){h();f=null}))});a.bind("change",
h)}d.$render=function(){a.val(S(d.$viewValue)?"":d.$viewValue)};var i=c.ngPattern,j=function(a,b){return S(b)||a.test(b)?(d.$setValidity("pattern",!0),b):(d.$setValidity("pattern",!1),s)};i&&(i.match(/^\/(.*)\/$/)?(i=RegExp(i.substr(1,i.length-2)),e=function(a){return j(i,a)}):e=function(a){var c=b.$eval(i);if(!c||!c.test)throw new y("Expected "+i+" to be a RegExp but was "+c);return j(c,a)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var k=G(c.ngMinlength),e=function(a){return!S(a)&&
a.length<k?(d.$setValidity("minlength",!1),s):(d.$setValidity("minlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var l=G(c.ngMaxlength),c=function(a){return!S(a)&&a.length>l?(d.$setValidity("maxlength",!1),s):(d.$setValidity("maxlength",!0),a)};d.$parsers.push(c);d.$formatters.push(c)}}function kb(b,a){b="ngClass"+b;return R(function(c,d,e){c.$watch(e[b],function(b,e){if(a===!0||c.$index%2===a)e&&b!==e&&(I(e)&&!K(e)&&(e=Ua(e,function(a,b){if(a)return b})),d.removeClass(K(e)?
e.join(" "):e)),I(b)&&!K(b)&&(b=Ua(b,function(a,b){if(a)return b})),b&&d.addClass(K(b)?b.join(" "):b)},!0)})}var B=function(b){return F(b)?b.toLowerCase():b},la=function(b){return F(b)?b.toUpperCase():b},y=T.Error,Z=G((/msie (\d+)/.exec(B(navigator.userAgent))||[])[1]),u,ia,ha=[].slice,Sa=[].push,Ta=Object.prototype.toString,Zb=T.angular||(T.angular={}),ta,Db,Y=["0","0","0"];C.$inject=[];ma.$inject=[];Db=Z<9?function(b){b=b.nodeName?b:b[0];return b.scopeName&&b.scopeName!="HTML"?la(b.scopeName+":"+
b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var lc=/[A-Z]/g,id={full:"1.1.0",major:1,minor:1,dot:0,codeName:"increase-gravatas"},Ba=O.cache={},Aa=O.expando="ng-"+(new Date).getTime(),pc=1,$b=T.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},eb=T.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},nc=/([\:\-\_]+(.))/g,oc=/^moz([A-Z])/,ua=
O.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;this.bind("DOMContentLoaded",a);O(T).bind("load",a)},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return b>=0?u(this[b]):u(this[this.length+b])},length:0,push:Sa,sort:[].sort,splice:[].splice},Ea={};m("multiple,selected,checked,disabled,readOnly,required".split(","),function(b){Ea[B(b)]=b});var Ab={};m("input,select,option,textarea,button,form".split(","),function(b){Ab[la(b)]=
!0});m({data:vb,inheritedData:Da,scope:function(b){return Da(b,"$scope")},controller:yb,injector:function(b){return Da(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ca,css:function(b,a,c){a=sb(a);if(x(c))b.style[a]=c;else{var d;Z<=8&&(d=b.currentStyle&&b.currentStyle[a],d===""&&(d="auto"));d=d||b.style[a];Z<=8&&(d=d===""?s:d);return d}},attr:function(b,a,c){var d=B(a);if(Ea[d])if(x(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||
C).specified?d:s;else if(x(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),b===null?s:b},prop:function(b,a,c){if(x(c))b[a]=c;else return b[a]},text:D(Z<9?function(b,a){if(b.nodeType==1){if(v(a))return b.innerText;b.innerText=a}else{if(v(a))return b.nodeValue;b.nodeValue=a}}:function(b,a){if(v(a))return b.textContent;b.textContent=a},{$dv:""}),val:function(b,a){if(v(a))return b.value;b.value=a},html:function(b,a){if(v(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)sa(d[c]);
b.innerHTML=a}},function(b,a){O.prototype[a]=function(a,d){var e,g;if((b.length==2&&b!==Ca&&b!==yb?a:d)===s)if(I(a)){for(e=0;e<this.length;e++)if(b===vb)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}else{if(this.length)return b(this[0],a,d)}else{for(e=0;e<this.length;e++)b(this[e],a,d);return this}return b.$dv}});m({removeData:tb,dealoc:sa,bind:function a(c,d,e){var g=ca(c,"events"),h=ca(c,"handle");g||ca(c,"events",g={});h||ca(c,"handle",h=qc(c,g));m(d.split(" "),function(d){var i=g[d];
if(!i){if(d=="mouseenter"||d=="mouseleave"){var j=0;g.mouseenter=[];g.mouseleave=[];a(c,"mouseover",function(a){j++;j==1&&h(a,"mouseenter")});a(c,"mouseout",function(a){j--;j==0&&h(a,"mouseleave")})}else $b(c,d,h),g[d]=[];i=g[d]}i.push(e)})},unbind:ub,replaceWith:function(a,c){var d,e=a.parentNode;sa(a);m(new O(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeName!="#text"&&c.push(a)});return c},contents:function(a){return a.childNodes},
append:function(a,c){m(new O(c),function(c){a.nodeType===1&&a.appendChild(c)})},prepend:function(a,c){if(a.nodeType===1){var d=a.firstChild;m(new O(c),function(c){d?a.insertBefore(c,d):(a.appendChild(c),d=c)})}},wrap:function(a,c){var c=u(c)[0],d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){sa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;m(new O(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:xb,removeClass:wb,toggleClass:function(a,
c,d){v(d)&&(d=!Ca(a,c));(d?xb:wb)(a,c)},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},next:function(a){return a.nextSibling},find:function(a,c){return a.getElementsByTagName(c)},clone:db},function(a,c){O.prototype[c]=function(c,e){for(var g,h=0;h<this.length;h++)g==s?(g=a(this[h],c,e),g!==s&&(g=u(g))):cb(g,a(this[h],c,e));return g==s?this:g}});Fa.prototype={put:function(a,c){this[ja(a)]=c},get:function(a){return this[ja(a)]},remove:function(a){var c=this[a=ja(a)];delete this[a];
return c}};fb.prototype={push:function(a,c){var d=this[a=ja(a)];d?d.push(c):this[a]=[c]},shift:function(a){var c=this[a=ja(a)];if(c)return c.length==1?(delete this[a],c[0]):c.shift()}};var sc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,tc=/,/,uc=/^\s*(_?)(.+?)\1\s*$/,rc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Eb="Non-assignable model expression: ";Cb.$inject=["$provide"];var Ac=/^(x[\:\-_]|data[\:\-_])/i,Gb=/^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,ac=/^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
Hc=ac,Hb={http:80,https:443,ftp:21};hb.prototype={$$replace:!1,absUrl:Ka("$$absUrl"),url:function(a,c){if(v(a))return this.$$url;var d=ac.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));if(d[2]||d[1])this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:Ka("$$protocol"),host:Ka("$$host"),port:Ka("$$port"),path:Jb("$$path",function(a){return a.charAt(0)=="/"?a:"/"+a}),search:function(a,c){if(v(a))return this.$$search;x(c)?c===null?delete this.$$search[a]:this.$$search[a]=c:this.$$search=
F(a)?Ya(a):a;this.$$compose();return this},hash:Jb("$$hash",ma),replace:function(){this.$$replace=!0;return this}};Ja.prototype=ya(hb.prototype);Ib.prototype=ya(Ja.prototype);var La={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:C,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return(x(d)?d:0)+(x(e)?e:0)},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(x(d)?d:0)-(x(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/
e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":C,"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&
e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Lc={n:"\n",f:"\u000c",r:"\r",t:"\t",v:"\u000b","'":"'",'"':'"'},ib={},Yc=T.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw new y("This browser does not support XMLHttpRequest.");};Qb.$inject=["$provide"];Rb.$inject=["$locale"];Tb.$inject=["$locale"];
var Wb=".",hd={yyyy:N("FullYear",4),yy:N("FullYear",2,0,!0),y:N("FullYear",1),MMMM:Ma("Month"),MMM:Ma("Month",!0),MM:N("Month",2,1),M:N("Month",1,1),dd:N("Date",2),d:N("Date",1),HH:N("Hours",2),H:N("Hours",1),hh:N("Hours",2,-12),h:N("Hours",1,-12),mm:N("Minutes",2),m:N("Minutes",1),ss:N("Seconds",2),s:N("Seconds",1),EEEE:Ma("Day"),EEE:Ma("Day",!0),a:function(a,c){return a.getHours()<12?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=a.getTimezoneOffset();return jb(a/60,2)+jb(Math.abs(a%60),2)}},gd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
fd=/^\d+$/;Sb.$inject=["$locale"];var dd=J(B),ed=J(la);Ub.$inject=["$parse"];var jd=J({restrict:"E",compile:function(a,c){c.href||c.$set("href","");return function(a,c){c.bind("click",function(a){c.attr("href")||a.preventDefault()})}}}),lb={};m(Ea,function(a,c){var d=fa("ng-"+c);lb[d]=function(){return{priority:100,compile:function(){return function(a,g,h){a.$watch(h[d],function(a){h.$set(c,!!a)})}}}}});m(["src","href"],function(a){var c=fa("ng-"+a);lb[c]=function(){return{priority:99,link:function(d,
e,g){g.$observe(c,function(c){g.$set(a,c);Z&&e.prop(a,c)})}}}});var Pa={$addControl:C,$removeControl:C,$setValidity:C,$setDirty:C};Xb.$inject=["$element","$attrs","$scope"];var Sa=function(a){return["$timeout",function(c){var d={name:"form",restrict:"E",controller:Xb,compile:function(){return{pre:function(a,d,h,f){if(!h.action){var i=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};$b(d[0],"submit",i);d.bind("$destroy",function(){c(function(){eb(d[0],"submit",i)},0,!1)})}var j=d.parent().controller("form"),
k=h.name||h.ngForm;k&&(a[k]=f);j&&d.bind("$destroy",function(){j.$removeControl(f);k&&(a[k]=s);D(f,Pa)})}}}};return a?D(U(d),{restrict:"EAC"}):d}]},kd=Sa(),ld=Sa(!0),md=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,nd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,od=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,bc={text:Ra,number:function(a,c,d,e,g,h){Ra(a,c,d,e,g,h);e.$parsers.push(function(a){var c=S(a);return c||od.test(a)?(e.$setValidity("number",!0),a===""?
null:c?a:parseFloat(a)):(e.$setValidity("number",!1),s)});e.$formatters.push(function(a){return S(a)?"":""+a});if(d.min){var f=parseFloat(d.min),a=function(a){return!S(a)&&a<f?(e.$setValidity("min",!1),s):(e.$setValidity("min",!0),a)};e.$parsers.push(a);e.$formatters.push(a)}if(d.max){var i=parseFloat(d.max),d=function(a){return!S(a)&&a>i?(e.$setValidity("max",!1),s):(e.$setValidity("max",!0),a)};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(a){return S(a)||wa(a)?(e.$setValidity("number",
!0),a):(e.$setValidity("number",!1),s)})},url:function(a,c,d,e,g,h){Ra(a,c,d,e,g,h);a=function(a){return S(a)||md.test(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),s)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,h){Ra(a,c,d,e,g,h);a=function(a){return S(a)||nd.test(a)?(e.$setValidity("email",!0),a):(e.$setValidity("email",!1),s)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){v(d.name)&&c.attr("name",xa());c.bind("click",function(){c[0].checked&&
a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,h=d.ngFalseValue;F(g)||(g=!0);F(h)||(h=!1);c.bind("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:h})},hidden:C,button:C,submit:C,reset:C},cc=["$browser","$sniffer",
function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,h){h&&(bc[B(g.type)]||bc.text)(d,e,g,h,c,a)}}}],Oa="ng-valid",Na="ng-invalid",Qa="ng-pristine",Yb="ng-dirty",pd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function h(a,c){c=c?"-"+ab(c,"-"):"";e.removeClass((a?Na:Oa)+c).addClass((a?Oa:Na)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=
!0;this.$invalid=!1;this.$name=d.name;var g=g(d.ngModel),f=g.assign;if(!f)throw y(Eb+d.ngModel+" ("+pa(e)+")");this.$render=C;var i=e.inheritedData("$formController")||Pa,j=0,k=this.$error={};e.addClass(Qa);h(!0);this.$setValidity=function(a,c){if(k[a]!==!c){if(c){if(k[a]&&j--,!j)h(!0),this.$valid=!0,this.$invalid=!1}else h(!1),this.$invalid=!0,this.$valid=!1,j++;k[a]=!c;h(c,a);i.$setValidity(a,c,this)}};this.$setViewValue=function(d){this.$viewValue=d;if(this.$pristine)this.$dirty=!0,this.$pristine=
!1,e.removeClass(Qa).addClass(Yb),i.$setDirty();m(this.$parsers,function(a){d=a(d)});if(this.$modelValue!==d)this.$modelValue=d,f(a,d),m(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};var l=this;a.$watch(g,function(a){if(l.$modelValue!==a){var c=l.$formatters,d=c.length;for(l.$modelValue=a;d--;)a=c[d](a);if(l.$viewValue!==a)l.$viewValue=a,l.$render()}})}],qd=function(){return{require:["ngModel","^?form"],controller:pd,link:function(a,c,d,e){var g=e[0],h=e[1]||Pa;h.$addControl(g);
c.bind("$destroy",function(){h.$removeControl(g)})}}},rd=J({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),dc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&(S(a)||a===!1))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},sd=function(){return{require:"ngModel",
link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){var c=[];a&&m(a.split(g),function(a){a&&c.push(Q(a))});return c});e.$formatters.push(function(a){return K(a)?a.join(", "):s})}}},td=/^(true|false|\d+)$/,ud=function(){return{priority:100,compile:function(a,c){return td.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a,!1)})}}}},vd=R(function(a,c,d){c.addClass("ng-binding").data("$binding",
d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),wd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],xd=[function(){return function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe,function(a){c.html(a||"")})}}],yd=kb("",!0),zd=kb("Odd",0),Ad=kb("Even",1),Bd=R({compile:function(a,c){c.$set("ngCloak",s);
a.removeClass("ng-cloak")}}),Cd=[function(){return{scope:!0,controller:"@"}}],Dd=["$sniffer",function(a){return{priority:1E3,compile:function(){a.csp=!0}}}],ec={};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "),function(a){var c=fa("ng-"+a);ec[c]=["$parse",function(d){return function(e,g,h){var f=d(h[c]);g.bind(B(a),function(a){e.$apply(function(){f(e,{$event:a})})})}}]});var Ed=R(function(a,c,d){c.bind("submit",function(){a.$apply(d.ngSubmit)})}),
Fd=["$http","$templateCache","$anchorScroll","$compile",function(a,c,d,e){return{restrict:"ECA",terminal:!0,compile:function(g,h){var f=h.ngInclude||h.src,i=h.onload||"",j=h.autoscroll;return function(g,h){var n=0,m,o=function(){m&&(m.$destroy(),m=null);h.html("")};g.$watch(f,function(f){var q=++n;f?a.get(f,{cache:c}).success(function(a){q===n&&(m&&m.$destroy(),m=g.$new(),h.html(a),e(h.contents())(m),x(j)&&(!j||g.$eval(j))&&d(),m.$emit("$includeContentLoaded"),g.$eval(i))}).error(function(){q===n&&
o()}):o()})}}}}],Gd=R({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Hd=R({terminal:!0,priority:1E3}),Id=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,h){var f=h.count,i=g.attr(h.$attr.when),j=h.offset||0,k=e.$eval(i),l={},n=c.startSymbol(),p=c.endSymbol();m(k,function(a,e){l[e]=c(a.replace(d,n+f+"-"+j+p))});e.$watch(function(){var c=parseFloat(e.$eval(f));return isNaN(c)?"":(k[c]||(c=a.pluralCat(c-j)),l[c](e,g,!0))},function(a){g.text(a)})}}}],
Jd=R({transclude:"element",priority:1E3,terminal:!0,compile:function(a,c,d){return function(a,c,h){var f=h.ngRepeat,h=f.match(/^\s*(.+)\s+in\s+(.*)\s*$/),i,j,k;if(!h)throw y("Expected ngRepeat in form of '_item_ in _collection_' but got '"+f+"'.");f=h[1];i=h[2];h=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!h)throw y("'item' in 'item in collection' should be identifier or (key, value) but got '"+f+"'.");j=h[3]||h[1];k=h[2];var l=new fb;a.$watch(function(a){var e,f,h=a.$eval(i),m=hc(h,
!0),r,s=new fb,u,w,v,x,z=c;if(K(h))v=h||[];else{v=[];for(u in h)h.hasOwnProperty(u)&&u.charAt(0)!="$"&&v.push(u);v.sort()}e=0;for(f=v.length;e<f;e++){u=h===v?e:v[e];w=h[u];if(x=l.shift(w)){r=x.scope;s.push(w,x);if(e!==x.index)x.index=e,z.after(x.element);z=x.element}else r=a.$new();r[j]=w;k&&(r[k]=u);r.$index=e;r.$first=e===0;r.$last=e===m-1;r.$middle=!(r.$first||r.$last);x||d(r,function(a){z.after(a);x={scope:r,element:z=a,index:e};s.push(w,x)})}for(u in l)if(l.hasOwnProperty(u))for(v=l[u];v.length;)w=
v.pop(),w.element.remove(),w.scope.$destroy();l=s})}}}),Kd=R(function(a,c,d){a.$watch(d.ngShow,function(a){c.css("display",Xa(a)?"":"none")})}),Ld=R(function(a,c,d){a.$watch(d.ngHide,function(a){c.css("display",Xa(a)?"none":"")})}),Md=R(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Nd=J({restrict:"EA",compile:function(a,c){var d=c.ngSwitch||c.on,e={};a.data("ng-switch",e);return function(a,h){var f,i,j;a.$watch(d,function(d){i&&(j.$destroy(),
i.remove(),i=j=null);if(f=e["!"+d]||e["?"])a.$eval(c.change),j=a.$new(),f(j,function(a){i=a;h.append(a)})})}}}),Od=R({transclude:"element",priority:500,compile:function(a,c,d){a=a.inheritedData("ng-switch");qa(a);a["!"+c.ngSwitchWhen]=d}}),Pd=R({transclude:"element",priority:500,compile:function(a,c,d){a=a.inheritedData("ng-switch");qa(a);a["?"]=d}}),Qd=R({controller:["$transclude","$element",function(a,c){a(function(a){c.append(a)})}]}),Rd=["$http","$templateCache","$route","$anchorScroll","$compile",
"$controller",function(a,c,d,e,g,h){return{restrict:"ECA",terminal:!0,link:function(a,c,j){function k(){var j=d.current&&d.current.locals,k=j&&j.$template;if(k){c.html(k);l&&(l.$destroy(),l=null);var k=g(c.contents()),m=d.current;l=m.scope=a.$new();if(m.controller)j.$scope=l,j=h(m.controller,j),c.contents().data("$ngControllerController",j);k(l);l.$emit("$viewContentLoaded");l.$eval(n);e()}else c.html(""),l&&(l.$destroy(),l=null)}var l,n=j.onload||"";a.$on("$routeChangeSuccess",k);k()}}}],Sd=["$templateCache",
function(a){return{restrict:"E",terminal:!0,compile:function(c,d){d.type=="text/ng-template"&&a.put(d.id,c[0].text)}}}],Td=J({terminal:!0}),Ud=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,e={$setViewValue:C};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var i=this,j={},k=e,l;i.databound=d.ngModel;
i.init=function(a,c,d){k=a;l=d};i.addOption=function(c){j[c]=!0;k.$viewValue==c&&(a.val(c),l.parent()&&l.remove())};i.removeOption=function(a){this.hasOption(a)&&(delete j[a],k.$viewValue==a&&this.renderUnknownOption(a))};i.renderUnknownOption=function(c){c="? "+ja(c)+" ?";l.val(c);a.prepend(l);a.val(c);l.prop("selected",!0)};i.hasOption=function(a){return j.hasOwnProperty(a)};c.$on("$destroy",function(){i.renderUnknownOption=C})}],link:function(e,h,f,i){function j(a,c,d,e){d.$render=function(){var a=
d.$viewValue;e.hasOption(a)?(w.parent()&&w.remove(),c.val(a),a===""&&r.prop("selected",!0)):v(a)&&r?c.val(""):e.renderUnknownOption(a)};c.bind("change",function(){a.$apply(function(){w.parent()&&w.remove();d.$setViewValue(c.val())})})}function k(a,c,d){var e;d.$render=function(){var a=new Fa(d.$viewValue);m(c.children(),function(c){c.selected=x(a.get(c.value))})};a.$watch(function(){ga(e,d.$viewValue)||(e=U(d.$viewValue),d.$render())});c.bind("change",function(){a.$apply(function(){var a=[];m(c.children(),
function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function l(e,f,g){function i(){var a={"":[]},c=[""],d,h,t,u,v;t=g.$modelValue;u=r(e)||[];var x=l?mb(u):u,z,w,y;w={};v=!1;var A,B;if(o)v=new Fa(t);else if(t===null||q)a[""].push({selected:t===null,id:"",label:""}),v=!0;for(y=0;z=x.length,y<z;y++){w[k]=u[l?w[l]=x[y]:y];d=m(e,w)||"";if(!(h=a[d]))h=a[d]=[],c.push(d);o?d=v.remove(n(e,w))!=s:(d=t===n(e,w),v=v||d);h.push({id:l?x[y]:y,label:j(e,w)||"",selected:d})}!o&&!v&&a[""].unshift({id:"?",
label:"",selected:!0});w=0;for(x=c.length;w<x;w++){d=c[w];h=a[d];if(p.length<=w)t={element:D.clone().attr("label",d),label:h.label},u=[t],p.push(u),f.append(t.element);else if(u=p[w],t=u[0],t.label!=d)t.element.attr("label",t.label=d);A=null;y=0;for(z=h.length;y<z;y++)if(d=h[y],v=u[y+1]){A=v.element;if(v.label!==d.label)A.text(v.label=d.label);if(v.id!==d.id)A.val(v.id=d.id);if(v.element.selected!==d.selected)A.prop("selected",v.selected=d.selected)}else d.id===""&&q?B=q:(B=C.clone()).val(d.id).attr("selected",
d.selected).text(d.label),u.push({element:B,label:d.label,id:d.id,selected:d.selected}),A?A.after(B):t.element.append(B),A=B;for(y++;u.length>y;)u.pop().element.remove()}for(;p.length>w;)p.pop()[0].element.remove()}var h;if(!(h=t.match(d)))throw y("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '"+t+"'.");var j=c(h[2]||h[1]),k=h[4]||h[6],l=h[5],m=c(h[3]||""),n=c(h[2]?h[1]:k),r=c(h[7]),p=[[{element:f,label:""}]];q&&(a(q)(e),q.removeClass("ng-scope"),
q.remove());f.html("");f.bind("change",function(){e.$apply(function(){var a,c=r(e)||[],d={},h,i,j,m,q,t;if(o){i=[];m=0;for(t=p.length;m<t;m++){a=p[m];j=1;for(q=a.length;j<q;j++)if((h=a[j].element)[0].selected)h=h.val(),l&&(d[l]=h),d[k]=c[h],i.push(n(e,d))}}else h=f.val(),h=="?"?i=s:h==""?i=null:(d[k]=c[h],l&&(d[l]=h),i=n(e,d));g.$setViewValue(i)})});g.$render=i;e.$watch(i)}if(i[1]){for(var n=i[0],p=i[1],o=f.multiple,t=f.ngOptions,q=!1,r,C=u(aa.createElement("option")),D=u(aa.createElement("optgroup")),
w=C.clone(),i=0,B=h.children(),F=B.length;i<F;i++)if(B[i].value==""){r=q=B.eq(i);break}n.init(p,q,w);if(o&&(f.required||f.ngRequired)){var z=function(a){p.$setValidity("required",!f.required||a&&a.length);return a};p.$parsers.push(z);p.$formatters.unshift(z);f.$observe("required",function(){z(p.$viewValue)})}t?l(e,h,p):o?k(e,h,p):j(e,h,p,n)}}}}],Vd=["$interpolate",function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(v(e.value)){var g=a(d.text(),
!0);g||e.$set("value",d.text())}return function(a,d,e){var j=d.parent(),k=j.data("$selectController")||j.parent().data("$selectController");k&&k.databound?d.prop("selected",!1):k=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&k.removeOption(c);k.addOption(a)}):k.addOption(e.value);d.bind("$destroy",function(){k.removeOption(e.value)})}}}}],Wd=J({restrict:"E",terminal:!0});(ia=T.jQuery)?(u=ia,D(ia.fn,{scope:ua.scope,controller:ua.controller,injector:ua.injector,inheritedData:ua.inheritedData}),
bb("remove",!0),bb("empty"),bb("html")):u=O;Zb.element=u;(function(a){D(a,{bootstrap:qb,copy:U,extend:D,equals:ga,element:u,forEach:m,injector:rb,noop:C,bind:Wa,toJson:ba,fromJson:ob,identity:ma,isUndefined:v,isDefined:x,isString:F,isFunction:L,isObject:I,isNumber:wa,isElement:gc,isArray:K,version:id,isDate:na,lowercase:B,uppercase:la,callbacks:{counter:0}});ta=mc(T);try{ta("ngLocale")}catch(c){ta("ngLocale",[]).provider("$locale",Zc)}ta("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",
Cb).directive({a:jd,input:cc,textarea:cc,form:kd,script:Sd,select:Ud,style:Wd,option:Vd,ngBind:vd,ngBindHtmlUnsafe:xd,ngBindTemplate:wd,ngClass:yd,ngClassEven:Ad,ngClassOdd:zd,ngCsp:Dd,ngCloak:Bd,ngController:Cd,ngForm:ld,ngHide:Ld,ngInclude:Fd,ngInit:Gd,ngNonBindable:Hd,ngPluralize:Id,ngRepeat:Jd,ngShow:Kd,ngSubmit:Ed,ngStyle:Md,ngSwitch:Nd,ngSwitchWhen:Od,ngSwitchDefault:Pd,ngOptions:Td,ngView:Rd,ngTransclude:Qd,ngModel:qd,ngList:sd,ngChange:rd,required:dc,ngRequired:dc,ngValue:ud}).directive(lb).directive(ec);
a.provider({$anchorScroll:vc,$browser:xc,$cacheFactory:yc,$controller:Bc,$document:Cc,$exceptionHandler:Dc,$filter:Qb,$interpolate:Ec,$http:Vc,$httpBackend:Wc,$location:Ic,$log:Jc,$parse:Nc,$route:Qc,$routeParams:Rc,$rootScope:Sc,$q:Oc,$sniffer:Tc,$templateCache:zc,$timeout:$c,$window:Uc})}])})(Zb);u(aa).ready(function(){kc(aa,qb)})})(window,document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');
function CastController($scope){
	$scope.items = [
		{title: 'Name1', quantity:1, price: 3.95},
		{title: 'Name2', quantity:1, price: 3.95},
		{title: 'Name3', quantity:1, price: 3.95},
		{title: 'Name4', quantity:1, price: 3.95},
		{title: 'Name5', quantity:1, price: 3.95}
	];
	
	$scope.totalCart = function(){
		var total = 0;
			for(var i=0, len=$scope.items.length; i<len; i++){
				total = total + $scope.items[i].price * $scope.items[i].quantity
			}
		return total;
	};
	
	function calculateDiscount(newValue){
		$scope.bill = newValue>100?10:0;
	};

	function allSum(){
		$scope.sum = total - total * bill/100;
		return sum;
	};
	
	$scope.$watch($scope.totalCart, calculateDiscount, allSum);
}
var source1, drop;

function initiate(){
	source1 = document.getElementById('img');
	source1 = addEventListener('dragstart', dragged);
	drop = document.getElementById('dropbox');
	drop.addEventListener('dragenter', dragentered);
	drop.addEventListener('dragover', dragovered);
	drop.addEventListener('drop', dropped);
};

function dragentered(e){
	// предотвращаем действия по умолчанию
	e.preventDefault();
};

function dragovered(e){
	e.preventDefault();
};

function dropped(e){
	e.preventDefault();
	drop.innerHTML = e.dataTransfer.getData('Text');
};

function dragget(e){
	var code = "<img src='"+source1.getAttribute('src')+"'/>";
	e.dataTransfer.setData('Text', code);
};

addEventListener('load', initiate);
/*
 AngularJS v1.1.0
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(T,aa,s){'use strict';function m(b,a,c){var d;if(b)if(L(b))for(d in b)d!="prototype"&&d!="length"&&d!="name"&&b.hasOwnProperty(d)&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==m)b.forEach(a,c);else if(I(b)&&wa(b.length))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function mb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function fc(b,a,c){for(var d=mb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}
function nb(b){return function(a,c){b(c,a)}}function xa(){for(var b=Y.length,a;b;){b--;a=Y[b].charCodeAt(0);if(a==57)return Y[b]="A",Y.join("");if(a==90)Y[b]="0";else return Y[b]=String.fromCharCode(a+1),Y.join("")}Y.unshift("0");return Y.join("")}function D(b){m(arguments,function(a){a!==b&&m(a,function(a,d){b[d]=a})});return b}function G(b){return parseInt(b,10)}function ya(b,a){return D(new (D(function(){},{prototype:b})),a)}function C(){}function ma(b){return b}function J(b){return function(){return b}}
function v(b){return typeof b=="undefined"}function x(b){return typeof b!="undefined"}function I(b){return b!=null&&typeof b=="object"}function F(b){return typeof b=="string"}function wa(b){return typeof b=="number"}function na(b){return Ta.apply(b)=="[object Date]"}function K(b){return Ta.apply(b)=="[object Array]"}function L(b){return typeof b=="function"}function oa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Q(b){return F(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b}function gc(b){return b&&
(b.nodeName||b.bind&&b.find)}function Ua(b,a,c){var d=[];m(b,function(b,g,h){d.push(a.call(c,b,g,h))});return d}function hc(b,a){var c=0,d;if(K(b)||F(b))return b.length;else if(I(b))for(d in b)(!a||b.hasOwnProperty(d))&&c++;return c}function Va(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function za(b,a){var c=Va(b,a);c>=0&&b.splice(c,1);return a}function U(b,a){if(oa(b)||b&&b.$evalAsync&&b.$watch)throw y("Can't copy Window or Scope");if(a){if(b===
a)throw y("Can't copy equivalent objects or arrays");if(K(b)){for(;a.length;)a.pop();for(var c=0;c<b.length;c++)a.push(U(b[c]))}else for(c in m(a,function(b,c){delete a[c]}),b)a[c]=U(b[c])}else(a=b)&&(K(b)?a=U(b,[]):na(b)?a=new Date(b.getTime()):I(b)&&(a=U(b,{})));return a}function ic(b,a){var a=a||{},c;for(c in b)b.hasOwnProperty(c)&&c.substr(0,2)!=="$$"&&(a[c]=b[c]);return a}function ga(b,a){if(b===a)return!0;if(b===null||a===null)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&
c=="object")if(K(b)){if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ga(b[d],a[d]))return!1;return!0}}else if(na(b))return na(a)&&b.getTime()==a.getTime();else{if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||oa(b)||oa(a))return!1;c={};for(d in b){if(d.charAt(0)!=="$"&&!L(b[d])&&!ga(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c[d]&&d.charAt(0)!=="$"&&!L(a[d]))return!1;return!0}return!1}function Wa(b,a){var c=arguments.length>2?ha.call(arguments,2):[];return L(a)&&!(a instanceof RegExp)?c.length?
function(){return arguments.length?a.apply(b,c.concat(ha.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}:a}function jc(b,a){var c=a;/^\$+/.test(b)?c=s:oa(a)?c="$WINDOW":a&&aa===a?c="$DOCUMENT":a&&a.$evalAsync&&a.$watch&&(c="$SCOPE");return c}function ba(b,a){return JSON.stringify(b,jc,a?"  ":null)}function ob(b){return F(b)?JSON.parse(b):b}function Xa(b){b&&b.length!==0?(b=B(""+b),b=!(b=="f"||b=="0"||b=="false"||b=="no"||b=="n"||b=="[]")):b=!1;
return b}function pa(b){b=u(b).clone();try{b.html("")}catch(a){}return u("<div>").append(b).html().match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+B(b)})}function Ya(b){var a={},c,d;m((b||"").split("&"),function(b){b&&(c=b.split("="),d=decodeURIComponent(c[0]),a[d]=x(c[1])?decodeURIComponent(c[1]):!0)});return a}function pb(b){var a=[];m(b,function(b,d){a.push(Za(d,!0)+(b===!0?"":"="+Za(b,!0)))});return a.length?a.join("&"):""}function $a(b){return Za(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function Za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(a?null:/%20/g,"+")}function kc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,h=["ng:app","ng-app","x-ng-app","data-ng-app"],f=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;m(h,function(a){h[a]=!0;c(aa.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(m(b.querySelectorAll("."+a),c),m(b.querySelectorAll("."+a+"\\:"),c),m(b.querySelectorAll("["+
a+"]"),c))});m(d,function(a){if(!e){var b=f.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):m(a.attributes,function(b){if(!e&&h[b.name])e=a,g=b.value})}});e&&a(e,g?[g]:[])}function qb(b,a){b=u(b);a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");var c=rb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,h){a.$apply(function(){b.data("$injector",h);c(b)(a)})}]);return c}function ab(b,a){a=a||"_";return b.replace(lc,
function(b,d){return(d?a:"")+b.toLowerCase()})}function qa(b,a,c){if(!b)throw new y("Argument '"+(a||"?")+"' is "+(c||"required"));return b}function ra(b,a,c){c&&K(b)&&(b=b[b.length-1]);qa(L(b),a,"not a function, got "+(b&&typeof b=="object"?b.constructor.name||"Object":typeof b));return b}function mc(b){function a(a,b,e){return a[b]||(a[b]=e())}return a(a(b,"angular",Object),"module",function(){var b={};return function(d,e,g){e&&b.hasOwnProperty(d)&&(b[d]=null);return a(b,d,function(){function a(c,
d,e){return function(){b[e||"push"]([c,d,arguments]);return k}}if(!e)throw y("No module: "+d);var b=[],c=[],j=a("$injector","invoke"),k={_invokeQueue:b,_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:j,run:function(a){c.push(a);
return this}};g&&j(g);return k})}})}function sb(b){return b.replace(nc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(oc,"Moz$1")}function bb(b,a){function c(){var e;for(var b=[this],c=a,h,f,i,j,k,l,n;b.length;){h=b.shift();f=0;for(i=h.length;f<i;f++){j=u(h[f]);c?(n=(k=j.data("events"))&&k.$destroy)&&m(n,function(a){a.handler()}):c=!c;k=0;for(e=(l=j.children()).length,j=e;k<j;k++)b.push(ia(l[k]))}}return d.apply(this,arguments)}var d=ia.fn[b],d=d.$original||d;c.$original=d;ia.fn[b]=c}function O(b){if(b instanceof
O)return b;if(!(this instanceof O)){if(F(b)&&b.charAt(0)!="<")throw y("selectors not implemented");return new O(b)}if(F(b)){var a=aa.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);cb(this,a.childNodes);this.remove()}else cb(this,b)}function db(b){return b.cloneNode(!0)}function sa(b){tb(b);for(var a=0,b=b.childNodes||[];a<b.length;a++)sa(b[a])}function ub(b,a,c){var d=ca(b,"events");ca(b,"handle")&&(v(a)?m(d,function(a,c){eb(b,c,a);delete d[c]}):v(c)?(eb(b,a,d[a]),
delete d[a]):za(d[a],c))}function tb(b){var a=b[Aa],c=Ba[a];c&&(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),ub(b)),delete Ba[a],b[Aa]=s)}function ca(b,a,c){var d=b[Aa],d=Ba[d||-1];if(x(c))d||(b[Aa]=d=++pc,d=Ba[d]={}),d[a]=c;else return d&&d[a]}function vb(b,a,c){var d=ca(b,"data"),e=x(c),g=!e&&x(a),h=g&&!I(a);!d&&!h&&ca(b,"data",d={});if(e)d[a]=c;else if(g)if(h)return d&&d[a];else D(d,a);else return d}function Ca(b,a){return(" "+b.className+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" ")>
-1}function wb(b,a){a&&m(a.split(" "),function(a){b.className=Q((" "+b.className+" ").replace(/[\n\t]/g," ").replace(" "+Q(a)+" "," "))})}function xb(b,a){a&&m(a.split(" "),function(a){if(!Ca(b,a))b.className=Q(b.className+" "+Q(a))})}function cb(b,a){if(a)for(var a=!a.nodeName&&x(a.length)&&!oa(a)?a:[a],c=0;c<a.length;c++)b.push(a[c])}function yb(b,a){return Da(b,"$"+(a||"ngController")+"Controller")}function Da(b,a,c){b=u(b);for(b[0].nodeType==9&&(b=b.find("html"));b.length;){if(c=b.data(a))return c;
b=b.parent()}}function zb(b,a){var c=Ea[a.toLowerCase()];return c&&Ab[b.nodeName]&&c}function qc(b,a){var c=function(c,e){if(!c.preventDefault)c.preventDefault=function(){c.returnValue=!1};if(!c.stopPropagation)c.stopPropagation=function(){c.cancelBubble=!0};if(!c.target)c.target=c.srcElement||aa;if(v(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented};m(a[e||c.type],
function(a){a.call(b,c)});Z<=8?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function ja(b){var a=typeof b,c;if(a=="object"&&b!==null)if(typeof(c=b.$$hashKey)=="function")c=b.$$hashKey();else{if(c===s)c=b.$$hashKey=xa()}else c=b;return a+":"+c}function Fa(b){m(b,this.put,this)}function fb(){}function Bb(b){var a,c;if(typeof b=="function"){if(!(a=b.$inject))a=[],c=b.toString().replace(rc,
""),c=c.match(sc),m(c[1].split(tc),function(b){b.replace(uc,function(b,c,d){a.push(d)})}),b.$inject=a}else K(b)?(c=b.length-1,ra(b[c],"fn"),a=b.slice(0,c)):ra(b,"fn",!0);return a}function rb(b){function a(a){return function(b,c){if(I(b))m(b,nb(a));else return a(b,c)}}function c(a,b){L(b)&&(b=l.instantiate(b));if(!b.$get)throw y("Provider "+a+" must define $get factory method.");return k[a+f]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];m(a,function(a){if(!j.get(a))if(j.put(a,!0),
F(a)){var c=ta(a);b=b.concat(e(c.requires)).concat(c._runBlocks);try{for(var d=c._invokeQueue,c=0,f=d.length;c<f;c++){var g=d[c],i=l.get(g[0]);i[g[1]].apply(i,g[2])}}catch(h){throw h.message&&(h.message+=" from "+a),h;}}else if(L(a))try{b.push(l.invoke(a))}catch(o){throw o.message&&(o.message+=" from "+a),o;}else if(K(a))try{b.push(l.invoke(a))}catch(n){throw n.message&&(n.message+=" from "+String(a[a.length-1])),n;}else ra(a,"module")});return b}function g(a,b){function c(d){if(typeof d!=="string")throw y("Service name expected");
if(a.hasOwnProperty(d)){if(a[d]===h)throw y("Circular dependency: "+i.join(" <- "));return a[d]}else try{return i.unshift(d),a[d]=h,a[d]=b(d)}finally{i.shift()}}function d(a,b,e){var f=[],g=Bb(a),j,h,o;h=0;for(j=g.length;h<j;h++)o=g[h],f.push(e&&e.hasOwnProperty(o)?e[o]:c(o,i));a.$inject||(a=a[j]);switch(b?-1:f.length){case 0:return a();case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],f[1],f[2],f[3],f[4]);case 6:return a(f[0],
f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(K(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return I(e)?e:c},get:c,annotate:Bb}}var h={},f="Provider",i=[],j=new Fa,k={$provide:{provider:a(c),
factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,J(b))}),constant:a(function(a,b){k[a]=b;n[a]=b}),decorator:function(a,b){var c=l.get(a+f),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},l=k.$injector=g(k,function(){throw y("Unknown provider: "+i.join(" <- "));}),n={},p=n.$injector=g(n,function(a){a=l.get(a+f);return p.invoke(a.$get,a)});m(e(b),function(a){p.invoke(a||C)});
return p}function vc(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;m(a,function(a){!b&&B(a.nodeName)==="a"&&(b=a)});return b}function g(){var b=c.hash(),d;b?(d=h.getElementById(b))?d.scrollIntoView():(d=e(h.getElementsByName(b)))?d.scrollIntoView():b==="top"&&a.scrollTo(0,0):a.scrollTo(0,0)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function wc(b,a,c,
d){function e(a){try{a.apply(null,ha.call(arguments,1))}finally{if(o--,o===0)for(;t.length;)try{t.pop()()}catch(b){c.error(b)}}}function g(a,b){(function ea(){m(q,function(a){a()});r=b(ea,a)})()}function h(){da!=f.url()&&(da=f.url(),m(w,function(a){a(f.url())}))}var f=this,i=a[0],j=b.location,k=b.history,l=b.setTimeout,n=b.clearTimeout,p={};f.isMock=!1;var o=0,t=[];f.$$completeOutstandingRequest=e;f.$$incOutstandingRequestCount=function(){o++};f.notifyWhenNoOutstandingRequests=function(a){m(q,function(a){a()});
o===0?a():t.push(a)};var q=[],r;f.addPollFn=function(a){v(r)&&g(100,l);q.push(a);return a};var da=j.href,E=a.find("base");f.url=function(a,b){if(a){if(da!=a)return da=a,d.history?b?k.replaceState(null,"",a):(k.pushState(null,"",a),E.attr("href",E.attr("href"))):b?j.replace(a):j.href=a,f}else return j.href.replace(/%27/g,"'")};var w=[],P=!1;f.onUrlChange=function(a){P||(d.history&&u(b).bind("popstate",h),d.hashchange?u(b).bind("hashchange",h):f.addPollFn(h),P=!0);w.push(a);return a};f.baseHref=function(){var a=
E.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):a};var V={},z="",M=f.baseHref();f.cookies=function(a,b){var d,e,f,g;if(a)if(b===s)i.cookie=escape(a)+"=;path="+M+";expires=Thu, 01 Jan 1970 00:00:00 GMT";else{if(F(b))d=(i.cookie=escape(a)+"="+escape(b)+";path="+M).length+1,d>4096&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"),V.length>20&&c.warn("Cookie '"+a+"' possibly not set or overflowed because too many cookies were already set ("+
V.length+" > 20 )")}else{if(i.cookie!==z){z=i.cookie;d=z.split("; ");V={};for(f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),g>0&&(V[unescape(e.substring(0,g))]=unescape(e.substring(g+1)))}return V}};f.defer=function(a,b){var c;o++;c=l(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};f.defer.cancel=function(a){return p[a]?(delete p[a],n(a),e(C),!0):!1}}function xc(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new wc(b,d,a,c)}]}function yc(){this.$get=function(){function b(b,
d){function e(a){if(a!=l){if(n){if(n==a)n=a.n}else n=a;g(a.n,a.p);g(a,l);l=a;l.n=null}}function g(a,b){if(a!=b){if(a)a.p=b;if(b)b.n=a}}if(b in a)throw y("cacheId "+b+" taken");var h=0,f=D({},d,{id:b}),i={},j=d&&d.capacity||Number.MAX_VALUE,k={},l=null,n=null;return a[b]={put:function(a,b){var c=k[a]||(k[a]={key:a});e(c);v(b)||(a in i||h++,i[a]=b,h>j&&this.remove(n.key))},get:function(a){var b=k[a];if(b)return e(b),i[a]},remove:function(a){var b=k[a];if(b==l)l=b.p;if(b==n)n=b.n;g(b.n,b.p);delete k[a];
delete i[a];h--},removeAll:function(){i={};h=0;k={};l=n=null},destroy:function(){k=f=i=null;delete a[b]},info:function(){return D({},f,{size:h})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function zc(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Cb(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g="Template must have exactly one root element. was: ";
this.directive=function f(d,e){F(d)?(qa(e,"directive"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];m(a[d],function(a){try{var f=b.invoke(a);if(L(f))f={compile:J(f)};else if(!f.compile&&f.link)f.compile=J(f.link);f.priority=f.priority||0;f.name=f.name||d;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(g){c(g)}});return e}])),a[d].push(e)):m(d,nb(f));return this};this.$get=["$injector","$interpolate","$exceptionHandler",
"$http","$templateCache","$parse","$controller","$rootScope",function(b,i,j,k,l,n,p,o){function t(a,b,c){a instanceof u||(a=u(a));m(a,function(b,c){b.nodeType==3&&(a[c]=u(b).wrap("<span></span>").parent()[0])});var d=r(a,b,a,c);return function(b,c){qa(b,"scope");var e=c?ua.clone.call(a):a;e.data("$scope",b);q(e,"ng-scope");c&&c(e,b);d&&d(b,e,e);return e}}function q(a,b){try{a.addClass(b)}catch(c){}}function r(a,b,c,d){function e(a,c,d,g){for(var j,i,n,k,l,o=0,p=0,q=f.length;o<q;p++)n=c[p],j=f[o++],
i=f[o++],j?(j.scope?(k=a.$new(I(j.scope)),u(n).data("$scope",k)):k=a,(l=j.transclude)||!g&&b?j(i,k,n,d,function(b){return function(c){var d=a.$new();return b(d,c).bind("$destroy",Wa(d,d.$destroy))}}(l||b)):j(i,k,n,s,g)):i&&i(a,n.childNodes,s,g)}for(var f=[],g,j,i,n=0;n<a.length;n++)j=new ea,g=da(a[n],[],j,d),j=(g=g.length?E(g,a[n],j,b,c):null)&&g.terminal?null:r(a[n].childNodes,g?g.transclude:b),f.push(g),f.push(j),i=i||g||j;return i?e:null}function da(a,b,c,f){var g=c.$attr,j;switch(a.nodeType){case 1:w(b,
fa(Db(a).toLowerCase()),"E",f);var i,n,k;j=a.attributes;for(var l=0,o=j&&j.length;l<o;l++)if(i=j[l],i.specified)n=i.name,k=fa(n.toLowerCase()),g[k]=n,c[k]=i=Q(Z&&n=="href"?decodeURIComponent(a.getAttribute(n,2)):i.value),zb(a,k)&&(c[k]=!0),W(a,b,i,k),w(b,k,"A",f);a=a.className;if(F(a))for(;j=e.exec(a);)k=fa(j[2]),w(b,k,"C",f)&&(c[k]=Q(j[3])),a=a.substr(j.index+j[0].length);break;case 3:H(b,a.nodeValue);break;case 8:try{if(j=d.exec(a.nodeValue))k=fa(j[1]),w(b,k,"M",f)&&(c[k]=Q(j[2]))}catch(p){}}b.sort(z);
return b}function E(a,b,c,d,e){function f(a,b){if(a)a.require=A.require,o.push(a);if(b)b.require=A.require,$.push(b)}function i(a,b){var c,d="data",e=!1;if(F(a)){for(;(c=a.charAt(0))=="^"||c=="?";)a=a.substr(1),c=="^"&&(d="inheritedData"),e=e||c=="?";c=b[d]("$"+a+"Controller");if(!c&&!e)throw y("No controller: "+a);}else K(a)&&(c=[],m(a,function(a){c.push(i(a,b))}));return c}function k(a,d,e,f,g){var l,q,P,t,Ha;l=b===e?c:ic(c,new ea(u(e),c.$attr));q=l.$$element;if(r&&I(r.scope)){var E=/^\s*([@=&])\s*(\w*)\s*$/,
z=d.$parent||d;m(r.scope,function(a,b){var c=a.match(E)||[],e=c[2]||b,f,g,j;switch(c[1]){case "@":l.$observe(e,function(a){d[b]=a});l.$$observers[e].$$scope=z;break;case "=":g=n(l[e]);j=g.assign||function(){f=d[b]=g(z);throw y(Eb+l[e]+" (directive: "+r.name+")");};f=d[b]=g(z);d.$watch(function(){var a=g(z);a!==d[b]&&(a!==f?f=d[b]=a:j(z,f=d[b]));return a});break;case "&":g=n(l[e]);d[b]=function(a){return g(z,a)};break;default:throw y("Invalid isolate scope definition for directive "+r.name+": "+a);
}})}x&&m(x,function(a){var b={$scope:d,$element:q,$attrs:l,$transclude:g};Ha=a.controller;Ha=="@"&&(Ha=l[a.name]);q.data("$"+a.name+"Controller",p(Ha,b))});f=0;for(P=o.length;f<P;f++)try{t=o[f],t(d,q,l,t.require&&i(t.require,q))}catch(w){j(w,pa(q))}a&&a(d,e.childNodes,s,g);f=0;for(P=$.length;f<P;f++)try{t=$[f],t(d,q,l,t.require&&i(t.require,q))}catch(Ia){j(Ia,pa(q))}}for(var l=-Number.MAX_VALUE,o=[],$=[],r=null,E=null,w=null,z=c.$$element=u(b),A,H,W,C,v=d,x,D,X,B=0,G=a.length;B<G;B++){A=a[B];W=s;
if(l>A.priority)break;if(X=A.scope)M("isolated scope",E,A,z),I(X)&&(q(z,"ng-isolate-scope"),E=A),q(z,"ng-scope"),r=r||A;H=A.name;if(X=A.controller)x=x||{},M("'"+H+"' controller",x[H],A,z),x[H]=A;if(X=A.transclude)M("transclusion",C,A,z),C=A,l=A.priority,X=="element"?(W=u(b),z=c.$$element=u("<\!-- "+H+": "+c[H]+" --\>"),b=z[0],Ga(e,u(W[0]),b),v=t(W,d,l)):(W=u(db(b)).contents(),z.html(""),v=t(W,d));if(X=A.template)if(M("template",w,A,z),w=A,X=Ia(X),A.replace){W=u("<div>"+Q(X)+"</div>").contents();b=
W[0];if(W.length!=1||b.nodeType!==1)throw new y(g+X);Ga(e,z,b);H={$attr:{}};a=a.concat(da(b,a.splice(B+1,a.length-(B+1)),H));P(c,H);G=a.length}else z.html(X);if(A.templateUrl)M("template",w,A,z),w=A,k=V(a.splice(B,a.length-B),k,z,c,e,A.replace,v),G=a.length;else if(A.compile)try{D=A.compile(z,c,v),L(D)?f(null,D):D&&f(D.pre,D.post)}catch(J){j(J,pa(z))}if(A.terminal)k.terminal=!0,l=Math.max(l,A.priority)}k.scope=r&&r.scope;k.transclude=C&&v;return k}function w(d,e,g,i){var n=!1;if(a.hasOwnProperty(e))for(var k,
e=b.get(e+c),l=0,o=e.length;l<o;l++)try{if(k=e[l],(i===s||i>k.priority)&&k.restrict.indexOf(g)!=-1)d.push(k),n=!0}catch(p){j(p)}return n}function P(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){e.charAt(0)!="$"&&(b[e]&&(d+=(e==="style"?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){f=="class"?(q(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):f=="style"?e.attr("style",e.attr("style")+";"+b):f.charAt(0)!="$"&&!a.hasOwnProperty(f)&&(a[f]=b,d[f]=c[f])})}function V(a,b,c,d,e,
f,j){var i=[],n,o,p=c[0],q=a.shift(),t=D({},q,{controller:null,templateUrl:null,transclude:null});c.html("");k.get(q.templateUrl,{cache:l}).success(function(k){var l,q,k=Ia(k);if(f){q=u("<div>"+Q(k)+"</div>").contents();l=q[0];if(q.length!=1||l.nodeType!==1)throw new y(g+k);k={$attr:{}};Ga(e,c,l);da(l,a,k);P(d,k)}else l=p,c.html(k);a.unshift(t);n=E(a,c,d,j);for(o=r(c.contents(),j);i.length;){var $=i.pop(),k=i.pop();q=i.pop();var z=i.pop(),m=l;q!==p&&(m=db(l),Ga(k,u(q),m));n(function(){b(o,z,m,e,$)},
z,m,e,$)}i=null}).error(function(a,b,c,d){throw y("Failed to load template: "+d.url);});return function(a,c,d,e,f){i?(i.push(c),i.push(d),i.push(e),i.push(f)):n(function(){b(o,c,d,e,f)},c,d,e,f)}}function z(a,b){return b.priority-a.priority}function M(a,b,c,d){if(b)throw y("Multiple directives ["+b.name+", "+c.name+"] asking for "+a+" on: "+pa(d));}function H(a,b){var c=i(b,!0);c&&a.push({priority:0,compile:J(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);q(d.data("$binding",e),
"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function W(a,b,c,d){var e=i(c,!0);e&&b.push({priority:100,compile:J(function(a,b,c){b=c.$$observers||(c.$$observers={});d==="class"&&(e=i(c[d],!0));c[d]=s;(b[d]||(b[d]=[])).$$inter=!0;(c.$$observers&&c.$$observers[d].$$scope||a).$watch(e,function(a){c.$set(d,a)})})})}function Ga(a,b,c){var d=b[0],e=d.parentNode,f,g;if(a){f=0;for(g=a.length;f<g;f++)if(a[f]==d){a[f]=c;break}}e&&e.replaceChild(c,d);c[u.expando]=d[u.expando];b[0]=c}var ea=function(a,
b){this.$$element=a;this.$attr=b||{}};ea.prototype={$normalize:fa,$set:function(a,b,c,d){var e=zb(this.$$element[0],a),f=this.$$observers;e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=ab(a,"-"));c!==!1&&(b===null||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));f&&m(f[a],function(a){try{a(b)}catch(c){j(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);o.$evalAsync(function(){e.$$inter||
b(c[a])});return b}};var C=i.startSymbol(),$=i.endSymbol(),Ia=C=="{{"||$=="}}"?ma:function(a){return a.replace(/\{\{/g,C).replace(/}}/g,$)};return t}]}function fa(b){return sb(b.replace(Ac,""))}function Bc(){var b={};this.register=function(a,c){I(a)?D(b,a):b[a]=c};this.$get=["$injector","$window",function(a,c){return function(d,e){if(F(d)){var g=d,d=b.hasOwnProperty(g)?b[g]:gb(e.$scope,g,!0)||gb(c,g,!0);ra(d,g,!0)}return a.instantiate(d,e)}}]}function Cc(){this.$get=["$window",function(b){return u(b.document)}]}
function Dc(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Ec(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler",function(c,d){function e(e,i){for(var j,k,l=0,n=[],p=e.length,o=!1,t=[];l<p;)(j=e.indexOf(b,l))!=-1&&(k=e.indexOf(a,j+g))!=-1?(l!=j&&n.push(e.substring(l,j)),n.push(l=c(o=e.substring(j+g,k))),l.exp=o,l=k+h,o=!0):(l!=p&&n.push(e.substring(l)),
l=p);if(!(p=n.length))n.push(""),p=1;if(!i||o)return t.length=p,l=function(a){try{for(var b=0,c=p,g;b<c;b++){if(typeof(g=n[b])=="function")g=g(a),g==null||g==s?g="":typeof g!="string"&&(g=ba(g));t[b]=g}return t.join("")}catch(j){a=new y("Error while interpolating: "+e+"\n"+j.toString()),d(a)}},l.exp=e,l.parts=n,l}var g=b.length,h=a.length;e.startSymbol=function(){return b};e.endSymbol=function(){return a};return e}]}function Fb(b){for(var b=b.split("/"),a=b.length;a--;)b[a]=$a(b[a]);return b.join("/")}
function va(b,a){var c=Gb.exec(b),c={protocol:c[1],host:c[3],port:G(c[5])||Hb[c[1]]||null,path:c[6]||"/",search:c[8],hash:c[10]};if(a)a.$$protocol=c.protocol,a.$$host=c.host,a.$$port=c.port;return c}function ka(b,a,c){return b+"://"+a+(c==Hb[b]?"":":"+c)}function Fc(b,a,c){var d=va(b);return decodeURIComponent(d.path)!=a||v(d.hash)||d.hash.indexOf(c)!==0?b:ka(d.protocol,d.host,d.port)+a.substr(0,a.lastIndexOf("/"))+d.hash.substr(c.length)}function Gc(b,a,c){var d=va(b);if(decodeURIComponent(d.path)==
a)return b;else{var e=d.search&&"?"+d.search||"",g=d.hash&&"#"+d.hash||"",h=a.substr(0,a.lastIndexOf("/")),f=d.path.substr(h.length);if(d.path.indexOf(h)!==0)throw y('Invalid url "'+b+'", missing path prefix "'+h+'" !');return ka(d.protocol,d.host,d.port)+a+"#"+c+f+e+g}}function hb(b,a,c){a=a||"";this.$$parse=function(b){var c=va(b,this);if(c.path.indexOf(a)!==0)throw y('Invalid url "'+b+'", missing path prefix "'+a+'" !');this.$$path=decodeURIComponent(c.path.substr(a.length));this.$$search=Ya(c.search);
this.$$hash=c.hash&&decodeURIComponent(c.hash)||"";this.$$compose()};this.$$compose=function(){var b=pb(this.$$search),c=this.$$hash?"#"+$a(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+a+this.$$url};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Ja(b,a,c){var d;this.$$parse=function(b){var c=va(b,this);if(c.hash&&c.hash.indexOf(a)!==0)throw y('Invalid url "'+b+'", missing hash prefix "'+
a+'" !');d=c.path+(c.search?"?"+c.search:"");c=Hc.exec((c.hash||"").substr(a.length));this.$$path=c[1]?(c[1].charAt(0)=="/"?"":"/")+decodeURIComponent(c[1]):"";this.$$search=Ya(c[3]);this.$$hash=c[5]&&decodeURIComponent(c[5])||"";this.$$compose()};this.$$compose=function(){var b=pb(this.$$search),c=this.$$hash?"#"+$a(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+d+(this.$$url?"#"+a+this.$$url:"")};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==
0)return a};this.$$parse(b)}function Ib(b,a,c,d){Ja.apply(this,arguments);this.$$rewriteAppUrl=function(b){if(b.indexOf(c)==0)return c+d+"#"+a+b.substr(c.length)}}function Ka(b){return function(){return this[b]}}function Jb(b,a){return function(c){if(v(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ic(){var b="",a=!1;this.hashPrefix=function(a){return x(a)?(b=a,this):b};this.html5Mode=function(b){return x(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",
function(c,d,e,g){function h(a){c.$broadcast("$locationChangeSuccess",f.absUrl(),a)}var f,i,j,k=d.url(),l=va(k);a?(i=d.baseHref()||"/",j=i.substr(0,i.lastIndexOf("/")),l=ka(l.protocol,l.host,l.port)+j+"/",f=e.history?new hb(Fc(k,i,b),j,l):new Ib(Gc(k,i,b),b,l,i.substr(j.length+1))):(l=ka(l.protocol,l.host,l.port)+(l.path||"")+(l.search?"?"+l.search:"")+"#"+b+"/",f=new Ja(k,b,l));g.bind("click",function(a){if(!a.ctrlKey&&!(a.metaKey||a.which==2)){for(var b=u(a.target);B(b[0].nodeName)!=="a";)if(b[0]===
g[0]||!(b=b.parent())[0])return;var d=b.prop("href"),e=f.$$rewriteAppUrl(d);d&&!b.attr("target")&&e&&(f.$$parse(e),c.$apply(),a.preventDefault(),T.angular["ff-684208-preventDefault"]=!0)}});f.absUrl()!=k&&d.url(f.absUrl(),!0);d.onUrlChange(function(a){f.absUrl()!=a&&(c.$evalAsync(function(){var b=f.absUrl();f.$$parse(a);h(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url();if(!n||a!=f.absUrl())n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",f.absUrl(),a).defaultPrevented?
f.$$parse(a):(d.url(f.absUrl(),f.$$replace),f.$$replace=!1,h(a))});return n});return f}]}function Jc(){this.$get=["$window",function(b){function a(a){a instanceof y&&(a.stack?a=a.message&&a.stack.indexOf(a.message)===-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function c(c){var e=b.console||{},g=e[c]||e.log||C;return g.apply?function(){var b=[];m(arguments,function(c){b.push(a(c))});return g.apply(e,b)}:function(a,b){g(a,b)}}return{log:c("log"),
warn:c("warn"),info:c("info"),error:c("error")}}]}function Kc(b,a){function c(a){return a.indexOf(q)!=-1}function d(){return o+1<b.length?b.charAt(o+1):!1}function e(a){return"0"<=a&&a<="9"}function g(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||a=="\u000b"||a=="\u00a0"}function h(a){return"a"<=a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function f(a){return a=="-"||a=="+"||e(a)}function i(a,c,d){d=d||o;throw y("Lexer Error: "+a+" at column"+(x(c)?"s "+c+"-"+o+" ["+b.substring(c,d)+"]":" "+d)+" in expression ["+
b+"].");}function j(){for(var a="",c=o;o<b.length;){var g=B(b.charAt(o));if(g=="."||e(g))a+=g;else{var j=d();if(g=="e"&&f(j))a+=g;else if(f(g)&&j&&e(j)&&a.charAt(a.length-1)=="e")a+=g;else if(f(g)&&(!j||!e(j))&&a.charAt(a.length-1)=="e")i("Invalid exponent");else break}o++}a*=1;n.push({index:c,text:a,json:!0,fn:function(){return a}})}function k(){for(var c="",d=o,f,j,i;o<b.length;){var k=b.charAt(o);if(k=="."||h(k)||e(k))k=="."&&(f=o),c+=k;else break;o++}if(f)for(j=o;j<b.length;){k=b.charAt(j);if(k==
"("){i=c.substr(f-d+1);c=c.substr(0,f-d);o=j;break}if(g(k))j++;else break}d={index:d,text:c};if(La.hasOwnProperty(c))d.fn=d.json=La[c];else{var l=Kb(c,a);d.fn=D(function(a,b){return l(a,b)},{assign:function(a,b){return Lb(a,c,b)}})}n.push(d);i&&(n.push({index:f,text:".",json:!1}),n.push({index:f+1,text:i,json:!1}))}function l(a){var c=o;o++;for(var d="",e=a,f=!1;o<b.length;){var g=b.charAt(o);e+=g;if(f)g=="u"?(g=b.substring(o+1,o+5),g.match(/[\da-f]{4}/i)||i("Invalid unicode escape [\\u"+g+"]"),o+=
4,d+=String.fromCharCode(parseInt(g,16))):(f=Lc[g],d+=f?f:g),f=!1;else if(g=="\\")f=!0;else if(g==a){o++;n.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}else d+=g;o++}i("Unterminated quote",c)}for(var n=[],p,o=0,t=[],q,r=":";o<b.length;){q=b.charAt(o);if(c("\"'"))l(q);else if(e(q)||c(".")&&e(d()))j();else if(h(q)){if(k(),"{,".indexOf(r)!=-1&&t[0]=="{"&&(p=n[n.length-1]))p.json=p.text.indexOf(".")==-1}else if(c("(){}[].,;:"))n.push({index:o,text:q,json:":[,".indexOf(r)!=-1&&
c("{[")||c("}]:,")}),c("{[")&&t.unshift(q),c("}]")&&t.shift(),o++;else if(g(q)){o++;continue}else{var m=q+d(),E=La[q],w=La[m];w?(n.push({index:o,text:m,fn:w}),o+=2):E?(n.push({index:o,text:q,fn:E,json:"[,:".indexOf(r)!=-1&&c("+-")}),o+=1):i("Unexpected next character ",o,o+1)}r=q}return n}function Mc(b,a,c,d){function e(a,c){throw y("Syntax Error: Token '"+c.text+"' "+a+" at column "+(c.index+1)+" of the expression ["+b+"] starting at ["+b.substring(c.index)+"].");}function g(){if(M.length===0)throw y("Unexpected end of expression: "+
b);return M[0]}function h(a,b,c,d){if(M.length>0){var e=M[0],f=e.text;if(f==a||f==b||f==c||f==d||!a&&!b&&!c&&!d)return e}return!1}function f(b,c,d,f){return(b=h(b,c,d,f))?(a&&!b.json&&e("is not valid json",b),M.shift(),b):!1}function i(a){f(a)||e("is unexpected, expecting ["+a+"]",h())}function j(a,b){return function(c,d){return a(c,d,b)}}function k(a,b,c){return function(d,e){return b(d,e,a,c)}}function l(){for(var a=[];;)if(M.length>0&&!h("}",")",";","]")&&a.push(v()),!f(";"))return a.length==1?
a[0]:function(b,c){for(var d,e=0;e<a.length;e++){var f=a[e];f&&(d=f(b,c))}return d}}function n(){for(var a=f(),b=c(a.text),d=[];;)if(a=f(":"))d.push(H());else{var e=function(a,c,e){for(var e=[e],f=0;f<d.length;f++)e.push(d[f](a,c));return b.apply(a,e)};return function(){return e}}}function p(){for(var a=o(),b;;)if(b=f("||"))a=k(a,b.fn,o());else return a}function o(){var a=t(),b;if(b=f("&&"))a=k(a,b.fn,o());return a}function t(){var a=q(),b;if(b=f("==","!="))a=k(a,b.fn,t());return a}function q(){var a;
a=r();for(var b;b=f("+","-");)a=k(a,b.fn,r());if(b=f("<",">","<=",">="))a=k(a,b.fn,q());return a}function r(){for(var a=m(),b;b=f("*","/","%");)a=k(a,b.fn,m());return a}function m(){var a;return f("+")?E():(a=f("-"))?k(V,a.fn,m()):(a=f("!"))?j(a.fn,m()):E()}function E(){var a;if(f("("))a=v(),i(")");else if(f("["))a=w();else if(f("{"))a=P();else{var b=f();(a=b.fn)||e("not a primary expression",b)}for(var c;b=f("(","[",".");)b.text==="("?(a=u(a,c),c=null):b.text==="["?(c=a,a=ea(a)):b.text==="."?(c=
a,a=x(a)):e("IMPOSSIBLE");return a}function w(){var a=[];if(g().text!="]"){do a.push(H());while(f(","))}i("]");return function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d}}function P(){var a=[];if(g().text!="}"){do{var b=f(),b=b.string||b.text;i(":");var c=H();a.push({key:b,value:c})}while(f(","))}i("}");return function(b,c){for(var d={},e=0;e<a.length;e++){var f=a[e],g=f.value(b,c);d[f.key]=g}return d}}var V=J(0),z,M=Kc(b,d),H=function(){var a=p(),c,d;return(d=f("="))?(a.assign||
e("implies assignment but ["+b.substring(0,d.index)+"] can not be assigned to",d),c=p(),function(b,d){return a.assign(b,c(b,d),d)}):a},u=function(a,b){var c=[];if(g().text!=")"){do c.push(H());while(f(","))}i(")");return function(d,e){for(var f=[],g=b?b(d,e):d,j=0;j<c.length;j++)f.push(c[j](d,e));j=a(d,e)||C;return j.apply?j.apply(g,f):j(f[0],f[1],f[2],f[3],f[4])}},x=function(a){var b=f().text,c=Kb(b,d);return D(function(b,d){return c(a(b,d),d)},{assign:function(c,d,e){return Lb(a(c,e),b,d)}})},ea=
function(a){var b=H();i("]");return D(function(c,d){var e=a(c,d),f=b(c,d),g;if(!e)return s;if((e=e[f])&&e.then){g=e;if(!("$$v"in e))g.$$v=s,g.then(function(a){g.$$v=a});e=e.$$v}return e},{assign:function(c,d,e){return a(c,e)[b(c,e)]=d}})},v=function(){for(var a=H(),b;;)if(b=f("|"))a=k(a,b.fn,n());else return a};a?(H=p,u=x=ea=v=function(){e("is not valid json",{text:b,index:0})},z=E()):z=l();M.length!==0&&e("is an unexpected token",M[0]);return z}function Lb(b,a,c){for(var a=a.split("."),d=0;a.length>
1;d++){var e=a.shift(),g=b[e];g||(g={},b[e]=g);b=g}return b[a.shift()]=c}function gb(b,a,c){if(!a)return b;for(var a=a.split("."),d,e=b,g=a.length,h=0;h<g;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&L(b)?Wa(e,b):b}function Mb(b,a,c,d,e){return function(g,h){var f=h&&h.hasOwnProperty(b)?h:g,i;if(f===null||f===s)return f;if((f=f[b])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}if(!a||f===null||f===s)return f;if((f=f[a])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=
a});f=f.$$v}if(!c||f===null||f===s)return f;if((f=f[c])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}if(!d||f===null||f===s)return f;if((f=f[d])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}if(!e||f===null||f===s)return f;if((f=f[e])&&f.then){if(!("$$v"in f))i=f,i.$$v=s,i.then(function(a){i.$$v=a});f=f.$$v}return f}}function Kb(b,a){if(ib.hasOwnProperty(b))return ib[b];var c=b.split("."),d=c.length,e;if(a)e=d<6?Mb(c[0],c[1],c[2],c[3],c[4]):
function(a,b){var e=0,g;do g=Mb(c[e++],c[e++],c[e++],c[e++],c[e++])(a,b),b=s,a=g;while(e<d);return g};else{var g="var l, fn, p;\n";m(c,function(a,b){g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});g+="return s;";e=Function("s","k",g);e.toString=function(){return g}}return ib[b]=e}function Nc(){var b={};this.$get=
["$filter","$sniffer",function(a,c){return function(d){switch(typeof d){case "string":return b.hasOwnProperty(d)?b[d]:b[d]=Mc(d,!1,a,c.csp);case "function":return d;default:return C}}}]}function Oc(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Pc(function(a){b.$evalAsync(a)},a)}]}function Pc(b,a){function c(a){return a}function d(a){return h(a)}var e=function(){var f=[],i,j;return j={resolve:function(a){if(f){var c=f;f=s;i=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<
d;b++)a=c[b],i.then(a[0],a[1])})}},reject:function(a){j.resolve(h(a))},promise:{then:function(b,g){var j=e(),h=function(d){try{j.resolve((b||c)(d))}catch(e){a(e),j.reject(e)}},o=function(b){try{j.resolve((g||d)(b))}catch(c){a(c),j.reject(c)}};f?f.push([h,o]):i.then(h,o);return j.promise}}}},g=function(a){return a&&a.then?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},h=function(a){return{then:function(c,g){var h=e();b(function(){h.resolve((g||d)(a))});return h.promise}}};
return{defer:e,reject:h,when:function(f,i,j){var k=e(),l,n=function(b){try{return(i||c)(b)}catch(d){return a(d),h(d)}},p=function(b){try{return(j||d)(b)}catch(c){return a(c),h(c)}};b(function(){g(f).then(function(a){l||(l=!0,k.resolve(g(a).then(n,p)))},function(a){l||(l=!0,k.resolve(p(a)))})});return k.promise},all:function(a){var b=e(),c=a.length,d=[];c?m(a,function(a,e){g(a).then(function(a){e in d||(d[e]=a,--c||b.resolve(d))},function(a){e in d||b.reject(a)})}):b.resolve(d);return b.promise}}}
function Qc(){var b={};this.when=function(a,c){b[a]=D({reloadOnSearch:!0},c);if(a){var d=a[a.length-1]=="/"?a.substr(0,a.length-1):a+"/";b[d]={redirectTo:a}}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache",function(a,c,d,e,g,h,f){function i(){var b=j(),i=p.current;if(b&&i&&b.$route===i.$route&&ga(b.pathParams,i.pathParams)&&!b.reloadOnSearch&&!n)i.params=b.params,U(i.params,d),a.$broadcast("$routeUpdate",
i);else if(b||i)n=!1,a.$broadcast("$routeChangeStart",b,i),(p.current=b)&&b.redirectTo&&(F(b.redirectTo)?c.path(k(b.redirectTo,b.params)).search(b.params).replace():c.url(b.redirectTo(b.pathParams,c.path(),c.search())).replace()),e.when(b).then(function(){if(b){var a=[],c=[],d;m(b.resolve||{},function(b,d){a.push(d);c.push(L(b)?g.invoke(b):g.get(b))});if(!x(d=b.template))if(x(d=b.templateUrl))d=h.get(d,{cache:f}).then(function(a){return a.data});x(d)&&(a.push("$template"),c.push(d));return e.all(c).then(function(b){var c=
{};m(b,function(b,d){c[a[d]]=b});return c})}}).then(function(c){if(b==p.current){if(b)b.locals=c,U(b.params,d);a.$broadcast("$routeChangeSuccess",b,i)}},function(c){b==p.current&&a.$broadcast("$routeChangeError",b,i,c)})}function j(){var a,d;m(b,function(b,e){if(!d&&(a=l(c.path(),e)))d=ya(b,{params:D({},c.search(),a),pathParams:a}),d.$route=b});return d||b[null]&&ya(b[null],{params:{},pathParams:{}})}function k(a,b){var c=[];m((a||"").split(":"),function(a,d){if(d==0)c.push(a);else{var e=a.match(/(\w+)(.*)/),
f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var l=function(a,b){var c="^"+b.replace(/([\.\\\(\)\^\$])/g,"\\$1")+"$",d=[],e={};m(b.split(/\W/),function(a){if(a){var b=RegExp(":"+a+"([\\W])");c.match(b)&&(c=c.replace(b,"([^\\/]*)$1"),d.push(a))}});var f=a.match(RegExp(c));f&&m(d,function(a,b){e[a]=f[b+1]});return f?e:null},n=!1,p={routes:b,reload:function(){n=!0;a.$evalAsync(i)}};a.$on("$locationChangeSuccess",i);return p}]}function Rc(){this.$get=J({})}function Sc(){var b=
10;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse",function(a,c,d){function e(){this.$id=xa();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$asyncQueue=[];this.$$listeners={}}function g(a){if(i.$$phase)throw y(i.$$phase+" already in progress");i.$$phase=a}function h(a,b){var c=d(a);ra(c,b);return c}function f(){}e.prototype={$new:function(a){if(L(a))throw y("API-CHANGE: Use $controller to instantiate controllers.");
a?(a=new e,a.$root=this.$root):(a=function(){},a.prototype=this,a=new a,a.$id=xa());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$asyncQueue=[];a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=h(a,"watch"),e=this.$$watchers,g={fn:b,last:f,get:d,exp:a,eq:!!c};if(!L(b)){var i=h(b||C,"listener");g.fn=function(a,b,
c){i(c)}}if(!e)e=this.$$watchers=[];e.unshift(g);return function(){za(e,g)}},$digest:function(){var a,d,e,h,p,o,m,q=b,r,s=[],E,w;g("$digest");do{m=!1;r=this;do{for(p=r.$$asyncQueue;p.length;)try{r.$eval(p.shift())}catch(P){c(P)}if(h=r.$$watchers)for(o=h.length;o--;)try{if(a=h[o],(d=a.get(r))!==(e=a.last)&&!(a.eq?ga(d,e):typeof d=="number"&&typeof e=="number"&&isNaN(d)&&isNaN(e)))m=!0,a.last=a.eq?U(d):d,a.fn(d,e===f?d:e,r),q<5&&(E=4-q,s[E]||(s[E]=[]),w=L(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):
a.exp,w+="; newVal: "+ba(d)+"; oldVal: "+ba(e),s[E].push(w))}catch(V){c(V)}if(!(h=r.$$childHead||r!==this&&r.$$nextSibling))for(;r!==this&&!(h=r.$$nextSibling);)r=r.$parent}while(r=h);if(m&&!q--)throw i.$$phase=null,y(b+" $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+ba(s));}while(m||p.length);i.$$phase=null},$destroy:function(){if(i!=this){var a=this.$parent;this.$broadcast("$destroy");if(a.$$childHead==this)a.$$childHead=this.$$nextSibling;if(a.$$childTail==
this)a.$$childTail=this.$$prevSibling;if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling}},$eval:function(a,b){return d(a)(this,b)},$evalAsync:function(a){this.$$asyncQueue.push(a)},$apply:function(a){try{return g("$apply"),this.$eval(a)}catch(b){c(b)}finally{i.$$phase=null;try{i.$digest()}catch(d){throw c(d),d;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){za(c,
b)}},$emit:function(a,b){var d=[],e,f=this,g=!1,i={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1},h=[i].concat(ha.call(arguments,1)),m,s;do{e=f.$$listeners[a]||d;i.currentScope=f;m=0;for(s=e.length;m<s;m++)try{if(e[m].apply(null,h),g)return i}catch(E){c(E)}f=f.$parent}while(f);return i},$broadcast:function(a,b){var d=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},
g=[f].concat(ha.call(arguments,1));do if(d=e,f.currentScope=d,m(d.$$listeners[a],function(a){try{a.apply(null,g)}catch(b){c(b)}}),!(e=d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent;while(d=e);return f}};var i=new e;return i}]}function Tc(){this.$get=["$window","$document",function(b,a){var c={},d=G((/android (\d+)/.exec(B(b.navigator.userAgent))||[])[1]),e=a[0];return{history:!(!b.history||!b.history.pushState||d<4),hashchange:"onhashchange"in b&&(!e.documentMode||
e.documentMode>7),hasEvent:function(a){if(a=="input"&&Z==9)return!1;if(v(c[a])){var b=e.createElement("div");c[a]="on"+a in b}return c[a]},csp:e.SecurityPolicy?e.SecurityPolicy.isActive():!1}}]}function Uc(){this.$get=J(T)}function Nb(b){var a={},c,d,e;if(!b)return a;m(b.split("\n"),function(b){e=b.indexOf(":");c=B(Q(b.substr(0,e)));d=Q(b.substr(e+1));c&&(a[c]?a[c]+=", "+d:a[c]=d)});return a}function Ob(b){var a=I(b)?b:s;return function(c){a||(a=Nb(b));return c?a[B(c)]||null:a}}function Pb(b,a,c){if(L(c))return c(b,
a);m(c,function(c){b=c(b,a)});return b}function Vc(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d=this.defaults={transformResponse:[function(d){F(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ob(d,!0)));return d}],transformRequest:[function(a){return I(a)&&Ta.apply(a)!=="[object File]"?ba(a):a}],headers:{common:{Accept:"application/json, text/plain, */*","X-Requested-With":"XMLHttpRequest"},post:{"Content-Type":"application/json;charset=utf-8"},put:{"Content-Type":"application/json;charset=utf-8"}}},
e=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,i,j,k){function l(a){function c(a){var b=D({},a,{data:Pb(a.data,a.headers,f)});return 200<=a.status&&a.status<300?b:j.reject(b)}a.method=la(a.method);var e=a.transformRequest||d.transformRequest,f=a.transformResponse||d.transformResponse,g=d.headers,g=D({"X-XSRF-TOKEN":b.cookies()["XSRF-TOKEN"]},g.common,g[B(a.method)],a.headers),e=Pb(a.data,Ob(g),e),i;v(a.data)&&delete g["Content-Type"];
i=n(a,e,g);i=i.then(c,c);m(t,function(a){i=a(i)});i.success=function(b){i.then(function(c){b(c.data,c.status,c.headers,a)});return i};i.error=function(b){i.then(null,function(c){b(c.data,c.status,c.headers,a)});return i};return i}function n(b,c,d){function e(a,b,c){m&&(200<=a&&a<300?m.put(s,[a,b,Nb(c)]):m.remove(s));f(b,a,c);i.$apply()}function f(a,c,d){c=Math.max(c,0);(200<=c&&c<300?k.resolve:k.reject)({data:a,status:c,headers:Ob(d),config:b})}function h(){var a=Va(l.pendingRequests,b);a!==-1&&l.pendingRequests.splice(a,
1)}var k=j.defer(),n=k.promise,m,t,s=p(b.url,b.params);l.pendingRequests.push(b);n.then(h,h);b.cache&&b.method=="GET"&&(m=I(b.cache)?b.cache:o);if(m)if(t=m.get(s))if(t.then)return t.then(h,h),t;else K(t)?f(t[1],t[0],U(t[2])):f(t,200,{});else m.put(s,n);t||a(b.method,s,c,e,d,b.timeout,b.withCredentials,b.responseType);return n}function p(a,b){if(!b)return a;var c=[];fc(b,function(a,b){a==null||a==s||(I(a)&&(a=ba(a)),c.push(encodeURIComponent(b)+"="+encodeURIComponent(a)))});return a+(a.indexOf("?")==
-1?"?":"&")+c.join("&")}var o=c("$http"),t=[];m(e,function(a){t.push(F(a)?k.get(a):k.invoke(a))});l.pendingRequests=[];(function(a){m(arguments,function(a){l[a]=function(b,c){return l(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){l[a]=function(b,c,d){return l(D(d||{},{method:a,url:b,data:c}))}})})("post","put");l.defaults=d;return l}]}function Wc(){this.$get=["$browser","$window","$document",function(b,a,c){return Xc(b,Yc,b.defer,a.angular.callbacks,
c[0],a.location.protocol.replace(":",""))}]}function Xc(b,a,c,d,e,g){function h(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;Z?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c)}return function(e,i,j,k,l,n,p,o){function t(a,c,d,e){c=(i.match(Gb)||["",g])[1]=="file"?d?200:404:c;a(c==1223?204:c,d,e);b.$$completeOutstandingRequest(C)}b.$$incOutstandingRequestCount();
i=i||b.url();if(B(e)=="jsonp"){var q="_"+(d.counter++).toString(36);d[q]=function(a){d[q].data=a};h(i.replace("JSON_CALLBACK","angular.callbacks."+q),function(){d[q].data?t(k,200,d[q].data):t(k,-2);delete d[q]})}else{var r=new a;r.open(e,i,!0);m(l,function(a,b){a&&r.setRequestHeader(b,a)});var s;r.onreadystatechange=function(){r.readyState==4&&t(k,s||r.status,r.response||r.responseText,r.getAllResponseHeaders())};if(p)r.withCredentials=!0;if(o)r.responseType=o;r.send(j||"");n>0&&c(function(){s=-1;
r.abort()},n)}}}function Zc(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return b===1?"one":"other"}}}}function $c(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,f,i){var j=c.defer(),
k=j.promise,l=x(i)&&!i,f=a.defer(function(){try{j.resolve(e())}catch(a){j.reject(a),d(a)}l||b.$apply()},f),i=function(){delete g[k.$$timeoutId]};k.$$timeoutId=f;g[f]=j;k.then(i,i);return k}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),a.defer.cancel(b.$$timeoutId)):!1};return e}]}function Qb(b){function a(a,e){return b.factory(a+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",
Rb);a("date",Sb);a("filter",ad);a("json",bd);a("limitTo",cd);a("lowercase",dd);a("number",Tb);a("orderBy",Ub);a("uppercase",ed)}function ad(){return function(b,a){if(!(b instanceof Array))return b;var c=[];c.check=function(a){for(var b=0;b<c.length;b++)if(!c[b](a))return!1;return!0};var d=function(a,b){if(b.charAt(0)==="!")return!d(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return(""+a).toLowerCase().indexOf(b)>-1;case "object":for(var c in a)if(c.charAt(0)!=="$"&&
d(a[c],b))return!0;return!1;case "array":for(c=0;c<a.length;c++)if(d(a[c],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var e in a)e=="$"?function(){var b=(""+a[e]).toLowerCase();b&&c.push(function(a){return d(a,b)})}():function(){var b=e,f=(""+a[e]).toLowerCase();f&&c.push(function(a){return d(gb(a,b),f)})}();break;case "function":c.push(a);break;default:return b}for(var g=[],h=0;h<b.length;h++){var f=b[h];c.check(f)&&
g.push(f)}return g}}function Rb(b){var a=b.NUMBER_FORMATS;return function(b,d){if(v(d))d=a.CURRENCY_SYM;return Vb(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Tb(b){var a=b.NUMBER_FORMATS;return function(b,d){return Vb(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Vb(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=b<0,b=Math.abs(b),h=b+"",f="",i=[];if(h.indexOf("e")!==-1)f=h;else{h=(h.split(Wb)[1]||"").length;v(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));
var h=Math.pow(10,e),b=Math.round(b*h)/h,b=(""+b).split(Wb),h=b[0],b=b[1]||"",j=0,k=a.lgSize,l=a.gSize;if(h.length>=k+l)for(var j=h.length-k,n=0;n<j;n++)(j-n)%l===0&&n!==0&&(f+=c),f+=h.charAt(n);for(n=j;n<h.length;n++)(h.length-n)%k===0&&n!==0&&(f+=c),f+=h.charAt(n);for(;b.length<e;)b+="0";e&&(f+=d+b.substr(0,e))}i.push(g?a.negPre:a.posPre);i.push(f);i.push(g?a.negSuf:a.posSuf);return i.join("")}function jb(b,a,c){var d="";b<0&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));
return d+b}function N(b,a,c,d){return function(e){e=e["get"+b]();if(c>0||e>-c)e+=c;e===0&&c==-12&&(e=12);return jb(e,a,d)}}function Ma(b,a){return function(c,d){var e=c["get"+b](),g=la(a?"SHORT"+b:b);return d[g][e]}}function Sb(b){function a(a){var b;if(b=a.match(c)){var a=new Date(0),g=0,h=0;b[9]&&(g=G(b[9]+b[10]),h=G(b[9]+b[11]));a.setUTCFullYear(G(b[1]),G(b[2])-1,G(b[3]));a.setUTCHours(G(b[4]||0)-g,G(b[5]||0)-h,G(b[6]||0),G(b[7]||0))}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;
return function(c,e){var g="",h=[],f,i,e=e||"mediumDate",e=b.DATETIME_FORMATS[e]||e;F(c)&&(c=fd.test(c)?G(c):a(c));wa(c)&&(c=new Date(c));if(!na(c))return c;for(;e;)(i=gd.exec(e))?(h=h.concat(ha.call(i,1)),e=h.pop()):(h.push(e),e=null);m(h,function(a){f=hd[a];g+=f?f(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function bd(){return function(b){return ba(b,!0)}}function cd(){return function(b,a){if(!(b instanceof Array))return b;var a=G(a),c=[],d,e;if(!b||!(b instanceof
Array))return c;a>b.length?a=b.length:a<-b.length&&(a=-b.length);a>0?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Ub(b){return function(a,c,d){function e(a,b){return Xa(b)?function(b,c){return a(c,b)}:a}if(!(a instanceof Array))return a;if(!c)return a;for(var c=K(c)?c:[c],c=Ua(c,function(a){var c=!1,d=a||ma;if(F(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")c=a.charAt(0)=="-",a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;
f==g?(f=="string"&&(c=c.toLowerCase()),f=="string"&&(e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)}),g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e!==0)return e}return 0},d))}}function R(b){L(b)&&(b={link:b});b.restrict=b.restrict||"AC";return J(b)}function Xb(b,a){function c(a,c){c=c?"-"+ab(c,"-"):"";b.removeClass((a?Na:Oa)+c).addClass((a?Oa:Na)+c)}var d=this,e=b.parent().controller("form")||Pa,g=0,h=d.$error={};
d.$name=a.name;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Qa);c(!0);d.$addControl=function(a){a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];m(h,function(b,c){d.$setValidity(c,!0,a)})};d.$setValidity=function(a,b,j){var k=h[a];if(b){if(k&&(za(k,j),!k.length)){g--;if(!g)c(b),d.$valid=!0,d.$invalid=!1;h[a]=!1;c(!0,a);e.$setValidity(a,!0,d)}}else{g||c(b);if(k){if(Va(k,j)!=-1)return}else h[a]=
k=[],g++,c(!1,a),e.$setValidity(a,!1,d);k.push(j);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Qa).addClass(Yb);d.$dirty=!0;d.$pristine=!1}}function S(b){return v(b)||b===""||b===null||b!==b}function Ra(b,a,c,d,e,g){var h=function(){var c=Q(a.val());d.$viewValue!==c&&b.$apply(function(){d.$setViewValue(c)})};if(e.hasEvent("input"))a.bind("input",h);else{var f;a.bind("keydown",function(a){a=a.keyCode;a===91||15<a&&a<19||37<=a&&a<=40||f||(f=g.defer(function(){h();f=null}))});a.bind("change",
h)}d.$render=function(){a.val(S(d.$viewValue)?"":d.$viewValue)};var i=c.ngPattern,j=function(a,b){return S(b)||a.test(b)?(d.$setValidity("pattern",!0),b):(d.$setValidity("pattern",!1),s)};i&&(i.match(/^\/(.*)\/$/)?(i=RegExp(i.substr(1,i.length-2)),e=function(a){return j(i,a)}):e=function(a){var c=b.$eval(i);if(!c||!c.test)throw new y("Expected "+i+" to be a RegExp but was "+c);return j(c,a)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var k=G(c.ngMinlength),e=function(a){return!S(a)&&
a.length<k?(d.$setValidity("minlength",!1),s):(d.$setValidity("minlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var l=G(c.ngMaxlength),c=function(a){return!S(a)&&a.length>l?(d.$setValidity("maxlength",!1),s):(d.$setValidity("maxlength",!0),a)};d.$parsers.push(c);d.$formatters.push(c)}}function kb(b,a){b="ngClass"+b;return R(function(c,d,e){c.$watch(e[b],function(b,e){if(a===!0||c.$index%2===a)e&&b!==e&&(I(e)&&!K(e)&&(e=Ua(e,function(a,b){if(a)return b})),d.removeClass(K(e)?
e.join(" "):e)),I(b)&&!K(b)&&(b=Ua(b,function(a,b){if(a)return b})),b&&d.addClass(K(b)?b.join(" "):b)},!0)})}var B=function(b){return F(b)?b.toLowerCase():b},la=function(b){return F(b)?b.toUpperCase():b},y=T.Error,Z=G((/msie (\d+)/.exec(B(navigator.userAgent))||[])[1]),u,ia,ha=[].slice,Sa=[].push,Ta=Object.prototype.toString,Zb=T.angular||(T.angular={}),ta,Db,Y=["0","0","0"];C.$inject=[];ma.$inject=[];Db=Z<9?function(b){b=b.nodeName?b:b[0];return b.scopeName&&b.scopeName!="HTML"?la(b.scopeName+":"+
b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var lc=/[A-Z]/g,id={full:"1.1.0",major:1,minor:1,dot:0,codeName:"increase-gravatas"},Ba=O.cache={},Aa=O.expando="ng-"+(new Date).getTime(),pc=1,$b=T.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},eb=T.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},nc=/([\:\-\_]+(.))/g,oc=/^moz([A-Z])/,ua=
O.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;this.bind("DOMContentLoaded",a);O(T).bind("load",a)},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return b>=0?u(this[b]):u(this[this.length+b])},length:0,push:Sa,sort:[].sort,splice:[].splice},Ea={};m("multiple,selected,checked,disabled,readOnly,required".split(","),function(b){Ea[B(b)]=b});var Ab={};m("input,select,option,textarea,button,form".split(","),function(b){Ab[la(b)]=
!0});m({data:vb,inheritedData:Da,scope:function(b){return Da(b,"$scope")},controller:yb,injector:function(b){return Da(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ca,css:function(b,a,c){a=sb(a);if(x(c))b.style[a]=c;else{var d;Z<=8&&(d=b.currentStyle&&b.currentStyle[a],d===""&&(d="auto"));d=d||b.style[a];Z<=8&&(d=d===""?s:d);return d}},attr:function(b,a,c){var d=B(a);if(Ea[d])if(x(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||
C).specified?d:s;else if(x(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),b===null?s:b},prop:function(b,a,c){if(x(c))b[a]=c;else return b[a]},text:D(Z<9?function(b,a){if(b.nodeType==1){if(v(a))return b.innerText;b.innerText=a}else{if(v(a))return b.nodeValue;b.nodeValue=a}}:function(b,a){if(v(a))return b.textContent;b.textContent=a},{$dv:""}),val:function(b,a){if(v(a))return b.value;b.value=a},html:function(b,a){if(v(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)sa(d[c]);
b.innerHTML=a}},function(b,a){O.prototype[a]=function(a,d){var e,g;if((b.length==2&&b!==Ca&&b!==yb?a:d)===s)if(I(a)){for(e=0;e<this.length;e++)if(b===vb)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}else{if(this.length)return b(this[0],a,d)}else{for(e=0;e<this.length;e++)b(this[e],a,d);return this}return b.$dv}});m({removeData:tb,dealoc:sa,bind:function a(c,d,e){var g=ca(c,"events"),h=ca(c,"handle");g||ca(c,"events",g={});h||ca(c,"handle",h=qc(c,g));m(d.split(" "),function(d){var i=g[d];
if(!i){if(d=="mouseenter"||d=="mouseleave"){var j=0;g.mouseenter=[];g.mouseleave=[];a(c,"mouseover",function(a){j++;j==1&&h(a,"mouseenter")});a(c,"mouseout",function(a){j--;j==0&&h(a,"mouseleave")})}else $b(c,d,h),g[d]=[];i=g[d]}i.push(e)})},unbind:ub,replaceWith:function(a,c){var d,e=a.parentNode;sa(a);m(new O(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeName!="#text"&&c.push(a)});return c},contents:function(a){return a.childNodes},
append:function(a,c){m(new O(c),function(c){a.nodeType===1&&a.appendChild(c)})},prepend:function(a,c){if(a.nodeType===1){var d=a.firstChild;m(new O(c),function(c){d?a.insertBefore(c,d):(a.appendChild(c),d=c)})}},wrap:function(a,c){var c=u(c)[0],d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){sa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;m(new O(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:xb,removeClass:wb,toggleClass:function(a,
c,d){v(d)&&(d=!Ca(a,c));(d?xb:wb)(a,c)},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},next:function(a){return a.nextSibling},find:function(a,c){return a.getElementsByTagName(c)},clone:db},function(a,c){O.prototype[c]=function(c,e){for(var g,h=0;h<this.length;h++)g==s?(g=a(this[h],c,e),g!==s&&(g=u(g))):cb(g,a(this[h],c,e));return g==s?this:g}});Fa.prototype={put:function(a,c){this[ja(a)]=c},get:function(a){return this[ja(a)]},remove:function(a){var c=this[a=ja(a)];delete this[a];
return c}};fb.prototype={push:function(a,c){var d=this[a=ja(a)];d?d.push(c):this[a]=[c]},shift:function(a){var c=this[a=ja(a)];if(c)return c.length==1?(delete this[a],c[0]):c.shift()}};var sc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,tc=/,/,uc=/^\s*(_?)(.+?)\1\s*$/,rc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Eb="Non-assignable model expression: ";Cb.$inject=["$provide"];var Ac=/^(x[\:\-_]|data[\:\-_])/i,Gb=/^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,ac=/^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
Hc=ac,Hb={http:80,https:443,ftp:21};hb.prototype={$$replace:!1,absUrl:Ka("$$absUrl"),url:function(a,c){if(v(a))return this.$$url;var d=ac.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));if(d[2]||d[1])this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:Ka("$$protocol"),host:Ka("$$host"),port:Ka("$$port"),path:Jb("$$path",function(a){return a.charAt(0)=="/"?a:"/"+a}),search:function(a,c){if(v(a))return this.$$search;x(c)?c===null?delete this.$$search[a]:this.$$search[a]=c:this.$$search=
F(a)?Ya(a):a;this.$$compose();return this},hash:Jb("$$hash",ma),replace:function(){this.$$replace=!0;return this}};Ja.prototype=ya(hb.prototype);Ib.prototype=ya(Ja.prototype);var La={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:C,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return(x(d)?d:0)+(x(e)?e:0)},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(x(d)?d:0)-(x(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/
e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":C,"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&
e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Lc={n:"\n",f:"\u000c",r:"\r",t:"\t",v:"\u000b","'":"'",'"':'"'},ib={},Yc=T.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw new y("This browser does not support XMLHttpRequest.");};Qb.$inject=["$provide"];Rb.$inject=["$locale"];Tb.$inject=["$locale"];
var Wb=".",hd={yyyy:N("FullYear",4),yy:N("FullYear",2,0,!0),y:N("FullYear",1),MMMM:Ma("Month"),MMM:Ma("Month",!0),MM:N("Month",2,1),M:N("Month",1,1),dd:N("Date",2),d:N("Date",1),HH:N("Hours",2),H:N("Hours",1),hh:N("Hours",2,-12),h:N("Hours",1,-12),mm:N("Minutes",2),m:N("Minutes",1),ss:N("Seconds",2),s:N("Seconds",1),EEEE:Ma("Day"),EEE:Ma("Day",!0),a:function(a,c){return a.getHours()<12?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=a.getTimezoneOffset();return jb(a/60,2)+jb(Math.abs(a%60),2)}},gd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
fd=/^\d+$/;Sb.$inject=["$locale"];var dd=J(B),ed=J(la);Ub.$inject=["$parse"];var jd=J({restrict:"E",compile:function(a,c){c.href||c.$set("href","");return function(a,c){c.bind("click",function(a){c.attr("href")||a.preventDefault()})}}}),lb={};m(Ea,function(a,c){var d=fa("ng-"+c);lb[d]=function(){return{priority:100,compile:function(){return function(a,g,h){a.$watch(h[d],function(a){h.$set(c,!!a)})}}}}});m(["src","href"],function(a){var c=fa("ng-"+a);lb[c]=function(){return{priority:99,link:function(d,
e,g){g.$observe(c,function(c){g.$set(a,c);Z&&e.prop(a,c)})}}}});var Pa={$addControl:C,$removeControl:C,$setValidity:C,$setDirty:C};Xb.$inject=["$element","$attrs","$scope"];var Sa=function(a){return["$timeout",function(c){var d={name:"form",restrict:"E",controller:Xb,compile:function(){return{pre:function(a,d,h,f){if(!h.action){var i=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};$b(d[0],"submit",i);d.bind("$destroy",function(){c(function(){eb(d[0],"submit",i)},0,!1)})}var j=d.parent().controller("form"),
k=h.name||h.ngForm;k&&(a[k]=f);j&&d.bind("$destroy",function(){j.$removeControl(f);k&&(a[k]=s);D(f,Pa)})}}}};return a?D(U(d),{restrict:"EAC"}):d}]},kd=Sa(),ld=Sa(!0),md=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,nd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,od=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,bc={text:Ra,number:function(a,c,d,e,g,h){Ra(a,c,d,e,g,h);e.$parsers.push(function(a){var c=S(a);return c||od.test(a)?(e.$setValidity("number",!0),a===""?
null:c?a:parseFloat(a)):(e.$setValidity("number",!1),s)});e.$formatters.push(function(a){return S(a)?"":""+a});if(d.min){var f=parseFloat(d.min),a=function(a){return!S(a)&&a<f?(e.$setValidity("min",!1),s):(e.$setValidity("min",!0),a)};e.$parsers.push(a);e.$formatters.push(a)}if(d.max){var i=parseFloat(d.max),d=function(a){return!S(a)&&a>i?(e.$setValidity("max",!1),s):(e.$setValidity("max",!0),a)};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(a){return S(a)||wa(a)?(e.$setValidity("number",
!0),a):(e.$setValidity("number",!1),s)})},url:function(a,c,d,e,g,h){Ra(a,c,d,e,g,h);a=function(a){return S(a)||md.test(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),s)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,h){Ra(a,c,d,e,g,h);a=function(a){return S(a)||nd.test(a)?(e.$setValidity("email",!0),a):(e.$setValidity("email",!1),s)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){v(d.name)&&c.attr("name",xa());c.bind("click",function(){c[0].checked&&
a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,h=d.ngFalseValue;F(g)||(g=!0);F(h)||(h=!1);c.bind("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:h})},hidden:C,button:C,submit:C,reset:C},cc=["$browser","$sniffer",
function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,h){h&&(bc[B(g.type)]||bc.text)(d,e,g,h,c,a)}}}],Oa="ng-valid",Na="ng-invalid",Qa="ng-pristine",Yb="ng-dirty",pd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function h(a,c){c=c?"-"+ab(c,"-"):"";e.removeClass((a?Na:Oa)+c).addClass((a?Oa:Na)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=
!0;this.$invalid=!1;this.$name=d.name;var g=g(d.ngModel),f=g.assign;if(!f)throw y(Eb+d.ngModel+" ("+pa(e)+")");this.$render=C;var i=e.inheritedData("$formController")||Pa,j=0,k=this.$error={};e.addClass(Qa);h(!0);this.$setValidity=function(a,c){if(k[a]!==!c){if(c){if(k[a]&&j--,!j)h(!0),this.$valid=!0,this.$invalid=!1}else h(!1),this.$invalid=!0,this.$valid=!1,j++;k[a]=!c;h(c,a);i.$setValidity(a,c,this)}};this.$setViewValue=function(d){this.$viewValue=d;if(this.$pristine)this.$dirty=!0,this.$pristine=
!1,e.removeClass(Qa).addClass(Yb),i.$setDirty();m(this.$parsers,function(a){d=a(d)});if(this.$modelValue!==d)this.$modelValue=d,f(a,d),m(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};var l=this;a.$watch(g,function(a){if(l.$modelValue!==a){var c=l.$formatters,d=c.length;for(l.$modelValue=a;d--;)a=c[d](a);if(l.$viewValue!==a)l.$viewValue=a,l.$render()}})}],qd=function(){return{require:["ngModel","^?form"],controller:pd,link:function(a,c,d,e){var g=e[0],h=e[1]||Pa;h.$addControl(g);
c.bind("$destroy",function(){h.$removeControl(g)})}}},rd=J({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),dc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&(S(a)||a===!1))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},sd=function(){return{require:"ngModel",
link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){var c=[];a&&m(a.split(g),function(a){a&&c.push(Q(a))});return c});e.$formatters.push(function(a){return K(a)?a.join(", "):s})}}},td=/^(true|false|\d+)$/,ud=function(){return{priority:100,compile:function(a,c){return td.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a,!1)})}}}},vd=R(function(a,c,d){c.addClass("ng-binding").data("$binding",
d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),wd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],xd=[function(){return function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe,function(a){c.html(a||"")})}}],yd=kb("",!0),zd=kb("Odd",0),Ad=kb("Even",1),Bd=R({compile:function(a,c){c.$set("ngCloak",s);
a.removeClass("ng-cloak")}}),Cd=[function(){return{scope:!0,controller:"@"}}],Dd=["$sniffer",function(a){return{priority:1E3,compile:function(){a.csp=!0}}}],ec={};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "),function(a){var c=fa("ng-"+a);ec[c]=["$parse",function(d){return function(e,g,h){var f=d(h[c]);g.bind(B(a),function(a){e.$apply(function(){f(e,{$event:a})})})}}]});var Ed=R(function(a,c,d){c.bind("submit",function(){a.$apply(d.ngSubmit)})}),
Fd=["$http","$templateCache","$anchorScroll","$compile",function(a,c,d,e){return{restrict:"ECA",terminal:!0,compile:function(g,h){var f=h.ngInclude||h.src,i=h.onload||"",j=h.autoscroll;return function(g,h){var n=0,m,o=function(){m&&(m.$destroy(),m=null);h.html("")};g.$watch(f,function(f){var q=++n;f?a.get(f,{cache:c}).success(function(a){q===n&&(m&&m.$destroy(),m=g.$new(),h.html(a),e(h.contents())(m),x(j)&&(!j||g.$eval(j))&&d(),m.$emit("$includeContentLoaded"),g.$eval(i))}).error(function(){q===n&&
o()}):o()})}}}}],Gd=R({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Hd=R({terminal:!0,priority:1E3}),Id=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,h){var f=h.count,i=g.attr(h.$attr.when),j=h.offset||0,k=e.$eval(i),l={},n=c.startSymbol(),p=c.endSymbol();m(k,function(a,e){l[e]=c(a.replace(d,n+f+"-"+j+p))});e.$watch(function(){var c=parseFloat(e.$eval(f));return isNaN(c)?"":(k[c]||(c=a.pluralCat(c-j)),l[c](e,g,!0))},function(a){g.text(a)})}}}],
Jd=R({transclude:"element",priority:1E3,terminal:!0,compile:function(a,c,d){return function(a,c,h){var f=h.ngRepeat,h=f.match(/^\s*(.+)\s+in\s+(.*)\s*$/),i,j,k;if(!h)throw y("Expected ngRepeat in form of '_item_ in _collection_' but got '"+f+"'.");f=h[1];i=h[2];h=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!h)throw y("'item' in 'item in collection' should be identifier or (key, value) but got '"+f+"'.");j=h[3]||h[1];k=h[2];var l=new fb;a.$watch(function(a){var e,f,h=a.$eval(i),m=hc(h,
!0),r,s=new fb,u,w,v,x,z=c;if(K(h))v=h||[];else{v=[];for(u in h)h.hasOwnProperty(u)&&u.charAt(0)!="$"&&v.push(u);v.sort()}e=0;for(f=v.length;e<f;e++){u=h===v?e:v[e];w=h[u];if(x=l.shift(w)){r=x.scope;s.push(w,x);if(e!==x.index)x.index=e,z.after(x.element);z=x.element}else r=a.$new();r[j]=w;k&&(r[k]=u);r.$index=e;r.$first=e===0;r.$last=e===m-1;r.$middle=!(r.$first||r.$last);x||d(r,function(a){z.after(a);x={scope:r,element:z=a,index:e};s.push(w,x)})}for(u in l)if(l.hasOwnProperty(u))for(v=l[u];v.length;)w=
v.pop(),w.element.remove(),w.scope.$destroy();l=s})}}}),Kd=R(function(a,c,d){a.$watch(d.ngShow,function(a){c.css("display",Xa(a)?"":"none")})}),Ld=R(function(a,c,d){a.$watch(d.ngHide,function(a){c.css("display",Xa(a)?"none":"")})}),Md=R(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Nd=J({restrict:"EA",compile:function(a,c){var d=c.ngSwitch||c.on,e={};a.data("ng-switch",e);return function(a,h){var f,i,j;a.$watch(d,function(d){i&&(j.$destroy(),
i.remove(),i=j=null);if(f=e["!"+d]||e["?"])a.$eval(c.change),j=a.$new(),f(j,function(a){i=a;h.append(a)})})}}}),Od=R({transclude:"element",priority:500,compile:function(a,c,d){a=a.inheritedData("ng-switch");qa(a);a["!"+c.ngSwitchWhen]=d}}),Pd=R({transclude:"element",priority:500,compile:function(a,c,d){a=a.inheritedData("ng-switch");qa(a);a["?"]=d}}),Qd=R({controller:["$transclude","$element",function(a,c){a(function(a){c.append(a)})}]}),Rd=["$http","$templateCache","$route","$anchorScroll","$compile",
"$controller",function(a,c,d,e,g,h){return{restrict:"ECA",terminal:!0,link:function(a,c,j){function k(){var j=d.current&&d.current.locals,k=j&&j.$template;if(k){c.html(k);l&&(l.$destroy(),l=null);var k=g(c.contents()),m=d.current;l=m.scope=a.$new();if(m.controller)j.$scope=l,j=h(m.controller,j),c.contents().data("$ngControllerController",j);k(l);l.$emit("$viewContentLoaded");l.$eval(n);e()}else c.html(""),l&&(l.$destroy(),l=null)}var l,n=j.onload||"";a.$on("$routeChangeSuccess",k);k()}}}],Sd=["$templateCache",
function(a){return{restrict:"E",terminal:!0,compile:function(c,d){d.type=="text/ng-template"&&a.put(d.id,c[0].text)}}}],Td=J({terminal:!0}),Ud=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,e={$setViewValue:C};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var i=this,j={},k=e,l;i.databound=d.ngModel;
i.init=function(a,c,d){k=a;l=d};i.addOption=function(c){j[c]=!0;k.$viewValue==c&&(a.val(c),l.parent()&&l.remove())};i.removeOption=function(a){this.hasOption(a)&&(delete j[a],k.$viewValue==a&&this.renderUnknownOption(a))};i.renderUnknownOption=function(c){c="? "+ja(c)+" ?";l.val(c);a.prepend(l);a.val(c);l.prop("selected",!0)};i.hasOption=function(a){return j.hasOwnProperty(a)};c.$on("$destroy",function(){i.renderUnknownOption=C})}],link:function(e,h,f,i){function j(a,c,d,e){d.$render=function(){var a=
d.$viewValue;e.hasOption(a)?(w.parent()&&w.remove(),c.val(a),a===""&&r.prop("selected",!0)):v(a)&&r?c.val(""):e.renderUnknownOption(a)};c.bind("change",function(){a.$apply(function(){w.parent()&&w.remove();d.$setViewValue(c.val())})})}function k(a,c,d){var e;d.$render=function(){var a=new Fa(d.$viewValue);m(c.children(),function(c){c.selected=x(a.get(c.value))})};a.$watch(function(){ga(e,d.$viewValue)||(e=U(d.$viewValue),d.$render())});c.bind("change",function(){a.$apply(function(){var a=[];m(c.children(),
function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function l(e,f,g){function i(){var a={"":[]},c=[""],d,h,t,u,v;t=g.$modelValue;u=r(e)||[];var x=l?mb(u):u,z,w,y;w={};v=!1;var A,B;if(o)v=new Fa(t);else if(t===null||q)a[""].push({selected:t===null,id:"",label:""}),v=!0;for(y=0;z=x.length,y<z;y++){w[k]=u[l?w[l]=x[y]:y];d=m(e,w)||"";if(!(h=a[d]))h=a[d]=[],c.push(d);o?d=v.remove(n(e,w))!=s:(d=t===n(e,w),v=v||d);h.push({id:l?x[y]:y,label:j(e,w)||"",selected:d})}!o&&!v&&a[""].unshift({id:"?",
label:"",selected:!0});w=0;for(x=c.length;w<x;w++){d=c[w];h=a[d];if(p.length<=w)t={element:D.clone().attr("label",d),label:h.label},u=[t],p.push(u),f.append(t.element);else if(u=p[w],t=u[0],t.label!=d)t.element.attr("label",t.label=d);A=null;y=0;for(z=h.length;y<z;y++)if(d=h[y],v=u[y+1]){A=v.element;if(v.label!==d.label)A.text(v.label=d.label);if(v.id!==d.id)A.val(v.id=d.id);if(v.element.selected!==d.selected)A.prop("selected",v.selected=d.selected)}else d.id===""&&q?B=q:(B=C.clone()).val(d.id).attr("selected",
d.selected).text(d.label),u.push({element:B,label:d.label,id:d.id,selected:d.selected}),A?A.after(B):t.element.append(B),A=B;for(y++;u.length>y;)u.pop().element.remove()}for(;p.length>w;)p.pop()[0].element.remove()}var h;if(!(h=t.match(d)))throw y("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '"+t+"'.");var j=c(h[2]||h[1]),k=h[4]||h[6],l=h[5],m=c(h[3]||""),n=c(h[2]?h[1]:k),r=c(h[7]),p=[[{element:f,label:""}]];q&&(a(q)(e),q.removeClass("ng-scope"),
q.remove());f.html("");f.bind("change",function(){e.$apply(function(){var a,c=r(e)||[],d={},h,i,j,m,q,t;if(o){i=[];m=0;for(t=p.length;m<t;m++){a=p[m];j=1;for(q=a.length;j<q;j++)if((h=a[j].element)[0].selected)h=h.val(),l&&(d[l]=h),d[k]=c[h],i.push(n(e,d))}}else h=f.val(),h=="?"?i=s:h==""?i=null:(d[k]=c[h],l&&(d[l]=h),i=n(e,d));g.$setViewValue(i)})});g.$render=i;e.$watch(i)}if(i[1]){for(var n=i[0],p=i[1],o=f.multiple,t=f.ngOptions,q=!1,r,C=u(aa.createElement("option")),D=u(aa.createElement("optgroup")),
w=C.clone(),i=0,B=h.children(),F=B.length;i<F;i++)if(B[i].value==""){r=q=B.eq(i);break}n.init(p,q,w);if(o&&(f.required||f.ngRequired)){var z=function(a){p.$setValidity("required",!f.required||a&&a.length);return a};p.$parsers.push(z);p.$formatters.unshift(z);f.$observe("required",function(){z(p.$viewValue)})}t?l(e,h,p):o?k(e,h,p):j(e,h,p,n)}}}}],Vd=["$interpolate",function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(v(e.value)){var g=a(d.text(),
!0);g||e.$set("value",d.text())}return function(a,d,e){var j=d.parent(),k=j.data("$selectController")||j.parent().data("$selectController");k&&k.databound?d.prop("selected",!1):k=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&k.removeOption(c);k.addOption(a)}):k.addOption(e.value);d.bind("$destroy",function(){k.removeOption(e.value)})}}}}],Wd=J({restrict:"E",terminal:!0});(ia=T.jQuery)?(u=ia,D(ia.fn,{scope:ua.scope,controller:ua.controller,injector:ua.injector,inheritedData:ua.inheritedData}),
bb("remove",!0),bb("empty"),bb("html")):u=O;Zb.element=u;(function(a){D(a,{bootstrap:qb,copy:U,extend:D,equals:ga,element:u,forEach:m,injector:rb,noop:C,bind:Wa,toJson:ba,fromJson:ob,identity:ma,isUndefined:v,isDefined:x,isString:F,isFunction:L,isObject:I,isNumber:wa,isElement:gc,isArray:K,version:id,isDate:na,lowercase:B,uppercase:la,callbacks:{counter:0}});ta=mc(T);try{ta("ngLocale")}catch(c){ta("ngLocale",[]).provider("$locale",Zc)}ta("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",
Cb).directive({a:jd,input:cc,textarea:cc,form:kd,script:Sd,select:Ud,style:Wd,option:Vd,ngBind:vd,ngBindHtmlUnsafe:xd,ngBindTemplate:wd,ngClass:yd,ngClassEven:Ad,ngClassOdd:zd,ngCsp:Dd,ngCloak:Bd,ngController:Cd,ngForm:ld,ngHide:Ld,ngInclude:Fd,ngInit:Gd,ngNonBindable:Hd,ngPluralize:Id,ngRepeat:Jd,ngShow:Kd,ngSubmit:Ed,ngStyle:Md,ngSwitch:Nd,ngSwitchWhen:Od,ngSwitchDefault:Pd,ngOptions:Td,ngView:Rd,ngTransclude:Qd,ngModel:qd,ngList:sd,ngChange:rd,required:dc,ngRequired:dc,ngValue:ud}).directive(lb).directive(ec);
a.provider({$anchorScroll:vc,$browser:xc,$cacheFactory:yc,$controller:Bc,$document:Cc,$exceptionHandler:Dc,$filter:Qb,$interpolate:Ec,$http:Vc,$httpBackend:Wc,$location:Ic,$log:Jc,$parse:Nc,$route:Qc,$routeParams:Rc,$rootScope:Sc,$q:Oc,$sniffer:Tc,$templateCache:zc,$timeout:$c,$window:Uc})}])})(Zb);u(aa).ready(function(){kc(aa,qb)})})(window,document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');
function CastController($scope){
	$scope.items = [
		{title: 'Name1', quantity:1, price: 3.95},
		{title: 'Name2', quantity:1, price: 3.95},
		{title: 'Name3', quantity:1, price: 3.95},
		{title: 'Name4', quantity:1, price: 3.95},
		{title: 'Name5', quantity:1, price: 3.95}
	];
	
	$scope.totalCart = function(){
		var total = 0;
			for(var i=0, len=$scope.items.length; i<len; i++){
				total = total + $scope.items[i].price * $scope.items[i].quantity
			}
		return total;
	};
	
	function calculateDiscount(newValue){
		$scope.bill = newValue>100?10:0;
	};

	function allSum(){
		$scope.sum = total - total * bill/100;
		return sum;
	};
	
	$scope.$watch($scope.totalCart, calculateDiscount, allSum);
}
var source1, drop;

function initiate(){
	source1 = document.getElementById('img');
	source1 = addEventListener('dragstart', dragged);
	drop = document.getElementById('dropbox');
	drop.addEventListener('dragenter', dragentered);
	drop.addEventListener('dragover', dragovered);
	drop.addEventListener('drop', dropped);
};

function dragentered(e){
	// предотвращаем действия по умолчанию
	e.preventDefault();
};

function dragovered(e){
	e.preventDefault();
};

function dropped(e){
	e.preventDefault();
	drop.innerHTML = e.dataTransfer.getData('Text');
};

function dragget(e){
	var code = "<img src='"+source1.getAttribute('src')+"'/>";
	e.dataTransfer.setData('Text', code);
};

addEventListener('load', initiate);
var maxim, mmedia, play, bar, progress, mute, volume, loop;

function initialize(){
	maxim = 400;
	mmedia = document.getElementById('media');
	play = document.getElementById('play');
	bar = document.getElementById('bar');
	progress = document.getElementById('progress');
	mute = document.getElementById('mute');
	volume = document.getElementById('volume');
	sound = document.getElementById('sound');
	// прослушиватели
	play.addEventListener('click', push);
	mute.addEventListener('click', sound);
	bar.addEventListener('click', move);
	volume.addEventListener('change', level);
}

addEventListener('load', initialize);

function push(){
	if(!mmedia.paused && !mmedia.ended){
		mmedia.pause();
		play.value = 'play';
		clearInterval(loop);
	}else{
		mmedia.play();
		play.value = 'Pause';
		loop = setInterval(status, 1000)
	}
};

function status(){
	if(!mmedia.ended){
		var size = parseInt(mmedia.currentTime*maxim/mmedia.duration);
		progress.style.width = size+'px';
	}else{
		progress.style.width = '0px';
		play.value = 'Play';
		clearInterval(loop);
	}
};

function sound(){
	if(mute.value == 'Mute'){
		mmedia.muted = true;
		mute.value = 'Sound';
	}else{
		mmedia.muted = false;
		mute.value = 'Mute';
	}	
};

function move(e){
		if(!mmedia.paused && !mmedia.ended){
			var mouseX = e.pageX - bar.offsetLeft;
			var newtime = mouseX*mmedia.duration/maxim;
			mmedia.currentTime = newtime;
			progress.style.width = mouseX + 'px';
			}
};

function level(){
		mmedia.volume = volume.value;
};



function initiate(){
	var elem = document.getElementById('canvas');
	var canvas = elem.getContext('2d');
	var grad = canvas.createLinearGradient(0,0,200,350);
	
		canvas.save();
		canvas.translate(50,70);
		canvas.font = 'bold 20px verdana';
		canvas.fillText('Test',0,30);
		canvas.fillStyle = 'blue';
		canvas.strokeStyle = 'orange';
		canvas.strokeRect(100,100,120,120);
		canvas.fillRect(110,110,100,100);
		canvas.clearRect(120,120,80,80);
		grad.addColorStop(0.3,'yellow');
		grad.addColorStop(0.7,'green');
		canvas.fillStyle = grad;
		canvas.fillRect(10,10,100,100);
		canvas.fillRect(150,10,200,100);
		
		canvas.beginPath();
			canvas.moveTo(200,200);
			canvas.lineTo(300,300);
			canvas.lineTo(200,300);
		canvas.closePath();
		canvas.clip();
		
		canvas.beginPath();
			for( var f=0; f<300; f=f+10 ){
				canvas.moveTo(0,f);
				canvas.lineTo(500,f);
			}	
		canvas.closePath();
		
		canvas.stroke();
		canvas.restore();
		canvas.fillText('Test2',0,30);
		
		canvas.beginPath();
			var radians = 2*Math.PI;
				canvas.arc(50,50,50,0,radians,false);
				canvas.stroke();
		canvas.closePath();
		
		canvas.beginPath();
				canvas.arc(100,400,70,0,Math.PI/180*90,false);
				canvas.stroke();
				
				canvas.lineWidth = 3;
				canvas.lineCap = 'round';
		canvas.beginPath();		
				canvas.moveTo(100,370);
				canvas.lineTo(130,400);
				canvas.stroke();
	
		canvas.beginPath();		
				canvas.moveTo(80,400);
				canvas.lineTo(110,430);
				canvas.stroke();
				
		canvas.beginPath();
				canvas.font = 'bold 20px verdana';
				canvas.textAlign = 'start';
				canvas.fillText('Hello, world!!!',250,400);
				
		canvas.beginPath();									//Картинка
			var img = document.crateElement('img');
				imd.setAttribute('src', 'http://obmenka.by/media/img/we.jpg');
				img.addEventListener('load', function(){
					canvas.drawImage(img, 20, 20);
				});	
				
		canvas.closePath();
};
addEventListener('load', initiate);
var source1, drop, canvas;
var images = document.querySelectorAll('#picturesbox>img');

for(var i=0; i<images.length; i++){
		images[i].addEventListener('dragstart', dragged);
}

function initiate(){
//	source1 = document.getElementById('image1');
//	source1.addEventListener('dragstart', dragged);
	drop = document.getElementById('dropbox');
	drop = document.getElementById('canvas');
	canvas = drop.getContext('2d');
	drop.addEventListener('dragenter', dragentered);
	drop.addEventListener('dragover', dragovered);
	drop.addEventListener('drop', dropped);
	drop.addEventListener('dragleave', dragleaved);
};

function dragentered(e){
	// предотвращаем действия по умолчанию
	e.preventDefault();
	drop.style.background = 'yellow';
};

function dragovered(e){
	e.preventDefault();
};

/*function dropped(e){
	e.preventDefault();
	drop.innerHTML = e.dataTransfer.getData('Text');
	drop.style.background = 'green';
};*/            // При использовании source1

/*function dragged(e){
	var code = "<img src='"+source1.getAttribute('src')+"'/>";
	e.dataTransfer.setData('Text', code);
};*/           // При использовании source1

function dragged(e){
	e.dataTransfer.setData('Text', e.target.getAttribute('id'));
};    // Когда много картинок для перетаскивания

/*function dropped(e){
	e.preventDefault();
	var id = e.dataTransfer.getData('Text');
//	var src = document.getElementById(id).src;
	drop.innerHTML += "<img src='"+id+"'/>";
}; */   // Когда много картинок для перетаскивания

function dropped(e){
	e.preventDefault();
	var id = e.dataTransfer.getData('Text');
	//id.replace('http://localhost:3000/', '');
	console.log(id.replace('http://localhost:3000/', ''));
	//var elem = document.getElementById(id);
	var elem =  document.querySelector('img[src="'+id.replace('http://localhost:3000/', '')+'"]');
	
		console.log(elem);
	var posX = e.pageX - drop.offsetLeft;
	var posY = e.pageY - drop.offsetTop;
	console.log(posX);
	canvas.drawImage(elem, posX, posY);
}; 

function dragleaved(e){
	e.preventDefault();
	drop.style.background = 'red';
};

addEventListener('load', initiate);
function initiate(){
	var get = document.getElementById('getLocation');
	get.addEventListener('click', getLocation);
};
	var geoconfig = {
		enableHightAccuracy: true,
		timeout: 10000,
		maximumAge: 20000
	}
	function getLocation(){
		navigator.geolocation.getCurrentPosition(showInfo, showError, geoconfig);
	};
	
	function showInfo(position){
		var location = document.getElementById('location'); //на месте кнопки появится инфа о местоположении
		var data = '';
			data += 'Широта: ' + position.coords.latitude + '<br/>'; 
			data += 'Долгота: ' + position.coords.longitude + '<br/>'; 
			data += 'Точность: ' + position.coords.accuracy + '<br/>'; 
			
			var mapurl = 'http://maps.google.com/maps/api/staticmap?center='+position.coords.latitude+','+position.coords.longitude+',+&zoom=18&size=400x400&sensor=false&markers='+position.coords.latitude+','+position.coords.longitude;
			data +='<img src="'+mapurl+'"/>';	
			
			location.innerHTML = data;
	};
	function showError(error){
		alert('Ошибка' + error.code + ' ' + error.message);
	};
addEventListener('load', initiate);


// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var map;

function initialize() {
  var mapOptions = {
    zoom: 6
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
function initiate(){
	var button = document.getElementById('save');
	button.addEventListener('click', newitem);
	show();
}

function newitem(){
	var keyword = document.getElementById('keyword').value;
	var value = document.getElementById('keyword').value;
	sessionStorage.setItem(keyword, value);
	show();
}	

function show(){
	var databox = document.getElementById('databox');
	databox.innerHTML = '<input type="button" onclick="removeAll()" value="Delete All" />';
		for(var f=0; f<sessionStorage.length; f++){
			var keyword = sessionStorage.key(f);
			var value = sessionStorage.getItem(keyword);
			databox.innerHTML += '<div><input type="button" onclick="removeKey(\''+keyword+'\')" value="&times;" />'
								+keyword+'-'+value+'</div>';
		}
	//sessionStorage.getItem(keyword);
	//databox.innerHTML = '<div>'+keyword+'-'+value+'</div>';
}	

function removeKey(keyword){
	if(confirm('Are you sure?')){
		sessionStorage.removeItem(keyword);
		show();
	};
}

function removeAll(){
	if(confirm('Are you sure?')){
		sessionStorage.clear();
		show();
	};
}

addEventListener('load', initiate);
var maxim, mmedia, play, bar, progress, mute, volume, loop;

function initiate(){
	maxim = 400;
	mmedia = document.getElementById('media');
	play = document.getElementById('play');
	bar = document.getElementById('bar');
	progress = document.getElementById('progress');
	mute = document.getElementById('mute');
	volume = document.getElementById('volume');

	// прослушиватели
	play.addEventListener('click', push);
	mute.addEventListener('click', sound);
	bar.addEventListener('click', move);
	volume.addEventListener('change', level);
}

addEventListener('load', initiate);

function push(){
	if(!mmedia.paused && !mmedia.ended){
		mmedia.pause();
		play.value = 'Play';
		clearInterval(loop);
	}else{
		mmedia.play();
		play.value = 'Pause';
		loop = setInterval(status, 1000)
	}
};

function status(){
	if(!mmedia.ended){
		var size = parseInt(mmedia.currentTime*maxim/mmedia.duration);
		progress.style.width = size+'px';
	}else{
		progress.style.width = '0px';
		play.value = 'Play';
		clearInterval(loop);
	}
};

function sound(){
	if(mute.value == 'Mute'){
		mmedia.muted = true;
		mute.value = 'Sound';
	}else{
		mmedia.muted = false;
		mute.value = 'Mute';
	}	
};

function move(e){
		if(!mmedia.paused && !mmedia.ended){
			var mouseX = e.pageX - bar.offsetLeft;
			var newtime = mouseX*mmedia.duration/maxim;
			mmedia.currentTime = newtime;
			progress.style.width = mouseX + 'px';
			}
};

function level(){
		mmedia.volume = volume.value;
};



var maxim, mmedia, play, bar, progress, mute, volume, loop;

function initialize(){
	maxim = 400;
	mmedia = document.getElementById('media');
	play = document.getElementById('play');
	bar = document.getElementById('bar');
	progress = document.getElementById('progress');
	mute = document.getElementById('mute');
	volume = document.getElementById('volume');
	sound = document.getElementById('sound');
	// прослушиватели
	play.addEventListener('click', push);
	mute.addEventListener('click', sound);
	bar.addEventListener('click', move);
	volume.addEventListener('change', level);
}

addEventListener('load', initialize);

function push(){
	if(!mmedia.paused && !mmedia.ended){
		mmedia.pause();
		play.value = 'play';
		clearInterval(loop);
	}else{
		mmedia.play();
		play.value = 'Pause';
		loop = setInterval(status, 1000)
	}
};

function status(){
	if(!mmedia.ended){
		var size = parseInt(mmedia.currentTime*maxim/mmedia.duration);
		progress.style.width = size+'px';
	}else{
		progress.style.width = '0px';
		play.value = 'Play';
		clearInterval(loop);
	}
};

function sound(){
	if(mute.value == 'Mute'){
		mmedia.muted = true;
		mute.value = 'Sound';
	}else{
		mmedia.muted = false;
		mute.value = 'Mute';
	}	
};

function move(e){
		if(!mmedia.paused && !mmedia.ended){
			var mouseX = e.pageX - bar.offsetLeft;
			var newtime = mouseX*mmedia.duration/maxim;
			mmedia.currentTime = newtime;
			progress.style.width = mouseX + 'px';
			}
};

function level(){
		mmedia.volume = volume.value;
};



function initiate(){
	var elem = document.getElementById('canvas');
	var canvas = elem.getContext('2d');
	var grad = canvas.createLinearGradient(0,0,200,350);
	
		canvas.save();
		canvas.translate(50,70);
		canvas.font = 'bold 20px verdana';
		canvas.fillText('Test',0,30);
		canvas.fillStyle = 'blue';
		canvas.strokeStyle = 'orange';
		canvas.strokeRect(100,100,120,120);
		canvas.fillRect(110,110,100,100);
		canvas.clearRect(120,120,80,80);
		grad.addColorStop(0.3,'yellow');
		grad.addColorStop(0.7,'green');
		canvas.fillStyle = grad;
		canvas.fillRect(10,10,100,100);
		canvas.fillRect(150,10,200,100);
		
		canvas.beginPath();
			canvas.moveTo(200,200);
			canvas.lineTo(300,300);
			canvas.lineTo(200,300);
		canvas.closePath();
		canvas.clip();
		
		canvas.beginPath();
			for( var f=0; f<300; f=f+10 ){
				canvas.moveTo(0,f);
				canvas.lineTo(500,f);
			}	
		canvas.closePath();
		
		canvas.stroke();
		canvas.restore();
		canvas.fillText('Test2',0,30);
		
		canvas.beginPath();
			var radians = 2*Math.PI;
				canvas.arc(50,50,50,0,radians,false);
				canvas.stroke();
		canvas.closePath();
		
		canvas.beginPath();
				canvas.arc(100,400,70,0,Math.PI/180*90,false);
				canvas.stroke();
				
				canvas.lineWidth = 3;
				canvas.lineCap = 'round';
		canvas.beginPath();		
				canvas.moveTo(100,370);
				canvas.lineTo(130,400);
				canvas.stroke();
	
		canvas.beginPath();		
				canvas.moveTo(80,400);
				canvas.lineTo(110,430);
				canvas.stroke();
				
		canvas.beginPath();
				canvas.font = 'bold 20px verdana';
				canvas.textAlign = 'start';
				canvas.fillText('Hello, world!!!',250,400);
				
		canvas.beginPath();									//Картинка
			var img = document.crateElement('img');
				imd.setAttribute('src', 'http://obmenka.by/media/img/we.jpg');
				img.addEventListener('load', function(){
					canvas.drawImage(img, 20, 20);
				});	
				
		canvas.closePath();
};
addEventListener('load', initiate);
var source1, drop, canvas;
var images = document.querySelectorAll('#picturesbox>img');

for(var i=0; i<images.length; i++){
		images[i].addEventListener('dragstart', dragged);
}

function initiate(){
//	source1 = document.getElementById('image1');
//	source1.addEventListener('dragstart', dragged);
	drop = document.getElementById('dropbox');
	drop = document.getElementById('canvas');
	canvas = drop.getContext('2d');
	drop.addEventListener('dragenter', dragentered);
	drop.addEventListener('dragover', dragovered);
	drop.addEventListener('drop', dropped);
	drop.addEventListener('dragleave', dragleaved);
};

function dragentered(e){
	// предотвращаем действия по умолчанию
	e.preventDefault();
	drop.style.background = 'yellow';
};

function dragovered(e){
	e.preventDefault();
};

/*function dropped(e){
	e.preventDefault();
	drop.innerHTML = e.dataTransfer.getData('Text');
	drop.style.background = 'green';
};*/            // При использовании source1

/*function dragged(e){
	var code = "<img src='"+source1.getAttribute('src')+"'/>";
	e.dataTransfer.setData('Text', code);
};*/           // При использовании source1

function dragged(e){
	e.dataTransfer.setData('Text', e.target.getAttribute('id'));
};    // Когда много картинок для перетаскивания

/*function dropped(e){
	e.preventDefault();
	var id = e.dataTransfer.getData('Text');
//	var src = document.getElementById(id).src;
	drop.innerHTML += "<img src='"+id+"'/>";
}; */   // Когда много картинок для перетаскивания

function dropped(e){
	e.preventDefault();
	var id = e.dataTransfer.getData('Text');
	//id.replace('http://localhost:3000/', '');
	console.log(id.replace('http://localhost:3000/', ''));
	//var elem = document.getElementById(id);
	var elem =  document.querySelector('img[src="'+id.replace('http://localhost:3000/', '')+'"]');
	
		console.log(elem);
	var posX = e.pageX - drop.offsetLeft;
	var posY = e.pageY - drop.offsetTop;
	console.log(posX);
	canvas.drawImage(elem, posX, posY);
}; 

function dragleaved(e){
	e.preventDefault();
	drop.style.background = 'red';
};

addEventListener('load', initiate);
function initiate(){
	var get = document.getElementById('getLocation');
	get.addEventListener('click', getLocation);
};
	var geoconfig = {
		enableHightAccuracy: true,
		timeout: 10000,
		maximumAge: 20000
	}
	function getLocation(){
		navigator.geolocation.getCurrentPosition(showInfo, showError, geoconfig);
	};
	
	function showInfo(position){
		var location = document.getElementById('location'); //на месте кнопки появится инфа о местоположении
		var data = '';
			data += 'Широта: ' + position.coords.latitude + '<br/>'; 
			data += 'Долгота: ' + position.coords.longitude + '<br/>'; 
			data += 'Точность: ' + position.coords.accuracy + '<br/>'; 
			
			var mapurl = 'http://maps.google.com/maps/api/staticmap?center='+position.coords.latitude+','+position.coords.longitude+',+&zoom=18&size=400x400&sensor=false&markers='+position.coords.latitude+','+position.coords.longitude;
			data +='<img src="'+mapurl+'"/>';	
			
			location.innerHTML = data;
	};
	function showError(error){
		alert('Ошибка' + error.code + ' ' + error.message);
	};
addEventListener('load', initiate);


// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var map;

function initialize() {
  var mapOptions = {
    zoom: 6
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
function initiate(){
	var button = document.getElementById('save');
	button.addEventListener('click', newitem);
	show();
}

function newitem(){
	var keyword = document.getElementById('keyword').value;
	var value = document.getElementById('keyword').value;
	sessionStorage.setItem(keyword, value);
	show();
}	

function show(){
	var databox = document.getElementById('databox');
	databox.innerHTML = '<input type="button" onclick="removeAll()" value="Delete All" />';
		for(var f=0; f<sessionStorage.length; f++){
			var keyword = sessionStorage.key(f);
			var value = sessionStorage.getItem(keyword);
			databox.innerHTML += '<div><input type="button" onclick="removeKey(\''+keyword+'\')" value="&times;" />'
								+keyword+'-'+value+'</div>';
		}
	//sessionStorage.getItem(keyword);
	//databox.innerHTML = '<div>'+keyword+'-'+value+'</div>';
}	

function removeKey(keyword){
	if(confirm('Are you sure?')){
		sessionStorage.removeItem(keyword);
		show();
	};
}

function removeAll(){
	if(confirm('Are you sure?')){
		sessionStorage.clear();
		show();
	};
}

addEventListener('load', initiate);
var maxim, mmedia, play, bar, progress, mute, volume, loop;

function initiate(){
	maxim = 400;
	mmedia = document.getElementById('media');
	play = document.getElementById('play');
	bar = document.getElementById('bar');
	progress = document.getElementById('progress');
	mute = document.getElementById('mute');
	volume = document.getElementById('volume');

	// прослушиватели
	play.addEventListener('click', push);
	mute.addEventListener('click', sound);
	bar.addEventListener('click', move);
	volume.addEventListener('change', level);
}

addEventListener('load', initiate);

function push(){
	if(!mmedia.paused && !mmedia.ended){
		mmedia.pause();
		play.value = 'Play';
		clearInterval(loop);
	}else{
		mmedia.play();
		play.value = 'Pause';
		loop = setInterval(status, 1000)
	}
};

function status(){
	if(!mmedia.ended){
		var size = parseInt(mmedia.currentTime*maxim/mmedia.duration);
		progress.style.width = size+'px';
	}else{
		progress.style.width = '0px';
		play.value = 'Play';
		clearInterval(loop);
	}
};

function sound(){
	if(mute.value == 'Mute'){
		mmedia.muted = true;
		mute.value = 'Sound';
	}else{
		mmedia.muted = false;
		mute.value = 'Mute';
	}	
};

function move(e){
		if(!mmedia.paused && !mmedia.ended){
			var mouseX = e.pageX - bar.offsetLeft;
			var newtime = mouseX*mmedia.duration/maxim;
			mmedia.currentTime = newtime;
			progress.style.width = mouseX + 'px';
			}
};

function level(){
		mmedia.volume = volume.value;
};



var maxim, mmedia, play, bar, progress, mute, volume, loop;

function initialize(){
	maxim = 400;
	mmedia = document.getElementById('media');
	play = document.getElementById('play');
	bar = document.getElementById('bar');
	progress = document.getElementById('progress');
	mute = document.getElementById('mute');
	volume = document.getElementById('volume');
	sound = document.getElementById('sound');
	// прослушиватели
	play.addEventListener('click', push);
	mute.addEventListener('click', sound);
	bar.addEventListener('click', move);
	volume.addEventListener('change', level);
}

addEventListener('load', initialize);

function push(){
	if(!mmedia.paused && !mmedia.ended){
		mmedia.pause();
		play.value = 'play';
		clearInterval(loop);
	}else{
		mmedia.play();
		play.value = 'Pause';
		loop = setInterval(status, 1000)
	}
};

function status(){
	if(!mmedia.ended){
		var size = parseInt(mmedia.currentTime*maxim/mmedia.duration);
		progress.style.width = size+'px';
	}else{
		progress.style.width = '0px';
		play.value = 'Play';
		clearInterval(loop);
	}
};

function sound(){
	if(mute.value == 'Mute'){
		mmedia.muted = true;
		mute.value = 'Sound';
	}else{
		mmedia.muted = false;
		mute.value = 'Mute';
	}	
};

function move(e){
		if(!mmedia.paused && !mmedia.ended){
			var mouseX = e.pageX - bar.offsetLeft;
			var newtime = mouseX*mmedia.duration/maxim;
			mmedia.currentTime = newtime;
			progress.style.width = mouseX + 'px';
			}
};

function level(){
		mmedia.volume = volume.value;
};



function initiate(){
	var elem = document.getElementById('canvas');
	var canvas = elem.getContext('2d');
	var grad = canvas.createLinearGradient(0,0,200,350);
	
		canvas.save();
		canvas.translate(50,70);
		canvas.font = 'bold 20px verdana';
		canvas.fillText('Test',0,30);
		canvas.fillStyle = 'blue';
		canvas.strokeStyle = 'orange';
		canvas.strokeRect(100,100,120,120);
		canvas.fillRect(110,110,100,100);
		canvas.clearRect(120,120,80,80);
		grad.addColorStop(0.3,'yellow');
		grad.addColorStop(0.7,'green');
		canvas.fillStyle = grad;
		canvas.fillRect(10,10,100,100);
		canvas.fillRect(150,10,200,100);
		
		canvas.beginPath();
			canvas.moveTo(200,200);
			canvas.lineTo(300,300);
			canvas.lineTo(200,300);
		canvas.closePath();
		canvas.clip();
		
		canvas.beginPath();
			for( var f=0; f<300; f=f+10 ){
				canvas.moveTo(0,f);
				canvas.lineTo(500,f);
			}	
		canvas.closePath();
		
		canvas.stroke();
		canvas.restore();
		canvas.fillText('Test2',0,30);
		
		canvas.beginPath();
			var radians = 2*Math.PI;
				canvas.arc(50,50,50,0,radians,false);
				canvas.stroke();
		canvas.closePath();
		
		canvas.beginPath();
				canvas.arc(100,400,70,0,Math.PI/180*90,false);
				canvas.stroke();
				
				canvas.lineWidth = 3;
				canvas.lineCap = 'round';
		canvas.beginPath();		
				canvas.moveTo(100,370);
				canvas.lineTo(130,400);
				canvas.stroke();
	
		canvas.beginPath();		
				canvas.moveTo(80,400);
				canvas.lineTo(110,430);
				canvas.stroke();
				
		canvas.beginPath();
				canvas.font = 'bold 20px verdana';
				canvas.textAlign = 'start';
				canvas.fillText('Hello, world!!!',250,400);
				
		canvas.beginPath();									//Картинка
			var img = document.crateElement('img');
				imd.setAttribute('src', 'http://obmenka.by/media/img/we.jpg');
				img.addEventListener('load', function(){
					canvas.drawImage(img, 20, 20);
				});	
				
		canvas.closePath();
};
addEventListener('load', initiate);
var source1, drop, canvas;
var images = document.querySelectorAll('#picturesbox>img');

for(var i=0; i<images.length; i++){
		images[i].addEventListener('dragstart', dragged);
}

function initiate(){
//	source1 = document.getElementById('image1');
//	source1.addEventListener('dragstart', dragged);
	drop = document.getElementById('dropbox');
	drop = document.getElementById('canvas');
	canvas = drop.getContext('2d');
	drop.addEventListener('dragenter', dragentered);
	drop.addEventListener('dragover', dragovered);
	drop.addEventListener('drop', dropped);
	drop.addEventListener('dragleave', dragleaved);
};

function dragentered(e){
	// предотвращаем действия по умолчанию
	e.preventDefault();
	drop.style.background = 'yellow';
};

function dragovered(e){
	e.preventDefault();
};

/*function dropped(e){
	e.preventDefault();
	drop.innerHTML = e.dataTransfer.getData('Text');
	drop.style.background = 'green';
};*/            // При использовании source1

/*function dragged(e){
	var code = "<img src='"+source1.getAttribute('src')+"'/>";
	e.dataTransfer.setData('Text', code);
};*/           // При использовании source1

function dragged(e){
	e.dataTransfer.setData('Text', e.target.getAttribute('id'));
};    // Когда много картинок для перетаскивания

/*function dropped(e){
	e.preventDefault();
	var id = e.dataTransfer.getData('Text');
//	var src = document.getElementById(id).src;
	drop.innerHTML += "<img src='"+id+"'/>";
}; */   // Когда много картинок для перетаскивания

function dropped(e){
	e.preventDefault();
	var id = e.dataTransfer.getData('Text');
	//id.replace('http://localhost:3000/', '');
	console.log(id.replace('http://localhost:3000/', ''));
	//var elem = document.getElementById(id);
	var elem =  document.querySelector('img[src="'+id.replace('http://localhost:3000/', '')+'"]');
	
		console.log(elem);
	var posX = e.pageX - drop.offsetLeft;
	var posY = e.pageY - drop.offsetTop;
	console.log(posX);
	canvas.drawImage(elem, posX, posY);
}; 

function dragleaved(e){
	e.preventDefault();
	drop.style.background = 'red';
};

addEventListener('load', initiate);
function initiate(){
	var get = document.getElementById('getLocation');
	get.addEventListener('click', getLocation);
};
	var geoconfig = {
		enableHightAccuracy: true,
		timeout: 10000,
		maximumAge: 20000
	}
	function getLocation(){
		navigator.geolocation.getCurrentPosition(showInfo, showError, geoconfig);
	};
	
	function showInfo(position){
		var location = document.getElementById('location'); //на месте кнопки появится инфа о местоположении
		var data = '';
			data += 'Широта: ' + position.coords.latitude + '<br/>'; 
			data += 'Долгота: ' + position.coords.longitude + '<br/>'; 
			data += 'Точность: ' + position.coords.accuracy + '<br/>'; 
			
			var mapurl = 'http://maps.google.com/maps/api/staticmap?center='+position.coords.latitude+','+position.coords.longitude+',+&zoom=18&size=400x400&sensor=false&markers='+position.coords.latitude+','+position.coords.longitude;
			data +='<img src="'+mapurl+'"/>';	
			
			location.innerHTML = data;
	};
	function showError(error){
		alert('Ошибка' + error.code + ' ' + error.message);
	};
addEventListener('load', initiate);


// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var map;

function initialize() {
  var mapOptions = {
    zoom: 6
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
function initiate(){
	var button = document.getElementById('save');
	button.addEventListener('click', newitem);
	show();
}

function newitem(){
	var keyword = document.getElementById('keyword').value;
	var value = document.getElementById('keyword').value;
	sessionStorage.setItem(keyword, value);
	show();
}	

function show(){
	var databox = document.getElementById('databox');
	databox.innerHTML = '<input type="button" onclick="removeAll()" value="Delete All" />';
		for(var f=0; f<sessionStorage.length; f++){
			var keyword = sessionStorage.key(f);
			var value = sessionStorage.getItem(keyword);
			databox.innerHTML += '<div><input type="button" onclick="removeKey(\''+keyword+'\')" value="&times;" />'
								+keyword+'-'+value+'</div>';
		}
	//sessionStorage.getItem(keyword);
	//databox.innerHTML = '<div>'+keyword+'-'+value+'</div>';
}	

function removeKey(keyword){
	if(confirm('Are you sure?')){
		sessionStorage.removeItem(keyword);
		show();
	};
}

function removeAll(){
	if(confirm('Are you sure?')){
		sessionStorage.clear();
		show();
	};
}

addEventListener('load', initiate);
var maxim, mmedia, play, bar, progress, mute, volume, loop;

function initiate(){
	maxim = 400;
	mmedia = document.getElementById('media');
	play = document.getElementById('play');
	bar = document.getElementById('bar');
	progress = document.getElementById('progress');
	mute = document.getElementById('mute');
	volume = document.getElementById('volume');

	// прослушиватели
	play.addEventListener('click', push);
	mute.addEventListener('click', sound);
	bar.addEventListener('click', move);
	volume.addEventListener('change', level);
}

addEventListener('load', initiate);

function push(){
	if(!mmedia.paused && !mmedia.ended){
		mmedia.pause();
		play.value = 'Play';
		clearInterval(loop);
	}else{
		mmedia.play();
		play.value = 'Pause';
		loop = setInterval(status, 1000)
	}
};

function status(){
	if(!mmedia.ended){
		var size = parseInt(mmedia.currentTime*maxim/mmedia.duration);
		progress.style.width = size+'px';
	}else{
		progress.style.width = '0px';
		play.value = 'Play';
		clearInterval(loop);
	}
};

function sound(){
	if(mute.value == 'Mute'){
		mmedia.muted = true;
		mute.value = 'Sound';
	}else{
		mmedia.muted = false;
		mute.value = 'Mute';
	}	
};

function move(e){
		if(!mmedia.paused && !mmedia.ended){
			var mouseX = e.pageX - bar.offsetLeft;
			var newtime = mouseX*mmedia.duration/maxim;
			mmedia.currentTime = newtime;
			progress.style.width = mouseX + 'px';
			}
};

function level(){
		mmedia.volume = volume.value;
};



var maxim, mmedia, play, bar, progress, mute, volume, loop;

function initialize(){
	maxim = 400;
	mmedia = document.getElementById('media');
	play = document.getElementById('play');
	bar = document.getElementById('bar');
	progress = document.getElementById('progress');
	mute = document.getElementById('mute');
	volume = document.getElementById('volume');
	sound = document.getElementById('sound');
	// прослушиватели
	play.addEventListener('click', push);
	mute.addEventListener('click', sound);
	bar.addEventListener('click', move);
	volume.addEventListener('change', level);
}

addEventListener('load', initialize);

function push(){
	if(!mmedia.paused && !mmedia.ended){
		mmedia.pause();
		play.value = 'play';
		clearInterval(loop);
	}else{
		mmedia.play();
		play.value = 'Pause';
		loop = setInterval(status, 1000)
	}
};

function status(){
	if(!mmedia.ended){
		var size = parseInt(mmedia.currentTime*maxim/mmedia.duration);
		progress.style.width = size+'px';
	}else{
		progress.style.width = '0px';
		play.value = 'Play';
		clearInterval(loop);
	}
};

function sound(){
	if(mute.value == 'Mute'){
		mmedia.muted = true;
		mute.value = 'Sound';
	}else{
		mmedia.muted = false;
		mute.value = 'Mute';
	}	
};

function move(e){
		if(!mmedia.paused && !mmedia.ended){
			var mouseX = e.pageX - bar.offsetLeft;
			var newtime = mouseX*mmedia.duration/maxim;
			mmedia.currentTime = newtime;
			progress.style.width = mouseX + 'px';
			}
};

function level(){
		mmedia.volume = volume.value;
};



function initiate(){
	var elem = document.getElementById('canvas');
	var canvas = elem.getContext('2d');
	var grad = canvas.createLinearGradient(0,0,200,350);
	
		canvas.save();
		canvas.translate(50,70);
		canvas.font = 'bold 20px verdana';
		canvas.fillText('Test',0,30);
		canvas.fillStyle = 'blue';
		canvas.strokeStyle = 'orange';
		canvas.strokeRect(100,100,120,120);
		canvas.fillRect(110,110,100,100);
		canvas.clearRect(120,120,80,80);
		grad.addColorStop(0.3,'yellow');
		grad.addColorStop(0.7,'green');
		canvas.fillStyle = grad;
		canvas.fillRect(10,10,100,100);
		canvas.fillRect(150,10,200,100);
		
		canvas.beginPath();
			canvas.moveTo(200,200);
			canvas.lineTo(300,300);
			canvas.lineTo(200,300);
		canvas.closePath();
		canvas.clip();
		
		canvas.beginPath();
			for( var f=0; f<300; f=f+10 ){
				canvas.moveTo(0,f);
				canvas.lineTo(500,f);
			}	
		canvas.closePath();
		
		canvas.stroke();
		canvas.restore();
		canvas.fillText('Test2',0,30);
		
		canvas.beginPath();
			var radians = 2*Math.PI;
				canvas.arc(50,50,50,0,radians,false);
				canvas.stroke();
		canvas.closePath();
		
		canvas.beginPath();
				canvas.arc(100,400,70,0,Math.PI/180*90,false);
				canvas.stroke();
				
				canvas.lineWidth = 3;
				canvas.lineCap = 'round';
		canvas.beginPath();		
				canvas.moveTo(100,370);
				canvas.lineTo(130,400);
				canvas.stroke();
	
		canvas.beginPath();		
				canvas.moveTo(80,400);
				canvas.lineTo(110,430);
				canvas.stroke();
				
		canvas.beginPath();
				canvas.font = 'bold 20px verdana';
				canvas.textAlign = 'start';
				canvas.fillText('Hello, world!!!',250,400);
				
		canvas.beginPath();									//Картинка
			var img = document.crateElement('img');
				imd.setAttribute('src', 'http://obmenka.by/media/img/we.jpg');
				img.addEventListener('load', function(){
					canvas.drawImage(img, 20, 20);
				});	
				
		canvas.closePath();
};
addEventListener('load', initiate);
var source1, drop, canvas;
var images = document.querySelectorAll('#picturesbox>img');

for(var i=0; i<images.length; i++){
		images[i].addEventListener('dragstart', dragged);
}

function initiate(){
//	source1 = document.getElementById('image1');
//	source1.addEventListener('dragstart', dragged);
	drop = document.getElementById('dropbox');
	drop = document.getElementById('canvas');
	canvas = drop.getContext('2d');
	drop.addEventListener('dragenter', dragentered);
	drop.addEventListener('dragover', dragovered);
	drop.addEventListener('drop', dropped);
	drop.addEventListener('dragleave', dragleaved);
};

function dragentered(e){
	// предотвращаем действия по умолчанию
	e.preventDefault();
	drop.style.background = 'yellow';
};

function dragovered(e){
	e.preventDefault();
};

/*function dropped(e){
	e.preventDefault();
	drop.innerHTML = e.dataTransfer.getData('Text');
	drop.style.background = 'green';
};*/            // При использовании source1

/*function dragged(e){
	var code = "<img src='"+source1.getAttribute('src')+"'/>";
	e.dataTransfer.setData('Text', code);
};*/           // При использовании source1

function dragged(e){
	e.dataTransfer.setData('Text', e.target.getAttribute('id'));
};    // Когда много картинок для перетаскивания

/*function dropped(e){
	e.preventDefault();
	var id = e.dataTransfer.getData('Text');
//	var src = document.getElementById(id).src;
	drop.innerHTML += "<img src='"+id+"'/>";
}; */   // Когда много картинок для перетаскивания

function dropped(e){
	e.preventDefault();
	var id = e.dataTransfer.getData('Text');
	//id.replace('http://localhost:3000/', '');
	console.log(id.replace('http://localhost:3000/', ''));
	//var elem = document.getElementById(id);
	var elem =  document.querySelector('img[src="'+id.replace('http://localhost:3000/', '')+'"]');
	
		console.log(elem);
	var posX = e.pageX - drop.offsetLeft;
	var posY = e.pageY - drop.offsetTop;
	console.log(posX);
	canvas.drawImage(elem, posX, posY);
}; 

function dragleaved(e){
	e.preventDefault();
	drop.style.background = 'red';
};

addEventListener('load', initiate);
function initiate(){
	var get = document.getElementById('getLocation');
	get.addEventListener('click', getLocation);
};
	var geoconfig = {
		enableHightAccuracy: true,
		timeout: 10000,
		maximumAge: 20000
	}
	function getLocation(){
		navigator.geolocation.getCurrentPosition(showInfo, showError, geoconfig);
	};
	
	function showInfo(position){
		var location = document.getElementById('location'); //на месте кнопки появится инфа о местоположении
		var data = '';
			data += 'Широта: ' + position.coords.latitude + '<br/>'; 
			data += 'Долгота: ' + position.coords.longitude + '<br/>'; 
			data += 'Точность: ' + position.coords.accuracy + '<br/>'; 
			
			var mapurl = 'http://maps.google.com/maps/api/staticmap?center='+position.coords.latitude+','+position.coords.longitude+',+&zoom=18&size=400x400&sensor=false&markers='+position.coords.latitude+','+position.coords.longitude;
			data +='<img src="'+mapurl+'"/>';	
			
			location.innerHTML = data;
	};
	function showError(error){
		alert('Ошибка' + error.code + ' ' + error.message);
	};
addEventListener('load', initiate);


// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var map;

function initialize() {
  var mapOptions = {
    zoom: 6
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
function initiate(){
	var button = document.getElementById('save');
	button.addEventListener('click', newitem);
	show();
}

function newitem(){
	var keyword = document.getElementById('keyword').value;
	var value = document.getElementById('keyword').value;
	sessionStorage.setItem(keyword, value);
	show();
}	

function show(){
	var databox = document.getElementById('databox');
	databox.innerHTML = '<input type="button" onclick="removeAll()" value="Delete All" />';
		for(var f=0; f<sessionStorage.length; f++){
			var keyword = sessionStorage.key(f);
			var value = sessionStorage.getItem(keyword);
			databox.innerHTML += '<div><input type="button" onclick="removeKey(\''+keyword+'\')" value="&times;" />'
								+keyword+'-'+value+'</div>';
		}
	//sessionStorage.getItem(keyword);
	//databox.innerHTML = '<div>'+keyword+'-'+value+'</div>';
}	

function removeKey(keyword){
	if(confirm('Are you sure?')){
		sessionStorage.removeItem(keyword);
		show();
	};
}

function removeAll(){
	if(confirm('Are you sure?')){
		sessionStorage.clear();
		show();
	};
}

addEventListener('load', initiate);
var maxim, mmedia, play, bar, progress, mute, volume, loop;

function initiate(){
	maxim = 400;
	mmedia = document.getElementById('media');
	play = document.getElementById('play');
	bar = document.getElementById('bar');
	progress = document.getElementById('progress');
	mute = document.getElementById('mute');
	volume = document.getElementById('volume');

	// прослушиватели
	play.addEventListener('click', push);
	mute.addEventListener('click', sound);
	bar.addEventListener('click', move);
	volume.addEventListener('change', level);
}

addEventListener('load', initiate);

function push(){
	if(!mmedia.paused && !mmedia.ended){
		mmedia.pause();
		play.value = 'Play';
		clearInterval(loop);
	}else{
		mmedia.play();
		play.value = 'Pause';
		loop = setInterval(status, 1000)
	}
};

function status(){
	if(!mmedia.ended){
		var size = parseInt(mmedia.currentTime*maxim/mmedia.duration);
		progress.style.width = size+'px';
	}else{
		progress.style.width = '0px';
		play.value = 'Play';
		clearInterval(loop);
	}
};

function sound(){
	if(mute.value == 'Mute'){
		mmedia.muted = true;
		mute.value = 'Sound';
	}else{
		mmedia.muted = false;
		mute.value = 'Mute';
	}	
};

function move(e){
		if(!mmedia.paused && !mmedia.ended){
			var mouseX = e.pageX - bar.offsetLeft;
			var newtime = mouseX*mmedia.duration/maxim;
			mmedia.currentTime = newtime;
			progress.style.width = mouseX + 'px';
			}
};

function level(){
		mmedia.volume = volume.value;
};


