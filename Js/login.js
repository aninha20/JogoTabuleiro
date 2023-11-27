const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form')

/*Habilitando o botão*/
const validateInput = ({target}) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled'); 
        return;
    }
    button.setAttribute('disabled', '')
}

/*Função para envio de formulário*/
const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value); /*Salva e cria uma chave no storage do nome do usuário*/
    window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit);