"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[1462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i="Image scan",s={unversionedId:"imagescan",id:"version-0.4/imagescan",title:"Image scan",description:"Image scan in fleet allows you to scan your image repository, fetch the desired image and update your git repository,",source:"@site/versioned_docs/version-0.4/imagescan.md",sourceDirName:".",slug:"/imagescan",permalink:"/0.4/imagescan",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.4/imagescan.md",tags:[],version:"0.4",lastUpdatedAt:1669631681,formattedLastUpdatedAt:"Nov 28, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Webhook",permalink:"/0.4/webhook"},next:{title:"Cluster and Bundle state",permalink:"/0.4/cluster-bundles-state"}},l={},c=[],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"image-scan"},"Image scan"),(0,r.kt)("p",null,"Image scan in fleet allows you to scan your image repository, fetch the desired image and update your git repository,\nwithout the need to manually update your manifests."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This feature is considered as experimental feature.")),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," and add the following section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'imageScans:\n# specify the policy to retrieve images, can be semver or alphabetical order \n- policy: \n    # if range is specified, it will take the latest image according to semver order in the range\n    # for more details on how to use semver, see https://github.com/Masterminds/semver\n    semver: \n      range: "*" \n    # can use ascending or descending order\n    alphabetical:\n      order: asc \n\n  # specify images to scan\n  image: "your.registry.com/repo/image" \n\n  # Specify the tag name, it has to be unique in the same bundle\n  tagName: test-scan\n\n  # specify secret to pull image if in private registry\n  secretRef:\n    name: dockerhub-secret \n\n  # Specify the scan interval\n  interval: 5m \n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can create multiple image scans in fleet.yaml.")),(0,r.kt)("p",null,"Go to your manifest files and update the field that you want to replace. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: redis-slave\nspec:\n  selector:\n    matchLabels:\n      app: redis\n      role: slave\n      tier: backend\n  replicas: 2\n  template:\n    metadata:\n      labels:\n        app: redis\n        role: slave\n        tier: backend\n    spec:\n      containers:\n      - name: slave\n        image: <image>:<tag> # {"$imagescan": "test-scan"}\n        resources:\n          requests:\n            cpu: 100m\n            memory: 100Mi\n        ports:\n        - containerPort: 6379\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There are multiple form of tagName you can reference. For example"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'{"$imagescan": "test-scan"}'),": Use full image name(foo/bar:tag)"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'{"$imagescan": "test-scan:name"}'),": Only use image name without tag(foo/bar)"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'{"$imagescan": "test-scan:tag"}'),": Only use image tag"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'{"$imagescan": "test-scan:digest"}'),": Use full image name with digest(foo/bar:",(0,r.kt)("a",{parentName:"p",href:"mailto:tag@sha256..."},"tag@sha256..."),")")),(0,r.kt)("p",null,"Create a GitRepo that includes your fleet.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: my-repo\n  namespace: fleet-local\nspec:\n  # change this to be your own repo\n  repo: https://github.com/rancher/fleet-examples \n  # define how long it will sync all the images and decide to apply change\n  imageScanInterval: 5m \n  # user must properly provide a secret that have write access to git repository\n  clientSecretName: secret \n  # specify the commit pattern\n  imageScanCommit:\n    authorName: foo\n    authorEmail: foo@bar.com\n    messageTemplate: "update image"\n')),(0,r.kt)("p",null,"Try pushing a new image tag, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"<image>:<new-tag>"),". Wait for a while and there should be a new commit pushed into your git repository to change tag in deployment.yaml.\nOnce change is made into git repository, fleet will read through the change and deploy the change into your cluster."))}p.isMDXComponent=!0}}]);