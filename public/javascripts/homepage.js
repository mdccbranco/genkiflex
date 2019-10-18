let startBtn = document.querySelector('.header__container-btn');
let catchPhrase = document.querySelector('.header__container--catch');

console.log(startBtn);

let clicksBtn = 0;

startBtn.addEventListener('click', () => {

  if (clicksBtn === 0) {
    catchPhrase.classList.add('translateLeft');
    
    setTimeout(() => {
      catchPhrase.classList.add('hidden');
    }, 2000);


    startBtn.addEventListener('click', () => {
      
    });

    clicksBtn += 1;
  }

});