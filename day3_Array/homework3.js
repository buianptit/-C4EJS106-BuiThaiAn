// 1. Đổi biến :
// js swap variable : dùng 2 cách để thay đổi giá trị của 2 biến cho nhau 
// let a = 5;
// let b = 6;
// console.log(a,b);
// C1 : Temporary variable - Đặt bằng 1 biến tạm
// let temp = a;
// a = b;
// b = temp;
// console.log(a,b);
// C2 : Destructuring assignment - Es6
// [a,b] = [b,a];
// console.log(a,b);

// 2. Tách chuỗi nhập vào thành mảng : Sử dụng hàm split
// const s = 'Hello Bùi Thái An';
// console.log(s);
// let newArr = s.split(' ');
// console.log(newArr);

// 3. Sử dụng toán tử (three dots): ...
// Toán tử ... in ra tất cả các item của 1 mảng lên cùng 1 hàng
// const a = [4,5,6,7];
// console.log(...a);
// console.log(a);

// Review
// 4. 
// var clothes = ['Jeans', 'T-shirt', 'Socks'];
// console.log(clothes);
// let request = prompt('Enter what do you want(C,R,U,D)');
// if (request.toLowerCase() == 'r') {
//     console.log('The current items are:')
//     for (let i = 0; i < clothes.length; i++) {
//         console.log(`${i + 1}. ${clothes[i]}`);
//     }
// }
// else if (request.toLowerCase() == 'c') {
//     let newItem = prompt('Enter the name of the new item');
//     clothes.push(newItem); // Thêm mới 1 phần tử vào cuối mảng do người dùng nhập vào
//     alert('Done');
//     prompt('Enter what do you want(C,R,U,D)');
//     console.log('The current items are:')
//     for (let i = 0; i < clothes.length; i++) {
//         console.log(`${i + 1}. ${clothes[i]}`);
//     }
// }
// else if(request.toLowerCase()== 'u') {
//     let updateI = Number(prompt('Enter the position you want to update ?'));
//     let updateName = prompt('Enter the new name');
//     alert('Done');
//     clothes[updateI - 1] = updateName; // Update phần tử ở vị trí mới với tên người dùng nhập vào
//     prompt('Enter what do you want(C,R,U,D)');
//     console.log('The current items are:')
//     for (let i = 0; i < clothes.length; i++) {
//         console.log(`${i + 1}. ${clothes[i]}`);
//     }
// }
// else if(request.toLowerCase()== 'd') {
//     let delPosition = Number(prompt('Enter the position you want to delete'));
//     alert('Done');
//     clothes.splice(delPosition - 1,1); // Xóa đi phần tử ở vị trí người dùng nhập vào 
//     prompt('Enter what do you want(C,R,U,D)');
//     console.log('The current items are:')
//     for (let i = 0; i < clothes.length; i++) {
//         console.log(`${i + 1}. ${clothes[i]}`);
//     }
// }else{
//     alert('This command is not supported');
// }

// Serious exercices
// 5. Tính tổng các số trong mảng do người dùng nhập vào :
// let tempArr = prompt('Enter a sequence of Number, separated by commas (,)');
// let arrNumber = tempArr.split(',');
// let tong = 0;
// // console.log(arrNumber);
// for( let item of arrNumber ){
//     tong += Number(item);
// }
// console.log(tong);

// 6. Tìm số bé nhất trong mảng do người dùng nhập vào :
// let tempArr = prompt('Enter a sequence of Number, separated by commas ","');
// let arrNumber = tempArr.split(',');
// let minNum = 0;
// for( let i = 0;i < arrNumber.length;i++){
//     if(arrNumber[minNum] > arrNumber[i]){
//         minNum = i;
//     }
// }
// console.log(arrNumber[minNum]);

// 7. Kiểm tra 1 số có tồn tại trong mảng hay không do người dùng nhập vào :
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let checkedNumber = Number(prompt('Enter a number '));
// if(arr.includes(checkedNumber)){
//     alert(`${checkedNumber} is FOUND in my array at index ${arr.indexOf(checkedNumber)}`);
// }else{
//     alert(`${checkedNumber} is  NOT FOUND in my array`);
// }
// => Sử dụng hàm includes để check xem số nhập vào có tồn tại trong mảng đã tạo không và dùng hàm indexOf để hiển thị index của số vừa nhập ở trong mảng đã cho

// 8.1 Tạo 1 mảng lưu kích thước các con cừu trong bầy cừu và ỉn ra :
// const myFlock = [5,26,30,20,10,25];
// console.log('Hello,my name is Thái An and here is my sheep sizes:');
// console.log(...myFlock);

// 8.2 Vào cuối tháng,chọn ra con cừu có size lớn nhất và cạo lông cho nó :
// let maxNumber = 0;
// for( let i = 0;i < myFlock.length;i++ ){
//     if(myFlock[maxNumber] < myFlock[i]){
//         maxNumber = i;
//     }
// }
// console.log(`Now my biggest sheep has size ${myFlock[maxNumber]},let's shave it`);

// 8.3 Trả lại kích thước lớn nhất về 8 ( Sử dụng hàm indexOf );
// var indexMax = myFlock.indexOf(myFlock[maxNumber]);
// myFlock[indexMax] = 8;
// console.log(`After shearing,here is my flock :`);
// console.log(...myFlock);

// 8.4 + 8.5 Qua các tháng thì kích thước cừu tăng lên 50,hãy in chúng ra :
// let wantedMonth = 4;
// for(let a = 1;a <= wantedMonth;a++){
//     console.log(`MONTH ${a}`);
//     console.log('One month has passed,my sheep have grown,here are their sizes :');
//     for ( let b = 0;b < myFlock.length;b++){
//         myFlock[b] += 50;
//     }
//     console.log(...myFlock);
// }
// 8.6 Tính tổng số size của bầy cừu và nhân với 2$ để ra tiền :
// let totalSize = 0;
// for ( let item of myFlock ){
//     totalSize += item;
// }
// console.log(`My flock has size in total: ${totalSize}`);
// console.log(`I would get ${totalSize} * 2$ = ${totalSize*2}`);

// Nice-to-do
// 10. 
// let tempName = prompt('Enter a sequence of names');
// let sequenceName = tempName.split(',');
// C1 
// let emptyArr =[];
// for ( let i = 0;i < sequenceName.length;i++){
//     emptyArr[i] = `<${sequenceName[i]}>`;
// }
// alert(`${sequenceName} => ${emptyArr}`);
// C2 Array map function
// 11.
let tempNumber = (prompt('Enter a sequence of number'));
let sequenceNumber = tempNumber.split(',');
// C1 
let tempArr = [];
for( let i = 0;i < sequenceNumber.length;i++ ){
    if(sequenceNumber[i] % 2 != 0){
        tempArr.push(sequenceNumber[i]);
    }
}
alert(`${sequenceNumber} => ${tempArr}`);
// C2 Array filter function

