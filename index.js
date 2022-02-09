import cipher from './cipher.js';

function cifrar() {

    let texto = document.getElementById("inputCaixaTexto").value.toUpperCase();/* variável que recebe o texto pelo id e deixa o valor em LETRA MAIÚ */
    let chave = Number(document.getElementById("Offset").value); /* recebe o offset */
    document.getElementById("result").value = cipher.encode(chave, texto); /* resultado com os valores de offset e texto */
}

function decifrar() {
    let texto = document.getElementById("inputCaixaTexto").value.toUpperCase();
    let chave = Number(document.getElementById("Offset").value);
    document.getElementById("result").value = cipher.decode(chave, texto);
}

function limpar() {
    document.getElementById("inputCaixaTexto").value = "";
    document.getElementById("Offset").value = "0";
    document.getElementById("result").value = "";
}

let btnEncrypt = document.getElementById('btnEncrypt');
btnEncrypt.addEventListener("click", cifrar);

let btnDecrypt = document.getElementById('btnDecrypt');
btnDecrypt.addEventListener("click", decifrar);

let btnClean = document.getElementById('btnClean');
btnClean.addEventListener("click", limpar);



