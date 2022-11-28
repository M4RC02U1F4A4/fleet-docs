"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[2343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="Advanced Users",s={unversionedId:"advanced-users",id:"advanced-users",title:"Advanced Users",description:"Note that using Fleet outside of Rancher is highly discouraged for any users who do not need to perform advanced actions. However, there are some advanced use cases that may need to be performed outside of Rancher, also known as Standalone Fleet, or Fleet without Rancher. This section will highlight such use cases.",source:"@site/docs/advanced-users.md",sourceDirName:".",slug:"/advanced-users",permalink:"/next/advanced-users",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/advanced-users.md",tags:[],version:"current",lastUpdatedAt:1669631681,formattedLastUpdatedAt:"Nov 28, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/next/troubleshooting"},next:{title:"Installation",permalink:"/next/installation"}},i={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-users"},"Advanced Users"),(0,a.kt)("p",null,"Note that using Fleet outside of Rancher is highly discouraged for any users who do not need to perform advanced actions. However, there are some advanced use cases that may need to be performed outside of Rancher, also known as Standalone Fleet, or Fleet without Rancher. This section will highlight such use cases."),(0,a.kt)("p",null,"The following are examples of advanced use cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Nested GitRepo CRs"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Managing Fleet within Fleet (nested GitRepo usage) is not currently supported. We will update the documentation if support becomes available."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/next/single-cluster-install"},"Single cluster installation"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/next/multi-cluster-install"},"Multi-cluster installation")," "))),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/next/installation"},"installation")," and the ",(0,a.kt)("a",{parentName:"p",href:"/next/uninstall"},"uninstall")," documentation for additional information."))}d.isMDXComponent=!0}}]);