// const form = [
//   prompt('Ваша фамилия:').trim(),
//   prompt('Ваше имя:').trim(),
//   prompt('Ваше отчество:').trim(),
//   Number(prompt('Ваш возраст:').trim()),
//   confirm('Ваш пол: если Мужской(ОК) \ если Женский(ОТМЕНА):') ];

let surname;
let name;
let patronymic;
let age;
let gender;

while (true) {
  surname = prompt("Ваша фамилия:");
  if (surname && isNaN(surname) == true) break;
  alert("Введите пожалуйста вашу фамилию:");
}

while (true) {
  name = prompt("Ваше имя:");
  if (name && isNaN(name) == true) break;
  alert("Введите пожалуйста ваше имя:");
}

while (true) {
  patronymic = prompt("Ваше отчество:");
  if (patronymic && isNaN(patronymic) == true) break;
  alert("Введите пожалуйста ваше отчество:");
}

while (true) {
  age = prompt("Ваш возраст:");
  if (Number(age)) break;
  alert("Введите пожалуйста ваш возраст:");
}

gender = confirm("Ваш пол: если Мужской(ОК)  если Женский(ОТМЕНА):");

alert(
  "Ваша Фамилия: " +
    surname +
    "\n" +
    "Ваше имя: " +
    name +
    "\n" +
    "Ваше отчество: " +
    patronymic +
    "\n" +
    "Ваш возраст в годах:" +
    age +
    "\n" +
    "Ваш  возраст в днях: " +
    age * 365 +
    "\n" +
    "Через 5 лет Вам будет: " +
    (Number(age) + 5) +
    "\n" +
    "Ваш пол: " +
    (gender ? "мужской" : "женский") +
    "\n" +
    "Вы на пенсии: " +
    (age >= 65 ? "да" : "нет")
);

// alert('ФИО: ' + form[0] + ' ' + form[1] + ' ' + form[2] + '\n' +
//             'Ваш полный возраст в годах: ' + form[3] + '\n' +
//             'Ваш полный возраст в днях: ' + (form[3] * 365) + '\n' +
//             'Через 5 лет Вам будет: ' + (form[3] + 5) + '\n' +
//             'Ваш пол: ' + ((form[4]) ? 'мужской' : 'женский') + '\n' +
//             'Вы на пенсии: ' + ((form[3]) >= 65 ? 'да' : 'нет'));
