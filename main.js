  const menu      = document.querySelector('nav ul.nav-list');
  const menuBtn = document.querySelector('.menu-open');
  const closeBtn = document.querySelector('.menu-close');

  openBtn.addEventListener('click', () => {
    menu.classList.add('open');
  })

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
  })