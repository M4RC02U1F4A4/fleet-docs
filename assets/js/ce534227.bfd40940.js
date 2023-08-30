"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[6342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},s="GitRepo Resource",i={unversionedId:"ref-gitrepo",id:"version-0.6/ref-gitrepo",title:"GitRepo Resource",description:"The GitRepo resource describes git repositories, how to access them and where the bundles are located.",source:"@site/versioned_docs/version-0.6/ref-gitrepo.md",sourceDirName:".",slug:"/ref-gitrepo",permalink:"/0.6/ref-gitrepo",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.6/ref-gitrepo.md",tags:[],version:"0.6",lastUpdatedAt:1693400457,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{},sidebar:"docs",previous:{title:"fleet.yaml",permalink:"/0.6/ref-fleet-yaml"},next:{title:"Troubleshooting",permalink:"/0.6/troubleshooting"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gitrepo-resource"},"GitRepo Resource"),(0,o.kt)("p",null,"The GitRepo resource describes git repositories, how to access them and where the bundles are located."),(0,o.kt)("p",null,"The content of the resource corresponds to the ",(0,o.kt)("a",{parentName:"p",href:"./ref-crds#gitrepospec"},"GitRepoSpec"),".\nFor more information on how to use GitRepo resource, e.g. how to watch private repositories, see ",(0,o.kt)("a",{parentName:"p",href:"/0.6/gitrepo-add"},"Create a GitRepo Resource"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  # Any name can be used here\n  name: my-repo\n  # For single cluster use fleet-local, otherwise use the namespace of\n  # your choosing\n  namespace: fleet-local\nspec:\n  # This can be a HTTPS or git URL.  If you are using a git URL then\n  # clientSecretName will probably need to be set to supply a credential.\n  # repo is the only required parameter for a repo to be monitored.\n  #\n  repo: https://github.com/rancher/fleet-examples\n\n  # Enforce all resources go to this target namespace. If a cluster scoped\n  # resource is found the deployment will fail.\n  #\n  # targetNamespace: app1\n\n  # Any branch can be watched, this field is optional. If not specified the\n  # branch is assumed to be master\n  #\n  # branch: master\n\n  # A specific commit or tag can also be watched.\n  #\n  # revision: v0.3.0\n\n  # For a private registry you must supply a clientSecretName. A default\n  # secret can be set at the namespace level using the GitRepoRestriction\n  # type. Secrets must be of the type "kubernetes.io/ssh-auth" or\n  # "kubernetes.io/basic-auth". The secret is assumed to be in the\n  # same namespace as the GitRepo\n  #\n  # clientSecretName: my-ssh-key\n  #\n  # If fleet.yaml contains a private Helm repo that requires authentication,\n  # provide the credentials in a K8s secret and specify them here.\n  # Danger: the credentials will be sent to all repositories referenced from\n  # this gitrepo. See section below for more information.\n  #\n  # helmSecretName: my-helm-secret\n  # \n  # Helm credentials from helmSecretName will be used if the helm repository url matches this regular expression. \n  # Credentials will always be used if it is empty or not provided\n  # \n  # helmRepoURLRegex: https://charts.rancher.io/*\n  #\n  # To add additional ca-bundle for self-signed certs, caBundle can be\n  # filled with base64 encoded pem data. For example:\n  # `cat /path/to/ca.pem | base64 -w 0`\n  #\n  # caBundle: my-ca-bundle\n  #\n  # Disable SSL verification for git repo\n  #\n  # insecureSkipTLSVerify: true\n  #\n  # A git repo can read multiple paths in a repo at once.\n  # The below field is expected to be an array of paths and\n  # supports path globbing (ex: some/*/path)\n  #\n  # Example:\n  # paths:\n  # - single-path\n  # - multiple-paths/*\n  paths:\n  - simple\n\n  # PollingInterval configures how often fleet checks the git repo. The default\n  # is 15 seconds.\n  # Setting this to zero does not disable polling. It results in a 15s\n  # interval, too.\n  # As checking a git repo incurs a CPU cost, raising this value can help\n  # lowering fleetcontroller\'s CPU usage if tens of git repos are used or more\n  #\n  # pollingInterval: 15s\n\n  # Paused  causes changes in Git to not be propagated down to the clusters but\n  # instead mark resources as OutOfSync\n  #\n  # paused: false\n\n  # Increment this number to force a redeployment of contents from Git\n  #\n  # forceSyncGeneration: 0\n\n  # The service account that will be used to perform this deployment.\n  # This is the name of the service account that exists in the\n  # downstream cluster in the cattle-fleet-system namespace. It is assumed\n  # this service account already exists so it should be create before\n  # hand, most likely coming from another git repo registered with\n  # the Fleet manager.\n  #\n  # serviceAccount: moreSecureAccountThanClusterAdmin\n\n  # Target clusters to deploy to if running Fleet in a multi-cluster\n  # style. Refer to the "Mapping to Downstream Clusters" docs for\n  # more information.\n  #\n  # targets: ...\n')))}u.isMDXComponent=!0}}]);