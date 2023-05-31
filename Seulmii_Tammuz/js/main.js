

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

    $("#sec1-btn-1").click(function() {
        const yPos = $(".sec1-back").innerHeight() + $(".header").innerHeight()
        container.setPosition(0, yPos);
    });
    $("#sec1-btn-2").click(function() {
        const yPos = $(".sec1-back").innerHeight() + $(".section2").innerHeight() + $(".sec3-back2").innerHeight() + $(".header").innerHeight()
        container.setPosition(0, yPos);
    });
    $("#sec1-btn-3").click(function() {
        const yPos = $(".section1").innerHeight()+ $(".section2").innerHeight() + $(".section3").innerHeight()
         + $(".devider1").innerHeight() + $(".header").innerHeight()
        container.setPosition(0, yPos);
    });
    $("#sec1-btn-4").click(function() {
        const yPos = $(".section1").innerHeight()+ $(".section2").innerHeight() + $(".section3").innerHeight()
            + $(".devider1").innerHeight() + $(".sec4-back2").innerHeight() + $(".header").innerHeight()
        container.setPosition(0, yPos);
    });
    $("#sec1-btn-5").click(function() {
        const yPos = $(".section1").innerHeight()+ $(".section2").innerHeight() + $(".section3").innerHeight()
            + $(".devider1").innerHeight() + $(".sec4-back3").innerHeight() + $(".header").innerHeight()
        container.setPosition(0, yPos);
    });
    $("#sec1-btn-6").click(function() {
        const yPos = $(".section1").innerHeight()+ $(".section2").innerHeight() + $(".section3").innerHeight()
            + $(".devider1").innerHeight() + $(".section4").innerHeight() + $(".section5").innerHeight() + $(".header").innerHeight() 
            + $(".devider2").innerHeight() 
        container.setPosition(0, yPos);
    });
    $("#sec1-btn-7").click(function() {
        const yPos = $(".section1").innerHeight()+ $(".section2").innerHeight() + $(".section3").innerHeight()
            + $(".devider1").innerHeight() + $(".section4").innerHeight() + $(".section5").innerHeight() 
            + $(".devider2").innerHeight() + $(".devider3").innerHeight() + $(".sec6-back2").innerHeight() + $(".header").innerHeight()
        container.setPosition(0, yPos);
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
            trigger: ".sec2-line1-1",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec2-line1-1, .sec2-line1-2", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec2-arrow1",
            start: "top 60%",
            end: "+=20000",
            toggleClass: {targets:".sec2-slogan1", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec3-paper1",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec3-paper1, .sec3-paper2, .sec3-envelope1, .sec3-envelope2, .sec3-envelope3, .sec3-shadow1, .sec3-shadow2", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec4-product1",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec4-product1, .sec4-product2", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec4-product3",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec4-product3, .sec4-product4", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec4-label1",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec4-label1, .sec4-label2, .sec4-callout1", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec5-pd1",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec5-pd1", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec5-pd3",
            start: "top bottom",
            end: "+=20000",
            toggleClass: {targets:".sec5-pd3", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec5-manual1",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec5-manual1, .sec5-manual2", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec6-icon",
            start: "top 70%",
            end: "+=20000",
            toggleClass: {targets:".sec6-icon", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec6-mobile1",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec6-mobile1", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
        ScrollTrigger.create({
            trigger: ".sec6-tb1",
            start: "top 80%",
            end: "+=20000",
            toggleClass: {targets:".sec6-tb1, .sec6-tb2", className:"on-default"},
            toggleActions: "restart none complete complete",
        })
    });

});
