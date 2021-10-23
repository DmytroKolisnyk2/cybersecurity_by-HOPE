import './sass/main.scss';
import 'material-design-icons/iconfont/material-icons.css';
import { openBar, closeOverlayBar } from './js/openBar';
import throttle from 'lodash.throttle';
import WOW from 'wow.js/dist/wow';
// import 'animate.css/animate.min.css';
import 'wow.js/css/libs/animate.css';



document.querySelector('.header__burger').addEventListener('click', openBar);
document.querySelector('.aside__overlay').addEventListener('click', closeOverlayBar);

const video = document.querySelector('.main__video');

const checkScroll = () => {
  video.play();
  setTimeout(() => {
    video.pause();
  }, 300);
};

window.addEventListener('scroll', throttle(checkScroll, 150));

new WOW().init();

// video.pause();

// window.onscroll = function () {
//   video.pause();
// };

// setInterval(function () {
//   video.currentTime = window.pageYOffset / 2230;
// }, 10);
