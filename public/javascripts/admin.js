let headerBtns = document.querySelectorAll('.admin-container__header--btns');

headerBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    headerBtns.forEach(btn2 => {
      btn2.classList.remove('header-btn__active');
    });
    btn.classList.add('header-btn__active');
  });
})