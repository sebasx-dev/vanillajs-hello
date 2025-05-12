import "bootstrap";
import "./style.css";



// Arrays con los valores y palos posibles
const palos = [
  { simbolo: "♦", clase: "diamond" },
  { simbolo: "♥", clase: "heart" },
  { simbolo: "♠", clase: "spade" },
  { simbolo: "♣", clase: "club" }
];

const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Esperamos que el DOM esté cargado para ejecutar todo
window.onload = () => {
  // Elegimos un palo y un valor al azar
  const palo = palos[Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];

  // Seleccionamos los elementos del DOM
  const card = document.querySelector(".card");
  const top = document.querySelector(".card-top");
  const value = document.querySelector(".card-value");
  const bottom = document.querySelector(".card-bottom");

  // Aplicamos la clase correspondiente al palo (color)
  card.className = "card " + palo.clase;

  // Insertamos el contenido en cada parte de la carta
  top.textContent = palo.simbolo;
  value.textContent = valor;
  bottom.textContent = palo.simbolo;
};
