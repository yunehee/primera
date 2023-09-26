$(document).ready(function(){
/////////////////////////////////////////
/////////////////////////////////////////
///////////// 헤더 fixed
/////////////////////////////////////////
/////////////////////////////////////////
    let h_top_height = $('.h_top').height();

    // if($(window).width() < 800) {
    //     $('.h_bot').css({
    //         position: 'fixed',
    //         top: 0,
    //         left: 0,
    //         zIndex: 9999999
    //     })
    // }

    $(window).scroll(function() {
        let s_top = $(window).scrollTop();
        if(s_top >= h_top_height) {
            $('.h_bot').css({
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999999,
                background: 'rgba(75, 75, 75, 0.7)'
            })

            $('.h_sm_icon').css({
                display: 'block'
            })
            
        }
        else {
            $('.h_bot').css({
                position: 'relative',
                background: 'none'
            })
            
            $('.h_sm_icon').css({
                display: 'none'
            })
        }

    });


/////////////////////////////////////////
/////////////////////////////////////////
///////////// 햄버거 메뉴
/////////////////////////////////////////
/////////////////////////////////////////
    $('.icon_ham').click(function() {
        $('.hamberg_pan, .ham_body').css({left: 0});
    })
    $('.ham_close').click(function() {
        $('.hamberg_pan, .ham_body').css({left: '-100%'})
    })


/////////////////////////////////////////
/////////////////////////////////////////
///////////// 메뉴
/////////////////////////////////////////
/////////////////////////////////////////
    
    let curr_menu_li=0;
    $('.menu_li').hover(function() {
        $('.pan').css({display: 'block'});

        curr_menu_li=$(this).index();
        $('.menu_li').removeClass('menu_active');
        $('.menu_li').eq(curr_menu_li).addClass('menu_active');

        $('.pan_menu').removeClass('pan_menu_active');
        $('.pan_menu').eq(curr_menu_li).addClass('pan_menu_active');
    }, function() {
        $('.pan').css({display: 'none'});
        $('.menu_li').removeClass('menu_active');
    });

    $('.pan').hover(function() {
        $('.pan').css({display: 'block'});
        $('.menu_li').eq(curr_menu_li).addClass('menu_active');
    }, function() {
        $('.pan').css({display: 'none'});
        $('.menu_li').removeClass('menu_active');
    });

/////////////////////////////////////////
/////////////////////////////////////////
///////////// TOP 버튼
/////////////////////////////////////////
/////////////////////////////////////////
    $('.btn_top').click(function() {
        top_btn_init();
        $('html').animate({
            scrollTop: $('.header').offset().top
        }, 200, 'linear')
    })
    function top_btn_init() {
        $('.btn_top').css({PointerEvents: 'none'})
        setTimeout(() => {
            $('.btn_top').css({PointerEvents: 'auto'})
        }, 200)
    };




});