
// menu.addEventListener('click', () => {
// navbarLinks.classList.toggle('active')
// })
// header
let menu = document.getElementById('menu');
let nav = document.getElementById('nav');

menu.addEventListener('click', function () {
    if (nav.style.display === "none") {
        nav.style.display = "inline-block";
    }else{
        nav.style.display = "none";
    }
});
//page basket 
let plus1 = document.getElementById('plus1');
let input1 = document.getElementById('input1');
let price = document.getElementById('price');
let price1 = document.getElementById('price1');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let totale = document.getElementById('Total');
let del = document.getElementById('trash');
let del2 = document.getElementById('trash2');
let product1 = document.getElementById('product1');
let product2 = document.getElementById('product2');
let pro1 = document.getElementById('pro1');
let pro2 = document.getElementById('pro2')
//////////////////
del.addEventListener('click',function(){
    product1.style.display ="none";
    pro1.style.display = "none";
    totale.innerHTML= parseInt(p2.innerHTML)+'$';
});
del2.addEventListener('click',function(){
    product2.style.display ="none";
    pro2.style.display = "none";
    totale.innerHTML= parseInt(p1.innerHTML)+'$';
});
function delete1(){
    totale.innerHTML= parseInt(p2.innerHTML) +'$';

}
function delete2(){
    totale.innerHTML= parseInt(p1.innerHTML) +'$';
}
///////////////
p1.innerHTML=parseInt(price.innerHTML)+ '$';
p2.innerHTML=parseInt(price1.innerHTML)+ '$';
totale.innerHTML= parseInt(p1.innerHTML)+parseInt(p2.innerHTML)+'$';

 function totale1(){
    price1.innerHTML = (400*parseInt(input1.innerHTML)) + '$';
    p1.innerHTML=parseInt(price1.innerHTML)+ '$';
    if(product2.style.display =="none"){
        delete2();
    }
    else{
        totale.innerHTML = parseInt(p2.innerHTML)+ parseInt(p1.innerHTML)+ '$';
    }

    
  }
function totale2(){
   price.innerHTML =(400*parseInt(input2.innerHTML)) + '$' ;
   p2.innerHTML=parseInt(price.innerHTML)+ '$';
   if(product1.style.display=="none"){
        delete1();
    }
    else{
    totale.innerHTML = parseInt(p2.innerHTML)+ parseInt(p1.innerHTML)+ '$';

    }
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


