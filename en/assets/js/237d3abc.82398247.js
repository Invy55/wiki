"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1027],{37674:function(e,i,a){a.d(i,{Z:function(){return n}});var t=a(67294);class n extends t.Component{componentDidMount(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}render(){return t.createElement("div",{className:"displayAd",key:Math.random()},t.createElement("ins",{className:"adsbygoogle",key:Math.random(),style:{display:"block",textAlign:"center"},"data-ad-client":"ca-pub-3253384067482467","data-ad-slot":"5610548275","data-ad-format":"auto"}))}}},70623:function(e,i,a){a.d(i,{Z:function(){return l}});var t=a(67294),n=a(53944);class l extends t.Component{constructor(e){super(e),this.props=e}render(){const e={url:`https://flyingbearghost.com${this.props.slug}`,identifier:`${this.props.articleId}_0`,title:this.props.articleTitle};return t.createElement("div",{className:"comments",key:Math.random()},t.createElement(n.ZP.DiscussionEmbed,{shortname:"flyingbearghost-com",config:e}))}}},15586:function(e,i,a){a.r(i),a.d(i,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return u}});var t=a(83117),n=(a(67294),a(3905)),l=a(37674);a(70623);const r={title:"Mks Wifi Plugin",slug:"/slicer/cura/mkswifi",description:"Mks Wifi Plugin, un plugin per controllare la stampante tramite wifi e avviare le stampe",keywords:["cura","ultimaker","ultimaker cura","3d printing","flyingbear","flying bear","flyingbear ghost","slicer","slicing"],image:"/img/Ultimaker_cura.png"},s=void 0,o={unversionedId:"slicer/cura/mkswifiPlugin",id:"slicer/cura/mkswifiPlugin",title:"Mks Wifi Plugin",description:"Mks Wifi Plugin, un plugin per controllare la stampante tramite wifi e avviare le stampe",source:"@site/docs/slicer/cura/mkswifiPlugin.md",sourceDirName:"slicer/cura",slug:"/slicer/cura/mkswifi",permalink:"/en/docs/slicer/cura/mkswifi",draft:!1,editUrl:"https://github.com/flyingbear-club-ita/wiki/tree/master/docs/slicer/cura/mkswifiPlugin.md",tags:[],version:"current",frontMatter:{title:"Mks Wifi Plugin",slug:"/slicer/cura/mkswifi",description:"Mks Wifi Plugin, un plugin per controllare la stampante tramite wifi e avviare le stampe",keywords:["cura","ultimaker","ultimaker cura","3d printing","flyingbear","flying bear","flyingbear ghost","slicer","slicing"],image:"/img/Ultimaker_cura.png"},sidebar:"docs",previous:{title:"Creare un profilo di stampa",permalink:"/en/docs/slicer/cura/profilo_stampa"},next:{title:"Temp Tower Cura",permalink:"/en/docs/slicer/cura/temptower"}},p={},u=[{value:"Installazione",id:"installazione",level:2},{value:"Marketplace",id:"marketplace",level:3},{value:"Github",id:"github",level:3},{value:"Configurare il plugin",id:"configurare-il-plugin",level:3},{value:"Non vedo nessun bottone!!!",id:"non-vedo-nessun-bottone",level:3},{value:"Bonus: visualizzazione anteprima",id:"bonus-visualizzazione-anteprima",level:2}],c={toc:u};function g(e){let{components:i,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,r,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Per utilizzare la funzione del trasferimento dei file tramite Wifi, e' necessario installare un plugin"),(0,n.kt)("p",null,"Purtroppo, questo plugin e' disponibile solo con Cura"),(0,n.kt)("p",null,"L'unica alternativa per il trasferimento dei file tramite wifi e' possedere una raspberry pi con octoprint (per maggiori informazioni, andate nella ",(0,n.kt)("a",{parentName:"p",href:"/docs/raspberry/introduzione/"},"sezione apposita"),")"),(0,n.kt)("h2",{id:"installazione"},"Installazione"),(0,n.kt)("p",null,"Esistono due maniere per installare il plugin:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Scaricarlo direttamente dal marketplace di Cura")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Scaricare la versione piu' recente da ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Jeredian/mks-wifi-plugin"},"github")," ed inserirla nella cartella dei plugin"))),(0,n.kt)(l.Z,{mdxType:"DisplayAd"}),(0,n.kt)("h3",{id:"marketplace"},"Marketplace"),(0,n.kt)("p",null,"Una volta aperto Cura, cliccare sul pulsante in alto a destra per aprire il marketplace"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(27042).Z}," ",(0,n.kt)("img",{alt:"Cura Marketplace",src:a(56442).Z,width:"2208",height:"1467"})," ")),(0,n.kt)("p",null,"Si aprira' una finestra nella quale ci sono tutti i plugin disponibili. Scorrete verso il basso fino a trovare Mks Wifi Plugin"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(22228).Z}," ",(0,n.kt)("img",{alt:"Mks Wifi Plugin Marketplace",src:a(51220).Z,width:"1346",height:"1159"})," ")),(0,n.kt)("p",null,"Dopo aver cliccato sull'icona del plugin, si aprira' un'altra finestra, dalla quale cominciare l'installazione"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(9510).Z}," ",(0,n.kt)("img",{alt:"Mks Wifi Plugin Install",src:a(74016).Z,width:"1346",height:"1159"})," ")),(0,n.kt)("p",null,"Dopo aver cliccato sul pulsante per installare, confermate tutti i passaggi successivi e riavviate Cura"),(0,n.kt)("h3",{id:"github"},"Github"),(0,n.kt)("p",null,"Ogni tanto capita che lo sviluppatore del plugin abbia introdotto dei bugfix o delle migliorie, pero' la versione piu' aggiornata non sia ancora disponibile nel marketplace."),(0,n.kt)("p",null,"Per installare la versione piu' recente, occorre scaricare il codice da github"),(0,n.kt)("p",null,"Nel browser, inserite il link riportato nella sezione Installazione. Una volta caricata la pagina, cliccate sul pulsante Code e, successivamente, su Download ZIP"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(65136).Z}," ",(0,n.kt)("img",{alt:"Mks Wifi Github",src:a(68359).Z,width:"2488",height:"1406"})," ")),(0,n.kt)("p",null,"Una volta scaricato lo zip, estraetelo e copiate TUTTA LA CARTELLA ",(0,n.kt)("strong",{parentName:"p"},"mks-wifi-plugin-develop")," nella cartella dove sono contenuti i plugin"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Per trovare la cartella dei plugin, aprite il menu di cura e cliccate su ",(0,n.kt)("strong",{parentName:"p"},"Open configuration folder")),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{target:"_blank",href:a(75193).Z}," ",(0,n.kt)("img",{alt:"open configuration folder",src:a(48348).Z,width:"1184",height:"308"})," ")),(0,n.kt)("p",{parentName:"admonition"},"Aprite la sotto cartella ",(0,n.kt)("strong",{parentName:"p"},"plugin")," e copiateci dentro la cartella appena estratta")),(0,n.kt)("p",null,"Stesso discorso dell'installazione dal marketplace, riavviate Cura dopo questa operazione"),(0,n.kt)("h3",{id:"configurare-il-plugin"},"Configurare il plugin"),(0,n.kt)("p",null,"Innanzitutto, assicurarsi che la stampante sia accesa e connessa alla stessa rete wifi del computer sul quale e' installato Cura"),(0,n.kt)("p",null,"Cliccate su Manager Printers"),(0,n.kt)("p",null,"Noterete che c'e' un nuovo bottone per configurare il plugin Mks"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(46013).Z}," ",(0,n.kt)("img",{alt:"mks wifi button",src:a(82321).Z,width:"1720",height:"1356"})," ")),(0,n.kt)("p",null,"Cliccateci sopra, selezionate l'indirizzo della maccchina ed ora dovreste vedere un nuovo pannello, tramite il quale controllare la stampante via wifi"),(0,n.kt)(l.Z,{mdxType:"DisplayAd"}),(0,n.kt)("h3",{id:"non-vedo-nessun-bottone"},"Non vedo nessun bottone!!!"),(0,n.kt)("p",null,"Questo e' un bug noto"),(0,n.kt)("p",null,"Per ovviare a questo problema, aprite la cartella dei plugin come illustrato precedentemente, poi navigate nella cartella plugins, aprite la cartella MksWifiPlugin, un'altra volta la sotto cartella MksWifiPlugin"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(53825).Z}," ",(0,n.kt)("img",{alt:"mks wifi plugin folder",src:a(52221).Z,width:"391",height:"626"})," ")),(0,n.kt)("p",null,"In quella cartella, individuate il file ",(0,n.kt)("strong",{parentName:"p"},"plugin.json")," "),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(96058).Z}," ",(0,n.kt)("img",{alt:"mks wifi json",src:a(23772).Z,width:"540",height:"790"})," ")),(0,n.kt)("p",null,"Apritelo con un editor di testo (come, ad esempio, blocco note) e cambiate il valore di ",(0,n.kt)("strong",{parentName:"p"},"maximum_cura_version")," dal valore attuale alla versione installata di cura (per esempio, 4.10.0)"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(68703).Z}," ",(0,n.kt)("img",{alt:"mks wifi json modificato",src:a(15856).Z,width:"1322",height:"750"})," ")),(0,n.kt)("p",null,"Salvate, riavviate Cura e adesso dovreste vedere il bottone per collegarsi"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Ringraziamo RALOCIN per averci fornito gli screenshot")),(0,n.kt)("h2",{id:"bonus-visualizzazione-anteprima"},"Bonus: visualizzazione anteprima"),(0,n.kt)("p",null,"Un'altra caratteristica carina del plugin mks wifi e' la possibilita' di generare la preview del file da stampare e visualizzarla sullo schermo della stampante, sia quando si sta selezionando il file da stampare che quando il file e' in stampa"),(0,n.kt)("p",null,"Prima di inviare il file alla stampante, pero', bisogna abilitare questa opzione:"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(47350).Z}," ",(0,n.kt)("img",{alt:"mks wifi plugin enable preview",src:a(96905).Z,width:"1084",height:"594"})," ")),(0,n.kt)("p",null,"Per avere la preview ci sono due possibilita':"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"inviare il file tramite wifi"),(0,n.kt)("li",{parentName:"ul"},'inserire una scheda/penna usb e selezionare, tra le varie opzioni per salvare il file, "Save as TFT"')),(0,n.kt)("p",null,"Una volta fatto cio', sulla stampante sara' disponibile la preview!"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(36901).Z}," ",(0,n.kt)("img",{alt:"mks wifi plugin preview",src:a(22303).Z,width:"845",height:"634"})," ")),(0,n.kt)("p",null,"Grazie a ",(0,n.kt)("strong",{parentName:"p"},"m1nd-")," per gli screenshot!"))}g.isMDXComponent=!0},47350:function(e,i,a){i.Z=a.p+"assets/files/mksWifiPluginEnablePreview-bc6ef578bc205364cd00ef0db52e70ff.webp"},36901:function(e,i,a){i.Z=a.p+"assets/files/mksWifiPluginPreview-74d55c6cf07c2a63e7bfd3d2fc63cb58.webp"},9510:function(e,i,a){i.Z=a.p+"assets/files/installMks-005f48cfc030b6c372cc4bd03a924459.png"},27042:function(e,i,a){i.Z=a.p+"assets/files/marketplaceButton-1c2289553941d077f85ce627e8cff007.png"},65136:function(e,i,a){i.Z=a.p+"assets/files/mksGithub-367ef56a89e25c5be7ab36ae8fdc59db.png"},46013:function(e,i,a){i.Z=a.p+"assets/files/mksWifiButton-3d526e1eacf0e4570ade0728bcdc67ff.png"},22228:function(e,i,a){i.Z=a.p+"assets/files/mksWifiPlugin-c63f6f80894ac4d658f6c2e0c71846f4.png"},96058:function(e,i,a){i.Z=a.p+"assets/files/mkswifiJson-eec85cd7b4b3839f38db41eb579d98ae.png"},68703:function(e,i,a){i.Z=a.p+"assets/files/mkswifiJsonToChange-c4f087ce9b4e02017b6947471c6eac25.png"},53825:function(e,i,a){i.Z=a.p+"assets/files/mkswifiPluginFolder-4a7f78252db9005706b00c51c6fb2598.png"},75193:function(e,i,a){i.Z=a.p+"assets/files/openConfigurationFolder-4b39d1ea02183fcd117bd4f9d2ea3ed7.png"},96905:function(e,i){i.Z="data:image/webp;base64,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"},22303:function(e,i,a){i.Z=a.p+"assets/images/mksWifiPluginPreview-74d55c6cf07c2a63e7bfd3d2fc63cb58.webp"},74016:function(e,i,a){i.Z=a.p+"assets/images/installMks-005f48cfc030b6c372cc4bd03a924459.png"},56442:function(e,i,a){i.Z=a.p+"assets/images/marketplaceButton-1c2289553941d077f85ce627e8cff007.png"},68359:function(e,i,a){i.Z=a.p+"assets/images/mksGithub-367ef56a89e25c5be7ab36ae8fdc59db.png"},82321:function(e,i,a){i.Z=a.p+"assets/images/mksWifiButton-3d526e1eacf0e4570ade0728bcdc67ff.png"},51220:function(e,i,a){i.Z=a.p+"assets/images/mksWifiPlugin-c63f6f80894ac4d658f6c2e0c71846f4.png"},23772:function(e,i,a){i.Z=a.p+"assets/images/mkswifiJson-eec85cd7b4b3839f38db41eb579d98ae.png"},15856:function(e,i,a){i.Z=a.p+"assets/images/mkswifiJsonToChange-c4f087ce9b4e02017b6947471c6eac25.png"},52221:function(e,i,a){i.Z=a.p+"assets/images/mkswifiPluginFolder-4a7f78252db9005706b00c51c6fb2598.png"},48348:function(e,i,a){i.Z=a.p+"assets/images/openConfigurationFolder-4b39d1ea02183fcd117bd4f9d2ea3ed7.png"}}]);