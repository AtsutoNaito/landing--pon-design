$(function(){
    $(window).on("scroll",function(){
        myHeight = $(".mainvisual").height();
        if($(window).scrollTop() > 0){
            $(".header").addClass("transform");
        }else{
            $(".header").removeClass("transform")
        }
    });

    const pagetop = $('.top');
    pagetop.hide();

    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            pagetop.fadeIn();
        }else{
            pagetop.fadeOut();
        }
    });
    pagetop.click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });

    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
      });

      $('a[href^="#"]').click(function(){
        var adjust = 0;
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    $('.nav-sp').on('click', function(){
        $('.nav-pc').toggleClass('is-open');
        $('.nav-sp').toggleClass('is-open');
        $('body').toggleClass('is-open');
    });
});