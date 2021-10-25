import './sass/main.scss';
import 'material-design-icons/iconfont/material-icons.css';
import { openBar, closeOverlayBar } from './js/openBar';
import throttle from 'lodash.throttle';
import WOW from 'wow.js/dist/wow';
import 'wow.js/css/libs/animate.css';
import Gumshoe from 'gumshoejs';
import { hideHeader } from './js/hideHeader';

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

const spy = new Gumshoe('#menu a');

window.addEventListener('scroll', throttle(hideHeader, 100));
const options = {
  root: document.querySelector('.scroll-list'),
  rootMargin: '0px',
  threshold: 1
}
const target = document.querySelector('.cyberSecurity__footer');
const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    const target = entry.target;
    if (entry.isIntersecting) {

        observer.unobserve(target)
    }
})
};

const observer = new IntersectionObserver(onEntry, options)