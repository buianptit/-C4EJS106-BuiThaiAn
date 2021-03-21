/*
Bài 1 : Viết function tính trung bình cộng điểm của học sinh,từ đó alert ra màn hình học lực của học sinh đó 
Mỗi học sinh có vô số đầu điểm khác nhau 
*/
function average (...subjects){
    let result = 0;
    for( let item of subjects){
        result += item;
    }
    result = (result / subjects.length).toFixed(2);
    if(result >= 8){
        alert(`Điểm trung bình là: ${result} và đạt loại: Giỏi`);
    }else if( result >= 6 ){
        alert(`Điểm trung bình là: ${result} và đạt loại: Khá`);
    }else if( result >= 4 ){
        alert(`Điểm trung bình là: ${result} và đạt loại: Trung Bình`);
    }else{
        alert(`Điểm trung bình là: ${result} và đạt loại: Kém`);
    }
}
// average(1,2,3);
// average(8,5,7)
average(2);
/*
Bài 2 : Viết function giải phương trình bậc 2: ax^2 + bx + c = 0
Tham số truyền vào là a,b,c
*/
// function solveEquation(a,b,c) {
//     let x;
//     if( a == 0 ){
//         x = -c / b;
//         console.log(`Phương trình có nghiệm là: x = ${x}`);
//     } else {
//         let denta = (b * b) - (4*a*c);
//         if( denta == 0){
//             x = -b / (2*a)
//             console.log(`Phương trình có nghiệm kép là: x1 = x2 = ${x}`);
//         }else if( denta > 0 ){
//             let x2 = (-b + Math.sqrt(denta)) / (2*a);
//             x = (-b - Math.sqrt(denta)) / (2*a);
//             console.log(`Phương trình có 2 nghiệm phân biệt là:
//             \nx1 = ${x}
//             \nx2 = ${x2}`);
//         }else {
//             console.log('Phương trình vô nghiệm !');
//         }
//     }
// }
// solveEquation(3,2,5);
// solveEquation(2,-7,3);