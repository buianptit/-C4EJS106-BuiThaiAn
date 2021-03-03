// Study
// 1. Đổi giá trị biến: ( Variable Swap )
// let a = 5;
// let b = 6;

// Cách 1 : Dùng biến tạm 
// let temp = a;
// a = b;
// b = temp;
// console.log(a,b);

// Cách 2 : Dùng Destructuring 
// [a,b] = [b,a];
// console.log(a,b);

// 2. Tách chuỗi thành mảng: ( Split String into Array )
// const myName = 'Bùi Thái An';
// console.log(myName);
// let myNameAfter = myName.split(''); // Phân tách chuỗi thành từng ký tự 
// console.log(myNameAfter);

// 3. Sử dụng toán tử 3 chấm: ( Three dots operator )
// const myArr = [1,2,3,5,6];
// console.log(myArr);
// console.log(...myArr); // In hết tất cả các phần tử lên cùng 1 dòng;

// 4. Viết 1 kịch bản theo yêu cầu đề bài :
// const shopItems = ['Jeans', 'T-Shirt', 'Socks']; // Khởi tạo mảng chứa các sản phẩm
// let userDemand = prompt('Hi there,welcome to shop admin panel,what do you want(C,R,U,D)?');
// if (userDemand.toUpperCase() === 'R') {
//     console.log('The current items are:');
//     for (let i = 0; i < shopItems.length; i++) {
//         console.log(`${i + 1}. ${shopItems[i]}`); // Hiển thị các phần tử trong mảng ( Bắt đầu từ 1 )
//     }
// } else if (userDemand.toUpperCase() === 'C') {
//     let newItem = prompt('Enter the name of the new item');
//     shopItems.push(newItem); // Thêm phần tử mới vào mảng
//     alert('Done');
//     userDemand = prompt('Hi there,welcome to shop admin panel,what do you want(C,R,U,D)?');
//     for (let i = 0; i < shopItems.length; i++) {
//         console.log(`${i + 1}. ${shopItems[i]}`);
//     }
// } else if (userDemand.toUpperCase() === 'U') {
//     let indexUpdate = Number(prompt('Enter the position you want to update'));
//     let nameUpdate = prompt('Enter the new name');
//     alert('Done');
//     shopItems[indexUpdate] = nameUpdate; // Cập nhật lại phần tử trong mảng
//     userDemand = prompt('Hi there,welcome to shop admin panel,what do you want(C,R,U,D)?');
//     for (let i = 0; i < shopItems.length; i++) {
//         console.log(`${i + 1}. ${shopItems[i]}`);
//     }
// } else if (userDemand.toUpperCase() === 'D') {
//     let indexDelete = Number(prompt('Enter the position you want to delete'));
//     alert('Done');
//     shopItems.splice(indexDelete,1);  // Xóa 1 phần tử từ vị trí được chọn trong mảng
//     userDemand = prompt('Hi there,welcome to shop admin panel,what do you want(C,R,U,D)?');
//     for (let i = 0; i < shopItems.length; i++) {
//         console.log(`${i + 1}. ${shopItems[i]}`);
//     }
// }
// else {
//     alert('This command is not supported');
// }

// Serious exercices
// 5. Người dùng nhập vào 1 dãy số,các số cách nhau bởi dấu phẩy.Tính tổng dãy số đó: ( Sum Of Array )
// let arrNumber = prompt('Nhập vào 1 dãy các số và cách nhau bởi dấu (,)');
// arrNumber = arrNumber.split(',');
// let sum = 0;
// for( let item of arrNumber ){
//     sum += Number(item);
// }
// alert(`The sum of them is ${sum}`);

// 6. Người dùng nhập vào 1 dãy số,các số cách nhau bởi dấu phẩy.Tìm số nhỏ nhất trong dãy số đó: ( Smallest Number of Array )
// Cách 1 : Dùng vòng lặp ( for loop )
// let arrNumber = prompt('Nhập vào 1 dãy các số và cách nhau bởi dấu (,)');
// arrNumber = arrNumber.split(',');
// let indexMin = 0; // Giả sử số nhỏ nhất là số đầu tiên trong mảng
// for( let i = 0;i < arrNumber.length;i++ ){
//     if( arrNumber[indexMin] > arrNumber[i] ){
//         indexMin = i;
//     }
// }
// alert(`The smallest number is ${arrNumber[indexMin]}`);

// Cách 2 : Dùng hàm Map và Math.min 
// let arrNumber = prompt('Nhập vào 1 dãy các số và cách nhau bởi dấu (,)');
// arrNumber = arrNumber.split(',');
// let arrNumber_2 = arrNumber.map(Number);
// console.log(arrNumber_2);
// let minNumber = Math.min(...arrNumber_2);
// alert( `The smallest number is ${minNumber} `);

// 7. Kiểm tra xem phần tử nhập bởi người dùng có tồn tại trong mảng đã tạo không,nếu có thì in ra chỉ số của nó ( Check the Number in Array and its index )
// const arr = [1, 2, 3, 4, 5, 6, 7];
// let numberChecked = Number(prompt('Enter a number'));
// // Cách 1 : Dùng vòng lặp ( for loop );
// let check; // Tạo 1 biến check để kiểm tra phần tử có tồn tại trong mảng hay không
// for (let item of arr) {
//     if (numberChecked === item) {
//         check = true;
//         break;
//     }
// }
// if (check == true) {
//     let indexNumb = arr.indexOf(numberChecked);
//     console.log(`${numberChecked} is found in my array at index ${indexNumb}`);
// } else {
//     console.log(`${numberChecked} is NOT found in my array`);
// }
// Cách 2 : Dùng hàm indexOf để kiểm tra
// let check = arr.indexOf(numberChecked);
// console.log(check);
// if( check === -1 ){
//     alert(`${numberChecked} is NOT found in my array`);
// }else {
//     alert(`${numberChecked} is found in my array at index ${check}`);
// }

// 8. Giả sử bạn là người chăn cừu và làm theo các yêu cầu sau :

// 8.1 Tạo 1 mảng lưu trữ size của các con cừu 
// const sheepFlock = [5,6,12,20,30];
// console.log(`Hello,my name is Thái An and here is my sheep sizes:
// \n${sheepFlock}`);

// // 8.2 Chọn ra 1 con có size lớn nhất 
// let maxSize = Math.max(...sheepFlock) // Sử dụng hàm Math.max;
// console.log(`Now my biggest sheep has size ${maxSize}, let's shave it`);

// // 8.3 Sau khi cạo lông,trả lại size cho con cừu lớn nhất là 8
// let indexMax = sheepFlock.indexOf(maxSize);
// sheepFlock[indexMax] = 8;
// console.log(`After shearing, here is my flock
// \n${sheepFlock}`);

// // 8.4 Trong tháng sau,mỗi con cừu đều tăng kích cỡ lên thêm 50
// let sheepFlock_2 = []
// for( let sheep of sheepFlock ){
//     sheep += 50;
//     sheepFlock_2.push(sheep);

// }
// console.log(`MONTH 1
// \nOne month has passed,my sheeps have grown, here are their sizes
// \n${sheepFlock_2}`);

// // 8.5 Làm tương tự với 4 tháng sau ( hoặc tùy bạn muốn )
// let month = Number(prompt('Enter the months you want:')); // Người dùng nhập vào số tháng muốn chọn
// for( let i = 2;i <= month;i++ ){
//     for( let i = 0;i < sheepFlock_2.length;i++ ){
//         sheepFlock_2[i] += 50; // Tăng tất cả size của bầy cừu lên thêm 50
//     }
//     console.log(`MONTH ${i}
//     \nOne month has passed,my sheeps have grown, here are their sizes
//     \n${sheepFlock_2}`);
//     let biggestSize = Math.max(...sheepFlock_2); // Tìm ra size lớn nhất trong mảng
//     console.log(`Now my biggest sheep has size ${biggestSize}, let's shave it`)
//     let indexMax = sheepFlock_2.indexOf(biggestSize); // Tìm ra chỉ số của con cừu có size lớn nhất trong mảng
//     sheepFlock_2[indexMax] = 8; // Update lại size của con cừu lớn nhất trong mảng thành 8
//     console.log(`After shearing, here is my flock
//     \n${sheepFlock_2}`);
// }

// // 8.6 Tính tổng size bầy cừu trong mảng rồi đem nhân với 2$ để ra tiền 
// let sumOfSizes = 0;
// for( let size of sheepFlock_2 ){
//     sumOfSizes += size;
// }
// console.log(`My flock has size in total: ${sumOfSizes}
// \nI would get ${sumOfSizes} * 2$ = ${sumOfSizes*2}`);

// Nice-to-do
// 10. Người dùng nhập vào 1 dãy các tên,cách nhau bởi dấu phẩy.Tạo 1 mảng mới chứa tên,mỗi tên bao quanh với dấu <> :

// Cách 1 : 
// let arrName = prompt('Enter a sequence of names');
// arrName = arrName.split(',');
// let arrName_2 = [];
// for( let item of arrName ){
//     item = `<${item}>`;
//     arrName_2.push(item)
// }
// alert(`${arrName} => ${arrName_2}`);

// Cách 2 : Dùng Array map function

// 11. Người dùng nhập vào 1 dãy các số,cách nhau bởi dấu phẩy.Tạo 1 mảng mới chứa các số lẻ từ dãy số ban đầu :

// Cách 1 :
// let arrNumber = prompt('Enter a sequence of number');
// arrNumber = arrNumber.split(',');
// let arrNumber_2 = []; 
// for (item of arrNumber) {
//     item = Number(item);
//     if (item % 2 !== 0) {
//         arrNumber_2.push(item);
//     }
// }
// alert(`${arrNumber} => ${arrNumber_2}`);

// Cách 2 : Dùng Array filter function 

// Extra ( CRUD )
// Tạo ra 1 danh sách các bạn trong lớp 
// Hỏi người dùng chọn thao tác ( C,R,U,D )
// Nếu người dùng chọn C = > Hỏi thêm học sinh nào ? => Thêm vào danh sách ?
// Nếu người dùng chọn R => Hỏi muốn xem học sinh ở vị trí bao nhiêu ? => alert tên của học sinh ở vị trí đó ?
// Chọn U => Hỏi xem muốn update học sinh ở vị trí bao nhiêu ? Thay đổi học sinh ở vị trí tương ứng ?
// Chọn D => Hỏi xem muốn xóa học sinh ở vị trí bao nhiêu ? Xóa học sinh ở vị trí tương ứng ?
// Chọn Q => Thoát chương trình và in ra danh sách lớp ?

// const arrPeople = ['Tài', 'Sơn', 'Đức', 'Duy']; // Khởi tạo mảng chứa tên mọi người
// while (true) {
//     let userDemand = prompt('Hãy chọn 1 trong các phím sau (C,R,U,D)');
//     if (userDemand.toUpperCase() == 'C') {
//         let newPeople = prompt('Nhập tên học sinh mới');
//         arrPeople.push(newPeople);
//         console.log(...arrPeople);
//         break;
//     } else if (userDemand.toUpperCase() == 'R') {
//         let peopleIndex = Number(prompt('Nhập vào vị trí của học sinh bạn muốn xem'));
//         alert(`Tên của học sinh ở vị trí ${peopleIndex} là: ${arrPeople[peopleIndex]}`);
//         break;
//     } else if (userDemand.toUpperCase() == 'U') {
//         let updateIndex = Number(prompt('Nhập vào vị trí của học sinh bạn muốn cập nhật lại'));
//         let updateName = prompt('Nhập vào tên của học sinh mới');
//         arrPeople[updateIndex] = updateName;
//         alert(`Tên của học sinh ở vị trí ${updateIndex} được cập nhật thành ${arrPeople[updateName]}`);
//         break;
//     } else if (userDemand.toUpperCase() == 'D') {
//         let deleteIndex = Number(prompt('Nhập vào vị trí của học sinh bạn muốn xóa đi'));
//         arrPeople.splice(deleteIndex,1);
//         alert(`Xóa thành công !
//         \nCác học sinh còn lại là: ${arrPeople}`);
//         break;
//     } else if (userDemand.toUpperCase() == 'Q') {
//         console.log(arrPeople);
//         break;
//     } else{
//         alert('Vui lòng nhập lại !')
//     }
// }














