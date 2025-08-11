const nav = document.querySelector('nav');
const sidebarBtn = document.querySelector('.sidebar img');
const contactBtn = document.querySelector('.launchbud button')
const bodyM = document.body;
function SidebarFunction(){
sidebarBtn.addEventListener('click', (e) => {
  e.stopPropagation(); 
  bodyM.classList.add('overlay-active');
  setTimeout(() => {
    nav.classList.add('open'); 
  }, 300);  
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    bodyM.classList.remove('overlay-active');
    setTimeout(() => {
        nav.classList.remove('open'); 
    }, 300);  
  });
});
contactBtn.onclick = ()=>{
    bodyM.classList.remove('overlay-active');
    setTimeout(() => {
        nav.classList.remove('open'); 
    }, 300);  
}
document.addEventListener('click', (e) => {
  if (nav.classList.contains('open') && !nav.contains(e.target) && !sidebarBtn.contains(e.target)) {
    bodyM.classList.remove('overlay-active');
    setTimeout(() => {
        nav.classList.remove('open'); 
    }, 300);  
  }
});
}




SidebarFunction()

gsap.registerPlugin(ScrollTrigger);
gsap.to(".floating", {
  y: 9,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  duration: 2
});

document.querySelectorAll(".section").forEach((sec, i) => {
  gsap.from(sec, {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sec,
      start: "top 85%",  
      toggleActions: "play none none reverse"
    }
  });
});

// const lenis = new Lenis();
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);



