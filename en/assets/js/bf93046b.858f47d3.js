"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7321],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return A}});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(i),A=n,m=d["".concat(s,".").concat(A)]||d[A]||u[A]||r;return i?a.createElement(m,o(o({ref:t},c),{},{components:i})):a.createElement(m,o({ref:t},c))}));function A(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},43122:function(e,t,i){i.d(t,{Z:function(){return n}});var a=i(67294);class n extends a.Component{componentDidMount(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}render(){return a.createElement("ins",{className:"adsbygoogle",key:Math.random(),style:{display:"block",textAlign:"center"},"data-ad-client":"ca-pub-3253384067482467","data-ad-slot":"5484842616","data-ad-format":"auto"})}}},37674:function(e,t,i){i.d(t,{Z:function(){return n}});var a=i(67294);class n extends a.Component{componentDidMount(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}render(){return a.createElement("div",{className:"displayAd",key:Math.random()},a.createElement("ins",{className:"adsbygoogle",key:Math.random(),style:{display:"block",textAlign:"center"},"data-ad-client":"ca-pub-3253384067482467","data-ad-slot":"5610548275","data-ad-format":"auto"}))}}},44429:function(e,t,i){i.d(t,{Z:function(){return n}});var a=i(67294);class n extends a.Component{constructor(e){super(e),this.link=e.link}render(){return a.createElement("div",{id:"facebookBanner"},a.createElement("img",{id:"facebookBannerIcon",src:"/resources/facebookIcon.svg"}),a.createElement("p",{id:"facebookBannerParagraph"},a.createElement("a",{id:"facebookLink",href:this.link,target:"_blank"}," Segui la conversazione su Facebook!")))}}},63577:function(e,t,i){i.r(t),i.d(t,{PluginInfo:function(){return A},assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=i(83117),n=(i(67294),i(3905)),r=i(37674),o=i(43122),l=i(44429);const s={title:"Plugins per Octoprint",slug:"/raspberry/octoprint-plugins"},p=void 0,c={unversionedId:"raspberry/plugins",id:"raspberry/plugins",title:"Plugins per Octoprint",description:"Premessa",source:"@site/docs/raspberry/plugins.md",sourceDirName:"raspberry",slug:"/raspberry/octoprint-plugins",permalink:"/en/docs/raspberry/octoprint-plugins",draft:!1,editUrl:"https://github.com/flyingbear-club-ita/wiki/tree/master/docs/raspberry/plugins.md",tags:[],version:"current",frontMatter:{title:"Plugins per Octoprint",slug:"/raspberry/octoprint-plugins"},sidebar:"docs",previous:{title:"Octodash",permalink:"/en/docs/raspberry/octodash"},next:{title:"Due Octoprint in uno",permalink:"/en/docs/raspberry/docker"}},u={},d=[{value:"Premessa",id:"premessa",level:2},{value:"Come si installa un plugin",id:"come-si-installa-un-plugin",level:2},{value:"I migliori plugin!",id:"i-migliori-plugin",level:2}],A=e=>{let{children:t,title:i}=e;return(0,n.kt)("div",{style:{backgroundColor:"#64d4ed",borderRadius:"5px",color:"#000000",padding:"30px",margin:"10px"}},(0,n.kt)("h2",{style:{color:"#fff"}},i),t)},m={toc:d,PluginInfo:A};function g(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(r.Z,{mdxType:"DisplayAd"}),(0,n.kt)("h2",{id:"premessa"},"Premessa"),(0,n.kt)("p",null,"Per spiegarvi meglio l'utilit\xe0 dei plug in in octoprint, vediamo il nostro raspberry con Octoprint come una semplice automobile: utile per svolgere i nostri lavori e andare in giro, ma come sarebbe se avesse anche gli optional, fosse pi\xf9 comoda, avesse l'aria condizionata o il navigatore per portarci pi\xf9 velocemente a destinazione?"),(0,n.kt)("p",null,"Ecco, i plugin sono dei miglioramenti della nostra bella automobile"),(0,n.kt)("p",null,"Ad oggi ci sono 227 plug in ufficiali per octoprint (esistono anche plugin personalizzati, ma questo \xe8 un altro discorso, e pure pericoloso, perch\xe9 non sono controllati da nessuno, se non dagli autori)"),(0,n.kt)("p",null,"Oggi ne vedremo solo alcuni, i migliori per me, poi il mio giudizio \xe8 personale"),(0,n.kt)("p",null,"Se non vi va di leggere, andate a vedervi il ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=n4Lk35F1wP8&t=259s&pp=sAQA"},"video su youtube")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Se avete altri plugin da consigliare, fateci sapere!!!")),(0,n.kt)("h2",{id:"come-si-installa-un-plugin"},"Come si installa un plugin"),(0,n.kt)("p",null,"Prima di dire quali sono i migliori plug in, \xe8 importante capire come installarli"),(0,n.kt)("p",null,"L\u2019installazione dei singoli plugin \xe8 un\u2019operazione molto semplice. Octoprint, come molti altri programmi per le stampanti, ha un proprio store per i plugin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Per arrivare al menu clicchiamo sulla chiave inglese sulla barra in alto"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{target:"_blank",href:i(79713).Z}," ",(0,n.kt)("img",{alt:"Chiave Inglese",src:i(65887).Z,width:"320",height:"107"})," "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Nel menu sulla sinistra scegliamo ",(0,n.kt)("strong",{parentName:"p"},"Plugin Manager")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{target:"_blank",href:i(76811).Z}," ",(0,n.kt)("img",{alt:"Plugin Manager",src:i(74694).Z,width:"423",height:"523"})," ")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Scorriamo in basso la lista dei plugin, poi clicchiamo in alto a destra sul pulsante ",(0,n.kt)("strong",{parentName:"p"},"Get More"),","),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{target:"_blank",href:i(52377).Z}," ",(0,n.kt)("img",{alt:"Get More",src:i(69421).Z,width:"1019",height:"737"})," ")))),(0,n.kt)("p",null,"Ora abbiamo la lista dei plug-in, e nel campo ",(0,n.kt)("strong",{parentName:"p"},"Search")," andremo a digitare il nome di quello che cerchiamo. Una volta trovato, clicchiamo su ",(0,n.kt)("strong",{parentName:"p"},"Install")," ed il gioco \xe8 fatto"),(0,n.kt)("p",null,"  ",(0,n.kt)("a",{target:"_blank",href:i(13306).Z}," ",(0,n.kt)("img",{alt:"Install",src:i(69391).Z,width:"755",height:"859"})," ")),(0,n.kt)(r.Z,{mdxType:"DisplayAd"}),(0,n.kt)("h2",{id:"i-migliori-plugin"},"I migliori plugin!"),(0,n.kt)("p",null,"Ecco a voi una selezione dei migliori plug in per utilizzare al meglio Octoprint"),(0,n.kt)(A,{title:"Octoprint-FilamentManager",mdxType:"PluginInfo"},(0,n.kt)("p",null,"  ",(0,n.kt)("a",{target:"_blank",href:i(20761).Z}," ",(0,n.kt)("img",{alt:"Filament Manager",src:i(13741).Z,width:"300",height:"123"})," ")),(0,n.kt)("p",null,"Ottimo tool per vedere quanto cavo usiamo per una stampa, il costo della stampa e quanto cavo resta nella bobine (se diamo le giuste misure quando inseriamo la bobina la prima volta)"),(0,n.kt)("p",null,"Utile per sapere in anticipo se il cavo rimasto nella bobina ci potr\xe0 far finire la stampa oppure no")),(0,n.kt)(o.Z,{mdxType:"ArticleAd"}),(0,n.kt)(A,{title:"Display Layer Progress",mdxType:"PluginInfo"},(0,n.kt)("p",null,"Semplicissimo plugin che va a sopperire ad una mancanza di Octoprint, come dicevamo prima i plug in servono per migliorare il nostro bel programma, cio\xe8 quella di informarci costantemente dell\u2019altezza di stampa attuale")),(0,n.kt)(o.Z,{mdxType:"ArticleAd"}),(0,n.kt)(A,{title:"AstroPrint",mdxType:"PluginInfo"},(0,n.kt)("p",null,"Plugin secondo me ",(0,n.kt)("strong",{parentName:"p"},"indispensabile")),(0,n.kt)("p",null,"Gestione delle stampanti 3D da remoto senza mettere in pericolo la nostra rete o senza usare VPN, la versione FREE gestisce 2 stampanti"),(0,n.kt)("p",null,"Da remoto, possiamo vedere la telecamera della stampante (istantanea di una foto), stampare da Thingiverse o da una libreria in octoprint stessa "),(0,n.kt)("p",null,"Inoltre possiamo fare lo slicing di modelli STL")),(0,n.kt)(o.Z,{mdxType:"ArticleAd"}),(0,n.kt)(A,{title:"OctoPrint-PrettyGCode",mdxType:"PluginInfo"},(0,n.kt)("p",null,"Il plugin Pretty GCode \xe8 un eccellente visualizzatore di modelli 3D"),(0,n.kt)("p",null,"Fai clic sul tuo file GCode e guardalo renderizzare davanti ai tuoi occhi. Ruota, ingrandisci e rileva i problemi con i tuoi file GCode prima di stampare "),(0,n.kt)("p",null,"Pretty GCode esegue anche il rendering dei comandi arc")),(0,n.kt)(o.Z,{mdxType:"ArticleAd"}),(0,n.kt)(A,{title:"Octolapse",mdxType:"PluginInfo"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Uno dei migliori programmi di time lapse disponibili")),(0,n.kt)("p",null,"Una miriade di possibilit\xe0 di scelte, una miriade di ottimizzazioni della telecamera, una modalita per fare quasi tutto in automatico per gli scansafatiche come me")),(0,n.kt)(o.Z,{mdxType:"ArticleAd"}),(0,n.kt)(A,{title:"OctoPrint-Dashboard",mdxType:"PluginInfo"},(0,n.kt)("p",null,"Visualizzazione delle informazioni sulle stampe in corso su una dashboard pulita e visivamente organizzata, che corrisponde al tema dell'interfaccia utente di OctoPrint"),(0,n.kt)("p",null,"La dashboard funziona con PrintTimeGenius e DisplayLayerProgress per stime accurate del tempo e dati sui livelli "),(0,n.kt)("p",null,"Troverai anche alcuni pulsanti di controllo del lavoro (ad esempio avvio/arresto) e un widget webcam opzionale")),(0,n.kt)(o.Z,{mdxType:"ArticleAd"}),(0,n.kt)(A,{title:"PrintTimeGenius",mdxType:"PluginInfo"},(0,n.kt)("p",null,"Questo plug-in \xe8 molto valido per una una funzione gia' presente in octoprint, ma che viene gestita meglio"),(0,n.kt)("p",null,"I tempi calcolati da questo plug-in sono molto pi\xf9 precisi, perch\xe8 viene effettuata una analisi del gcode, ricalcolata a ogni cambio layer. In questo modo i calcoli sono pi\xf9 precisi e gli aggiustamenti sono evidenti solo nella prima parte"),(0,n.kt)("p",null,"Da usare")),(0,n.kt)(o.Z,{mdxType:"ArticleAd"}),(0,n.kt)(A,{title:"Octopod",mdxType:"PluginInfo"},(0,n.kt)("p",null,"Uno dei miei preferiti, non si scarica da octoprint ma dallo store del vostro smartphone, e potete gestire nel modo piu completo possibile la vostra stampante 3d dalla vostra LAN e, se avete una VPN, da ogni angolo del mondo"),(0,n.kt)("p",null,"Da avere")),(0,n.kt)(o.Z,{mdxType:"ArticleAd"}),(0,n.kt)(A,{title:"Bed Level Visualizer",mdxType:"PluginInfo"},(0,n.kt)("p",null,"Se hai un sensore BLtouch  sulla tua macchina, allora Bed Level Visualizer dovrebbe essere uno dei primi plugin che installi sul tuo server Octoprint"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:i(21695).Z}," ",(0,n.kt)("img",{alt:"Bed Level Visualizer",src:i(84069).Z,width:"1024",height:"490"})," "))),(0,n.kt)(o.Z,{mdxType:"ArticleAd"}),(0,n.kt)(A,{title:"Telegram",mdxType:"PluginInfo"},(0,n.kt)("p",null,"Il plugin Telegram \xe8 uno dei miei plugin preferiti quando si tratta di monitorare le stampe con OctoPrint"),(0,n.kt)("p",null,'Dopo aver configurato il plugin di Telegram, potrai \u201cchattare\u201d con la tua stampante con una serie di comandi: potresti "chiederti" di inviarti lo stato corrente della stampa incluso uno screenshot dalla webcam o di avvisarti quando una stampa \xe8 terminata'),(0,n.kt)("p",null,"Davvero utile!"),(0,n.kt)("a",{href:"https://plugins.octoprint.org/plugins/telegram/",style:{color:"#ff0000"}},"Link Plugin Telegram")),(0,n.kt)(o.Z,{mdxType:"ArticleAd"}),(0,n.kt)(A,{title:"Resource Monitor",mdxType:"PluginInfo"},(0,n.kt)("p",null,"Dalla schermata non avete bisogno di presentazioni: non solo la stampante deve essere sottocontrollo, ma anche il raspberry e con questo tool potrete farlo senza problemi"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:i(4878).Z}," ",(0,n.kt)("img",{alt:"Resource Monitor",src:i(13901).Z,width:"894",height:"439"})," "))),(0,n.kt)(o.Z,{mdxType:"ArticleAd"}),(0,n.kt)(A,{title:"BL Touch",mdxType:"PluginInfo"},(0,n.kt)("p",null,"Se hai una sonda BLTouch installata sulla tua stampante 3D, ti consiglio di installare il plug-in BLTouch per OctoPrint"),(0,n.kt)("p",null,"Con questo plugin ottieni alcuni pulsanti che ti consentono di controllare la sonda BLTouch sulla tua stampante, eseguire un autotest, eseguire la calibrazione  e anche rilasciare l'allarme se vi \xe8 qualche problema"),(0,n.kt)("a",{href:"https://plugins.octoprint.org/plugins/BLTouch/",style:{color:"#ff0000"}}," Link Plugin BL Touch")),(0,n.kt)(l.Z,{link:"https://www.facebook.com/hashtag/raspberrypi?__gid__=600126627631693",mdxType:"FacebookLink"}),(0,n.kt)(r.Z,{mdxType:"DisplayAd"}))}g.isMDXComponent=!0},21695:function(e,t,i){t.Z=i.p+"assets/files/bedLevelVisualizer-ac8754c100e310003a6c04a02368113c.png"},79713:function(e,t,i){t.Z=i.p+"assets/files/chiaveInglese-d91dca3dd42c8bc1125d8bf7675bcc3c.PNG"},20761:function(e,t,i){t.Z=i.p+"assets/files/filamentManager-f856a77016c899aa60f003976b1af5ba.PNG"},76811:function(e,t,i){t.Z=i.p+"assets/files/foto1-4856a4e271d9789f3ccf57f0d18afc15.jpg"},52377:function(e,t,i){t.Z=i.p+"assets/files/foto2-b80a74730b6588102c10049809f3036f.PNG"},13306:function(e,t,i){t.Z=i.p+"assets/files/foto3-9f0f37ff06b63375a7807e2150f3c324.PNG"},4878:function(e,t,i){t.Z=i.p+"assets/files/resourceMonitor-b37a2a3bb07756a9386e5895d9dd3012.jpg"},84069:function(e,t,i){t.Z=i.p+"assets/images/bedLevelVisualizer-ac8754c100e310003a6c04a02368113c.png"},65887:function(e,t){t.Z="data:image/png;base64,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"},13741:function(e,t){t.Z="data:image/png;base64,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"},74694:function(e,t,i){t.Z=i.p+"assets/images/foto1-4856a4e271d9789f3ccf57f0d18afc15.jpg"},69421:function(e,t,i){t.Z=i.p+"assets/images/foto2-b80a74730b6588102c10049809f3036f.PNG"},69391:function(e,t,i){t.Z=i.p+"assets/images/foto3-9f0f37ff06b63375a7807e2150f3c324.PNG"},13901:function(e,t,i){t.Z=i.p+"assets/images/resourceMonitor-b37a2a3bb07756a9386e5895d9dd3012.jpg"}}]);