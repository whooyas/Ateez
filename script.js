const musicas = {
  poderoso: [
    { nome: "Guerrilla", link: "https://youtu.be/Ez3D5MtLx4w", descricao: "Essa música é pura energia e força!" },
    { nome: "HALA HALA", link: "https://youtu.be/1gQ_0dZ8DTk", descricao: "A música que vai te impulsionar para qualquer desafio!" },
    { nome: "The Real", link: "https://youtu.be/U7QZ-B0q5aI", descricao: "Mostre sua força e autenticidade com essa música!" }
  ],
  triste: [
    { nome: "Mist", link: "https://youtu.be/BwOYgUVJ2zo", descricao: "Uma música suave e melancólica, para momentos introspectivos." },
    { nome: "If Without You", link: "https://youtu.be/5MZR_i1dhuE", descricao: "Tristeza e saudade, acompanhados por uma melodia suave." },
    { nome: "Sunrise", link: "https://youtu.be/_EGEYYhDPmM", descricao: "A música que acompanha um novo amanhecer, com esperança." }
  ],
  apaixonado: [
    { nome: "Derise", link: "https://youtu.be/bBpIH4OgeOo?si=NwSm0zEE9RAtXNLf", descricao: "Uma canção romântica para quem está vivendo uma paixão intensa." },
    { nome: "Eternal Sunshine", link: "https://youtu.be/UjN9YaHhC2Y", descricao: "O brilho eterno de um amor imortalizado em melodia." },
    { nome: "Light", link: "https://youtu.be/MAl7WbOkph4", descricao: "A música para quem se sente iluminado por um amor incondicional." },
    { nome: "Precious", link: "https://youtu.be/Gv_UtWfGi_U", descricao: "Perfeita para quem sente seu amor como algo precioso e único." }
  ],
  feliz: [
    { nome: "Wave", link: "https://youtu.be/pZvZvxjpu2g", descricao: "Uma música contagiante para momentos de pura alegria!" },
    { nome: "Celebrate", link: "https://youtu.be/jT3k2NfwwxE", descricao: "Celebre a vida com esta música cheia de energia e otimismo!" },
    { nome: "Utopia", link: "https://youtu.be/Yo2W_3pLON0", descricao: "Uma utopia de felicidade e diversão em cada acorde." }
  ],
  motivado: [
    { nome: "Fireworks (I'm The One)", link: "https://youtu.be/MZ4JGye4dQU", descricao: "Explosão de energia para você alcançar todos os seus objetivos!" },
    { nome: "Answer", link: "https://youtu.be/_sZ7Q4zEPic", descricao: "A resposta para sua motivação e superação!" },
    { nome: "WIN", link: "https://youtu.be/_Uu2cw2U1zE", descricao: "O grito de vitória para quem está buscando o sucesso!" }
  ]
};

let recomendacaoAnterior = null;

function recomendar(mood) {
  const lista = musicas[mood];
  const escolha = lista[Math.floor(Math.random() * lista.length)];
  const area = document.getElementById("recomendacao");

  area.innerHTML = `
    <p>🎶 Sua recomendação:</p>
    <p><a href="${escolha.link}" target="_blank">${escolha.nome}</a></p>
    <p><em>${escolha.descricao}</em></p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${escolha.link.split('=')[1]}" frameborder="0" allowfullscreen></iframe>
  `;
  area.classList.add("fade");

  recomendacaoAnterior = escolha;
  
  // Botões de compartilhamento nas redes sociais
  const shareButtons = `
    <a href="https://twitter.com/intent/tweet?text=Estou ouvindo ${escolha.nome} do ATEEZ!&url=${escolha.link}" target="_blank">Twitter</a>
    <a href="https://www.facebook.com/sharer/sharer.php?u=${escolha.link}" target="_blank">Facebook</a>
    <a href="https://wa.me/?text=Estou ouvindo ${escolha.nome} do ATEEZ! ${escolha.link}" target="_blank">WhatsApp</a>
  `;
  document.getElementById("socialShare").innerHTML = shareButtons;
  
  setTimeout(() => {
    area.classList.remove("fade");
  }, 500);
}

function novaMusica() {
  if (recomendacaoAnterior) {
    recomendar(recomendacaoAnterior.mood);
  }
}

document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Função de classificação
function classificar(feedback) {
  console.log("Música classificada com:", feedback);
  alert(`Você classificou a música com: ${feedback} estrelas!`);
}
function recomendar(mood) {
  const lista = musicas[mood];
  const escolha = lista[Math.floor(Math.random() * lista.length)];
  const area = document.getElementById("recomendacao");

  area.innerHTML = `
    <p>🎶 Sua recomendação:</p>
    <p><a href="${escolha.link}" target="_blank">${escolha.nome}</a></p>
    <p><em>${escolha.descricao}</em></p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${escolha.link.split('=')[1]}" frameborder="0" allowfullscreen></iframe>
  `;
  area.classList.add("fade");

  // Preenche os botões de compartilhamento
  const shareButtons = `
    <a href="https://twitter.com/intent/tweet?text=Estou ouvindo ${escolha.nome} do ATEEZ!&url=${escolha.link}" target="_blank">Twitter</a>
    <a href="https://www.facebook.com/sharer/sharer.php?u=${escolha.link}" target="_blank">Facebook</a>
    <a href="https://wa.me/?text=Estou ouvindo ${escolha.nome} do ATEEZ! ${escolha.link}" target="_blank">WhatsApp</a>
  `;
  document.getElementById("socialShare").innerHTML = shareButtons;

  setTimeout(() => {
    area.classList.remove("fade");
  }, 500);
}