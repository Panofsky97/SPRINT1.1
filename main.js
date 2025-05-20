  const openBtn   = document.querySelector('.menu-open');
  const closeBtn  = document.querySelector('.mobile-nav .menu-close');
  const mobileNav = document.querySelector('.mobile-nav');

  openBtn.addEventListener('click', () => {
    mobileNav.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });