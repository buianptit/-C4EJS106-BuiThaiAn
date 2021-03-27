// Study

// 1. Sử dụng insertAdjacentHTML :
// const container = document.getElementById('list');
// for(let i = 0; i < 3; i++) {
//   container.insertAdjacentHTML('afterend', `<li>${i}</li>`)
// }

/*
1.beforebegin - D
2.afterbegin - A
3.beforeend - C
4.afterend - B
*/

// 2. Sử dụng hàm setInterval : setInterval ( expression, interval );
// let myFunction = setInterval(sayHi, 1000);
// function sayHi() {
//   console.log('Hello World');
// }

// 3. Scope Variable :
// 3.1 Biến được khai báo,khởi tạo với let ở trong 1 function thì khi function đó kết thúc nó sẽ không tồn tại
// 3.2 Biến được khai báo,khởi tạo với var ở trong 1 function thì khi function đó kết thúc nó sẽ không tồn tại
// => Biến được khai báo ở trong 1 function thì được gọi là biến cục bộ ( chỉ có phạm vi sử dụng trong function đó)

// 4. DOM Read by TagName :
// let theLi = document.getElementsByTagName('li');
// console.log(theLi);
// for( let item of theLi ){
//   console.log(item);
// }

// 5. DOM Read by ClassName :
// let theDiv = document.getElementsByTagName('div');
// console.log(theDiv);
// console.log(theDiv[2]);
// for(let item of theDiv ){
//   console.log(item);
// }

// 6. Sử dụng remove() để xóa phần tử :
// let btn = document.getElementById('btn-6');
// let theP = document.getElementById('theP-6');
// console.log(theP);
// btn.addEventListener('click',function(){
//   theP.remove();
// })

// 7.

// Review

// 8. Viết hàm sử dụng alert để in ra tên bạn và 1 điều bạn ước sẽ làm trong năm nay
// let mywish = () => {
//     alert('Hello my name is An,i wish to go to school this year');
// }
// mywish();

// 9. Viết hàm sử dụng alert để in ra tên user và 1 điều họ ước sẽ làm trong năm nay(name,wish là tham số truyền vào)
// let userName = prompt('Nhập vào tên của bạn ?');
// let userWish = prompt('Nhập vào 1 điều bạn muốn làm trong năm nay?');
// let wishOfUser = (name,wish) => {
//     alert(`My name is ${name} and i wish to ${wish} this year`);
// }
// wishOfUser(userName,userWish);

// 10. Tương tự bài 9,xử lý trường hợp không truyền vào tham số wish;
// let userName = prompt('Nhập vào tên của bạn ?');
// let userWish = prompt('Nhập vào 1 điều bạn muốn làm trong năm nay?');
// let wishOfUser = (name,wish = 'stay at home') => {
//     alert(`My name is ${name} and i wish to ${wish} this year`);
// }
// wishOfUser(userName);

// 11.
// Đọc thẻ :

// let myInput = document.getElementById('input-11');
// let myBtn = document.getElementById('btn-11');
// let theH3 = document.getElementById('the-h3');
// Xử lý yêu cầu : Chuyển đổi tên người dùng thành chữ hoa

// myBtn.addEventListener('click',()=> {
//   theH3.innerHTML = myInput.value.toUpperCase();
// })

// Serious exercices
// 12. Thêm và xóa sản phẩm khỏi database ( array ) và hiển thị lên HTML :
// Tạo mảng gốc chứa tên các sản phẩm ( Database ) :
let items = ['Backpack', 'MiBand watch', 'Ring'];
// Đọc thẻ cha ul chứa các thẻ con li :
let theUl = document.getElementById('item_list_ul');
// Tạo hàm hiển thị các sản phẩm lên HTML :
let addItemToHtml = (itemName) => {
  theUl.insertAdjacentHTML('beforeend', `<li><span>${itemName}</span><button>Remove</button></li>`,);
}
// Hiển thị sản phẩm đang có lên HTML :
for (let product of items) {
  addItemToHtml(product);
}
// Đọc tất cả thẻ Li đang có :
let listOfLi = theUl.getElementsByTagName('li');

// Tạo hàm xóa sản phẩm ( trong database và giao diện HTML ) :
let deleteItem = (item) => {
  // Xóa trong database :
  items.splice(items.indexOf(item.firstChild.innerHTML), 1);
  // Xóa bên HTML :
  item.remove();
  // Thông báo cho người dùng biết :
  alert(` Sản phẩm: ${item.firstChild.innerHTML} đã được xóa
 Sản phẩm còn lại là: ${items}`);
}

// Gắn sự kiện cho từng nút remove của các thẻ li :
for (let theLi of listOfLi) {
  theLi.lastChild.addEventListener('click', () => {
    deleteItem(theLi);
  })
}
// Tạo hàm thêm sản phẩm ( Trong database và giao diện HTML ) :
let addProduct = () => {
  let newItem = document.getElementById('item_input').value;
  if (newItem == null || newItem == '') {
    alert('Vui lòng nhập vào sản phẩm ');
    // return;
  }
  else {
    // Thêm vào database :
    items.push(newItem);
    // Hiển thị lên HTML :
    addItemToHtml(newItem);
    // Gắn sự kiện cho nút remove của sản phẩm mới :
    let newProduct = listOfLi[listOfLi.length - 1];
    newProduct.lastChild.addEventListener('click', () => {
      deleteItem(newProduct);
    })
  }
}
// Gắn sự kiện cho nút Add :
document.getElementById('add_btn').addEventListener('click', () => {
  addProduct();
  // Reset nội dung trong ô input :
  document.getElementById('item_input').value = '';
})