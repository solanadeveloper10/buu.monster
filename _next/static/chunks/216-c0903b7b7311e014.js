"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[216],{57818:function(e,t,n){n.d(t,{default:function(){return i.a}});var r=n(50551),i=n.n(r)},66648:function(e,t,n){n.d(t,{default:function(){return i.a}});var r=n(55601),i=n.n(r)},38173:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(99920),i=n(41452),o=n(57437),a=i._(n(2265)),l=r._(n(54887)),u=r._(n(28321)),d=n(80497),s=n(7103),f=n(93938);n(72301);let c=n(60291),m=r._(n(21241)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,n,r,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:u,decoding:d,className:s,style:f,fetchPriority:c,placeholder:m,loading:p,unoptimized:y,fill:v,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:x,sizesInput:j,onLoad:S,onError:C,...P}=e;return(0,o.jsx)("img",{...P,...h(c),loading:p,width:u,height:l,decoding:d,"data-nimg":v?"fill":"1",className:s,style:f,sizes:i,srcSet:r,src:n,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&g(e,m,b,w,_,y,j))},[n,m,b,w,_,C,y,j,t]),onLoad:e=>{g(e.currentTarget,m,b,w,_,y,j)},onError:e=>{x(!0),"empty"!==m&&_(!0),C&&C(e)}})});function v(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):(0,o.jsx)(u.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(c.RouterContext),r=(0,a.useContext)(f.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=p||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:u}=e,g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let h=(0,a.useRef)(u);(0,a.useEffect)(()=>{h.current=u},[u]);let[b,w]=(0,a.useState)(!1),[_,x]=(0,a.useState)(!1),{props:j,meta:S}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:i,blurComplete:b,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...j,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:x,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(v,{isAppRouter:!n,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},82901:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(99920)._(n(2265)).default.createContext({})},40687:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},50551:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(99920);n(57437),n(2265);let i=r._(n(40148));function o(e,t){var n;let r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e);let o={...r,...t};return(0,i.default)({...o,modules:null==(n=o.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},80497:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(72301);let r=n(51564),i=n(7103);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,u,d,{src:s,sizes:f,unoptimized:c=!1,priority:m=!1,loading:p,className:g,quality:h,width:y,height:v,fill:b=!1,style:w,overrideSrc:_,onLoad:x,onLoadingComplete:j,placeholder:S="empty",blurDataURL:C,fetchPriority:P,layout:O,objectFit:E,objectPosition:M,lazyBoundary:z,lazyRoot:k,...I}=e,{imgConf:R,showAltText:A,blurComplete:N,defaultLoader:D}=t,L=R||i.imageConfigDefault;if("allSizes"in L)l=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);l={...L,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let T=I.loader||D;delete I.loader,delete I.srcSet;let B="__next_img_default"in T;if(B){if("custom"===l.loader)throw Error('Image with src "'+s+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:n,...r}=t;return e(r)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!f&&(f=t)}let F="",U=a(y),q=a(v);if("object"==typeof(n=s)&&(o(n)||void 0!==n.src)){let e=o(s)?s.default:s;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,F=e.src,!b){if(U||q){if(U&&!q){let t=U/e.width;q=Math.round(e.height*t)}else if(!U&&q){let t=q/e.height;U=Math.round(e.width*t)}}else U=e.width,q=e.height}}let G=!m&&("lazy"===p||void 0===p);(!(s="string"==typeof s?s:F)||s.startsWith("data:")||s.startsWith("blob:"))&&(c=!0,G=!1),l.unoptimized&&(c=!0),B&&s.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(c=!0),m&&(P="high");let W=a(h),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:M}:{},A?{}:{color:"transparent"},w),V=N||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:U,heightInt:q,blurWidth:u,blurHeight:d,blurDataURL:C||"",objectFit:H.objectFit})+'")':'url("'+S+'")',X=V?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},$=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:d}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),s=u.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:u.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:l({config:t,src:n,quality:o,width:u[s]})}}({config:l,src:s,unoptimized:c,width:U,quality:W,sizes:f,loader:T});return{props:{...I,loading:G?"lazy":p,fetchPriority:P,width:U,height:q,decoding:"async",className:g,style:{...H,...X},sizes:$.sizes,srcSet:$.srcSet,src:_||$.src},meta:{unoptimized:c,priority:m,placeholder:S,fill:b}}}},28321:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return g},defaultHead:function(){return f}});let r=n(99920),i=n(41452),o=n(57437),a=i._(n(2265)),l=r._(n(65960)),u=n(82901),d=n(36590),s=n(40687);function f(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(72301);let m=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(f(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let g=function(e){let{children:t}=e,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(d.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},51564:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r?40*r:t,u=i?40*i:n,d=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},93938:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(99920)._(n(2265)),i=n(7103),o=r.default.createContext(i.imageConfigDefault)},7103:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},55601:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return u},getImageProps:function(){return l}});let r=n(99920),i=n(80497),o=n(38173),a=r._(n(21241));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let u=o.Image},21241:function(e,t){function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},10912:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let r=n(55592);function i(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},40148:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let r=n(57437),i=n(2265),o=n(10912),a=n(61481);function l(e){return{default:e&&"default"in e?e.default:e}}let u={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},d=function(e){let t={...u,...e},n=(0,i.lazy)(()=>t.loader().then(l)),d=t.loading;function s(e){let l=d?(0,r.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,u=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(a.PreloadCss,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(i.Suspense,{fallback:l,children:u})}return s.displayName="LoadableComponent",s}},61481:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return o}});let r=n(57437),i=n(58512);function o(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,i.getExpectedRequestStore)("next/dynamic css"),o=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));o.push(...t)}}return 0===o.length?null:(0,r.jsx)(r.Fragment,{children:o.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},65960:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(2265),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,a=i?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),l()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},21932:function(e,t,n){var r=n(2265),i=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let o=r.forwardRef(function(e,t){let{style:n={},className:o="",autoFill:a=!1,play:l=!0,pauseOnHover:u=!1,pauseOnClick:d=!1,direction:s="left",speed:f=50,delay:c=0,loop:m=0,gradient:p=!1,gradientColor:g="white",gradientWidth:h=200,onFinish:y,onCycleComplete:v,onMount:b,children:w}=e,[_,x]=r.useState(0),[j,S]=r.useState(0),[C,P]=r.useState(1),[O,E]=r.useState(!1),M=r.useRef(null),z=t||M,k=r.useRef(null),I=r.useCallback(()=>{if(k.current&&z.current){let e=z.current.getBoundingClientRect(),t=k.current.getBoundingClientRect(),n=e.width,r=t.width;("up"===s||"down"===s)&&(n=e.height,r=t.height),a&&n&&r?P(r<n?Math.ceil(n/r):1):P(1),x(n),S(r)}},[a,z,s]);r.useEffect(()=>{if(O&&(I(),k.current&&z.current)){let e=new ResizeObserver(()=>I());return e.observe(z.current),e.observe(k.current),()=>{e&&e.disconnect()}}},[I,z,O]),r.useEffect(()=>{I()},[I,w]),r.useEffect(()=>{E(!0)},[]),r.useEffect(()=>{"function"==typeof b&&b()},[]);let R=r.useMemo(()=>a?j*C/f:j<_?_/f:j/f,[a,_,j,C,f]),A=r.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!l||u?"paused":"running","--pause-on-click":!l||u&&!d||d?"paused":"running","--width":"up"===s||"down"===s?"100vh":"100%","--transform":"up"===s?"rotate(-90deg)":"down"===s?"rotate(90deg)":"none"}),[n,l,u,d,s]),N=r.useMemo(()=>({"--gradient-color":g,"--gradient-width":"number"==typeof h?"".concat(h,"px"):h}),[g,h]),D=r.useMemo(()=>({"--play":l?"running":"paused","--direction":"left"===s?"normal":"reverse","--duration":"".concat(R,"s"),"--delay":"".concat(c,"s"),"--iteration-count":m?"".concat(m):"infinite","--min-width":a?"auto":"100%"}),[l,s,R,c,m,a]),L=r.useMemo(()=>({"--transform":"up"===s?"rotate(90deg)":"down"===s?"rotate(-90deg)":"none"}),[s]),T=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>i.default.createElement(r.Fragment,{key:t},r.Children.map(w,e=>i.default.createElement("div",{style:L,className:"rfm-child"},e)))),[L,w]);return O?i.default.createElement("div",{ref:z,style:A,className:"rfm-marquee-container "+o},p&&i.default.createElement("div",{style:N,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:D,onAnimationIteration:v,onAnimationEnd:y},i.default.createElement("div",{className:"rfm-initial-child-container",ref:k},r.Children.map(w,e=>i.default.createElement("div",{style:L,className:"rfm-child"},e))),T(C-1)),i.default.createElement("div",{className:"rfm-marquee",style:D},T(C))):null});t.Z=o}}]);