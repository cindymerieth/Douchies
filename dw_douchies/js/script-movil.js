var desplegableMenuopen = document.getElementById("hamburger");
desplegableMenuopen.onclick = desplegar; // Función onclick para el despliegue del menú
var varLinks = document.getElementById("menu_movil");
var navCambiocolor = document.getElementById("header_id");
var main = document.getElementById("main");
var footer = document.getElementById("footer");

var seccion_productos = document.getElementById("seccion_productos");
var seccion_servicios = document.getElementById("seccion_servicios");
var seccion_sobre_douchies = document.getElementById("seccion_sobre_douchies");
var seccion_aliados = document.getElementById("seccion_aliados");
var seccion_douchies_lovers = document.getElementById("seccion_douchies_lovers");
var seccion_contacto = document.getElementById("seccion_contacto");

// Agregar función onclick a las secciones

seccion_productos.onclick = movilProducto;
seccion_servicios.onclick = movilServicio;
seccion_sobre_douchies.onclick = movilSobreDouchies;
seccion_aliados.onclick = movilAliados;
seccion_douchies_lovers.onclick = movilDouchiesLovers;
seccion_contacto.onclick = movilContacto;

// DESPLIEGUE DEL MENÚ DE HAMBURGUESA

function desplegar() {
  if (varLinks.style.display === "flex"){    
     varLinks.style.display = "none";  
     navCambiocolor.style.background ="#ada2cc";
     main.style.display = "block"; 
     console.log("cerrar");
     footer.style.display = "block";
  } 

  else {
     varLinks.style.display = "flex";
     console.log("abrir");
     navCambiocolor.style.background ="#ada2cc";
     main.style.display = "none"; 
     footer.style.display = "none"; 
  }   
}

function movilProducto () {
  if (varLinks.style.display === "none"){    
    varLinks.style.display = "flex";  
    navCambiocolor.style.background ="#ada2cc";
  } 

  else {
    varLinks.style.display = "none";    
    navCambiocolor.style.background ="inherit";
    main.style.display = "block"; 
    footer.style.display = "block"; 
  }   
}

function movilServicio() {
  if (varLinks.style.display === "none") {    
    varLinks.style.display = "flex";  
    navCambiocolor.style.background ="#ada2cc";
  } 

  else {
    varLinks.style.display = "none";    
    navCambiocolor.style.background ="inherit";
    main.style.display = "block"; 
    footer.style.display = "block"; 
  }   
}

function movilSobreDouchies() {
  if (varLinks.style.display === "none") {    
    varLinks.style.display = "flex";  
    navCambiocolor.style.background ="#ada2cc";
  } 

  else {
    varLinks.style.display = "none";    
    navCambiocolor.style.background ="inherit";
    main.style.display = "block"; 
    footer.style.display = "block"; 
  }   
}

function movilAliados() {
  if (varLinks.style.display === "none") {    
    varLinks.style.display = "flex";  
    navCambiocolor.style.background ="#ada2cc";   
  }

  else {
    varLinks.style.display = "none";    
    navCambiocolor.style.background ="inherit";
    main.style.display = "block"; 
    footer.style.display = "block"; 
  }   
}

function movilDouchiesLovers() {
  if (varLinks.style.display === "none"){    
    varLinks.style.display = "flex";  
    navCambiocolor.style.background ="#ada2cc"; 
  }

  else {
    varLinks.style.display = "none";    
    navCambiocolor.style.background ="inherit";
    main.style.display = "block"; 
    footer.style.display = "block"; 
  }   
}

function movilContacto() {
  if (varLinks.style.display === "none"){    
    varLinks.style.display = "flex";  
    navCambiocolor.style.background ="#ada2cc";
  } 

  else {
    varLinks.style.display = "none";    
    navCambiocolor.style.background ="inherit";
    main.style.display = "block"; 
    footer.style.display = "block"; 
  }   
}