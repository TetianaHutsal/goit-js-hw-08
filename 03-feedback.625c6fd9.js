function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var o,i,r,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,u=setTimeout(S,t),l?b(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function S(){var e=m();if(O(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?v(n,r-(e-c)):n}(e))}function h(e){return u=void 0,p&&o?b(e):(o=i=void 0,a)}function w(){var e=m(),n=O(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},w.flush=function(){return void 0===u?a:h(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),j=b.querySelector('input[name="email"]'),O=b.querySelector('textarea[name="message"]'),S=e(t)((()=>{const e={email:j.value,message:O.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);b.addEventListener("input",S),document.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const{email:t,message:n}=JSON.parse(e);j.value=t,O.value=n}})),b.addEventListener("submit",(function(e){e.preventDefault();const t=j.value,n=O.value;localStorage.removeItem("feedback-form-state"),j.value="",O.value="";const o={email:t,message:n};console.log(o)}));
//# sourceMappingURL=03-feedback.625c6fd9.js.map
