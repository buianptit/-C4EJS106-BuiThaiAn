// 1. Create a random number from 0 to 1
// Sử dụng hàm Math.random : Tạo ngẫu nhiên 
console.log(Math.random());

// 2. Randomly pick an item from an array
let numberArr = [1,2,3,4,5,6,7,8];
// Hàm Math.floor : Trả về số nguyên bé hơn hoặc bằng số ban đầu : 5.95 -> 5;
let randomItem = numberArr[Math.floor(Math.random()*numberArr.length)];
console.log(Math.random()*5);
console.log(randomItem);

// 3. Tưởng tượng là leader của 1 team,phân công công việc và chức năng của web và nhiệm vụ cho mọi người :
// Chủ đề của web : Trang web bán phim và máy ảnh phim,
// Chức năng chính của web : Đăng nhập,đăng xuất,thêm sản phẩm,xóa sản phẩm khỏi giỏ hàng,hiển thị sản phẩm bán chạy,hiển thị sản phẩm theo mức giá tăng hoặc giảm dần,hiển thị sản phẩm đang được giảm giá...