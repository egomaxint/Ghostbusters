'use strict';
const mMenuBtn = document.querySelector('.m-menu-button');
const mMenu = document.querySelector('.m-menu');
const body = document.querySelector('body');
const sectionTitle = document.querySelectorAll('.section-title')
const actor = document.querySelectorAll('.actor')
const creator = document.querySelectorAll('.creator')

creator.forEach(elem => {
  elem.classList.add('hide')
})

sectionTitle[0].classList.add('section-title-active')
sectionTitle.forEach(element => {
  element.addEventListener('click', (evt) => {
    let target = evt.target    
    if(target === sectionTitle[0]) {
      sectionTitle[0].classList.add('section-title-active');
      sectionTitle[1].classList.remove('section-title-active');
      actor.forEach(elem => {
        elem.classList.remove('hide')
      })
      creator.forEach(elem => {
      elem.classList.add('hide')
      })
    }
    if(target === sectionTitle[1]) {
      sectionTitle[1].classList.add('section-title-active');
      sectionTitle[0].classList.remove('section-title-active');
      actor.forEach(elem => {
        elem.classList.add('hide')
      })
      creator.forEach(elem => {
      elem.classList.remove('hide')
      })
    }
  })
});

mMenuBtn.addEventListener('click', (evt) => {
  mMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 4,
  direction: 'horizontal',
  loop: true,
  spaceBetween: 25,
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    576: {
      
      slidesPerView: 2,
      navigation: {
        nextEl: '.button-next'
      },
    },
    0: {
      slidesPerView: 1,
    }
  },

   pagination: {
    el: '.swiper-pagination',
  },
  

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
})