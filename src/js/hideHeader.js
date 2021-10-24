let prevScroll = window.scrollY || document.documentElement.scrollTop;
let curScroll;
let direction = 0;
let prevDirection = 0;

const header = document.querySelector('.header__wrapper');

export const hideHeader = () => {
  curScroll = window.scrollY || document.documentElement.scrollTop;
  if (curScroll > prevScroll) {
    direction = 2;
  } else if (curScroll < prevScroll) {
    direction = 1;
  }

  if (direction !== prevDirection) {
    toggleHeader(direction, curScroll);
  }

  prevScroll = curScroll;
};

const toggleHeader = (direction, curScroll) => {
  if (direction === 2 && curScroll > 120) {
    header.classList.add('hide');
    prevDirection = direction;
  } else if (direction === 1) {
    header.classList.remove('hide');
    prevDirection = direction;
  }
};
