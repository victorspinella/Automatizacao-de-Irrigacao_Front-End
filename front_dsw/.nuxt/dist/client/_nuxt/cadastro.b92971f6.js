import{_ as p,u as _,n as h,c as m,a as s,q as f,s as l,v as r,o as b,p as g,e as v}from"./entry.acdcd3de.js";import{a as w}from"./axios.3a76d256.js";const o=i=>(g("data-v-b41a439e"),i=i(),v(),i),C={class:"page-container"},y={class:"login-container"},U=o(()=>s("h2",{class:"titulo"},"Cadastre-se",-1)),x=o(()=>s("hr",null,null,-1)),S=o(()=>s("br",null,null,-1)),k=["onSubmit"],I=o(()=>s("label",{class:"label",for:"user"},"Novo usuário:",-1)),q=o(()=>s("label",{class:"label",for:"pass"},"Nova senha:",-1)),V=o(()=>s("label",{class:"label",for:"pass"},"Confirmação de senha:",-1)),B=o(()=>s("button",{class:"button",type:"submit"},"Cadastrar",-1)),N=o(()=>s("br",null,null,-1)),z=o(()=>s("hr",null,null,-1)),F=o(()=>s("label",{style:{"align-self":"center"}},"Já possui conta?",-1)),L={__name:"cadastro",setup(i){const d=_(),e=h({loginUser:"",senha:"",senhaConfirmation:""}),u=async()=>{try{const a=await w.post("http://localhost:5000/auth/register",{login:e.loginUser,senha:e.senha,senhaConfirmation:e.senhaConfirmation});if(a.status===201){const t=a.data.token;window.alert("Cadastro realizado com sucesso"),localStorage.setItem("token",t),c()}else console.error("Falha no login")}catch(a){a.response.status===422&&window.alert("Login já existe"),a.response.status===423&&window.alert("Senhas não coicidem")}},c=()=>{d.push("/")};return(a,t)=>(b(),m("div",C,[s("div",y,[U,x,S,s("form",{class:"form",onSubmit:f(u,["prevent"])},[I,l(s("input",{class:"input",type:"text",id:"loginUser","onUpdate:modelValue":t[0]||(t[0]=n=>e.loginUser=n),required:""},null,512),[[r,e.loginUser]]),q,l(s("input",{class:"input",type:"password",id:"senha","onUpdate:modelValue":t[1]||(t[1]=n=>e.senha=n),required:""},null,512),[[r,e.senha]]),V,l(s("input",{class:"input",type:"password",id:"senhaConfirmatiom","onUpdate:modelValue":t[2]||(t[2]=n=>e.senhaConfirmation=n),required:""},null,512),[[r,e.senhaConfirmation]]),B,N],40,k),z,F,s("button",{class:"button",onClick:c},"Fazer login")])]))}},D=p(L,[["__scopeId","data-v-b41a439e"]]);export{D as default};