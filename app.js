const btn = document.querySelector(".icon");
const links = document.querySelector("ul");

btn.addEventListener("click" , () => {
    links.classList.toggle("active");
});

gsap.from("nav" , {
    duration: 2.5, ease: "back.out(1.7)", y: -500 , delay : 2,
})

gsap.from("header" , {
    duration: 2.5, ease: "back.out(1.7)", y: -500
})

gsap.from(".header-intro" , {
    duration: 2.5,  opacity : 0, delay : 3 ,
})




gsap.registerPlugin(ScrollTrigger);

gsap.to(".about", {
    scrollTrigger: {
trigger : ".about" ,
scrub: 1,
start : "20px center" ,
end : "+=300" ,
markers : false ,
toggleActions : "restart pause reverse pause"
    },
    scale : (1.2) ,
   
  });
  
