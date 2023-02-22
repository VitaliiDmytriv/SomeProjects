// function Size(width = 80, height = 60) {
//     this.width = width;
//     this.height = height;
//     this.resize = (newWidth, newHeight) => {
//         this.width = newWidth;
//         this.height = newHeight;
//     };
// }

// const { log } = require("console");

// function Position(x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
//     this.move = (newX, newY) => {
//         this.x = newX;
//         this.y = newY;
//     };
// }

// class ProgramWindow {
//     constructor() {
//         this.screenSize = new Size(800, 600);
//         this.size = new Size();
//         this.position = new Position();
//     }

//     resize(newSize) {
//         this.size.width =
//             this.position.x + newSize.width > this.screenSize.width
//                 ? this.screenSize.width - this.position.x
//                 : newSize.width < 1
//                 ? 1
//                 : newSize.width;

//         this.size.height =
//             this.position.y + newSize.height > this.screenSize.height
//                 ? this.screenSize.height - this.position.y
//                 : newSize.height < 1
//                 ? 1
//                 : newSize.height;
//     }

//     move(newPosition) {
//         let width =
//             this.size.width + newPosition.x > this.screenSize.width
//                 ? this.screenSize.width - this.size.width
//                 : newPosition.x;
//         let height =
//             this.size.height + newPosition.y > this.screenSize.height
//                 ? this.screenSize.height - this.size.height
//                 : newPosition.y;
//         this.position.x = width < 0 ? 0 : width;
//         this.position.y = height < 0 ? 0 : height;
//     }
// }
// const programWindow = new ProgramWindow();

// const updatedWindow = changeWindow(programWindow);

// function changeWindow(obj) {
//     obj.resize(new Size(400, 300));
//     obj.move(new Position(100, 150));
//     return obj;
// }

// console.log(updatedWindow.position.x);

// console.log("1 2 3\n4 5 6\n7 8 9\n8 7 6".split("\n"));

// const regex = /[\(][\+][0-9]{1}\d[\)]\s[0-9]{3}[\-][0-9]{3}[\-][0-9]{3}/g;
// let number = "(+34) 65977113323232342394";
// let result = regex.test(number);
// console.log(result);

// потрібно повернути масив з масивами чисел,

// let str = "1 2\n10 20".split("\n");
// let setToNum = str.map((el) => el.split(" ")).map((el) => el.map(Number));
// let arr = [];
// for (let i = 0; i < setToNum[0].length; i++) {
//     let newArr = [];
//     for (let j = 0; j < setToNum.length; j++) {
//         newArr.push(setToNum[j][i]);
//     }
//     arr.push(newArr);
// }
// console.log(arr);
// // console.log(setToNum);

// class Matrix {
//     constructor(str) {
//         this.str = str
//             .split("\n")
//             .map((el) => el.split(" "))
//             .map((el) => el.map(Number));
//     }

//     get rows() {
//         return this.str;
//     }

//     get columns() {
//         const result = [];
//         for (let i = 0; i < this.str[0].length; i++) {
//             let newArr = [];
//             for (let j = 0; j < this.str.length; j++) {
//                 newArr.push(this.str[j][i]);
//             }
//             result.push(newArr);
//         }
//         return result;
//     }
// }

// const box = document.querySelectorAll(".box");
// const section = document.querySelector(".section");

// const line = document.querySelector(".line");
// const lineDraw = document.querySelector(".line__heigth");

// window.addEventListener("scroll", function () {
//     const { scrollTop, clientHeight } = this.document.documentElement;
//     const position = line.getBoundingClientRect().top;
//     // console.log(clientHeight - position);
//     console.log(line.offsetHeight);
//     if (clientHeight - position >= 100) {
//         let heightOfLine = line.clientHeight + 1;
//         let height = (clientHeight - position - 100) * 0.8;

//         lineDraw.style.height = `${
//             height > heightOfLine ? heightOfLine : height
//         }px`;
//     }
//     box.forEach((el) => {
//         if (
//             scrollTop >
//             scrollTop + el.getBoundingClientRect().top - clientHeight * 0.8
//         ) {
//             el.classList.add("active");
//         } else {
//             el.classList.remove("active");
//         }
//     });
// });
