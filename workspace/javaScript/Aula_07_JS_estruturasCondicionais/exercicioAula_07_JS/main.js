alert(`Conferir Console`)
// Array de objetos
const colaboradores = [
    {
        nome: 'Maria',
        salario: 2000, //9%
        vinculo: 'CLT',
    },
    {
        nome: 'João',
        salario: 2000, //9%
        vinculo: 'PJ',
    },
    {
        nome: 'Pedro',
        salario: 3000, //12%
        vinculo: 'CLT',
    },
    {
        nome: 'Aline',
        salario: 4000, //14%
        vinculo: 'PJ',
    },
    {
        nome: 'Paulo',
        salario: 5000, //14%
        vinculo: 'CLT',
    },

];

const tableINSS = [
    [0, 1212, 0.075],
    [1212, 2427, 0.09],
    [2427, 3641, 0.12],
    [3641, 7087, 0.14],
];

for (let i = 0; i < colaboradores.length; i++) {
    if (colaboradores[i].vinculo === 'CLT') {
        if (colaboradores[i].salario <= tableINSS[0][1]) {
            var INSS = colaboradores[i].salario * tableINSS[0][2];
        } else if (colaboradores[i].salario > tableINSS[1][0] && colaboradores[i].salario <= tableINSS[1][1]) {
            var INSS = colaboradores[i].salario * tableINSS[1][2];
        } else if (colaboradores[i].salario > tableINSS[2][0] && colaboradores[i].salario <= tableINSS[2][1]) {
            var INSS = colaboradores[i].salario * tableINSS[2][2];
        } else if (colaboradores[i].salario > tableINSS[3][0] && colaboradores[i].salario <= tableINSS[3][1]) {
            var INSS = colaboradores[i].salario * tableINSS[3][2];
        } else if (colaboradores[i].salario > tableINSS[3][1]) {
            var INSS = colaboradores[i].salario * tableINSS[3][2];
        } else {
            console.log('incalculavel');
        }
        console.log(`O vínculo de ${colaboradores[i].nome} é ${colaboradores[i].vinculo}, seu salário é de ${colaboradores[i].salario} e seu INSS é de ${INSS.toFixed(1)}`);
    } else {
        console.log(`O vínculo de ${colaboradores[i].nome} é ${colaboradores[i].vinculo}, então não paga INSS.`);
    }
}


