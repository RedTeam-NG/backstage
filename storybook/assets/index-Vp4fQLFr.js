import{C as Zt}from"./ComponentAccordion-Df_03Cle.js";import{R as t}from"./index-CTjT7uj6.js";import{T as s,a as l}from"./Tabs-BblL2yA-.js";import{I as u}from"./InfoCard-D1H0I2UO.js";import"./ExpandMore-CHMDyj05.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-hW_4NFvU.js";import"./capitalize-CEQeKh-K.js";import"./defaultTheme-DezMpTIo.js";import"./withStyles-BgNv_OyU.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./useControlled-CogIeAPD.js";import"./index-QA7F3UF1.js";import"./createSvgIcon-CEu-9q0m.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./plugin-BqArabEn.js";import"./iframe-C6Oxbsjm.js";import"../sb-preview/runtime.js";import"./appWrappers-CO3fPsA9.js";import"./MockTranslationApi-Bqd-OB5I.js";import"./ApiRef-BSBwTmJJ.js";import"./index-CFaqwFgm.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-DGC6g2nO.js";import"./toArray-CwyM_zEO.js";import"./TranslationApi-eOxINumg.js";import"./ConfigApi-DBUUc3nU.js";import"./useAnalytics-DTrkS1Gy.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./mapValues-uGpuQnk_.js";import"./toString-bNjqhuyi.js";import"./index-DXJrW9ju.js";import"./ApiProvider-CuNQiN7Z.js";import"./index-BRV0Se7Z.js";import"./CssBaseline-BycpB-r2.js";import"./ThemeProvider-BPNZSjw5.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";import"./Plugin-BUQb664E.js";import"./useRouteRef-G389X3lg.js";import"./IconButton-DMfZr1mO.js";import"./ButtonBase-yy6Og9D-.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./DialogTitle-DS6ziF7M.js";import"./Modal-6sUM5zfZ.js";import"./Portal-DHXjgkAG.js";import"./Backdrop-Cn6Dv20f.js";import"./useTheme-NGQJGM2h.js";import"./utils-jlWbup7k.js";import"./Paper-Ke9XSqW5.js";import"./Typography-9Z2Fqq1t.js";import"./Button-pj3OYYJt.js";import"./makeStyles-BZw-HJLd.js";import"./AccordionDetails-DvJ7tK3R.js";import"./react-is.production.min-D0tnNtx9.js";import"./Collapse-C4amah7z.js";import"./KeyboardArrowRight-BpGxn4vq.js";import"./index-Cqve-NHl.js";import"./CardActions-C46o4F5e.js";import"./CardContent--Ku_kWID.js";import"./ErrorBoundary-DVYDZGii.js";import"./translation-67MxozS3.js";import"./ErrorPanel-WPLf3W4L.js";import"./WarningPanel-BkDAZCQe.js";import"./MarkdownContent-C-qjAR92.js";import"./CodeSnippet-BW9cvXeq.js";import"./objectWithoutProperties-C_MEUZXD.js";import"./toConsumableArray-BEwiObev.js";import"./Box-Bp1TnhXQ.js";import"./typography-DyYqqlXd.js";import"./CopyTextButton-BgQRecf3.js";import"./useCopyToClipboard-CAnobEfl.js";import"./Tooltip-C9cCQzQU.js";import"./Popper-CXFT7TxZ.js";import"./Grow-jBfYqf2m.js";import"./Grid--ddFL0KQ.js";import"./List-Bh5ydWqT.js";import"./ListContext-DydK1sOh.js";import"./ListItem-Bxb0CNHD.js";import"./ListItemText-DydOiixD.js";import"./LinkButton-C4HbN532.js";import"./Link-DKaJAFs0.js";import"./lodash-CoGan1YB.js";import"./CardHeader-3z2aBkEm.js";import"./Divider-DWEczUXl.js";import"./BottomLink-BqGfsMc0.js";import"./ArrowForward-hZGFZ6QH.js";const c=i=>{const{title:n,tabs:r}=i,[e,p]=t.useState(0),a=(o,m)=>{p(m)};return t.createElement(u,{title:n},t.createElement(s,{value:e,onChange:a},r.map(o=>t.createElement(l,{key:o.label,label:o.label}))),r.map(({Component:o},m)=>t.createElement("div",{key:m,...m!==e?{style:{display:"none"}}:{}},t.createElement(o,null))))};c.__docgenInfo={description:"",methods:[],displayName:"ComponentTabs",props:{title:{required:!0,tsType:{name:"string"},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  Component: () => JSX.Element;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"Component",value:{name:"signature",type:"function",raw:"() => JSX.Element",signature:{arguments:[],return:{name:"JSX.Element"}},required:!0}}]}}],raw:"TabType[]"},description:""}}};const d=i=>{const{title:n,Content:r,ContextProvider:e,...p}=i;return e?t.createElement(e,{...p},t.createElement(r,null)):t.createElement(r,null)};d.__docgenInfo={description:"",methods:[],displayName:"ComponentTab",props:{title:{required:!0,tsType:{name:"string"},description:""},Content:{required:!0,tsType:{name:"signature",type:"function",raw:"() => JSX.Element",signature:{arguments:[],return:{name:"JSX.Element"}}},description:""},ContextProvider:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: any) => JSX.Element",signature:{arguments:[{type:{name:"any"},name:"props"}],return:{name:"JSX.Element"}}},description:""}}};export{Zt as ComponentAccordion,d as ComponentTab,c as ComponentTabs};
