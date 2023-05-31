

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
            trigger: ".book2-2",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".book2-1, .book2-2", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".book2-2",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".book1-1, .book1-2", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".txt1",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".txt1", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".funding1",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".funding1, .funding2", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".txt2",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".txt2", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".book3",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".book3", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".title2",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".title2", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".title3",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".title3", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
    });
    (function () {
        $('.title1').addClass('on-default');
    })();
});
