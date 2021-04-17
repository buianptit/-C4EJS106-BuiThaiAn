// Part A :
// 1. ??
// 2. Viết hàm trả về 2 chuỗi s1 và s2 có ký tự xen kẽ nhau :
// C1: Dùng vòng lặp thuần ( For Loop )
// let merge2String = (string_1,string_2) => {
//     let chuoi1 = string_1.split('');
//     let chuoi2 = string_2.split('');
//     console.log(chuoi1);
//     console.log(chuoi2);
//     let result = '';
//     for( let i = 0;i < chuoi1.length && i < chuoi2.length;i++){
//         result += chuoi1[i] + chuoi2[i];
//     }
//     chuoi1.length<chuoi2.length ? result += chuoi2[chuoi2.length-1] : result += chuoi1[chuoi1.length-1];
//     console.log(result);
//     return result;
// }

// C2: 
// let merge2String = (string_1,string_2) => {
//     let chuoi1 = string_1.split('');
//     let chuoi2 = string_2.split('');
//     let l = Math.min(chuoi1.length,chuoi2.length);
//     console.log(l);
//     temp = '';
//     for( i = 0;i < l;i++ ){
//         temp += chuoi1[i] + chuoi2[i];
//     }
//     temp = temp + chuoi1.slice(i) + chuoi2.slice(i);
//     console.log(temp)
    
// }

// merge2String('abc','1234');
// merge2String('abcd','123');


// Part B: Code Challenge :
let numberResult = 5;
// while(true)

// Đọc nút Quay số :
let mainBtn = document.getElementById('btn--Quayso');
mainBtn.addEventListener('click',()=> {
    let inputUser = document.getElementById('mainInp').value;
    // Kiểm tra xem user nhập đúng yêu cầu không :
    if( inputUser == '' || inputUser <= 0 || inputUser > 10){
        document.getElementById('mainInp').value = '';
        alert('Vui Lòng nhập đúng yêu cầu')
    }
    else{
       if(inputUser != numberResult ){
        alert(`Kết quả đúng là : Số ${numberResult}`);
       }
       else{
           console.log('Chúc mừng! Bạn đã trúng thưởng.')
       }
    }
})



