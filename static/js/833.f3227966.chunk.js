"use strict";(self.webpackChunkportfolio_chirag=self.webpackChunkportfolio_chirag||[]).push([[833],{5833:(e,i,t)=>{t.r(i),t.d(i,{default:()=>y});var n=t(7766),r=t(6950),o=(t(9950),t(4937)),a=t(4414);const x=o.Ay.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`,d=o.Ay.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${e=>{let{theme:i}=e;return i.text_primary}};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${e=>{let{theme:i}=e;return i.primary}};
  ${e=>{let{dull:i,theme:t}=e;return i&&`\n        background-color: ${t.bgLight};\n        color: ${t.text_secondary};\n        &:hover {\n            background-color: ${t.bg+99};\n        }\n    `}}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${e=>{let{theme:i}=e;return i.primary+99}};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,p=o.Ay.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`,l=o.Ay.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${e=>{let{theme:i}=e;return i.card}};
  color: ${e=>{let{theme:i}=e;return i.text_primary}};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`,s=o.Ay.div`
  font-size: 28px;
  font-weight: 600;
  color: ${e=>{let{theme:i}=e;return i.text_primary}};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`,c=o.Ay.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${e=>{let{theme:i}=e;return i.text_secondary}};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,h=o.Ay.div`
  font-size: 16px;
  font-weight: 400;
  color: ${e=>{let{theme:i}=e;return i.text_primary}};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`,m=o.Ay.img.attrs({loading:"lazy",decoding:"async"})`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`,g=(o.Ay.div`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>{let{theme:i}=e;return i.text_primary}};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`,o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`),f=o.Ay.div`
  font-size: 14px;
  font-weight: 400;
  color: ${e=>{let{theme:i}=e;return i.primary}};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${e=>{let{theme:i}=e;return i.primary+20}};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,y=(o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`,o.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,o.Ay.img.attrs({loading:"lazy",decoding:"async"})`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`,o.Ay.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${e=>{let{theme:i}=e;return i.text_primary}};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`,e=>{let{openModal:i,setOpenModal:t}=e;const o=null===i||void 0===i?void 0:i.certification;return(0,a.jsx)(r.A,{open:!0,onClose:()=>t({state:!1,certification:null}),children:(0,a.jsx)(p,{children:(0,a.jsxs)(l,{children:[(0,a.jsx)(n.A,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer"},onClick:()=>t({state:!1,certification:null})}),(0,a.jsx)(m,{src:null===o||void 0===o?void 0:o.image}),(0,a.jsx)(s,{children:null===o||void 0===o?void 0:o.title}),(0,a.jsx)(c,{children:null===o||void 0===o?void 0:o.date}),(0,a.jsx)(g,{children:null===o||void 0===o?void 0:o.tags.map((e=>(0,a.jsx)(f,{children:e},e)))}),(0,a.jsx)(h,{children:null===o||void 0===o?void 0:o.description}),(0,a.jsxs)(x,{children:[(0,a.jsx)(d,{href:null===o||void 0===o?void 0:o.certificateLink,target:"new",children:"View Certificate"}),(null===o||void 0===o?void 0:o.verificationLink)&&(0,a.jsx)(d,{href:null===o||void 0===o?void 0:o.verificationLink,target:"new",children:"Verify"})]})]})})})})}}]);