let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");
let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
    // esta função fará com que pegue o valor atual
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charSet.length; i < sliderElement.value; ++i){
        // esta função passará pela variável charSet quantas vezes o usuário colocar no slider para a senha
        pass += charSet.charAt(Math.floor(Math.random() * n)) // charAt para pegar uma posição, Math.floor é para gerar um número inteiro, * n é para gerar o número aleatório do tamanho do charSet
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    // função para copiar a senha ao clicar em cima
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}