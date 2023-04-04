const userName = prompt("come ti chiami?");
const lastName = prompt("qual'e il tuo cognome?");
const color = prompt("qual'e' il tuo colore preferito?");

let password = userName + lastName + color;  


let elementSpan = document.getElementById("result");

elementSpan.innerHTML = password;
