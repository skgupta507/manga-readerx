import{d as p,c as $,S as A,a as f,b as l,i as u,s as b,P as N,t as x,F as E,g as U,e as F,f as j,u as z,h as H,j as T}from"./index.5f1f52e4.js";import{U as B}from"./url-transformer.be3cbc7c.js";const W="_root_1iiqr_1",G="_bg-mask_1iiqr_50",J="_detail-drawer_1iiqr_58",K="_brief-info_1iiqr_77",O="_chapter-list_1iiqr_94",Q="_chapter_1iiqr_94",D={root:W,bgMask:G,detailDrawer:J,briefInfo:K,chapterList:O,chapter:Q};var X=x("<a target=_blank rel=noreferrer>"),Y=x("<div>"),Z=x("<div><div><img alt=cover><h5></h5></div><div>");const V=c=>{const i=()=>{c.onClose()},h=(t,n)=>$(E,{each:t,children:({name:s,index:a})=>(()=>{var e=X();return u(e,s),f(d=>{var r=D.chapter,v=`${window.location.pathname}#${U({mangaId:n,chapterIndex:a,pageIndex:1})}`;return r!==d.e&&l(e,d.e=r),v!==d.t&&b(e,"href",d.t=v),d},{e:void 0,t:void 0}),e})()});return $(N,{get mount(){return document.getElementById("root")??void 0},get children(){return $(A,{get when(){return c.info},children:t=>[(()=>{var n=Y();return n.$$click=i,f(()=>l(n,D.bgMask)),n})(),(()=>{var n=Z(),s=n.firstChild,a=s.firstChild,e=a.nextSibling,d=s.nextSibling;return u(e,()=>t().title),u(d,()=>h(t().chapters,t().id)),f(r=>{var v=D.detailDrawer,_=D.briefInfo,m=B.getCover(t().id),w=D.chapterList;return v!==r.e&&l(n,r.e=v),_!==r.t&&l(s,r.t=_),m!==r.a&&b(a,"src",r.a=m),w!==r.o&&l(d,r.o=w),r},{e:void 0,t:void 0,a:void 0,o:void 0}),n})()]})}})};p(["click"]);const ee=()=>{const[c,i]=F();return{currentDetail:c,openDrawer:n=>{i(n)},closeDrawer:()=>{i(void 0)}}},te="_root_1xsmy_1",re="_search-panel_1xsmy_50",ae="_prefixIcon_1xsmy_63",ne="_input_1xsmy_76",S={root:te,searchPanel:re,prefixIcon:ae,input:ne};var ie=x("<div><div></div><input type=text>");const se=c=>{let i;const h=t=>{t.code==="Enter"&&c.onSearch(i.value)};return(()=>{var t=ie(),n=t.firstChild,s=n.nextSibling;s.$$keyup=h;var a=i;return typeof a=="function"?z(a,s):i=s,f(e=>{var d=S.searchPanel,r={[c.class]:!!c.class},v=S.prefixIcon,_=S.input;return d!==e.e&&l(t,e.e=d),e.t=j(t,r,e.t),v!==e.a&&l(n,e.a=v),_!==e.o&&l(s,e.o=_),e},{e:void 0,t:void 0,a:void 0,o:void 0}),t})()};p(["keyup"]);const oe="_root_15770_1",ce="_search-panel_15770_50",le="_prefixIcon_15770_63",de="_input_15770_76",ve="_home_15770_87",_e="_base-info-list_15770_99",ue="_card_15770_105",he="_title_15770_119",ge="_description_15770_127",g={root:oe,searchPanel:ce,prefixIcon:le,input:de,home:ve,baseInfoList:_e,card:ue,title:he,description:ge};var q=x("<div>"),fe=x("<div><img loading=lazy><div></div><div>\u66F4\u65B0\u81F3\u300C<!>\u300D");const me=()=>{const c=H(),i=()=>c()??[],[h,t]=F(i()),n=s=>{if(!s){t(i());return}const a=i().filter(({title:e})=>e.includes(s));t(a)};return T(()=>{c.loading||t(i())}),{mangaList:h,isLoading:c.loading,handleSearch:n}},De=()=>{const{mangaList:c,handleSearch:i}=me(),{currentDetail:h,openDrawer:t,closeDrawer:n}=ee(),s=()=>(()=>{var a=q();return u(a,$(E,{get each(){return c()},children:e=>{const d=e.chapters[e.chapters.length-1];return(()=>{var r=fe(),v=r.firstChild,_=v.nextSibling,m=_.nextSibling,w=m.firstChild,I=w.nextSibling;return I.nextSibling,r.$$click=t,r.$$clickData=e,u(_,()=>e.title),u(m,()=>d.name,I),f(o=>{var L=g.card,C=g.cover,k=B.getCover(e.id),y=`cover-${e.id}`,M=g.title,P=e.title,R=g.description;return L!==o.e&&l(r,o.e=L),C!==o.t&&l(v,o.t=C),k!==o.a&&b(v,"src",o.a=k),y!==o.o&&b(v,"alt",o.o=y),M!==o.i&&l(_,o.i=M),P!==o.n&&b(_,"title",o.n=P),R!==o.s&&l(m,o.s=R),o},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),r})()}})),f(()=>l(a,g.baseInfoList)),a})();return(()=>{var a=q();return u(a,$(se,{get class(){return g.searchPanel},onSearch:i}),null),u(a,s,null),u(a,$(V,{get info(){return h()},onClose:n}),null),f(()=>l(a,g.home)),a})()};p(["click"]);export{De as default};