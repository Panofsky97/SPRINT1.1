 function changeImages(fileName){
   let img = document.querySelector("#bannerImage");
   img.setAttribute("src", fileName)

 }  
  
  const menu      = document.querySelector('nav ul');
  const menuBtn   = document.querySelector('.menu-open');
  const closeBtn  = document.querySelector('.menu-close');

  openBtn.addEventListener('click', () => {
    menu.classList.add('open');
  })

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
  })