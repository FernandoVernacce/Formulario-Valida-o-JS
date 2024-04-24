
const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // verifica se o nome está vazio
    if (nameInput.value === ""){
        alert("Por favor, preencha seu nome!")
        return; // return para não continuar a função
    }

    // verifica se o email está preenchido e se é valido
    if (emailInput.value === "" || !isEmailvalid(emailInput.value)){
        alert("Por favor, preencha seu E-mail!")
        return;
    }

    // verifica se a senha está preenchida
    if (!validatePassword(passwordInput.value, 8)){
        alert("Por favor, a senha precisa ter no min 8 digitos!")
        return;
    }

    // verifica se a situação foi preenchida
    if (jobSelect.value === ""){
        alert("Por favor, preencha a sua situação")
        return;
    }

    // verifica se a mensagem foi escrita
    if (messageTextarea.value === ""){
        alert("Por favor, escreva a sua mensagem!")
        return;
    }

    // se todos os campos estiverem preenchido, envie o form
    form.submit()
});

// função que valida email

function isEmailvalid(email){
    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/ // esse comando valida o que pode conter no email
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

// função que valida a senha

function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        // senha valida
        return true;
    }
        // senha invalida
        return false;
}