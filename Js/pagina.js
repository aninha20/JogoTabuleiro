const button = document.querySelector('.jogo-button');
const form = document.querySelector('.jogo-form')

/*Função para envio de formulário*/
const handleSubmit = (event) => {
    event.preventDefault();
    window.location = 'Memory.html';
}

form.addEventListener('submit', handleSubmit);