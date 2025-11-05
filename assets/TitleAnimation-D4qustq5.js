import{r as m,g as y,j as l,N as u,k as g}from"./index-B4ml5mJ6.js";import{B as x,s as $,T}from"./Box-tqkUnZid.js";const d=s=>g`
  from {
    opacity: ${s?0:1};
    transform: translateY(${s?"50px":"0"}) scale(${s?.8:1});
  }
  to {
    opacity: ${s?1:0};
    transform: translateY(${s?"0":"50px"}) scale(${s?1:.8});
  }
`,w=$(T)(({shouldRender:s,titleColor:t})=>({display:"flex",flexWrap:"wrap",fontWeight:600,color:t,"& span":{display:"inline-block",opacity:s?0:1,animation:s?`${d(!0)} 0.66s forwards`:`${d(!1)} 0.66s forwards`,"&.space-char":{whiteSpace:"pre"}}})),v=({titles:s,stagger:t=100,backgroundColor:f,titleColors:h=[u],triggerY:i=100})=>{const[r,c]=m.useState(!1),a=y();return m.useEffect(()=>{const e=()=>{window.scrollY>=i?c(!0):c(!1)};return window.addEventListener("scroll",e,{passive:!0}),e(),()=>{window.removeEventListener("scroll",e)}},[i]),l.jsx(x,{sx:{backgroundColor:f,display:"grid",gridTemplateColumns:"fit-content(100%) fit-content(100%)",placeItems:"start",width:"100%",minHeight:"fit-content",alignContent:"center",padding:a.spacing(4,8),[a.breakpoints.down("md")]:{padding:a.spacing(2,4)}},children:s.map((e,n)=>l.jsx(w,{shouldRender:r,titleColor:h[n],variant:"h2",children:e.split("").map((p,o)=>l.jsx("span",{className:p===" "?"space-char":"",style:{animationDelay:r?`${o*t}ms`:`${(e.length-1-o)*t}ms`},children:p},o))},n))})};export{v as T};
