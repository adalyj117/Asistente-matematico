addEventListener("DOMContentLoaded",() => {
    const boton = document.querySelector('.btn_menu')
    if(boton){
        boton.addEventListener('click',() => {
            const menu = document.querySelector('.navbar-nav')
            menu.classList.toggle("show")
        })
    }
})