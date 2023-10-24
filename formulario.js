
const namef = document.querySelector('#name'); 
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const coment = document.querySelector('#coment');
const btnsend = document.querySelector('#send');

btnsend.addEventListener('click', formSend)

function formSend() {
 if (namef.value === ''){
  alert("Por favor ingrese su nombre");
 }
else if (email.value === ''){
  alert("Por favor ingrese su email"); 
} 
else if (number.value === ''){
  alert("Por favor ingrese su número de teléfono");
}
else if (coment.value === ''){
  alert("Por favor ingrese su comentario");
}
else {
  alert("Gracias por su comentario");
}
}