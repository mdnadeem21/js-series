console.log("BMI Calculator...")
const form = document.querySelector('form')
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#reults');
 
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight / ( (height*height)/10000).toFixed(2))
        let msg = ''
        if(bmi <18.6){
             msg = 'Under Weight'
        }else if(bmi >=18.6 && bmi <= 24.9){
             msg = 'Healthy Weight'
        }
        else{
             msg = 'Over Weight'
        }
        // Show Reult
        results.innerHTML = `<span>${bmi}</span> - ${msg}`
    }




})