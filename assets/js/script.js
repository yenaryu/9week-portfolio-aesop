$(function(){

  /* @@@@@@@@@@@@@@@@@@@@ header @@@@@@@@@@@@@@@@@@@ */

  /* group-menu 왼쪽메뉴 열고 닫기 */
  $('.btn-menu').click(function(e){ 
    e.preventDefault(); 
    $('.group-menu').toggleClass('active'); //left0
    $('.noti-txt').addClass('active'); //hugs 색상변경
    $('body').toggleClass('active'); //안움직이게
  });



  /* group-shop 오른쪽 장바구니 열고 닫기 */
  $('.group-header .btn-shop').click(function(e){ //열기
    e.preventDefault(); 
    $('.group-shop').addClass('active') //left0
    $('body').addClass('active'); //안움직이게
  });

  $('.group-shop .btn-prev').click(function(e){ //닫기
      e.preventDefault();
      $('.group-shop').removeClass('active')
      $('body').removeClass('active'); //hidden빼주기

  });



  /* group-shop swiper */
  var headerInfo = new Swiper(".shop-top", {
    effect: "fade", 
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
  });


  /* group-header 스크롤 할 시 메뉴 */ 
  $(window).scroll(function(){ 

    const curr = $(window).scrollTop();
    const scprd = $('.sc-prd').offset().top

    if(curr > 20){
      $('.group-header').addClass('hide'); //op0 + visibl hidden


      if(curr >= scprd){
        $('.group-header').addClass('active'); //sc-prd이상이면 active(op1 visible)
      }else{
        $('.group-header').removeClass('active');
      }

    }else{
      $('.group-header').removeClass('hide');
    }
  });




  /* @@@@@@@@@@@@@@@@@@@@ main @@@@@@@@@@@@@@@@@@@ */

  /* use */
  /* Swiper Demos - slides per view */
  var useSlide = new Swiper(".sc-use .swiper", {
    slidesPerView: 3, //3.5개
    spaceBetween: 30, //공백
  });

  useSlide.on('touchStart',function(){
    $('.sc-use .use-area .use-img').addClass('scale')
  })
  useSlide.on('touchEnd',function(){
    $('.sc-use .use-area .use-img').removeClass('scale')
  })



  /* exp */
  /* Swiper Demos -  Effect cards */
  var expSlide = new Swiper(".sc-exp .swiper", {
    effect: "cards",

    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },

  });



  /* exp */
  //expslide가 넘어갈 때 이벤트 발생
  expSlide.on('slideChange', function(){
  idx=expSlide.realIndex
  $('.exp-tab a').removeClass('active').eq(idx).addClass('active') //선택한거 op1, 원
  $('.exp-cont .cont').removeClass('active').eq(idx).addClass('active') //none->block
  })

  $('.exp-tab a').click(function(e){ 
    idx=$(this).index(); //함께 넘어감
    expSlide.slideTo(idx)
  })



  /* @@@@@@@@@@@@@@@@@@@@ footer @@@@@@@@@@@@@@@@@@@ */

  /* hover */
  $(window).scroll(function(){
    curr = $(this).scrollTop(); //scrollTop위치
    target = $('.footer-top').offset().top-$(window).height() 
    //footer-top이 시작하는 지점의 y축(수직)위치(offset.top) + window height을 더해줌

    if(curr >= target){ //widow위치가 boxactive의 시작 위치보다 크거나 같을 때
        $('.noti-txt').addClass('active'); //색상변경
    }else{
        $('.noti-txt').removeClass('active'); 
    }

  });




});