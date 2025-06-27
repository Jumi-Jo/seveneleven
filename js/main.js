$(document).ready(function(){//start
  AOS.init();

  //.depth2 숨기기
  $(".depth2").hide();
  $("header nav .gnb > li").mouseenter(function(){
    $(this).children(".depth2").stop().fadeIn();
  });
   $("header nav .gnb > li").mouseleave(function(){
    $(this).children(".depth2").stop().fadeOut();
  });
  
  //.ham을 누르면 .mgnb-wrap 나오기
  $(".mgnb-wrap ").hide();
  $(".util-btn").click(function(){
     $(this).toggleClass("active");
     $(".mgnb-wrap ").fadeToggle();
     $("body").toggleClass("active");
   });
  $(".mgnb-wrap .close-mgnb-wrap").click(function(){
    $(".mgnb-wrap").hide();
  });
  //.mdepth2를 숨기기
   $("header .mdepth2").hide();
   //.mgnb > li 를 마우스오버하면 각각의 자식 .mdepth2가 나올것
   $("header .mgnb > li").hover(function(){
     $(this).children(".mdepth2").stop().slideToggle();
  });


  const mv = new Swiper('.mv', {
    // 옵션(parameter) 추가
    autoplay: {
      // 자동슬라이드
      delay: 2000, // 슬라이드 한장이 머무르는 시간 5000 = 5초
      disableOnInteraction: false,
    },
    speed: 3500,
    loop: true,
     navigation: {
    nextEl: ".swiper-button-next", // 다음버튼
    prevEl: ".swiper-button-prev", // 이전버튼
    },
    pagination: {
      el: ".swiper-pagination", // 슬라이드 페이지 버튼
      type: "progressbar", // 'bullets' 'fraction' 'progressbar'
      clickable: true, // 클릭가능
    },
    on: {
    slideChange: function () {
      $('.curnumchange').text(this.realIndex + 1);
    },
   },

   
  });
  // 총 슬라이드 수 자동 설정
  $('.totalchange').text($('.mv .swiper-slide:not(.swiper-slide-duplicate)').length);



    //#main-visual .mv-control .controller .buttons .play, #main-visual .mv-control .controller .buttons  .btn-on 숨기기
    $("#main-visual .mv-control .controller .buttons .play, #main-visual .mv-control .controller .buttons li .btn-on").hide();
    


    //#main-visual .mv-control .controller .buttons li를 마우스오버하면 다음과 같은 일이 일어남
      //#main-visual .mv-control .controller .buttons li .btn-off가 사라지고 
      //#main-visual .mv-control .controller .buttons li .btn-on이 나타남

    $("#main-visual .mv-control .controller .buttons li").mouseenter(function(){
      $(this).children("#main-visual .mv-control .controller .buttons li .btn-off").hide();
      $(this).children("#main-visual .mv-control .controller .buttons li .btn-on").stop().show();
    
    });

    $("#main-visual .mv-control .controller .buttons li").mouseleave(function(){
      $(this).children("#main-visual .mv-control .controller .buttons li .btn-on").hide();
      $(this).children("#main-visual .mv-control .controller .buttons li .btn-off").stop().show();
    
    });



    //#main-visual .mv-control .controller .buttons .pause를 클릭하면 다음과 같은 일이 일어남
      //#main-visual .mv-control .controller .buttons .pause 이 사라지고 
      // 스와이퍼가 멈춤
      //#main-visual .mv-control .controller .buttons .play 가 나타남

    //#main-visual .mv-control .controller .buttons .play 클릭하면 다음과 같은 일이 일어남
      //#main-visual .mv-control .controller .buttons .play 이 사라지고 
      // 스와이퍼가 작동
      //#main-visual .mv-control .controller .buttons .pause 가 나타남

      $("#main-visual .mv-control .controller .buttons .pause").click(function () {
        mv.autoplay.stop(); // 슬라이드 변수명(mb)
        $("#main-visual .mv-control .controller .buttons .play").show();
        $("#main-visual .mv-control .controller .buttons .pause").hide();
      });

      $("#main-visual .mv-control .controller .buttons .play").click(function () {
        mv.autoplay.start(); // 슬라이드 변수명
        $("#main-visual .mv-control .controller .buttons .play").hide();
        $("#main-visual .mv-control .controller .buttons .pause").show();
      });
  
    
    







  const event_img = new Swiper('.event-img', {
    // 옵션(parameter) 추가
    autoplay: {
      // 자동슬라이드
      delay: 2000, // 슬라이드 한장이 머무르는 시간 5000 = 5초
      disableOnInteraction: false,
    },
    speed: 3500,
    loop: true,
    pagination: {
      el: ".swiper-pagination", // 슬라이드 페이지 버튼
      type: "progressbar", // 'bullets' 'fraction' 'progressbar'
      clickable: true, // 클릭가능
    },
    
    slidesPerView: 3, // (기본 모바일)가로 한줄에 보이는 슬라이드 갯수
    spaceBetween: 10, // 슬라이드 간의 거리 px
   
    breakpoints: { // 반응형 슬라이드
      800: {
        // 1000px 이상
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1200: {
        // 1400px 이상
        slidesPerView: 5,
         spaceBetween: 10,
      },
    },

  });



   $("#event .event-cont .evcont-ul .evcont-li").hide();

      //첫번째 .tab-btn의 li의 active
      //첫번째 .tab-cont의 li만 나오게

      $("#event .event-name ul li").eq(0).addClass("active");
      $("#event .event-cont .evcont-ul .evcont-li").eq(0).show();



      /*tab-btn li을 클릭하면 다음과 같은 일이 일어남
      1. 사용자가 선택한 .tab-btn li에 active 클래스를 추가하고 나머지는  active 클래스를 없앰
      2. 사용자가 선택한 .tab-btn li의 순서를 알아야함(순서를 가져오는 함수 index 함수)
      3. .tab-cont li의 순번과 동일한 애는 나오고 나머지는 숨김
      */

      $("#event .event-name ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let aa = $(this).index();
        /*변수: 무엇인가를 담는 그릇
        aa $(this)의 순번이 담김*/
        $("#event .event-cont .evcont-ul .evcont-li").eq(aa).show().siblings().hide();
      });





      //#new .new-left .new-tit li을 클릭하면 다음과 같은 일이 일어남
      $("#new .new-cont .new-cont-ul .new-cont-li").hide();
      $("#new .new-left .new-tit li p, #new .new-left .new-tit li .txt-under").hide();

      //첫번째 .tab-btn의 li의 active
      //첫번째 .tab-cont의 li만 나오게

      $("#new .new-left .new-tit li").eq(0).addClass("active");
      $("#new .new-cont .new-cont-ul .new-cont-li").eq(0).show();



      /*tab-btn li을 클릭하면 다음과 같은 일이 일어남
      1. 사용자가 선택한 .tab-btn li에 active 클래스를 추가하고 나머지는  active 클래스를 없앰
      2. 사용자가 선택한 .tab-btn li의 순서를 알아야함(순서를 가져오는 함수 index 함수)
      3. .tab-cont li의 순번과 동일한 애는 나오고 나머지는 숨김
      */

      $("#new .new-left .new-tit li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let bb = $(this).index();
        /*변수: 무엇인가를 담는 그릇
        aa $(this)의 순번이 담김*/
        $("#new .new-cont .new-cont-ul .new-cont-li").eq(bb).show().siblings().hide();
        //active 붙은 li의 자식 p, .txt-under 나오게
       
      });



      //membership
       $("#membership .tab-cont li").hide();

      //첫번째 .tab-btn의 li의 active
      //첫번째 .tab-cont의 li만 나오게

      $("#membership .tab-btn li").eq(0).addClass("active");
      $("#membership .tab-cont li").eq(0).show();



      /*tab-btn li을 클릭하면 다음과 같은 일이 일어남
      1. 사용자가 선택한 .tab-btn li에 active 클래스를 추가하고 나머지는  active 클래스를 없앰
      2. 사용자가 선택한 .tab-btn li의 순서를 알아야함(순서를 가져오는 함수 index 함수)
      3. .tab-cont li의 순번과 동일한 애는 나오고 나머지는 숨김
      */

      $("#membership .tab-btn li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let cc = $(this).index();
        /*변수: 무엇인가를 담는 그릇
        aa $(this)의 순번이 담김*/
        $("#membership .tab-cont li").eq(cc).show().siblings().hide();
      });







       const part = new Swiper('.part', {
    // 옵션(parameter) 추가
    /*/autoplay: {
      // 자동슬라이드
      delay: 2000, // 슬라이드 한장이 머무르는 시간 5000 = 5초
      disableOnInteraction: false,
    },*/
    speed: 3500,
    loop: true,
     navigation: {
    nextEl: ".swiper-button-next", // 다음버튼
    prevEl: ".swiper-button-prev", // 이전버튼
    },
    pagination: {
      el: ".swiper-pagination", // 슬라이드 페이지 버튼
      type: "progressbar", // 'bullets' 'fraction' 'progressbar'
      clickable: true, // 클릭가능
    },
    on: {
    slideChange: function () {
      $('.curnumchange').text(this.realIndex + 1);
    },
   },

   
  });
  // 총 슬라이드 수 자동 설정
  $('.totalchange').text($('.mv .swiper-slide:not(.swiper-slide-duplicate)').length);



    //#main-visual .mv-control .controller .buttons .play, #main-visual .mv-control .controller .buttons  .btn-on 숨기기
    $("#partner .mv-control .controller .buttons .play, #partner .mv-control .controller .buttons li .btn-on").hide();
    


    //#main-visual .mv-control .controller .buttons li를 마우스오버하면 다음과 같은 일이 일어남
      //#main-visual .mv-control .controller .buttons li .btn-off가 사라지고 
      //#main-visual .mv-control .controller .buttons li .btn-on이 나타남

    $("#partner .mv-control .controller .buttons li").mouseenter(function(){
      $(this).children("#partner .mv-control .controller .buttons li .btn-off").hide();
      $(this).children("#partner .mv-control .controller .buttons li .btn-on").stop().show();
    
    });

    $("#partner .mv-control .controller .buttons li").mouseleave(function(){
      $(this).children("#partner .mv-control .controller .buttons li .btn-on").hide();
      $(this).children("#partner .mv-control .controller .buttons li .btn-off").stop().show();
    
    });



    //#main-visual .mv-control .controller .buttons .pause를 클릭하면 다음과 같은 일이 일어남
      //#main-visual .mv-control .controller .buttons .pause 이 사라지고 
      // 스와이퍼가 멈춤
      //#main-visual .mv-control .controller .buttons .play 가 나타남

    //#main-visual .mv-control .controller .buttons .play 클릭하면 다음과 같은 일이 일어남
      //#main-visual .mv-control .controller .buttons .play 이 사라지고 
      // 스와이퍼가 작동
      //#main-visual .mv-control .controller .buttons .pause 가 나타남

      $("#partner .mv-control .controller .buttons .pause").click(function () {
        mv.autoplay.stop(); // 슬라이드 변수명(mb)
        $("#partner .mv-control .controller .buttons .play").show();
        $("#partner .mv-control .controller .buttons .pause").hide();
      });

      $("#partner .mv-control .controller .buttons .play").click(function () {
        mv.autoplay.start(); // 슬라이드 변수명
        $("#partner .mv-control .controller .buttons .play").hide();
        $("#partner .mv-control .controller .buttons .pause").show();
      });
  
    
    




/*


    let mainSlider = new Swiper('.mv', {
        loop: true,
        slidesPerView: 1,
        updateOnWindowResize: true,
        centeredSlides: false,
        speed: 300,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 2500, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
        navigation: {
            nextEl: '.nextbtn',
            prevEl: '.prevbtn',
        },
        pagination: {
            // 호출(pager) 여부
            el: '.swiper-pagination', //버튼을 담을 태그 설정
            clickable: true, // 버튼 클릭 여부
            type: 'progressbar',
        },
        on: {
            slideChange: function () {
                $('.curnumchange').text(mainSlider.realIndex + 1);
                // console.log(mainSlider);
            },
        },
    });
    if (empty($('.totalchange').text() )) {
        $('.totalchange').text(1)
    }
    
     $('.mainSlider').hover(
        function () {
            mainSlider.autoplay.stop();
            $('.pauseandplaybtn > img').attr(
                'src',
                'img/main-visual/sliderpause.png',
            );
        },
        function () {
            if ($('.pauseandplaybtn').hasClass('play')) {
                $('.pauseandplaybtn > img').attr(
                    'src',
                    'img/main-visual/sliderplay.png',
                );
            } else {
                mainSlider.autoplay.start();
                // alert();
                $('.pauseandplaybtn').removeClass('play');
                $('.pauseandplaybtn > img').attr(
                    'src',
                    'img/main-visual/sliderpause.png',
                );
            }
        },
    );
    $('.pauseandplaybtn').on('click', function () {
        if ($('.pauseandplaybtn').hasClass('play')) {
            mainSlider.autoplay.start();
            $('.pauseandplaybtn').removeClass('play');
            $('.pauseandplaybtn > img').attr(
                'src',
                'img/main-visual/sliderpause.png',
            );
        } else {
            mainSlider.autoplay.stop();
            $('.pauseandplaybtn').addClass('play');
            $('.pauseandplaybtn > img').attr(
                'src',
                'img/main-visual/sliderplay.png',
            );
        }

        return false;
    });


    $('.mainbannercontroler .pause').hover(function(){
    // /assets/assets/imgs/sliderPause.png
    if ($('.pauseandplaybtn').hasClass('play')) {
        $('.mainbannercontroler .pause').attr('src', 'img/main-visual/sliderplay-orange.png')
    } else {
        $('.mainbannercontroler .pause').attr('src', 'img/main-visual/sliderpause-orange.png')
    }
    },function(){
        if ($('.pauseandplaybtn').hasClass('play')) {
            $('.mainbannercontroler .pause').attr('src', '/assets/assets/imgs/sliderPlay.png')
        } else {
            $('.mainbannercontroler .pause').attr('src', '/assets/assets/imgs/sliderPause.png')
        }

    })

    $('.mainbannercontroler .left').hover(function(){
        // /assets/assets/imgs/sliderPause.png
        $('.mainbannercontroler .left').attr('src', '/assets/assets/imgs/sliderPrevHover.png')
    },function(){$('.mainBannerControler .left').attr('src', '/assets/assets/imgs/sliderPrev.png')})

    $('.mainbannercontroler .right').hover(function(){
        // /assets/assets/imgs/sliderPause.png
        $('.mainbannercontroler .right').attr('src', '/assets/assets/imgs/sliderNextHover.png')
    },function(){$('.mainbannercontroler .right').attr('src', '/assets/assets/imgs/sliderNext.png')})

*/



  // //event-list2, event-list3, .com-btn숨기기
  // $(".event-list2, .event-list3, .com-btn-more2, .more").hide();
  // //.com-btn-more를 누르면 event-list2, 나오기
  // $(".com-btn-more1").click(function(){
  //   $(".event-list2").stop().slideDown();
  //   $(".com-btn-more2").show();
  //   $(".com-btn-more1").hide();
  // });
  // //.com-btn-more를 누르면 event-list3, .com-btn 나오기
  //  $(".com-btn-more2").click(function(){
  //   $(".event-list3").stop().slideDown();
  //   $(".more").show();
  //   $(".com-btn-more2").hide();
  // });




//   //스와이퍼 돌리기
// const photo_collection = new Swiper(".photo-collection", {
//     autoplay: {
//       // 자동슬라이드
//       delay: 0, // 슬라이드 한장이 머무르는 시간 5000 = 5초
//       disableOnInteraction: false,
//     },
//     speed: 6000,
//     loop: true,
//     breakpoints: { // 반응형 슬라이드
//     574: {
//       // 1400px 이상
//       slidesPerView: 4,
//       spaceBetween: 10,
//     },
//     1024: {
//       // 1400px 이상
//       slidesPerView: 6,
//       spaceBetween: 10,
//     },
//     1400: {
//       // 1400px 이상
//       slidesPerView: 8,
//       spaceBetween: 10,
//     },
//   },
//  });


//  const video_collection = new Swiper(".video-collection", {
//     autoplay: {
//       // 자동슬라이드
//       delay: 0, // 슬라이드 한장이 머무르는 시간 5000 = 5초
//       disableOnInteraction: false,
//     },
//     speed: 6000,
//     loop: true,
//     breakpoints: { // 반응형 슬라이드
//     574: {
//       // 1400px 이상
//       slidesPerView: 4,
//       spaceBetween: 10,
//     },
//     1024: {
//       // 1400px 이상
//       slidesPerView: 6,
//       spaceBetween: 10,
//     },
//     1400: {
//       // 1400px 이상
//       slidesPerView: 8,
//       spaceBetween: 10,
//     },
//   },
//  });


 //아코디언 배너

  // $("#program ul li").eq(0).addClass("active");
  // $("#program ul li").mouseenter(function(){
  //   $(this).addClass("active").siblings().removeClass("active");
  // });

  
  
});//end