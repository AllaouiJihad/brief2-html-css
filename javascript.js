

let menu = document.getElementById('menu');
let nav = document.getElementById('nav');

menu.addEventListener('click', function () {
    if (nav.style.display === "none") {
        nav.style.display = "inline-block";
    }else{
        nav.style.display = "none";
    }
});



let plus1 = document.getElementById('plus1');
let input1 = document.getElementById('input1');
let price = document.getElementById('price');
let price1 = document.getElementById('price1');
function totale2(){
   price.innerHTML =(400*parseInt(input2.innerHTML)) + '$' ;

 }
 function totale1(){
    price1.innerHTML = (400*parseInt(input1.innerHTML)) + '$';
 
  }
plus1.addEventListener('click',function(){
    input1.innerHTML = parseInt(input1.innerHTML) + 1;
    totale1();
});
let minus1 = document.getElementById('minus1');

minus1.addEventListener('click',function(){
    input1.innerHTML = parseInt(input1.innerHTML) - 1;
    totale1();
});

//
let plus2 = document.getElementById('plus2');
let input2 = document.getElementById('input2');

plus2.addEventListener('click',function(){
    input2.innerHTML = parseInt(input2.innerHTML) + 1;
    totale2();
});
let minus2 = document.getElementById('minus2');

minus2.addEventListener('click',function(){
    input2.innerHTML = parseInt(input2.innerHTML) - 1;
    totale2();
});
