"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8328],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return a?i.createElement(f,o(o({ref:t},p),{},{components:a})):i.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50297:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return n},metadata:function(){return l},toc:function(){return c}});var i=a(83117),r=(a(67294),a(3905));const n={title:"Temp Tower Cura",slug:"/slicer/cura/temptower"},o=void 0,l={unversionedId:"slicer/cura/curaTempTower",id:"slicer/cura/curaTempTower",title:"Temp Tower Cura",description:"Per migliorare la qualita' di stampa, sia in termini di stringing che di rimozione delle imprecisioni nella stesura degli strati, la prima cosa da fare e' conoscere bene il materiale col quale si sta lavorando e, di conseguenza, cambiare i parametri in base ai risultati di determinati test",source:"@site/docs/slicer/cura/curaTempTower.md",sourceDirName:"slicer/cura",slug:"/slicer/cura/temptower",permalink:"/en/docs/slicer/cura/temptower",draft:!1,editUrl:"https://github.com/flyingbear-club-ita/wiki/tree/master/docs/slicer/cura/curaTempTower.md",tags:[],version:"current",frontMatter:{title:"Temp Tower Cura",slug:"/slicer/cura/temptower"},sidebar:"docs",previous:{title:"Mks Wifi Plugin",permalink:"/en/docs/slicer/cura/mkswifi"},next:{title:"Ideamaker - Introduzione",permalink:"/en/docs/slicer/ideamaker"}},s={},c=[{value:"Cosa e&#39; una temp tower",id:"cosa-e-una-temp-tower",level:2},{value:"Come si realizza una temp tower?",id:"come-si-realizza-una-temp-tower",level:2},{value:"Come si legge una temp tower?",id:"come-si-legge-una-temp-tower",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Per migliorare la qualita' di stampa, sia in termini di stringing che di rimozione delle imprecisioni nella stesura degli strati, la prima cosa da fare e' conoscere bene il materiale col quale si sta lavorando e, di conseguenza, cambiare i parametri in base ai risultati di determinati test"),(0,r.kt)("p",null,"Il test piu' semplice e di piu' facile interpretazione e' la temp tower"),(0,r.kt)("h2",{id:"cosa-e-una-temp-tower"},"Cosa e' una temp tower"),(0,r.kt)("p",null,"Una temp tower e' un modello stl con una geometria ben definita, che permette di osservare i risultati del cambio di temperatura dell'ugello"),(0,r.kt)("p",null,"Il concetto della temp tower e' semplice: ci sono diversi livelli di una ben determinata altezza, per ogni livello, attraverso l'uso del gcode, possiamo cambiare la temperatura dell'ugello per ognuno di questi livelli, ottenendo un riscontro fisico delle prestazioni del materiale a diverse temperature"),(0,r.kt)("p",null,"Le temp tower piu' comuni sono le seguenti:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.thingiverse.com/thing:2493504"},"Temp Tower"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.thingiverse.com/thing:3547428"},"Temp Tower Clip")),(0,r.kt)("p",null,"Alcune temp tower sono direttamente in formato gcode, ma questo e' un procedimento sconsigliato, perche' vuol dire che, ad esempio, la distanza di retrazione e' gia' impostata, mentre e' preferibile testare il materiale con le impostazioni che poi verranno utilizzate in fase di stampa"),(0,r.kt)("h2",{id:"come-si-realizza-una-temp-tower"},"Come si realizza una temp tower?"),(0,r.kt)("p",null,"Per prima cosa, scegliere un modello da scaricare da Thingiverse ed aprirlo con Cura"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(67232).Z}," ",(0,r.kt)("img",{alt:"importa temp tower",src:a(10447).Z,width:"1200",height:"675"})," ")),(0,r.kt)("p",null,"Se la temp tower viene importata ruotata, posizionarla verticalmente, perche' il cambio di temperatura occorrera' sull'asse delle Z"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(3541).Z}," ",(0,r.kt)("img",{alt:"ruota temp tower",src:a(37150).Z,width:"1200",height:"675"})," ")),(0,r.kt)("p",null,"Nell'esempio ho importato una temp tower con le didascalie per temperature da 190 a 220, range tipico del PLA (quella del secondo link qui sopra)"),(0,r.kt)("p",null,"Una volta importato e ruotato il modello, aprire il menu Extensions, selezionare post processing e, infine, modificare g-code"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(62779).Z}," ",(0,r.kt)("img",{alt:"Menu Extensions",src:a(40131).Z,width:"1200",height:"683"})," ")),(0,r.kt)("p",null,"Si aprira una finestra, nella quale si dovra' selezionare Add Script e scegliere, tra la lista di opzioni, Change At Z"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(93749).Z}," ",(0,r.kt)("img",{alt:"Menu Extensions",src:a(37284).Z,width:"600",height:"453"})," ")),(0,r.kt)("p",null,"Una volta selezionato Change At Z, sulla sinistra si aprira' una schermata di configurazione del cambiamento richiesto."),(0,r.kt)("p",null,"La mia temp tower ha gli strati di esattamente 5mm, quindi il cambio avverra', con questa temp tower, a 5mm. Con temp tower diverse, questo valore dovra' essere modifcato"),(0,r.kt)("p",null,"Tra le varie opzioni, selezionare Temperatura Estrusore 1, poi inserire un valore pari a TEMPERATURA_INIZIALE - 5 Nel mio caso, il valore da inserire e' 215 (220 - 5)"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(85859).Z}," ",(0,r.kt)("img",{alt:"Change Temp",src:a(3005).Z,width:"600",height:"453"})," ")),(0,r.kt)("p",null,"Dopo il primo script, aggiungerne altri, fino ad arrivare alla temperatura desiderata, sempre andando a scalare di cinque gradi in cinque gradi, aggiornando l'altezza di 5mm in 5mm"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(11226).Z}," ",(0,r.kt)("img",{alt:"Final script",src:a(53001).Z,width:"600",height:"453"})," ")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Nella foto, l'altezza non e' aggiornata!")),(0,r.kt)("p",null,"Una volta terminato, cliccare su chiudi nel lato basso a destra della finestra"),(0,r.kt)("p",null,"Accanto al bottone per far partire lo slicing, comparira' una nuova icona, che rappresenta la presenza di uno o piu' script da incorporare nel gcode durante lo slicing"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(24714).Z}," ",(0,r.kt)("img",{alt:"Script Icon",src:a(81181).Z,width:"1200",height:"683"})," ")),(0,r.kt)("p",null,"Gli ultimi due passi da fare sono settare l'altezza dello strato e la temperatura inziale"),(0,r.kt)("p",null,"Per la temperatura iniziale, assicurarsi che sia la stessa del valore piu' alto della temp tower"),(0,r.kt)("p",null,"Per l'altezza dello strato, controllare che lo strato sia un divisore dell'altezza dei livelli"),(0,r.kt)("p",null,"Adesso avviate lo slicing e lanciate la stampa"),(0,r.kt)("h2",{id:"come-si-legge-una-temp-tower"},"Come si legge una temp tower?"),(0,r.kt)("p",null,"Semplice: basta dare un'occhiata al risultato e vedere quale impostazione si avvicini di piu' al risultato desiderato."),(0,r.kt)("p",null,"I parametri piu' comuni, comunque, sono omogeneita delle pareti, fusione degli strati, pendenze e, nel caso di alcune torri, stringing."),(0,r.kt)("p",null,"Per alcuni di questi parametri, non esistono criteri oggettivi, a volte sara' necessario scegliere la temperatura in base al tipo di stampa che si intende fare"))}u.isMDXComponent=!0},93749:function(e,t,a){t.Z=a.p+"assets/files/changeAtz-add1defaa58fde7890dd110bafcaf169.png"},85859:function(e,t,a){t.Z=a.p+"assets/files/changeTemp-f2349adfde6c9d20728b4b1e5250cf2d.png"},11226:function(e,t,a){t.Z=a.p+"assets/files/finalScript-08ba1bd2344066fa1b266eb42477235a.png"},67232:function(e,t,a){t.Z=a.p+"assets/files/importaTempTower-06cc130c770102c1dda030b920dd23d5.png"},3541:function(e,t,a){t.Z=a.p+"assets/files/rotateTempTower-58dfbe280bea220476f9a714de08e795.png"},24714:function(e,t,a){t.Z=a.p+"assets/files/scriptIcon-92f7f8afa2cb2365c0c7a8b2cd080492.png"},62779:function(e,t,a){t.Z=a.p+"assets/files/towerUpward-ba274d7ae54666ae5643f6323d103966.png"},37284:function(e,t,a){t.Z=a.p+"assets/images/changeAtz-add1defaa58fde7890dd110bafcaf169.png"},3005:function(e,t,a){t.Z=a.p+"assets/images/changeTemp-f2349adfde6c9d20728b4b1e5250cf2d.png"},53001:function(e,t,a){t.Z=a.p+"assets/images/finalScript-08ba1bd2344066fa1b266eb42477235a.png"},10447:function(e,t,a){t.Z=a.p+"assets/images/importaTempTower-06cc130c770102c1dda030b920dd23d5.png"},37150:function(e,t,a){t.Z=a.p+"assets/images/rotateTempTower-58dfbe280bea220476f9a714de08e795.png"},81181:function(e,t,a){t.Z=a.p+"assets/images/scriptIcon-92f7f8afa2cb2365c0c7a8b2cd080492.png"},40131:function(e,t,a){t.Z=a.p+"assets/images/towerUpward-ba274d7ae54666ae5643f6323d103966.png"}}]);