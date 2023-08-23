"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1797],{3905:function(e,i,t){t.d(i,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i){if(null==e)return{};var t,a,r=function(e,i){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var i=a.useContext(p),t=i;return e&&(t="function"==typeof e?e(i):l(l({},i),e)),t},s=function(e){var i=u(e.components);return a.createElement(p.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},d=a.forwardRef((function(e,i){var t=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||n;return t?a.createElement(g,l(l({ref:i},s),{},{components:t})):a.createElement(g,l({ref:i},s))}));function m(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var n=t.length,l=new Array(n);l[0]=d;var o={};for(var p in i)hasOwnProperty.call(i,p)&&(o[p]=i[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<n;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9745:function(e,i,t){t.r(i),t.d(i,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return n},metadata:function(){return o},toc:function(){return u}});var a=t(83117),r=(t(67294),t(3905));const n={title:"Kiauh",slug:"/klipper/kiauh",keywords:["stampa 3d",'3d printing"',"flying bear","flyingbear","flying bear ghost","flyingbear ghost","flyingbear ghost 5","flying bear ghost 5","stampa 3d","flyingbear ghost firmware","klipper","klipper firmware"],description:"Kiauh"},l=void 0,o={unversionedId:"klipper/kiauh",id:"klipper/kiauh",title:"Kiauh",description:"Kiauh",source:"@site/docs/klipper/kiauh.md",sourceDirName:"klipper",slug:"/klipper/kiauh",permalink:"/en/docs/klipper/kiauh",draft:!1,editUrl:"https://github.com/flyingbear-club-ita/wiki/tree/master/docs/klipper/kiauh.md",tags:[],version:"current",frontMatter:{title:"Kiauh",slug:"/klipper/kiauh",keywords:["stampa 3d",'3d printing"',"flying bear","flyingbear","flying bear ghost","flyingbear ghost","flyingbear ghost 5","flying bear ghost 5","stampa 3d","flyingbear ghost firmware","klipper","klipper firmware"],description:"Kiauh"}},p={},u=[],s={toc:u};function c(e){let{components:i,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Come accennato precedentemente, kiauh e' un tool per la gestione dell'installazione delle varie utility necessarie per far girare e gestire klipper"),(0,r.kt)("p",null,"Potete trovare ulteriori informazioni riguardo Kiauh qui (",(0,r.kt)("strong",{parentName:"p"},"inserire link di kiauh ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/dw-0/kiauh"},"https://github.com/dw-0/kiauh")),")"),(0,r.kt)("p",null,"Una volta entrati nella riga di comando, assicuriamoci di installare ",(0,r.kt)("strong",{parentName:"p"},"git"),", un software per la gestione del codice, necessario per scaricare il sorgente di kiauh, che poi andremo ad utilizzare per installare klipper e tutte le sue componenti"),(0,r.kt)("p",null,"Per installare git, scrivete, nella shell:"),(0,r.kt)("p",null,"sudo apt-get update && sudo apt-get install git -y"),(0,r.kt)("p",null,"Il primo comando scarica gli update del sistema, ma, se avete seguito i passi precedenti, non dovrebbe fare niente, mentre il secondo installa git"),(0,r.kt)("p",null,"Una volta completata l'installazione, per installare kiauh, inserite nella shell:"),(0,r.kt)("p",null,"cd ~ && git clone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dw-0/kiauh.git"},"https://github.com/dw-0/kiauh.git")),(0,r.kt)("p",null,"Con questo comando, ci assicuriamo di essere nella home directory (e' una directory in cui l'utente ha diritto a scrivere e leggere i dati), per poi scaricare il codice sorgent di kiauh, che verra' salvato nella directory chiamata ",(0,r.kt)("strong",{parentName:"p"},"kiauh")),(0,r.kt)("p",null,"Il download dura giusto un paio di secondi, poi dovrebbe esserci una nuova directory chiamata kiauh"),(0,r.kt)("p",null,"Muoviamoci nella directory:"),(0,r.kt)("p",null,"cd kiauh"),(0,r.kt)("p",null,"E, da li', inviamo il comando per lanciare kiauh:"),(0,r.kt)("p",null,"./kiauh.sh"),(0,r.kt)("p",null,"(inserire qui kiauh3.png)"),(0,r.kt)("p",null,"A questo punto, dovrebbe comparire un menu testuale, come in foto"),(0,r.kt)("p",null,"(inserire qui kiauhMenu)"),(0,r.kt)("p",null,'Cominciamo ad installare, scegliendo come opzione "1". Si aprira\' il seguente menu testuale'),(0,r.kt)("p",null,"La prima cosa da installare e' Klipper, quindi selezioniamo \"1\", seguendo poi le opzioni consigliate (python 3.x, numero di stampanti da gestire con Klipper). Ovviamente potete fare come vi pare, ma noi consigliamo di seguire la procedura standard. Anche qui prendetevi una pausa, perche' per l'installazione di Klipper ci vuole un bel po'"),(0,r.kt)("p",null,"Verso la fine, vi verra' chiesto di aggiungere l'utente al gruppo TTY, per connettersi, successivamente, alla stampante dalla raspberry pi\nQuando vi verra' richiesto di aggiungere il vostro utente a questo gruppo, confermate"),(0,r.kt)("p",null,"(aggiungere screen qui)"),(0,r.kt)("p",null,"A questo l'installazione di klipper dovrebbe essere completata e un messaggio positivo dovrebbe comparire nella shell"),(0,r.kt)("h1",{id:"moonraker"},"Moonraker"),(0,r.kt)("p",null,"non so a cosa cazzo serva, pero' va installato"),(0,r.kt)("p",null,"Dovrebbe essere il server, infatti alla fine dell'installazione rilascia un indirizzo ip"),(0,r.kt)("h1",{id:"fluidd-o-mainsail"},"Fluidd o Mainsail"),(0,r.kt)("p",null,"Sono interfacce grafiche"),(0,r.kt)("p",null,"Questa e' una scelta dovuta alle vostre preferenze\nIo preferisco fluidd, ma la procedura di installazione e' identica"),(0,r.kt)("p",null,'Selezionate l\'opzione "4" per Fluidd ("3" per Mainsail) e completate la procedura di installazione'),(0,r.kt)("h1",{id:"primo-avvio"},"Primo avvio"),(0,r.kt)("p",null,"Completata la procedura di installazione di Fluidd (o Mainsail), assicuriamoci che la macchina sia raggiungibile, che il server sia attivo e che l'interfaccia grafica sia disponibile"),(0,r.kt)("p",null,"Apriamo il browser ed andiamo al dominio scelto per la stampante, nel mio caso kp3s.local"),(0,r.kt)("p",null,"(inserire foto della ui di fluidd)"),(0,r.kt)("p",null,"Ottimo, adesso e' tutto pronto! Prima di passare alla configurazione del firmware per la stampante, pero', scarichiamo tutti gli aggiornamenti per Fluidd"),(0,r.kt)("p",null,"Dal menu sulla sinistra, clicchiamo sull'icona dell'ingranaggio e, dal menu che si aprira', selezioniamo ",(0,r.kt)("strong",{parentName:"p"},"Software Updates"),". Da li' andiamo in basso, clicchiamo su Check for Updates, poi su Update All, oppure sulle singole voci, se Update All non e' attivo"),(0,r.kt)("p",null,"Come al solito, mettetevi comodi: potrebbe volerci un po' di tempo..."),(0,r.kt)("p",null,"Adesso Klipper e' installato, il server funziona e fluidd e' attivato! Ora passiamo a flashare il firmware sulla macchina"))}c.isMDXComponent=!0}}]);