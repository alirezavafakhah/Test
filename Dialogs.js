'use strict'

alert('Show Message')

console.log(confirm('Question, Do You want Continue?'));
console.log(prompt('Whats Your Name?'));


document.querySelector("#h2class").onclick= function (){
    alert('fgfg')
};

let gethe2= document.getElementById('h2class');
gethe2.onmouseenter = function (event){
    event.target.style.backgroundColor='green';
};

gethe2.onmouseleave = function (event){
    event.target.style.backgroundColor='white';
};

// document.getElementById("h2class").onclick= function (){
//     alert('fgfg')
// };