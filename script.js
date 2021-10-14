let order = [];
let clickOrder = [];
let scoreGame = 0;
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

// ordem aleatória
const orderShuffle = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickOrder = [];

  for (let i in order) {
    let colorElement = createColor(order[i]);
    lightColor(colorElement, Number(i) + 1);
  }
}

// acende proxima cor
const lightColor = (element, time) => {
  time = time * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, time - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  });
}

// verifica se os botoes clicados são os mesmos
const checkOrder = () => {
  for (let i in clickOrder) {
    if (clickOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickOrder.length == order.length) {
    alert(`Sua pontuação: ${scoreGame}
    Você acertou! Iniciando próximo nível!`);
    nextLevelGame();
  }
}

// click do jogador
const click = (color) => {
  clickOrder[clickOrder.length] = color;
  createColor(color).classList.add('selected');

  setTimeout(() => {
    createColor(color).classList.remove('selected');
    checkOrder();
  }, 250); 
}

// retorna a cor
const createColor = (color) => {
  if (color == 0) {
    return red
  } else if (color == 1) {
    return green;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3){
    return blue;
  } 
}

// proximo nivel
const nextLevelGame = () => {
  scoreGame += 1;
  orderShuffle();
}

// game over
const gameOver = () => {
 alert(`Sua pontuação: ${scoreGame}
  Você perdeu o jogo!
  Clique em 'Ok!' para iniciar um novo jogo.`)
  order = [];
  clickOrder = [];

  playNewGame();
}

// novo jogo
const buttonPlay = document.querySelector('.start-game');
const playNewGame = () => {
  // zerar o score
  /* alert(`Bem-vindo ao Genesis! Iniciando novo jogo!`) */
  scoreGame = 0;
 
  nextLevelGame();
}
buttonPlay.addEventListener('click', playNewGame);

// eventos de click
red.onclick = () => click(0);
green.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// chamar playNewgame
playNewGame();

