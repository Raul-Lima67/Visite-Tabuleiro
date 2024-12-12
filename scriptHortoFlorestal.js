// Seleciona todas as imagens da galeria
const images = document.querySelectorAll('.gallery-image');

// Adiciona os eventos de mouseover e mouseout para cada imagem
images.forEach(image => {
  image.addEventListener('mouseover', function() {
    // Adiciona a classe para aumentar a imagem
    this.classList.add('enlarged');
  });

  image.addEventListener('mouseout', function() {
    // Remove a classe para voltar ao tamanho normal
    this.classList.remove('enlarged');
  });
});
