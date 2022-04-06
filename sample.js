'use strict'
//
// let p = 300;
// let arr = [14,59,64,47];
//
// function samplef() {
//
//
//     for (let i = p; i > 0 ; i--) {
//         if (i % 2 ===0)
//             console.log(i)
//
//     };
//
//
// }
//
// var k;
// var b = 0;
//
// arr.forEach(function myfun(item){
//      b+=item
// })
//
//
// console.log(b)
// // samplef();
//
//
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)
//
// function myFunction(item, index, arr) {
//     arr[index] = item * 10;
// }
//
// console.log(numbers)
//


// try {
//     // b=10;
//      getSelection();
// } catch (e) {
//     console.log(e.name + '  '+ e.message);
// }


try {
    if (true){
        // throw 'Display error as string'
        throw {name:'Simple error', message:'Become error'}
    }

} catch (e) {
    // console.log(e); // show error as string
    console.log(e.name + ' ' + e.message)
} finally {

}