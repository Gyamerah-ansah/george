const account = document.getElementById('account');
const LOGIN = document.getElementById('LOGIN');
const REGISTER = document.getElementById('REGISTER');
const backregister = document.getElementById('backregister');
const backlogin = document.getElementById('backlogin');

account.onclick = function () {
alert('Hi')
LOGIN.classList.toggle('swapDisplay');
REGISTER.classList.remove('swapDisplay');
    
}

backregister.onclick = function () {
    LOGIN.classList.remove('swapDisplay');
    REGISTER.classList.add('swapDisplay');
}

backlogin.onclick = function () {
     LOGIN.classList.add('swapDisplay');
     REGISTER.classList.remove('swapDisplay');    
}

const HEAD = document.getElementById('HEAD');
const HEAD1 = document.getElementById('HEAD1');
const HEAD2 = document.getElementById('HEAD2');
const HEAD3 = document.getElementById('HEAD3');
const HEAD4 = document.getElementById('HEAD4');
const HEAD5 = document.getElementById('HEAD5');
const header = document.getElementById('header');
const header1 = document.getElementById('header1');
const header2 = document.getElementById('header2');
const header3 = document.getElementById('header3');
const header4 = document.getElementById('header4');
const header5 = document.getElementById('header5');


HEAD.onclick = function () {
header.classList.toggle('scoop');
header1.classList.remove('scoop'); 
header2.classList.remove('scoop');
header3.classList.remove('scoop');
header4.classList.remove('scoop');
header5.classList.remove('scoop');
}

HEAD1.onclick = function () {
header1.classList.toggle('scoop'); 
header.classList.remove('scoop'); 
header2.classList.remove('scoop');
header3.classList.remove('scoop');
header4.classList.remove('scoop');
header5.classList.remove('scoop'); 
}

HEAD2.onclick = function () {
    header2.classList.toggle('scoop');
    header.classList.remove('scoop');
    header1.classList.remove('scoop');
    header3.classList.remove('scoop');
    header4.classList.remove('scoop');
    header5.classList.remove('scoop');
}

HEAD3.onclick = function () {
header3.classList.toggle('scoop');
header2.classList.remove('scoop');
header.classList.remove('scoop');
header1.classList.remove('scoop'); 
header4.classList.remove('scoop');
header5.classList.remove('scoop'); 
}

HEAD4.onclick = function () {
header3.classList.remove('scoop');
header2.classList.remove('scoop');
header.classList.remove('scoop');
header1.classList.remove('scoop'); 
header4.classList.toggle('scoop'); 
header5.classList.remove('scoop');
}

HEAD4.onclick = function () {
header3.classList.remove('scoop');
header2.classList.remove('scoop');
header.classList.remove('scoop');
header1.classList.remove('scoop'); 
header4.classList.toggle('scoop');
header5.classList.remove('scoop'); 
}

HEAD5.onclick = function () {
header3.classList.remove('scoop');
header2.classList.remove('scoop');
header.classList.remove('scoop');
header1.classList.remove('scoop'); 
header4.classList.remove('scoop');
header5.classList.toggle('scoop'); 
}



// new Swiper('.card-wrapper', {

//   loop: true,

//   // Pagnition bullets
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });