let fecha = prompt('ingrese una fecha ej: 2021-03-25')

const fechaConv = new Date(fecha);

if(fechaConv.getDate() === 26 && fechaConv.getMonth() === 11) {
  alert('Feliz navidad')
} else{
  alert('siga participando')
}