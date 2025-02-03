//Exercício 1 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Boas vindas!"); 


//Exercício 2 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize 
// o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Gustavo";
console.log(`Olá, ${nome}!`);


//Exercício 3 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize 
// o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá, ${nome}!`);


//Exercício 4 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação 
// que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador
let linguagem = prompt("Qual linguagem de programação você mais gosta?");
console.log(`${linguagem}`);


//Exercício 5 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores 
// numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em 
// uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem 
// "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = parseInt(Math.random()*100 + 1);
let valor2 = parseInt(Math.random()*100+ 1);
let soma = valor1 + valor2;
console.log(` A soma de ${valor1} e ${valor2} é ${soma}`);


//Exercício 6 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores 
// numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em 
// uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem 
// "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let diferença = valor1 - valor2;
console.log(` A diferença de ${valor1} e ${valor2} é ${diferença}`);

//Exercício 7 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if 
// para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt("Qual a sua idade?");
if(idade< 18){
    console.log(`${idade},menor de idade `);
} else{
    console.log(`${idade},maior de idade `);
}

//Exercício 8 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo,
// negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt("Digite um número para verificação da origem dele (negativa, positiva, nula).");
if(numero < 0){
    console.log(`${numero} é negativo`);
} else{
    console.log(`${numero} é positivo`);
}
if(numero == 0){
    console.log("0 é nulo");
}


//Exercício 9 - Use um loop while para imprimir os números de 1 a 10 no console.
let sequencia = 0
while(sequencia <11){
    console.log(sequencia++);
}


//Exercício 10 - Crie uma variável "nota" e atribua um valor numérico a ela. 
// Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = parseInt(Math.random()*11);
if(nota >= 7){
    console.log(`${nota}, aprovado!`);
}else{
    console.log(`${nota}, reprovado.`)
}

//Exercício 11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log(Math.random()*10);

//Exercício 12 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console
console.log(parseInt(Math.random()*10 + 1));

//Exercício 13 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
console.log(parseInt(Math.random()*1001+ 1));
