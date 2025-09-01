// Verificar se um ano é bissexto.
// Deve ser divisivel por 4, mas não divisível por 100.
// OU 
// Deve ser divisível por 100 e por 400.

const ano = 2024;

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
    console.log(`O ${ano} é bissexto`);
} else {
    console.log(`O ${ano} não é bissexto`);
};