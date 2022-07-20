//Trabalhando com Strings
//Concatenar
let exemplo1 = 10;
let exemplo2 = 2;
let string1 = 'Aqui vai um texto';

console.log('O resultado da soma entre é: ' + (exemplo1 + exemplo2));
console.log("O resultado da soma entre é: " + (exemplo1 + exemplo2));
console.log(`O resultado da soma entre é: ${exemplo1 + exemplo2}`);

//MÉTODOS DE STRING

//Acessa uma String
let string2 = 'Aqui vai um texto';
console.log(string2.charAt(0));
console.log(string2[1]);

//Tamanho da String
let string3 = 'Aqui vai um texto';
console.log(string3.length)

//Maiúsculas e minúsculas
let string4 = 'aqui vai um texto';
console.log(string4.toUpperCase());
let string5 = 'AQUI VAI UM TEXTO';
console.log(string5.toLowerCase());

//Substring 
let string6 = 'Mozilla';
console.log(string6.substring(1,3));

//Split
let string7 = 'A raposa é um animal esperto'
let string8 = string7.split(' ');
console.log(string8);
console.log(string8[3]);

//Substituir uma string dentro da string
let string9 = 'Aqui vai um texto';
let string10 = string9.replace('Aqui','Kauan');
console.log(string10);
//Remover espaços da string
let string11 = '    Aqui vai um texto';
console.log(string11);
console.log(string11.trim());

//Métodos de buscar uma string
let string12 = 'Aqui vai um texto Aqui';
//String.indexOf()
console.log(string12.indexOf('Aqui'));
//String.lastIndexOf()
console.log(string12.lastIndexOf('Aqui'));
//String.search()
console.log(string12.search('Aqui'));
//String.startsWith()
console.log(string12.startsWith('Aqui'));
//String.endsWith()
console.log(string12.endsWith('.'));//false
console.log(string12.endsWith('i'));//true
console.log(string12.endsWith('I'));//false


