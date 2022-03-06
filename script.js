let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

var charset = Math.random().toString(36).substring(2, 25);
charset += "!@#$%^&*"

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function() {
   sizePassword.innerHTML = this.value
}

function generatorPassword() {
    let pass = ""
    for (let index = 0, n = charset.length; index < sliderElement.value; index++) {
        pass += charset.charAt(Math.floor(Math.random() * n))  
    }
    
    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    novaSenha = pass
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha)
}