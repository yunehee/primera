$(document).ready(function(){
/////////////////////////////////////////
/////////////////////////////////////////
///////////// 메인배너
/////////////////////////////////////////
/////////////////////////////////////////

    // 초기화
    $('.main_banner').eq(0).css({display: 'block'});
    for(let i=0; i<$('.main_banner').length; i++) {
        $('.indi_box').append('<div class="indi"></div>')
    }
    $('.indi').eq(0).addClass('indi_active');

    let banner_timer = 500;
    // fadein,out
    function banner_slide(c_index, o_index) {
        btn_init();
        // 나타나는 판
        $('.main_banner').eq(c_index).css({zIndex: 99}).fadeIn(banner_timer);
        // 사라지는 판
        $('.main_banner').eq(o_index).css({zIndex: 1}).delay(banner_timer).fadeOut(0);

        $('.indi').removeClass('indi_active');
        $('.indi').eq(c_index).addClass('indi_active');
    }

    // 버튼막기
    function btn_init() {
        $('.main_banner_btn, .indi, .item_tab_title_li').css({PointerEvents: 'none'})
        setTimeout(() => {
            $('.main_banner_btn, .indi, .item_tab_title_li').css({PointerEvents: 'auto'})
        }, banner_timer)
    };

    // 인디케이터 클릭
    $('.indi').click(function() {
        clearInterval(banner_interval)
        banner_slide($(this).index(), $('.indi_active').index());
        banner_index = $(this).index() + 1;
    });

    // 좌우버튼
    let banner_count = $('.main_banner').length;
    let banner_index = 1;
    $('.main_banner_btn_L').click(function() {
        banner_index -= 1;
        banner_slide((banner_index - 1) % banner_count, banner_index % banner_count);
    });
    $('.main_banner_btn_R').click(function() {
        banner_slide(banner_index % banner_count, (banner_index - 1) % banner_count);
        banner_index += 1;
    });

    // 자동
    let banner_interval;
    function banner_auto_slide() {
        banner_interval = setInterval(() => {
            $('.main_banner_btn_R').trigger('click');
        }, banner_timer + 1000)
    };

    banner_auto_slide();

    $('.main_banner_box').hover(function() {
        clearInterval(banner_interval)
    }, function() {
        banner_auto_slide();
    });


/////////////////////////////////////////
/////////////////////////////////////////
///////////// 베스트셀러
/////////////////////////////////////////
/////////////////////////////////////////
    $('.item_tab_title_li').eq(0).addClass('item_tab_title_li_active');
    $('.item_tab').eq(0).addClass('item_tab_active');
    let item_tab_timer = 500;


    function item_tab_slide(c_index, c_pos, o_index, o_pos) {
        btn_init();

        // 나타나는 판
        $('.item_tab').eq(c_index).css({left: c_pos}).animate({left: 0}, item_tab_timer);
        // 사라지는 판
        $('.item_tab').eq(o_index).animate({left: o_pos}, item_tab_timer);

        $('.item_tab_title_li').removeClass('item_tab_title_li_active');
        $('.item_tab_title_li').eq(c_index).addClass('item_tab_title_li_active');

    };

    $('.item_tab_title_li').click(function() {
        if($(this).index() > $('.item_tab_title_li_active').index()) {
            item_tab_slide($(this).index(), '100%', $('.item_tab_title_li_active').index(), '-100%');
        }
        else if($(this).index() < $('.item_tab_title_li_active').index()) {
            item_tab_slide($(this).index(), '-100%', $('.item_tab_title_li_active').index(), '100%');
        }
    });

/////////////////////////////////////////
/////////////////////////////////////////
///////////// 캠페인, new
/////////////////////////////////////////
/////////////////////////////////////////
    let campaign_o_top = $('.campaign_sec').offset().top;
    let new_o_top = $('.new').offset().top;


    $(window).scroll(function() {
        let s_bot = $(window).scrollTop() + $(window).height() - 250;
        
        // 캠페인
        if(campaign_o_top < s_bot) {
            $('.campaign_box_L, .campaign_box_R').css({
                transform: 'translateX(0)',
                opacity: 1
            })
        }
        else {
            $('.campaign_box_L').css({
                transform: 'translateX(-20%)',
                opacity: 0
            })
            $('.campaign_box_R').css({
                transform: 'translateX(20%)',
                opacity: 0
            })
        }

        // new
        if(new_o_top < s_bot) {
            for(let i=0; i<$('.new_item_box').length; i++) {
                setTimeout(() => {
                    $('.new_item_box').eq(i).addClass('item_box_active')
                }, 100*i);
            };
        }
        else {
            $('.new_item_box').removeClass('item_box_active')
        }


    });

    $(window).resize(function(){
        campaign_o_top = $('.campaign_sec').offset().top;
        new_o_top = $('.new').offset().top;
    });
    
});