// aqui exportaras las funciones que necesites
import {logeo}from './controladores/controladores-bd.js';
import { registro } from '../controladores/controladores-bd.js';

export const myFunction = () => {
  // aqui tu codigo
};

export const loginPrincipal = ()=>{
  const correo= document.querySelector("#email");
  const contrasena =document.querySelector("#password");
  logeo(correo.value,contrasena.value)
  };

 export const registroUsuario= () =>{
  const email = document.getElementById("#email2").value;
  const password = document.getElementById("#password2").value;
  registro(email,password);
 } 