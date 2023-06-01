$('.popluarPlace').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // navigation: true,
    navText: ["<img src='assets/img/vector/Vector4.png' class='img-fluid prev'>","<img src='assets/img/vector/Vector3.png' class='img-fluid next'>"],
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        600:{
            items:2
        },
        767:{
            items:2
        },
        1000:{
            items:5.3
        }
    }
})


// counter 
 $(document).ready(function(){
     $('.counter-value').each(function(){
         $(this).prop('Counter',0).animate({
             Counter: $(this).text()
         },{
             duration: 3500,
             easing: 'swing',
             step: function (now){
                 $(this).text(Math.ceil(now));
             }
         });
     });
 });

//  toltips 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))