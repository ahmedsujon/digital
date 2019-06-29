$(function() {
    "use strict";
  

    // preloader
    $(window).load(function() {
        $(".loader").delay(2000).fadeOut("slow");
        $("#overlayer").delay(2000).fadeOut("slow");
    });

    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
            if (scroll < 100) {
            $(".header-section").removeClass("scroll-menu");
            }else{
                $(".header-section").addClass("scroll-menu");
            }
    });

    // for menu scroll 
    $('.navbar a').click(function(){
        var hash = this.hash;
        var position = $ (hash) .offset().top;
        $('html').animate({
            scrollTop : position
        },900)
    });

	//Scroll top 
    $(".scroll-top").click(function(){
        $("html,body").animate({scrollTop:0},1000);
    });
    $(window).scroll(function (){
        if ($(this).scrollTop() > 180) { $(".scroll-top").fadeIn();}
        else{
            $(".scroll-top").fadeOut();
        }
    });

    // video iframe magnificPopup
    $('.video-play-btn').magnificPopup({
        type: 'iframe',
    });

    // clients logo slider
    $('.clients-logo').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 991, 
                settings: { 
                    slidesToShow: 4,
                } 
            },
            {
                breakpoint: 768, 
                settings: { 
                    slidesToShow: 3,
                } 
            },
            {
                breakpoint: 575, 
                settings: { 
                    slidesToShow: 2,
                } 
            },
            {
                breakpoint: 200, 
                settings: { 
                    slidesToShow: 1,
                } 
            }
        ]
    });

    // init Isotope
    $('#container').imagesLoaded( function() {
        var $grid = $('.grid').isotope({
          // options
        });
        // filter items on button click
        $('.portfolio-btns').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    });

    // magnificPopup
    $('.popup-gallery').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        }
    });

    // counterUp
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });

    // team member slider active
    $('.team-members').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: true,
        speed: 1000,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991, 
                settings: { 
                    slidesToShow: 3,
                } 
            },
            {
                breakpoint: 768, 
                settings: { 
                    slidesToShow: 2,
                } 
            },
            {
                breakpoint: 200, 
                settings: { 
                    slidesToShow: 1,
                } 
            }
        ]
    });

    // features slider active
    $('.features').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        speed: 1000,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-arrow-left"></i>',
        nextArrow: '<i class="fas fa-arrow-right"></i>',
        responsive: [
            {
                breakpoint: 991, 
                settings: { 
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768, 
                settings: { 
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 200, 
                settings: { 
                    slidesToShow: 3
                } 
            }
        ]
    });

    // wow js 
    new WOW().init();


});(jQuery)