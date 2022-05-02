"use strict";(self.webpackChunkduckify=self.webpackChunkduckify||[]).push([[475],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),p=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(n),s=a,k=c["".concat(d,".").concat(s)]||c[s]||u[s]||i;return n?r.createElement(k,l(l({ref:e},m),{},{components:n})):r.createElement(k,l({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3513:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"functions",title:"Functions"},d=void 0,p={unversionedId:"scripting/functions",id:"scripting/functions",title:"Functions",description:"| Command | Example | Description |",source:"@site/docs/scripting/functions.md",sourceDirName:"scripting",slug:"/scripting/functions",permalink:"/docs/scripting/functions",editUrl:"https://github.com/spacehuhntech/duckify/docs/scripting/functions.md",tags:[],version:"current",frontMatter:{id:"functions",title:"Functions"},sidebar:"docs",previous:{title:"Basics",permalink:"/docs/scripting/basics"},next:{title:"Keys",permalink:"/docs/scripting/keys"}},m={},u=[],c={toc:u};function s(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"#")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"REM")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"# Hello World!")),(0,i.kt)("td",{parentName:"tr",align:null},"Comment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DEFAULTDELAY")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"DEFAULT_DELAY")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DEFAULTDELAY 200")),(0,i.kt)("td",{parentName:"tr",align:null},"Time in ms between every command")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DELAY")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DELAY 1000")),(0,i.kt)("td",{parentName:"tr",align:null},"Delay in milliseconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING Hello World!")),(0,i.kt)("td",{parentName:"tr",align:null},"Types the following string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"REPEAT")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"REPLAY")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"REPEAT 3")),(0,i.kt)("td",{parentName:"tr",align:null},"Repeats the last command n times")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LSTRING_START")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"LSTRING_END")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LSTRING_START"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Hello"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"World"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"LSTRING_END")),(0,i.kt)("td",{parentName:"tr",align:null},"Types out everything in between start and end, including linebreaks.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"KEYCODE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"KEYCODE 02,04")),(0,i.kt)("td",{parentName:"tr",align:null},"Types a specific key code (modifier,key) in hexadecimal")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LOOP_START")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"LOOP_END")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LOOP_START 10"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"STRING zZ"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"LOOP_END")),(0,i.kt)("td",{parentName:"tr",align:null},"Loops everything in between start and end for a given amount of times. Create an infinite loop by specifying no number.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LED")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LED ON"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"DELAY 1000"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"LED OFF")),(0,i.kt)("td",{parentName:"tr",align:null},"Turns onboard LED on or off.")))))}s.isMDXComponent=!0}}]);