(function(e){function t(t){for(var r,a,i=t[0],s=t[1],l=t[2],u=0,b=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-cbf6a646":"addd8393"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-cbf6a646":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-cbf6a646":"9069bc12"}[e]+".css",c=s.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===c))return t()}var b=document.getElementsByTagName("style");for(i=0;i<b.length;i++){l=b[i],u=l.getAttribute("data-href");if(u===r||u===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var b=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",b.name="ChunkLoadError",b.type=r,b.request=a,n[1](b)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/template-website/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,o){var i=Object(r["B"])("Nav"),s=Object(r["B"])("router-view"),l=Object(r["B"])("Footer");return Object(r["v"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(i),Object(r["k"])(s),Object(r["k"])(l)],64)}var c=n("9b19"),o=n.n(c),i={class:"bg-white","aria-labelledby":"footer-heading"},s=Object(r["k"])("h2",{id:"footer-heading",class:"sr-only"},"Footer",-1),l={class:"max-w-7xl mx-auto py-12 pb-8 px-4 sm:px-6 lg:px-8"},u={class:"grid md:grid-cols-2 gap-8"},b=Object(r["k"])("img",{class:"h-9 w-auto",src:o.a,alt:"Company Name"},null,-1),d={class:"grid sm:grid-cols-2 gap-8"},p=Object(r["k"])("h3",{class:"mb-3"},"Navigation",-1),f={class:"space-y-1"},j=Object(r["i"])('<div><h3 class="mb-3">Contact Us</h3><div class="space-y-4"><address class="not-italic"> Street <br> City, Province POSTAL CODE </address><a href="tel:+19056379255" class="block with-underline w-max hover:text-accent">Phone: xxx-xxx-xxxx </a><a href="mailto:info@teccweb.com" class="block with-underline w-max hover:text-accent">Email: email@email.com</a></div></div>',1),O=Object(r["k"])("div",{class:"\n          mt-8\n          pt-8\n          border-t border-gray-200\n          md:flex md:items-center md:justify-between\n        "},[Object(r["k"])("p",{class:"text-base text-gray-400"}," © Copyright 2021 Company Name ")],-1);function m(e,t,n,a,c,o){var m=Object(r["B"])("router-link");return Object(r["v"])(),Object(r["g"])("footer",i,[s,Object(r["k"])("div",l,[Object(r["k"])("div",u,[Object(r["k"])(m,{to:"/"},{default:Object(r["I"])((function(){return[b]})),_:1}),Object(r["k"])("div",d,[Object(r["k"])("div",null,[p,Object(r["k"])("div",f,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(a.navigation,(function(e){return Object(r["v"])(),Object(r["g"])(m,{key:e.label,class:"\n                  block\n                  with-underline\n                  w-max\n                  transition\n                  hover:text-accent\n                  capitalize\n                ",to:e.path},{default:Object(r["I"])((function(){return[Object(r["j"])(Object(r["D"])(e.label),1)]})),_:2},1032,["to"])})),128))])]),j])]),O])])}var v=n("b0ea"),g={setup:function(){return{navigation:v["b"]}}};g.render=m;var h=g,k={class:"max-w-7xl mx-auto px-4 sm:px-6"},y={class:"\n          flex\n          justify-between\n          items-center\n          py-6\n          md:justify-start md:space-x-5\n        "},x={class:"flex justify-start lg:w-0 flex-1"},w=Object(r["k"])("span",{class:"sr-only"},"Company Name",-1),I=Object(r["k"])("div",{class:"flex items-center"},[Object(r["k"])("img",{class:"h-7 w-auto",src:o.a,alt:"Company Name"})],-1),_={class:"-mr-2 -my-2 md:hidden"},P=Object(r["k"])("span",{class:"sr-only"},"Open menu",-1),B={class:"\n            rounded-lg\n            shadow-lg\n            ring-1 ring-black ring-opacity-5\n            bg-gray-200\n            divide-y-2 divide-gray-50\n          "},C={class:"pt-5 pb-6 px-5"},N={class:"flex items-center justify-between"},A=Object(r["k"])("img",{class:"h-5 w-auto",src:o.a,alt:"Company name"},null,-1),E={class:"-mr-2"},S=Object(r["k"])("span",{class:"sr-only"},"Close menu",-1),z={class:"mt-6"},T={class:"grid gap-y-8"},D={class:"nav-item-mobile__text"},L=Object(r["k"])("div",{style:{"margin-bottom":"4.5rem"}},null,-1);function M(e,t,n,a,c,o){var i=Object(r["B"])("router-link"),s=Object(r["B"])("MenuIcon"),l=Object(r["B"])("PopoverButton"),u=Object(r["B"])("NavItem"),b=Object(r["B"])("PopoverGroup"),d=Object(r["B"])("XIcon"),p=Object(r["B"])("PopoverPanel"),f=Object(r["B"])("Popover");return Object(r["v"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(f,{class:"fixed left-0 w-full top-0 z-20 bg-white shadow"},{default:Object(r["I"])((function(){return[Object(r["k"])("div",k,[Object(r["k"])("div",y,[Object(r["k"])("div",x,[Object(r["k"])(i,{to:"/"},{default:Object(r["I"])((function(){return[w,I]})),_:1})]),Object(r["k"])("div",_,[Object(r["k"])(l,{class:"\n              rounded-md\n              p-2\n              inline-flex\n              items-center\n              justify-center\n              text-white\n              hover:text-gray-500\n              transition\n              hover:bg-white\n            "},{default:Object(r["I"])((function(){return[P,Object(r["k"])(s,{class:"h-6 w-6 text-accent","aria-hidden":"true"})]})),_:1})]),Object(r["k"])(b,{as:"nav",class:"hidden md:flex space-x-3 lg:space-x-5 xl:space-x-7"},{default:Object(r["I"])((function(){return[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(a.navigation,(function(e){return Object(r["v"])(),Object(r["g"])(u,{path:e.path,key:e.label,dropdownItems:e.dropdownItems},{default:Object(r["I"])((function(){return[Object(r["j"])(Object(r["D"])(e.label),1)]})),_:2},1032,["path","dropdownItems"])})),128))]})),_:1})])]),Object(r["k"])(r["c"],{"enter-active-class":"duration-200 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:Object(r["I"])((function(){return[Object(r["k"])(p,{focus:"",class:"\n          absolute\n          top-0\n          inset-x-0\n          z-10\n          p-2\n          transition\n          transform\n          origin-top-right\n          md:hidden\n        "},{default:Object(r["I"])((function(){return[Object(r["k"])("div",B,[Object(r["k"])("div",C,[Object(r["k"])("div",N,[Object(r["k"])(i,{to:"/"},{default:Object(r["I"])((function(){return[A]})),_:1}),Object(r["k"])("div",E,[Object(r["k"])(l,{class:"\n                    rounded-md\n                    p-2\n                    inline-flex\n                    items-center\n                    justify-center\n                    transition\n                    hover:bg-accent-lightest\n                  "},{default:Object(r["I"])((function(){return[S,Object(r["k"])(d,{class:"h-6 w-6 text-accent","aria-hidden":"true"})]})),_:1})])]),Object(r["k"])("div",z,[Object(r["k"])("nav",T,[Object(r["k"])(l,null,{default:Object(r["I"])((function(){return[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(a.navigation,(function(e){return Object(r["v"])(),Object(r["g"])(i,{key:e.label,to:e.path,class:"nav-item-mobile"},{default:Object(r["I"])((function(){return[Object(r["k"])("span",D,Object(r["D"])(e.label),1)]})),_:2},1032,["to"])})),128))]})),_:1})])])])])]})),_:1})]})),_:1})]})),_:1}),L],64)}var q={key:0,class:"flex items-center -mr-2"},F=Object(r["k"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ml-2 h-5 w-5 group-transition",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(r["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),J={class:"\n                rounded-lg\n                shadow-lg\n                ring-1 ring-black ring-opacity-5\n                overflow-hidden\n              "},U={class:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},G={class:"\n                        text-sm\n                        lg:text-base\n                        font-medium\n                        capitalize\n                        text-gray-900\n                      "},X={key:1,class:"nav-item"};function $(e,t,n,a,c,o){var i=Object(r["B"])("router-link"),s=Object(r["B"])("PopoverButton"),l=Object(r["B"])("PopoverPanel"),u=Object(r["B"])("Popover");return Object(r["v"])(),Object(r["g"])("div",null,[n.dropdownItems&&n.dropdownItems.length>0?(Object(r["v"])(),Object(r["g"])("div",q,[Object(r["k"])(u,{class:"relative"},{default:Object(r["I"])((function(){return[Object(r["k"])(s,{class:"\n            group\n            rounded-md\n            inline-flex\n            items-center\n            text-base\n            font-medium\n            capitalize\n            whitespace-nowrap\n            transition\n            hover:text-accent\n            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal,\n          ",onClick:t[1]||(t[1]=Object(r["J"])((function(){}),["stop"]))},{default:Object(r["I"])((function(){return[Object(r["k"])(i,{to:n.path},{default:Object(r["I"])((function(){return[Object(r["A"])(e.$slots,"default")]})),_:3},8,["to"]),F]})),_:1}),Object(r["k"])(r["c"],{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-1"},{default:Object(r["I"])((function(){return[Object(r["k"])(l,{class:"\n              absolute\n              right-0\n              mt-3\n              transform\n              z-10\n              px-2\n              w-screen\n              max-w-sm\n              sm:px-0\n              lg:ml-0 lg:left-1/2 lg:-translate-x-1/2\n            "},{default:Object(r["I"])((function(){return[Object(r["k"])("div",J,[Object(r["k"])("div",U,[Object(r["k"])(s,null,{default:Object(r["I"])((function(){return[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(n.dropdownItems,(function(e){return Object(r["v"])(),Object(r["g"])(i,{key:e.label,to:e.path,class:"\n                      -m-3\n                      p-3\n                      flex\n                      items-start\n                      rounded-lg\n                      transition\n                      hover:bg-gray-50\n                    "},{default:Object(r["I"])((function(){return[Object(r["k"])("p",G,Object(r["D"])(e.label),1)]})),_:2},1032,["to"])})),128))]})),_:1})])])]})),_:1})]})),_:1})]})),_:1})])):(Object(r["v"])(),Object(r["g"])("div",X,[Object(r["k"])(i,{to:n.path},{default:Object(r["I"])((function(){return[Object(r["A"])(e.$slots,"default")]})),_:3},8,["to"])]))])}var H=n("d511"),K={name:"NavItem",components:{Popover:H["a"],PopoverButton:H["b"],PopoverPanel:H["d"]},props:{path:String,dropdownItems:{type:Array,required:!1}}};K.render=$;var Q=K,R=n("9510"),V={components:{Popover:H["a"],PopoverButton:H["b"],PopoverGroup:H["c"],PopoverPanel:H["d"],MenuIcon:R["a"],XIcon:R["b"],NavItem:Q},setup:function(){return{navigation:v["b"]}}};V.render=M;var W=V,Y={components:{Nav:W,Footer:h}};Y.render=a;var Z=Y,ee=n("6c02"),te=Object(ee["a"])({history:Object(ee["b"])("/template-website/"),routes:v["c"],scrollBehavior:function(e,t,n){return n||{left:0,top:0}}}),ne=te;n("ba8c");Object(r["f"])(Z).use(ne).mount("#app")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.ce113d92.svg"},b0ea:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("4160"),n("159b"),n("ac1f"),n("1276"),n("c740");var r=function(e){return e.map((function(e){return{path:e.path,component:e.component}}))},a=function(e){var t=[];return e.forEach((function(e){var n=e.path.split("/")[1],r=t.findIndex((function(e){return e.path==="/".concat(n)}));-1===r?t.push({path:"/".concat(n),label:e.label,dropdownItems:[]}):t[r].dropdownItems.push({path:e.path,label:e.label})})),t},c=[{path:"/",label:"home",component:function(){return n.e("chunk-cbf6a646").then(n.bind(null,"7abe"))}}],o=r(c),i=a(c),s=[{title:"dentsu international",id:"dentsu",date:"April 2021 - August 2021",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa.",imageUrl:"/public/logos/dentsu.jpg"}]},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.b37a9cfd.js.map