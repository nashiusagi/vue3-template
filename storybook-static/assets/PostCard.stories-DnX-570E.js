import{d as _,e as y,w as k,c as f,a as p,z as n,n as a,o as C}from"./vue.esm-bundler-BwU7cRng.js";import{u as r}from"./index-Ftz5BnV1.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const m=_({__name:"PostCard",props:{post:{}},setup(s){const u=`/post/${s.post.id}`,o=y(r().value);return k(r(),()=>{o.value=r().value}),(t,w)=>(C(),f("div",{class:a(t.$style.card)},[p("a",{class:a([[t.$style.post_link,{[t.$style.dark]:o.value}],"post_link"]),href:u},n(s.post.title),3),p("p",{class:a([t.$style.post_body,{[t.$style.dark]:o.value}])},n(s.post.body),3)],2))}}),P="_card_m3yzp_2",b="_dark_m3yzp_10",v="_post_link_m3yzp_15",$="_post_body_m3yzp_24",z={card:P,dark:b,post_link:v,post_body:$},D={$style:z},i=g(m,[["__cssModules",D]]);m.__docgenInfo={exportName:"default",displayName:"PostCard",description:"",tags:{},props:[{name:"post",required:!0,type:{name:"Post"}}],sourceFiles:["/home/runner/work/vue3-template/vue3-template/app/src/components/organisms/PostCard/PostCard.vue"]};const M={title:"organisms/PostCard",component:i},e={args:{post:{id:1,title:"title",body:"body"}},render:s=>({components:{PostCard:i},setup(){return{...s}},template:'<PostCard :post="post" />'})};var d,l,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,M as default};
