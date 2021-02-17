// Study :
// 1. Chèn phần tử lân cận vào HTML :
// const container = document.getElementById('list');
// for(let i = 0; i < 3; i++) {
//   container.insertAdjacentHTML('beforeend', `<li>${i}</li>`)
// }
// Syntax : element.insertAdjacentHTML(position, text);
// 1 - d; 2 - a; 3 - c; 4 - b
/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
// 2. Sử dụng hàm setInterval thay cho hàm setTimeOut :\
// setTimeout( function sayHello(){ 
//     console.log('Hello');
// }, 3000);
// setTimeout() Thiết lập thời gian để thực hiện 1 nhiệm vụ duy nhất 1 lần
// let x = setInterval(() => {
//     console.log('Hello');
//     clearInterval(x); 
// },1000);
// clearInterval() sẽ xóa đi nhiệm vụ đã thiết lập trong hàm setInterval()
// setInterval() Thực hiện 1 nhiệm vụ liên tục cách nhau 1 khoảng thời gian

// 3. Phạm vi của biến được khai báo bởi let và var trong 1 function :
// 3.1 
// function userInfo (name,age){
//     let weight = 60;
//     console.log(`User Info :
//     \n Name: ${name}
//     \n Age: ${age}
//     \n Weight: ${weight}`);
// }
// userInfo('An',21);
// console.log(weight);
// => Biến được khai báo trong 1 hàm bởi cả let và var thì phạm vi sử dụng của nó chỉ tồn tại trong hàm đó ( Function Scope );

// 4. DOM ( Read by TagName ) 
// let theLiAll = document.getElementsByTagName('li');
// console.log(theLiAll[0].innerHTML); // In ra phần tử đầu tiên 
// for( let item of theLiAll ){
//     console.log(item.innerHTML);
// }

// 5. DOM ( Read by ClassName )
// let theDiv = document.getElementsByClassName('singer');
// console.log(theDiv[1].innerHTML); // In ra phần tử thứ hai
// for( let item of theDiv ){
//     console.log(item.innerHTML);
// }

// 6. Remove ( Delete ) an HTML Element :
// let removeEle = document.getElementById('p1');
// removeEle.remove();

// 7. Sử dụng addEventListener :
// 7.1 
// let btn1 = document.getElementById("button1");
// console.log(btn1);
// let btn2 = document.getElementById("button2");
// console.log(btn2);
// btn1.addEventListener('click', (e) => {
//   console.log(e.target);
// });
// btn2.addEventListener('click', (e2) => {
//   console.log(e2.target);
// })
// => Trả về toàn bộ thẻ HTML đó
// 7.2 
// let inp1 = document.getElementById('input1');
// inp1.addEventListener('keydown', (e3) => {
//   console.log(e3.key);
// })
// => Trả về nội dung nhập vào trong thẻ input đó

// Review :
// 8. Viết hàm,sử dụng alert để in ra tên và 1 điều ước trong năm :
// var userInfo  = () => {
//     alert('My name is An and i wish to go shopping in this year');
// }
// userInfo();

// 9. Viết hàm,sử dụng alert để in ra user's name và user's wish ( name và wish là các tham số trong hàm )
// let userName = prompt('Enter your name ?');
// let userWish = prompt('Enter your wish this year ?')
// let userInfo = (name,wish) => {
//     alert(`My name is ${name} and i wish to ${wish} this year`);
// }
// userInfo (userName,userWish);

// 10. Viết hàm,sử dụng alert để in ra user's name và user's wish ( name và wish là các tham số trong hàm ),xử lý trường hợp thiếu điều ước trong tham số hàm :
// let userName = prompt('Enter your name ?');
// let userWish = prompt('Enter your wish this year ?');
// let userInfo = (name ,wish) => {
//     // C1 : Dùng if/else  
//     // if(wish == undefined || wish == null)
//     // {
//     //     alert(`My name is ${name} and i don't want to do anything in this year`);
//     // }else{
//     //     alert(`My name is ${name} and i wish to ${wish} this year`);
//     // }
//     // C2 : Dùng toán tử ba ngôi 
//     wish = wish == undefined ? 'nothing to do' : userWish;
//     alert(`My name is ${name} and i wish to ${wish} this year`);
// }
// userInfo(userName,userWish);

// 11. In ra tên người dùng viết hoa khi họ nhập vào input :
// let btn = document.getElementById('upper_btn');
// let inp = document.getElementById('name_input');
// let theDiv = document.getElementById('result_div');
// btn.addEventListener('click', () => {
//   let userName = inp.value;
//   console.log(userName);
//   userName = userName.toUpperCase();
//   console.log(userName);
//   theDiv.innerHTML = userName;
// })

// Serious exercices
// 12.
let items = ['Backpack', 'Miband watch', 'Ring']; // Tạo Mảng chứa dữ liệu của các items
// console.log(items);
let listItem = document.getElementById('item_list_ul'); // Đọc thẻ ul ( Chứa các thẻ li );
// console.log(listItem);
addItemtoHtml = itemName => {
  listItem.insertAdjacentHTML("beforeend", `<li><span>${itemName}</span><button>Remove</button></li>`)
}
for( let item of items ){
  addItemtoHtml(item);
}
deleteEle = element => {
  // Xóa phần tử trong CSDL :
  items.splice(items.indexOf(element.firstChild.innerHTML),1);
  // Xóa bên HTML :
  element.remove();
  console.log(`Item: ${element.firstChild.innerHTML} was removed`); // Kiểm tra đã xóa phần tử đó chưa
  console.log(items) // Hiển thị lại CSDL
}
let theLiAll = listItem.getElementsByTagName('li');
// Gán sự kiện cho mỗi nút remove :
for( let item of theLiAll ){
  item.lastChild.addEventListener('click', () =>{
    deleteEle(item);
  })
}
// 
addItem = () => {
  let newItem = document.getElementById('item_input').value;
  items.push(newItem);
  addItemtoHtml(newItem);
  console.log(`Item ${newItem} added`);
	console.log(items);
  
  let newElement = theLiAll[theLiAll.length - 1];
		newElement.lastChild.addEventListener('click', () => {
			deleteEle(newElement);
		});
}
let btn = document.getElementById('add_btn');
	btn.addEventListener('click', () => {
		addItem();
  });