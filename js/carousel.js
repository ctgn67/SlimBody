new Glide('.glide', {
  type: 'carousel',
  perView: 1,  // SEMPRE 1 depoimento por vez
  gap: 0,
  hoverpause: true,
  animationDuration: 600,
  animationTimingFunc: 'ease-in-out',
  startAt: 0,
  keyboard: true,
  swipeThreshold: 80,
  dragThreshold: 120,
  autoplay: 8000,  // Opcional: troca automaticamente a cada 4s
  rewind: true
}).mount();