/*! For license information please see 946458b8.e138680d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[930143],{768728:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=a(474848),t=a(28453);const r={id:"linking-local-packages",title:"Linking in Local Packages",description:"How to link in other local packages into your Backstage monorepo"},s=void 0,c={id:"tooling/local-dev/linking-local-packages",title:"Linking in Local Packages",description:"How to link in other local packages into your Backstage monorepo",source:"@site/../docs/tooling/local-dev/linking-local-packages.md",sourceDirName:"tooling/local-dev",slug:"/tooling/local-dev/linking-local-packages",permalink:"/docs/next/tooling/local-dev/linking-local-packages",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/tooling/local-dev/linking-local-packages.md",tags:[],version:"current",frontMatter:{id:"linking-local-packages",title:"Linking in Local Packages",description:"How to link in other local packages into your Backstage monorepo"},sidebar:"docs",previous:{title:"Commands",permalink:"/docs/next/tooling/cli/commands"},next:{title:"Debugging Backstage",permalink:"/docs/next/tooling/local-dev/debugging"}},i={},l=[{value:"Why?",id:"why",level:2},{value:"External workspace linking",id:"external-workspace-linking",level:2},{value:"Common Problems",id:"common-problems",level:2},{value:"React errors",id:"react-errors",level:3},{value:"Generating temporary patches",id:"generating-temporary-patches",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"why",children:"Why?"}),"\n",(0,o.jsx)(n.p,{children:"If you are looking to make changes within the core Backstage repository and test\nthose changes within your Backstage application, you will need to link the two\ntogether:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"~/backstage                // cloned from Github\n~/my-backstage-application // generated using npx\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For example, you might want to make modifications to ",(0,o.jsx)(n.code,{children:"@backstage/core-plugin-api"})," and try them out in your company's\ninstance of Backstage."]}),"\n",(0,o.jsx)(n.h2,{id:"external-workspace-linking",children:"External workspace linking"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Workspace linking is an experimental feature and may not work in all cases."})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"backstage-cli package start"})," command that is used for local development of all packages supports a ",(0,o.jsx)(n.code,{children:"--link"})," flag that can be used to link a single external workspace to the current workspace. It hooks into the module resolution and will override all imports of packages in the linked workspace to be imported from there instead. The only exception are the ",(0,o.jsx)(n.code,{children:"react"})," and ",(0,o.jsx)(n.code,{children:"react-dom"})," packages, which will always be resolved from the target package."]}),"\n",(0,o.jsxs)(n.p,{children:["When linking an external workspace, make sure that dependencies are installed and up to date in both workspaces, and that the versions of ",(0,o.jsx)(n.code,{children:"react"})," and ",(0,o.jsx)(n.code,{children:"react-dom"})," are the same in both workspaces."]}),"\n",(0,o.jsxs)(n.p,{children:["If you're within the ",(0,o.jsx)(n.code,{children:"packages/app"})," folder inside your ",(0,o.jsx)(n.code,{children:"my-backstage-application"})," workspace in the above example, you can link the ",(0,o.jsx)(n.code,{children:"backstage"})," workspace using the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn start --link ../../../backstage\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The path provided to the ",(0,o.jsx)(n.code,{children:"--link"})," option can be a relative or absolute path, and should point to the root of the external workspace."]}),"\n",(0,o.jsxs)(n.p,{children:["With the ",(0,o.jsx)(n.code,{children:"start"})," command up and running and serving the development version of your frontend app in the browser, you can now make changes to both workspaces and see the changes reflected in the browser."]}),"\n",(0,o.jsxs)(n.p,{children:["You can also link backend packages using the exact same process, simply start your backend package with the same ",(0,o.jsx)(n.code,{children:"--link <workspace-path>"})," option."]}),"\n",(0,o.jsx)(n.h2,{id:"common-problems",children:"Common Problems"}),"\n",(0,o.jsx)(n.h3,{id:"react-errors",children:"React errors"}),"\n",(0,o.jsxs)(n.p,{children:["If you are encountering errors related to React, it is likely that the versions of React in the two workspaces are different. Make sure that the versions of ",(0,o.jsx)(n.code,{children:"react"})," and ",(0,o.jsx)(n.code,{children:"react-dom"})," are the same in both workspaces, or at least that they are in sync between the package that you're serving the app from and the external workspace."]}),"\n",(0,o.jsx)(n.h2,{id:"generating-temporary-patches",children:"Generating temporary patches"}),"\n",(0,o.jsx)(n.p,{children:"!!!info\nThis feature is experimental and currently only supports Yarn workspaces.\n!!!"}),"\n",(0,o.jsxs)(n.p,{children:["After making local changes to a package in an external workspace you might often want to merge and deploy these changes in your own project. You can use Yarn patches for this purpose, but it can be quite cumbersome to create these patches manually. To make this process easier, you can use ",(0,o.jsx)(n.code,{children:"yarn backstage-repo-tools generate-patch"})," command from the ",(0,o.jsx)(n.code,{children:"@backstage/repo-tools"})," package to generate a patch and resolution entries in the external workspace."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if you've made changes to the ",(0,o.jsx)(n.code,{children:"@backstage/backend-app-api"})," package in a local clone of the main ",(0,o.jsx)(n.code,{children:"backstage"})," repository, you can generate a patch for your internal project as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Run in the cloned backstage repository"',children:"yarn backstage-repo-tools generate patch @backstage/backend-app-api --target ../our-developer-portal\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This will generate a patch file in your ",(0,o.jsx)(n.code,{children:"our-developer-portal"})," workspace. The patch will be based on the most recently released version of the source package, with the additional changes on top."]}),"\n",(0,o.jsxs)(n.p,{children:["If you want to base the patch on a different version of the source package, you can specify the version using the ",(0,o.jsx)(n.code,{children:"--base-version <version>"})," option, and if you want to only use the patch for a specific version query, you can specify that using the ",(0,o.jsx)(n.code,{children:"--query <query>"})," option."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},221020:(e,n,a)=>{var o=a(296540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,a){var o,r={},l=null,d=null;for(o in void 0!==a&&(l=""+a),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,o)&&!i.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:t,type:e,key:l,ref:d,props:r,_owner:c.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},474848:(e,n,a)=>{e.exports=a(221020)},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>c});var o=a(296540);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);