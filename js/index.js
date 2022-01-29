let divmenu1= document.getElementById("menu1")
let divmenu2= document.getElementById("menu2")
let divmenu3= document.getElementById("menu3")

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")


const activar = () => {
    divmenu1.classList.remove("activar")
    divmenu2.classList.add("activar")
    divmenu3.classList.add("activar")
}

const activar2 = () => {
    divmenu2.classList.remove("activar")
    divmenu1.classList.add("activar")
    divmenu3.classList.add("activar")
}

const activar3 = () => {
    divmenu3.classList.remove("activar")
    divmenu2.classList.add("activar")
    divmenu1.classList.add("activar")
}
