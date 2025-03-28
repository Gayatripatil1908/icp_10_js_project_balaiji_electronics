
        const rainContainer = document.querySelector('.rain-container');
    const startRainButton = document.getElementById('start-rain-button');
    
    function createRaindrop() {
      const raindrop = document.createElement('div');
      const randomType = Math.floor(Math.random() * 3) + 1;
      raindrop.classList.add('raindrop');
      raindrop.classList.add(`raindrop-${randomType}`);
      rainContainer.appendChild(raindrop);
      const randomLeft = Math.floor(Math.random() * 80) + 10;
      raindrop.style.left = `${randomLeft}%`;
      raindrop.style.animationDelay = `${Math.floor(Math.random() * 3) + 1}s`;
    }
    
    startRainButton.addEventListener('click', () => {
      for (let i = 0; i < 50; i++) {
        createRaindrop();
      }
      rainContainer.addEventListener('click', () => {
        createRaindrop();
      });
    });
      