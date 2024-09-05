// https://gsap.com/docs/v3/Eases/?ref=6234

let greenFred = gsap.to('.green', {
  duration: 2,
  x: 600,
  ease: 'bounce.inOut',
});
let pinkFred = gsap.to('.pink', {
  duration: 2,
  x: 600,
  ease: 'linear',
});

document.querySelector('.restart-button').onclick = () => {
  greenFred.restart();
  pinkFred.restart();
};

document.querySelector('.reverse-button').onclick = () => {
  greenFred.reverse();
  pinkFred.reverse();
};
