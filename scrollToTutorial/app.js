document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    animation: gsap.from('.logo', {
      y: '50vh',
      scale: 6,
      yPercent: -50,
    }),
    scrub: true,
    trigger: '.content',
    start: 'top bottom',
    endTrigger: '.content',
    end: 'top center',
  });

  ScrollTrigger.create({
    animation: gsap.from('.landing-description', {
      y: '50vh',
      opacity: 1,
      yPercent: -50,
    }),
    scrub: true,
    trigger: '.content',
    start: 'top bottom',
    endTrigger: '.content',
    end: 'top center',
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
