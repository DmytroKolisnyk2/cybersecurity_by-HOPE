import './sass/main.scss';
import 'material-design-icons/iconfont/material-icons.css';
import { openBar, closeOverlayBar } from './js/openBar';
import throttle from 'lodash.throttle';
import WOW from 'wow.js/dist/wow';
import 'wow.js/css/libs/animate.css';
import Gumshoe from 'gumshoejs';
import { hideHeader } from './js/hideHeader';
import './js/checkArrow';

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

const spy = new Gumshoe('#menu .list__link');
console.log(document.querySelectorAll('#menu .list__link'))

window.addEventListener('scroll', throttle(hideHeader, 100));
