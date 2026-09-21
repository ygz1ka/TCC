formularioLogin.addEventListener("submit", function(e) {

    e.preventDefault();

    const usuario = campoUsuario.value.trim();
    const senha = campoSenha.value.trim();

    if (usuario === "professor" && senha === "123456") {

        localStorage.setItem("logado", "true");
        localStorage.setItem("tipoUsuario", "professor");

        window.location.href = "../painelprofessor.html";

    } else {

        alert("Usuário ou senha incorretos.");

    }

});



const botaoMostrarSenha = document.getElementById("mostrar-senha");
const campoSenha = document.getElementById("senha");
const campoUsuario = document.getElementById("usuario");
const checkboxLembrar = document.getElementById("lembrar");
const formularioLogin = document.getElementById("form-login");


        // CARREGAR TEMA SALVO


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
        iconeTema.src = "../imagens/sun.png";

    } else {

        localStorage.setItem("tema", "claro");
        iconeTema.src = "../imagens/moon.png";

    }
});

        //   MOSTRAR SENHA


botaoMostrarSenha.addEventListener("click", function () {

    if (campoSenha.type === "password") {

        campoSenha.type = "text";

        botaoMostrarSenha.textContent = "🙈";
        botaoMostrarSenha.setAttribute(
            "aria-label",
            "Ocultar senha"
        );

    } else {

        campoSenha.type = "password";

        botaoMostrarSenha.textContent = "👁️";
        botaoMostrarSenha.setAttribute(
            "aria-label",
            "Mostrar senha"
        );

    }

});


        // CARREGAR USUÁRIO SALVO


const usuarioSalvo = localStorage.getItem("usuarioLembrado");

if (usuarioSalvo) {

    campoUsuario.value = usuarioSalvo;

    checkboxLembrar.checked = true;

}




