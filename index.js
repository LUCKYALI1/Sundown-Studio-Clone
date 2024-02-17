
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var a = document.querySelector(".elem-container")
var imgcon = document.querySelector(".fixed-image")
a.addEventListener("mouseenter",function(){
    imgcon.style.display="block"
   
})
a.addEventListener("mouseleave",function(){
    imgcon.style.display="none"
})
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var img = e.getAttribute("data-image")
        imgcon.style.backgroundImage = `url(${img})`
    })

})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });