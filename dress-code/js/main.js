/*
  [JS Index]
*/


/*
  1. preloader
  2. fadeIn.element
  3. countdown
    3.1. countdown timer
	3.2. countdown SETUP
  4. fullPage
    4.1. fullPage direction
  5. clone function
    5.1. stripes
  6. contact form
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
    });
	
    // 3. countdown
    $(document).on("ready", function() {
        // 3.1. countdown timer
        $(".countdown").countdown({
            until: new Date(Date.parse(setting.counter.lastDate)),
            layout: $(".countdown").html(),
            timezone: setting.counter.timeZone
        });
    });
    // 3.2. countdown SETUP
    var setting = {
        counter: {
            lastDate: "05/05/2025 12:00:00", // target date settings, 'MM/DD/YYYY HH:MM:SS'
            timeZone: null
        }
    };
	
    // 4. fullPage
    $("#fullpage").fullpage({
        anchors: ["home", "about", "launch", "contact"],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["Home", "About", "Launch", "Contact"],
        responsiveWidth: 1024,
        autoScrolling: true,
        scrollBar: false,
        css3: true,
        verticalCentered: true,
        onLeave: function(index, nextIndex, direction) {
            var idx = Math.abs(index - nextIndex) * 0.1;
            $.fn.fullpage.setScrollingSpeed(idx * 15000);
            change(index, direction);
        },
        afterResponsive: function(isResponsive) {}
    });
    // 4.1. fullPage direction
    function change(index, direction) {
        if (direction == "down") {
            $(".section" + index).removeClass("active");
            $(".section" + (index + 1)).addClass("active");
            $(".introduction").removeClass("introduction-on").addClass("introduction-off");
        } else if (direction == "up") {
            $(".section" + index).removeClass("active");
            $(".section" + (index - 1)).addClass("active");
            $(".introduction").removeClass("introduction-off").addClass("introduction-on");
        }
    }
	
    // 5. clone function
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
    // 5.1. stripes
    $("<div class='upper-page'></div>").appendTo(".stripes");
    $("<div class='running-teardrop'></div>").duplicate(4).appendTo(".upper-page");
	
    // 6. contact form
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


});