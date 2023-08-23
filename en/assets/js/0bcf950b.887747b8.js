"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6336],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),u=o,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37674:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(67294);class o extends n.Component{componentDidMount(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}render(){return n.createElement("div",{className:"displayAd",key:Math.random()},n.createElement("ins",{className:"adsbygoogle",key:Math.random(),style:{display:"block",textAlign:"center"},"data-ad-client":"ca-pub-3253384067482467","data-ad-slot":"5610548275","data-ad-format":"auto"}))}}},57106:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=r(83117),o=(r(67294),r(3905)),a=r(37674);const i={title:"How to restore bootloader using ST-LINK Utility",slug:"/firmware/ripristino_bootloader_alternativo",description:"Alternative guide to restore the bootloader when flashing the wrong firmware for Flyingbear Ghost 5"},l=void 0,s={unversionedId:"firmware/ripristino_bootloader_alternativo",id:"firmware/ripristino_bootloader_alternativo",title:"How to restore bootloader using ST-LINK Utility",description:"Alternative guide to restore the bootloader when flashing the wrong firmware for Flyingbear Ghost 5",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/firmware/ripristino_bootloader_alternativo.md",sourceDirName:"firmware",slug:"/firmware/ripristino_bootloader_alternativo",permalink:"/en/docs/firmware/ripristino_bootloader_alternativo",draft:!1,editUrl:"https://github.com/flyingbear-club-ita/wiki/tree/master/docs/firmware/ripristino_bootloader_alternativo.md",tags:[],version:"current",frontMatter:{title:"How to restore bootloader using ST-LINK Utility",slug:"/firmware/ripristino_bootloader_alternativo",description:"Alternative guide to restore the bootloader when flashing the wrong firmware for Flyingbear Ghost 5"},sidebar:"docs",previous:{title:"How to restore the bootloader",permalink:"/en/docs/firmware/ripristino_bootloader"},next:{title:"Slicers in general",permalink:"/en/docs/slicer"}},p={},c=[{value:"Download",id:"download",level:2},{value:"Procedure",id:"procedure",level:2}],d={toc:c};function f(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you have a very old OS, or you've had some trouble restoring the bootloader using STM32 Cube Programmer, you can try to use an alternative software, called STM32 ST-Link Utility"),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"STM32 ST-Link Utility can be downloaded from ",(0,o.kt)("a",{parentName:"p",href:"https://www.st.com/en/development-tools/stsw-link004.html#get-software"},"this link")),(0,o.kt)(a.Z,{mdxType:"DisplayAd"}),(0,o.kt)("h2",{id:"procedure"},"Procedure"),(0,o.kt)("p",null,"After downloading the software above, open STM32 ST-LINK Utility and follow the next steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"File")," and, next, on ",(0,o.kt)("strong",{parentName:"p"},"Open File\u2026"),", then select the ",(0,o.kt)("strong",{parentName:"p"},"Robin_nano35_v13_f4_boot_210615.hex")," file previously downloaded\n",(0,o.kt)("a",{target:"_blank",href:r(22989).Z}," ",(0,o.kt)("img",{alt:"STM32 ST-Link Open File",src:r(1148).Z,width:"889",height:"642"})," "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"ST-LINK"),", then select ",(0,o.kt)("strong",{parentName:"p"},"printf via SWO viewer")," and finally click on ",(0,o.kt)("strong",{parentName:"p"},"Start"),"\n",(0,o.kt)("a",{target:"_blank",href:r(55273).Z}," ",(0,o.kt)("img",{alt:"STM32 ST-Link Start Procedure",src:r(86204).Z,width:"849",height:"618"})," "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Close the window that just opened by clicking on the X, ",(0,o.kt)("strong",{parentName:"p"},"without pressing stop neither moving it"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Target"),", then on ",(0,o.kt)("strong",{parentName:"p"},"Erase Chip")," and confirm. Wait for the end of the process before moving on to the next step\n",(0,o.kt)("a",{target:"_blank",href:r(61324).Z}," ",(0,o.kt)("img",{alt:"STM32 ST-Link Erase chip",src:r(90535).Z,width:"851",height:"619"})," "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Target"),", then on ",(0,o.kt)("strong",{parentName:"p"},"Program\u2026"),", then on ",(0,o.kt)("strong",{parentName:"p"},"Start")," and wait for procedure to complete\n",(0,o.kt)("a",{target:"_blank",href:r(18369).Z}," ",(0,o.kt)("img",{alt:"STM32 ST-Link Program",src:r(4424).Z,width:"995",height:"724"})," "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the step above is completed, you can disconnect the ST-LINK from the USB port and the cables from the motherboard. Motherboard and screen should turn off"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To complete the firmware installation, go back to the ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/firmware/ripristino_bootloader"},"previous page")," and follow the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/firmware/ripristino_bootloader#final-steps"},(0,o.kt)("strong",{parentName:"a"},"Final Steps"))," section")),(0,o.kt)(a.Z,{mdxType:"DisplayAd"}))}f.isMDXComponent=!0},22989:function(e,t,r){t.Z=r.p+"assets/files/07-548b393035dce7031d63cef8883c5d4b.png"},55273:function(e,t,r){t.Z=r.p+"assets/files/08-8faa1d0cc02e50ed50691faec58fe2b0.png"},61324:function(e,t,r){t.Z=r.p+"assets/files/09-03a5cee3887d211ec6f453f3272e805c.png"},18369:function(e,t,r){t.Z=r.p+"assets/files/10-64f20b8a2ad6510bfda6740b2326172f.png"},1148:function(e,t,r){t.Z=r.p+"assets/images/07-548b393035dce7031d63cef8883c5d4b.png"},86204:function(e,t,r){t.Z=r.p+"assets/images/08-8faa1d0cc02e50ed50691faec58fe2b0.png"},90535:function(e,t,r){t.Z=r.p+"assets/images/09-03a5cee3887d211ec6f453f3272e805c.png"},4424:function(e,t,r){t.Z=r.p+"assets/images/10-64f20b8a2ad6510bfda6740b2326172f.png"}}]);