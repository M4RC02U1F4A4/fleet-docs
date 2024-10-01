"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[5964],{5680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,d=u["".concat(l,".").concat(h)]||u[h]||p[h]||s;return r?n.createElement(d,i(i({ref:t},g),{},{components:r})):n.createElement(d,i({ref:t},g))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const s={},i="Cluster Registration Internals",o={unversionedId:"ref-registration",id:"ref-registration",title:"Cluster Registration Internals",description:"How does cluster registration work?",source:"@site/docs/ref-registration.md",sourceDirName:".",slug:"/ref-registration",permalink:"/ref-registration",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/ref-registration.md",tags:[],version:"current",lastUpdatedAt:1727793466,formattedLastUpdatedAt:"Oct 1, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Status Fields",permalink:"/ref-status-fields"},next:{title:"Configuration",permalink:"/ref-configuration"}},l={},c=[{value:"How does cluster registration work?",id:"how-does-cluster-registration-work",level:2},{value:"Cluster first",id:"cluster-first",level:3},{value:"Creating the Bootstrap Secret for the Downstream Cluster",id:"creating-the-bootstrap-secret-for-the-downstream-cluster",level:3},{value:"Creating the Fleet Agent Deployment",id:"creating-the-fleet-agent-deployment",level:3},{value:"Fleet Agent Starts Registration, Upgrades to Request Account",id:"fleet-agent-starts-registration-upgrades-to-request-account",level:3},{value:"Fleet Agent is Registered, Watches for <code>BundleDeployments</code>",id:"fleet-agent-is-registered-watches-for-bundledeployments",level:3},{value:"Notes",id:"notes",level:3},{value:"Diagram",id:"diagram",level:2},{value:"Registration Process and Controllers",id:"registration-process-and-controllers",level:3},{value:"Secrets during Agent Deployment",id:"secrets-during-agent-deployment",level:3},{value:"Fleet Cluster Registration in Rancher",id:"fleet-cluster-registration-in-rancher",level:2},{value:"Import Cluster into Rancher",id:"import-cluster-into-rancher",level:3}],g={toc:c},u="wrapper";function p(e){let{components:t,...s}=e;return(0,a.yg)(u,(0,n.A)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cluster-registration-internals"},"Cluster Registration Internals"),(0,a.yg)("h2",{id:"how-does-cluster-registration-work"},"How does cluster registration work?"),(0,a.yg)("p",null,"This text describes cluster registration with more technical details. The text ignores agent initiated registration, as it\u2019s not commonly used.\n",(0,a.yg)("a",{parentName:"p",href:"/cluster-registration#agent-initiated"},"Agent initiated registration")," is ",(0,a.yg)("a",{parentName:"p",href:"/cluster-registration#create-cluster-registration-tokens"},'"',(0,a.yg)("inlineCode",{parentName:"a"},"ClusterRegistrationToken"),' first"'),", which means pre-creating a cluster is optional."),(0,a.yg)("p",null,'See "',(0,a.yg)("a",{parentName:"p",href:"/cluster-registration"},"Register Downstream Clusters"),'" to learn how to register clusters.'),(0,a.yg)("h3",{id:"cluster-first"},"Cluster first"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"fleet-controller"),' starts up and may "bootstrap" the local cluster resource. In Rancher creating the local cluster resource is handled by the fleetcluster controller instead, but otherwise the process is identical.'),(0,a.yg)("p",null,"The process is identical for the local cluster or any downstream cluster. It starts by  creating a cluster resource, which refers to a kubeconfig secret."),(0,a.yg)("h3",{id:"creating-the-bootstrap-secret-for-the-downstream-cluster"},"Creating the Bootstrap Secret for the Downstream Cluster"),(0,a.yg)("p",null,"In this step a ",(0,a.yg)("inlineCode",{parentName:"p"},"ClusterRegistationToken"),' and an "import" service account are created based on a ',(0,a.yg)("inlineCode",{parentName:"p"},"Cluster")," resource."),(0,a.yg)("p",null,"The Fleet controller creates a ",(0,a.yg)("a",{parentName:"p",href:"https://fleet.rancher.io/architecture#security"},(0,a.yg)("inlineCode",{parentName:"a"},"ClusterRegistrationToken")),"\nand waits for it to be complete. The ",(0,a.yg)("inlineCode",{parentName:"p"},"ClusterRegistationToken"),' triggers the creation of the "import" service account, which can create\n',(0,a.yg)("inlineCode",{parentName:"p"},"ClusterRegistrations"),' and read any secret in the system registration namespace (eg "cattle-fleet-clusters-system"). The ',(0,a.yg)("inlineCode",{parentName:"p"},"import.go"),' controller will\nenqueue itself until the "import" service account exists, because that account is needed to create the ',(0,a.yg)("inlineCode",{parentName:"p"},"fleet-agent-bootstrap")," secret."),(0,a.yg)("h3",{id:"creating-the-fleet-agent-deployment"},"Creating the Fleet Agent Deployment"),(0,a.yg)("p",null,"The Fleet controller will now create the Fleet agent deployment and the bootstrap secret on the downstream cluster."),(0,a.yg)("p",null,"The bootstrap secret contains the API server URL of the upstream cluster and is used to build a kubeconfig to access the upstream cluster. Both values are taken from the Fleet controller config configmap. That configmap is part of the helm chart."),(0,a.yg)("h3",{id:"fleet-agent-starts-registration-upgrades-to-request-account"},"Fleet Agent Starts Registration, Upgrades to Request Account"),(0,a.yg)("p",null,'The agent uses the "import" account to upgrade to a request account.'),(0,a.yg)("p",null,"Immediately the Fleet agent checks for a ",(0,a.yg)("inlineCode",{parentName:"p"},"fleet-agent-bootstrap"),' secret. If the bootstrap secret, which contains the "import" kubeconfig, is present the agent starts registering.'),(0,a.yg)("p",null,"Then agent creates the final ",(0,a.yg)("inlineCode",{parentName:"p"},"ClusterRegistration")," resource in fleet-default on the management cluster, with a random number. The random number will be used for the registration secret's name."),(0,a.yg)("p",null,"The Fleet controller triggers and tries to grant the ",(0,a.yg)("inlineCode",{parentName:"p"},"ClusterRegistration")," request to create agent's service account and create the 'c-","*","' registration secret with the client's new kubeconfig. The registration secret name is ",(0,a.yg)("inlineCode",{parentName:"p"},'hash("clientID-clientRandom")'),"."),(0,a.yg)("p",null,'The new kubeconfig uses the "request" account. The "request" account can access the cluster status, ',(0,a.yg)("inlineCode",{parentName:"p"},"BundleDeployments")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Contents"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"ClusterRegistationToken to ClusterRegistration",src:r(4294).A,width:"1241",height:"689"})),(0,a.yg)("h3",{id:"fleet-agent-is-registered-watches-for-bundledeployments"},"Fleet Agent is Registered, Watches for ",(0,a.yg)("inlineCode",{parentName:"h3"},"BundleDeployments")),(0,a.yg)("p",null,'At this point the agent is fully registered and will persist the "request" account into a ',(0,a.yg)("inlineCode",{parentName:"p"},"fleet-agent")," secret.\nThe API server URL and CA are copied from the bootstrap secret, which inherited these values from the Fleet controller's helm chart values."),(0,a.yg)("p",null,"The bootstrap secret is deleted. When the agent restarts, it will not re-register, since the bootstrap secret is missing."),(0,a.yg)("p",null,'The agent starts watching its "',(0,a.yg)("a",{parentName:"p",href:"https://fleet.rancher.io/namespaces#cluster-namespaces"},"Cluster Namespace"),'" for ',(0,a.yg)("inlineCode",{parentName:"p"},"BundleDeployments"),". At this point the agent is ready to deploy workloads."),(0,a.yg)("h3",{id:"notes"},"Notes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'The registration starts with the "import" account and pivots to the "request" account.'),(0,a.yg)("li",{parentName:"ul"},'The fleet-default namespace has all the cluster registrations, the "import" account uses a separate namespace.'),(0,a.yg)("li",{parentName:"ul"},"Once the agent is registered, ",(0,a.yg)("inlineCode",{parentName:"li"},"fleet-controller")," will trigger on a cluster or namespace change. The ",(0,a.yg)("inlineCode",{parentName:"li"},"manageagent"),' controller will then create a bundle to adopt the existing agent deployment. The agent will update itself to the bundle and since the "generation" environment variable changes, it will restart.'),(0,a.yg)("li",{parentName:"ul"},"If no bootstrap secret exists, the agent will not re-register.")),(0,a.yg)("h2",{id:"diagram"},"Diagram"),(0,a.yg)("h3",{id:"registration-process-and-controllers"},"Registration Process and Controllers"),(0,a.yg)("p",null,"Detailed analysis of the registration process for clusters. This shows the interaction of controllers, resources and service accounts during the registration of a new downstream cluster or the local cluster."),(0,a.yg)("p",null,"It is important to note that there are multiple ways to start this:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Creating a bootstrap config. Fleet does this for the local agent."),(0,a.yg)("li",{parentName:"ul"},"Creating a ",(0,a.yg)("inlineCode",{parentName:"li"},"Cluster")," resource with a kubeconfig. Rancher does this for downstream clusters. See ",(0,a.yg)("a",{parentName:"li",href:"/cluster-registration#manager-initiated"},"manager-initiated registration"),"."),(0,a.yg)("li",{parentName:"ul"},"Create a ",(0,a.yg)("inlineCode",{parentName:"li"},"ClusterRegistrationToken")," resource, optionally create a ",(0,a.yg)("inlineCode",{parentName:"li"},"Cluster")," resource for a pre-defined (",(0,a.yg)("inlineCode",{parentName:"li"},"clientID"),") cluster. See ",(0,a.yg)("a",{parentName:"li",href:"/cluster-registration#agent-initiated"},"agent-initiated registration"),".")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Registration",src:r(1319).A,width:"3700",height:"2492"})),(0,a.yg)("h3",{id:"secrets-during-agent-deployment"},"Secrets during Agent Deployment"),(0,a.yg)("p",null,"This diagram shows the resources created during registration and focuses on the k8s API server configuration."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"import.go")," controller triggers on Cluster creation/update events and deploys the agent."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This image shows how the API server URL and CA propagates through the secrets during registration:")),(0,a.yg)("p",null,"The arrows in the diagram show how the API server values are copied from\nthe Helm values to the cluster registration secret on the upstream\ncluster and finally downstream to the bootstrap secret of the agent."),(0,a.yg)("p",null,'There is one special case, if the agent is for the local/"bootstrap"\ncluster, the server values also exist in the kubeconfig secret,\nreferenced by the Cluster resource. In this case the kubeconfig secret\ncontains the upstream server URL and CA, next to the downstream\'s\nkubeconfig. If the settings are present in the kubeconfig secret, they\noverride the configured values.'),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Registration Secrets",src:r(8186).A,width:"1581",height:"4162"})),(0,a.yg)("h2",{id:"fleet-cluster-registration-in-rancher"},"Fleet Cluster Registration in Rancher"),(0,a.yg)("p",null,"Rancher installs the fleet helm chart. The API server URL and CA are ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/release/v2.9/pkg/controllers/dashboard/fleetcharts/controller.go#L111-L112"},"derived from Rancher's settings"),"."),(0,a.yg)("p",null,"Fleet will pass these values to a Fleet agent, so it can connect back to the Fleet controller."),(0,a.yg)("h3",{id:"import-cluster-into-rancher"},"Import Cluster into Rancher"),(0,a.yg)("p",null,"When the user runs ",(0,a.yg)("inlineCode",{parentName:"p"},"curl | kubectl apply"),", the applied manifest includes the rancher agent deployment."),(0,a.yg)("p",null,"The deployment contains a secret ",(0,a.yg)("inlineCode",{parentName:"p"},"cattle-credentials-")," which contains the API URL and a token."),(0,a.yg)("p",null,"The Rancher agent starts up and reports downstream's kubeconfig to upstream."),(0,a.yg)("p",null,"Rancher then creates the fleet Cluster resource, which references a ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/871b6d9137246bd93733f01184ea435f40c5d56c/pkg/provisioningv2/kubeconfig/manager.go#L69"},"kubeconfig secret"),"."),(0,a.yg)("p",null,"\ud83d\udc49Fleet will use this kubeconfig to deploy the agent on the downstream cluster."))}p.isMDXComponent=!0},1319:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/FleetRegistration-e49565723b02880b6dd7fa0ddc1fdbe2.svg"},8186:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/FleetRegistrationSecrets-deae20b127f82ebcf32a5c593b53b912.svg"},4294:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/FleetRegistrationToken-96af9ec264665fd3fef0c450747987ef.svg"}}]);