/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello everyone!");

// Run this function after the page is loaded
document.addEventListener("DOMContentLoaded", function(){
    console.log("This is Ollie's World!")
});

// Button function
const btn = document.querySelector('.button');

btn.addEventListener('click', function(event){
  console.log('Woof! Woof! Woof!');
  btn.style.backgroundColor = "#F3E7B5";
  alert("Ollie Says HI!");
});

