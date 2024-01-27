// Seleciona o elemento HTML com a classe "result" e armazena na variável result
const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

// Inicializa as pontuações do jogador humano e da máquina
let humanScoreNumber = 0;
let machineScoreNumber = 0;

// Definição das opções do jogo (pedra, papel, tesoura) usando um objeto
let GAME_OPTIONS = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors',
};

// Função que representa a escolha do jogador humano e inicia o jogo
const playHuman = (humanChoice) => {
  // Chama a função playMachine para obter a escolha da máquina
  const machineChoice = playMachine();
  // Chama a função playTheGame com as escolhas do jogador humano e da máquina
  playTheGame(humanChoice, machineChoice);
};

// Função que gera a escolha aleatória da máquina entre "rock", "paper" e "scissors"
const playMachine = () => {
  // Array com as opções possíveis para a máquina
  const choices = [
    GAME_OPTIONS.ROCK,
    GAME_OPTIONS.PAPER,
    GAME_OPTIONS.SCISSORS,
  ];
  // Gera um número aleatório entre 0 e 2 para escolher uma opção do array
  const randomNumber = Math.floor(Math.random() * 3);
  // Exibe o número aleatório no console (para fins de depuração)
  console.log(randomNumber);
  // Retorna a escolha da máquina com base no número aleatório gerado
  return choices[randomNumber];
};

// Função principal que avalia as escolhas do jogador e da máquina e exibe o resultado
const playTheGame = (human, machine) => {
  // Exibe no console as escolhas do jogador e da máquina
  console.log('Humano:' + human + ' Maquina:' + machine);

  // Chama a função removeEmojis para limpar emojis anteriores
  removeEmojis();

  // Verifica as condições para determinar o resultado do jogo
  if (human === machine) {
    // Se houver empate, chama a função showResult com a mensagem correspondente e o emoji de empate
    showResult('Vocês empataram seus frangos !! 😒', './img/vc-empatou.gif');
  } else if (
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
  ) {
    // Incrementa a pontuação do jogador humano e atualiza a exibição
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    // Se o jogador ganhar, chama a função showResult com a mensagem correspondente e o emoji de vitória
    showResult('Parabéns Fibrado, você Ganhou !! 😁', './img/vc-ganhou.gif');
  } else {
    // Incrementa a pontuação da máquina e atualiza a exibição
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    // Se o jogador perder, chama a função showResult com a mensagem correspondente e o emoji de derrota
    showResult('Aaa Você Perdeu seu Frango !! 😣 ', './img/vc-perdeu.gif');
  }
};

// Função que exibe o resultado do jogo com uma mensagem e um emoji opcional
const showResult = (message, emojiPath) => {
  result.innerHTML = '';

  // Define o conteúdo HTML da div result com a mensagem recebida

  const text = document.createElement('p');

  text.innerHTML = message;

  // Adiciona o emoji correspondente se um caminho de emoji for fornecido
  if (emojiPath) {
    // Cria um elemento de imagem para o emoji
    const emojiElement = document.createElement('img');
    // Define o caminho da imagem
    emojiElement.src = emojiPath;
    // Define o texto alternativo para acessibilidade
    emojiElement.alt = 'emoji';
    // Adiciona a classe "emoji" ao elemento de imagem
    emojiElement.classList.add('emoji');

    // Adiciona o emoji à div result
    result.append(text, emojiElement);
  }

  // Adiciona classes de animação à div result
  result.classList.add('animate__animated', 'animate__flash');

  // Remove as classes de animação após um atraso de 3000 milissegundos (3 segundos)
  setTimeout(() => {
    result.classList.remove('animate__animated', 'animate__flash');
  }, 4000);
};

// Função que remove emojis anteriores da div result
const removeEmojis = () => {
  // Seleciona novamente o elemento HTML com a classe "result"
  const result = document.querySelector('.result');

  // Seleciona todos os elementos com a classe "emoji" dentro da div result
  const previousEmojis = document.querySelectorAll('.emoji');

  // Itera sobre os emojis anteriores e os remove
  previousEmojis.forEach((emoji) => emoji.remove());
};
