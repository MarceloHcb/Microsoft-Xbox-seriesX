const label = document.querySelectorAll("label")
const logo = document.querySelectorAll(".logo img")
const joystick = document.querySelectorAll(".joystick")
const hh = document.querySelectorAll(".hh")
const input = document.querySelectorAll("input")
console.log(input)
let contador = 0
logo.forEach(lg => {

    lg.addEventListener("mouseover", function () {
        contador++
        lg.src = "../src/images/LOGO1.png"
        if (contador == 2) {
            lg.src = "../src/images/LOGO.png"
        }
        if (contador == 2) {
            contador = 0
        }
    })
})
joystick.forEach(jt => {
    jt.addEventListener("mouseover", function () {
        contador++
        jt.src = "../src/images/joystick1.png"
        if (contador == 2) {
            jt.src = "../src/images/joystick.png"
        }
        if (contador == 2) {
            contador = 0
        }

    })
})
hh.forEach(element => {
    element.addEventListener("click", function () {
        if (element.classList.contains("rotate")) {
            element.classList.toggle("rotate")
            element.src = "src/images/seta-cinza.png"
        } else {
            hh.forEach((element) => (element.classList.remove("rotate"), element.src = "src/images/seta-cinza.png"))
            element.classList.add("rotate")
            element.src = "src/images/seta-verde.png"
        }
    })
})



