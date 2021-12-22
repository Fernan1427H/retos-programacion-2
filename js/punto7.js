const cantidadPreguntas = prompt('Preguntas realizadas');
const cantidadPreguntasRespo = prompt('Preguntas contestadas correctamente')

const resultado = (cantidadPreguntasRespo * 100)/cantidadPreguntas
if(resultado >= 90)  alert('nivel maximo')