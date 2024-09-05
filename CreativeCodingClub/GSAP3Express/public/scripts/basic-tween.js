let tween = gsap.to('.fred', { x: 300, duration: 3, scale: 2 });

document.querySelector('.restart-button').onclick = () => {
  tween.restart();
};

document.querySelector('.reverse-button').onclick = () => {
  tween.reverse();
};
