

$(document).ready(function(){
 
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1.5
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


});



let photo=document.getElementById("baby");

const sayHi = () => {
  alert("hi");
}


