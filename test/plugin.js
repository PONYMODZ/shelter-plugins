(()=>{var a=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var f=(n,o)=>{for(var l in o)a(n,l,{get:o[l],enumerable:!0})},g=(n,o,l,d)=>{if(o&&typeof o=="object"||typeof o=="function")for(let e of t(o))!u.call(n,e)&&e!==l&&a(n,e,{get:()=>o[e],enumerable:!(d=c(o,e))||d.enumerable});return n};var h=n=>g(a({},"__esModule",{value:!0}),n);var r={};f(r,{onLoad:()=>i,onUnload:()=>p});function i(){console.log("I have loaded!")}function p(){console.log("I have unloaded...")}return h(r);})();
