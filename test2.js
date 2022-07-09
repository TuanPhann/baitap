//method map()
// Array.prototype.map2 = function (myarray2) {
//     var output = []
//     for (var a = 0; a < this.length; a++) {
//         var resualt = myarray2(this[a], a)
//         output.push(resualt)
//     }
//     return output
// }


// var myarray = [
//     'javascript',
//     'PHP',
//     'Ruby'
// ]

// var output = myarray.map2(function (iteam, index) {
//     return `<h2>${iteam}</h2>`
// })

// console.log(output.join(' '));

// var output = myarray.map(function (iteam, index) {
//     return `<h2>${iteam}</h2>`
// })

// console.log(output.join(' '));


// method forEach()
// Array.prototype.forEach2 = function (callback) {
//     for (var a in this) {
//         if (this.hasOwnProperty(a)) {
//             callback(this[a], a)
//         }
//     }
// }
// var myarray = [
//     'javascript',
//     'PHP',
//     'Ruby'
// ]
// myarray.forEach2(function (iteam, index) {
//     console.log(iteam);
// })

// myarray.forEach(function (iteam, index) {
//     console.log(iteam);
// })




// ------------------------------------------------------------------

// var promise = new Promise(function (resolve, reject) {
//     // resolve(20, 30)
//     reject(50, 60)
// })
// promise
//     .then(function (a, b) {
//         console.log(a);
//     })
//     .catch(function (c, d) {
//         console.log(c);
//     })

// example giải quyết callback hell
// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             resolve()
//         }, ms)
//     })
// }
// sleep(2000)
//     .then(function () {
//         console.log(1);
//         return sleep(2000)
//     })
//     .then(function () {
//         console.log(2);
//         return new Promise(function (resolve, reject) {
//             reject("o day co loi")
//         })
//     })
//     .then(function () {
//         console.log(3);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })


// example method Promise.all()
// var promise1 = new Promise((resolve) => {
//     setTimeout(function () {
//         resolve([1])
//     }, 1000)
// })

// var promise2 = new Promise((resolve) => {
//     setTimeout(function () {
//         resolve([2, 3])
//     }, 2000)
// })

// Promise.all([promise1, promise2])
//     .then(function (resualt) {
//         var output1 = resualt[0];
//         var output2 = resualt[1];
//         console.log(output1.concat(output2));
//     })

// -----------------------------------------------------------------------------------------

// example promise
// 1. láy ra comment
// 2. Từ comment láy ra user_id
// 3. Từ user_id lấy ra User tương ứng

// fake API ( là đang mô phỏng ra một hàm để thực hiện gọi qua URL mà backend trả về để lấy dữ liệu)
// output1: biết được comment nào của user nào

// var users = [
//     {
//         id: 1,
//         name: 'kien Dam'
//     },
//     {
//         id: 2,
//         name: 'Son Dang'
//     },
//     {
//         id: 3,
//         name: 'Tuan phan'
//     }
// ]

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'anh son chua ra video :('
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'vua ra xong e oi'
//     },
//     {
//         id: 2,
//         user_id: 1,
//         content: 'ok a'
//     }
// ]

// function getComment() {
//     return new Promise((resolve, reject) => {
//         resolve(comments)
//     })
// }

// function getUser(userId) {
//     return new Promise((resolve) => {
//         var resualt = users.filter((user) => {
//             return userId.includes(user.id)
//         })
//         resolve(resualt)
//     })
// }

// getComment()
//     .then((comments) => {
//         var userId = comments.map((item) => {
//             return item.user_id
//         })
//         return getUser(userId)
//             .then((isusers) => {
//                 return {
//                     user: isusers,
//                     comments: comments
//                 }
//             })
//     })
//     .then((data) => {
//         var isBlocklist = document.getElementById('block_list');
//         var html = ''
//         data.comments.forEach((Comment) => {
//             var isUser = data.user.find((item) => {
//                 return item.id === Comment.user_id
//             })
//             html += `<li>${isUser.name}: ${Comment.content}</li>`
//         })
//         isBlocklist.innerHTML = html
//     })


// way 2
// function start() {
//     var isArray = getComment(comments, getUer);
//     isrender(isArray)
// }
// start()

// function getComment(comments, callback) {
//     // lấy ra userId ở comment
//     var isUserid = comments.map((item) => {
//         return item.user_id
//     })
//     //new array user
//     var isUser = callback(isUserid)
//     return {
//         users: isUser,
//         comments: comments
//     }
// }

// // lấy ra các id có cùng user_id phần comment
// function getUer(isUserid) {
//     var resualt = users.filter((item) => {
//         return isUserid.includes(item.id)
//     })
//     return resualt
// }

// //render to the browser
// function isrender(isArray) {
//     var isBlocklist = document.getElementById('block_list');
//     var html = ''
//     isArray.comments.forEach((comment) => {
//         var user = isArray.users.find((user) => {
//             return user.id === comment.id
//         })
//         html += `<li>${user.name}: ${comment.content}</li>`
//     })
//     isBlocklist.innerHTML = html
// }




//--------------------------------------------------------------------------

//example fetch

// fetch() => là một hàm dựng sẵn nhưng bên trong nó return lại một promise 
// .then((response) => {})  // response => có nghĩa là phản hồi // .then trả vể response.json()=> đây là một promise
// return thằng response.json() => trong đây sẽ làm việc và trả lại dưới dạng từ json => javascript type

// var isApi = 'https://jsonplaceholder.typicode.com/posts'

// fetch(isApi)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         var output = data.map((item) => {
//             return `<li>
//                     <h2>${item.title}</h2>
//                     <p>${item.body}</p>
//             </li>`
//         })
//         var html = output.join(' ')
//         document.getElementById('block').innerHTML = html
//     })

//-------------------------------------------------------------------------------

//example json server

// var isApi = 'http://localhost:3000/course';

// fetch(isApi)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         var output = data.map((item) => {
//             return `<li>
//                 <h2>${item.name}</h2>
//                 <p>${item.decription}</p>
//         </li>`
//         })
//         var html = output.join(' ')
//         document.getElementById('block').innerHTML = html
//     })

//--------------------------------------------------------------------------------------------

// working example with posman 
// var isApi = "http://localhost:3000/course";

// function start() {
//     getCourse((course) => {
//         render(course)
//     })
//     hadleCreat()
// }
// start()

// // hàm lấy ra course từ API
// function getCourse(callback) {
//     fetch(isApi)
//         .then((response) => {
//             return response.json()
//         })
//         .then(callback)
// }

// // hàm post data
// function isPostdata(data, callback) {
//     var isPost = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }
//     fetch(isApi, isPost)
//         .then((response) => {
//             return response.json()
//         })
//         .then(callback)
// }

// // hàm Delete data
// function deletecourse(id) {
//     var isDelete = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     fetch(isApi + '/' + id, isDelete)
//         .then((response) => {
//             return response.json()
//         })
//         .then(function () {
//             var isClose = document.querySelector('.course-item-' + id)
//             if (isClose) {
//                 isClose.remove()
//             }
//         })
// }

// // hàm render course  ra brower
// function render(course) {
//     var isBlocklist = document.getElementById('block_list');
//     var output = course.map((item) => {
//         return `<li class="course-item-${item.id}">
//                 <h2>${item.name}</h2>
//                 <p>${item.decription}</p>
//                 <button onclick="deletecourse(${item.id})">close</button>
//         </li>`
//     })
//     isBlocklist.innerHTML = output.join('')
// }

// // hàm click để tạo  data
// function hadleCreat() {
//     var btnCreat = document.getElementById('creat');
//     btnCreat.onclick = function () {
//         var isName = document.querySelector('input[name="name"]').value;
//         var isDecription = document.querySelector('input[name="decription"]').value;
//         var data = {
//             name: isName,
//             decription: isDecription
//         }
//         isPostdata(data, function () {
//             getCourse((course) => {
//                 render(course)
//             })
//         })
//     }
// }

//---------------------------------------------------------
//example spread

// const person1 = {
//     name: 'Son',
//     age: 21
// }

// const person2 = {
//     ...person1
// }


// console.log(person2 === person1);

//-------------------------------------------------------------

var tip = 100;

(function () {
    // console.log("I have $" + husband());
    console.log(tip);
    function wife() {
        return tip * 2;
    }

    function husband() {
        return wife() / 2;
    }

    var tip = 10;
})();
// Output: ?