"use strict";(self.webpackChunkduckify=self.webpackChunkduckify||[]).push([[108],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8947:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={},p="Digispark",s={unversionedId:"digispark",id:"digispark",title:"Digispark",description:"About",source:"@site/docs/digispark.md",sourceDirName:".",slug:"/digispark",permalink:"/docs/digispark",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/digispark.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Arduino",permalink:"/docs/arduino"},next:{title:"Scripting",permalink:"/docs/scripting"}},u={},d=[{value:"About",id:"about",level:2},{value:"Drivers",id:"drivers",level:2},{value:"Arduino-IDE Setup",id:"arduino-ide-setup",level:2},{value:"Duckify Usage",id:"duckify-usage",level:2},{value:"Changing USB VID/PID",id:"changing-usb-vidpid",level:2}],c={toc:d};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"digispark"},"Digispark"),(0,r.kt)("h2",{id:"about"},"About"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Digispark",src:n(9853).Z,title:":size=200",width:"1200",height:"900"})),(0,r.kt)("p",null,"The Digispark is a very simplistic development board.\nIt's based on the ATTiny85, is Arduino compatible, has a USB-A plug built-in (so no dangling cables!), and it's very affordable!"),(0,r.kt)("p",null,"The Digispark comes with a keyboard library that allows us to utilize it as a BadUSB."),(0,r.kt)("p",null,"\ud83d\udecd\ufe0f Amazon.com affiliate Link: ",(0,r.kt)("a",{parentName:"p",href:"https://amzn.to/3KjGhWq"},"https://amzn.to/3KjGhWq"),(0,r.kt)("br",{parentName:"p"}),"\n","\ud83d\udecd\ufe0f Amazon.de affiliate Link: ",(0,r.kt)("a",{parentName:"p",href:"https://amzn.to/3tuJ6xh"},"https://amzn.to/3tuJ6xh")),(0,r.kt)("h2",{id:"drivers"},"Drivers"),(0,r.kt)("p",null,"Download Digispark drivers for Windows here:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/digistump/DigistumpArduino/releases/download/1.6.7/Digistump.Drivers.zip"},"https://github.com/digistump/DigistumpArduino/releases/download/1.6.7/Digistump.Drivers.zip"),(0,r.kt)("br",{parentName:"p"}),"\n",'Unzip and run "Install Drivers.exe". Without the drivers, you might be unable to flash the Digispark.'),(0,r.kt)("h2",{id:"arduino-ide-setup"},"Arduino-IDE Setup"),(0,r.kt)("p",null,"Before you can start using the Digispark, you have to prepare Arduino IDE:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download and Install Arduino IDE: ",(0,r.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"https://www.arduino.cc/en/software")),(0,r.kt)("li",{parentName:"ol"},"Open Arduino IDE"),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("em",{parentName:"li"},"File > Preferences > Additional Boards Manager URLs")," and paste ",(0,r.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/ArminJo/DigistumpArduino/master/package_digistump_index.json")," then click OK to save and close the Preferences"),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("em",{parentName:"li"},"Tools > Board > Boards Manager"),", search for ",(0,r.kt)("inlineCode",{parentName:"li"},"Digispark"),' and install "Digistump AVR Boards"')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Digispark Board URL",src:n(2419).Z,width:"1920",height:"1080"}),"\n",(0,r.kt)("img",{alt:"Install Digispark Boards",src:n(1399).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"With that out of the way, let's upload your first sketch to the Digispark to make sure everything is properly set up before you use it as a BadUSB."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("em",{parentName:"li"},"Tools > Board > Digistump Boards")," and select ",(0,r.kt)("em",{parentName:"li"},"Digispark")),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("em",{parentName:"li"},"File > Examples > Digispark_Examples > Blink")),(0,r.kt)("li",{parentName:"ol"},"Click Upload (in the top left)"),(0,r.kt)("li",{parentName:"ol"},"Insert your Digispark when told (you'll see the output at the bottom)"),(0,r.kt)("li",{parentName:"ol"},"When done, the LED on your Digispark should now blink")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[!NOTE]","\nDigispark goes into a bootloader mode for 6 seconds when plugged in. If no new firmware is uploaded, it will leave this mode and run the code you flashed onto it. You will ",(0,r.kt)("strong",{parentName:"p"},"always have this 6-second delay")," before your code starts.")),(0,r.kt)("h2",{id:"duckify-usage"},"Duckify Usage"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Duckify Digispark Screenshot",src:n(5098).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,'Enter your BadUSB Script on the left.\nFor example, wait 5 seconds and then type out "Hello World": '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DELAY 5000\nSTRING Hello World\n")),(0,r.kt)("p",null,"At the bottom, set the system and layout according to your target.",(0,r.kt)("br",{parentName:"p"}),"\n","For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"win")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DE")," for a German Windows machine.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Make sure mode is on ",(0,r.kt)("inlineCode",{parentName:"strong"},"Digispark")),".",(0,r.kt)("br",{parentName:"p"}),"\n","Optionally you can also specify a script name, which is used as a filename when you download a script.  "),(0,r.kt)("p",null,"Click on convert at the bottom right.  "),(0,r.kt)("p",null,"Collect the converted sketch on the right output area. You can copy and paste it in Arduino or download and open the sketch.\nUpload the sketch to your Digispark and enjoy your BadUSB."),(0,r.kt)("h2",{id:"changing-usb-vidpid"},"Changing USB VID/PID"),(0,r.kt)("p",null,"You can make the Digispark appear as an Apple keyboard, so an Apple computer will recognize it and skip the keyboard setup assistant.\nBut to achieve this, you have to manipulate the USB PID (Product ID) and VID (Vendor ID) deep in the Arduino Digispark files:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Arduino Path",src:n(9220).Z,width:"1920",height:"1080"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Arduino, open ",(0,r.kt)("em",{parentName:"li"},"File > Preferences")),(0,r.kt)("li",{parentName:"ol"},"Click on the Path at the bottom (it's a shortcut)"),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("em",{parentName:"li"},"packages > digistump > hardware > avr > 1.7.5 (or other version number) > libraries > DigiKeyboard")),(0,r.kt)("li",{parentName:"ol"},"Make a copy of ",(0,r.kt)("em",{parentName:"li"},"usbconfig.h")," and call it ",(0,r.kt)("em",{parentName:"li"},"usbconfig_BACKUP.h")," in case something goes wrong, and you want to undo the changes"),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("em",{parentName:"li"},"usbconfig.h")," in a text editor"),(0,r.kt)("li",{parentName:"ol"},"Replace the following lines:  ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#define USB_CFG_VENDOR_ID 0xc0, 0x16"),"\nto ",(0,r.kt)("inlineCode",{parentName:"li"},"#define USB_CFG_VENDOR_ID 0xAC, 0x05")," to use 05AC as USB VID which is owned to Apple."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#define USB_CFG_DEVICE_ID 0xdb, 0x28"),"\nto ",(0,r.kt)("inlineCode",{parentName:"li"},"#define USB_CFG_DEVICE_ID 0x50, 0x02")," to use  0250 as USB PID which is the Apple Aluminium Keyboard with ISO layout."),(0,r.kt)("li",{parentName:"ul"},"[Optional]"," Change ",(0,r.kt)("inlineCode",{parentName:"li"},"#define USB_CFG_VENDOR_NAME     'd','i','g','i','s','t','u','m','p','.','c','o','m'"),"\nto ",(0,r.kt)("inlineCode",{parentName:"li"},"#define USB_CFG_VENDOR_NAME     'A','p','p','l','e'"),"\nand ",(0,r.kt)("inlineCode",{parentName:"li"},"#define USB_CFG_VENDOR_NAME_LEN 13"),"\nto ",(0,r.kt)("inlineCode",{parentName:"li"},"#define USB_CFG_VENDOR_NAME_LEN 5")),(0,r.kt)("li",{parentName:"ul"},"[Optional]"," Change ",(0,r.kt)("inlineCode",{parentName:"li"},"#define USB_CFG_DEVICE_NAME     'D','i','g','i','K','e','y'")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"#define USB_CFG_DEVICE_NAME     'K','e','y','b','o','a','r','d'")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"#define USB_CFG_DEVICE_NAME_LEN 7")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"#define USB_CFG_DEVICE_NAME_LEN 7"))))}m.isMDXComponent=!0},9220:function(e,t,n){t.Z=n.p+"assets/images/Arduino-Path-af38afc4a7f2753d61f57a101fe65573.jpg"},2419:function(e,t,n){t.Z=n.p+"assets/images/Digispark-URL-Arduino-bba673ea3224d7cd69402af7f87ac42f.jpg"},9853:function(e,t,n){t.Z=n.p+"assets/images/Digispark-261a638e874b5256b466bc629e61bee0.jpg"},1399:function(e,t,n){t.Z=n.p+"assets/images/Install-Digispark-49e671ad39edaedcd2bbebe2e5448c9b.jpg"},5098:function(e,t,n){t.Z=n.p+"assets/images/duckify-screenshot-c585e196a0c5281b9c14a9797cf62935.jpg"}}]);