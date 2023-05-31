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
        let scrollTop = container.scrollTop;
        var section1 = $(window).height() - $(".sec1-back").offset().top + $(".sec1-back").outerHeight();
        var section2 = $(window).height()-$(".sec2-back").offset().top+ $(".sec2-back").outerHeight();
        var section3 = ($(".sec3-back").offset().top.toFixed(0));
        console.log(section1)
        console.log(scrollTop)

        ScrollTrigger.create({
            trigger: ".sec1-logo",
            start: "bottom top",
            end: "+=20000",
            toggleClass: {targets:".sec1-ic1, .sec1-ic2, .sec1-ic3", className:"on"},
            toggleActions: "restart none complete complete",
        })

        ScrollTrigger.create({
            trigger: ".sec1-mobile",
            start: "bottom 50%",
            end: "+=20000",
            toggleClass: {targets:".sec2-sun", className:"on"},
            toggleActions: "restart none complete complete",
        })

        ScrollTrigger.create({
            trigger: ".sec4-bb1",
            start: "top 60%",
            end: "+=20000",
            toggleClass: {targets:".sec4-bb1, .sec4-bb2, .sec4-bb3", className:"on"},
            toggleActions: "restart complete complete complete",
        })
       
        ScrollTrigger.create({
            trigger: ".sec5-goal",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec5-goal", className:"on"},
            toggleActions: "restart none complete complete",
        })

        ScrollTrigger.create({
            trigger: ".sec7-bg",
            start: "top 30%",
            end: "+=20000",
            toggleClass: {targets:".sec7-mobile2", className:"on"},
            toggleActions: "restart none complete complete",
        })

        ScrollTrigger.create({
            trigger: ".sec9-mobile2",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".sec9-mobile1, .sec9-mobile2", className:"on"},
            toggleActions: "restart none complete complete",
        })

        ScrollTrigger.create({
            trigger: ".sec9-mobile3",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".sec9-mobile3, .sec9-mobile4", className:"on"},
            toggleActions: "restart none complete complete",
        })

    });

    
});


