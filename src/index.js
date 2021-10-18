import './sass/main.scss';
import 'material-design-icons/iconfont/material-icons.css';
import { openBar } from './js/openBar';

document.querySelector('.header__burger').addEventListener('click', openBar);