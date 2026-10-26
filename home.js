let retangulos = document.querySelectorAll(".retangulo");

retangulos.forEach(function(retangulo) {

    retangulo.addEventListener("click", function() {

        let lingua = retangulo.dataset.lingua;

        localStorage.setItem("lingua", lingua);

        window.location.href = "traducao.html";

    });

});

let comecar = document.getElementById("comecar");

comecar.addEventListener("click", function() {

    localStorage.setItem("lingua", "Emakhua");

    window.location.href = "traducao.html";

});

let conhecer = document.getElementById("conhecer");

conhecer.addEventListener("click", function() {

    window.location.href = "sobre.html";

});