function addtwonum(num1, num2) {
    return num1 + num2;
}

console.log(addtwonum(10, 20));

//js function examples . 

function MyName(){ 
    console.log("A");
    console.log("V");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("j");
    
}

// MyName();

function AddTwoNumbers(num1,num2){
    return num1+num2;
    
}
const result =AddTwoNumbers(3,5);

// console.log("result:",result);

function loginUserMessage(username="sam"){
if (!username) {
 console.log("please enter a username");
 return
} 
return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(val1,val2, ...num){
    return num;
    
}
// console.log(calculateCartPrice(200,400,500,600))

const user={ 
    username:"aviraj",
    price:300
}
function handleobject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
    
    
}
// handleobject(user)

// handleObject({
//     username:"yash",
//     price:222
// })

// handleObject()

const myarray =[100,200,300]

function returnThirdValue(getarray){
    
   return getarray[2] 
    
    
}
console.log(returnThirdValue(myarray));





