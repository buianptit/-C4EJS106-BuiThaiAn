// ICRUD
// Init (after 2) : Khởi tạo
// Khởi tạo 1 mảng tên movies chứa tiêu đề các bộ phim bạn thích :
// var movies = ['starWar','batMan','superMan'];
// console.log(movies);
// Create (after 4) : Thêm mới
// Thêm phần tử mới tên newMovie vào cuối mảng movies vừa khởi tạo,newMovie được nhập vào bởi user
// let newMovie = prompt('Enter new movie');
// movies.push(newMovie);
// console.log(movies);
// Read (after 5) : Đọc 
// Đọc phần tử ở vị trí thứ i ở trong mảng phim,i nhập bởi user :
// let i = prompt('Enter i (i is a number)');
// console.log(movies[i]);
// Update (after 6) : Cập nhật 
// 1 Cập nhật item đầu tiên của mảng movies bằng movieTitle, movieTitle nhập bởi users :
// movies[0]  = prompt('Enter movie title');
// console.log(movies);
// 2 Cập nhật 1 phần tử ở vị trí thứ i ở trong mảng movies bằng movieTitle,movieTitle và i nhập bởi user :
// let movieTitle = prompt('Enter movie title');
// let i = Number(prompt('Enter i ='));
// movies[i] = movieTitle;
// console.log(movies);
// Delete (after 7) : Xóa 
// 1. Xóa 1 phần tử ở vị trí i từ mảng movies,i nhập bởi user :
// let i = Number(prompt('Enter i ='));
// movies.splice(i,1);
// console.log(movies);
// 2. Xóa n phần tử ở vị trí i từ mảng movies,i nhập bởi user :
// let i = Number(prompt('Enter i ='));
// let n = Number(prompt('Enter n ='));
// movies.splice(i,n);
// console.log(movies);
// Read All (after 10) : Đọc tất cả 
// 1. Đọc hoặc in ra tất cả các phần tử trong mảng movies :
// for ( let i = 0;i < movies.length;i++){
//     console.log(movies[i]);
// }
// 2. Đọc hoặc in ra 1 nửa các phần tử trong mảng movies :
// movies.push('lastNight');
// for ( let i = 0;i < (movies.length)/2;i++){
//     console.log(movies[i]);
// }
// 3. Đọc hoặc in ra tất cả các phần tử trong mảng movies với vị trí của nó :
// for ( let i = 0;i < movies.length;i++){
//     console.log(`${i}. ${movies[i]}`);
// }
// Update All: (after 11) : Cập nhật tất cả
// Thay đổi tất cả phần tử của mảng phim thành chữ thường :
// for ( let i = 0;i < movies.length;i++){
//         console.log(movies[i].toLowerCase());
// }

// Purpose of While (after 14) : Sử dụng while
// JS check String length : Kiểm tra độ dài của 1 chuỗi 
// let userName = String(prompt('Enter your full name :'));
// if( userName.length > 15 ){
//     alert('Your username is too long');
// }else{
//     alert('Good username');
// }

// Multiple choice, for example:
// C1 : Sử dụng if/else 
// let ansQuiz = Number(prompt('How many legs does a spider have? \n 1.None \n 2.4 legs \n 3.8 legs \n 4.12 legs'));
// if(ansQuiz == 1 || ansQuiz == 2 || ansQuiz == 4 ){
//     // alert('Haha,please choose the right answer :')
//     let reAnswer = Number(prompt('Haha,please choose the right answer :'));
//     if( reAnswer == 3){
//         alert('Bravo, you are correct');
//     }else{
//         alert('Wrong ! The answer is 3.8 legs');
//     }
// }else{
//     alert('Bravo, you are correct');
// }

// C2 :  Sử dụng while 
alert('How many legs does a spider have? \n 1.None \n 2.4 legs \n 3.8 legs \n 4.12 legs');
let answer = prompt('Enter your choice:');
while(answer != 3){
    alert('Haha,choose again');
    answer = prompt('Enter your choice:');
}
alert('Bravo, you are correct');

// BT thêm:
// Người dùng nhập n số nguyên ngẫu nhiên từ bàn phím. 
// let tempArr = prompt('Enter a sequence of Number (,)');
// let numberArr = tempArr.split(',');
// console.log(numberArr);

// a.	Sắp xếp dãy vừa nhập theo chiều tăng dần :
// a > b hay a < b thì return a - b : a before b | Sắp xếp mảng theo thứ tự tăng dần
// return b - a : a after b | Sắp xếp mảng theo thứ tự giảm dần

// let ascendingArr = numberArr.sort(function (a, b) {
//     return (a - b);
// })
// console.log(ascendingArr);

// b.	Lọc dãy trên thành 2 dãy: dãy chẵn và dãy lẻ :
// let evenArr = [];
// let oddArr = [];
// for (let item of numberArr) {
//     if (item % 2 == 0) {
//         evenArr.push(item);
//     } else {
//         oddArr.push(item);
//     }
// }
// console.log(evenArr);
// console.log(oddArr);
// c.	Loại bỏ các số trùng nhau ở 2 dãy :
// C1 : Dùng set : uniq = [...new Set(array)];
// let uniqueEvenArr = [...new Set(evenArr)];
// console.log(uniqueEvenArr);
// C2 : 
// for (i = 0; i < numberArr.length; i++) {
//     if (oddArr[i] == oddArr[i + 1]) {
//         oddArr.splice(i, 1);
//     }
//     if (evenArr[i] == evenArr[i + 1]) {
//         evenArr.splice(i, 1);
//     }
// }
// alert(`Delete the duplicate: \n =>Even: ${evenArr} \n =>Odd: ${oddArr}`);

