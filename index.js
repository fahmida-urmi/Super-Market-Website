

let menu_box = document.querySelector(".menu_box");
let options = document.querySelector(".options");


menu_box.onclick = function(){

menu_box.classList.toggle("active");
options.classList.toggle("active");
cart.classList.remove("active");
shoppingCart.classList.remove("active");
user.classList.remove("active");
loginForm .classList.remove("active");

}


let cart = document.querySelector(".cart");
let shoppingCart = document.querySelector(".shopping-carts");


cart.onclick = function(){

cart.classList.toggle("active");
shoppingCart.classList.toggle("active");
menu_box.classList.remove("active");
options.classList.remove("active");
user.classList.remove("active");
loginForm .classList.remove("active");

} 


let user = document.querySelector(".fa-user");
let loginForm = document.querySelector(".login-form");


user.onclick = function(){

user.classList.toggle("active");
loginForm .classList.toggle("active");
menu_box.classList.remove("active");
options.classList.remove("active");
cart.classList.remove("active");
shoppingCart.classList.remove("active");

    

}

window.onscroll = function(){

    menu_box.classList.remove("active");
    options.classList.remove("active");
    cart.classList.remove("active");
    shoppingCart.classList.remove("active");
    user.classList.remove("active");
    loginForm .classList.remove("active");

}

  var swiper = new Swiper(".product-slider", {
    
    spaceBetween: 30,
    loop:true,
    speed:1000,
    autoplay:{
      delay:4000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
       
      },
      778: {
        slidesPerView: 2,
       
      },
      992: {
        slidesPerView: 2,
       
      },
      1200: {
        slidesPerView: 3,
        
      },
    },
  });



  var swiper = new Swiper(".product-slider2", {
    
    spaceBetween: 30,
    loop:true,
    speed:1000,
    autoplay:{
      delay:6000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
       
      },
      778: {
        slidesPerView: 2,
       
      },
      992: {
        slidesPerView: 2,
       
      },
      1200: {
        slidesPerView: 3,
        
      },
    },
  });
  
  
  
  
var swiper = new Swiper(".review-slider", {
    loop:true,
    speed:1000,
    autoplay:{
      delay:4000,
    },
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });