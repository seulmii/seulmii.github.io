
window.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });

    container.setPosition(0, 0);
    container.track.xAxis.element.remove();

    ScrollTrigger.scrollerProxy("body", {
        scrollTop(value) {
            if (arguments.length) {
                container.scrollTop = value;
            }
            return container.scrollTop;
        }
    });

    $("#footer-btn").click(function() {
        const yPos = $(".header").innerHeight()-$(".header").innerHeight()
        // const yPos = $(".sec1-back").innerHeight() + $(".header").innerHeight()
        container.setPosition(0, yPos);
    });


    container.addListener((e) => {
        //let scrollTop = container.scrollTop;
        //var section1 = $(window).height() - $(".sec1-back").offset().top + $(".sec1-back").outerHeight();
        // var section2 = $(window).height()-$(".sec2-back").offset().top+ $(".sec2-back").outerHeight();
        // var section3 = ($(".sec3-back").offset().top.toFixed(0));
        //console.log(section1)
        //console.log(scrollTop)

        ScrollTrigger.create({
            trigger: ".main2-1",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".main2-2, .main2-3, .main2-4, .main2-5", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".main2-1",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".main3-4, .main4-2", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".maeil1-2",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".maeil1-2", className:"on"},
            toggleActions: "restrart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".apex-1",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".halftone1", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
    });
    (function () {
        $('.main1-2, .main1-3, .main1-4, .main1-5, .main1-6, .main1-7, .main1-8, .main1-9').addClass('on');
    })();


});
