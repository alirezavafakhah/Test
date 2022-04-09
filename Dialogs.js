'use strict'

alert('Show Message')

console.log(confirm('Question, Do You want Continue?'));
console.log(prompt('Whats Your Name?'));


// با استفاده از eventhandle
// document.querySelector("#h2class").onclick= function (){
//     alert('fgfg')
// };
//
// let gethe2= document.getElementById('h2class');
// gethe2.onmouseenter = function (event){
//     event.target.style.backgroundColor='green';
// };
//
// gethe2.onmouseleave = function (event){
//     event.target.style.backgroundColor='white';
// };

// document.getElementById("h2class").onclick= function (){
//     alert('fgfg')
// };


// // با استفاده از event listner
// let geth2 = document.getElementById('h2class');
//
// geth2.addEventListener('click', function (){
//     alert('by listner')
// });
//
// geth2.addEventListener('click', function (){
//     alert('by listner 2')
// });


let el1 = document.querySelector('.el1');
let el2 = document.querySelector('.el2');


el1.addEventListener('click', function (event) {

    console.log('Shape Father Click');
});


// el2.addEventListener('click', function (e) {
//     // کد زیر باعث میشود زمانیکه ایونت المنت پدر فراخوانی شد،ایونت فرزند اجرا نشود
//     e.stopPropagation();
//     console.log('Shape Child Click');
// });


document.querySelector('#link').addEventListener('click', function (e){
    // باعث میشود کد ایونت اجرا نشود،پس لینک بارگذاری نمیشود
    e.preventDefault();
    console.log("clicked and don't run" );
})

el2.addEventListener('click', ele2fun);

//شکل دیگر
function ele2fun(e) {
    // کد زیر باعث میشود زمانیکه ایونت المنت پدر فراخوانی شد،ایونت فرزند اجرا نشود
    e.stopPropagation();
    console.log('Shape Child Click');
};


// کد زیر پس از 10 ثانبه ایونت را پاک میکند
setTimeout(() =>{
    el2.removeEventListener('click',ele2fun);
}, 10000)


