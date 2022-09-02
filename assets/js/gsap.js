$(function(){


    /* @@@@@@@@@@@@@@@@@@@@ main @@@@@@@@@@@@@@@@@@@ */

    //main 메인 글자 움직이기 (title->desc)
    intro = gsap.timeline({})//timeline으로 모션연결

    intro.fromTo('.sc-main .title-area .word',{
        yPercent:100//100까지
    },{
        yPercent:0, //0부터
        stagger:0.2 //순차적으로
    })
    .from('.sc-main .title-area .desc',{
        opacity:0
    })



    //main 메인 스크롤시 이미지 크기
    gsap.to('.sc-main .main-area img',{
        scrollTrigger:{
            trigger:".sc-main",
            start:"top top",
            end:"bottom top",
            scrub:1,
        },
        scale:1.2 //이미지 커지는 크기
    })



    //product 스크롤시 나타나는 글씨
    gsap.from('.sc-prd .title',{
        scrollTrigger:{
            trigger:".sc-prd .title",
            start:"top 120%",
            end:"bottom top",
            scrub:2
        },
        opacity:0
    })



    //use 스크롤시 나타나는 글씨
    gsap.from('.sc-use h2',{
        scrollTrigger:{
            trigger:".sc-use h2",
            start:"top 120%",
            end:"bottom top",
            scrub:2
        },
        opacity:0
    })




    /* @@@@@@@@@@@@@@@@@@@@ footer @@@@@@@@@@@@@@@@@@@ */

    /* footer title 글자 움직임 */
    gsap.set('.intro-title .char',{
        scrollTrigger:{
            trigger:".intro-title",
            start:"top 130%",
            end:"bottom top",
            scrub:1,
        },
        yPercent:'random(-200,200)',
        opacity:0,

    })
    gsap.to('.intro-title .char',{
        scrollTrigger:{
            trigger:".intro-title",
            start:"top 130%",
            end:"bottom top",
            scrub:1,
        },
        delay:1,
        stagger:0.1,
        yPercent:0,
        opacity:1,
    })



    /* footer 이미지 움직임 */
    gsap.to('.footer-bottom .img-box',{
        scrollTrigger:{
            trigger:".footer-bottom .img-box",
            start:"top 40%",
            end:"bottom top",
            scrub:1,
        },
        yPercent:-15
    })




    /* @@@@@@@@@@@@@@@@@@@@ 공통모션 @@@@@@@@@@@@@@@@@@@ */

    //모션묶음 (토글액션o)
    $('.fadeToggle').each(function(i,el){

        child = $(this).find('>*'); //child 찾아(직계)

        gsap.fromTo(child ,{ //특정class의 child 모두 모션 적용
            opacity:0,
        },{
            scrollTrigger:{
                trigger:el,
                start:"top 70%", 
                end:"bottom top",
                toggleActions: "restart none reverse none" //스크롤 반대로 모션 적용
            },
            opacity:1,
            stagger:0.1,
        })
    })


    /* 모션묶음 (토글액션x) */
    $('.fade').each(function(i,el){

        child = $(this).find('>*');

        gsap.fromTo(child ,{ 
            opacity:0,
        },{
            scrollTrigger:{
                trigger:el,
                start:"top 70%", 
                end:"bottom top",
            },
            opacity:1,
            stagger:0.1,
        })
    })



    /* 각각모션 */
    $('.fadeItem').each(function(i,el){

        gsap.fromTo(el ,{ 
            opacity:0
        },{
            scrollTrigger:{
                trigger:el,
                start:"top 70%", 
                end:"bottom top",
            },
            opacity:1,
        })
    })


    /* @@@@@@@@@@@@@@@@@@@@ mouse @@@@@@@@@@@@@@@@@@@ */

    $('body').mousemove(function(e){
        const Xposition = e.clientX -25;
        const Yposition = e.clientY -25;

        gsap.to('.mouse',{
            x:Xposition,
            y:Yposition
        })

    });


});