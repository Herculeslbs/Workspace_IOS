// objeto window
window.alert('Bem vindos, queridooos');

// Alterar o título
document.title = 'Exercício aula 11 JS';

// Criar um elemento <section>
let section = document.createElement('section');
document.body.appendChild(section);

// Criar um elemento <article>
let article = document.createElement('article');
document.body.appendChild(article);

// Criar um elemento <h1> <section> 
let h1 = document.createElement('H1');
h1.innerHTML = 'Olá alunos!';
section.appendChild(h1);
h1.style.textAlign = 'center';
// Criar um elemento <p> <section>
let p = document.createElement('p');
p.innerHTML = 'O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.';
section.appendChild(p);
p.style.borderBottom = 'solid 3px #000';
p.style.textAlign = 'center';
p.style.fontWeight = 'bold';

// Criar um elemento <h1> <article> 
let ah1 = document.createElement('H1');
ah1.innerHTML = 'Olá alunos!';
article.appendChild(ah1);
ah1.style.textAlign = 'center';
// Criar um elemento <p> <section>
let ap = document.createElement('p');
ap.innerHTML = 'O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.';
article.appendChild(ap);
ap.style.borderBottom = 'solid 3px #000';
ap.style.textAlign = 'center';
ap.style.fontWeight = 'bold';

