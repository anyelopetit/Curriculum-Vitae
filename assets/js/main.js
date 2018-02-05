(function() {

    "use strict";

    // Variables
    // =========================================================================================
    var $html = $('html'),
        $document = $(document),
        $window = $(window),
        i = 0;


    // Scripts initialize
    // ===================

    $window.on('load', function() {

        // =================================================================================
        // Preloader
        // =================================================================================
        var $preloader = $('#page-preloader');
        $preloader.delay(500).addClass('hid');

        // =================================================================================
        // WOW
        // =================================================================================
        new WOW().init();
    });


    $document.ready(function() {

        // =================================================================================
        // Contact Form
        // =================================================================================
        var contactForm = $(".contact-form");
        if (contactForm.length) {
            var contactResault = $("body").append("<span class='form-resault'></span>").find(".form-resault");
            contactForm.each(function() {
                var this_form = $(this);
                var contactFormInput = this_form.find(".form-control.required");

                contactFormInput.on("blur", function() {
                    if (!$.trim($(this).val())) {
                        $(this).parent().addClass("input-error");
                    }
                });

                contactFormInput.on("focus", function() {
                    $(this).parent().removeClass("input-error");
                });

                this_form.on("submit", function() {
                    var form_data1 = $(this).serialize();
                    if (!contactFormInput.parent().hasClass("input-error") && contactFormInput.val()) {
                        $.ajax({
                            type: "POST",
                            url: "php/contact.php",
                            data: form_data1,
                            success: function() {
                                contactResault.addClass("correct");
                                contactResault.html("Your data has been sent!");
                                setTimeout(function() {
                                    contactResault.removeClass("incorrect").removeClass("correct");
                                }, 4500);
                            }
                        });
                    } else {
                        if (contactFormInput.val() === "") {
                            var contactFormInputEmpty = contactFormInput.filter(function() {
                                return $(this).val() === "";
                            });
                            contactFormInputEmpty.parent().addClass("input-error");
                        }
                        contactResault.addClass("incorrect");
                        contactResault.html("You must fill in all required fields");
                        setTimeout(function() {
                            contactResault.removeClass("incorrect").removeClass("correct");
                        }, 4500);
                    }
                    return false;
                });
            });
        }

        // =================================================================================
        // Fancybox
        // =================================================================================
        var fancybox = $(".fancybox");
        if (fancybox.length) {
            fancybox.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade'
            });
        }
        var fancybox_media = $('.fancybox-media');
        if (fancybox_media.length) {
            fancybox_media.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                helpers: {
                    media: {}
                }
            });
        }

        // =================================================================================
        // Responsive Nav
        // =================================================================================
        var responsiveNav = new Navigation({
            init: true,
            stuck: true,
            responsive: true,
            breakpoint: 992, // don't forget to change in css as well
        });

        // =================================================================================
        // Parallax Blocks
        // =================================================================================
        var parallax_block = $(".js-parallax-block");
        var parallaxBlock = function() {
            parallax_block.each(function() {
                if ($window.width() >= 1200) {
                    var it = $(this);
                    var elem_parent = it.parent();
                    var elem_speed = it.attr("data-multiplier");
                    var elem_pos = it.attr("data-pos");

                    var ot = elem_parent.offset().top * elem_speed;
                    var st = $window.scrollTop() * elem_speed;

                    var a = elem_pos - (elem_pos - st) * 0.08;
                    var b = ot - a;
                    it.css({
                        transform: "translate3d(0px, " + b + "px, 0px)"
                    });
                    it.attr("data-pos", a);
                } else {
                    $(this).css({
                        transform: "translate3d(0px, 0px, 0px)"
                    });
                }
            });
            window.requestAnimationFrame(parallaxBlock);
        };
        if (parallax_block.length) {
            parallaxBlock();
        }

        // =================================================================================
        // UIToTop
        // =================================================================================
        $().UItoTop();

        // =================================================================================
        // Owl carousel
        // =================================================================================
        var slider_1 = $('.slider_1');
        if (slider_1.length) {
            slider_1.owlCarousel({
                mouseDrag: true,
                nav: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3500,
                autoplaySpeed: 2000,
                dots: false,
                items: 3,
                margin: 30,
                autoplayHoverPause: true,
                responsiveClass: true,
                responsive: {
                    0: { items: 1, },
                    480: { items: 1, },
                    768: { items: 2, },
                }
            });
        }
        var slider_2 = $('.slider_2');
        if (slider_2.length) {
            slider_2.owlCarousel({
                mouseDrag: true,
                nav: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 1500,
                autoplayHoverPause: true,
                dots: false,
                items: 5,
                margin: 30,
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    480: { items: 2 },
                    768: { items: 3 },
                    992: { items: 5 },
                }
            });
        }
        var slider_3 = $('.slider_3');
        if (slider_3.length) {
            slider_3.owlCarousel({
                mouseDrag: true,
                nav: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 1500,
                autoplayHoverPause: true,
                dots: true,
                items: 3,
                margin: 30,
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    480: { items: 1 },
                    768: { items: 2 },
                    992: { items: 3 },
                }
            });
        }

        // =================================================================================
        // Style Switcher
        // =================================================================================
        var switcher = $("#style-switcher");
        var switcher_toggle = switcher.find(".toggle-switcher");
        if (switcher.length) {
            var body = $("body");

            //switcher toggle
            switcher_toggle.on("click", function(e) {
                e.preventDefault();
                switcher.toggleClass("active");
            });

            //color toggle
            var color_stylesheet = $("#colors");
            var color_link = $("#style-switcher .colors > li > a");
            color_link.each(function() {
                var it = $(this);
                it.on("click", function() {
                    var color_src = it.attr("data-color-src");
                    color_stylesheet.attr("href", color_src);
                    return false;
                });
            });

        };

        // =================================================================================
        // Progress Bar
        // =================================================================================
        var progressBar = $(".progress-bar");
        if (progressBar.length) {
            $(document).on("scroll", function() {
                progressBar.not('.scrolled').each(function() {
                    var position = $(this).offset().top;
                    var item_offset = $window.scrollTop() + $window.height();
                    if (item_offset > position) {
                        var item = $(this);
                        var start = item.attr("data-valuemin");
                        var end = item.attr("data-valuenow");
                        item.css({ width: end + '%' });
                        item.parent().find('.progress-bar-counter')
                            .removeClass("hide")
                            .counter({
                                start: start,
                                end: end,
                                time: 0.7,
                                step: 50
                            });
                        item.addClass('scrolled');
                    }
                });
            }).trigger("scroll");
        }

        // =================================================================================
        // Circular Progress Bars
        // =================================================================================
        var proBar = $(".progr-bar");
        if (proBar.length) {
            proBar.each(function() {
                var Bar = this;
                var pBar = $(this).attr("data-percent") * 0.01;
                var circle = new ProgressBar.Circle(Bar, {
                    strokeWidth: 5,
                    trailWidth: 5,
                    easing: 'easeInOut',
                    duration: 1400,
                    text: {
                        autoStyleContainer: false
                    },
                    from: { width: 1 },
                    to: { width: 5 },
                    // Set default step function for all animate calls
                    step: function(state, circle) {
                        circle.path.setAttribute('stroke-width', 5);
                        var value = Math.round(circle.value() * 100);
                        if (value === 0) {
                            circle.setText('');
                        } else {
                            circle.setText(value + '%');
                        }
                    }
                });
                var doOnce;
                $window.on("scroll", function() {
                    var Bar_offset = proBar.offset().top;
                    var win_offset = $window.height() + $window.scrollTop();
                    if (win_offset >= Bar_offset && !doOnce) {
                        doOnce = true;
                        circle.animate(pBar);
                    }
                });
                $window.trigger("scroll");
            });
        }

        // =================================================================================
        // ISOTOPE
        // =================================================================================
        var isotope = $('.iso');
        // debounce so filtering doesn't happen every millisecond
        function debounce(fn, threshold) {
            if (isotope.length) {
                var timeout;
                return function debounced() {
                    if (timeout) {
                        clearTimeout(timeout);
                    }

                    function delayed() {
                        fn();
                        timeout = null;
                    }
                    timeout = setTimeout(delayed, threshold || 100);
                }
            }
        }
        if (isotope.length) {
            $(function() {
                var $grid = $('.grid').isotope({
                    itemSelector: 'article'
                });
                // filter buttons
                $('.filters-button-group').on('click', 'button', function() {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({ filter: filterValue });
                    $window.trigger("resize");
                });
                $('.button-group').each(function(i, buttonGroup) {
                    var $buttonGroup = $(buttonGroup);
                    $buttonGroup.on('click', 'button', function() {
                        $buttonGroup.find('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                    });
                });
            });

            $window.on("load", function() {
                $('.iso .button-group button.is-checked').trigger("click");
            });
        }


        $('.img-container').directionalHover({
            overlay: "img-panel",
            easing: "swing",
            speed: 200
        });



    });

})();