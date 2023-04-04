const Name = prompt("Come ti chiami?");
const lastName = prompt("Qual è il tuo cognome?");
const color = prompt("Qual è il tuo colore preferito?");

let password = Name + lastName + color;  


let elementSpan = document.getElementById("result");

elementSpan.innerHTML = password + "23";
