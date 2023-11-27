function tocaSom(idE1ementoAudio){
    document.querySelector(idE1ementoAudio).play();
} 
const listaDeTeclas = document.querySelectorA11(".tecla");

let contador = 0;
while(contador < listaDeTeclas.length){ 
    const efeito = listaDeTeclas[contador].classiList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function(){ 
        tocaSom (idAudio)
    }
    contador = contador + 1;
}