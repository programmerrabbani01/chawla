
(function($){
  $(document).ready(function(){

    $('.aslider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.sliderarea'
    });

    $('.sliderarea').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.aslider-for',
      dots: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: false,
      focusOnSelect: true,
      pauseOnHover:false,
    });
    
    

    $('.menu_icon').on('click',function(){
      $('.off_canvas_menu').fadeToggle("slow");
      $(this).toggleClass("icondeg");
    });

    $('.banner_slick').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:true,
      prevArrow: '<button id="prevslider" type="button" class="slick-prev"><span class="material-icons">arrow_back_ios</span></button>',
      nextArrow: '<button type="button" class="slick-next"><span class="material-icons">arrow_forward_ios</span></button>'
    });

    $('.slideAreaNewBox').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      pauseOnHover:false,
      fade:true
    });
    


    // Counter
function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      //duration 5 seconds
      duration: 5000,
      easing: 'linear',
      step: function() {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function() {
        element.html(this.countNum + html);
      }
    });
  }

}

//When the document is ready
$(function() {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function() {
    //Checking if each items to animate are
    //visible in the viewport
    $("h2[data-max]").each(function() {
      inVisible($(this));
    });
  })
});


$('ul.submenu').parent('li').addClass("subchild");
var fwidth = $(window).width();
if (fwidth < 992) {
  
  $('.subchild').click(function(){
    $('ul.submenu').slideToggle( "slow" );
  });

}



$('.count1').each(function () {
  $(this).prop('Counter',1966).animate({
      Counter: $(this).text()
  }, {
      duration: 2500,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
      }
  });
});

$('.count2').each(function () {
  $(this).prop('Counter', 2750).animate({
      Counter: $(this).text()
  }, {
      duration: 2500,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
      }
  });
});
$('.count3').each(function () {
  $(this).prop('Counter', 2800).animate({
      Counter: $(this).text()
  }, {
      duration: 2500,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
      }
  });
});







});






  })(jQuery);


