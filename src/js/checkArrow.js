import throttle from 'lodash.throttle';

const scrollArrowRef = document.querySelector('.main__arrow');

window.addEventListener('scroll', throttle(() => {
  if (window.pageYOffset > 680) {
    scrollArrowRef.classList.remove('main__arrow--hidden')
  } else {
    scrollArrowRef.classList.add('main__arrow--hidden')
  }
}, 400));