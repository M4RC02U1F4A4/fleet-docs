"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[8813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?l.createElement(f,o(o({ref:t},p),{},{components:n})):l.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=n(7462),r=(n(7294),n(3905));const a={},o="Bundle Lifecycle",i={unversionedId:"ref-bundle-stages",id:"ref-bundle-stages",title:"Bundle Lifecycle",description:"A bundle is an internal resource used for the orchestration of resources from git. When a GitRepo is scanned it will produce one or more bundles.",source:"@site/docs/ref-bundle-stages.md",sourceDirName:".",slug:"/ref-bundle-stages",permalink:"/ref-bundle-stages",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/ref-bundle-stages.md",tags:[],version:"current",lastUpdatedAt:1715677789,formattedLastUpdatedAt:"May 14, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Core Concepts",permalink:"/concepts"},next:{title:"Git Repository Contents",permalink:"/gitrepo-content"}},c={},s=[{value:"Examining the Bundle Lifecycle With the CLI",id:"examining-the-bundle-lifecycle-with-the-cli",level:2},{value:"fleet apply",id:"fleet-apply",level:3},{value:"fleet target",id:"fleet-target",level:3},{value:"fleet deploy",id:"fleet-deploy",level:3},{value:"Lifecycle CLI Example",id:"lifecycle-cli-example",level:3}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bundle-lifecycle"},"Bundle Lifecycle"),(0,r.kt)("p",null,"A bundle is an internal resource used for the orchestration of resources from git. When a GitRepo is scanned it will produce one or more bundles."),(0,r.kt)("p",null,"To demonstrate the life cycle of a Fleet bundle, we will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/fleet-examples/tree/master/multi-cluster/helm"},"multi-cluster/helm")," as a case study."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User will create a ",(0,r.kt)("a",{parentName:"li",href:"/gitrepo-add#create-gitrepo-instance"},"GitRepo")," that points to the multi-cluster/helm repository."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"gitjob-controller")," will sync changes from the GitRepo and detect changes from the polling or ",(0,r.kt)("a",{parentName:"li",href:"/webhook"},"webhook event"),". With every commit change, the ",(0,r.kt)("inlineCode",{parentName:"li"},"gitjob-controller")," will create a job that clones the git repository, reads content from the repo such as ",(0,r.kt)("inlineCode",{parentName:"li"},"fleet.yaml")," and other manifests, and creates the Fleet ",(0,r.kt)("a",{parentName:"li",href:"/cluster-bundles-state#bundles"},"bundle"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," The job pod with the image name ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher/tekton-utils")," will be under the same namespace as the GitRepo.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"fleet-controller")," then syncs changes from the bundle. According to the targets, the ",(0,r.kt)("inlineCode",{parentName:"li"},"fleet-controller")," will create ",(0,r.kt)("inlineCode",{parentName:"li"},"BundleDeployment")," resources, which are a combination of a bundle and a target cluster."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"fleet-agent")," will then pull the ",(0,r.kt)("inlineCode",{parentName:"li"},"BundleDeployment")," from the Fleet controlplane. The agent deploys bundle manifests as a ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm chart")," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"BundleDeployment")," into the downstream clusters."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"fleet-agent")," will continue to monitor the application bundle and report statuses back in the following order: bundledeployment > bundle > GitRepo > cluster.")),(0,r.kt)("p",null,"This diagram shows the different rendering stages a bundle goes through until deployment."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bundle Stages",src:n(5208).Z,width:"730",height:"811"})),(0,r.kt)("h2",{id:"examining-the-bundle-lifecycle-with-the-cli"},"Examining the Bundle Lifecycle With the CLI"),(0,r.kt)("p",null,"Several fleet CLI commands help with debugging bundles."),(0,r.kt)("h3",{id:"fleet-apply"},"fleet apply"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cli/fleet-cli/fleet_apply"},"Apply")," renders a folder with Kubernetes resources, such as a Helm chart, manifests, or kustomize folders, into a Fleet bundle resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/rancher/fleet-test-data\ncd fleet-test-data\nfleet apply -n fleet-local -o bundle.yaml testbundle simple-chart/\n")),(0,r.kt)("p",null,"More information on how to create bundles with ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet apply")," can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/bundle-add"},"section on bundles"),"."),(0,r.kt)("h3",{id:"fleet-target"},"fleet target"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cli/fleet-cli/fleet_target"},"Target")," reads a bundle from a file and works with a live cluster to print out the ",(0,r.kt)("inlineCode",{parentName:"p"},"bundledeployment")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"content"),' resource, which fleetcontroller would create. It takes a namespace as an argument, so it can look in that namespace for e.g. cluster resources. It can also dump the data structure which is used during "targeting", so decisions taken regarding labels and cluster names can be checked.'),(0,r.kt)("h3",{id:"fleet-deploy"},"fleet deploy"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cli/fleet-cli/fleet_deploy"},"Deploy")," takes the output of ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet target"),", or a dumped bundledeployment/content resource and deploys it to a cluster, just like fleet-agent would. It supports a dry run mode, to print out the resources which would be created, instead of installing them with helm. Since the command doesn't create the input resources, a running fleet-agent would likely garbage collect the deployment."),(0,r.kt)("p",null,"The deploy command can be used to bring bundles to air-gapped clusters."),(0,r.kt)("h3",{id:"lifecycle-cli-example"},"Lifecycle CLI Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/rancher/fleet-test-data\ncd fleet-test-data\n# for information about apply see https://fleet.rancher.io/bundle-add\nfleet apply -n fleet-local -o bundle.yaml testbundle simple-chart/\nfleet target --bundle-file bundle.yaml --list-inputs  > bd.yaml\nfleet deploy --input-file bd.yaml --dry-run\n")))}d.isMDXComponent=!0},5208:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/FleetBundleStages-23d8ed832e76974ba6693016c5d52ad7.svg"}}]);