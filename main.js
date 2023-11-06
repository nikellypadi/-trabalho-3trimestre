function tocaSom(idE1emetoAudio){
    document.querySelector(idElementoAudio).play();
} 
const listaDeTeclas = document.querySelectorA11(".tecla");

let contador = 0;
while(contador < listaDeTeclas.length){ 
    const efeito = listaDeTeclas[contador].classilist[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function (){ 
        tocaSom (idAudio)
    }
    contador = contador + 1;
}
