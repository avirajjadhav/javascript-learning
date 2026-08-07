//create promise
let myPromise = new Promise(function(resolve, reject) {
    // do an asyn task
    //db calls , cryptography,network
    setTimeout(function() {
        console.log('async task is complited');
        resolve();
    }, 1000 );
});

myPromise.then(function(){
    console.log("promise consumed");
}); 

function getUser() {
    return new Promise((resolve) => {

        // Imagine this data came from a database
        const userFromDatabase = {
            id: 1,
            name: "Aviraj",
            email: "avi@gmail.com"
        };

        resolve(userFromDatabase);
    });
}
getUser().then(function(user) {
    console.log(user);
});






new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2 ");
        resolve()
    },1000)
}).then(function(){
    console.log("asyn 2 resolved")
})

const PromiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if (!error) 
        {
            resolve({username:"js",password:"123"})
            
        }else{
            reject('Error:js went wrong')
        }
    },1000)
});

async function ConsumePromiseFive(){
    try {
      const response=await PromiseFive
      console.log(response);
      console.log("Password is: " + response.password);/* code */
    } catch (error) {
        console.log(error);
    }
}
ConsumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()

//assignment write above code in using then()