document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Logo Animation
  gsap.to('.logo', {
    y: '-45vh',
    scale: 0.2,
    yPercent: -50,
    scrollTrigger: {
      trigger: '.content',
      start: 'top bottom',
      end: 'top center',
      scrub: true,
    },
  });

  // Landing description animation
  gsap.to('.landing-description', {
    y: '-55vh',
    opacity: 0,
    yPercent: -50,
    scrollTrigger: {
      trigger: '.content',
      start: 'top bottom',
      end: 'top center',
      scrub: true,
    },
  });
});

// SCROLLER LOGIC - infinite scroll

const scrollers = document.querySelectorAll('.scroller');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute('data-animated', true);

    const scrollerInner = scroller.querySelector('.scroller_inner');
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

function addHoverEffect(item, scroller) {
  scroller.setAttribute('paused', true);
  item.setAttribute('is-hovered', true);
}

function removeHoverEffect(item, scoller) {
  scroller.setAttribute('paused', false);
  item.setAttribute('is-hovered', false);
}
