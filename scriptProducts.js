var TrandingSlider = new Swiper('.tranding-slider', {

  effect: 'coverflow',         // Define o efeito visual (coverflow = estilo 3D em perspectiva).
  grabCursor: true,            // Mostra o cursor de "mãozinha" quando o mouse passa pelo slider.
  loop: true,                  // Faz o carrossel voltar ao primeiro slide automaticamente.
  slidesPerView: 2.5,            // Ajusta a quantidade de slides estarão visíveis por vez;
  
  coverflowEffect: {           // Configuração do efeito "coverflow":

    rotate: 0,                 // Ângulo de rotação dos slides (0 = sem rotação).            
    depth: 100,                // Profundidade 3D dos slides.
    modifier: 2.5,             // Intensidade do efeito 3d
  }
    
});
