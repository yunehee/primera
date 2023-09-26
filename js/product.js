$(document).ready(function(){
    let cate_no = get_url_info("cate_no");

    load_items(cate_no, ITEM_LIST[cate_no].length);

    if($(window).width() < 800) {
        $('.main').css({
            paddingTop: '100px'
        })
    }
    else if($(window).width() >= 800) {
        $('.main').css({
            paddingTop: '190px'
        })
    }

    $(window).resize(function() {
        if($(window).width() < 800) {
            $('.main').css({
                paddingTop: '100px'
            })
        }
        else if($(window).width() >= 800) {
            $('.main').css({
                paddingTop: '190px'
            })
        }

        make_kan();
        
    });
    make_kan();



    if(cate_no <= 1) {
        cate_no = cate_no - 0
    }
    else if(cate_no <= 9) {
        cate_no = cate_no - 2
    }
    else if(cate_no <= 15) {
        cate_no = cate_no - 10
    }

    $('.product_title_list_li').eq(cate_no).addClass('product_title_list_active')

});