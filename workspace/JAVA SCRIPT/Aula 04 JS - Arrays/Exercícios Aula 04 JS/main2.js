// template string
console.log(`**Arrays unidimensionais**`);
// template string
console.log(`Lista de alunos.`);
//Arrays unidimensionais
const lista = ['Joaquim', 'José', 'Silva', 'Xavier', 'Ana'];
console.log(lista);

// template string
console.log(`**Arrays bidimensionais**`);
// template string
console.log(`Notas, ano de nascimento e turma.`);
//Arrays bidimensionais
const lista1 = [[10, 9, 8, 7, 6],[1996, 1997, 1998, 1999, 2000],['1°C', '2°A', '3°D','1°A','3°B'],];
console.log(lista1);

// template string
console.log(`**Lista de alunos, notas, ano de nascimento e turma**`);

console.log( "Aluno 1 " + lista[0] )
console.log( `Nota: ${lista1[0][0]} Nascimento: ${lista1[1][0]} Turma: ${lista1[2][0]}` )

console.log( "Aluno 2 " + lista[1] )
console.log( `Nota: ${lista1[0][1]} Nascimento: ${lista1[1][1]} Turma: ${lista1[2][1]}` )

console.log( "Aluno 3 " + lista[2] )
console.log( `Nota: ${lista1[0][2]} Nascimento: ${lista1[1][2]} Turma: ${lista1[2][2]}` )

console.log( "Aluno 4 " + lista[3] )
console.log( `Nota: ${lista1[0][3]} Nascimento: ${lista1[1][3]} Turma: ${lista1[2][3]}` )

console.log( "Aluno 5 " + lista[4] )
console.log( `Nota: ${lista1[0][4]} Nascimento: ${lista1[1][4]} Turma: ${lista1[2][4]}` )
