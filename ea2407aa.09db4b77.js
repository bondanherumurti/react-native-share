(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(76)),i={id:"migrate-v3-to-v4",title:"Migrating to v4"},c={unversionedId:"migrate-v3-to-v4",id:"migrate-v3-to-v4",isDocsHomePage:!1,title:"Migrating to v4",description:"iOS",source:"@site/docs/migrate-v3-to-v4.mdx",slug:"/migrate-v3-to-v4",permalink:"/react-native-share/docs/migrate-v3-to-v4",editUrl:"https://github.com/react-native-community/react-native-share/edit/master/website/docs/migrate-v3-to-v4.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Share Remote PDF file",permalink:"/react-native-share/docs/share-remote-file"},next:{title:"Troubleshooting iOS",permalink:"/react-native-share/docs/troubleshooting-ios"}},s=[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[{value:"getExternalStorageDirectory -&gt; getExternalCacheDir",id:"getexternalstoragedirectory---getexternalcachedir",children:[]},{value:"Removal of WRITE_EXTERNAL_STORAGE permission request",id:"removal-of-write_external_storage-permission-request",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ios"},"iOS"),Object(o.b)("p",null,"No breaking changes \ud83d\ude0c"),Object(o.b)("h2",{id:"android"},"Android"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-share/pull/871"}),"v4 introduces some changes")," to permission requesting & where we write files to disk."),Object(o.b)("h3",{id:"getexternalstoragedirectory---getexternalcachedir"},"getExternalStorageDirectory -> getExternalCacheDir"),Object(o.b)("p",null,"If your app targets API 29 you'll notice ",Object(o.b)("inlineCode",{parentName:"p"},"getExternalStorageDirectory")," is now deprecated. We've therefore migrated where we save files to disk (ie: in the base of base64 sharing) to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/content/Context#getExternalCacheDir()"}),"getExternalCacheDir")," which has been available since API 8."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"What you need to do")),Object(o.b)("p",null,"If your app relies on where files were being saved before, you'll need to update the paths you use accordingly."),Object(o.b)("p",null,"Also if you've designated a ",Object(o.b)("inlineCode",{parentName:"p"},"FileProvider")," in your AndroidManifest, you'll need to whitelist the correct path, ie:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),'<?xml version="1.0" encoding="utf-8"?>\n<paths xmlns:android="http://schemas.android.com/apk/res/android">\n-  <external-path name="myexternalimages" path="Download/" />\n+  <external-cache-path name="myexternalimages" path="Download/" />\n</paths>\n')),Object(o.b)("h3",{id:"removal-of-write_external_storage-permission-request"},"Removal of WRITE_EXTERNAL_STORAGE permission request"),Object(o.b)("p",null,"If you're targeting versions from KITKAT (API 19) you no longer need to ask for permission to write to storage, so we've skipped that prompt in that case. If your app was displaying messaging to prep your users or otherwise expected this prompt to occur, be advised."),Object(o.b)("p",null,"Per the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/content/Context#getExternalCacheDir()"}),"Android docs"),":"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Starting in Build.VERSION_CODES.KITKAT, no permissions are required to read or write to the returned path; it's always accessible to the calling app. This only applies to paths generated for package name of the calling application.")))}p.isMDXComponent=!0},76:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);