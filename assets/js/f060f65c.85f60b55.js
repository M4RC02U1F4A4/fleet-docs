"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[3987],{5680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>y});var n=t(6540);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=s,y=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return t?n.createElement(y,r(r({ref:a},c),{},{components:t})):n.createElement(y,r({ref:a},c))}));function y(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var l=t.length,r=new Array(l);r[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[m]="string"==typeof e?e:s,r[1]=i;for(var p=2;p<l;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6087:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(8168),s=(t(6540),t(5680));const l={},r="Namespaces",i={unversionedId:"namespaces",id:"version-0.9/namespaces",title:"Namespaces",description:"All types in the Fleet manager are namespaced.  The namespaces of the manager types do not correspond to the namespaces",source:"@site/versioned_docs/version-0.9/namespaces.md",sourceDirName:".",slug:"/namespaces",permalink:"/0.9/namespaces",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.9/namespaces.md",tags:[],version:"0.9",lastUpdatedAt:1727793466,formattedLastUpdatedAt:"Oct 1, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Git Repository Contents",permalink:"/0.9/gitrepo-content"},next:{title:"Custom Resources During Deployment",permalink:"/0.9/resources-during-deployment"}},o={},p=[{value:"GitRepos, Bundles, Clusters, ClusterGroups",id:"gitrepos-bundles-clusters-clustergroups",level:2},{value:"GitRepo Namespace",id:"gitrepo-namespace",level:3},{value:"Namespace Creation Behavior in Bundles",id:"namespace-creation-behavior-in-bundles",level:2},{value:"Special Namespaces",id:"special-namespaces",level:2},{value:"fleet-local (local workspace, cluster registration namespace)",id:"fleet-local-local-workspace-cluster-registration-namespace",level:3},{value:"cattle-fleet-system (system namespace)",id:"cattle-fleet-system-system-namespace",level:3},{value:"cattle-fleet-clusters-system (system registration namespace)",id:"cattle-fleet-clusters-system-system-registration-namespace",level:3},{value:"Cluster Namespaces",id:"cluster-namespaces",level:3},{value:"Cross Namespace Deployments",id:"cross-namespace-deployments",level:2},{value:"Restricting GitRepos",id:"restricting-gitrepos",level:2},{value:"Allowed Target Namespaces",id:"allowed-target-namespaces",level:3}],c={toc:p},m="wrapper";function d(e){let{components:a,...l}=e;return(0,s.yg)(m,(0,n.A)({},c,l,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"namespaces"},"Namespaces"),(0,s.yg)("p",null,"All types in the Fleet manager are namespaced.  The namespaces of the manager types do not correspond to the namespaces\nof the deployed resources in the downstream cluster. Understanding how namespaces are use in the Fleet manager is\nimportant to understand the security model and how one can use Fleet in a multi-tenant fashion."),(0,s.yg)("h2",{id:"gitrepos-bundles-clusters-clustergroups"},"GitRepos, Bundles, Clusters, ClusterGroups"),(0,s.yg)("p",null,"The primary types are all scoped to a namespace. All selectors for ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepo")," targets will be evaluated against\nthe ",(0,s.yg)("inlineCode",{parentName:"p"},"Clusters")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"ClusterGroups")," in the same namespaces. This means that if you give ",(0,s.yg)("inlineCode",{parentName:"p"},"create")," or ",(0,s.yg)("inlineCode",{parentName:"p"},"update")," privileges\nto a ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepo")," type in a namespace, that end user can modify the selector to match any cluster in that namespace.\nThis means in practice if you want to have two teams self manage their own ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepo")," registrations but they should\nnot be able to target each others clusters, they should be in different namespaces."),(0,s.yg)("h3",{id:"gitrepo-namespace"},"GitRepo Namespace"),(0,s.yg)("p",null,"Git repos are added to the Fleet manager using the ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepo")," custom resource type. The ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepo")," type is namespaced. By default, Rancher will create two Fleet workspaces: ",(0,s.yg)("strong",{parentName:"p"},"fleet-default")," and ",(0,s.yg)("strong",{parentName:"p"},"fleet-local"),"."),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"Fleet-default")," will contain all the downstream clusters that are already registered through Rancher."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"Fleet-local")," will contain the local cluster by default.")),(0,s.yg)("p",null,"If you are using Fleet in a ",(0,s.yg)("a",{parentName:"p",href:"/0.9/concepts"},"single cluster")," style, the namespace will always be ",(0,s.yg)("strong",{parentName:"p"},"fleet-local"),". Check ",(0,s.yg)("a",{parentName:"p",href:"https://fleet.rancher.io/namespaces/#fleet-local"},"here")," for more on the ",(0,s.yg)("inlineCode",{parentName:"p"},"fleet-local")," namespace."),(0,s.yg)("p",null,"For a ",(0,s.yg)("a",{parentName:"p",href:"/0.9/concepts"},"multi-cluster")," style, please ensure you use the correct repo that will map to the right target clusters."),(0,s.yg)("h2",{id:"namespace-creation-behavior-in-bundles"},"Namespace Creation Behavior in Bundles"),(0,s.yg)("p",null,"When deploying a Fleet bundle, the specified namespace will automatically be created if it does not already exist."),(0,s.yg)("h2",{id:"special-namespaces"},"Special Namespaces"),(0,s.yg)("p",null,"An overview of the ",(0,s.yg)("a",{parentName:"p",href:"/0.9/namespaces"},"namespaces")," used by fleet and their resources."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Namespace",src:t(2128).A,width:"1437",height:"1731"})),(0,s.yg)("h3",{id:"fleet-local-local-workspace-cluster-registration-namespace"},"fleet-local (local workspace, cluster registration namespace)"),(0,s.yg)("p",null,"The ",(0,s.yg)("strong",{parentName:"p"},"fleet-local")," namespace is a special namespace used for the single cluster use case or to bootstrap\nthe configuration of the Fleet manager."),(0,s.yg)("p",null,"When fleet is installed the ",(0,s.yg)("inlineCode",{parentName:"p"},"fleet-local")," namespace is created along with one ",(0,s.yg)("inlineCode",{parentName:"p"},"Cluster")," called ",(0,s.yg)("inlineCode",{parentName:"p"},"local")," and one\n",(0,s.yg)("inlineCode",{parentName:"p"},"ClusterGroup")," called ",(0,s.yg)("inlineCode",{parentName:"p"},"default"),".  If no targets are specified on a ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepo"),", it is by default targeted to the\n",(0,s.yg)("inlineCode",{parentName:"p"},"ClusterGroup")," named ",(0,s.yg)("inlineCode",{parentName:"p"},"default"),".  This means that all ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepos")," created in ",(0,s.yg)("inlineCode",{parentName:"p"},"fleet-local")," will\nautomatically target the ",(0,s.yg)("inlineCode",{parentName:"p"},"local")," ",(0,s.yg)("inlineCode",{parentName:"p"},"Cluster"),".  The ",(0,s.yg)("inlineCode",{parentName:"p"},"local")," ",(0,s.yg)("inlineCode",{parentName:"p"},"Cluster")," refers to the cluster the Fleet manager is running\non."),(0,s.yg)("p",null,"The cluster registration namespace contains the cluster and the clusterregistration resources, as well as any gitrepos and bundles."),(0,s.yg)("h3",{id:"cattle-fleet-system-system-namespace"},"cattle-fleet-system (system namespace)"),(0,s.yg)("p",null,"The Fleet controller and Fleet agent run in this namespace. All service accounts referenced by ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepos")," are expected\nto live in this namespace in the downstream cluster."),(0,s.yg)("h3",{id:"cattle-fleet-clusters-system-system-registration-namespace"},"cattle-fleet-clusters-system (system registration namespace)"),(0,s.yg)("p",null,"This namespace holds secrets for the cluster registration process. It should contain no other resources in it,\nespecially secrets."),(0,s.yg)("h3",{id:"cluster-namespaces"},"Cluster Namespaces"),(0,s.yg)("p",null,"For every cluster that is registered a namespace is created by the Fleet manager for that cluster.\nThese namespaces are named in the form ",(0,s.yg)("inlineCode",{parentName:"p"},"cluster-${namespace}-${cluster}-${random}"),".  The purpose of this\nnamespace is that all ",(0,s.yg)("inlineCode",{parentName:"p"},"BundleDeployments")," for that cluster are put into this namespace and\nthen the downstream cluster is given access to watch and update ",(0,s.yg)("inlineCode",{parentName:"p"},"BundleDeployments")," in that namespace only."),(0,s.yg)("h2",{id:"cross-namespace-deployments"},"Cross Namespace Deployments"),(0,s.yg)("p",null,"It is possible to create a GitRepo that will deploy across namespaces. The primary purpose of this is so that a\ncentral privileged team can manage common configuration for many clusters that are managed by different teams. The way\nthis is accomplished is by creating a ",(0,s.yg)("inlineCode",{parentName:"p"},"BundleNamespaceMapping")," resource in a cluster."),(0,s.yg)("p",null,"If you are creating a ",(0,s.yg)("inlineCode",{parentName:"p"},"BundleNamespaceMapping")," resource it is best to do it in a namespace that only contains ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepos"),"\nand no ",(0,s.yg)("inlineCode",{parentName:"p"},"Clusters"),".  It seems to get confusing if you have Clusters in the same repo as the cross namespace ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepos")," will still\nalways be evaluated against the current namespace.  So if you have clusters in the same namespace you may wish to make them\ncanary clusters."),(0,s.yg)("p",null,"A ",(0,s.yg)("inlineCode",{parentName:"p"},"BundleNamespaceMapping")," has only two fields.  Which are as below"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"kind: BundleNamespaceMapping\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: not-important\n  namespace: typically-unique\n\n# Bundles to match by label.  The labels are defined in the fleet.yaml\n# labels field or from the GitRepo metadata.labels field\nbundleSelector:\n  matchLabels:\n   foo: bar\n\n# Namespaces to match by label\nnamespaceSelector:\n  matchLabels:\n   foo: bar\n")),(0,s.yg)("p",null,"If the ",(0,s.yg)("inlineCode",{parentName:"p"},"BundleNamespaceMappings")," ",(0,s.yg)("inlineCode",{parentName:"p"},"bundleSelector")," field matches a ",(0,s.yg)("inlineCode",{parentName:"p"},"Bundles")," labels then that ",(0,s.yg)("inlineCode",{parentName:"p"},"Bundle")," target criteria will\nbe evaluated against all clusters in all namespaces that match ",(0,s.yg)("inlineCode",{parentName:"p"},"namespaceSelector"),". One can specify labels for the created\nbundles from git by putting labels in the ",(0,s.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," file or on the ",(0,s.yg)("inlineCode",{parentName:"p"},"metadata.labels")," field on the ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepo"),"."),(0,s.yg)("h2",{id:"restricting-gitrepos"},"Restricting GitRepos"),(0,s.yg)("p",null,"A namespace can contain multiple ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepoRestriction")," resources. All ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepos"),"\ncreated in that namespace will be checked against the list of restrictions.\nIf a ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepo")," violates one of the constraints its ",(0,s.yg)("inlineCode",{parentName:"p"},"BundleDeployment")," will be\nin an error state and won't be deployed."),(0,s.yg)("p",null,"This can also be used to set the defaults for GitRepo's ",(0,s.yg)("inlineCode",{parentName:"p"},"serviceAccount")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"clientSecretName")," fields."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'kind: GitRepoRestriction\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: restriction\n  namespace: typically-unique\nallowedClientSecretNames: []\nallowedRepoPatterns: []\nallowedServiceAccounts: []\nallowedTargetNamespaces: []\ndefaultClientSecretName: ""\ndefaultServiceAccount: ""\n')),(0,s.yg)("h3",{id:"allowed-target-namespaces"},"Allowed Target Namespaces"),(0,s.yg)("p",null,"This can be used to limit a deployment to a set of namespaces on a downstream cluster.\nIf an allowedTargetNamespaces restriction is present, all ",(0,s.yg)("inlineCode",{parentName:"p"},"GitRepos")," must\nspecify a ",(0,s.yg)("inlineCode",{parentName:"p"},"targetNamespace")," and the specified namespace must be in the allow\nlist.\nThis also prevents the creation of cluster wide resources."))}d.isMDXComponent=!0},2128:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/FleetNamespaces-4e461907ba4d5bbf6b309d125383bdb5.svg"}}]);