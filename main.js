 function changeImages(fileName){
   let img = document.querySelector("#bannerImage");
   img.setAttribute("src", fileName)

 }  
  
const hamburger = document.getElementById('hamburger-icon');
const navList = document.querySelector('.nav-list');
const closeBtn = document.querySelector('.menu-close');

hamburger.addEventListener('click', () => {
  navList.classList.add('open');
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  navList.classList.remove('open');
});