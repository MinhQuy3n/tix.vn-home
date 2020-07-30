$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots:false,
      responsive : {
        // breakpoint from 0 up
        0 : {
            items : 1,
          
        },
        // breakpoint from 480 up
        480 : {
          items : 2,

            
        },
        // breakpoint from 768 up
        768 : {
          items : 4, 
        },
        992: {
          items: 4,
        },
        1200:{
          items: 1,
        }
    }
    
    });
  });
  