const media = [
  { type: 'img', src: 'img/ela 1.jpg', message: 'Esse sorriso me cativa a cada dia que se passa,<br>pois ele me deixa todo bobinho por você,<br>❤neném😍!' },
  { type: 'img', src: 'img/ela 2.jpg', message: 'Como pode um simples olhar<br>me prender pelo resto da minha vida?<br>Deve ser porque nele vejo sua pureza<br>e o seu lado mais delicado.🤎!' },
  { type: 'video', src: 'img/ela 3.mp4', message: 'Olha só você, meu amor.<br>Seu jeitinho simples de conversar<br>me conquistou de uma forma inexplicável.<br>(Amo esse seu jeitinho, neném)' },
  { type: 'img', src: 'img/ela 4.jpg', message: 'Olha só... me falta até palavras<br>para descrever você, meu amor!<br>Pois nenhuma palavra pode definir<br>o que sinto por ti.🙈💚' },
  { type: 'img', src: 'img/ela 5.jpg', message: 'Esse aqui sou eu antes de entrar em quadra<br>para jogar a final dos jogos internos<br>e claro que você estava lá comigo,<br>grudada ao meu corpo.🥺' },
  { type: 'img', src: 'img/ela 6.jpg', message: 'E claro que sempre arrumava um jeito<br>de você aparecer nas minhas fotos né momo ksksks' },
  { type: 'img', src: 'img/ela 7.jpg', message: 'Sem palavras para esse olhar.' },
  { type: 'img', src: 'img/ela 9.jpg', message: 'todos me ver assim: uma pessoa normal,<br> mas toda vez que eu converso contigo<br> e fico horas e horas contigo, <br>você traz essa pessoa de volta ' },
  { type: 'img', src: 'img/ela 10.jpg', message: 'Mas você traz ele de volta.😻' },
  { type: 'img', src: 'img/ela 8.jpg', message: 'Meu amor.<br>Quer saber de uma verdade?<br>A verdade é que desde quando você entrou na minha vida,<br>eu sou o Homem mais feliz do mundo<br>por ter a mulher linda e bela do planeta terra!<br>Eu pensei que esse ano eu não ia conseguir conquistar<br>algo bom até o término dele, mas eu conquistei você,<br>conquistei sua confiança, amor, carinho, admiração, etc.<br>Quero te dizer que o nosso namoro só vai acabar,<br>quando nosso noivado se iniciar<br>e fora isso, nem pense que nunca mais iremos nos separar, neném.<br>Eu te amo com todas minhas forças e de toda minha alma,<br>porque a alma é e sempre será eterna.<br>Quero ver e realizar todos os nossos sonhos contigo, meu amor!<br>Pois com você, eu tenho a força que preciso pra conseguir realizar<br>cada meta que planejamos.<br>Daqui a 26 dias, iremos dar um dos passos mais importantes<br>na nossas vidas, pois iremos oficializar o nosso tão querido<br>e sonhado namoro.<br>Onde Deus já nos fez e faz inúmeras promessas,<br>promessas que quero e vou estar ao seu lado para ver realizar.<br>Uma por uma.<br>Sabemos que por conta da distância,<br>não podemos nos ver todo dia ou todo final de semana<br>e te garanto que até nisso o Senhor pensou.<br>Pois assim, conseguiremos ver o quão grande é o nosso amor!<br>Muitas pessoas vão tentar interferir, dar pitacos ou jogar terra,<br>mas toda noite oro ao Senhor para que ele blinde nosso relacionamento<br>e que não deixe ninguém vir tentar destruí-lo.<br>Eu sempre irei dar meu máximo para te fazer feliz<br>e a menina mais amada da galáxia,<br>vou me esforçar ao máximo para te dar tudo aquilo que você tanto sonhou<br>e tanto merece.<br>Não se preocupe, meu amor, o tempo de cantar chegou.<br>Provavelmente você vai ler essa cartinha no dia 19/10,<br>mas fique sabendo que cada palavra escrita,<br>cada vírgula, cada ponto e cada número que aqui foi escrito,<br>o Senhor lá do céu está vendo<br>e com fé em Deus ele irá nos ajudar a trilhar esse caminho aqui na Terra.<br>Você é a verdade mais linda que eu já fiquei sabendo,<br>a poesia mais linda que meus olhos já leram,<br>a música mais bela que meus ouvidos já escutaram<br>e o presente mais lindo que o Senhor me deu.<br>Era por você que eu orava às 03h30 da madrugada, meu amor.<br>Eu te amo, minha morena de olhos cor de mel!' },
  { type: 'img', src: 'img/ela 11.jpg', message: 'agora pode ficar com a sua caixinha, momozinho💘' }
];

// Contador de mídia
let currentMediaIndex = 0;

// Elementos HTML
const mediaDisplay = document.querySelector('.gallery');
const messageDisplay = document.getElementById('message');
const audio = document.getElementById('background-music');

// Função para atualizar a imagem ou vídeo e a mensagem
function updateMedia() {
mediaDisplay.innerHTML = ''; // Limpa o conteúdo anterior
const currentMedia = media[currentMediaIndex];

if (currentMedia.type === 'img') {
  const imgElement = document.createElement('img');
  imgElement.src = currentMedia.src;
  imgElement.alt = 'Imagem';
  imgElement.id = 'image-display';
  mediaDisplay.appendChild(imgElement);
} else if (currentMedia.type === 'video') {
  const videoElement = document.createElement('video');
  videoElement.src = currentMedia.src;
  videoElement.controls = true;
  videoElement.autoplay = true;
  videoElement.loop = true;
  videoElement.id = 'image-display';
  mediaDisplay.appendChild(videoElement);
}

messageDisplay.innerHTML = currentMedia.message; // Use innerHTML para processar as quebras de linha
}

// Evento de clique na própria mídia para trocar
mediaDisplay.addEventListener('click', function() {
currentMediaIndex = (currentMediaIndex + 1) % media.length; // Vai para a próxima mídia
updateMedia();
});

// Função para iniciar a música
function playMusic() {
audio.play().catch(function(error) {
  console.log('Autoplay bloqueado, aguarde interação do usuário.');
});
}

// Tente tocar a música na interação do usuário
document.addEventListener('click', function() {
playMusic();
});

// Inicializa com a primeira imagem ou vídeo e mensagem
updateMedia();
