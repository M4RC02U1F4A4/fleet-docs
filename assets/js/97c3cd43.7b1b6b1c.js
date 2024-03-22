"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[2299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=f(n),d=l,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var f=2;f<a;f++)o[f]=n[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>f});var r=n(7462),l=(n(7294),n(3905));const a={title:"",sidebar_label:"fleet"},o=void 0,i={unversionedId:"cli/fleet-cli/fleet",id:"version-0.7/cli/fleet-cli/fleet",title:"",description:"fleet",source:"@site/versioned_docs/version-0.7/cli/fleet-cli/fleet.md",sourceDirName:"cli/fleet-cli",slug:"/cli/fleet-cli/fleet",permalink:"/0.7/cli/fleet-cli/fleet",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.7/cli/fleet-cli/fleet.md",tags:[],version:"0.7",lastUpdatedAt:1711112603,formattedLastUpdatedAt:"Mar 22, 2024",frontMatter:{title:"",sidebar_label:"fleet"},sidebar:"docs",previous:{title:"fleet-agent",permalink:"/0.7/cli/fleet-agent/"},next:{title:"fleet apply",permalink:"/0.7/cli/fleet-cli/fleet_apply"}},c={},f=[{value:"fleet",id:"fleet",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:f};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"fleet"},"fleet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"fleet [flags]\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'      --context string            kubeconfig context for authentication\n      --debug                     Turn on debug logging\n      --debug-level int           If debugging is enabled, set klog -v=X\n  -h, --help                      help for fleet\n  -k, --kubeconfig string         kubeconfig for authentication\n  -n, --namespace string          namespace (default "fleet-local")\n      --system-namespace string   System namespace of the controller (default "cattle-fleet-system")\n')),(0,l.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./fleet_apply"},"fleet apply"),"\t - Render a bundle into a Kubernetes resource and apply it in the Fleet Manager"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./fleet_test"},"fleet test"),"\t - Match a bundle to a target and render the output")))}s.isMDXComponent=!0}}]);