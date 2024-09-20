"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[6081],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>u});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,u=p["".concat(c,".").concat(d)]||p[d]||g[d]||o;return t?a.createElement(u,i(i({ref:n},m),{},{components:t})):a.createElement(u,i({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(8168),r=(t(6540),t(5680));const o={},i="Using Image Scan to Update Container Image References",s={unversionedId:"imagescan",id:"version-0.9/imagescan",title:"Using Image Scan to Update Container Image References",description:"Image scan in fleet allows you to scan your image repository, fetch the desired image and update your git repository,",source:"@site/versioned_docs/version-0.9/imagescan.md",sourceDirName:".",slug:"/imagescan",permalink:"/0.9/imagescan",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.9/imagescan.md",tags:[],version:"0.9",lastUpdatedAt:1726840499,formattedLastUpdatedAt:"Sep 20, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Using Webhooks Instead of Polling",permalink:"/0.9/webhook"},next:{title:"Create a Bundle Resource",permalink:"/0.9/bundle-add"}},c={},l=[],m={toc:l},p="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"using-image-scan-to-update-container-image-references"},"Using Image Scan to Update Container Image References"),(0,r.yg)("p",null,"Image scan in fleet allows you to scan your image repository, fetch the desired image and update your git repository,\nwithout the need to manually update your manifests."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"This feature is considered as experimental feature.")),(0,r.yg)("p",null,"Go to ",(0,r.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," and add the following section."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'imageScans:\n# specify the policy to retrieve images, can be semver or alphabetical order\n- policy:\n    # if range is specified, it will take the latest image according to semver order in the range\n    # for more details on how to use semver, see https://github.com/Masterminds/semver\n    semver:\n      range: "*"\n    # can use ascending or descending order\n    alphabetical:\n      order: asc\n\n  # specify images to scan\n  image: "your.registry.com/repo/image"\n\n  # Specify the tag name, it has to be unique in the same bundle\n  tagName: test-scan\n\n  # specify secret to pull image if in private registry\n  secretRef:\n    name: dockerhub-secret\n\n  # Specify the scan interval\n  interval: 5m\n')),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"You can create multiple image scans in fleet.yaml.")),(0,r.yg)("p",null,"Go to your manifest files and update the field that you want to replace. For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: redis-slave\nspec:\n  selector:\n    matchLabels:\n      app: redis\n      role: slave\n      tier: backend\n  replicas: 2\n  template:\n    metadata:\n      labels:\n        app: redis\n        role: slave\n        tier: backend\n    spec:\n      containers:\n      - name: slave\n        image: <image>:<tag> # {"$imagescan": "test-scan"}\n        resources:\n          requests:\n            cpu: 100m\n            memory: 100Mi\n        ports:\n        - containerPort: 6379\n')),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"There are multiple form of tagName you can reference. For example"),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},'{"$imagescan": "test-scan"}'),": Use full image name(foo/bar:tag)"),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},'{"$imagescan": "test-scan:name"}'),": Only use image name without tag(foo/bar)"),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},'{"$imagescan": "test-scan:tag"}'),": Only use image tag"),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},'{"$imagescan": "test-scan:digest"}'),": Use full image name with digest(foo/bar:",(0,r.yg)("a",{parentName:"p",href:"mailto:tag@sha256..."},"tag@sha256..."),")")),(0,r.yg)("p",null,"Create a GitRepo that includes your fleet.yaml"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'kind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: my-repo\n  namespace: fleet-local\nspec:\n  # change this to be your own repo\n  repo: https://github.com/rancher/fleet-examples\n  # define how long it will sync all the images and decide to apply change\n  imageScanInterval: 5m\n  # user must properly provide a secret that have write access to git repository\n  clientSecretName: secret\n  # specify the commit pattern\n  imageScanCommit:\n    authorName: foo\n    authorEmail: foo@bar.com\n    messageTemplate: "update image"\n')),(0,r.yg)("p",null,"Try pushing a new image tag, for example, ",(0,r.yg)("inlineCode",{parentName:"p"},"<image>:<new-tag>"),". Wait for a while and there should be a new commit pushed into your git repository to change tag in deployment.yaml.\nOnce change is made into git repository, fleet will read through the change and deploy the change into your cluster."))}g.isMDXComponent=!0}}]);