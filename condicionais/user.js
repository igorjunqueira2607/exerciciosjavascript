// Usuário free tem acesso limitado.
// Usuário premium tem acesso a todas as funções.
// Usuários super premium tem acesso total e bônus especiais.

const user = 'premium';

switch(user) {
    case 'free':
        console.log('Acesso Limitado');
        break;
    case 'premium':
        console.log('Acesso total ao App');
        break;
    case 'super premium':
        console.log('Acesso total ao App e bônus');
        break;
    default:
        console.log('Tipo de usuário desconhecido');
        break;
};