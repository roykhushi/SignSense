

//typing effect
var typed = new Typed('#animate', {
    strings: ['SignSense!'], //content to show in the animation
    typeSpeed: 120, //typing speed in ms
    backSpeed: 120, //backspeed in ms
    loop:true, // infinite loop of the animation
  });

//gsap
const tl = gsap.timeline();
// tl.from("#navig li , #main1 h1, #main3 p , #navig img , #navig button," , {
//     y: -100,
//     duration: 1,
//     delay :0.5,
//     opacity: 0,
//     stagger: 0.2
// });
tl.from("#navig li  , #main1 h1 , #main2 h1 , #main3 p , #navig img , #navig button" , {
    y: -100,
    duration: 1,
    delay :0.5,
    opacity: 0,
    stagger: 0.2
});

