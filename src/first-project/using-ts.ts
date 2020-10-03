const button = document.querySelector('button');
// Exclamation mark means that the result of the function cannot be null

// Typescript does not know which type of element getElementId will return
// and will complain about value not being a valid property. This can be fixed
// by typecasting to an HTMLInputElement that that always has an input property.

const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value));
});
