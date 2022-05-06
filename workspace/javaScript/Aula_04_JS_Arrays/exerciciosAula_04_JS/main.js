// template string
console.log(`Numa festa estavam`)
//Arrays unidimensionais
const festa = ['Joaquim', 'José', 'Silva', 'Xavier'];
console.log(festa);
// template string
console.log(`chegou Amanda`)
// unshift()
const festa1 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let w = festa1.unshift('Amanda'); 
console.log(festa1);
// template string
console.log(`saiu Xavier`)
// pop()
const festa2 = ['Amanda', 'Joaquim', 'José', 'Silva', 'Xavier'];
let x = festa2.pop(); 
console.log(festa2);
// template string
console.log(`chegou Zuleica`)
// push()
const festa3 = ['Amanda', 'Joaquim', 'José', 'Silva'];
let y = festa3.push('Zuleica'); 
console.log(festa3);
// template string
console.log(`saiu Amanda`)
// shift()
const festa4 = ['Amanda', 'Joaquim', 'José', 'Silva', 'Zuleica'];
let z = festa4.shift(); 
console.log(festa4);
// template string
console.log(`saiu Silva`)
// delete
const festa5 = ['Joaquim', 'José', 'Silva', 'Zuleica'];
delete festa5[2];
console.log(festa5);
// template string
console.log(`chegou Silvana`)
//atualizando posição vazia 
festa5[2] = 'Silvana';
console.log(festa5);
// template string
console.log(`Ficaram 4 pessoas na festa, que são: ${festa5}`)

// template string
console.log(`**splice() adicinado elemento.**`)
//splice() adicinado elemento
const festa6 = ['Joaquim', 'José', 'Silvana','Zuleica'];
festa6.splice(2, 0, "Leno", "Paty");
console.log(festa6);
// template string
console.log(`Antes: ['Joaquim', 'José', 'Silvana','Zuleica'].`)
console.log(`Depois: ['Joaquim', 'José', 'Leno', 'Paty', 'Silvana', 'Zuleica'].`)

// template string
console.log(`**splice() removendo elemento.**`)
//splice() removendo elemento
const festa7 = ['Joaquim', 'José', 'Leno', 'Paty', 'Silvana', 'Zuleica'];
festa7.splice(0, 1);
console.log(festa7);
// template string
console.log(`Antes: ['Joaquim', 'José', 'Leno', 'Paty', 'Silvana', 'Zuleica'].`)
console.log(`Depois: ['José', 'Leno', 'Paty', 'Silvana', 'Zuleica'].`)

