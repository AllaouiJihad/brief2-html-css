let menu = document.getElementById('menu');
let nav = document.getElementById('nav');

menu.addEventListener('click', function () {
    if (nav.style.display === "none") {
        nav.style.display = "inline-block";
    }else{
        nav.style.display = "none";
    }
});

let fnameRegExp = new RegExp('^[a-z]{3,15}$');
let emailRegExp = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$');
let addresseRegExp = new RegExp('^[a-z ]{5,}$');
let cityRegExp = new RegExp('^[a-z ]{5,}$');
let stateRegExp = new RegExp('^[a-z]{5, }$');
let zipRegExp = new RegExp('^[0-9]{5}(?:-[0-9]{4})?$');
let cardnameRegExp = new RegExp('^[a-z0-9_ -]{3,15}$');
let cardnumberRegExp = new RegExp('^[1-9]{4}-[1-9]{4}-[1-9]{4}-[1-9]{4}$');
let expmonthRegExp = new RegExp('^[a-z]{3,}$');
let expyearRegExp = new RegExp('^[0-9]{4}$');
let cvvRegExp = new RegExp('^[0-9]{3}$');

function validation(input,regExp){
    let testchamp = regExp.test(input.value);
    let small = input.nextElementSibling;
    if(testchamp){
        small.innerHTML = 'valid';
        small.style.color= '#96C291';
        input.style.border = '2px solid #96C291';
        }
    else{
        small.innerHTML = 'invalid ';
        small.style.color = '#D83F31';
        input.style.border = '2px solid #D83F31';
    }
}

// function validFname(inputFname){
//     // let emailRegExp = new RegExp('^[a-z]{3,15}$');
//     let emailTest = emailRegExp.test(inputFname.value);
//     let small = inputFname.nextElementSibling;
//     if(emailTest){
//        small.innerHTML = 'first name valid';
//        small.style.color= '#96C291';
//        inputFname.style.border = '2px solid #96C291';
//     }
//     else{
//        small.innerHTML = 'invalid name';
//        small.style.color = '#D83F31';
//        inputFname.style.border = '2px solid #D83F31';
//     }
// };

// function validemail(inputFemail){
//     let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.com$/;
//     let emailTest = emailRegExp.test(inputFemail.value);
//     let small = inputFemail.nextElementSibling;
//     if(emailTest){
//        small.innerHTML = ' valid email';
//        small.style.color= '#96C291';
//        inputFemail.style.border = '2px solid #96C291';
//     }
//     else{
//        small.innerHTML = 'invalid email';
//        small.style.color = '#D83F31';
//        inputFemail.style.border = '2px solid #D83F31';
//     }
// };
// // function validemail(inputFemail){
// //     let emailRegExp = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+');
// //     let emailTest = emailRegExp.test(inputFemail.value);
// //     let small = inputFemail.nextElementSibling;
// //     if(emailTest){
// //        small.innerHTML = ' valid email';
// //        small.style.color= '#96C291';
// //        inputFemail.style.border = '2px solid #96C291';
// //     }
// //     else{
// //        small.innerHTML = 'invalid email';
// //        small.style.color = '#D83F31';
// //        inputFemail.style.border = '2px solid #D83F31';
// //     }
// // };
   


   let form = document.querySelector('#form');
   form.addEventListener("input", function(){
       form.firstname.addEventListener('input', function(){
        validation(form.firstname,fnameRegExp);
       }); 
       form.email.addEventListener('input',function(){
        validation(this,emailRegExp);
       });
       form.address.addEventListener('input',function(){
        validation(this,addresseRegExp);
       });
       form.city.addEventListener('input',function(){
        validation(this,cityRegExp);
       });
       form.state.addEventListener('input',function(){
        validation(this,stateRegExp);
       });
       form.zip.addEventListener('input',function(){
        validation(this,zipRegExp);
       });
       form.cardname.addEventListener('input',function(){
        validation(this,cardnameRegExp);
       });
       form.cardnumber.addEventListener('input',function(){
        validation(this,cardnumberRegExp);
       });
       form.expmonth.addEventListener('input', function(){
        validation(this,expmonthRegExp);
       });
       form.expyear.addEventListener('input', function(){
        validation(this,expyearRegExp);
       });
       form.cvv.addEventListener('input',function(){
        validation(this,cvvRegExp);
       })
   })