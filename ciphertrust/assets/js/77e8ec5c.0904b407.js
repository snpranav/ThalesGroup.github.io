"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[437],{7200:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7294),a=r(5697),s=r.n(a),o=r(7373),i=r(9960);const c=e=>{let{href:t}=e;return n.createElement("div",null,n.createElement(i.Z,{href:t},n.createElement("button",{style:{backgroundColor:"#171515"},className:"p-2 my-4 rounded-md border-none cursor-pointer text-white"},"GitHub ",n.createElement(o.RrF,{className:"text-white"}))))},p=e=>{let{href:t}=e;return n.createElement("div",null,n.createElement(i.Z,{href:t},n.createElement("button",{className:"p-2 my-4 rounded-md border-none cursor-pointer"},"View Demo ",n.createElement(o.mGl,null))))},l=e=>{let{href:t,demourl:r}=e;return n.createElement("div",{className:"flex flex-row justify-between"},n.createElement(c,{href:t}),r?n.createElement(p,{href:r}):n.createElement(n.Fragment,null))};l.propTypes={href:s().string.isRequired,demourl:s().string};const d=l},7148:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7294),a=r(5697),s=r.n(a),o=r(7200);const i=e=>{let{embedId:t,github:r,demourl:a}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:"video-responsive"},n.createElement("iframe",{width:"853",height:"480",src:`https://www.youtube.com/embed/${t}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})),n.createElement(o.Z,{href:r,demourl:a}))};i.propTypes={embedId:s().string.isRequired};const c=i},3267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905)),s=r(7148);r(7200);const o={sidebar_position:1},i="Client Side Object Storage Encryption for S3",c={unversionedId:"key-manager/demos/cs-object-storage",id:"key-manager/demos/cs-object-storage",title:"Client Side Object Storage Encryption for S3",description:"Encrypt your files on the client side before sending them to your S3 buckets with just 3 blocks of code.",source:"@site/docs/key-manager/demos/cs-object-storage.mdx",sourceDirName:"key-manager/demos",slug:"/key-manager/demos/cs-object-storage",permalink:"/docs/key-manager/demos/cs-object-storage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/key-manager/demos/cs-object-storage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Demos",permalink:"/docs/category/demos"},next:{title:"Encrypt RDS with AWS KMS",permalink:"/docs/key-manager/demos/aws-kms"}},p={},l=[{value:"Step 1: Authenticate with CipherTrust Manager",id:"step-1-authenticate-with-ciphertrust-manager",level:2},{value:"Step 2: Encrypt Data using CipherTrust Manager API",id:"step-2-encrypt-data-using-ciphertrust-manager-api",level:2},{value:"Step 3: Decrypt Data",id:"step-3-decrypt-data",level:2},{value:"Under Construction \ud83d\udc77\ud83d\udea7",id:"under-construction-",level:2}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client-side-object-storage-encryption-for-s3"},"Client Side Object Storage Encryption for S3"),(0,a.kt)("p",null,"Encrypt your files on the client side before sending them to your S3 buckets with just 3 blocks of code."),(0,a.kt)(s.Z,{embedId:"fI0qZB5YB5g",github:"https://github.com/snpranav/object-storage-encryption-demo",demourl:"https://moral-fox.sneakpeak.dev",mdxType:"YoutubeEmbed"}),(0,a.kt)("h2",{id:"step-1-authenticate-with-ciphertrust-manager"},"Step 1: Authenticate with CipherTrust Manager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/api/get-jwt.js"',title:'"/api/get-jwt.js"'},"// `createJWT` is a helper function that creates a JWT.\n// This function must only called on the server. \n// If you call it on the client-side you will expose your username and password in every request. DO NOT DO THIS. Just use it in a server-side API call.\nasync function createJWT() {\n    const response = await axios.post(\n        `${process.env.CTM_URL}/api/v1/auth/tokens`,\n        {\n            username: process.env.CTM_USERNAME,        // Add CipherTrust manager username to environment\n            password: process.env.CTM_PASSWORD,        // Add CipherTrust manager password to environment\n        }\n    ).catch(err => {\n        console.error(err);\n        // res.status(502).send(err.toString());\n    });\n\n    const token = response.data.jwt;\n\n    return token\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Remember to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.CTM_USERNAME")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.CTM_PASSWORD")," with your CipherTrust Manager username and password.")),(0,a.kt)("h2",{id:"step-2-encrypt-data-using-ciphertrust-manager-api"},"Step 2: Encrypt Data using CipherTrust Manager API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/api/encrypt.js"',title:'"/api/encrypt.js"'},'async function encryptData(file, jwt) {\n    const fileBase64 = (await getBase64(file)).split(",")[1];\n    const cipherText = await axios.post(\n        // We are using an encrypt proxy because calling the API from the browser will cause a CORS error. The encrypt proxy will point your API request to the Ciphertrust manager Crypto API.\n        `/api/encrypt-proxy`, {\n            id: "s3-encrypt-symmetric-key",\n            plaintext: fileBase64,\n            add: "YXV0aGVudGljYXRl"\n        }, {\n            // Pass the JWT as a Bearer token.\n            headers: {\n                Authorization: `Bearer ${jwt}`\n            }\n        }).catch(err => {\n            console.error(err);\n            res.status(502).send(err.toString());\n        });\n\n    return cipherText.data;\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Now you can upload this cipher text to AWS S3, Azure Blob Storage or any other object storage.")),(0,a.kt)("h2",{id:"step-3-decrypt-data"},"Step 3: Decrypt Data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/api/decrypt.js"',title:'"/api/decrypt.js"'},'async function decryptData(encryptedData, jwt) {\n    const plainText = await axios.post(\n        `/api/decrypt-proxy`, {\n            ...encryptedData,\n            add: "YXV0aGVudGljYXRl"\n        }, {\n            // Pass the JWT as a Bearer token.\n            headers: {\n                Authorization: `Bearer ${jwt}`\n            }\n        }).catch(err => {\n            console.error(err);\n        });\n\n\n    return plainText.data;\n}\n')),(0,a.kt)("h2",{id:"under-construction-"},"Under Construction \ud83d\udc77\ud83d\udea7"))}u.isMDXComponent=!0}}]);