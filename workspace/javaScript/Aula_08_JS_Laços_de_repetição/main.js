//Laço while do Matheus
let profHelo = 1;

while(profHelo <= 5){
    console.log('Bate palma');
    //profHelo = profHelo + 1           
    profHelo ++ //Sempre tem que existir um incremento ou decremento
}                                   //Se não gera Loop infinito

//Laço do-while
do{
    console.log('Bater palma');
    console.log(profHelo)
    profHelo ++
}while(profHelo <= 5);

//Exibir o valor de 1 até 10
let contador = 1;

while(contador <= 10){
    console.log(`O valor do contador é? ${contador}`)
    contador ++
}

//Decremento
let contador1 = 10;

while(contador1 >= 0){
    console.log(`O valor: ${contador1}`)
    contador1 --
}

//Laço For
for(let profHelo1 = 1; profHelo1 <= 5; profHelo1 ++){
    console.log('Olá Jackass');
}

//Exibir o valor de 1 até 10 (Laço For)
for(let contador2 = 10; contador2 >= 0; contador2 --){
    console.log(`O valor: ${contador2}`)
}

//Laços de repetição e arrays
const frutas = ['maca','laranja','pera',10]

for(let j = 0; j < frutas.length; j++){
    console.log(`Nome: ${frutas[j]}`)
}

//Laços de repetição e arrays
const carros = ['Gol','Voyage','Saveiro','Golf','Nivus','Passat','jetta','Tiguan']

for(let j = 0; j < carros.length; j+=2){
    console.log(`Nome: ${carros[j]}`)
}

// Array de objetos e laços
console.clear();
const todos = [
{
id: 1,
text: 'Take out trash',
isCompleted: true,
},
{
id: 2,
text: 'Meeting with boss',
isCompleted: true,
},
{
id: 3,
text: 'Dentist appt',
isCompleted: false,
},
];

// For overloop
for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
    }
    