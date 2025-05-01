import "bootstrap";
import "./style.css";



window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function getRanndomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  } 

  let excusa = `${getRanndomElement(who)} ${getRanndomElement(action)} ${getRanndomElement(what)} ${getRanndomElement(when)}`;

  document.getElementById("excusa").innerHTML = excusa

};
