let leroLero = 'Dr Stephen Strange lança um feitiço proibido que abre um portal para o multiverso. No entanto, surge uma ameaça que pode ser grande demais para sua equipe lidar.';

//Acessa uma String
console.log(leroLero.charAt(0));

//Tamanho da String
console.log(`O tamanho da String é: ${leroLero.length}`)

//Substituir uma string dentro da string
let leroLero1 = leroLero.replace('Dr Stephen Strange','Feiticeira Escarlate');
console.log(leroLero1);

//Split
let leroLero2 = 'Dr Stephen Strange lança um feitiço proibido que abre um portal para o multiverso. No entanto, surge uma ameaça que pode ser grande demais para sua equipe lidar.'
let leroLero3 = leroLero2.split(' ');
console.log(leroLero3);
console.log(leroLero3[13]);

//Maiúsculas
let leroLero4 = 'dr stephen strange lança um feitiço proibido que abre um portal para o multiverso. no entanto, surge uma ameaça que pode ser grande demais para sua equipe lidar.';
console.log(leroLero4.toUpperCase());
