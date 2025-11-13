import{d as _,c as r,F as N,D as S,n as c,o as t,G as o}from"./vue.esm-bundler-DdhsCzB8.js";import{N as g}from"./NotCheckedStamp-v_7vtE9c.js";import{C as f}from"./CheckedStamp-CMdTEa6W.js";import{E as y}from"./ErrorStamp-BDTmgyaF.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-D3Ycb30t.js";const h=_({__name:"StampCard",props:{stampContents:Array},setup(e){return(p,B)=>(t(),r("div",{class:c(p.$style.stamp_card)},[(t(!0),r(N,null,S(e.stampContents,(a,i)=>(t(),r("div",{key:i,class:c(p.$style.stamp)},[a.status=="NotChecked"?(t(),o(g,{key:0,text:a.text},null,8,["text"])):a.status=="Checked"?(t(),o(f,{key:1})):(t(),o(y,{key:2}))],2))),128))],2))}}),v="_stamp_card_cq7lz_2",D="_stamp_cq7lz_2",w={stamp_card:v,stamp:D},z={$style:w},m=E(h,[["__cssModules",z]]);h.__docgenInfo={exportName:"default",displayName:"StampCard",description:"",tags:{},props:[{name:"stampContents",type:{name:"Array<StampData>",func:!0}}],sourceFiles:["/home/runner/work/vue3-template/vue3-template/app/src/components/organisms/StampCard/StampCard.vue"]};const G={title:"organisms/StampCard",component:m},s={args:{stampContents:[{text:"1",status:"Checked"},{text:"2",status:"Checked"},{text:"3",status:"Checked"},{text:"4",status:"Error"},{text:"5",status:"NotChecked"},{text:"6",status:"NotChecked"},{text:"7",status:"NotChecked"},{text:"8",status:"NotChecked"},{text:"9",status:"NotChecked"},{text:"10",status:"NotChecked"}]},render:e=>({components:{StampCard:m},setup(){return{...e}},template:'<StampCard :stampContents="stampContents" />'})},n={args:{stampContents:[{text:"1",status:"Checked"},{text:"2",status:"NotChecked"}]},render:e=>({components:{StampCard:m},setup(){return{...e}},template:'<StampCard :stampContents="stampContents" />'})};var d,u,C;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    stampContents: [{
      text: "1",
      status: "Checked"
    }, {
      text: "2",
      status: "Checked"
    }, {
      text: "3",
      status: "Checked"
    }, {
      text: "4",
      status: "Error"
    }, {
      text: "5",
      status: "NotChecked"
    }, {
      text: "6",
      status: "NotChecked"
    }, {
      text: "7",
      status: "NotChecked"
    }, {
      text: "8",
      status: "NotChecked"
    }, {
      text: "9",
      status: "NotChecked"
    }, {
      text: "10",
      status: "NotChecked"
    }]
  },
  render: args => ({
    components: {
      StampCard
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`<StampCard :stampContents="stampContents" />\`
  })
}`,...(C=(u=s.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var l,k,x;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    stampContents: [{
      text: "1",
      status: "Checked"
    }, {
      text: "2",
      status: "NotChecked"
    }]
  },
  render: args => ({
    components: {
      StampCard
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`<StampCard :stampContents="stampContents" />\`
  })
}`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const I=["Default","TwoContents"];export{s as Default,n as TwoContents,I as __namedExportsOrder,G as default};
