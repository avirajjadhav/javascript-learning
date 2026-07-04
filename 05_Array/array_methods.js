
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

//removing elements using shift()method.

let colors = ["Red", "Blue", "Green"];
console.log("original array:",colors);
colors.shift();
console.log("updated array:",colors);

let color="Red";

colors.shift();
colors.shift();
console.log(colors);
let len=colors.length;

console.log(len);

let a =["html","css","js","react"];

console.log(a.join('|'));


//js array delete operator.

let emp={
    firstname:"aviraj",
    lastname:"jadhav",
    salary:22000
}
console.log(delete emp.salary);
console.log(emp);


// map() method

const a=[1,2,3,4];
const b=a.map(x=>x*2);
console.log(b);

const n=[1,4,9,16];

const sqr=n.map(num=> Math.sqrt(num));
console.log(sqr);

// square numbers:

const numbers =[2,3,4,5];

const square =numbers.map(num=> num*num);
console.log(square);


//convert strings to uppercase.

const names=["aviraj","rahul","priya"];

const uppercase=names.map(name=> name.toUpperCase());

console.log(uppercase);


//add Gst 18% to prices:

const prices=[100,200,300];

const gstPrices =prices.map(price=> price*1.18);

console.log(gstPrices);

//get the length of the Array

const name=["aviraj","shweta","keshav","riya"];

const getlength=name.map(Name=>Name.length);

console.log("length of names",getlength);

const users=[ 
    {name:"aviraj",age:21},
    {name:"riya",age:20}
    
    ]
    const UserNames=users.map(user=>user.name);
    console.log("after getting names of user",UserNames);
    
    
    // create greeting using map()
    
    const users=["aviraj","ritu"];
    
    const greeting=users.map(user =>`Welcome ${user}`  );
    
    console.log(greeting);
    
    const fruits = ["Apple", "Mango", "Banana"];
    
    const listItems=fruits.map(fruit=>`<li>${fruit}</li>`);
    
    console.log(listItems);
    // //filter method in array.

// const ages=[32,33,18,40];

// const result=ages.filter(checkadult);

// function checkadult(age){
//     return age>=18;
// }
// console.log(result);


//indexof method 

const fruits=["apple","banana","guawa"];

let index=fruits.indexOf("guawa");

console.log(index);

    