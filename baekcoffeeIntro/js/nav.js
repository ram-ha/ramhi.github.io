$(function(){
    var mob_menu = $('.mob_menu');
    var header = $('header');
    var link = $('.link');
    var fixed = $('.fixed');
    var m_sub_list = $('.m_sub_list');
    var body = $('body');

    //pc menu
    var d_Nav_item = $('.d_Nav_item');
    var d_Sub_list = $('.d_Sub_list');


    d_Nav_item.click(function(e){
        e.preventDefault();
        d_Sub_list.fadeOut(0);
        $(this).children(d_Sub_list).fadeIn(300);
    })
    d_Sub_list.mouseleave(function(){
        setTimeout(function(){
            d_Sub_list.fadeOut(300);

        },1000)
    })



    m_sub_list.click(function(e){
        e.preventDefault();
        $(this).next(m_sub_list).slideToggle();
    })

    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            fixed.fadeIn(500);
        }
        else{
            fixed.fadeOut(500);
        }
    })
    
    mob_menu.click(function(e){
        e.preventDefault();
        header.toggleClass('Move');
        body.toggleClass('no_Scroll');
    })
    
    link.smoothScroll(300);



})