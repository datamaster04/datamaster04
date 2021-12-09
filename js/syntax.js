const dateNumber = date => date.getFullYear() + (date.getMonth() + 1) / 12 + date.getDay() / 365.25;

const now = new Date(Date.now())
const birthDate = new Date('2004/06/13 04:25 PM');

const age = Math.floor(dateNumber(now) - dateNumber(birthDate));

document.getElementById("age").innerText = "Alder: " + age;

console.log(age)