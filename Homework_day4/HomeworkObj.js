// Study
// 1. For and Object :
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
// };
// for (let x in product) {
//     console.log(x);
// }
// 1.1 x là thuộc tính (property) của object: product
// 1.2 Sử dụng vòng lặp để in ra theo mẫu : ( Mặc định property là 1 string )
// for (let property in product) {
//     console.log(`${property}: ${product[property]}`);
// }

// 2. Destructuring Object (ES6) :
// Sử dụng 1 dòng để destructure chứa subject, dueDate và assignTo từ object này :
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
// };
// let {subject,dueDate,assignTo} = task;
// console.log(subject,dueDate,assignTo);
// // Kết hợp với toán tử rest ( Dấu ... );
// // Xóa đi 1 key của Object mà không dùng đến delete :
// let {createdBy,...newObj} = task;
// console.log(newObj);

// Review
// 4. Khởi tạo 1 object để giới thiệu từ điển với key và value cho sẵn trong bảng :
// let dictionary = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for ‘error’',
//     pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//     'ui/ux': 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
// };
// 4.1 Viết kịch bản mô phỏng việc tra cứu các thuộc tính trong object ( Từ điển ) :
// alert('Hi there,this is dev dictionary');
// let keyWord = prompt('Enter a keyword');
// let check; // Dùng cờ hiệu
// for (let property in dictionary) {
//     if (property == keyWord) {
//         check = true;
//         break;
//     }
// }
// if (check) {
//     alert(`${keyWord}
//     \n${dictionary[keyWord]}`);
// }
// else {
//     alert(`We could not find your word: ${keyWord}`);
// }

// 4.2 Nâng cấp từ điển để người dùng đóng góp thêm key và value cho nó :
// alert('Hi there,this is dev dictionary');
// let keyWord = prompt('Enter a keyword');
// let check; // Dùng cờ hiệu
// for (let property in dictionary) {
//     if (property == keyWord) {
//         check = true;
//         break;
//     }
// }
// if (check) {
//     alert(`${keyWord}
//     \n${dictionary[keyWord]}`);
// }
// else {
//     let explanation = prompt(`We could not find your word: ${keyWord}, leave your explanation`);
//     alert('Done');
//     alert(`${keyWord}
//     \n${explanation}`);
// }

// 5.Khởi tạo 1 biến tên products,chứa 1 mảng là các sản phẩm,mỗi sản phẩm có các thuộc tính trong bài :
// let products = [
//     {
//         '#': 1,
//         name: 'Xiaomi portable charger 20000mah',
//         brand: 'Xiaomi',
//         price: 428,
//         color: 'White',
//         category: 'Charger',
//     },
//     {
//         '#': 2,
//         name: 'VSmart Active 1',
//         brand: 'Vsmart',
//         price: 5487,
//         color: 'Black',
//         category: 'Phone',
//     },
//     {
//         '#': 3,
//         name: 'Iphone X',
//         brand: 'Apple',
//         price: 21490,
//         color: 'Gray',
//         category: 'Phone',
//     },
//     {
//         '#': 4,
//         name: 'Samsung Galaxy A9',
//         brand: 'Samsung',
//         price: 8490,
//         color: 'Blue',
//         category: 'Phone',
//     }
// ];
// console.log(Object.getOwnPropertyNames(products[0]));

// 5.1 In ra name và price của tất cả sản phẩm :
// for( let obj of products ){
//     console.log(`Name: ${obj.name}`);
//     console.log(`Price: ${obj.price}`);
// }

// 5.2 In ra tất cả sản phẩm với tên của nó,sau đó in ra chi tiết sản phẩm với thứ tự được nhập vào bởi người dùng :
// for( let obj of products ){
//     console.log(`#${obj['#']}. ${obj.name}`);
//     console.log(`    Price: ${obj.price}`);
// }
// let position = Number(prompt('Enter product position'));
// for( let obj of products ){
//     if( obj['#'] == position ){
//         console.log(`Name: ${obj.name}`);
//         console.log(`Brand: ${obj.brand}`);
//         console.log(`Price: ${obj.price}`);
//         console.log(`Color: ${obj.color}`);
//         console.log(`Category: ${obj.category}`);
//     }

// }

// 5.3 In ra sản phẩm dựa trên category nhập bởi user :
// let category = prompt('Enter your category');
// for( let obj of products ){
//     if( obj.category == category ){
//         console.log(`----------------------
//         \nName: ${obj.name}
//         \nPrice: ${obj.price}`)
//     }
// }

// 5.4 Thêm người cung cấp cho mỗi sản phẩm theo mẫu và in ra tất cả sản phẩm :
// products[0]['Providers'] = ['Phukienzero', 'Dientuccc'];
// products[1]['Providers'] = ['Tgdd', 'Ddghn', 'VhStore'];
// products[2]['Providers'] = 'Tgdd';
// products[3]['Providers'] = 'Tgdd';
// console.log(products[1]['Providers']);
// for( let obj of products ){
//     console.log(obj);
// }

// 5.5 In ra sản phẩm dựa trên provider nhập bởi user :
// let searchProvider = prompt('Enter provider');
// for (let obj of products) {
//     var check;
//     // Sử dụng indexOf để tìm chuỗi trong mảng Providers
//     if (obj.Providers.indexOf(searchProvider) != -1) {
//         check = true;
//         break;

//     }
// }
// if (check) {
//     console.log('--------------------------');
//     console.log(`Name: ${obj.name}`);
//     console.log(`Brand: ${obj.brand}`);
//     console.log(`Price: ${obj.price}`);
//     console.log(`Color: ${obj.color}`);
//     console.log(`Category: ${obj.category}`);
//     console.log(`Providers: ${obj.Providers}`);
// }
// else {
//     alert(`${searchProvider} is not Found in Data`);
// }

// Serious exercices
// 6. Viết kịch bản để lưu trữ và xử lý các nhiệm vụ trong bài :
// Tạo 1 mảng chứa các object là các task :
// let tasks = [
//     {}, // Tạo 1 object rỗng để mảng bắt đầu từ vị trí số 1
//     {
//         id : 1,
//         name: 'HTML',
//         complete : false,
//     },
//     {
//         id : 2,
//         name : 'CSS',
//         complete : false,
//     },
//     {
//         id : 3,
//         name : 'Basics of Javascript',
//         complete : false,
//     },
//     {
//         id : 4,
//         name : 'Node Package Manager (npm)',
//         complete : false,
//     },
//     {
//         id : 5,
//         name : 'Git',
//         complete : false,
//     }
// ];

// // 6.1 In ra :
// console.log('Hi there,this is your learning tasks to front-end developer career:');
// for( let obj of tasks ){
//     console.log(`${obj.id}. ${obj.name}
//     \n   Complete : ${obj.complete}`);
// }

// // 6.2 Để người dùng thêm đối tượng mới :
// let action = prompt('Enter your command(New,Delete,Update,Complete)');
// if( action.toLowerCase() == 'new' ){
//     let newTask = prompt('Enter new task');
//     newTask = {
//         id: 6,
//         name : newTask,
//         complete : false,
//     }
//     tasks.push(newTask);
//     console.log(tasks);
// }

// // 6.3 Để người dùng cập nhật lại đối tượng :
// else if( action.toLowerCase() == 'update'){
//     let position = Number(prompt('Enter position:'));
//     let title = prompt('Enter new title');
//     tasks[position].name = title;
//     console.log(tasks);
// }

// // 6.4 Để người dùng hoàn thiện lại thuộc tính complete :
// else if( action.toLowerCase() == 'complete'){
//     let position = Number(prompt('Enter position:'));
//     tasks[position].complete = true;
//     console.log(tasks);
// }

// // 6.5 Để người dùng xóa 1 đối tượng :
// else if( action.toLowerCase() == 'delete' ){
//     let position = Number(prompt('Enter position:'));
//     tasks.splice(position,1);
//     console.log(tasks);
// }

// 6.6 (Optional) Để in ra 1 cách tốt hơn : ???

// 13. Cài đặt Chrome Extension : JSON Formatter để đọc large object dễ dàng hơn

// 14. Sử dụng JSON Editor Online để phân tích large object dễ dàng hơn

// Nice-to-do

// 16. Có ít nhất 2 cách để xóa 1 cặp key-value trong object :
// Tạo 1 object mới tên newData,không chứa thuộc tính noddle
// const oldData = {
//     firedRice: {
//         Price: 30,
//         vnName: 'Com rang dua bo'
//     },
//     noddle: {
//         price: 20,
//         vnName: 'My tom chanh'
//     },
//     pho: {
//         price: 35,
//         vnName: 'Pho bo tai chin'
//     },
// };
// console.log(oldData);

// // C1 : Dùng delete như đã học
// // delete oldData.noddle;
// // let newData = oldData;
// // console.log(newData);

// // C2 : (Es6) Dùng toán tử rest (...)
// // console.log(typeof oldData.firedRice.Price);
// let {noddle,...newData2} = oldData;
// console.log(newData2);






