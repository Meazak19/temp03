$.getScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js", function () {
  $.getScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js", function () { 
      $.getScript("https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollSmoother.min.js", function () {

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        // create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});
  

const cards = gsap.utils.toArray(".paymentContainer");

// Initial hidden state for ALL cards
gsap.set(cards, {
  y: 150,
  opacity: 0,
  scale: 0.9
});


// Timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".paymentSection",
    start: "top top",
    end: "+=3000",
    scrub: 1,
    pin: true,
    anticipatePin: 1
  }
});


// FIRST CARD REVEAL
tl.to(cards[0], {
  y: 0,
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "expo.out"
});


// SECOND CARD REVEAL
tl.to(cards[1], {
  y: 0,
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "expo.out"
});


// THIRD CARD REVEAL
tl.to(cards[2], {
  y: 0,
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "expo.out"
});


 

const serviceCards = gsap.utils.toArray(".serviceSection .innerContent");

gsap.set(serviceCards, {
  x: 200,
  opacity: 0
});

const serviceTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".serviceSection",
    start: "top top",
    end: "+=1200",
    scrub: 1,
    pin: true,
    anticipatePin: 1
  }
});

serviceCards.forEach((card) => {
  serviceTl.to(card, {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "expo.out"
  });
});
ScrollTrigger.refresh();

      }); // split-type 
  }); // ScrollTrigger
}); // gsap
