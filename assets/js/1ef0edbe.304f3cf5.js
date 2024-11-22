/*! For license information please see 1ef0edbe.304f3cf5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[921287],{837227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(474848),o=r(28453);const s={id:"http-router",title:"Http Router Service",sidebar_label:"Http Router",description:"Documentation for the Http Router service"},c=void 0,i={id:"backend-system/core-services/http-router",title:"Http Router Service",description:"Documentation for the Http Router service",source:"@site/../docs/backend-system/core-services/http-router.md",sourceDirName:"backend-system/core-services",slug:"/backend-system/core-services/http-router",permalink:"/docs/next/backend-system/core-services/http-router",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/backend-system/core-services/http-router.md",tags:[],version:"current",frontMatter:{id:"http-router",title:"Http Router Service",sidebar_label:"Http Router",description:"Documentation for the Http Router service"},sidebar:"docs",previous:{title:"Http Auth",permalink:"/docs/next/backend-system/core-services/http-auth"},next:{title:"Identity",permalink:"/docs/next/backend-system/core-services/identity"}},a={},l=[{value:"Using the service",id:"using-the-service",level:2},{value:"Configuring the service",id:"configuring-the-service",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"One of the most common services is the HTTP router service which is used to\nexpose HTTP endpoints for other plugins to consume."}),"\n",(0,n.jsx)(t.h2,{id:"using-the-service",children:"Using the service"}),"\n",(0,n.jsxs)(t.p,{children:["The following example shows how to register a HTTP router for the ",(0,n.jsx)(t.code,{children:"example"})," plugin.\nThis single route will be available at the ",(0,n.jsx)(t.code,{children:"/api/example/hello"})," path."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { Router } from 'express';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: { http: coreServices.httpRouter },\n      async init({ http }) {\n        const router = Router();\n        router.get('/hello', (_req, res) => {\n          res.status(200).json({ hello: 'world' });\n        });\n        // Registers the router at the /api/example path\n        http.use(router);\n      },\n    });\n  },\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"This service is also responsible for keeping track of the auth policies that\napply to your routes. The default policy is to require that auth is present with\nevery incoming request, and to accept both service and user credentials\n(excluding limited access tokens). You can override this while registering your\nroutes. This dangerously allows unauthenticated access on a specific route:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"http.addAuthPolicy({\n  path: '/static/:id',\n  allow: 'unauthenticated',\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"Note that the path is exactly the same format as what you used in your routes,\nincluding placeholders."}),"\n",(0,n.jsx)(t.p,{children:"If your plugin uses cookie based access (which is rare), you need to allow that\nas follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"http.addAuthPolicy({\n  path: '/static/:id',\n  allow: 'user-cookie',\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For those routes you will also have to specify ",(0,n.jsx)(t.code,{children:"allowLimitedAccess: true"})," when\nusing the ",(0,n.jsx)(t.a,{href:"/docs/next/backend-system/core-services/auth",children:(0,n.jsx)(t.code,{children:"auth"})})," and ",(0,n.jsx)(t.a,{href:"/docs/next/backend-system/core-services/http-auth",children:(0,n.jsx)(t.code,{children:"httpAuth"})})," services to\naccess the incoming credentials."]}),"\n",(0,n.jsx)(t.h2,{id:"configuring-the-service",children:"Configuring the service"}),"\n",(0,n.jsxs)(t.p,{children:["For more advanced customization, there are several APIs from the ",(0,n.jsx)(t.code,{children:"@backstage/backend-defaults/httpRouter"})," package that allow you to customize the implementation of the config service. The default implementation uses all of the middleware exported from ",(0,n.jsx)(t.code,{children:"@backstage/backend-defaults/httpRouter"}),", including ",(0,n.jsx)(t.code,{children:"createLifecycleMiddleware"}),", ",(0,n.jsx)(t.code,{children:"createAuthIntegrationRouter"}),", ",(0,n.jsx)(t.code,{children:"createCredentialsBarrier"})," and ",(0,n.jsx)(t.code,{children:"createCookieAuthRefreshMiddleware"}),". You can use these to create your own ",(0,n.jsx)(t.code,{children:"httpRouter"})," service implementation, for example - here's how you would add a custom health check route to all plugins:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import {\n  createLifecycleMiddleware,\n  createCookieAuthRefreshMiddleware,\n  createCredentialsBarrier,\n  createAuthIntegrationRouter,\n} from '@backstage/backend-defaults/httpRouter';\nimport { createServiceFactory } from '@backstage/backend-plugin-api';\n\nconst backend = createBackend();\n\nbackend.add(\n  createServiceFactory({\n    service: coreServices.httpRouter,\n    initialization: 'always',\n    deps: {\n      plugin: coreServices.pluginMetadata,\n      config: coreServices.rootConfig,\n      lifecycle: coreServices.lifecycle,\n      rootHttpRouter: coreServices.rootHttpRouter,\n      auth: coreServices.auth,\n      httpAuth: coreServices.httpAuth,\n    },\n    async factory({\n      auth,\n      httpAuth,\n      config,\n      plugin,\n      rootHttpRouter,\n      lifecycle,\n    }) {\n      const router = PromiseRouter();\n\n      rootHttpRouter.use(`/api/${plugin.getId()}`, router);\n\n      const credentialsBarrier = createCredentialsBarrier({\n        httpAuth,\n        config,\n      });\n\n      router.use(createAuthIntegrationRouter({ auth }));\n      router.use(createLifecycleMiddleware({ lifecycle }));\n      router.use(credentialsBarrier.middleware);\n      router.use(createCookieAuthRefreshMiddleware({ auth, httpAuth }));\n\n      // Add a custom healthcheck endpoint for all plugins.\n      router.use('/health', (_, res) => {\n        res.status(200);\n      });\n\n      return {\n        use(handler: Handler): void {\n          router.use(handler);\n        },\n        addAuthPolicy(policy: HttpRouterServiceAuthPolicy): void {\n          credentialsBarrier.addAuthPolicy(policy);\n        },\n      };\n    },\n  }),\n);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},221020:(e,t,r)=>{var n=r(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(296540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);