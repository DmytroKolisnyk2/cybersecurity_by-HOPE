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

// video.pause();


// window.onscroll = function () {
//   video.pause();
// };


// setInterval(function () {
//   video.currentTime = window.pageYOffset / 2230;
// }, 10);