(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{3099:function(e){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},9670:function(e,t,r){var n=r(111);e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},1318:function(e,t,r){var n=r(5656),a=r(7466),i=r(1400),o=function(e){return function(t,r,o){var u,s=n(t),c=a(s.length),f=i(o,c);if(e&&r!=r){for(;c>f;)if((u=s[f++])!=u)return!0}else for(;c>f;f++)if((e||f in s)&&s[f]===r)return e||f||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},5417:function(e,t,r){var n=r(111),a=r(3157),i=r(5112)("species");e.exports=function(e,t){var r;return a(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!a(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},4326:function(e){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},9920:function(e,t,r){var n=r(6656),a=r(3887),i=r(1236),o=r(3070);e.exports=function(e,t){for(var r=a(t),u=o.f,s=i.f,c=0;c<r.length;c++){var f=r[c];n(e,f)||u(e,f,s(t,f))}}},8880:function(e,t,r){var n=r(9781),a=r(3070),i=r(9114);e.exports=n?function(e,t,r){return a.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,r){var n=r(7293);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,r){var n=r(7854),a=r(111),i=n.document,o=a(i)&&a(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},8113:function(e,t,r){var n=r(5005);e.exports=n("navigator","userAgent")||""},7392:function(e,t,r){var n,a,i=r(7854),o=r(8113),u=i.process,s=u&&u.versions,c=s&&s.v8;c?a=(n=c.split("."))[0]<4?1:n[0]+n[1]:o&&(!(n=o.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/))&&(a=n[1]),e.exports=a&&+a},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,r){var n=r(7854),a=r(1236).f,i=r(8880),o=r(1320),u=r(3505),s=r(9920),c=r(4705);e.exports=function(e,t){var r,f,l,d,p,g=e.target,h=e.global,m=e.stat;if(r=h?n:m?n[g]||u(g,{}):(n[g]||{}).prototype)for(f in t){if(d=t[f],l=e.noTargetGet?(p=a(r,f))&&p.value:r[f],!c(h?f:g+(m?".":"#")+f,e.forced)&&void 0!==l){if(typeof d==typeof l)continue;s(d,l)}(e.sham||l&&l.sham)&&i(d,"sham",!0),o(r,f,d,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},6790:function(e,t,r){"use strict";var n=r(3157),a=r(7466),i=r(9974),o=function(e,t,r,u,s,c,f,l){for(var d,p=s,g=0,h=!!f&&i(f,l,3);g<u;){if(g in r){if(d=h?h(r[g],g,t):r[g],c>0&&n(d))p=o(e,t,d,a(d.length),p,c-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[p]=d}p++}g++}return p};e.exports=o},9974:function(e,t,r){var n=r(3099);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,a){return e.call(t,r,n,a)}}return function(){return e.apply(t,arguments)}}},5005:function(e,t,r){var n=r(857),a=r(7854),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(n[e])||i(a[e]):n[e]&&n[e][t]||a[e]&&a[e][t]}},7854:function(e,t,r){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:function(e,t,r){var n=r(7908),a={}.hasOwnProperty;e.exports=function(e,t){return a.call(n(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,r){var n=r(9781),a=r(7293),i=r(317);e.exports=!n&&!a((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,r){var n=r(7293),a=r(4326),i="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?i.call(e,""):Object(e)}:Object},2788:function(e,t,r){var n=r(5465),a=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return a.call(e)}),e.exports=n.inspectSource},9909:function(e,t,r){var n,a,i,o=r(8536),u=r(7854),s=r(111),c=r(8880),f=r(6656),l=r(5465),d=r(6200),p=r(3501),g="Object already initialized",h=u.WeakMap;if(o||l.state){var m=l.state||(l.state=new h),v=m.get,y=m.has,b=m.set;n=function(e,t){if(y.call(m,e))throw new TypeError(g);return t.facade=e,b.call(m,e,t),t},a=function(e){return v.call(m,e)||{}},i=function(e){return y.call(m,e)}}else{var S=d("state");p[S]=!0,n=function(e,t){if(f(e,S))throw new TypeError(g);return t.facade=e,c(e,S,t),t},a=function(e){return f(e,S)?e[S]:{}},i=function(e){return f(e,S)}}e.exports={set:n,get:a,has:i,enforce:function(e){return i(e)?a(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!s(t)||(r=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}},3157:function(e,t,r){var n=r(4326);e.exports=Array.isArray||function(e){return"Array"==n(e)}},4705:function(e,t,r){var n=r(7293),a=/#|\.prototype\./,i=function(e,t){var r=u[o(e)];return r==c||r!=s&&("function"==typeof t?n(t):!!t)},o=i.normalize=function(e){return String(e).replace(a,".").toLowerCase()},u=i.data={},s=i.NATIVE="N",c=i.POLYFILL="P";e.exports=i},111:function(e){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},1913:function(e){e.exports=!1},133:function(e,t,r){var n=r(7392),a=r(7293);e.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())||!Symbol.sham&&n&&n<41}))},8536:function(e,t,r){var n=r(7854),a=r(2788),i=n.WeakMap;e.exports="function"==typeof i&&/native code/.test(a(i))},3070:function(e,t,r){var n=r(9781),a=r(4664),i=r(9670),o=r(7593),u=Object.defineProperty;t.f=n?u:function(e,t,r){if(i(e),t=o(t,!0),i(r),a)try{return u(e,t,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},1236:function(e,t,r){var n=r(9781),a=r(5296),i=r(9114),o=r(5656),u=r(7593),s=r(6656),c=r(4664),f=Object.getOwnPropertyDescriptor;t.f=n?f:function(e,t){if(e=o(e),t=u(t,!0),c)try{return f(e,t)}catch(r){}if(s(e,t))return i(!a.f.call(e,t),e[t])}},8006:function(e,t,r){var n=r(6324),a=r(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,r){var n=r(6656),a=r(5656),i=r(1318).indexOf,o=r(3501);e.exports=function(e,t){var r,u=a(e),s=0,c=[];for(r in u)!n(o,r)&&n(u,r)&&c.push(r);for(;t.length>s;)n(u,r=t[s++])&&(~i(c,r)||c.push(r));return c}},5296:function(e,t){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,a=n&&!r.call({1:2},1);t.f=a?function(e){var t=n(this,e);return!!t&&t.enumerable}:r},3887:function(e,t,r){var n=r(5005),a=r(8006),i=r(5181),o=r(9670);e.exports=n("Reflect","ownKeys")||function(e){var t=a.f(o(e)),r=i.f;return r?t.concat(r(e)):t}},857:function(e,t,r){var n=r(7854);e.exports=n},1320:function(e,t,r){var n=r(7854),a=r(8880),i=r(6656),o=r(3505),u=r(2788),s=r(9909),c=s.get,f=s.enforce,l=String(String).split("String");(e.exports=function(e,t,r,u){var s,c=!!u&&!!u.unsafe,d=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof t||i(r,"name")||a(r,"name",t),(s=f(r)).source||(s.source=l.join("string"==typeof t?t:""))),e!==n?(c?!p&&e[t]&&(d=!0):delete e[t],d?e[t]=r:a(e,t,r)):d?e[t]=r:o(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||u(this)}))},4488:function(e){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},3505:function(e,t,r){var n=r(7854),a=r(8880);e.exports=function(e,t){try{a(n,e,t)}catch(r){n[e]=t}return t}},6200:function(e,t,r){var n=r(2309),a=r(9711),i=n("keys");e.exports=function(e){return i[e]||(i[e]=a(e))}},5465:function(e,t,r){var n=r(7854),a=r(3505),i="__core-js_shared__",o=n[i]||a(i,{});e.exports=o},2309:function(e,t,r){var n=r(1913),a=r(5465);(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.12.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(e,t,r){var n=r(9958),a=Math.max,i=Math.min;e.exports=function(e,t){var r=n(e);return r<0?a(r+t,0):i(r,t)}},5656:function(e,t,r){var n=r(8361),a=r(4488);e.exports=function(e){return n(a(e))}},9958:function(e){var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},7466:function(e,t,r){var n=r(9958),a=Math.min;e.exports=function(e){return e>0?a(n(e),9007199254740991):0}},7908:function(e,t,r){var n=r(4488);e.exports=function(e){return Object(n(e))}},7593:function(e,t,r){var n=r(111);e.exports=function(e,t){if(!n(e))return e;var r,a;if(t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a;if("function"==typeof(r=e.valueOf)&&!n(a=r.call(e)))return a;if(!t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},9711:function(e){var t=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+r).toString(36)}},3307:function(e,t,r){var n=r(133);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(e,t,r){var n=r(7854),a=r(2309),i=r(6656),o=r(9711),u=r(133),s=r(3307),c=a("wks"),f=n.Symbol,l=s?f:f&&f.withoutSetter||o;e.exports=function(e){return i(c,e)&&(u||"string"==typeof c[e])||(u&&i(f,e)?c[e]=f[e]:c[e]=l("Symbol."+e)),c[e]}},4944:function(e,t,r){"use strict";var n=r(2109),a=r(6790),i=r(7908),o=r(7466),u=r(9958),s=r(5417);n({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=i(this),r=o(t.length),n=s(t,0);return n.length=a(n,t,t,r,0,void 0===e?1:u(e)),n}})},1496:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var a,i=n(r(1506)),o=n(r(5354)),u=n(r(7316)),s=n(r(7154)),c=n(r(7294)),f=n(r(5697)),l=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},d=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,n=g(t||r||[]);return n&&n.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(d);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),m=function(e){var t=l(e),r=p(t);return h[r]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,S=new WeakMap;function x(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&c.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function L(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",f=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+c+o+u+r+n+t+i+a+s+f+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,u=c.default.createElement(k,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,a(n),u):u})),k=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,f=e.onError,l=e.loading,d=e.draggable,p=e.ariaHidden,g=(0,u.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},g,{onLoad:o,onError:f,ref:t,loading:l,draggable:d,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));k.propTypes={style:f.default.object,onError:f.default.func,onLoad:f.default.func};var T=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!v&&b&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||y&&(v||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=l(e),(r=p(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=l(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,u=void 0===o?{}:o,f=e.placeholderStyle,d=void 0===f?{}:f,p=e.placeholderClassName,h=e.fluid,m=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,S=e.itemProp,w=e.loading,L=e.draggable,j=h||m;if(!j)return null;var T=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,s.default)({opacity:T?1:0,transition:P?"opacity "+y+"ms":"none"},u),C="boolean"==typeof v?"lightgray":v,M={transitionDelay:y+"ms"},V=(0,s.default)({opacity:this.state.imgLoaded?0:1},P&&M,u,d),N={title:t,alt:this.state.isVisible?"":r,style:V,className:p,itemProp:S},H=this.state.isHydrated?g(j):j[0];if(h)return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),C&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&M)}),H.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:N,imageVariants:j,generateSources:O}),H.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:N,imageVariants:j,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,x(j),c.default.createElement(k,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,s.default)({alt:r,title:t,loading:w},H,{imageVariants:j}))}}));if(m){var W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete W.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},C&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:C,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},P&&M)}),H.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:N,imageVariants:j,generateSources:O}),H.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:N,imageVariants:j,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,x(j),c.default.createElement(k,{alt:r,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,s.default)({alt:r,title:t,loading:w},H,{imageVariants:j}))}}))}return null},t}(c.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=f.default.shape({width:f.default.number.isRequired,height:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string,media:f.default.string}),z=f.default.shape({aspectRatio:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,sizes:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string,media:f.default.string,maxWidth:f.default.number,maxHeight:f.default.number});function C(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");f.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}T.propTypes={resolutions:P,sizes:z,fixed:C(f.default.oneOfType([P,f.default.arrayOf(P)])),fluid:C(f.default.oneOfType([z,f.default.arrayOf(z)])),fadeIn:f.default.bool,durationFadeIn:f.default.number,title:f.default.string,alt:f.default.string,className:f.default.oneOfType([f.default.string,f.default.object]),critical:f.default.bool,crossOrigin:f.default.oneOfType([f.default.string,f.default.bool]),style:f.default.object,imgStyle:f.default.object,placeholderStyle:f.default.object,placeholderClassName:f.default.string,backgroundColor:f.default.oneOfType([f.default.string,f.default.bool]),onLoad:f.default.func,onError:f.default.func,onStartLoad:f.default.func,Tag:f.default.string,itemProp:f.default.string,loading:f.default.oneOf(["auto","lazy","eager"]),draggable:f.default.bool};var M=T;t.Z=M},1757:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(18),a=(r(4944),r(7294)),i=r(5444);var o=r(1496),u=function(e){var t=e.name,r=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["name"]),n=r.width,u={width:n?""+n:"unset",margin:r.centered?"0 auto":"unset"},s=(0,i.K2)("759297313").allImageSharp.images.find((function(e){return e.node.fluid.originalName===t}));return a.createElement(o.Z,Object.assign({style:u},s.node,r))},s=r(7198),c=r(6179),f=function(e){var t=e.data,r=(0,a.useState)([]),o=r[0],f=r[1],l=(0,a.useState)(),d=(l[0],l[1]),p=(0,a.useState)([]),g=p[0],h=p[1],m=(0,a.useState)([]),v=m[0],y=m[1];(0,a.useEffect)((function(){S()}),[]),(0,a.useEffect)((function(){x()}),[o]);var b=function(e,t){return Math.floor(Math.random()*(t-e))+e},S=function(){var e=t.allMarkdownRemark.edges.map((function(e){return[e.node.frontmatter.order,e.node.frontmatter.title]})).sort((function(e,t){return e[0]>t[0]?1:-1})).map((function(e){return e[1]}));f(e);var r=e[b(0,4)];d(r)},x=function(){var e={},r=[];t.allMarkdownRemark.edges.forEach((function(t){var r=t.node.frontmatter.title;e[r]=t.node.frontmatter.projects}));var a=Math.max.apply(Math,(0,n.Z)(Object.values(e).map((function(e){return e.length}))));Array(a).fill(o).flat().forEach((function(t){var n=b(0,e[t].length),a=e[t][n];r.push(a),e[t]=e[t].slice(0,n).concat(e[t].slice(n+1,e[t].length))})),(r=r.reverse().filter(Boolean)).length>0&&y([r.pop()]),h(r)},w=function(){if(g.length>0){var e=g.pop();y((function(t){return[].concat((0,n.Z)(t),[e])}))}},E=function(){return v.map((function(e,t){var r=t==v.length-1;return a.createElement("div",{className:"image-container",onClick:r?w:void 0},a.createElement(u,{className:r?"first-image":"",name:e.image}),r?a.createElement("div",{className:"image-cross-overlay"},"＋"):"",a.createElement("figcaption",null,e.caption))})).reverse()};return a.createElement(s.Z,null,a.createElement(c.Z,{title:"Projects"}),a.createElement(E,null),a.createElement("p",null,a.createElement(i.rU,{className:"about-link",to:"/about/"},"zoff"),a.createElement("br",null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-faa9d62f266d7bbe1727.js.map