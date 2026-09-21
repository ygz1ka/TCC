if(localStorage.getItem("logado") !== "true"){

    window.location.href = "login.html";

}

const botaoTema = document.getElementById("tema");
const iconeTema = document.getElementById("icone-tema");

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    document.body.classList.add("dark");
    iconeTema.src = "../imagens/sun.png";
} else {
    document.body.classList.remove("dark");
    iconeTema.src = "../imagens/moon.png";
}

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("tema", "escuro");
        iconeTema.src = "/frontend/assets/imagens/sun.png";

    } else {

        localStorage.setItem("tema", "claro");
        iconeTema.src = "/frontend/assets/imagens/moon.png";

    }
});


const menu = document.querySelector(".menu");
const aside = document.querySelector("aside");

menu.addEventListener("click", function(){

    aside.classList.toggle("abrir");

});


document.querySelectorAll(".btn-contato").forEach(function (botao) {

    botao.addEventListener("click", function () {

        const numero = botao.getAttribute("data-numero");

        const mensagem = encodeURIComponent(
            "Olá! Vim pelo site do Senai e gostaria de entrar em contato."
        );

        const linkWhatsApp =
            `https://wa.me/${numero}?text=${mensagem}`;

        window.open(linkWhatsApp, "_blank");

    });

});


const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const salvar = document.getElementById("salvar");
const logout = document.getElementById("logout");

/* Carregar os dados salvos */
if(email && telefone){

    const emailSalvo = localStorage.getItem("emailAluno");
    const telefoneSalvo = localStorage.getItem("telefoneAluno");

    if(emailSalvo){
        email.value = emailSalvo;
    }

    if(telefoneSalvo){
        telefone.value = telefoneSalvo;
    }

}

/* Salvar e-mail e telefone */
if(salvar){

    salvar.addEventListener("click", function(){

        const emailDigitado = email.value.trim();
        const telefoneDigitado = telefone.value.trim();

        if(emailDigitado === "" || telefoneDigitado === ""){
            alert("Preencha o e-mail e o telefone.");
            return;
        }

        localStorage.setItem("emailAluno", emailDigitado);
        localStorage.setItem("telefoneAluno", telefoneDigitado);

        alert("Informações salvas com sucesso!");

    });

}

/* Máscara do telefone */
if(telefone){

    telefone.addEventListener("input", function(){

        let numero = telefone.value.replace(/\D/g, "");

        numero = numero.substring(0, 11);

        if(numero.length > 10){

            telefone.value = numero.replace(
                /(\d{2})(\d{5})(\d{4})/,
                "($1) $2-$3"
            );

        }else if(numero.length > 6){

            telefone.value = numero.replace(
                /(\d{2})(\d{4})(\d{0,4})/,
                "($1) $2-$3"
            );

        }else if(numero.length > 2){

            telefone.value = numero.replace(
                /(\d{2})(\d{0,5})/,
                "($1) $2"
            );

        }else{

            telefone.value = numero;

        }

    });

}

/* Logout */
if(logout){

    logout.addEventListener("click", function(){

        const confirmar = confirm(
            "Tem certeza de que deseja sair da conta?"
        );

        if(confirmar){

            localStorage.removeItem("logado");

            window.location.href =
                "escolha/index.html";

        }

    });

}

const itensConfiguracao =
    document.querySelectorAll(".item-configuracao");

itensConfiguracao.forEach(function(item){

    item.addEventListener("click", function(){

        itensConfiguracao.forEach(function(outroItem){
            outroItem.classList.remove("ativo");
        });

        item.classList.add("ativo");

        const secao = item.getAttribute("data-secao");

        console.log("Seção escolhida:", secao);

    });

});