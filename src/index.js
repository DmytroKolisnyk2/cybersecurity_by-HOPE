import './sass/main.scss';
import 'material-design-icons/iconfont/material-icons.css';
import { openBar, closeOverlayBar } from './js/openBar';
import throttle from 'lodash.throttle';
import WOW from 'wow.js/dist/wow';
import 'wow.js/css/libs/animate.css';
import Gumshoe from 'gumshoejs';
import { hideHeader } from './js/hideHeader';
import './js/checkArrow';

import baguetteBox from 'baguettebox.js';
import 'baguettebox.js/dist/baguetteBox.min.css';

baguetteBox.run('.section__photo-wrapper--js-gallery', {
  noScrollbars: true,
});

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
console.log(document.querySelectorAll('#menu .list__link'));

window.addEventListener('scroll', throttle(hideHeader, 100));
const options = {
  root: null,
  rootMargin: '0px',
  threshold: window.screen.width <= 768 ? 0.2 : 0.65,
};
console.log(options.threshold);
const target = document.querySelector('.cyberSecurity__footer');
const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    const target = entry.target;
    if (entry.isIntersecting) {
      // console.log(target)
      document.querySelectorAll('.title1').forEach(item => item.classList.add('title--animation'));
      observer.unobserve(target);
    }
  });
};

const observerFooter = new IntersectionObserver(onEntry, options);
observerFooter.observe(target);

const onEntryBorder = (entries, observer) => {
  entries.forEach(entry => {
    const target = entry.target;
    if (entry.isIntersecting) {
      if (target === document.querySelector('.final')) {
        target.classList.add('appearBorder--specialWidth');
        setTimeout(() => {
          target.classList.add('appearBorder--specialHeight');
        }, 1400);
      } else {
        target.classList.add('appearBorder');
      }
    }
    // observer.unobserve(target);
  });
};

const arrayTargets = [...document.querySelector('.main').children];
arrayTargets.push(
  document.querySelector('.introduction__border'),
  document.querySelector('.main__section--before'),
  document.querySelector('.main__section--after'),
  document.querySelector('.block__line'),
);
const observerBorder = new IntersectionObserver(onEntryBorder, options);
arrayTargets.forEach(item => {
  observerBorder.observe(item);
});
