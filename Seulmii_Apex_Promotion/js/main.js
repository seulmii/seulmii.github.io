

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


    container.addListener((e) => {
        let scrollTop = container.scrollTop;
        var section1 = $(window).height() - $(".section1-back").offset().top + $(".section1-back").outerHeight();
        var section2 = $(window).height()-$(".section2").offset().top+ $(".section2").outerHeight();
        var section3 = ($(".section3-back").offset().top.toFixed(0));

        //console.log()
        console.log(scrollTop)

        ScrollTrigger.create({
            trigger: ".section1-octane.on",
            start: "top 50%",
            end: "+=20000",
            toggleClass: {targets:".section1-bulletRight, .section1-bulletLeft", className:"on"},
            toggleActions: "play resume complete complete",
        })

        ScrollTrigger.create({
            trigger: ".section1-titleOctane",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".section1-titleOctane, .section1-triangle", className:"on"},
            toggleActions: "play resume complete complete",
        })

        ScrollTrigger.create({
            trigger: ".section2-frame",
            start: "bottom 70%",
            end: "+=20000",
            toggleClass: {targets:".section3-smoke1, .section3-title, .section3-slash", className:"on"},
            toggleActions: "play resume complete complete",
        })
        
        ScrollTrigger.create({
            trigger: ".section3-peacekeeper",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".section3-peacekeeper, .section3-smoke2", className:"on"},
            toggleActions: "play resume complete complete",
        })

        ScrollTrigger.create({
            trigger: ".section4-octane",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".section4-octane", className:"on"},
            toggleActions: "play resume complete complete",
        })

    });

    (function () {
        $('.section1-octane').addClass('on');
        $('.section1-bloodhound').addClass('on');
        $('.section1-pathfinder').addClass('on');
        $('.section1-title').addClass('on');

    })();
});

$(document).ready(function () {
    $('.slide').slick({
        infinite : true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
    });
    $('.slide .slick-arrow').html('');
    $('.slide .slick-dots li').html('');
});