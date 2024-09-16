$(document).ready(function(){
    // Initialize Superslides
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    // Initialize Typed.js
    var typed = new Typed(".typed", {
        strings: ["Student.", "Aspiring Software Engineer.", "Arizona State Graduate."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false,
    });

    // Initialize Owl Carousel with smoother and faster transition
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        autoplay: true, // Enable autoplay
        autoplayTimeout: 2500, // Duration between slides in milliseconds
        autoplayHoverPause: true, // Pause on hover
        autoplaySpeed: 1500, // Speed of transition between slides
        smartSpeed: 1500, // Smooth transition speed
        animateOut: 'fadeOut', // Animation effect when transitioning out
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });

    // Initialize Isotope
    $(window).on("load", function() {
        $(".loader .inner").fadeOut(500, function() {
            $(".loader").fadeOut(750);
        });
        $(".items").isotope({
            filter: '*',
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
    });

    // Initialize EasyPieChart
    var skillsTopOffset = $(".skillsSection").offset().top;
    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

    // Initialize Fancybox
    $("[data-fancybox]").fancybox();

    // Filter functionality for Isotope
    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    // Sticky Navigation
    const nav = $("#navigation");
    const navTop = nav.offset().top;
    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");
        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }
});
