/* ======================================
   Botao Voltar ao Topo
====================================== */

const topo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topo.style.display = "block";

    } else {

        topo.style.display = "none";

    }

});

topo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* ======================================
   Animacao ao rolar a pagina
====================================== */

const elementos = document.querySelectorAll(
    ".card, .principais-sintomas, .container, .container h2, .mitos, .mitos-container,.card-mitos,.planner-imagem,.card-antes li,.card-depois li, .perguntas, .antes-depois, .atividade,.card-antes, .card-rotina,.rotina-diaria p, .card-depois, .texto, .galeria, .imagem,.conscientizacao-data,.conscientizacao-tdha,.imagem img, .imagem p"
);

const observar = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = ".7s";

    observar.observe(elemento);

});


/* ======================================
   Mensagem de boas-vindas
====================================== */

window.addEventListener("load", () => {

    console.log("Landing Page sobre TDAH carregada com sucesso!");

});

/* ======================================
Cards Mitos e Verdades
====================================== */
const cards = document.querySelectorAll(".card-mitos");

cards.forEach(card => {
    card.addEventListener("click", () => {

        cards.forEach(item => {
            if (item !== card) {
                item.classList.remove("ativo");
            }
        });

        card.classList.toggle("ativo");
    });
});