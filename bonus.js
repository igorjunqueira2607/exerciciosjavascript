// Localizar o nível de bônus de acordo com a faixa salarial.
// De R$0 até R$3999 - 9% de bônus
// De R$4000 até R$6999 - 7% de bônus
// De R$7000 até R$10999 - 5% de bônus
// Acima de R$11000 - 3% de bônus

const salario = 7500;
let bonus = 0;


if (salario >= 11000) {
    bonus = salario * 0.03;
} else if (salario <= 10999 && salario >= 7000){
    bonus = salario * 0.05;
} else if (salario <= 6999 && salario >= 4000) {
    bonus = salario * 0.07;
} else {
    bonus = salario * 0.09;
};

console.log(bonus);