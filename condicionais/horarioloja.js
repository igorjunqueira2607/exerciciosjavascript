//0: Domingo
//1: Segunda-feira
//2: Terça-feira
//3: Quarta-feira
//4: Quinta-feira
//5: Sexta-feira
//6: Sábado

const diaDaSemana = 3;

if (diaDaSemana === 0 || diaDaSemana === 6) {
    console.log('A loja está aberta em horário especial: 10h às 14h.');
} else {
    console.log('A loja está aberta no horário normal: 9h às 18h.');
};
