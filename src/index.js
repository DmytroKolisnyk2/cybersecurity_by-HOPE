import './sass/main.scss';
import 'material-design-icons/iconfont/material-icons.css';
import { openBar,closeOverlayBar } from './js/openBar';

document.querySelector('.header__burger').addEventListener('click', openBar);
document.querySelector('.aside__overlay').addEventListener('click', closeOverlayBar);

const video = document.querySelector('.main__video')

function checkScroll() {
  console.log(1)
  video.play();
  setTimeout(() => {
    video.pause();
  }, 200)

}

window.addEventListener('scroll', checkScroll);

const options = {
  root: null,
  threshold: 0.75,
  rootMargin: '0px',
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    const target = entry.target;
    if(entry.isIntersecting) {
      target.classList.add('animatedBorder');
      observer.unobserve(target)
    }
});
};

const observer = new IntersectionObserver(onEntry, options);

const arrayTargets = [...document.querySelector('.main').children];

arrayTargets.push(document.querySelector('.main__section--before'), document.querySelector('.main__section--after'), document.querySelector('.block__line'));

arrayTargets.forEach(item => {
  observer.observe(item);
});
// video.pause();


// window.onscroll = function () {
//   video.pause();
// };


// setInterval(function () {
//   video.currentTime = window.pageYOffset / 2230;
// }, 10);