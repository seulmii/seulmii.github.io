

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
        // var section2 = $(window).height()-$(".sec2-back").offset().top+ $(".sec2-back").outerHeight();
        // var section3 = ($(".sec3-back").offset().top.toFixed(0));
        console.log(section1)
        console.log(scrollTop)

        ScrollTrigger.create({
            trigger: ".sec1-title1",
            start: "top 10%",
            end: "+=20000",
            toggleClass: {targets:".sec1-drug3, .sec1-drug4", className:"on"},
            toggleActions: "restart none complete complete",
        })

        ScrollTrigger.create({
            trigger: ".sec1-drug2",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".sec1-drug1, .sec1-drug2", className:"on"},
            toggleActions: "restart none complete complete",
        })

        ScrollTrigger.create({
            trigger: ".sec1-title3",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".sec1-bh, .sec1-vtg", className:"on"},
            toggleActions: "restart none complete complete",
        })

        ScrollTrigger.create({
            trigger: ".sec3-bullet2",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".sec3-bullet1, .sec3-bullet2", className:"on"},
            toggleActions: "restart none complete complete",
        })

        ScrollTrigger.create({
            trigger: ".sec3-octane1",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec3-paint1, .sec3-octane1", className:"on"},
            toggleActions: "restart none complete complete",
        })

        ScrollTrigger.create({
            trigger: ".sec3-slide3",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".sec3-slide1, .sec3-slide2", className:"slide-on"},
            toggleActions: "restart none complete complete",
        })

        ScrollTrigger.create({
            trigger: ".sec3-slide3",
            start: "top 50%",
            end: "+=20000",
            toggleClass: {targets:".sec3-smoke1, .sec3-smoke2", className:"smoke-on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec3-weapon1",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".sec3-weapon1", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec3-introframe",
            start: "top bottom",
            end: "+=20000",
            toggleClass: {targets:".sec3-octane4", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec3-octane2",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec3-octane2", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec3-octane3",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec3-octane3, .sec3-mira1", className:"on"},
            toggleActions: "restart none complete complete",
        })
    });


    setTimeout(function() {
        $('.a').addClass('display-none');
    }, 2250);

});

