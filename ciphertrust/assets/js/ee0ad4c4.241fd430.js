"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9024],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=l(a),m=o,y=h["".concat(u,".").concat(m)]||h[m]||p[m]||n;return a?r.createElement(y,s(s({ref:t},c),{},{components:a})):r.createElement(y,s({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const n={slug:"choosing-a-key-manager",title:"A Guide to Picking the Right Key Manager for Your Org",authors:"pranav",tags:["data-encryption","key-management"]},s="Key Managers \ud83d\udd10 \u2014 How Do I Pick the Right One for My Org?!",i={permalink:"/ThalesGroup.github.io/ciphertrust/blog/choosing-a-key-manager",editUrl:"https://github.com/snpranav/ThalesGroup.github.io/tree/main/ciphertrust/blog/2022-11-17-how-to-choose-a-key-manager-for-orgs.md",source:"@site/blog/2022-11-17-how-to-choose-a-key-manager-for-orgs.md",title:"A Guide to Picking the Right Key Manager for Your Org",description:"Your company has a ton of daily active users and you have this amazingly efficient architecture to process requests at scale, but your InfoSec team asks you to use a key manager \u2014 there are so many out there, which one do you choose?",date:"2022-11-17T00:00:00.000Z",formattedDate:"November 17, 2022",tags:[{label:"data-encryption",permalink:"/ThalesGroup.github.io/ciphertrust/blog/tags/data-encryption"},{label:"key-management",permalink:"/ThalesGroup.github.io/ciphertrust/blog/tags/key-management"}],readingTime:3.565,hasTruncateMarker:!1,authors:[{name:"Pranav Shikarpur",title:"Developer Advocate @ Thales",url:"https://twitter.com/snpranav",imageURL:"https://pbs.twimg.com/profile_images/1587889480266047489/gAH1oUXT_400x400.jpg",key:"pranav"}],frontMatter:{slug:"choosing-a-key-manager",title:"A Guide to Picking the Right Key Manager for Your Org",authors:"pranav",tags:["data-encryption","key-management"]},nextItem:{title:"A Guide to Data Security Architectures",permalink:"/ThalesGroup.github.io/ciphertrust/blog/a-guide-to-encryption-architectures"}},u={authorsImageUrls:[void 0]},l=[{value:"First, the literal  key to security \u2014 HSMs",id:"first-the-literal--key-to-security--hsms",level:2},{value:"Now Let\u2019s Compare",id:"now-lets-compare",level:2},{value:"Cloud Key Managers",id:"cloud-key-managers",level:3},{value:"External Key Managers",id:"external-key-managers",level:3},{value:"<strong>Best of Both Worlds \ud83e\udd14</strong>",id:"best-of-both-worlds-",level:2},{value:"How do I implement this?",id:"how-do-i-implement-this",level:3}],c={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Your company has a ton of daily active users and you have this amazingly efficient architecture to process requests at scale, but your InfoSec team asks you to use a key manager \u2014 there are so many out there, which one do you choose?"),(0,o.kt)("p",null,"There are various different types of key managers, but in this post we\u2019ll cover three most common key managers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cloud Key Managers (Ex \u2014 AWS KMS, GCP KMS, Azure Key Vault, etc.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"External Key Managers (Ex \u2014 Thales CipherTrust Manager, Hashicorp Vault)"))),(0,o.kt)("h2",{id:"first-the-literal--key-to-security--hsms"},"First, the literal  key to security \u2014 HSMs"),(0,o.kt)("p",null,"HSM stands for \u201c",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hardware_security_module"},"Hardware Security Module"),"\u201d. These are physical devices that are usually tamper resistant which store keys and perform encrypt, decrypt and other cryptographic operations."),(0,o.kt)("p",null,"HSMs are needed in secure environments such as healthcare or financial institutions where you need to pass compliances such as PCI DSS."),(0,o.kt)("h2",{id:"now-lets-compare"},"Now Let\u2019s Compare"),(0,o.kt)("p",null,"Let\u2019s look at the pros and cons of each to help you decide what would work best for your organization."),(0,o.kt)("h3",{id:"cloud-key-managers"},"Cloud Key Managers"),(0,o.kt)("p",null,"\u2705 ",(0,o.kt)("strong",{parentName:"p"},"Easy Integration with Cloud Managed Services")),(0,o.kt)("p",null,"When using cloud key managers like ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/kms/"},"AWS KMS (Key Management Service)")," it can be advantageous as you get the flexibility of AWS managing your keys as well as direct integration into your existing AWS managed services such as ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"AWS S3"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/rods/"},"AWS RDS (Relational Database Service)"),", etc."),(0,o.kt)("p",null,"\u2705 ",(0,o.kt)("strong",{parentName:"p"},"HSMs provisioned and managed by a cloud provider (most of the time \ud83e\udd1e)")),(0,o.kt)("p",null,"Most famous cloud providers have HSMs that they use in their data centers which store your keys, so you don\u2019t have to worry about renting an HSM."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u274c No Separation of Trust \ud83d\udd75\ufe0f\u200d\u2640\ufe0f")),(0,o.kt)("p",null,"Since your cloud provider now hosts and controls your data and encryption keys. Your user data might not be as safe anymore as the cloud provider with malicious intent could easily decrypt your user data. This does not help in creating a ",(0,o.kt)("strong",{parentName:"p"},"zero-trust architecture"),". While it\u2019s true that your cloud provider has your best interest; there are always hackers lurking around the internet trying to get malicious access to your data, so it\u2019s best to store data in an isolated environment."),(0,o.kt)("h3",{id:"external-key-managers"},"External Key Managers"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u2705 Complete Separation of Trust")),(0,o.kt)("p",null,"When running a product such as CipherTrust Manager or Hashicorp Vault, your architectures are zero-trust by default as 2 different entities have access to either your data or your keys and ",(0,o.kt)("strong",{parentName:"p"},"NOT both"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u274c Build your own custom integrations")),(0,o.kt)("p",null,"Unless the key manager service has connectors, many-a-times, you would need to build your own connectors which could put a lot of engineering debt on your teams."),(0,o.kt)("p",null,"\u26a0\ufe0f",(0,o.kt)("strong",{parentName:"p"}," Need to rent out your own HSM")),(0,o.kt)("p",null,"You\u2019d need to manage your own HSM, but fortunately, there are service providers that will rent out and manage the HSMs (just like a cloud provider) \u2014 so this is neither a pro nor a con. A great example of a hosted HSM is the ",(0,o.kt)("a",{parentName:"p",href:"https://cpl.thalesgroup.com/encryption/data-protection-on-demand/services/luna-cloud-hsm"},"Luna HSM"),"."),(0,o.kt)("h2",{id:"best-of-both-worlds-"},(0,o.kt)("strong",{parentName:"h2"},"Best of Both Worlds \ud83e\udd14")),(0,o.kt)("p",null,"Yes, it\u2019s possible! To implement the best data security practices, you would want the ease of integration with cloud-managed services as well as complete separation of trust to isolate encryption keys from data. This method is also called ",(0,o.kt)("strong",{parentName:"p"},"BYOK "),"(bring your own key)."),(0,o.kt)("p",null,"You can do this with products such as CipherTrust Manager ",(0,o.kt)("a",{parentName:"p",href:"https://cpl.thalesgroup.com/encryption/key-management/ciphertrust-cloud-key-manager"},"Cloud Key Manager"),". This offers:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u2705 Direct connection with cloud-managed KMS account")),(0,o.kt)("p",null,"Once you connect your AWS or GCP or Azure account to CipherTrust Manager as shown in the tutorial linked below, you will be able to manage keys directly from CipherTrust Manager and encrypt data on cloud-managed services."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u2705 Key Lifecycle Management in a few clicks")),(0,o.kt)("p",null,"In just a few clicks you can setup key rotation which will rotate your keys every few months and provide the best data security standards for your organization."),(0,o.kt)("h3",{id:"how-do-i-implement-this"},"How do I implement this?"),(0,o.kt)("p",null,"Luckily, it\u2019s easy to implement in 3 simple steps. Here\u2019s a tutorial I made that demos connecting CipherTrust Manager to my AWS KMS (Key Management Service) account and encrypt my AWS managed services such as S3 and RDS."),(0,o.kt)("p",null,"Now go ahead and encrypt all your cloud-managed services using this hybrid BYOK approach!"),(0,o.kt)("p",null,"If you have any issues with implementation or questions about data encryption, feel free to leave a comment, tweet ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/snpranav"},"@snpranav"),", or raise a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snpranav/data-encryption-in-transit-demo/issues/new"},"GitHub issue")," :)"))}p.isMDXComponent=!0}}]);