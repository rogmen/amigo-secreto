//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let contador = 0;
let amigos = [];
let amigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");


function adicionarAmigo() {
    if (amigo.value != ""){
        amigos.push(amigo.value);
        amigo.value = "";
        ordenarAmigos();
    } else {
        alert("Campo vazio.");
    }
}

function ordenarAmigos(){
    limparLista()
    for(i=0; i < amigos.length; i++){
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }    
}

function sortearAmigo(){
    limparLista()
    if(amigos.length != 0){
        //amigoSorteado = amigos[parseInt((Math.random() * amigos.length) + 1)];
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
        amigos = [];
    } else {
        resultado.innerHTML = "Nenhum amigo foi adicionado.";
    }
}

function limparLista() {
    listaAmigos.innerHTML = "";    
    resultado.innerHTML = "";
}