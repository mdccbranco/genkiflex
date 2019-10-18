let startBtn = document.querySelector('.header__container-btn');
let catchPhrase = document.querySelector('.header__container--catch');
let catchBlock = document.querySelector('.header__container--catch-block');
let formBlock = document.querySelector('.header__container-form-block');
let nextBtn = document.querySelector('.header__container-form--next');
let form = document.querySelector('.header__container-form');
let submitBtn = document.querySelector('.header__container-form--submit');
let coloredLinesEdit = document.querySelectorAll('.colored-line--header-container div');

let translateWidth = (window.innerWidth > 1000) ? '610px' : '300px';

if (window.innerWidth > 1400) {
  translateWidth = '610px';
}

console.log(coloredLinesEdit);

let clicksBtn = 0;
let delayTransition = 1000;

startBtn.addEventListener('click', () => {

  if (clicksBtn === 0) {
    catchBlock.classList.add('translateLeft');
    
    setTimeout(() => {
      catchPhrase.classList.add('hidden');
    }, 1000);
  }

  if (clicksBtn < 6) {
    translateForm(clicksBtn);
  }
  clicksBtn += 1;
});

nextBtn.addEventListener('click', () => {
  if (clicksBtn === 0) {
    catchBlock.classList.add('translateLeft');
    
    setTimeout(() => {
      catchPhrase.classList.add('hidden');
    }, 1000);
  }

  if (clicksBtn < 6) {
    translateForm(clicksBtn);
  }
  clicksBtn += 1;
});

function translateForm (formField) {
  for (let i = 0; i < 5; i++) {
    if (clicksBtn === i) {
      coloredLinesEdit[i].classList.toggle('fadeIn');
    }
  }

  let nextField = formField + 1;
  console.log(clicksBtn);

  if (clicksBtn === 0) {
    formBlock.animate([
      { transform: 'translateX(calc(' + formField + ' * -' + translateWidth + '))' },
      { transform: 'translateX(calc(' + nextField + ' * -' + translateWidth + '))' }
    ], {
      duration: delayTransition,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
  } else if (clicksBtn < 4) {
    form.animate([
      { transform: 'translateX(calc(' + (formField - 1) + ' * -' + translateWidth + '))' },
      { transform: 'translateX(calc(' + formField + ' * -' + translateWidth + '))' }
    ], {
      duration: delayTransition,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
  } else {
    submitBtn.disabled = false;
    form.animate([
      { transform: 'translateX(calc(' + (formField - 1) + ' * -' + translateWidth + '))' },
      { transform: 'translateX(calc(' + formField + ' * -' + translateWidth + '))' }
    ], {
      duration: delayTransition,
      easing: 'ease-in-out',
      fill: 'forwards'
    });

    nextBtn.animate([
      { transform: 'translateX(calc(' + 0 + ' * -' + translateWidth + '))' },
      { transform: 'translateX(calc(' + 1 + ' * -' + translateWidth + '))' }
    ], {
      duration: delayTransition,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
  }
  
}