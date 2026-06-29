const burgerButton = document.getElementById('burger-button');
const navList = document.querySelector('.main-nav');
const closeButton = document.getElementById('close-button');
const header = document.querySelector('header');

burgerButton.addEventListener('click', () => {
  navList.classList.add('active');  
  header.classList.add('nav-open'); // ამატებს კლასს ჰედერზე
});

closeButton.addEventListener('click', () => {
  navList.classList.remove('active');  
  header.classList.remove('nav-open'); // აშორებს კლასს ჰედერიდან
});