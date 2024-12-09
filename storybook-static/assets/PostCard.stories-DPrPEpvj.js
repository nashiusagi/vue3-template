import{d as _,r as y,w as k,o as f,c as C,a as p,x as n,n as a}from"./vue.esm-bundler-CsaSr501.js";import{u as r}from"./index-35Lc2Ijb.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const m=_({__name:"PostCard",props:{post:{}},setup(o){const u=`/post/${o.post.id}`,e=y(r().value);return k(r(),()=>{e.value=r().value}),(s,w)=>(f(),C("div",{class:a(s.$style.card)},[p("a",{class:a([[s.$style.post_link,{[s.$style.dark]:e.value}],"post_link"]),href:u},n(s.post.title),3),p("p",{class:a([s.$style.post_body,{[s.$style.dark]:e.value}])},n(s.post.body),3)],2))}}),P="_card_m3yzp_2",b="_dark_m3yzp_10",v="_post_link_m3yzp_15",$="_post_body_m3yzp_24",z={card:P,dark:b,post_link:v,post_body:$},D={$style:z},i=g(m,[["__cssModules",D]]);m.__docgenInfo={exportName:"default",displayName:"PostCard",description:"",tags:{},props:[{name:"post",required:!0,type:{name:"Post"}}],sourceFiles:["/home/runner/work/vue3-template/vue3-template/app/src/components/organisms/PostCard/PostCard.vue"]};const M={title:"organisms/PostCard",component:i},t={args:{post:{id:1,title:"title",body:"body"}},render:o=>({components:{PostCard:i},setup(){return{...o}},template:'<PostCard :post="post" />'})};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    post: {
      id: 1,
      title: "title",
      body: "body"
    }
  },
  render: args => ({
    components: {
      PostCard
    },
    setup() {
      return {
        ...args
      };
    },
    template: '<PostCard :post="post" />'
  })
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,M as default};
