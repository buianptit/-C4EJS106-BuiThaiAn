// 3. Khai báo các biến sau :
// a.
let message = 'Coding is great';
console.log(message);
// b.
let studentCount = 0;
console.log(studentCount);
// 4. Cập nhật lại các biến đã khai báo trong bài 3 :
// a.
message = 'Coding might not be easy,but still great';
console.log(message);
// b.
studentCount = 12;
console.log(studentCount);
// c.
message = message.toLowerCase();
console.log(message);
// d.
studentCount+= 1;
console.log(studentCount);
// 5. Hiển thị cho người dùng một thông điệp hay:
// alert('you look beautiful today');
// 6. Hỏi người dùng tên họ và nói hi với họ,nói 1 điều gì đó với họ nếu bạn muốn :
// let yourName = prompt('Hi there,your name please?');
// alert('Hi' +' '+ yourName);
// alert(`Hi ${yourName}`);
// 7. Hỏi 2 thứ từ người dùng : Tên của họ và họ của họ,sau đó chào họ với tên đầy đủ của họ
// let firstName = prompt('Enter your first name');
// let lastName = prompt('Enter your last name');
// alert(`Hi ${lastName} ${firstName}`);
// 8. Tính toán diện tích hình vuông  
// let lengthSquare = Number(prompt('Enter the length of the square'));
// alert(`The square area is ${lengthSquare*lengthSquare}`);
// 9. Tính toán diện tích hình tròn 
// let radiusCircle = Number(prompt('Enter the radius of the circle'));
// alert(`The circle area is ${radiusCircle*radiusCircle*3.14}`);
// 10. Chuyển đổi độ C sang độ F 
let tempC = Number(prompt('Enter the temperature in Celsius'));
let tempF = tempC* 9/5 +32;
tempF = tempF.toFixed(1);
// console.log(typeof(tempF));
alert(`${tempC} (C) = ${tempF} (F)`);
// Phương thức number.toFixed() sẽ chuyển đổi một số thành kiểu chuỗi, giữ lại số chữ số thập phân do người dùng xác định.
// Cú pháp: number.toFixed(x) || x là số chữ số thập phân mong muốn.


