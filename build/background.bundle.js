!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=90)}({21:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(3),o=r.n(n),a=r(8),i=r(9),c=r(6),u=function(){function t(){Object(a.a)(this,t)}return Object(i.a)(t,null,[{key:"send",value:function(e,r,n){var a,i;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,o.a.awrap(t.getApiKey());case 3:if(a=c.sent,r){c.next=8;break}return c.next=7,o.a.awrap(t.getTo());case 7:r=c.sent;case 8:if(n){c.next=12;break}return c.next=11,o.a.awrap(t.getFrom());case 11:n=c.sent;case 12:return c.t0=o.a,c.next=15,o.a.awrap(window.fetch(t.getUrl(a,r,e,n)));case 15:return c.t1=c.sent.text(),c.next=18,c.t0.awrap.call(c.t0,c.t1);case 18:i=c.sent,window.alert("100"===i?'SMS successfully sent to "'.concat(r,'" from "').concat(n,'": ').concat(e):'An error occured while sending SMS to "'.concat(r,'". The returned error code is: "').concat(i,'".')),c.next=25;break;case 22:c.prev=22,c.t2=c.catch(0),window.alert(c.t2);case 25:case"end":return c.stop()}}),null,null,[[0,22]])}},{key:"getTo",value:function(){var t;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(c.a.getLocalStoreByKey("to"));case 2:if((t=e.sent)||(t=window.prompt("Please enter a recipient number or address book entry.")),t&&t.length){e.next=6;break}throw new Error("You must specify a valid recipient phone number or address book entry.");case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}}))}},{key:"getUrl",value:function(t,e,r,n){var o="https://gateway.sms77.io/api/sms?p=".concat(t,"&to=").concat(e,"&text=").concat(r,"&from=").concat(n,"&sendwith=chrome"),a=new URL(o).href;if(!c.a.isValidUrl(a))throw new Error('Invalid URL for request: "'.concat(a,'". Please contact Sms77 on info@sms77.io.'));return a}},{key:"getText",value:function(t){var e;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.awrap(c.a.getLocalStoreByKey("signature"));case 2:return e=r.sent,r.abrupt("return","".concat(t).concat(e||""));case 4:case"end":return r.stop()}}))}},{key:"getFrom",value:function(){var t;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(c.a.getLocalStoreByKey("from"));case 2:return(t=e.sent)||(t=window.prompt("Please enter a sender identifier. You can set a default one in the settings.")),e.abrupt("return",t);case 5:case"end":return e.stop()}}))}},{key:"getApiKey",value:function(){var t;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(c.a.getLocalStoreByKey("apiKey"));case 2:if((t=e.sent)&&t.length){e.next=5;break}throw new Error("Your API key must be set in order to send SMS.");case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}))}}]),t}()},23:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:l,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",y={};function d(){}function v(){}function g(){}var m={};m[a]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(_([])));x&&x!==r&&n.call(x,a)&&(m=x);var b=g.prototype=d.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){var e;this._invoke=function(r,o){function a(){return new Promise((function(e,a){!function e(r,o,a,i){var c=s(t[r],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,i)}))}i(c.arg)}(r,o,e,a)}))}return e=e?e.then(a,a):a()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function _(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=b.constructor=g,g.constructor=v,g[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[i]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o){var a=new E(u(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},3:function(t,e,r){t.exports=r(23)},6:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(8),o=r(9),a=function(){function t(){Object(n.a)(this,t)}return Object(o.a)(t,null,[{key:"getLocalStoreByKey",value:function(t){return new Promise((function(e,r){return chrome.storage.sync.get(t,(function(n){return chrome.runtime.lastError?r(Error(chrome.runtime.lastError.message)):e(n[t])}))}))}},{key:"isValidUrl",value:function(t){try{return new URL(t),!0}catch(t){return!1}}},{key:"setLocalStoreByKey",value:function(t,e){var r={};return r[t]=e,chrome.runtime.sendMessage(r),chrome.storage.sync.set(r),r}}]),t}()},8:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},9:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return o}))},90:function(t,e,r){"use strict";r.r(e);var n=r(3),o=r.n(n),a=r(21);r(91),r(92),r(93),r(94);chrome.contextMenus.onClicked.addListener((function(t,e){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a.a,e.next=3,o.a.awrap(a.a.getText(t.selectionText));case 3:return e.t1=e.sent,e.abrupt("return",e.t0.send.call(e.t0,e.t1));case 5:case"end":return e.stop()}}))})),chrome.runtime.onInstalled.addListener((function(){return chrome.contextMenus.create({contexts:["selection"],title:"Send SMS via Sms77.io"})}))},91:function(t,e,r){t.exports=r.p+"icon16.png"},92:function(t,e,r){t.exports=r.p+"icon19.png"},93:function(t,e,r){t.exports=r.p+"icon48.png"},94:function(t,e,r){t.exports=r.p+"icon128.png"}});