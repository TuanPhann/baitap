// exercise 1
// var isNumber = [1, 2, 5, 4, 3];

// isNumber.sort(function () {
//     return -1
// });
// console.log(isNumber); //output isNumber = [5, 4, 3, 2, 1]


// exercise 2 :  way 1
// var isNumber = [["a", "b"], ["c", "d"], ["e", "f"]];
// var output = isNumber.reduce(function (arraynew, iteam) {
//     return arraynew.concat(iteam)
// }, [])
// console.log(output); // output = 'a', 'b', 'c', 'd', 'e', 'f']

// exercise 2 :  way 2
// var isNumber = [["a", "b"], ["c", "d"], ["e", "f"]];
// var output = isNumber.flat(Infinity);
// console.log(output); // output = 'a', 'b', 'c', 'd', 'e', 'f']

//exercise 3
// var isNumber = [1, 4, 90, 5, 6, 33, 2, 3, 51];
// var total = [];
// for (var a of isNumber) {
//     if (a > 5) {
//         total.push(a)
//     }
// }
// var [_, ...isNumberTwo] = total; // từ mảng total  lấy ra mảng mới là isNumberTwo
// isNumberTwo.reverse(); // đảo ngược mảng mới lại
// var firtNumber = total.shift(); //lấy ra phần tử đầu của mảng total
// isNumberTwo.unshift(firtNumber); 
// console.log(isNumberTwo); // output isNumberTwo =  [90, 51, 33, 6];


//exercise 4    
// var isNumber = [1, 4, 90, 5, 6, 33, 2, 3, 51];

// var resualt = isNumber.reduce(function (array, total) {
//     return array += total
// }, 0)

// console.log(resualt); //resualt = 195;


//exercise 5
// var isNumber = [5, 8, 3, 12, 66, 2];
// var output = [];
// for (var a of isNumber) {
//     a += 5;
//     output.push(a)
// }
// console.log(output); //output = [10, 13, 8, 17, 71, 7]

//way 2 
// var isNumber = [5, 8, 3, 12, 66, 2];
// var output = isNumber.map(function (iteam, index) {
//     return iteam += 5
// })
// console.log(output); //output = [10, 13, 8, 17, 71, 7]


//exercise 6
// var isNumber = [5, 8, 3, 12, 66, 2];
// var total = []
// for (var a of isNumber) {
//     if (a % 2 === 0) {
//         total.push(a)
//     }
// }

// var output = total.reduce(function (firtValue, elNumber) {
//     return firtValue += elNumber
// }, 0)

// console.log(output); // output = 88;


//exercise 7 
// var isIdol = ["avengers", "captain america", "ironman", "black panther"];
// var output = [];
// for (var a of isIdol) {
//     var b = a.toLocaleUpperCase()
//     output.push(b)
// }
// console.log(output);  // output = ['AVENGERS', 'CAPTAIN AMERICA', 'IRONMAN', 'BLACK PANTHER']

// way 2
// var isIdol = ["avengers", "captain america", "ironman", "black panther"];
// var output = isIdol.map(function (iteam, index) {
//     return iteam.toLocaleUpperCase()
// })
// console.log(output); // output = ['AVENGERS', 'CAPTAIN AMERICA', 'IRONMAN', 'BLACK PANTHER']



//exercise 8 
// var input = ["Hùng", "Duy", "Tuấn", "An", "Hoàng", "Đức"];

//nếu phần tử nào ở mảng ban đầu có chiều dài ít hơn 3 ký tự thì thay thế bằng số -1 trong mảng mới;

//nếu phần tử nào có chiều dài bằng 3 ký tự thì thay thế bằng số 0 trong mảng mới;

//còn nếu phần từ nào có chiều dài lớn hơn 3 ký tự thì thay thế bằng số 1;

// var output = []
// for (var iteam of input) {
//     if (iteam.length > 3) {
//         iteam = 1
//         output.push(iteam)
//     } else if (iteam.length === 3) {
//         iteam = 0
//         output.push(iteam)
//     } else if (iteam.length < 3) {
//         iteam = -1
//         output.push(iteam)
//     }
// }
// console.log(output); // output = [1, 0, 1, -1, 1, 0]


// way 2
// var input = ["Hùng", "Duy", "Tuấn", "An", "Hoàng", "Đức"];

// var output = input.map(function (iteam, index) {
//     if (iteam.length > 3) {
//         iteam = 1
//     } else if (iteam.length === 3) {
//         iteam = 0
//     } else if (iteam.length < 3) {
//         iteam = -1
//     }
//     return iteam
// })
// console.log(output); // output = [1, 0, 1, -1, 1, 0]

// way 3
// var input = ["Hùng", "Duy", "Tuấn", "An", "Hoàng", "Đức"];
// var a = input
//     .filter(function (iteama, indexa) {
//         return iteama.length > 3
//     })
//     .map(function (iteamaaa, indexaaa) {
//         return iteamaaa = 1
//     })
// var b = input
//     .filter(function (iteama, indexa) {
//         return iteama.length === 3
//     })
//     .map(function (iteamaaa, indexaaa) {
//         return iteamaaa = 0
//     })
// var c = input
//     .filter(function (iteama, indexa) {
//         return iteama.length < 3
//     })
//     .map(function (iteamaaa, indexaaa) {
//         return iteamaaa = -1
//     })

// var output = a.concat(c).concat(b);  
// var lastNumber = output.pop();  
// var firtNumber = output.shift(); 
// output.splice(1, 0, lastNumber)
// output.splice(4, 0, firtNumber)
// console.log(output); // [1, 0, 1, -1, 1, 0]

// ---------------------------------------------------------------------------------------

// Exercise Object

//Exercise 1 
// function isString(item) {
//     var isuppercase = item.toUpperCase() // chuyển chuổi thành chữ in hoa
//     var output = isuppercase.charAt(0).toLowerCase() + isuppercase.slice(1) // lấy ra phần tử đầu tiền và cho là chữ thường nối với phần chuổi trên dc cắt ra // h + ELLO
//     return output
// }
// var isoutput = isString("Hello")
// console.log(isoutput); // output = "hELLO"

//Exercise 2
// var input = [32, "abc", true, 65];
// function isRandom(item) {
//     var random = Math.floor(Math.random() * 4) //sô random từ 0 -> 3
//     return item[random]  // index của array sẽ truyền random vào
// }
// var output = isRandom(input)
// console.log(output); // output = 1 phần tử ngẩu nhiên trong mảng

//Exercise 3
// function getTime(num) {
//     var isTime = ''
//     if (num <= 10) {
//         num = "Sáng"
//         isTime += num
//     } else if (num > 10 && num <= 13) {
//         num = "Trưa"
//         isTime += num
//     } else if (num > 13 && num <= 17) {
//         num = "Chiều"
//         isTime += num
//     } else if (num > 17 && num <= 24) {
//         num = "Tối"
//         isTime += num
//     }
//     return isTime
// }
// var output = getTime(20)
// console.log(output); // output = in ra kết quả theo giờ

// Exercise 4
// var input = [1, 3, 2, 8, 4, 5]
// function isReualt(input) {
//     var resualt = input.reduce((max, item) => {
//         return (max > item) ? max : item;
//     })
//     var resualt2 = input.reduce((min, item) => {
//         return (min < item) ? min : item;
//     })
//     var resualt3 = input.reduce((num, item) => {
//         return num += item
//     }, 0)
//     return {
//         max: resualt,
//         min: resualt2,
//         sum: resualt3
//     }
// }
// var output = isReualt(input)
// console.log(output); // output =  { max: 8, min: 1, sum: 23 }


// Exercise 5
// function isNumber(num) {
//     var isstring = +(num.toString().split('').reverse().join(''))
//     if ((num === isstring) && (num >= 10)) {
//         num = true
//     } else {
//         num = false
//     }
//     return num
// }
// var output = isNumber(1221)
// console.log(output);

// Exercise 6 // chua xong

// input : nhan vao chieu rong va chieu cao
// output : can tra ve mot chuoi thong tin chieu rong  va chieu cao truyen vao // neu rong hoac cao bang 0 thi bao loi 




// Exersice 7
// var input = [1, 32, 33, 34, 35, 35, 36, 99];
// function getNumber(input) {
//     var resualt = [];
//     for (var a = 0; a < input.length; a++) {
//         if (input[a] === input[a - 1]) {
//             resualt.push(input[a])
//         }
//     }
//     return + resualt.join('')
// }
// var output = getNumber(input)
// console.log(output); // output = phần tử đứng cạnh bằng nhau

// way 2
// var input = [1, 32, 33, 34, 35, 35, 36, 32, 99];
// function getNumber(input) {
//     var resualt = []
//     for (var i = 0; i < input.length; i++) {
//         for (var j = i + 1; j < input.length; j++) {
//             if (input[i] === input[j]) {
//                 resualt.push(input[i])
//             }
//         }
//     }
//     return resualt.join(', ')
// }
// var output = getNumber(input)
// console.log(output); // output = phần tử trong mảng giống nhau

// way 3
// var input = [1, 32, 33, 34, 35, 35, 36, 32, 99];
// function getNumber(input) {
//     var isArray = []
//     var resualt = []
//     for (var a = 0; a < input.length; a++) {
//         if (isArray.includes(input[a])) {
//             resualt.push(input[a])
//         } else {
//             isArray.push(input[a])
//         }
//     }
//     console.log(resualt);
// }
// getNumber(input)


// exersice 8
// var input = [1, [2, 3, null, 4], [null], 5]
// function getnewArray(input) {
//     var isArray = input.flat(Infinity)
//     var resualt = [];
//     for (var a of isArray) {
//         if (a !== null) {
//             resualt.push(a)
//         }
//     }
//     return resualt
// }
// var output = getnewArray(input)
// console.log(output);  // output = [1,2,3,4,5]


// Exercise 9

// var isNumber = '456789';
// var a = 3;
// function getArray(num, a) {

// }

// getArray(isNumber, a)

// function flatten(arr) {
//     while (arr.some((item) => Array.isArray(item))) {
//         console.log(arr);
//         console.log(...arr);
//         arr = [].concat(...arr)
//         console.log(arr);
//     }
//     return arr
// }

// let arr = [1, 2, 3, 4, [5, [6, 7]]]
// console.log(flatten(arr))


