import './sass/main.scss';
import 'material-design-icons/iconfont/material-icons.css';
import { openBar, closeOverlayBar } from './js/openBar';
import throttle from 'lodash.throttle';
import WOW from 'wow.js/dist/wow';
import 'wow.js/css/libs/animate.css';
import Gumshoe from 'gumshoejs';
import { hideHeader } from './js/hideHeader';
import './js/checkArrow';
import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
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

const checkWrittenInput = () => {
  const inputValue = document.querySelector('.section__input').value;
  console.log(inputValue)
  if (inputValue) {
    return `<span class="section__headline">Ось що ви вводили:</span> ${inputValue}`
  }
  else {
    return '<span class="section__headline">Нажаль ви нічого не ввели</span> '
  }
};

window.sayHello = () => {
  if (!document.querySelector('.successful-text')) {
    document.querySelector('#console-text').insertAdjacentHTML('beforeend', `<span class="section__headline section__headline--main successful-text">І який же результат?</span><br>
      ${checkWrittenInput()} <br><br>
      Таким чином навіть ввід даних у поле із <span>type="password"</span> не заважає зловмиснику отримати дані із інпута. <br>
      <br> Тому не вводьте незнайомі вам команди у консоль, оскільки виконана функція могла так само надіслати ваші дані прямо в руки до шахрая.`);
    info({ text: 'Ви виконали усе вірно', delay: 3000 })
  }
  else {
    info({ text: 'Ви вже виконували команду', delay: 3000 })

  }
};

window.addEventListener('scroll', throttle(hideHeader, 100));
const options = {
  root: null,
  rootMargin: '0px',
  threshold: window.screen.width <= 768 ? 0.1 : 0.5,
};

const target = document.querySelector('.cyberSecurity__footer');
const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    const target = entry.target;
    if (entry.isIntersecting) {
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
[...document.querySelectorAll('a')].forEach(element =>
  element.setAttribute('rel', 'noreferrer noopener nofollow'),
);

const copyBtnRef = document.querySelector('.copy-console-text-js');

copyBtnRef.addEventListener('click', () => {
  const textareaRef = document.querySelector('.section__textarea');
  textareaRef.removeAttribute('disabled');
  textareaRef.select();
  document.execCommand('copy');
  textareaRef.setAttribute('disabled', 'true');
  info({ text: 'Команда була скопійована', delay: 2000 });
});
