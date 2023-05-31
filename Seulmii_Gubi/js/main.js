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
        //var section2 = $(window).height()-$(".sec2-back").offset().top+ $(".sec2-back").outerHeight();
        //var section3 = ($(".sec3-back").offset().top.toFixed(0));
        console.log(section1)
        console.log(scrollTop)

        ScrollTrigger.create({
            trigger: ".sec1-text1",
            start: "top 85%",
            end: "+=20000",
            toggleClass: {targets:".sec1-text1", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec2-img1",
            start: "top bottom",
            end: "+=20000",
            toggleClass: {targets:".sec2-img1", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec2-img2",
            start: "top 90%",
            end: "+=20000",
            toggleClass: {targets:".sec2-img2, .sec2-img3", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec3-mobile1",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec3-mobile1", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec3-object1",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec3-object1", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec3-object2",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec3-object2", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec3-object3",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec3-object3", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec4-object1",
            start: "top 90%",
            end: "+=20000",
            toggleClass: {targets:".sec4-object1", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec4-object2",
            start: "top 90%",
            end: "+=20000",
            toggleClass: {targets:".sec4-object2", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec5-mobile1",
            start: "top 90%",
            end: "+=20000",
            toggleClass: {targets:".sec5-mobile1", className:"on"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec5-object1",
            start: "top 90%",
            end: "+=20000",
            toggleClass: {targets:".sec5-object1", className:"on"},
            toggleActions: "restart none complete complete",
        })



    });

    
});

// $(".button").click(function() {
//     $('html,body').animate( {
//         scrollTop: $(".sec3-back").offset().top},
//         'slow');
//     });


