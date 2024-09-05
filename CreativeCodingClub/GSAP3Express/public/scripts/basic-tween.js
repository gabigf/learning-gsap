let tween = gsap.fromTo(
  '.fred',
  { x: 700, y: 400 },
  { x: 300, y: 200, duration: 3, scale: 2 }
);

tween.play();

console.log(tween);

document.querySelector('.restart-button').onclick = () => {
  tween.restart();
};

document.querySelector('.reverse-button').onclick = () => {
  tween.reverse();
};
