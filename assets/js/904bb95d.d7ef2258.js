"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[427],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4103:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},l="Bundle Resource",s={unversionedId:"ref-bundle",id:"ref-bundle",title:"Bundle Resource",description:"Bundles are automatically created by Fleet when a GitRepo is created.",source:"@site/docs/ref-bundle.md",sourceDirName:".",slug:"/ref-bundle",permalink:"/ref-bundle",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/ref-bundle.md",tags:[],version:"current",lastUpdatedAt:1711112603,formattedLastUpdatedAt:"Mar 22, 2024",frontMatter:{},sidebar:"docs",previous:{title:"GitRepo Resource",permalink:"/ref-gitrepo"},next:{title:"Troubleshooting",permalink:"/troubleshooting"}},i={},c=[],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bundle-resource"},"Bundle Resource"),(0,o.kt)("p",null,"Bundles are automatically created by Fleet when a ",(0,o.kt)("inlineCode",{parentName:"p"},"GitRepo")," is created."),(0,o.kt)("p",null,"The content of the resource corresponds to the ",(0,o.kt)("a",{parentName:"p",href:"./ref-crds#bundlespec"},"BundleSpec"),".\nFor more information on how to use the Bundle resource ",(0,o.kt)("a",{parentName:"p",href:"/bundle-add"},"Create a Bundle Resource"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Bundle\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  # Any name can be used here\n  name: my-bundle\n  # For single cluster use fleet-local, otherwise use the namespace of\n  # your choosing\n  namespace: fleet-local\nspec:\n  # Namespace used for resources that do not specify a namespace.\n  # This field is not used to enforce or lock down the deployment to a specific namespace.\n  # defaultNamespace: test\n\n  # If present will assign all resource to this\n  # namespace and if any cluster scoped resource exists the deployment will fail.\n  # targetNamespace: app\n\n  # Kustomize options for the deployment, like the dir containing the kustomization.yaml file.\n  # kustomize: ...\n\n  # Helm options for the deployment, like the chart name, repo and values.\n  # helm: ...\n\n  # ServiceAccount which will be used to perform this deployment.\n  # serviceAccount: sa\n\n  # ForceSyncGeneration is used to force a redeployment.\n  # forceSyncGeneration: 0\n\n  # YAML options, if using raw YAML these are names that map to overlays/{name} that will be used to replace or patch a resource.\n  # yaml: ...\n\n  # Diff can be used to ignore the modified state of objects which are amended at runtime.\n  # A specific commit or tag can also be watched.\n  #\n  # diff: ...\n\n  # KeepResources can be used to keep the deployed resources when removing the bundle.\n  # keepResources: false\n\n  # If set to true, will stop any BundleDeployments from being updated. It will be marked as out of sync.\n  # paused: false\n\n  # Controls the rollout of bundles, by defining partitions, canaries and percentages for cluster availability.\n  # rolloutStrategy: ...\n\n  # Contain the actual resources from the git repo which will be deployed.\n  resources:\n  - content: |\n      apiVersion: apps/v1\n      kind: Deployment\n      metadata:\n        name: nginx-deployment\n        labels:\n          app: nginx\n      spec:\n        replicas: 3\n        selector:\n          matchLabels:\n            app: nginx\n        template:\n          metadata:\n            labels:\n              app: nginx\n          spec:\n            containers:\n              - name: nginx\n                image: nginx:1.14.2\n                ports:\n                  - containerPort: 80\n    name: nginx.yaml\n\n  # Target clusters to deploy to if running Fleet in a multi-cluster\n  # style. Refer to the "Mapping to Downstream Clusters" docs for\n  # more information.\n  #\n  # targets: ...\n\n  # This field is used by Fleet internally, and it should not be modified manually.\n  # Fleet will copy all targets into targetRestrictions when a Bundle is created for a GitRepo.\n  # targetRestrictions: ...\n\n  # Refers to the bundles which must be ready before this bundle can be deployed.\n  # dependsOn: ...\n\n')))}u.isMDXComponent=!0}}]);