/*
//****** Declarações
var nome = "Jhonny Rohr";
var n1 = 5;
var n2 = 10;
var frase = "Argentina é o melhor time do mundo";

//Abrindo o inspecionar código do browser, é possível utilizar e fazer as verificações como o 'console.log'
console.log(nome);
console.log(n1 * n2);
console.log(frase);

console.log(frase.replace("Argentina", "Brasil"));
// exemplo de utilização do replace
// alert(frase.replace("Argentina", "Brasil"));
*/

/*
//****** Arrays
var lista = ["morango", "laranja", "banana"];
// adicionando item na array existente
lista.push("uva");
console.log(lista);
//para apagar o ultimo iten inserido no array
lista.pop();
console.log(lista);
//para apresentar o número de itens na array
console.log(lista.length);
//apresentando o array a partir do último
console.log(lista.reverse());
//passando para string
console.log(lista.toString());
//alterando o espaçamento dos itens na string
console.log(lista.join(" - "));
*/

/*
//******* Dicionário
var fruta = {nome:"morango", cor:"vermelho"}
console.log(fruta.cor);
alert(fruta.nome + " " +fruta.cor);
*/

/*
//******* lista de dicionários
var frutas = [{nome:"morango", cor:"vermelho"}, {nome:"banana", cor:"amarela"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
//Coletando informações
var idade = prompt("Digite sua idade");
if(idade < 18){
    alert("Você é menor de idade")
}else {
    alert("Você é maior de idade")
}
*/

//******* Estruturas de repetição
/*
var count = 0;
while (count <=5 ){
    console.log(count);
    count++;
}

var count;
for(count = 0; count <=5; count++){
    console.log(count);
}
*/

/*
//Maneiras de trabalhar com datas
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

//******* Funções
/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, outro_nome){
    return frase.replace(nome, outro_nome);
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
function validaIdade(idade){
    var idade;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }return validar;
}
var idade = prompt("Digite sua idade");
console.log(validaIdade(idade));
*/

//função que injeta informações no arquivo html com o id agradecimento
function clicar(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar(){
    // window.open("https://www.google.com");
    window.location.href = "https://www.yahoo.com.br";
}

function trocar(elemento){
    // document.getElementById("mouse_move").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse"
    // alert("trocar texto");
}

function voltar(elemento){
    // document.getElementById("mouse_move").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}