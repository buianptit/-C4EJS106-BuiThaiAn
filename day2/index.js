// Review
// 3. Viết chương trình để in ra :
// a. 7 số,bắt đầu từ 0 :
// for ( let i = 0;i<=6;i++){
//     console.log(i);
// }
// b. n số,bắt đầu từ 0,n nhập bởi người dùng :
// let n = Number(prompt('Enter n number'));
// for(let i = 0;i <= n;i++){
//     console.log(i);
// }
// c. 1 dãy số,bắt đầu từ 3 và kết thúc trước n,n nhập bởi người dùng :
// let n = Number(prompt('Enter n'))
// for( let i = 3;i < n;i++){
//     console.log(i);
// }
// d. 1 dãy số,bắt đầu từ c,kết thúc trước n,c và n nhập bởi user :
// let c = Number(prompt('Enter c'));
// let n = Number(prompt('Enter n'));
// for(let i = c;i < n;i++){
//     console.log(i);
// }
// e. 1 dãy số,bắt đầu từ c,kết thúc trước n,bước nhảy là 3,c và n nhập bởi user :
// let c = Number(prompt('Enter c'));
// let n = Number(prompt('Enter n'));
// for(let i = c;i < n;i+= 3){
//     console.log(i);
// }
// f. 1 dãy số,bắt đầu từ c,kết thúc trước n,bước nhảy là s :
// let c = Number(prompt('Enter c'));
// let n = Number(prompt('Enter n'));
// let s = Number(prompt('Enter s'));
// for(let i = c;i < n;i += s){
//     console.log(i);
// }
// 4. Viết 1 chương trình để tính toán :
// let n = Number(prompt('Enter a number'));
// var a = 1;
// for (let i = 1; i <= n; i++) {
//     a = a * i;
// }
// alert(`The factorial of ${n} is ${a}`);
// 5. Viết chương trình hỏi tuổi user 
// let age = Number(prompt('How old are you?'));
// if(age < 14){
//     alert('Not old enough');
// }else{
//     alert('Enjoy !')
// }
// Serious exercices
// 6.
// let n = Number(prompt('Enter a number'));
// let x = 9/2;
// if( n <= x ){
//     alert('Lower half of 9');
// }else{
//     alert('Higher half of 9');
// }
// 7. 
// let n = Number(prompt('n ='));
// let halfOfN = n/2;
// let x = Number(prompt('x ='));
// if(x <= halfOfN ){
//     alert(`${x} is in lower half of ${n}`);
// }else{
//     alert(`${x} is in higher half of ${n}`);
// }
// 8. 
// let x = Number(prompt('x ='));
// if( x % 2 == 0){
//     alert(`${x} is an even number`);
// }else{
//     alert(`${x} is an odd number`);
// }
// 9. 
// a.
// let n = 6;
// for (let i = 1; i <= 6; i++){
//     if (i <= 3) {
//         console.log('L');
//     } else {
//         console.log('H');
//     }
// }
// b.
// let n = Number(prompt('Enter n'));
// let halfOfN = n/2;
// for( let i = 1;i <= n;i++){
//     if( i <= halfOfN){
//         console.log('L');
//     }else{
//         console.log('H');
//     }
// }
// c. 
// for ( i = 1;i <= 8;i++){
//     if(i % 2 != 0){
//         console.log(0);
//     }else{
//         console.log(1);
//     }
// }
// d.
// let n = Number(prompt('Enter n'));
// for ( i = 1;i <= n;i++){
//     if(i % 2 != 0){
//         console.log(0);
//     }else{
//         console.log(1);
//     }
// }
// 10. Viết kịch bản để tính toán BMI theo công thức :
let canNang = Number(prompt('Enter your weight in kg?'));
let chieuCao = Number(prompt('Enter your height in cm?'));
chieuCao = chieuCao / 100; 
let BMI = canNang / ( chieuCao * chieuCao);
BMI = Math.round(BMI *100) / 100;
BMI = BMI.toFixed(1);
alert(`Your BMI is ${BMI}`);
if(BMI < 16){
    alert('Severely underweight');
}else if(BMI >= 16 && BMI < 18.5){
    alert('Underweight');
}else if(BMI >= 18.5 && BMI < 25){
    alert('Normal');
}else if(BMI >= 25 && BMI < 30 ){
    alert('Overweight');
}else{
    alert('Obese');
}
