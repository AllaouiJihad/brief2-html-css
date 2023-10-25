let menu = document.getElementById('menu');
let nav = document.getElementById('nav');

menu.addEventListener('click', function () {
    if (nav.style.display === "none") {
        nav.style.display = "inline-block";
    }else{
        nav.style.display = "none";
    }
});

let emailRegExp = new RegExp('^[a-z]{3,15}$');
function validFname(inputFname){
    // let emailRegExp = new RegExp('^[a-z]{3,15}$');
    let emailTest = emailRegExp.test(inputFname.value);
    let small = inputFname.nextElementSibling;
    if(emailTest){
       small.innerHTML = 'first name valid';
       small.style.color= '#96C291';
       inputFname.style.border = '2px solid #96C291';
    }
    else{
       small.innerHTML = 'invalid name';
       small.style.color = '#D83F31';
       inputFname.style.border = '2px solid #D83F31';
    }
};

function validemail(inputFemail){
    let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.com$/;
    let emailTest = emailRegExp.test(inputFemail.value);
    let small = inputFemail.nextElementSibling;
    if(emailTest){
       small.innerHTML = ' valid email';
       small.style.color= '#96C291';
       inputFemail.style.border = '2px solid #96C291';
    }
    else{
       small.innerHTML = 'invalid email';
       small.style.color = '#D83F31';
       inputFemail.style.border = '2px solid #D83F31';
    }
};
// function validemail(inputFemail){
//     let emailRegExp = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+');
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
   
   let form = document.querySelector('#form');
   form.addEventListener("input", function(){
       form.firstname.addEventListener('input', function(){
       validFname(form.firstname);
       }); 
       form.email.addEventListener('input',function(){
        validemail(this);
       })
   })