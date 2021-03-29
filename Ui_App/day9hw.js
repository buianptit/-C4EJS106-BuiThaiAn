// 1. Xây dựng bộ đếm với nút count up và count down (Counter App):
// {
//     let theDiv_b1 = document.getElementById('bai-1');
//     let listOfBtn = theDiv_b1.getElementsByTagName('button');
//     let theSpan = Number(document.getElementById('span-counter').innerHTML);
//     listOfBtn[0].addEventListener('click', () => {
//         theSpan += 1;
//         document.getElementById('span-counter').innerHTML = theSpan;
//     });
//     listOfBtn[1].addEventListener('click', () => {
//         theSpan -= 1;
//         document.getElementById('span-counter').innerHTML = theSpan;
//     });
// }

// 2. Xây dựng đồng hồ bấm giờ được nhập bởi người dùng (Timer):
// {
//     let theDiv_b2 = document.getElementById('bai-2');
//     let listOfBtn = theDiv_b2.getElementsByTagName('button');
//     let theP = document.getElementById('theP-b2');

//     // Hàm check thời gian dùng cho hàm Interval :
//     let timeChecked = time => {
//         theP.innerHTML = time;
//         if (time <= 0) {
//             theP.innerHTML = "Time's up";
//             listOfBtn[0].disabled = false;
//             listOfBtn[1].disabled = true;
//             theDiv_b2.getElementsByTagName('input')[0].value = '';
//             clearInterval(countDown);
            

//         }
//     }
//     // Biến đại diện cho hàm Interval :
//     let countDown;
//     listOfBtn[0].addEventListener('click', () => {
//         // Đọc giá user nhập vào ô input
//         let inputContent = theDiv_b2.getElementsByTagName('input')[0].value;
//         countDown = setInterval(() => {
//             timeChecked(inputContent);
//             inputContent -= 1;
//         }, 1000);
//         listOfBtn[0].disabled = true;
//         listOfBtn[1].disabled = false;
//     });
//     listOfBtn[1].addEventListener('click', () => {
//         clearInterval(countDown);
//         listOfBtn[1].disabled = true;
//         listOfBtn[0].disabled = false;
//     });
// }
// 3. Xây dựng random quote app (Random quote):
// console.log(quotes);
// {   // Đọc các thẻ :
//     let content = document.getElementById('content_b3');
//     let author = document.getElementById('author_b3');
//     let btn3 = document.getElementById('btn-3');
//     // Tạo sẵn nội dung cho thẻ content và author:
//     content.innerHTML = quotes[0].quoteText;
//     author.innerHTML = quotes[0].author;

//     // Gắn sự kiện cho nút :
//     btn3.addEventListener('click', () => {
//         // Trả về ngẫu nhiên 1 phần tử ( object ) trong mảng quotes
//         let randomObj = quotes[Math.floor(Math.random() * quotes.length)];
//         content.innerHTML = randomObj.quoteText;
//         author.innerHTML = randomObj.quoteAuthor;
//     });
// }

// 4. Làm theo đề bài :
// Khởi tạo mảng để lưu trữ thông tin đề bài :
let timeSheetData = [
    {
        Project: 'Learn front-end',
        Task: 'Learn HTML',
        'Time Spent': 6,
    },
    {
        Project: 'Learn front-end',
        Task: 'Learn CSS',
        'Time Spent': 8,
    },
    {
        Project: 'Learn front-end',
        Task: 'Learn JS Variables and Data Types',
        'Time Spent': 6,
    },
    {
        Project: 'Learn git',
        Task: 'Learn git basics',
        'Time Spent': 2,
    },
]
{
    // Đọc body của thẻ table :
    {
        let tbody = document.getElementById('ts_body');
        let listTr = tbody.getElementsByTagName("tr");
        let isUpdating = false;
        let elementIdx;
        let newProjectInputs = document.getElementsByClassName('newpj');
        
        // function that add update and delete listener
        addModifyFunction = (index) => {
            let newElement = listTr[index].lastChild;
            newElement.addEventListener('click', (e) => {
                // project's index
                console.log(e.target)
                elementIdx = e.target.parentNode.parentNode.rowIndex - 1;
                if (e.target.innerHTML == 'X') {
                    // delete element in database
                    timeSheetData.splice(elementIdx, 1);
                    // delete element in html interface
                    e.target.parentNode.parentNode.remove();
                    clearInput();
                }
                else if (e.target.innerHTML == 'U') {
                    isUpdating = true;
                    newProjectInputs[0].value = timeSheetData[elementIdx].Project;
                    newProjectInputs[1].value = timeSheetData[elementIdx].Task;
                    newProjectInputs[2].value = timeSheetData[elementIdx]['Time Spent'];
                    document.getElementById('newpj_add').innerHTML = 'Update';
                }
            });
        }
        // insert data to html
        for (let idx in timeSheetData) {
            tbody.insertAdjacentHTML('beforeend', `<tr><td>${timeSheetData[idx].Project}</td><td>${timeSheetData[idx].Task}</td><td>${timeSheetData[idx]["Time Spent"]}</td><td><button>X</button><button>U</button></td></tr>`);
            addModifyFunction(idx);
        }
        // function that add new project to database and html
        addNewProject = (pjName, pjTask, pjTime) => {
            // add newpj to database
            let newPj = {};
            newPj.Project = pjName;
            newPj.Task = pjTask;
            newPj['Time Spent'] = pjTime;
            timeSheetData.push(newPj);
            // ad newpj to html interface
            tbody.insertAdjacentHTML('beforeend', `<tr><td>${pjName}</td><td>${pjTask}</td><td>${pjTime}</td><td><button>X</button><button>U</button></td></tr>`)
            addModifyFunction(listTr.length - 1);
        }
        // function that clear input
        clearInput = () => {
            document.getElementById('newpj_add').innerHTML = 'Add'
            newProjectInputs[0].value = null;
            newProjectInputs[1].value = null;
            newProjectInputs[2].value = null;
            isUpdating = false;
        }
        
        // add button 
        document.getElementById('newpj_add').addEventListener('click', () => {
            // get input
            let newPjName = newProjectInputs[0].value;
                let newPjTask = newProjectInputs[1].value;
                let newPjTime = newProjectInputs[2].value;
            if (isUpdating == false) {
                addNewProject(newPjName, newPjTask, newPjTime);
                // reset input on html interface
                clearInput();
                // consolog
                console.log(`${newPjName} ${newPjTask} ${newPjTime} added.`);
            } else {
                // update html interface
                let listTd = listTr[elementIdx].getElementsByTagName('td');
                listTd[0].innerHTML = newPjName;
                listTd[1].innerHTML = newPjTask;
                listTd[2].innerHTML = newPjTime;
                // update database
                timeSheetData[elementIdx].Project = newPjName;
                timeSheetData[elementIdx].Task = newPjTask;
                timeSheetData[elementIdx]['Time Spent'] = newPjTime;
                // clear
                clearInput();
            }
        });
        // clear button
        document.getElementById('newpj_clear').addEventListener('click', () => {
            clearInput();
        });
    }



}
