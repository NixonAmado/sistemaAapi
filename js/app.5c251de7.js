(function(){"use strict";var t={8702:function(t,e,o){var n=o(5130),r=o(6768);function a(t,e){const o=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(o)}var s=o(1241);const i={},l=(0,s.A)(i,[["render",a]]);var d=l,c=o(8355),u=o(6942),p=o(1387),m=o(4232),f=o.p+"img/vue.674cdb9d.jpg";const b=t=>((0,r.Qi)("data-v-6934108a"),t=t(),(0,r.jt)(),t),h={class:"wrapper fadeInDown"},v={id:"formContent"},g=b((()=>(0,r.Lk)("div",{class:"fadeIn first mt-2"},[(0,r.Lk)("img",{src:f,id:"icon",width:"200px",height:"200px",alt:"User Icon"})],-1))),k=b((()=>(0,r.Lk)("input",{type:"submit",class:"fadeIn fourth",value:"Log In"},null,-1))),L={key:0,class:"alert alert-danger",role:"alert"};function y(t,e,o,a,s,i){return(0,r.uX)(),(0,r.CE)("div",h,[(0,r.Lk)("div",v,[g,(0,r.Lk)("form",{onSubmit:e[2]||(e[2]=(0,n.D$)(((...t)=>i.login&&i.login(...t)),["prevent"]))},[(0,r.bo)((0,r.Lk)("input",{type:"text",id:"login",class:"fadeIn second",name:"login",placeholder:"usuario valido: usuario6@gmail.com","onUpdate:modelValue":e[0]||(e[0]=t=>s.user=t)},null,512),[[n.Jo,s.user]]),(0,r.bo)((0,r.Lk)("input",{type:"text",id:"password",class:"fadeIn third",name:"login",placeholder:"123456","onUpdate:modelValue":e[1]||(e[1]=t=>s.password=t)},null,512),[[n.Jo,s.password]]),k],32),s.error?((0,r.uX)(),(0,r.CE)("div",L,(0,m.v_)(s.error_msg),1)):(0,r.Q3)("",!0)])])}o(4114);var C={name:"HomeView",components:{},data(){return{user:"",password:"",error:!1,error_msg:""}},methods:{login(){let t={usuario:this.user,password:this.password};c.A.post("https://api.solodata.es/auth",t).then((t=>{"ok"===t.data.status?(this.$router.push("dashboard"),localStorage.token=t.data.result.token):(this.error=!0,this.error_msg=t.data.result.error_msg)})).catch((t=>{this.error=!0,this.error_msg=t.message}))}}};const I=(0,s.A)(C,[["render",y],["__scopeId","data-v-6934108a"]]);var E=I;const w={class:"container mb-5"},x={class:"table table-hover"},O=["onClick"],A={scope:"row"};function N(t,e,o,n,a,s){const i=(0,r.g2)("HeaderComponent"),l=(0,r.g2)("FooterComponent");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(i),(0,r.Lk)("div",w,[(0,r.Lk)("table",x,[(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.patientKeys,(t=>((0,r.uX)(),(0,r.CE)("th",{key:t.id,scope:"col"},(0,m.v_)(t),1)))),128))])]),(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.patientList,(t=>((0,r.uX)(),(0,r.CE)("tr",{key:t.PacienteId,onClick:e=>s.editar(t.PacienteId),id:"tr-patientList"},[(0,r.Lk)("th",A,(0,m.v_)(t.PacienteId),1),(0,r.Lk)("td",null,(0,m.v_)(t.Nombre),1),(0,r.Lk)("td",null,(0,m.v_)(t.DNI),1),(0,r.Lk)("td",null,(0,m.v_)(t.Telefono),1),(0,r.Lk)("td",null,(0,m.v_)(t.Correo),1)],8,O)))),128))])])]),(0,r.bF)(l)],64)}const _=(0,r.Fv)('<nav class="navbar navbar-expand-lg navbar-light bg-light"><div class="container-fluid"><a class="navbar-brand" href="#">Navbar</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button></div></nav><br><br>',3);function F(t,e,o,n,r,a){return _}var P={data(){}};const D=(0,s.A)(P,[["render",F]]);var j=D;const S={class:""},V=(0,r.Fv)('<section class=""><footer class="text-center sti text-white" style="background-color:#0a4275;"><div class="container p-4 pb-0"><section class=""></section></div><div class="text-center p-3" style="background-color:rgba(0, 0, 0, 0.2);"> © 2024 Copyright: <a class="text-white" href="https://bootstrap.com/">MDBootstrap.com</a></div></footer></section>',1),U=[V];function J(t,e){return(0,r.uX)(),(0,r.CE)("div",S,U)}const X={},T=(0,s.A)(X,[["render",J]]);var $=T,G={name:"Dashboard",data(){return{patientList:null,page:1,patientKeys:""}},components:{HeaderComponent:j,FooterComponent:$},methods:{editar(t){this.$router.push("/edit/"+t)}},mounted:function(){let t="https://api.solodata.es/pacientes?page=$1";c.A.get(t).then((t=>{this.patientKeys=Object.keys(t.data[0]),this.patientList=t.data})).catch((t=>console.error(t)))}};const K=(0,s.A)(G,[["render",N],["__scopeId","data-v-834cce10"]]);var H=K;const M={class:"container w-75 min-vh-100"},B={class:"row"},Q={class:"mb-3 col-sm-6"},W=(0,r.Lk)("label",{for:"inputEditName",class:"form-label"}," Name ",-1),q={class:"mb-3 col-sm-3"},z=(0,r.Lk)("label",{for:"inputEditAddress",class:"form-label"}," Address ",-1),R={class:"mb-3 col-sm-3"},Y=(0,r.Lk)("label",{for:"InputEditDNI",class:"form-label"},"DNI",-1),Z={class:"mb-3 col-sm-4"},tt=(0,r.Lk)("label",{for:"InputEditPostalCode",class:"form-label"},"PostalCode",-1),et={class:"mb-3 col-sm-4"},ot=(0,r.Lk)("label",{for:"InputEditTelefono",class:"form-label"},"Phone Number",-1),nt={class:"mb-3 col-sm-4"},rt=(0,r.Lk)("label",{for:"InputEditGenero",class:"form-label"},"Gender",-1),at={class:"mb-3 col-sm-6"},st=(0,r.Lk)("label",{for:"InputEditFechaNacimiento",class:"form-label"},"BirthDate",-1),it={class:"mb-3 col-sm-6"},lt=(0,r.Lk)("label",{for:"InputEditCorreo",class:"form-label"},"Correo",-1),dt={class:"form-group"},ct=(0,r.Lk)("br",null,null,-1),ut=(0,r.Lk)("br",null,null,-1);function pt(t,e,o,a,s,i){const l=(0,r.g2)("HeaderComponent"),d=(0,r.g2)("FooterComponent");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(l),(0,r.Lk)("div",M,[(0,r.Lk)("form",B,[(0,r.Lk)("div",Q,[W,(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control",id:"inputEditName","aria-describedby":"editName","onUpdate:modelValue":e[0]||(e[0]=e=>t.form.nombre=e)},null,512),[[n.Jo,t.form.nombre]])]),(0,r.Lk)("div",q,[z,(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control",id:"inputEditAddress","aria-describedby":"editAddress","onUpdate:modelValue":e[1]||(e[1]=e=>t.form.direccion=e)},null,512),[[n.Jo,t.form.direccion]])]),(0,r.Lk)("div",R,[Y,(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control",id:"InputEditDNI","onUpdate:modelValue":e[2]||(e[2]=e=>t.form.dni=e)},null,512),[[n.Jo,t.form.dni]])]),(0,r.Lk)("div",Z,[tt,(0,r.bo)((0,r.Lk)("input",{type:"number",class:"form-control",id:"InputEditPostalCode","onUpdate:modelValue":e[3]||(e[3]=e=>t.form.codigoPostal=e)},null,512),[[n.Jo,t.form.codigoPostal]])]),(0,r.Lk)("div",et,[ot,(0,r.bo)((0,r.Lk)("input",{type:"number",class:"form-control",id:"InputEditTelefono","onUpdate:modelValue":e[4]||(e[4]=e=>t.form.telefono=e)},null,512),[[n.Jo,t.form.telefono]])]),(0,r.Lk)("div",nt,[rt,(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control",id:"InputEditGenero","onUpdate:modelValue":e[5]||(e[5]=e=>t.form.genero=e)},null,512),[[n.Jo,t.form.genero]])]),(0,r.Lk)("div",at,[st,(0,r.bo)((0,r.Lk)("input",{type:"date",class:"form-control",id:"InputEditFechaNacimiento","onUpdate:modelValue":e[6]||(e[6]=e=>t.form.fechaNacimiento=e)},null,512),[[n.Jo,t.form.fechaNacimiento]])]),(0,r.Lk)("div",it,[lt,(0,r.bo)((0,r.Lk)("input",{type:"email",class:"form-control",id:"InputEditCorreo","onUpdate:modelValue":e[7]||(e[7]=e=>t.form.Correo=e)},null,512),[[n.Jo,t.form.Correo]])]),(0,r.Lk)("div",dt,[(0,r.Lk)("button",{type:"button",class:"btn btn-outline-primary",onClick:e[8]||(e[8]=t=>i.Edit())},"Edit"),(0,r.Lk)("button",{type:"button",class:"btn btn-outline-danger margen",onClick:e[9]||(e[9]=t=>i.Delete())},"Delete"),(0,r.Lk)("button",{type:"button",class:"btn btn-outline-success margen",onClick:e[10]||(e[10]=t=>i.GetOut())},"Get Out")])])]),ct,ut,(0,r.bF)(d)],64)}var mt={name:"EditView",components:{HeaderComponent:j,FooterComponent:$},data:function(){return{patientId:null,form:{pacienteId:"",nombre:"",direccion:"",dni:"",correo:"",codigoPostal:"",genero:"",telefono:"",fechaNacimiento:"",token:""}}},methods:{Edit(){c.A.put("http://solodata.es/pacientes",this.form).then((t=>{console.log(t)}))},Delete(){var t={pacienteId:this.form.pacienteId,token:this.form.token};console.log(t),c.A.delete("https://api.solodata.es/pacientes/",{headers:t}).then((t=>{console.log(t),this.$router.push("/dashboard")}))},GetOut(){this.$router.push("/dashboard")}},mounted:function(){this.patientId=this.$route.params.id,c.A.get(`https://api.solodata.es/pacientes?id=${this.patientId}`).then((t=>{this.form.nombre=t.data[0].Nombre,this.form.direccion=t.data[0].Direccion,this.form.dni=t.data[0].DNI,this.form.correo=t.data[0].Correo,this.form.codigoPostal=t.data[0].CodigoPostal,this.form.genero=t.data[0].Genero,this.form.telefono=t.data[0].Telefono,this.form.fechaNacimiento=t.data[0].FechaNacimiento,this.form.token=localStorage.getItem("token"),console.log(this.form),this.form.token=localStorage.getItem("token")||"",console.log("form nombre: "+this.form.nombre)}))}};const ft=(0,s.A)(mt,[["render",pt]]);var bt=ft;const ht=[{path:"/",name:"Home",component:E},{path:"/dashboard",name:"Dashboard",component:H},{path:"/edit/:id",name:"Edit",component:bt}],vt=(0,p.aE)({history:(0,p.LA)("/sistemaAapi/"),routes:ht});var gt=vt,kt=o(5015);const Lt=(0,n.Ef)(d);Lt.use(gt),Lt.use(kt.BootstrapVue),Lt.use(kt.IconsPlugin),Lt.use(u.A,c.A),Lt.config.compilerOptions.isCustomElement=t=>t.startsWith("b-"),Lt.mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=t,function(){o.amdO={}}(),function(){var t=[];o.O=function(e,n,r,a){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],a=t[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(i=!1,a<s&&(s=a));if(i){t.splice(c--,1);var d=r();void 0!==d&&(e=d)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[n,r,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/sistemaAapi/"}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,a,s=n[0],i=n[1],l=n[2],d=0;if(s.some((function(e){return 0!==t[e]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var c=l(o)}for(e&&e(n);d<s.length;d++)a=s[d],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(c)},n=self["webpackChunksistemaapi"]=self["webpackChunksistemaapi"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(8702)}));n=o.O(n)})();
//# sourceMappingURL=app.5c251de7.js.map