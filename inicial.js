var voltaPaginaTopo = document.querySelector(".volta-topo");

var pegaProjetosGuia = document.querySelector(".quadro-projetos");

var linkGuia = document.querySelector(".quadro-guiaotimiza");
var pegaOnsale = document.querySelector(".quadro-onsale");
var pegaEdicao = document.querySelector(".quadro-edicao");


voltaPaginaTopo.addEventListener("click", function(){
    window.scrollTo(0, 0);
});

pegaProjetosGuia.addEventListener("click", function(){
    incluiTextosOcultos();
    var excluiQuadros = document.querySelector(".quadros-inicial");
    excluiQuadros.classList.add("remove-tela");
})

linkGuia.addEventListener("click", function(){
    window.location.assign("https://frsservicos.herokuapp.com/Projeto_Guia_Otimiza/guia.html");
})

pegaOnsale.addEventListener("click", function(){
    window.location.assign("https://frsservicos.herokuapp.com/Projeto_Guia_Otimiza/guia.html");
})

pegaEdicao.addEventListener("click", function(){
    window.location.assign("https://frsservicos.herokuapp.com/Projeto_Guia_Otimiza/guia.html");
})

function incluiTextosOcultos (){
    var pegaQuadroOculto = document.querySelectorAll(".remove-tela");

    for ( var i = 0 ; i < pegaQuadroOculto.length; i++){
        pegaQuadroOculto[i].classList.remove("remove-tela");
        console.log(i);
    };
}


// pegaQuadroOculto.classList.add(".quadros-inicial");

// for (var itensQuadros; i = 0; i++){
    //     incluiQuadro.classList.remove("remove-tela");
    // }

// pegaQuadroOculto.forEach(function () {
//     pegaQuadroOculto[0].remove(".remove-tela");
// });




