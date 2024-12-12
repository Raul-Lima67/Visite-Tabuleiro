// Seleciona todas as imagens da galeria
const images = document.querySelectorAll('.gallery-image');

// Função para alternar o aumento da imagem
images.forEach(image => {
  image.addEventListener('click', function() {
    // Verifica se a imagem já está aumentada
    if (this.classList.contains('enlarged')) {
      this.classList.remove('enlarged'); // Se estiver, diminui
    } else {
      // Caso contrário, aumenta a imagem
      this.classList.add('enlarged');
    }
  });
});
