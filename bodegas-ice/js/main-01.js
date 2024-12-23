﻿/*
  [JS Index]
*/


/*
  1. preloader
  2. fadeIn.element
  3. page scroll
  4. navigation
  5. animate elements
  6. home fadeOut animation
  7. slick slider
  8. facts counter
  9. skills bar
  10. google maps zoom ON/OFF
  11. owl carousel
  12. swiper slider
  13. magnificPopup
  14. clone function
  15. items selector
  16. contact form
    16.1. contact modal
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
        $(".hero-bg").addClass("hero-bg-show");
    });
	
    // 3. page scroll
    $('a[href*="#"]:not([href="#"])').on("click", function() {
        console.log("click");
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=" + this.hash.slice(1) + "]');
            if (target.length) {
                if ($(window).width() < 768) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - 81
                    }, 1000);
                } else {
                    $("html, body").animate({
                        scrollTop: target.offset().top - 81
                    }, 1000);
                }
                return false;
            }
        }
    });
	
    // 4. navigation
    //
    $(".navbar-collapse ul li a:not(.dropdown-toggle)").on("click", function() {
        $(".navbar-toggle:visible").click();
    });
    // navigation dropdown
    $(".dropdown-toggle").on("click", function(e) {
        if ($(document).width() > 768) {
            e.preventDefault();
            var url = $(this).attr('href');
            if (url !== '#') {
                window.location.href = url;
            }
        }
    });
	
    $(window).on("scroll", function() {
        // 5. animate elements
        if ($(this).scrollTop() > 50) {
            $(".border-top").addClass("top-position-primary");
			$(".navbar-bg-switch").addClass("navbar-bg-switch-color");
            $(".main-navigation-bg").addClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").addClass("navbar-collapse-position-primary");
            $(".main-navigation").addClass("main-navigation-home-call");
            $(".to-top-arrow").addClass("show");
			$(".navbar-bg-switch").addClass("main-navigation-bg");
        } else {
            $(".border-top").removeClass("top-position-primary");
			$(".navbar-bg-switch").removeClass("navbar-bg-switch-color");
            $(".main-navigation-bg").removeClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").removeClass("navbar-collapse-position-primary");
            $(".main-navigation").removeClass("main-navigation-home-call");
            $(".to-top-arrow").removeClass("show");
			$(".navbar-bg-switch").removeClass("main-navigation-bg");
        }
		
        // 6. home fadeOut animation
        $(".hero-heading.hero-heading-home, .hero-subheading.hero-subheading-home, .swiper-slide-pagination, .swiper-slide-controls-play-pause-wrapper, .hero-slider-bg-controls, .more-wraper-center.more-wraper-center-home, .section-title.section-title-home, .swiper-scrollbar").css("opacity", 1 - $(window).scrollTop() / 600);
    });
	
    // 7. slick slider
    $(".slick-left, .slick-right-alternative").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: false,
        autoplay: false,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 800
    });
	
    // 8. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 9. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
    $(".show-skillbar-2").appear(function() {
        $(".skillbar-2").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
	
    // 10. google maps zoom ON/OFF
    $(".google-maps").on("click", function() {
        $('.google-maps iframe').css("pointer-events", "auto");
    });
    $(".google-maps").on("mouseleave", function() {
        $('.google-maps iframe').css("pointer-events", "none");
    });
	
    // 11. owl carousel
    $(".owl-carousel-team").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-team',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 2,
                margin: 50
            },
            880: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 3,
                margin: 50
            }
        }
    });
    $(".owl-carousel-testimonials").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn"
    });
    $(".owl-carousel-inside").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-inside',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 2,
                margin: 50
            },
            880: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 3,
                margin: 50
            }
        }
    });
    $(".owl-carousel-news").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 1,
                margin: 20
            },
            980: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
    $("#owl-carousel-news-1").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-1',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 1,
                margin: 20
            },
            980: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
    $("#owl-carousel-news-2").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-2',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 1,
                margin: 20
            },
            980: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
    $("#owl-carousel-news-3").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-3',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 1,
                margin: 20
            },
            980: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
    $("#owl-carousel-news-4").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-4',
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            768: {
                items: 1,
                margin: 20
            },
            980: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
	
    // 12. swiper slider
    var swiper1 = new Swiper(".swiper-container-wrapper .swiper-container.swiper1", {
        preloadImages: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        init: true,
        loop: false,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: {
            el: ".swiper-slide-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        },
		scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true
        }
    });
    swiper1.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
    });
    swiper1.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
    });
    var playButton = $(".swiper-slide-controls-play-pause-wrapper");
    function autoEnd() {
        playButton.removeClass("slider-on-off");
        swiper1.autoplay.stop();
    }
    function autoStart() {
        playButton.addClass("slider-on-off");
        swiper1.autoplay.start();
    }
    playButton.on("click", function() {
        if (playButton.hasClass("slider-on-off")) autoEnd();
        else autoStart();
        return false;
    });
	//
    var swiper2 = new Swiper(".swiper-container-wrapper .swiper-container.swiper2", {
        preloadImages: false,
        autoplay: false,
        init: true,
        loop: false,
        grabCursor: false,
        mousewheel: false,
        keyboard: false,
        simulateTouch: false,
        parallax: false,
        pagination: false,
        navigation: false
    });
	
    // 13. magnificPopup
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: false,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: ".popup-photo-gallery-open",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade",
            fixedContentPos: false
        });
    });
	
    // 14. clone function
    $.fn.duplicate = function(count, cloneEvents, callback) {
        var stack = [],
            el;
        while (count--) {
            el = this.clone(cloneEvents);
            callback && callback.call(el);
            stack.push(el.get()[0]);
        }
        return this.pushStack(stack);
    };
    $("<div class='vertical-lines-wrapper'></div>").appendTo(".vertical-lines");
    $("<div class='vertical-effect'></div>").duplicate(3).appendTo(".vertical-lines-wrapper");
	
    // 15. items selector
    const buttons = document.querySelectorAll(".item-button");
    const menus = document.querySelectorAll(".menu");
    function handleClick(e) {
        e.preventDefault();
        const targetMenu = document.querySelector(`#${this.dataset.target}`);
        menus.forEach(menu => {
            menu.classList.remove("menu-visible");
            targetMenu.classList.add("menu-visible");
        });
    }
    buttons.forEach(button => button.addEventListener("click", handleClick));
	
    // 16. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
    // 16.1. contact modal
    $(".contact-modal-launcher, .contact-modal-closer").on("click", function(e) {
        e.preventDefault();
        if ($(".contact-modal").hasClass("open")) {
            $(".contact-modal").removeClass("open");
        } else {
            $(".contact-modal").addClass("open");
        }
    });
	
	
});