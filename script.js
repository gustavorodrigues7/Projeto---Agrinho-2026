function animarNumero(id, alvo){

const elemento = document.getElementById(id);

let atual = 0;

const incremento = Math.ceil(alvo / 100);

const timer = setInterval(() => {

atual += incremento;

if(atual >= alvo){
atual = alvo;
clearInterval(timer);
}

elemento.textContent = atual.toLocaleString();

},20);

}

const curiosidades = [

"O Brasil está entre os maiores produtores de alimentos do mundo.",

"Drones conseguem identificar falhas em plantações em poucos minutos.",

"A agricultura de precisão reduz desperdícios e aumenta a produtividade.",

"Bioinsumos ajudam a diminuir a dependência de produtos químicos.",

"Sensores de solo permitem irrigação mais eficiente e sustentável."

];

function trocarCuriosidade(){

const texto = document.getElementById("curiosidadeTexto");

const indice = Math.floor(Math.random() * curiosidades.length);

texto.textContent = curiosidades[indice];

}

window.onload = () => {

animarNumero("n1", 80);
animarNumero("n2", 5000);
animarNumero("n3", 35);

};