alert(`Conferir Console`);

console.log('\nNúmeros Pares e Ímpares');

const posicoes = [17, 43, 8, 4, 56, 29];
posicoes.forEach(numeros)

function numeros(index) {
    if (index % 2 == 0) console.log(`\nNúmero par: ${index}`);

    else if (index % 2 != 0) console.log(`\nNúmero ímpar: ${index}`);
};

console.log('\nNúmeros que são menores ou iguais a 18')

posicoes.filter((index) => {
    if (index <= 18) {
        console.log(`\nNúmero: ${index}`)
    }
})