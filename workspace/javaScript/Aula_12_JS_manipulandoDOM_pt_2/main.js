// Metodo getElementById() pega elemeto pelo id
let titulo = document.getElementById('titulo');
// Alterando o conteudo do HTML
titulo.innerHTML = 'Vai perder o PC galera do AWS';
// COnfigurando o CSS do HTML
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';


// Metodo  getElementsByClassName() pega elemeto pelo nome da class
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
// Alterando o conteudo do HTML
items[1].textContent = 'Hello 2';
// COnfigurando o CSS do HTML
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'red';
items[1].style.padding = '.5rem';

// Metodo  getElementsByTagName() pega elemeto pelo nome da tag
let li = document.getElementsByTagName('li');
console.log(li);

// Utilizando o FOR para percorrer a lista
for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#CCCCC9';
    items[i].style.fontWeight = 'bold';
}

// Utilizando o FOR para percorrer a lista
for(let c = 0; c < li.length; c+=2){
    li[c].style.backgroundColor = 'pink';
}

// Metodo  getElementsByName() pega o elemeto pelo atributo name 
let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome);
nome[0].textContent = 'Pose de quebrada';
nome[0].style.backgroundColor = '#BAC1FB';
nome[1].textContent = 'RECEBA';
nome[1].style.backgroundColor = 'yellow';

// Remover conteudo
let item2 = document.getElementById('item2');
item2.remove();

// Inserir um valor 
let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1.nextSibling);

// Alterar estilo da lista
let ul = document.getElementById('items');
ul.style.listStyle = 'none';
ul.style.listStyle = 'decimal inside';

// Para alterar apenas um pai especifico
let teste = document.getElementById('items');
let teste1 = teste.getElementsByTagName('li');
console.log(teste1);
