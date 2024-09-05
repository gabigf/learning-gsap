let fred = gsap.fromTo(
  '.fred',
  { x: 700, y: 400 },
  { x: 300, y: 200, duration: 3, scale: 2 }
);

document.querySelector('.restart-button').onclick = () => {
  fred.restart();
};

document.querySelector('.reverse-button').onclick = () => {
  fred.reverse();
};
