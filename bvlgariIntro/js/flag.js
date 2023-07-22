$(function () {
    const fl_slider = $('.flag_slider li');
    const fl_btm_List = $('.flag_btm_wrap li');
    const fl_left = $('.flag_side.left');
    const fl_right = $('.flag_side.right');

    first();
    function reset(){
        fl_slider.removeClass('On');
        fl_btm_List.removeClass('Act');
    }

    function first() {
        fl_slider.eq(0).addClass('On');
        fl_btm_List.eq(0).addClass('Act');
    }

    let slider_play = setInterval(auto,3000);
    
    function resetTimer(){
        clearInterval(slider_play);
        slider_play = setInterval(auto,3000);
    }

    fl_right.click(function(e){
        e.preventDefault();

        const idx = $('.flag_slider li.On').index();
        reset();

        if(idx<4){
            fl_slider.eq(idx+1).addClass('On');
            fl_btm_List.eq(idx+1).addClass('Act');
            
        }
        else if(idx==4){
            fl_slider.eq(0).addClass('On');
            fl_btm_List.eq(0).addClass('Act');

        }
        resetTimer();

    })
    fl_left.click(function(e){
        e.preventDefault();

        const idx = $('.flag_slider li.On').index();
        reset();

        if(idx>0){
            fl_slider.eq(idx-1).addClass('On');
            fl_btm_List.eq(idx-1).addClass('Act');
            
        }
        else if(idx==0){
            fl_slider.eq(4).addClass('On');
            fl_btm_List.eq(4).addClass('Act');

        }
        resetTimer();
    })
    fl_btm_List.click(function(e){
        e.preventDefault();

        reset();

        const idx = $(this).index();
        fl_slider.eq(idx).addClass('On');
        fl_btm_List.eq(idx).addClass('Act');

        resetTimer();

    })
    
    function auto(){
        fl_right.trigger('click');
    }
})