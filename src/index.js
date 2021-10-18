import './sass/main.scss';
import 'material-design-icons/iconfont/material-icons.css';
import { openBar,closeOverlayBar } from './js/openBar';

document.querySelector('.header__burger').addEventListener('click', openBar);
document.querySelector('.aside__overlay').addEventListener('click', closeOverlayBar);
