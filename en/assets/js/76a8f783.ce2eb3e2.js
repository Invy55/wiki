"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8318],{3905:function(e,r,i){i.d(r,{Zo:function(){return s},kt:function(){return d}});var t=i(67294);function n(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function o(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?o(Object(i),!0).forEach((function(r){n(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}function l(e,r){if(null==e)return{};var i,t,n=function(e,r){if(null==e)return{};var i,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],r.indexOf(i)>=0||(n[i]=e[i]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],r.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=t.createContext({}),p=function(e){var r=t.useContext(c),i=r;return e&&(i="function"==typeof e?e(r):a(a({},r),e)),i},s=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(i),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return i?t.createElement(f,a(a({ref:r},s),{},{components:i})):t.createElement(f,a({ref:r},s))}));function d(e,r){var i=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<o;p++)a[p]=i[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},84741:function(e,r,i){i.r(r),i.d(r,{assets:function(){return c},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var t=i(83117),n=(i(67294),i(3905));const o={title:"Compilare dal sorgente",slug:"/marlin/compilazione/compilare_il_sorgente"},a=void 0,l={unversionedId:"marlin/compilare_il_firmware/compilare_dal_sorgente",id:"marlin/compilare_il_firmware/compilare_dal_sorgente",title:"Compilare dal sorgente",description:"Visto che fidarsi e' bene, ma non fidarsi e meglio, e chi fa da se' fa per tre, compilarsi da soli il firmware non e' solo una esperienza gratificante, ma e' il miglior modo per avere sotto controllo tutte le impostazioni ed aggiungerne di nuove a seconda dei propri bisogni",source:"@site/docs/marlin/compilare_il_firmware/compilare_dal_sorgente.md",sourceDirName:"marlin/compilare_il_firmware",slug:"/marlin/compilazione/compilare_il_sorgente",permalink:"/en/docs/marlin/compilazione/compilare_il_sorgente",draft:!1,editUrl:"https://github.com/flyingbear-club-ita/wiki/tree/master/docs/marlin/compilare_il_firmware/compilare_dal_sorgente.md",tags:[],version:"current",frontMatter:{title:"Compilare dal sorgente",slug:"/marlin/compilazione/compilare_il_sorgente"}},c={},p=[{value:"Setup",id:"setup",level:2}],s={toc:p};function u(e){let{components:r,...i}=e;return(0,n.kt)("wrapper",(0,t.Z)({},s,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Visto che fidarsi e' bene, ma non fidarsi e meglio, e chi fa da se' fa per tre, compilarsi da soli il firmware non e' solo una esperienza gratificante, ma e' il miglior modo per avere sotto controllo tutte le impostazioni ed aggiungerne di nuove a seconda dei propri bisogni"),(0,n.kt)("p",null,"Un esempio perfetto e' la configurazione del BL touch: alcuni utenti preferiscono fare la calibrazione su 9 punti, altri si accontentano di 5, c'e' anche chi si fa delle griglie 4x4 per calibrare... "),(0,n.kt)("p",null,"Questa configurazione puo' essere impostata solo dal firmware, non e' possibile decidere tramite UI, quindi avere dimestichezza col sorgente potrebbe essere importante per ottenere settaggi custom il piu' vicino possible alle nostre esigenze"),(0,n.kt)("p",null,"Prima di cominciare, chiariamo un paio di concetti"),(0,n.kt)("p",null,"Il firmware che gira sulle nostre stampanti e' ottimizzato per massimizzare le prestazioni della macchina ed e' scritto in binario (sequenze di 1 e 0), perche' la macchina e' \"stupida\" e questo e' l'unico linguaggio che riesce ad interpretare"),(0,n.kt)("p",null,"Il problema e' che le sequenze binarie sono difficili da interpretare per gli essere umani"),(0,n.kt)("p",null,"I linguaggi di programmazione sono stati creati proprio per permettere di scrivere istruzioni comprensibili per gli esseri umani, che poi vengono tradotte nel linguaggio comprensibile dalla macchina"),(0,n.kt)("p",null,"Questo processo di traduzione si chiama ",(0,n.kt)("strong",{parentName:"p"},"compilazione")),(0,n.kt)("p",null,"Dopo questo pistolotto, cominciamo col vedere cosa ci serve per compilare"),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("p",null,"Iniziamo scaricando Visual Studio Code (VS Code), un IDE (",(0,n.kt)("strong",{parentName:"p"},"Integrated development environment"),", ambiente di sviluppo integrato) nel quale andremo ad editare il nostro sorgente"),(0,n.kt)("p",null,"Andate sulla ",(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"pagina di download")," e scaricate la versione per il vostro sistema operativo"),(0,n.kt)("p",null,"Ovviamente non vi stiamo a spiegare come installare VS Code, ma, se avete problemi, chiedete nella community"),(0,n.kt)("p",null,"Una volta installato, andiamo ad aprirlo"),(0,n.kt)("p",null,"(qui spiegare un po' come e' fatto vs code)"),(0,n.kt)("p",null,"(spiegare come installare platform io e spiegare a cosa serve il platform.ini)"),(0,n.kt)("p",null,"(link al repo di mks + scaricare)"),(0,n.kt)("p",null,"(istruzioni per le relative schede prese dal sito della mks + bottone per compilare)"))}u.isMDXComponent=!0}}]);