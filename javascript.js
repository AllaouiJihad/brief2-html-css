// const menu = document.getElementsByClassName('menu');
// const nav = document.getElementsByClassName('nav');

// menu.addEventListener('click', () => {
// navbarLinks.classList.toggle('active')
// })

let menu = document.getElementById('menu');
let nav = document.getElementById('nav'); // Accédez au premier élément de la collection

menu.addEventListener('click', function () {
    if (nav.style.display === "none") {
        nav.style.display = "inline-block";
    }else{
        nav.style.display = "none";
    }
});
