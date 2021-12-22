const num = prompt('ingrse un numero del 1 al 999');

switch (num.length) {
  case 1: 
  alert('Es un digito');
  break;
  case 2:
    alert('es de 2 digitos');
  break;
  case 3:
    alert('es de tres digitos');
  break;
  default:
    alert('Error de ingreso')
}