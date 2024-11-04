import{d as aa,r as y,w as ea,f as na,o as d,c,a as m,x as i,F as ta,y as ra,B as f}from"./vue.esm-bundler-Dlgilagi.js";import{_ as ia}from"./_plugin-vue_export-helper-DlAUqK2U.js";function sa(){const a=(n,r)=>(n.indexOf(r)===-1&&n.push(r),!0);return{setPaginationItems:(n,r,e,g)=>{n.length=0,n.push("1"),r-g>2&&n.push("...");for(let s=-1*g;s<=g;s++)r+s>1&&r+s<e&&a(n,String(r+s));r+g<e-1&&n.push("..."),a(n,String(e))}}}const oa=["onClick"],ga=["onClick"],W=aa({__name:"PaginationBar",props:{maxPage:{},paddingSize:{}},emits:["change"],setup(a,{emit:b}){const n=a,r=n.paddingSize??1,e=y(1),g=y([]),s=b,{setPaginationItems:h}=sa(),v=t=>{e.value=t,s("change",e.value)},X=()=>{e.value=e.value>1?e.value-1:1,s("change",e.value)},Y=()=>{e.value=e.value<n.maxPage?e.value+1:n.maxPage,s("change",e.value)};return ea(e,()=>h(g.value,e.value,n.maxPage,r)),na(()=>h(g.value,e.value,n.maxPage,r)),(t,Sa)=>(d(),c("div",{class:i(t.$style.pagination_bar_container)},[m("nav",{class:i(t.$style.bar)},[m("ul",{class:i(t.$style.pagination_buttons)},[m("li",{class:i(t.$style.pagination_button)},[m("a",{onClick:X,class:i(t.$style.pagination_button_content)}," < ",2)],2),(d(!0),c(ta,null,ra(g.value,p=>(d(),c("li",{key:p,class:i(t.$style.pagination_button)},[p==="..."?(d(),c("a",{key:0,class:i(t.$style.pagination_button_content)}," ... ",2)):p===String(e.value)?(d(),c("a",{key:1,onClick:Z=>v(Number(p)),class:i(t.$style.selected_page_button)},f(p),11,oa)):(d(),c("a",{key:2,onClick:Z=>v(Number(p)),class:i(t.$style.pagination_button_content)},f(p),11,ga))],2))),128)),m("li",{class:i(t.$style.pagination_button)},[m("a",{onClick:Y,class:i(t.$style.pagination_button_content)}," > ",2)],2)],2)],2)],2))}}),pa="_pagination_bar_container_xlthk_2",da="_bar_xlthk_6",ca="_pagination_buttons_xlthk_12",ma="_pagination_button_xlthk_12",ua="_pagination_button_content_xlthk_27",la="_selected_page_button_xlthk_34",Pa={pagination_bar_container:pa,bar:da,pagination_buttons:ca,pagination_button:ma,pagination_button_content:ua,selected_page_button:la},xa={$style:Pa},o=ia(W,[["__cssModules",xa]]);W.__docgenInfo={exportName:"default",displayName:"PaginationBar",description:"",tags:{},props:[{name:"maxPage",required:!0,type:{name:"number"}},{name:"paddingSize",required:!1,type:{name:"number"}}],events:[{name:"change"}],sourceFiles:["/home/runner/work/vue3-template/vue3-template/app/src/components/organisms/PaginationBar/PaginationBar.vue"]};const Ba={title:"organisms/PaginationBar",component:o},u={args:{maxPage:12,paddingSize:1},render:a=>({components:{PaginationBar:o},setup(){return{...a}},template:'<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'})},l={args:{maxPage:12,paddingSize:2},render:a=>({components:{PaginationBar:o},setup(){return{...a}},template:'<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'})},P={args:{maxPage:1,paddingSize:1},render:a=>({components:{PaginationBar:o},setup(){return{...a}},template:'<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'})},x={args:{maxPage:2,paddingSize:1},render:a=>({components:{PaginationBar:o},setup(){return{...a}},template:'<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'})},S={args:{maxPage:2,paddingSize:2},render:a=>({components:{PaginationBar:o},setup(){return{...a}},template:'<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'})},_={args:{maxPage:3,paddingSize:1},render:a=>({components:{PaginationBar:o},setup(){return{...a}},template:'<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'})},z={args:{maxPage:4,paddingSize:1},render:a=>({components:{PaginationBar:o},setup(){return{...a}},template:'<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'})},B={args:{maxPage:4,paddingSize:2},render:a=>({components:{PaginationBar:o},setup(){return{...a}},template:'<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'})};var k,M,$;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    maxPage: 12,
    paddingSize: 1
  },
  render: args => ({
    components: {
      PaginationBar
    },
    setup() {
      return {
        ...args
      };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'
  })
}`,...($=(M=u.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var C,w,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    maxPage: 12,
    paddingSize: 2
  },
  render: args => ({
    components: {
      PaginationBar
    },
    setup() {
      return {
        ...args
      };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'
  })
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var F,N,q;P.parameters={...P.parameters,docs:{...(F=P.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    maxPage: 1,
    paddingSize: 1
  },
  render: args => ({
    components: {
      PaginationBar
    },
    setup() {
      return {
        ...args
      };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'
  })
}`,...(q=(N=P.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var E,O,L;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    maxPage: 2,
    paddingSize: 1
  },
  render: args => ({
    components: {
      PaginationBar
    },
    setup() {
      return {
        ...args
      };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'
  })
}`,...(L=(O=x.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var V,j,A;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    maxPage: 2,
    paddingSize: 2
  },
  render: args => ({
    components: {
      PaginationBar
    },
    setup() {
      return {
        ...args
      };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'
  })
}`,...(A=(j=S.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var G,H,I;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    maxPage: 3,
    paddingSize: 1
  },
  render: args => ({
    components: {
      PaginationBar
    },
    setup() {
      return {
        ...args
      };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'
  })
}`,...(I=(H=_.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,Q;z.parameters={...z.parameters,docs:{...(J=z.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    maxPage: 4,
    paddingSize: 1
  },
  render: args => ({
    components: {
      PaginationBar
    },
    setup() {
      return {
        ...args
      };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'
  })
}`,...(Q=(K=z.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,T,U;B.parameters={...B.parameters,docs:{...(R=B.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    maxPage: 4,
    paddingSize: 2
  },
  render: args => ({
    components: {
      PaginationBar
    },
    setup() {
      return {
        ...args
      };
    },
    template: '<PaginationBar :maxPage="maxPage" :paddingSize="paddingSize" />'
  })
}`,...(U=(T=B.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};const ba=["Default","PaddingSize2","MaxPage1","MaxPage2","MaxPage2Padding2","MaxPage3","MaxPage4","MaxPage4Padding2"];export{u as Default,P as MaxPage1,x as MaxPage2,S as MaxPage2Padding2,_ as MaxPage3,z as MaxPage4,B as MaxPage4Padding2,l as PaddingSize2,ba as __namedExportsOrder,Ba as default};
