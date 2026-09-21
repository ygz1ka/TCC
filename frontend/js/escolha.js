const botaoTema = document.getElementById("tema");
const iconeTema = document.getElementById("icone-tema");
const opcoesAcesso = document.querySelectorAll(".opcao-acesso");

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
        iconeTema.src = "assets/imagens/sun.png";

    } else {

        localStorage.setItem("tema", "claro");
        iconeTema.src = "assets/imagens/moon.png";

    }

});


// ESCOLHER ALUNO OU PROFESSOR


opcoesAcesso.forEach(function(opcao) {

    opcao.addEventListener("click", function() {

        const tipo = opcao.getAttribute("data-tipo");

            if (tipo === "aluno") {
              
              window.location.href = "pages/loginaluno.html";
            
            }else if (tipo === "professor") {

                window.location.href = "pages/loginpage.html";
            }

    });

});