var k=Object.defineProperty;var _=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var f=(o,e,s)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,w=(o,e)=>{for(var s in e||(e={}))x.call(e,s)&&f(o,s,e[s]);if(_)for(var s of _(e))N.call(e,s)&&f(o,s,e[s]);return o};import{_ as S,d as R,G as g,g as b,s as D,u as v,U as I,r as U,x as y,b as B,c as $,m as A,e as C,f as p,o as P,h as T,i as a,j as i,w as h,k as E,l as V}from"./index.4b8d6e0e.js";import{s as L,a as W,_ as G}from"./Vuelogo.ce88517d.js";const F=R({data(){return{checked:!1,email:"",password:"",userName:""}},methods:{googleSignIn(){const o=new g,e=b(E);D(e,o).then(s=>{g.credentialFromResult(s);const t=s.user;this.mainStore.loginInfo=t;const n=v(),u=t.email,d="",m=t.photoURL,r=t.metadata.creationTime,c=t.displayName;n.search(u).then(()=>{n.users.value.length==0?n.addUser(new I({email:u,password:d,photo_url:m,reg_date:r,user_name:c})):this.mainStore.loginUserID=n.usersID[0],console.log(t.displayName),U.push({name:"home"})})}).catch(s=>{s.code,s.message,s.email,g.credentialFromError(s)})},emailAndPasswordRegister(){const o=b();y(o,this.email,this.password).then(e=>{const s=e.user;this.mainStore.loginInfo=s;const t=v(),n=s.email,u=this.password,d="",m=Date.now(),r=this.userName;t.search(n).then(()=>{t.users.value.length==0?t.addUser(new I({email:n,password:u,photo_url:d,reg_date:m,user_name:r})).then(c=>{this.mainStore.loginUserID=c.id}):this.mainStore.loginUserID=t.usersID[0],console.log(this.mainStore.loginUserID),console.log(s),U.push({name:"home"})})}).catch(e=>{e.code;const s=e.message;console.log(s)})}},components:{Button:B,InputText:$,Checkbox:L,Divider:W},computed:w({},A(C))}),j={class:"loginViewWrapper"},H={class:"surface-card p-4 shadow-2 border-round w-full lg:w-6"},M={class:"homeRouterButtonWrapper"},q=V("Home page"),z={class:"text-center mb-5"},J=a("img",{src:G,alt:"Image",height:"50",class:"mb-3"},null,-1),K=a("div",{class:"text-900 text-3xl font-medium mb-3"},"Register here",-1),O=a("span",{class:"text-600 font-medium line-height-3"},"Already registered?",-1),Q=V("Log in! "),X=a("label",{for:"email1",class:"block text-900 font-medium mb-2"},"Email",-1),Y=a("label",{for:"password1",class:"block text-900 font-medium mb-2"},"Password",-1),Z=a("label",{for:"userName1",class:"block text-900 font-medium mb-2"},"UserName",-1),ee={class:"googleAuthContainer"};function se(o,e,s,t,n,u){const d=p("RouterLink"),m=p("Button"),r=p("InputText"),c=p("Divider");return P(),T("div",j,[a("div",H,[a("div",M,[i(m,{label:"Back to home page"},{default:h(()=>[i(d,{class:"router",to:"/"},{default:h(()=>[q]),_:1})]),_:1})]),a("div",z,[J,K,O,i(d,{class:"font-medium no-underline ml-2 text-blue-500 cursor-pointer router",to:"/login"},{default:h(()=>[Q]),_:1})]),a("div",null,[X,i(r,{modelValue:o.email,"onUpdate:modelValue":e[0]||(e[0]=l=>o.email=l),id:"email1",type:"text",class:"w-full mb-3"},null,8,["modelValue"]),Y,i(r,{modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=l=>o.password=l),id:"password1",type:"password",class:"w-full mb-3"},null,8,["modelValue"]),Z,i(r,{modelValue:o.userName,"onUpdate:modelValue":e[2]||(e[2]=l=>o.userName=l),id:"userName1",type:"text",class:"w-full mb-3"},null,8,["modelValue"]),i(m,{onClick:e[3]||(e[3]=l=>o.emailAndPasswordRegister()),label:"Register",icon:"pi pi-user",class:"w-full"}),i(c),a("div",ee,[a("button",{onClick:e[4]||(e[4]=(...l)=>o.googleSignIn&&o.googleSignIn(...l)),class:"login-with-google-btn"},"Sign In with Google")])])])])}var ne=S(F,[["render",se]]);export{ne as default};