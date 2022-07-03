let nomeInput = document.querySelector('#nome');
let emailInput = document.querySelector('#email');
let assuntoInput = document.querySelector('#assunto');
let mensagemInput = document.querySelector('#mensagem');
let botao = document.querySelector('#botao');

let nome;
let email;
let assunto;
let mensagem;

let nomeValido = false;
let emailValido = false;
let assuntoValido = false;
let mensagemValida = false;

botao.addEventListener('click', function(e) {
    e.preventDefault();
    nome = nomeInput.value;
    email = emailInput.value;
    assunto = assuntoInput.value;
    mensagem = mensagemInput.value;
    
    nomeInput.value = validaNome(nome);
    emailInput.value = validaEmail(email);
    assuntoInput.value = validaAssunto(assunto);
    mensagemInput.value = validaMensagem(mensagem);

    if (nomeValido && emailValido && assuntoValido && mensagemValida) {
        nomeInput.value = "";
        emailInput.value = "";
        assuntoInput.value = "";
        mensagemInput.value = "";
        alert("\nObrigado! Retorno em breve.")
    }
})

function validaNome(nome) {
    if (nome.length < 1) {
        return "Por favor, preencha este campo! ♥"
    }
    else if (nome.length > 50) {
        return "O nome até 50 caracteres! ♥"
    }
    else {
        nomeValido = true;
        return nome;
    }
}

function validaEmail(email) {
    let regExEmail = /\S+@\S+\.\S+/;
    let emailEhValido = regExEmail.test(email);
      
    
    if (email.length < 1) {
        return "Por favor, preencha este campo! ♥"
    }
    else if (!emailEhValido) {
        return "Por favor, digite um email válido!"
    }
    else {
        emailValido = true;
        return email;
    }
}

function validaAssunto(assunto) {
    if (assunto.length < 1) {
        return "Por favor, preencha este campo! ♥"
    }
    else if (assunto.length > 50) {
        return "Assunto até 50 caracteres! ♥"
    }
    else {
        assuntoValido = true;
        return assunto;
    }
}

function validaMensagem(mensagem) {
    if (mensagem.length < 1) {
        return "Por favor, preencha este campo! ♥"
    }
    else if (mensagem.length > 300) {
        return "Mensagem até 300 caracteres! ♥"
    }
    else {
        mensagemValida = true;
        return mensagem;
    }
}