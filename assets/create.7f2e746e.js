import{d as L,i as z,r as _,o as $,b as n,c as r,e,t as w,j as b,k as d,v as i,l as B,F as E,h as k,m as c,n as R,g as P,p as K,D as v,q as j}from"./index.a53329dd.js";import{a as h}from"./axios.95d71f80.js";const J={class:"container mx-auto px-6 pb-10 rounded"},G={class:"text-2xl hidden"},Y={class:"grid grid-cols-3 gap-4 mt-4"},Z=e("div",{class:"col-span-3 mt-5"},[e("span",{class:"font-bold"},"INFORMACION GENERAL")],-1),q={class:"col-span-2"},H=e("label",{for:"name"},"Nombre",-1),Q={class:"col-span-1"},W=e("label",{for:"name"},"RUT",-1),X={class:"col-span-1"},ee=e("label",{for:"address"},"Direccion",-1),oe={class:"col-span-1"},le=e("label",{for:"city"},"Ciudad",-1),te={class:"col-span-1"},ae=e("label",{for:"state"},"Region",-1),se={class:"col-span-1"},ne=e("label",{for:"zip"},"ZIP CODE",-1),re={class:"col-span-1"},de=e("label",{for:"phone"},"Telefono",-1),ie={class:"col-span-1"},ce=e("label",{for:"email"},"Email",-1),ue=e("div",{class:"col-span-3 mt-5"},[e("span",{class:"font-bold"},"INFORMACION DE RECAUDACION")],-1),pe={class:"col-span-1"},me=e("label",{for:"email"},"TOTAL METROS CUADRADOS",-1),ve={class:"col-span-1"},_e=e("label",{for:"email"},"TOTAL RECAUDACION",-1),be={class:"col-span-1"},he=e("label",{for:"email"},"VALOR M2",-1),ye=["value"],xe={class:"col-span-1"},fe=e("label",{for:"email"},"DIA VENCIMIENTO MES",-1),ge=["value"],we=e("option",{value:"0"},"Ultimo dia del mes (29, 30, 31)",-1),Ee={class:"col-span-1"},ke=e("label",{for:"email"},"VALOR TASA",-1),Re={class:"col-span-1"},Ce=e("label",{for:"notes"},"Notas (Opcional)",-1),Ne={class:"col-span-2"},Ue=e("label",{for:"notes"},"Informacion del banco (Opcional)",-1),Ae={key:0,class:"col-span-3 mt-5"},Ie=e("span",{class:"font-bold"},"INFORMACION DE PISOS",-1),Fe=[Ie],Oe={key:1,class:"col-span-3"},De={class:"grid grid-cols-6"},Ve={class:"col-span-2 px-2"},Me=e("small",{class:"flex-row"},"NOMBRE PISO Y ENTER",-1),Te={class:"grid grid-cols-6"},Se={class:"col-span-6"},Le=["onKeyup"],ze=["onClick"],$e={class:"grid grid-cols-10"},Be={class:"col-span-6"},Pe={class:"col-span-4 text-right"},Ke=["onClick"],je={class:"col-span-4"},Je={key:0,class:"flex-row"},Ge=["onKeyup"],Ye={key:2,class:"flex-row"},Ze=["onKeyup"],qe={key:0,class:"text-center mt-20"},He=e("div",{class:"w-full py-3"},null,-1),Qe={class:"grid grid-cols-8 items-center"},We={class:"col-span-1 px-4"},Xe=["onClick"],eo=["onClick"],oo={class:"col-span-6 px-4"},lo=["onUpdate:modelValue","onBlur"],to={class:"col-span-1"},ao=["onClick"],so=e("small",null,"ELIMINAR",-1),no=[so],ro={key:2,class:"col-span-3"},io={class:"col-span-1"},co={class:"col-span-2"},vo=L({__name:"create",setup(uo){const y=z(),p=y.currentRoute.value.params.id||null,a=_({name:"",address:"",city:"",region:"",zip:"",phone:"",email:"",notes:"",rut:"",totalm2:"",recaudation:"",bankInfo:"",dueDate:"",tasa:""}),f=_(""),g=_(""),s=_({id:1,name:"",rooms:[]}),m=_([]),x=_(),N=()=>{m.value.push({_id:m.value.length+1,name:f.value.toString(),rooms:[]}),f.value=""},C=async()=>{try{const{data:t}=await h.post("room",{name:g.value,location:p,owner:null,resident:null});s.value.rooms.push({_id:t._id,name:t.name}),g.value="",K(()=>{console.log({scrollRef:x}),x.value&&(x.value.scrollTop=x.value.scrollHeight)})}catch{v({type:"error",title:"Error",text:"Error al agregar"})}},U=t=>{console.log(t);const l=JSON.stringify({_id:m.value.length+1,name:t.name,rooms:t.rooms});m.value.push({...JSON.parse(l)})},A=t=>{m.value=m.value.filter(l=>l._id!==t._id)},I=t=>{!window.confirm("\xBFEst\xE1s seguro de eliminar?")||(s.value.rooms=s.value.rooms.filter(o=>o._id!==t))},F=async t=>{try{const l=await h.put(`location/${p}/room/${t._id}`,{...t});console.log({res:l})}catch{v({type:"error",title:"Error",text:"Error al actualizar"})}},O=async()=>{try{if(!window.confirm("\xBFEst\xE1s seguro de eliminar la ubicaci\xF3n?"))return;const l=await h.delete(`location/${p}`);console.log({res:l}),v({type:"success",title:"Ubicaci\xF3n eliminada",text:"La ubicaci\xF3n ha sido eliminada exitosamente"}),y.push("/ubicacion")}catch(t){v({type:"error",title:"Error",text:"Error al eliminar la ubicaci\xF3n"}),console.log({error:t})}},D=async()=>{try{const t=await h.post("location",{...a.value,floors:m.value});console.log({res:t}),v({type:"success",title:"Ubicaci\xF3n creada",text:"La ubicaci\xF3n ha sido creada exitosamente"}),y.push("/ubicacion")}catch(t){v({type:"error",title:"Error",text:"Error al crear la ubicaci\xF3n"}),console.log({error:t})}},V=async t=>{try{const o=(await h.get(`/location/${t}`)).data;a.value={name:o.name,address:o.address,city:o.city,region:o.region,zip:o.zip,phone:o.phone,email:o.email,notes:o.notes,rut:o.rut,totalm2:o.totalm2,recaudation:o.recaudation,bankInfo:o.bankInfo,dueDate:o.dueDate,tasa:o.tasa},m.value=o.floors}catch(l){console.error(l),v({type:"error",title:"Error",text:"Error loading locations"})}},M=async()=>{try{const t=await h.put(`location/${p}`,{...a.value,floors:m.value});console.log({res:t}),v({type:"success",title:"Ubicaci\xF3n actualizada",text:"La ubicaci\xF3n ha sido actualizada exitosamente"}),y.push("/ubicacion")}catch(t){v({type:"error",title:"Error",text:"Error al actualizar la ubicaci\xF3n"}),console.log({error:t})}},T=t=>{const l=s.value.rooms.findIndex(u=>u._id===t);if(l===0)return;const o=s.value.rooms[l];s.value.rooms[l]=s.value.rooms[l-1],s.value.rooms[l-1]=o},S=t=>{const l=s.value.rooms.findIndex(u=>u._id===t);if(l===s.value.rooms.length-1)return;const o=s.value.rooms[l];s.value.rooms[l]=s.value.rooms[l+1],s.value.rooms[l+1]=o};return $(()=>{const t=y.currentRoute.value.params;t.id&&V(t.id)}),(t,l)=>(n(),r("div",J,[e("h1",G,w(b(p)?"Editar":"Crear")+" Ubicacion",1),e("div",Y,[Z,e("div",q,[H,d(e("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=o=>a.value.name=o),id:"name",name:"name",placeholder:"Nombre de la ubicaci\xF3n. Ej: Departamento 1",class:"w-full border border-gray-300 rounded-md p-2"},null,512),[[i,a.value.name]])]),e("div",Q,[W,d(e("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=o=>a.value.rut=o),id:"rut",name:"rut",placeholder:"RUT de la ubicaci\xF3n",class:"w-full border border-gray-300 rounded-md p-2"},null,512),[[i,a.value.rut]])]),e("div",X,[ee,d(e("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=o=>a.value.address=o),placeholder:"Direcci\xF3n de la ubicaci\xF3n",id:"address",name:"address",class:"w-full border border-gray-300 rounded-md p-2"},null,512),[[i,a.value.address]])]),e("div",oe,[le,d(e("input",{type:"text","onUpdate:modelValue":l[3]||(l[3]=o=>a.value.city=o),placeholder:"Ciudad de la ubicaci\xF3n",id:"city",name:"city",class:"w-full border border-gray-300 rounded-md p-2"},null,512),[[i,a.value.city]])]),e("div",te,[ae,d(e("input",{type:"text","onUpdate:modelValue":l[4]||(l[4]=o=>a.value.region=o),placeholder:"Region de la ubicaci\xF3n",id:"state",name:"state",class:"w-full border border-gray-300 rounded-md p-2"},null,512),[[i,a.value.region]])]),e("div",se,[ne,d(e("input",{type:"text","onUpdate:modelValue":l[5]||(l[5]=o=>a.value.zip=o),id:"zip",placeholder:"C\xF3digo postal de la ubicaci\xF3n",name:"zip",class:"w-full border border-gray-300 rounded-md p-2"},null,512),[[i,a.value.zip]])]),e("div",re,[de,d(e("input",{type:"text","onUpdate:modelValue":l[6]||(l[6]=o=>a.value.phone=o),placeholder:"Tel\xE9fono de la ubicaci\xF3n",id:"phone",name:"phone",class:"w-full border border-gray-300 rounded-md p-2"},null,512),[[i,a.value.phone]])]),e("div",ie,[ce,d(e("input",{type:"text",placeholder:"Email de la ubicaci\xF3n","onUpdate:modelValue":l[7]||(l[7]=o=>a.value.email=o),id:"email",name:"email",class:"w-full border border-gray-300 rounded-md p-2"},null,512),[[i,a.value.email]])]),ue,e("div",pe,[me,d(e("input",{type:"text",placeholder:"Total metros cuadrados","onUpdate:modelValue":l[8]||(l[8]=o=>a.value.totalm2=o),id:"email",name:"email",class:"w-full border border-gray-300 rounded-md p-2"},null,512),[[i,a.value.totalm2,void 0,{number:!0}]])]),e("div",ve,[_e,d(e("input",{type:"text",placeholder:"Monto total recaudado","onUpdate:modelValue":l[9]||(l[9]=o=>a.value.recaudation=o),id:"email",name:"email",class:"w-full border border-gray-300 rounded-md p-2"},null,512),[[i,a.value.recaudation,void 0,{number:!0}]])]),e("div",be,[he,e("input",{type:"text",placeholder:"Monto total recaudado",value:`${a.value.recaudation/a.value.totalm2}`,id:"email",name:"email",class:"w-full border border-gray-300 rounded-md p-2"},null,8,ye)]),e("div",xe,[fe,d(e("select",{"onUpdate:modelValue":l[10]||(l[10]=o=>a.value.dueDate=o),id:"dueDate",name:"dueDate",class:"w-full border border-gray-300 rounded-md p-2"},[(n(),r(E,null,k(28,o=>e("option",{key:o,value:o},w(o),9,ge)),64)),we],512),[[B,a.value.dueDate]]),e("small",null,"DESPUES DEL "+w(a.value.dueDate)+" DE CADA MES, COMENZARA LA MULTA",1)]),e("div",Ee,[ke,d(e("input",{type:"text",placeholder:"Valor tasa","onUpdate:modelValue":l[11]||(l[11]=o=>a.value.tasa=o),class:"w-full border border-gray-300 rounded-md p-2"},null,512),[[i,a.value.tasa]])]),e("div",Re,[Ce,d(e("textarea",{"onUpdate:modelValue":l[12]||(l[12]=o=>a.value.notes=o),id:"notes",name:"notes",rows:"4",placeholder:"Notas de la ubicaci\xF3n",class:"w-full border border-gray-300 rounded-md p-2"},null,512),[[i,a.value.notes]])]),e("div",Ne,[Ue,d(e("textarea",{"onUpdate:modelValue":l[13]||(l[13]=o=>a.value.bankInfo=o),id:"notes",name:"notes",rows:"4",placeholder:"Notas de la ubicaci\xF3n",class:"w-full border border-gray-300 rounded-md p-2"},null,512),[[i,a.value.bankInfo]])]),b(p)?(n(),r("div",Ae,Fe)):c("",!0),b(p)?(n(),r("div",Oe,[e("div",De,[e("div",Ve,[Me,e("div",Te,[e("div",Se,[d(e("input",{type:"text",placeholder:"Ej: Piso 1",class:"w-full border p-2","onUpdate:modelValue":l[14]||(l[14]=o=>f.value=o),onKeyup:R(N,["enter"])},null,40,Le),[[i,f.value]])])]),(n(!0),r(E,null,k(m.value,o=>(n(),r("div",{class:j(["px-2 py-3 border cursor-pointer",{"bg-blue-500 text-white hover:":s.value._id===o._id,"hover:bg-gray-100":s.value._id!==o._id}]),key:o._id,onClick:u=>s.value=o},[e("div",$e,[e("div",Be,[e("strong",null,w(o.name),1)]),e("div",Pe,[e("small",{onClick:u=>U(o),class:"inline-block cursor-pointer border ml-auto px-4"},"COPIAR",8,Ke)])])],10,ze))),128))]),e("div",je,[s.value._id?(n(),r("small",Je,"NOMBRE LOCAL Y ENTER")):c("",!0),s.value._id?d((n(),r("input",{key:1,type:"text",placeholder:"Nombre del local",class:"w-full p-2 mb-2 border","onUpdate:modelValue":l[15]||(l[15]=o=>g.value=o),onKeyup:R(C,["enter"])},null,40,Ge)),[[i,g.value]]):c("",!0),s.value._id?(n(),r("small",Ye,"NOMBRE PISO")):c("",!0),s.value._id?d((n(),r("input",{key:3,type:"text",placeholder:"Nombre del local",class:"w-full p-2 mb-2 border","onUpdate:modelValue":l[16]||(l[16]=o=>s.value.name=o),onKeyup:R(C,["enter"])},null,40,Ze)),[[i,s.value.name]]):c("",!0),s.value.rooms?(n(),r("div",{key:4,class:"w-full p-3 overflow-y-scroll border bg-gray-100",style:{"max-height":"400px","min-height":"400px"},ref_key:"scrollRef",ref:x},[s.value.rooms.length===0?(n(),r("div",qe,[P(" No hay locales "),He,s.value._id?(n(),r("button",{key:0,onClick:l[17]||(l[17]=o=>A(s.value)),class:"bg-red-500 text-white p-2 rounded py-1"}," ELIMINAR PISO ")):c("",!0)])):c("",!0),(n(!0),r(E,null,k(s.value.rooms,o=>(n(),r("div",{class:"border-b",key:o._id},[e("div",Qe,[e("div",We,[e("small",{onClick:u=>T(o._id),class:"bg-gray-500 hover:bg-gray-600 w-full text-white px-2 rounded py-0.5 cursor-pointer"}," SUBIR ",8,Xe),e("small",{onClick:u=>S(o._id),class:"bg-gray-500 hover:bg-gray-600 w-full text-white px-2 rounded py-0.5 cursor-pointer"}," BAJAR ",8,eo)]),e("div",oo,[d(e("input",{type:"text",class:"w-full p-2 border rounded",placeholder:"Nombre del local","onUpdate:modelValue":u=>o.name=u,onBlur:u=>F(o)},null,40,lo),[[i,o.name]])]),e("div",to,[e("button",{class:"bg-red-500 hover:bg-red-600 w-full text-white p-2 rounded py-1",onClick:u=>I(o._id)},no,8,ao)])])]))),128))],512)):c("",!0)])])])):c("",!0),b(p)?c("",!0):(n(),r("div",ro,[e("button",{class:"bg-blue-500 w-full text-white p-2 rounded py-4",onClick:D}," CREAR ")])),e("div",io,[b(p)?(n(),r("button",{key:0,class:"bg-red-500 w-full text-white p-2 rounded py-4",onClick:O}," ELIMINAR ")):c("",!0)]),e("div",co,[b(p)?(n(),r("button",{key:0,class:"bg-blue-500 w-full text-white p-2 rounded py-4",onClick:M}," GUARDAR ")):c("",!0)])])]))}});export{vo as default};
