function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
var crsr = document.querySelector("#circle")
var main = document.querySelector("#main")
init()

document.addEventListener("mousemove",function(dets){
  crsr.style.top = dets.pageY + 30+ "px"
  crsr.style.left = dets.pageX + 30 + "px"
})
document.querySelector("#page1 video").addEventListener("mouseenter",function(){
  crsr.innerHTML = "<h3>sound on</h3>"
})
document.querySelector("#page1 video").addEventListener("mouseleave",function(){
  crsr.innerHTML = ""
})
document.querySelector(".img").addEventListener("mouseenter",function(){
  crsr.innerHTML = "<h3>view</h3>"
})
document.querySelector(".img").addEventListener("mouseleave",function(){
  crsr.innerHTML = ""
})
document.querySelector(".img1").addEventListener("mouseenter",function(){
  crsr.innerHTML = "<h3>view</h3>"
})
document.querySelector(".img1").addEventListener("mouseleave",function(){
  crsr.innerHTML = ""
})
document.querySelector(".img2").addEventListener("mouseenter",function(){
  crsr.innerHTML = "<h3>view</h3>"
})
document.querySelector(".img2").addEventListener("mouseleave",function(){
  crsr.innerHTML = ""
})
document.querySelector(".img3").addEventListener("mouseenter",function(){
  crsr.innerHTML = "<h3>view</h3>"
})
document.querySelector(".img3").addEventListener("mouseleave",function(){
  crsr.innerHTML = ""
})
var boxes = document.querySelectorAll("#part")
boxes.forEach(function(elems){
  elems.addEventListener("mouseenter",function(){
    var att=elems.getAttribute("data-image")
      // var att = elems.style.backgroundImage
      crsr.style.width = "350px" 
      crsr.style.height = "250px"
      crsr.style.borderRadius = "10px"
      crsr.style.backgroundImage = `url(${att})`
    // console.log("hello")
  })
  elems.addEventListener("mouseleave",function(){
    elems.style.backgroundImage = 
    crsr.style.width = "15px" 
      crsr.style.height = "15px"
      crsr.style.borderRadius = "50%"
      crsr.style.backgroundImage = `none`
    // console.log("byeee")
  })
})
var h4 = document.querySelectorAll("#nav h3")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})
gsap.from("#page1 h1,#page1 h2", {
  y: -10,
  rotate: -10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7
})
var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    start: "20% 6%",
    end: "top -10%",
    scrub: 4,
    // markers: true
  }
})
t1.to("#page1 h1",{
  x: -150,
  // opacity: 0.3
},"she")
t1.to("#page1 h2",{
  x: 150,
  // opacity: 0.3
},"she")
t1.to("#page1 p",{
  opacity: 0.5,
  x: "-100vw"
},"she")
t1.to("#page1 video",{
  width: "95%",
  marginLeft: "2.5%",
  // y: "-100vh",
  // duration: 2
},"she")
var t12 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 50%",
    end: "top 40%",
    scrub: 3,
    // markers: true
  }
})
t12.to("#main",{
  backgroundColor:"#fff"
})
// t12.from("#page2 ")
// document.querySelector("#page2").addEventListener("#mousemove",function(){
  
// })
var t13 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "top 50%",
    end: "top 40%",
    scrub: 3,
    // markers: true
  }
})
t13.from("#page3 hr",{
  opacity: 0
})
t13.from("#page3",{
  borderBottom: 0,
  duration: 2
})
t13.from("#page3 #if",{
  y:-10
})
t13.from("#page3 #iff",{
  y:-10
})
var t14 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    scrub: 4,
    start: "top 60%",
    end: "top 55%",
    // markers: true
  }
})
t14.to("#main",{
  backgroundColor: "#111"
},"ddd")
// var start = document.querySelectorAll("#start")
// start.forEach(function(elems){
//   elems.addEventListener("mouseenter",function(dets){
//     crsr.style.opacity= 0,
//     elems.style.top = dets.pageY +"px",
//     elems.style.left = dets.pageX + "px"
//   })
//   elems.addEventListener("mouseleave",function(){
//     crsr.style.opacity = 1,
//     elems.style.top = "100px",
//     elems.style.right = "100px"
// })
// })
// t14.to("#page3 #class1 #if p",{
//   color: "#111"
// },"ddd")
// gsap.to("#page4 #part2",{
//   transform: "translateX("-90%")",
//   scrollTrigger: {
//     scroller: "#main",
//     trigger: "#page1",
//     start: "top -250%",
//     end: "top -300%",
//     scrub: 5,
//     // markers: true,
//     pin: true
//   }
// })