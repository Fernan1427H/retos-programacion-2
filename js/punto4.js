const num1 = parseInt(prompt('ingrese un numero'));
const num2 = parseInt(prompt('ingrese un numero'));
const num3 = parseInt(prompt('ingrese un numero'));

if (num1 > num2 && num1 > num3) {
  alert(`El nayor es: ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  alert(`El mayor es: ${num3}`);
} else if (num3 > num1 && num3 > num2) {
  alert(`El mayor es: ${num2}`);
}