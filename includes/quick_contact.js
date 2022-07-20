/*jslint browser: true*/
/*global $, jQuery, Modernizr, enquire*/
'use strict';
(function (window, document, $) {
    var $window = $(window),
        mobileOnly = "screen and (max-width:47.9375em)", // 767px.
        mobileLandscape = "(min-width:30em)", // 480px.
        tablet = "(min-width:48em)", // 768px.
		link_video_url_download = null;
    // Contact form 7 redirect after submit.
    document.addEventListener('wpcf7mailsent', function (event) {
        if ('363' == event.detail.contactFormId) {
            window.location.href = window.location.protocol + '//' + window.location.hostname + '/thank-you-download-pdf/';
        }
        if ('396' == event.detail.contactFormId) {
            window.location.href = window.location.protocol + '//' + window.location.hostname + '/thank-you-get-in-touch/';
        }
        if ('1308' == event.detail.contactFormId) {
            window.location.href = window.location.protocol + '//' + window.location.hostname + '/thank-you-qualify-form/';
        }
        if ('383' == event.detail.contactFormId) {
            window.location.href = window.location.protocol + '//' + window.location.hostname + '/thank-you-request-call-back/';
        }
        if ('4308' == event.detail.contactFormId) {
            window.location.href = window.location.protocol + '//' + window.location.hostname + '/thank-you-expression-of-interest/';
        }
        if ('888' == event.detail.contactFormId) {
            window.location.href = window.location.protocol + '//' + window.location.hostname + '/thank-you-request-more-information/';
        }
        if ('55' == event.detail.contactFormId) {
            window.location.href = window.location.protocol + '//' + window.location.hostname + '/thank-you-subscribe-mailing-list/';
        }
        if ('1563' == event.detail.contactFormId) {
            window.location.href = window.location.protocol + '//' + window.location.hostname + '/thank-you-request-your-interest/';
        }
		if ('4299' == event.detail.contactFormId) {
			link_video_url_download = event.detail.inputs.find(i=>i.name === 'link_video_url_download').value;
			if (link_video_url_download)
            	window.location.href = link_video_url_download;
			else 
				window.location.protocol + '//' + window.location.hostname + '/thank-you-download-video/';
        }
    }, false);

    // Js code.
    $(document).ready(function () {
        // Remove attr title.
        // $('a, img').removeAttr('title');

        // Add placeholder to quiz validate form.
        var $wpcf7_quiz = $('.wpcf7-quiz');
        if ($wpcf7_quiz.length) {
            $wpcf7_quiz.attr('placeholder', 'What is the first letter of Vative?*');
        }

        // Js client
        var $boxClient = $('.js-box-client');
        if ($boxClient.length) {
            $boxClient.slick({
                prevArrow: '<span class="slick-prev slick-arrow" aria-label="Previous" type="span"></span>',
                nextArrow: '<span class="slick-next slick-arrow" aria-label="Next" type="span"></span>',
                mobileFirst: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        var $js_box_client_slidemobile = $('.js-box-client-slidemobile');
        if ($js_box_client_slidemobile.length) {
            $js_box_client_slidemobile.slick({
                prevArrow: '<span class="slick-prev slick-arrow" aria-label="Previous" type="span"></span>',
                nextArrow: '<span class="slick-next slick-arrow" aria-label="Next" type="span"></span>',
                mobileFirst: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick',
                    }
                ]
            });

            $window.resize(function () {
                $js_box_client_slidemobile.not('.slick-initialized').slick('resize');
            });

            $window.on('orientationchange', function () {
                $js_box_client_slidemobile.not('.slick-initialized').slick('resize');
            });
        }

        //Slick for banner
        var $jsBanner = $('.js-slider');
        if ($jsBanner.length) {
            $jsBanner.slick({
                dots: false,
                autoplay: true,
                speed: 800,
                fade: true,
                autoplaySpeed: 2000,
                adaptiveHeight: true,
                prevArrow: '<span class="slick-prev slick-arrow" aria-label="Previous" type="span"></span>',
                nextArrow: '<span class="slick-next slick-arrow" aria-label="Next" type="span"></span>',
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        dots: false,
                        arrows: true
                    }
                }]
            })

            // $jsBanner.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            //   var currentSlideIndex = currentSlide;
            //   var currentSlideObject = $(this).find("[data-slick-index='" + currentSlideIndex + "']");
            //   var $heightcontent = currentSlideObject.find('.banner__description').height();

            //   if($window.width() > 1023) {
            //     $('.banner--with-slider .banner__content').css('top', "calc(50% - " + $heightcontent / 2 + "px)");
            //     $('.banner--with-slider .slick-arrow').css('top', "calc(50% - " + $heightcontent + "px)");
            //   } else if($window.width() > 767) {
            //     $('.banner--with-slider .slick-arrow').css('top', "calc(50% - " + $heightcontent / 2 + "px)");
            //   } else {
            //     $('.banner--with-slider .slick-arrow').css('bottom', "calc(" + $heightcontent + "px + 18px)");
            //   }
            // });

            var currentSlideObject = $jsBanner.find(".slick-current");
            var $heightcontent = $('.banner__description').height();

            if ($window.width() > 1023) {
                $('.banner--with-slider .banner__content').css('top', "calc(50% - " + $heightcontent / 2 + "px)");
                $('.banner--with-slider .slick-arrow').css('top', "calc(50% - " + $heightcontent / 2 + "px)");
            }
            // else if($window.width() > 767) {
            //   $('.banner--with-slider .slick-arrow').css('top', "calc(50% - " + $heightcontent / 2 + "px)");
            // } 
            // else {
            //   $('.banner--with-slider .slick-arrow').css('bottom', "calc(" + $heightcontent + "px + 18px)");
            // }
        }

        var $js_sidemode = $('.js-sidemode');
        if ($js_sidemode.length) {
            $js_sidemode.slick({
                mobileFirst: true,
                infinite: true,
                centerMode: true,
                variableWidth: true,
                prevArrow: '<span class="slick-prev slick-arrow" aria-label="Previous" type="span"></span>',
                nextArrow: '<span class="slick-next slick-arrow" aria-label="Next" type="span"></span>',
                appendArrows: $('.js-append'),
                responsive: [
                    {
                        breakpoint: 767,
                        settings: "unslick",
                    },
                ]
            });

            $window.resize(function () {
                $js_sidemode.not('.slick-initialized').slick('resize');
            });

            $window.on('orientationchange', function () {
                $js_sidemode.not('.slick-initialized').slick('resize');
            });
        }

        var $js_slick = $('.js-slick');
        if ($js_slick.length) {
            $js_slick.slick({
                mobileFirst: true,
                infinite: true,
                adaptiveHeight: true,
                prevArrow: '<span class="slick-prev slick-arrow" aria-label="Previous" type="span"></span>',
                nextArrow: '<span class="slick-next slick-arrow" aria-label="Next" type="span"></span>',
                // appendArrows: $('.js-append').find('.container'),
                variableWidth: false,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: "unslick",
                    },
                ]
            });

            $window.resize(function () {
                $js_slick.not('.slick-initialized').slick('resize');
            });

            $window.on('orientationchange', function () {
                $js_slick.not('.slick-initialized').slick('resize');
            });
        }

        var $js_slick_mobile = $('.js-slick-mobile');
        if ($js_slick_mobile.length) {
            $js_slick_mobile.slick({
                prevArrow: '<span class="slick-prev slick-arrow" aria-label="Previous" type="span"></span>',
                nextArrow: '<span class="slick-next slick-arrow" aria-label="Next" type="span"></span>',
                // mobileFirst: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick',
                    }
                ]
            });

            $window.resize(function () {
                $js_slick_mobile.not('.slick-initialized').slick('resize');
            });

            $window.on('orientationchange', function () {
                $js_slick_mobile.not('.slick-initialized').slick('resize');
            });
        }


        var $js_wp_gr = $('.wp-google-reviews');
        if ($js_wp_gr.length) {
            $js_wp_gr.slick({
				dots: true,
                slidesToShow: 3,
                slidesToScroll: 3,
				arrows: false,
				autoplay: true,
  				autoplaySpeed: 5000,
				pauseOnHover: true,
				pauseOnDotsHover: true,
				cssEase: 'ease',
				speed: 1500,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
							dots: true,
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false,
							autoplay: true,
							autoplaySpeed: 3000,
							pauseOnHover: true,
							pauseOnDotsHover: true,
							cssEase: 'ease',
							speed: 500,
								  }
                    }
                ]
            });

            $window.resize(function () {
                $js_wp_gr.not('.slick-initialized').slick('resize');
            });

            $window.on('orientationchange', function () {
                $js_wp_gr.not('.slick-initialized').slick('resize');
            });
        }
		
		var heroVideo = null;
		var heroVideoDesktop = document.getElementById("hero-video");
		var heroVideoMobile = document.getElementById("hero-video-mobile");
		var heroMuteToggle = document.getElementById('hero-mute-toggle');
		var windowWidth = window.innerWidth;
		if (windowWidth >= 768) {
			heroVideo = heroVideoDesktop;
		} else {
			heroVideo = heroVideoMobile;
		}
		if (heroVideo) setInterval(()=>heroVideo.play(),1000);
		
		
		window.toggleHeroMute = function () {
					heroVideo.muted = !heroVideo.muted;
					if (heroVideo.muted) {
						heroMuteToggle.innerText = "Click here to unmute";
						heroMuteToggle.className = "muted";
					}
					else {
						heroMuteToggle.innerText = "Click here to mute";
						heroMuteToggle.className = "unmuted";
					}
					event.preventDefault();
				}
		
		$window.resize(function () {
            if (!heroVideo) return;
			if (windowWidth != window.innerWidth) {
// 				console.log('screen width change');
				windowWidth = window.innerWidth;
// 				console.log('res',windowWidth);
				var unmuted = heroMuteToggle.classList.contains("unmuted");
				if (heroVideo == heroVideoDesktop && window.innerWidth < 768) {
// 					console.log('should be mobile');
					if (unmuted) toggleHeroMute();
					heroVideo.pause();
					heroVideo = heroVideoMobile;
					heroVideo.play();
				} else if (heroVideo == heroVideoMobile && window.innerWidth >= 768) {
// 					console.log('should be desktop');
					if (unmuted) toggleHeroMute();
					heroVideo.pause();
					heroVideo = heroVideoDesktop;
					heroVideo.play();
				}	
			}
			
		});
		

        // js video
        // var $js_video = $('.js-video');
        // if($js_video.length) {
        //   $('.js-video').click(function (e) {
        //     var $data_video = $(this).attr("data-video");
        //     var $is_video = $('.is-video');
        //     $is_video.html('<source src="' + $data_video + '" type="video/mp4">');
        //     $is_video.get(0).play();
        //   });
        // }

        //js scroll
        var $js_scroll = $('.js-scroll');
        if ($js_scroll.length) {
            $js_scroll.mCustomScrollbar();
        }

        // js add content
        var $js_add_content = $('.js-add-content');
        if ($js_add_content.length) {
            $('.js-add-content').click(function (e) {
                var $data_text = $(this).find('.js-get-content').html();
                var $data_position = $(this).find('.js-get-content').attr("data-position");
                var $is_add_content = $('.is-add-content');
                $is_add_content.parent().addClass('is-show');

                if ($data_position === '') {
                    $is_add_content.parent().removeClass('leftside');
                } else {
                    $is_add_content.parent().addClass($data_position);
                }

                $is_add_content.html($data_text);
            });

            $('.js-add-content').mouseenter(function () {
                if (window.innerWidth >= 1024) {
                    $(this).trigger('click');
                }
            });

            $('.js-add-content').mouseleave(function () {
                if (window.innerWidth >= 1024) {
                    var $is_add_content = $('.is-add-content');
                    $is_add_content.parent().removeClass('is-show');
                }
            });
        }

        //Counter number.
        var $number = $('.box-number__number span');
        if ($number.length) {
            $number.each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }

        // function detect show
        // $detect : element detect show
        // $affect : element affect for add class "is-show"
        // $area_limit: area limit of $detect
        function detect_show($detect, $affect, $area_limit) {
            var $detect = '.js-show', $affect = '.is-affect', $area_limit = '.area-limit';
            if ($($affect).length) {
                $($detect).click(function (e) {
                    e.preventDefault();
                    var $this = $(this).closest($area_limit).find($affect).first();
                    if ($this.length === 0) {
                        $this = $(this).closest($area_limit);
                    }
                    $this.toggleClass("is-show");
                });
            }
        }

        // function detect outside element
        // $element : element detect outside
        // $affect : element affect for add class "is-show"
        // $area_limit: area limit outside of $element
        function detect_outsite($element, $affect, $area_limit) {
            var $element = '.js-clickOutside', $affect = '.is-affect-outside', $area_limit = '.area-limit-outside';
            var $js_clickOutsite = $($element);
            if ($js_clickOutsite.length) {
                var $area_limit = $js_clickOutsite.closest($area_limit); // $box parent container
                var $box = $($js_clickOutsite);

                $area_limit.click(function (event) {
                    if (
                        $box.has(event.target).length == 0 //checks if descendants of $box was clicked
                        &&
                        !$box.is(event.target) //checks if the $box itself was clicked
                    ) {
                        $($affect).removeClass('is-show');

                        if ($($affect).find('.is-video').length) {
                            $($affect).find('.is-video').get(0).pause();
                        }
                    }
                });
            }
        }

        // function accordion
        // $element : element detect accordion
        // $affect : element affect for add class "is-show"
        // $area_limit_item: area limit outside each element item
        // $area_limit: area limit outside of $element
        function js_accordion($element, $affect, $area_limit_item, $area_limit) {
            var $element = '.js-accordion', $affect = '.is-affect-accordion', $area_limit_item = '.is-accordion-item', $area_limit = '.area-limit-accordion';
            var $jsAccordion = $($element);
            if ($jsAccordion.length) {
                $jsAccordion.click(function (e) {
                    if ($(this).hasClass('active')) {
                        $(this).closest($area_limit_item).find($affect).slideUp();
                        $(this).removeClass('active');
                    } else {
                        $(this).closest($area_limit).find($affect).slideUp();
                        $(this).closest($area_limit_item).find($affect).slideDown();
                        $jsAccordion.removeClass('active');
                        $(this).addClass('active');
                    }
                });
            }
        }

        // function mathheight
        // $element: element detect matchheight
        // $area_limit: area limit of element
        function js_matchheight($element, $area_limit) {
            var $element = '.js-matchheight', $area_limit = '.area-limit-mathchheight';
            var $js_matchheight = $($element);

            if ($js_matchheight.length) {
                $($area_limit).find($element).matchHeight();
            }
        }

        var $js_quick = $('.js-quick');
        if ($js_quick.length) {
            $js_quick.click(function (e) {
                e.preventDefault();
                $('.quick-contact').addClass('is-show');
            });
        }

        // js-menu for animation slide up and slide down
        var $js_menu = $('.js-menu');
        if ($js_menu.length) {
            $js_menu.click(function (e) {
                if ($(this).hasClass('is-show')) {
                    $(this).removeClass('is-show');
                    $('.header').removeClass('is-show');
                    $('.header__wrap').slideUp();
                } else {
                    $(this).addClass('is-show');
                    $('.header').addClass('is-show');
                    $('.header__wrap').slideDown({
                        start: function () {
                            $(this).css({
                                display: "flex"
                            })
                        }
                    });
                }
            });
        }

        // js-interactive
        var $js_interactive = $('.js-interactive');
        if ($js_interactive.length) {
            $js_interactive.click(function (e) {
                var $index = $(this).index();
                var $is_interactive = $('.is-interactive');
                $is_interactive.removeClass('is-show');
                $is_interactive.eq($index).addClass('is-show');
                $js_interactive.addClass('has-opacity');
                $(this).removeClass('has-opacity');
                //this line is here just to bust cache
            });
        }

        // set class for grid layout
        var $icon_text = $('.icon-text');
        if ($icon_text.length) {
            $icon_text.closest('.grid-layout--slide').addClass('grid-layout--has-icon-text');
        }

        var $js_show_hidden = $('.js-show-hidden');
        if ($js_show_hidden.length) {
            $js_show_hidden.click(function (e) {
                $(this).addClass('is-hidden');
            });
        }

        //js-grid-card
        var $js_gridcard = $('.js-gridcard');
        if ($js_gridcard.length) {
            if ($window.width() < 1023) {
                $js_gridcard.click(function (e) {
                    $(this).toggleClass("is-show");
                });
            }
        }

        var $js_anchor = $('.js-anchor');
        if ($js_anchor.length) {
            $js_anchor.click(function (e) {
                var $header_height = $('.header').outerHeight();
                var $top = $('.is-anchor-affect').offset().top - $header_height;

                $([document.documentElement, document.body]).animate({
                    scrollTop: $top
                }, 800);
            });
        }

        // call function
        detect_outsite();
        detect_show();
        js_accordion();
        js_matchheight();

    });
}(this, this.document, this.jQuery));
