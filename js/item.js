$(document).ready(function(){
    let cate_no = get_url_info("cate_no");
    let item_no = get_url_info("item_no") - 1;

    load_item_detail(cate_no, item_no);


// 가격 계산
    // 초기값
    $('.selected_count').attr('value', 0);
    $('.selected_o_price').text('0원');
    $('.selected_s_price').text('0원');
    $('.final_price').text('0원');
    $('.final_count').text('(0개)');

    
    // 제품 가격
    function item_price(tmp) {
        let price = $('.' + tmp + ' > td:nth-child(2)').text();
        // price = price.split('원');  // 6,000원
        // price = price[0]; // 6,000
        // price = price.split(','); // [6  ,  000]
        // price = Number(String(price[0]) + String(price[1]));

        price = Number(price.replace("원","").replace(",",""));

        return price;
    }


    let s_price = item_price('item_s_price');
    let o_price = item_price('item_o_price');

    let count_value = Number($('.selected_count').val())

    // 최종 가격 계산
    function price_calc() {
        $('.selected_count').attr('value', count_value);
        
        let final_s_price = count_value * s_price;
        let final_o_price = count_value * o_price

        $('.selected_o_price').text(final_o_price.toLocaleString() + '원');
        $('.selected_s_price, .final_price').text(final_s_price.toLocaleString() + '원');
        $('.final_count').text('(' + count_value + '개)')
    }

    // 수량 변경
    function btn_calc(mark) {
        
        if(mark == '+') {
            count_value = count_value + 1;
        }
        else if(mark == '-') {
            if(count_value >= 1) {
                count_value = count_value - 1;
            }
        }
        else if(mark == 'num') {
            count_value = Number($('.selected_count').val());
        }

        $('.count').val(count_value);
        price_calc();

    };

    $('.down').click(function() { btn_calc('-'); });
    $('.up').click(function() { btn_calc('+'); });
    $('.selected_count').on('keyup', function() { btn_calc('num');});



// 돋보기
    // let target = $('.item_img_box > img');
    let target = $('.item_img_box');
    let magnifier = $('.magnifier');

    let target_w = target.outerWidth();
    let target_h = target.outerHeight();

    setTimeout(() => {
        target_w = target.outerWidth();
        target_h = target.outerHeight();
    }, 100);

    $(document).on('mousemove', '.item_img_box', function(e) {
        let pos_gap_X = e.pageX - target.offset().left;
        let pos_gap_Y = e.pageY - target.offset().top;
 
        let pos_x = pos_gap_X - (magnifier.outerWidth() / 2);
        let pos_y = pos_gap_Y - (magnifier.outerHeight() / 2); 

        magnifier.css({
            left: pos_x,
            top: pos_y,

            backgroundPosition: `${-pos_x}px ${-pos_y}px `,
            backgroundSize: `${target_w}px ${target_h}px `,
        })
    })


// 섹션 이동
    $(document).on('click', '.btn_section > a', function() {
        event.preventDefault();

        let href = $(this).attr('href');
        let item_sec_o_top = $(href).offset().top - $('.h_bot').outerHeight();


        let time = 0;
        if($(window).innerWidth() > 480) {
            time = 0;
        }
        else if($(window).innerWidth() <= 480) {
            time = 500;
        }

        $('html').animate({
            scrollTop: item_sec_o_top
        }, time);
    })

});