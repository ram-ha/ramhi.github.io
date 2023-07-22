$(document).ready(function() {
     $('#fullpage').fullpage({
          navigation: true,
          autoScrolling:true,
          anchors: ['first', 'second', 'third', 'fourth','fifth','sixth','seventh'],
          responsiveWidth: 900,
          // slidesToSections: true,
        	 licenseKey:'1C803096-FF9049FC-A4123F52-D747BA3D',
          // css3: true,
          scrollingSpeed: 1000,
                  afterLoad: function(anchorLink, index){
                  var loadedSection = $(this);
                  if(index == 1){
                     setTimeout(wrap01,500);
                  }
                  if(index == 2){
                    setTimeout(wrap02,500);
                  }
                  if(index == 3){
                    setTimeout(wrap03,500);
                  }
                 if(index == 4){
                   setTimeout(wrap04,500);
                  }
                  if(index == 5){
                    setTimeout(wrap05,500);
                   }
                   if(index == 6){
                     setTimeout(wrap06,500);
                    }
                   if(index == 7){
                     setTimeout(wrap07,500);
                    }

              }
        });


    function wrap01() {
      $("#num1").animate({'opacity':'1','top':'300px'},1000);

    }

    function wrap02() {
      $("#num2").animate({'opacity':'1','top':'300px'},1000);

    }
    function wrap03() {

      $("#num3").animate({'opacity':'1','top':'300px'},1000);

    }

    function wrap04() {

      $("#num4").animate({'opacity':'1','top':'300px'},1000);

    }

    function wrap05() {

      $("#num5").animate({'opacity':'1','top':'300px'},1000);

    }
    function wrap06() {

      $("#num6").animate({'opacity':'1','top':'300px'},1000);
    }
    function wrap07() {

      $("#num7").animate({'opacity':'1','top':'300px'},1000);
      $('.wrap07_bg').animate({'top':'0','left':'0'},1000);
    }

// hamburger
 $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $(".sidenav").toggleClass('full');
    $(".itemMenu").toggleClass('appear');
  });
   $('.itemMenu').click(function(){
    $('#nav-icon').toggleClass('open');
    $(".sidenav").toggleClass('full');
    $(".itemMenu").toggleClass('full');
    $(".itemMenu").toggleClass('appear');
  });

  $('.sec04_slick_wrap').slick({
    arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1000,
        variableWidth: true,
        touchMove: true,
        focusOnSelect: true,
        // prevArrow:'<button class="slick-prev"> > </button>',
        // nextArrow:'<button class="slick-next"> > </button>',
        responsive:[
            {
                breakpoint: 900,
                settings:{
                    arrows:false
                }
            }
        ]

  });
  
  $('.img_click').colorbox({
    rel:'img_click',
    slideshow:true,
    innerHeight:'92%'
  });

  $('.logo_R').mouseover(function(){
    $('.fixed_wrap p').addClass('show');
  })
  $('.logo_R').mouseout(function(){
    setTimeout(function(){ $('.fixed_wrap p').delay(3000).removeClass('show'); }, 3000);
    
  })

  setTimeout(function(){
    $('.full_message').slideUp();
  },2000)

$('.button').mouseover(function(){
  $('.sec02_logo.left .sec02_paik_wrap').addClass('On');
})
$('.button').mouseout(function(){
  $('.sec02_logo.left .sec02_paik_wrap').removeClass('On');
})


  
});
