const menu = document.getElementsByClassName('menu')[0]
const nav = document.getElementsByClassName('nav')[0]

menu.addEventListener('click', () => {
nav.classList.toggle('active')
})