//Select element function
const menutogle = document.querySelector('.menu-toggle');
const body = document.querySelector('body');

menutogle.addEventListener('click', () =>{
    body.classList.toggle('open');
});

