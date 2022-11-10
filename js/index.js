$('header .owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav: true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
})

$('.sec1_home .wrp .left .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav: false,
    dots:true,
    autoplay:false,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1,
        },
        470:{
            items:2,
        },
        992:{
            items:3,
        }
    }
})
// 
$('.sec1_home .wrp .right .owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav: true,
    dots:false,
    autoplay:false,
    autoplayTimeout:1000,
})

$('.sec2_home .wrp .right .slide .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav: true,
    dots:false,
    autoplay:false,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1,
        },
        470:{
            items:2,
        },
        992:{
            items:3,
        }
    }
})
$('footer .top .wrp .brand .owl-carousel').owlCarousel({
    loop:true,
    margin:27,
    items:9,
    autoWidth:true,
    nav: true,
    dots:false,
    autoplay:false,
    autoplayTimeout:1000,
    // responsive:{
    //     0:{
    //         items:2,
    //     },
    //     470:{
    //         items:2,
    //     },
    //     992:{
    //         items:6,
    //     }
    // }
})
// 

$(".sec2_gt .wrp .left .boxL .font ").on("click",".cong",function(){
    $(".sec2_gt .wrp .left .boxC").animate({fontSize:"+=1px"})
});
$(".sec2_gt .wrp .left .boxL .font").on("click",".tru",function(){
    $(".sec2_gt .wrp .left .boxC").animate({fontSize:"-=1px"},"slow")
})

// 

$(".sec2_tt .wrp .left .boxL .font ").on("click",".cong",function(){
    $(".sec2_tt .wrp .left .boxC").animate({fontSize:"+=1px"})
})
$(".sec2_tt .wrp .left .boxL .font").on("click",".tru",function(){
    $(".sec2_tt .wrp .left .boxC").animate({fontSize:"-=1px"},"slow")
})
// 

$(".sec2_tl .wrp .left .boxL .font ").on("click",".cong",function(){
    $(".sec2_tl .wrp .left .boxC").animate({fontSize:"+=1px"})
})
$(".sec2_tl .wrp .left .boxL .font").on("click",".tru",function(){
    $(".sec2_tl .wrp .left .boxC").animate({fontSize:"-=1px"},"slow")
})

// 

$(".sec3_tva .wrp .left .boxL .font ").on("click",".cong",function(){
    $(".sec3_tva .wrp .left .boxC").animate({fontSize:"+=1px"})
})
$(".sec3_tva .wrp .left .boxL .font").on("click",".tru",function(){
    $(".sec3_tva .wrp .left .boxC").animate({fontSize:"-=1px"},"slow")
})


// 

$('.sec3_tva .wrp .left .bott .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav: true,
    dots:false,
    autoplay:false,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1,
        },
        470:{
            items:2,
        },
        992:{
            items:3,
        }
    }
})

//  

//  

$(".sec3_duan .wrp .left .boxL .font ").on("click",".cong",function(){
    $(".sec3_duan .wrp .left .boxC").animate({fontSize:"+=1px"})
})
$(".sec3_duan .wrp .left .boxL .font").on("click",".tru",function(){
    $(".sec3_duan .wrp .left .boxC").animate({fontSize:"-=1px"},"slow")
})

// 
$('.sec3_duan .wrp .center .owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav: true,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
})

//  
$('.sec3_duan .wrp .left .bott .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav: true,
    dots:false,
    autoplay:false,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1,
        },
        470:{
            items:2,
        },
        992:{
            items:3,
        }
    }
})


// 

$('.menu').on('click', function(){
    $('header .center .wrp nav').show()
    $('.lightbox').show()
});

$('.lightbox') .on('click' ,function(){
    $('header .center .wrp nav').hide()
    $('.lightbox').hide()
});

// 
