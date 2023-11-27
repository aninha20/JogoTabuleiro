const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer')

const personagens = [
    'pikachu',
    'eevee',
    'pikachudoAsh',
    'pokemon-lendario',
    'charmander',
    'pinsir',
    'equipe_ash',
    'bulbasauro',
    'squirtle',
    'espeon'
];

//Função para criar um elemento
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disableCards = document.querySelectorAll('.disable-card');

    if(disableCards.length == 20){
        clearInterval(this.loop);
        alert(`Parabés ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML} `);
    }
}

const checkCards = () => {
    const firstPersonagem = firstCard.getAttribute('data-character');
    const secondPersonagem = secondCard.getAttribute('data-character');

    if(firstPersonagem == secondPersonagem){
        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
    }else{
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        }, 500)
    }
}
//revelando cartas
const revealCard = ({target}) => {
    if(target.parentNode.className.includes('reveal-card')){
        return;
    }  
    if(firstCard == ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    }else if(secondCard == ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
}

// Função para criar as cartas do jogo
const createCard = (personagem) => {
    //recebe a tag do elmento que você quer criar
   const card = createElement('div', 'card');
   const front = createElement('div', 'face front');
   const back = createElement('div', 'face back');

   front.style.backgroundImage = `url('../Imagens/${personagem}.png')`

   //acrescentar um filho na div
   card.appendChild(front); 
   card.appendChild(back);

   card.addEventListener("click", revealCard)
   card.setAttribute('data-character', personagem)
   return card;
};

//carrega o  jogo; embaralha as cartas
const loadGame = () => {

    const duplicatePersonagem = [...personagens, ...personagens]; //usado para duplicar as cartas
    const ArrayEmbaralhado = duplicatePersonagem.sort(() => Math.random()-0.5); //embaralha o array

    ArrayEmbaralhado.forEach((personagem) =>{
        const card = createCard(personagem);
        grid.appendChild(card);
    });
}

//contar o trempo
const startTime = () => {
    //armazena uma referência do setinterval para parar o loop
    this.loop = setInterval(() => {

        const tempoAtual = Number(timer.innerHTML); //ou colocar um + na frente
        timer.innerHTML = tempoAtual + 1;

    },1000);
}
//executa quando a janela carrega
window.onload = () => {
    //salva nome
    const playerName = localStorage.getItem('player');
    spanPlayer.innerHTML = playerName;

    startTime();
    loadGame();
}
