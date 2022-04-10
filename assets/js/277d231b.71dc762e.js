"use strict";(self.webpackChunkduckify=self.webpackChunkduckify||[]).push([[35],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4051:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],u={},l="Arduino",s={unversionedId:"arduino",id:"arduino",title:"Arduino",description:"About",source:"@site/docs/arduino.md",sourceDirName:".",slug:"/arduino",permalink:"/docs/arduino",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/arduino.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Digispark",permalink:"/docs/digispark"}},c={},d=[{value:"About",id:"about",level:2},{value:"Arduino-IDE Setup",id:"arduino-ide-setup",level:2},{value:"Arduino Usage",id:"arduino-usage",level:2},{value:"Changing USB VID/PID",id:"changing-usb-vidpid",level:2}],p={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"arduino"},"Arduino"),(0,i.kt)("h2",{id:"about"},"About"),(0,i.kt)("p",null,"About the Arduino Leonardo, Pro-Micro, SAMD21 and stuff"),(0,i.kt)("h2",{id:"arduino-ide-setup"},"Arduino-IDE Setup"),(0,i.kt)("p",null,"Download and install arduino\n(add board url (original no longer supported)?)\nselect the right arduino board from tools board\nselect blink example\nflash\nplug in\nsee if it works"),(0,i.kt)("h2",{id:"arduino-usage"},"Arduino Usage"),(0,i.kt)("p",null,"enter your script\nconvert to arduino\ndownload file (alternative: copy)\nopen file (alternative: new sketch and paste)\nmake sure tool -> board is selected\nclick upload\nplug in your arduino (keep reset pressed)\nas soon as it says uploading... -> release reset button!\nafter upload complete -> Disconnect!\n","[note that as soon as it's running, it will start typing after 2 seconds. keep reset buttons pressed to prevent that]"),(0,i.kt)("h2",{id:"changing-usb-vidpid"},"Changing USB VID/PID"),(0,i.kt)("p",null,"change something somewhere deep in the files - need to look this up\nalso need to loop up apple pid/vid and other famous examples"))}f.isMDXComponent=!0}}]);