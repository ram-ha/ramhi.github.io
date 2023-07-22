$(document).ready(function(){

    var scrollBody = $('#paik_wrap');
    var content = scrollBody.find('section');
    var nav_li = $('nav li');

    var winScrollTop; 
    var headerHeight = $('header').height();

    var sec1Top = $('#sec01').offset().top + headerHeight;
    var sec2Top = $('#sec02').offset().top + headerHeight;
    var sec3Top = $('#sec03').offset().top + headerHeight;
    var sec4Top = $('#sec04').offset().top + headerHeight;
    var sec5Top = $('#sec05').offset().top + headerHeight;
    var sec6Top = $('#sec06').offset().top + headerHeight;
    var sec7Top = $('#sec07').offset().top + headerHeight;
    var sec8Top = $('#sec08').offset().top + headerHeight;

    var sec01_img01 = $('.sec01_img01');
    var sec01_img02 = $('.sec01_img02');
    var sec01_img03 = $('.sec01_img03');
    var sec03_img01 = $('.sec03_img01');
    var sec04_img = $('.sec04_img');
    var sec05_img = $('.sec05_img');
    var sec06_img = $('.sec06_img');
    var sec07_img = $('.sec07_img');
    var sec08_img = $('.sec08_img');

    var sec03_wifi_01 = $(' .sec03_wifi_01');
    var sec03_wifi_02 = $(' .sec03_wifi_02');
    var sec03_wifi_03 = $(' .sec03_wifi_03');
    var sec03_wifi_04 = $(' .sec03_wifi_04');


    function setProperty(){
        winScrollTop = $(window).scrollTop(); 
    }

    function setContent(index){
        content.removeClass('active');
        content.eq(index-1).addClass('active');

        nav_li.removeClass('active');
        nav_li.eq(index-1).addClass('active');
    }

    function init(){
        motion();
    }

    function motion(){
        setProperty()
        changeSection()
    }

    $(window).scroll(function(){
        motion();

    })

    $(window).resize(function(){
        init();
    })

    init();

    function changeSection(){
        if(winScrollTop < sec1Top){
            setContent(1);
            wrap1();
        }
        else if(winScrollTop >= sec1Top && winScrollTop < sec2Top){
            setContent(2);
            wrap2();
        }
        else if(winScrollTop >= sec2Top && winScrollTop < sec3Top){
            setContent(3);
            wrap3();
        }
        else if(winScrollTop >= sec3Top && winScrollTop < sec4Top){
            setContent(4);
            wrap4();
        }
        else if(winScrollTop >= sec4Top && winScrollTop < sec5Top){
            setContent(5);
            wrap5();
        }
        else if(winScrollTop >= sec5Top && winScrollTop < sec6Top){
            setContent(6);
            wrap6();
        }
        else if(winScrollTop >= sec6Top && winScrollTop < sec7Top){
            setContent(7);
            wrap7();
        }
        else if(winScrollTop >= sec7Top && winScrollTop < sec8Top){
            setContent(8);
            wrap8();
        }
        
    }





    function wrap1(){
        sec01_img01.transition({'opacity':'1'},1000);
        sec01_img02.transition({'opacity':'1'},1000);
        sec01_img03.transition({'opacity':'1'},1000);
    }

    function wrap2(){

    }
    function wrap3(){
        sec03_img01.transition({
            opacity:1,
            x: 5
        },1000);


    setInterval(fade,3000)    
        function fade(){
            // 나옴
            sec03_wifi_01.fadeIn(300);
            sec03_wifi_02.delay(500).fadeIn(300);
            sec03_wifi_03.delay(1000).fadeIn(300);
            sec03_wifi_04.delay(1500).fadeIn(300);
        
        
            //  들어감
            sec03_wifi_04.delay(2000).fadeOut(300);
            sec03_wifi_03.delay(2500).fadeOut(300);
            sec03_wifi_02.delay(3000).fadeOut(300);
            $('.sec03_wifi_wrap>li:nth-child(1)').delay(3500).fadeOut(300);
        }
    }

    function wrap4(){
        sec04_img.transition({
            opacity:1,
            y:5
    },1000);
    }

    function wrap5(){
        sec05_img.transition({
            opacity:1,
            x:-10
    },1000);
    }

    function wrap6(){
        sec06_img.transition({
            opacity:1
    },1500);
    }

    function wrap7(){
        sec07_img.transition({
            opacity:1,
            y:10
    },1000);
    }

    function wrap8(){
        sec08_img.transition({
            opacity:1,
            x:-5
    },1000);
    }
});