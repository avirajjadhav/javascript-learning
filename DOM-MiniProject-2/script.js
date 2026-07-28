const form=document.querySelector('form');

form.addEventListener("submit",function(event){
  event.preventDefault();

  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const result=document.querySelector('#result');
  
  if (height==='' || height <0 || isNaN(height)) {
    result.innerHTML="please enter a valid Height";
  }else if (weight==='' || weight <0 || isNaN(weight)) {
    result.textContent="please enter a valid weight";
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
  //bmi category conditons 
    if (bmi < 18.5) {
    result.innerHTML = `
        <h3>Your BMI is ${bmi}</h3>
        <p>Category: Underweight 😔</p>
    `;
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    result.innerHTML = `
        <h3>Your BMI is ${bmi}</h3>
        <p>Category: Normal Weight ✅</p>
    `;
}
else if (bmi >= 25 && bmi <= 29.9) {
    result.innerHTML = `
        <h3>Your BMI is ${bmi}</h3>
        <p>Category: Overweight ⚠️</p>
    `;
}
else {
    result.innerHTML = `
        <h3>Your BMI is ${bmi}</h3>
        <p>Category: Obese 🚨</p>
    `;
}
 }


});

