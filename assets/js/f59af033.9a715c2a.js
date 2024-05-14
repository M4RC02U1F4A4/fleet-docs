"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[5305],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),h=r,b=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return o?n.createElement(b,i(i({ref:t},u),{},{components:o})):n.createElement(b,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5947:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={},i="Using Webhooks Instead of Polling",l={unversionedId:"webhook",id:"version-0.9/webhook",title:"Using Webhooks Instead of Polling",description:"By default, Fleet utilizes polling (default: every 15 seconds) to pull from a Git repo. This is a convenient default that works reasonably well for a small number of repos (up to a few tens).",source:"@site/versioned_docs/version-0.9/webhook.md",sourceDirName:".",slug:"/webhook",permalink:"/0.9/webhook",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.9/webhook.md",tags:[],version:"0.9",lastUpdatedAt:1715677789,formattedLastUpdatedAt:"May 14, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Generating Diffs to Ignore Modified GitRepos",permalink:"/0.9/bundle-diffs"},next:{title:"Using Image Scan to Update Container Image References",permalink:"/0.9/imagescan"}},s={},c=[{value:"1. Configure the webhook service. Fleet uses a gitjob service to handle webhook requests. Create an ingress that points to the gitjob service.",id:"1-configure-the-webhook-service-fleet-uses-a-gitjob-service-to-handle-webhook-requests-create-an-ingress-that-points-to-the-gitjob-service",level:3},{value:"2. Go to your webhook provider and configure the webhook callback url. Here is a Github example.",id:"2-go-to-your-webhook-provider-and-configure-the-webhook-callback-url-here-is-a-github-example",level:3},{value:"3. (Optional) Configure webhook secret. The secret is for validating webhook payload. Make sure to put it in a k8s secret called <code>gitjob-webhook</code> in <code>cattle-fleet-system</code>.",id:"3-optional-configure-webhook-secret-the-secret-is-for-validating-webhook-payload-make-sure-to-put-it-in-a-k8s-secret-called-gitjob-webhook-in-cattle-fleet-system",level:3},{value:"4. Go to your git provider and test the connection. You should get a HTTP response code.",id:"4-go-to-your-git-provider-and-test-the-connection-you-should-get-a-http-response-code",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-webhooks-instead-of-polling"},"Using Webhooks Instead of Polling"),(0,r.kt)("p",null,"By default, Fleet utilizes polling (default: every 15 seconds) to pull from a Git repo. This is a convenient default that works reasonably well for a small number of repos (up to a few tens)."),(0,r.kt)("p",null,"For installations with multiple tens up to hundreds of Git repos, and in general to reduce latency (the time between a push to Git and fleet reacting to it), configuring webhooks is recommended instead of polling."),(0,r.kt)("p",null,"Fleet currently supports Github, GitLab, Bitbucket, Bitbucket Server and Gogs."),(0,r.kt)("h3",{id:"1-configure-the-webhook-service-fleet-uses-a-gitjob-service-to-handle-webhook-requests-create-an-ingress-that-points-to-the-gitjob-service"},"1. Configure the webhook service. Fleet uses a gitjob service to handle webhook requests. Create an ingress that points to the gitjob service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: webhook-ingress\n  namespace: cattle-fleet-system\nspec:\n  rules:\n  - host: your.domain.com\n    http:\n      paths:\n        - path: /\n          pathType: Prefix\n          backend:\n            service:\n              name: gitjob\n              port:\n                number: 80\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can configure ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/#tls"},"TLS")," on ingress.")),(0,r.kt)("h3",{id:"2-go-to-your-webhook-provider-and-configure-the-webhook-callback-url-here-is-a-github-example"},"2. Go to your webhook provider and configure the webhook callback url. Here is a Github example."),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(696).Z,width:"1830",height:"1563"})),(0,r.kt)("p",null,"Configuring a secret is optional. This is used to validate the webhook payload as the payload should not be trusted by default.\nIf your webhook server is publicly accessible to the Internet, then it is recommended to configure the secret. If you do configure the\nsecret, follow step 3."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"only application/json is supported due to the limitation of webhook library.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you configured the webhook the polling interval will be automatically adjusted to 1 hour.")),(0,r.kt)("h3",{id:"3-optional-configure-webhook-secret-the-secret-is-for-validating-webhook-payload-make-sure-to-put-it-in-a-k8s-secret-called-gitjob-webhook-in-cattle-fleet-system"},"3. (Optional) Configure webhook secret. The secret is for validating webhook payload. Make sure to put it in a k8s secret called ",(0,r.kt)("inlineCode",{parentName:"h3"},"gitjob-webhook")," in ",(0,r.kt)("inlineCode",{parentName:"h3"},"cattle-fleet-system"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Provider"),(0,r.kt)("th",{parentName:"tr",align:null},"K8s Secret Key"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"github"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GitLab"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gitlab"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BitBucket"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bitbucket"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BitBucketServer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bitbucket-server"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gogs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gogs"))))),(0,r.kt)("p",null,"For example, to create a secret containing a GitHub secret to validate the webhook payload, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic gitjob-webhook -n cattle-fleet-system --from-literal=github=webhooksecretvalue\n")),(0,r.kt)("h3",{id:"4-go-to-your-git-provider-and-test-the-connection-you-should-get-a-http-response-code"},"4. Go to your git provider and test the connection. You should get a HTTP response code."))}p.isMDXComponent=!0},696:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/webhook-9c042ab211f1b5438bf70372e92ecdf7.png"}}]);