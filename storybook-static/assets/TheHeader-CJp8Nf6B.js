import{d as g,r as _,w as $,o as l,c as n,a as s,u as c,n as a,q as i,F as d,z as k,A as f}from"./vue.esm-bundler-DgbHZ6Dh.js";import{D as T}from"./DarkModeToggleButton-ChQdDH6l.js";import{H as h}from"./HeaderItem-Bybcde38.js";import{u,a as b,b as q}from"./index-DbWOL54D.js";import{M as B}from"./MenuButton-Zw7vALrg.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C={key:0},v=g({__name:"TheHeader",setup(j){const r=_(u().value);$(u(),()=>{r.value=u().value});const p=b(q).smallerOrEqual("md"),o=_(!1),y=()=>{o.value=!o.value},m=[{id:1,title:"index",link:"/index"},{id:2,title:"sample",link:"/sample"},{id:3,title:"sample2",link:"/sample"},{id:4,title:"sample3",link:"/sample"}];return(e,I)=>(l(),n(d,null,[s("div",{class:a([e.$style.headerWrapper,{[e.$style.dark]:r.value}])},[c(p)?(l(),n("div",{key:0,class:a(e.$style.headerContainer)},[s("div",null,[i(B,{onClick:y,class:a(e.$style.menuButton)},null,8,["class"])]),s("div",null,[s("span",{class:a([e.$style.headerTitle,{[e.$style.dark]:r.value}])},"Vue3 Template",2)]),s("div",{class:a(e.$style.dark_mode_button_container)},null,2)],2)):(l(),n("div",{key:1,class:a(e.$style.headerContainer)},[s("div",null,[s("span",{class:a([e.$style.headerTitle,{[e.$style.dark]:r.value}])},"Vue3 Template",2)]),s("div",{class:a(e.$style.header_right)},[(l(),n(d,null,k(m,t=>s("nav",{key:t.id,class:a(e.$style.headerNav)},[i(h,{link:t.link,title:t.title},null,8,["link","title"])],2)),64)),s("div",{class:a(e.$style.dark_mode_button_container)},[i(T)],2)],2)],2))],2),c(p)&&o.value?(l(),n("div",C,[(l(),n(d,null,k(m,t=>s("nav",{key:t.id,class:a(e.$style.menuList)},[i(h,{link:t.link,title:t.title,class:a(e.$style.menu)},null,8,["link","title","class"])],2)),64))])):f("",!0)],64))}}),N="_headerWrapper_glpqi_2",H="_dark_glpqi_7",V="_headerContainer_glpqi_13",L="_headerTitle_glpqi_21",W="_menuButton_glpqi_30",D="_header_right_glpqi_34",w="_menuList_glpqi_41",E="_menu_glpqi_30",F="_headerNav_glpqi_53",z="_dark_mode_button_container_glpqi_61",O={headerWrapper:N,dark:H,headerContainer:V,headerTitle:L,menuButton:W,header_right:D,menuList:w,menu:E,headerNav:F,dark_mode_button_container:z},A={$style:O},U=M(v,[["__cssModules",A]]);v.__docgenInfo={exportName:"default",displayName:"TheHeader",description:"",tags:{},sourceFiles:["/home/runner/work/vue3-template/vue3-template/app/src/components/organisms/TheHeader/TheHeader.vue"]};export{U as T};