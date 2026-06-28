
// let a =["Html","css","js"];
// // let lst=a[a.length-1];

// // console.log(lst);

// let b=["bmw","Audi","volvo"];

// b[3]="tata safari"
// // let lst=b[b.length-1];

// console.log("last element of array:",b)

// // let c=["A","V", "I"];

// // c[3]="Jadhav";

// // let lst2=c[c.length-1];

// // console.log("last element of array="+ c);


//adding element to the array using push() and unshift() method.

let arr=["Html","css","Js"];

arr.push("Ract","node.js","express.js","mongodb");

arr.unshift("Web Developement:")

// console.log("after elements add",arr);

let a=[1,2,3,]

a.push(4,5);
a.unshift(0);
console.log(a);

//adding elements to array using push() method

let fruits=["apple","Banana"];
console.log(fruits)
let len=fruits.length;
console.log("original array Length:",len);
fruits.push("Mango");

console.log(fruits)

fruits.push("Orange","Grapes");

console.log(fruits);

fruits.push(100);

console.log(fruits);

fruits.push("kiwi");

console.log(fruits);

let len2=fruits.length;

console.log("updated array length:",len2);

//adding element using unshift();

let colors=["blue","Green"];
console.log("original array:",colors);

colors.unshift("red");

console.log("after added red:",colors);

colors.unshift("black","white");

console.log("after added black and white:",colors);

let len=colors.length;

console.log("updated array length:",len);

//removing elements using pop()method.

let items = ["Pen", "Pencil", "Eraser", "Scale"];

console.log("original array:",items);

items.pop("Scale");

console.log("after removing last element :",items);

items.pop();
items.pop();

console.log("after removing 2 elements:",items);

let len=items.length;

console.log(len);

