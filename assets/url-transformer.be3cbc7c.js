const o=(t,e)=>{if(t.toString().length>e)return t.toString();const r=e-t.toString().length;return`${"0".repeat(r)}${t}`},n="https://cc.fun8.us",c=t=>`${n}/cartoonimg/coimg/${t}.jpg`,g=({mangaId:t,chapterIndex:e,pageIndex:r})=>`${n}//2e5fc/${t}/${o(e,3)}/${o(r,3)}.jpg`,s={getCover:c,getPageImage:g};export{s as U};
