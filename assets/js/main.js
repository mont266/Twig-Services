!function(e){"use strict";e(document).ready(function(){e(document).on("click",".navbar-area .navbar-nav li.menu-item-has-children>a",function(e){e.preventDefault()}),e(".navbar-area .menu").on("click",function(){e(this).toggleClass("open"),e(".navbar-area .navbar-collapse").toggleClass("sopen")}),e(window).width()<992&&(e(".in-mobile").clone().appendTo(".sidebar-inner"),e(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>'),e('<i class="fas fa-chevron-right"></i>').insertAfter(""),e(".menu-item-has-children a").on("click",function(a){e(this).siblings(".sub-menu").animate({height:"toggle"},300)})),e(".category-service").find("div").length>2&&e(".category-service").append('<span><a href="javascript:;" class="showMore-cat"></a></span>'),e(".category-service .item").slice(0,10).addClass("shown"),e(".category-service .item").not(".shown").hide(),e(".category-service .showMore-cat").on("click",function(){e(".category-service .item").not(".shown").toggle(),e(this).toggleClass("showLess")});var a=e(".menu-toggle"),t=e(".navbar-nav");a.on("click",function(){a.hasClass("is-active")?t.removeClass("menu-open"):t.addClass("menu-open")}),e(".category-slider").owlCarousel({loop:!0,margin:15,nav:!0,dots:!1,smartSpeed:1500,autoWidth:!0,navText:[o,n],responsive:{0:{items:2},767:{items:6}}}),e(".carousel").carousel({interval:2e3}),e(".single-select").length&&e(".single-select").niceSelect();var o='<i class="fa fa-angle-left"></i>',n='<i class="fa fa-angle-right"></i>';e(".course-slider").owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,smartSpeed:1500,navText:[o,n],responsive:{0:{items:1},575:{items:2,margin:20},769:{items:3},1440:{items:4}}}),e(".testimonial-slider").owlCarousel({loop:!0,margin:30,nav:!0,dots:!0,smartSpeed:1500,navText:[o,n],responsive:{0:{items:1,margin:20},769:{items:3},1440:{items:4}}}),e(".testimonial-slider-2").owlCarousel({loop:!0,margin:30,nav:!0,dots:!0,smartSpeed:1500,navText:[o,n],responsive:{0:{items:1,margin:20},769:{items:3},1440:{items:3}}}),e(".client-slider").owlCarousel({loop:!0,margin:30,nav:!0,dots:!0,smartSpeed:1500,navText:[o,n],responsive:{0:{items:2},767:{items:4,margin:20},1300:{items:6}}}),e(".lesson-slider").owlCarousel({loop:!0,margin:30,nav:!0,dots:!0,smartSpeed:1500,navText:[o,n],responsive:{0:{items:1},768:{items:2},1440:{items:2}}}),e(".intro-slider").owlCarousel({loop:!0,margin:0,nav:!0,dots:!0,autoplay:!0,autoplayTimeout:2500,smartSpeed:1500,navText:[o,n],responsive:{0:{items:1},768:{items:3},1440:{items:5}}}),e(".nav-item"),e(".tab-pane"),e('button[data-bs-toggle="pill"]').on("shown.bs.tab",function(a){e(".tab-content>.active .course-slider").css({opacity:0}),e(".tab-content>.active").append('<div class="tab-preloader"><div class="preload"></div></div>'),setTimeout(function(){e(".tab-preloader").remove(),e(".tab-content>.active .course-slider").css({opacity:1})},1e3)}),e(".progress-item").length&&function(){for(var a=e(".progress-rate"),t=a.length,o=0;o<t;o++){var n="#"+a[o].id,i=e(n).attr("data-value");e(n).css({width:i+"%"})}}(),e(".counting").each(function(){var a=e(this),t=a.attr("data-count");e({countNum:a.text()}).animate({countNum:t},{duration:2e3,easing:"linear",step:function(){a.text(Math.floor(this.countNum))},complete:function(){a.text(this.countNum)}})}),e(".counter").counterUp({delay:15,time:2e3}),e(".play-btn").magnificPopup({type:"iframe",removalDelay:260,mainClass:"mfp-zoom-in"}),e.extend(!0,e.magnificPopup.defaults,{iframe:{patterns:{youtube:{index:"youtube.com/",id:"v=",src:"https://www.youtube.com/embed/Wimkqo8gDZ0"}}}});var i=e("#body-overlay"),s=e("#search-popup");e(document).on("click","#body-overlay",function(e){e.preventDefault(),i.removeClass("active"),s.removeClass("active")}),e(document).on("click",".search",function(e){e.preventDefault(),s.addClass("active"),i.addClass("active")}),e(".accordion-item").on("click",function(a){e(".accordion-item").removeClass("active"),e(this).toggleClass("active")}),e(document).on("click",".back-to-top",function(){e("html,body").animate({scrollTop:0},200)})}),e(window).on("scroll",function(){var a=e(".navbar-area");e(window).scrollTop()>=1?a.addClass("navbar-area-fixed"):a.removeClass("navbar-area-fixed");var t=e(".back-to-top");e(window).scrollTop()>1e3?t.fadeIn(1e3):t.fadeOut(1e3)}),e(window).on("load",function(){e("#preloader").fadeOut(0),e(".back-to-top").fadeOut(),e(document).on("click",".cancel-preloader a",function(a){a.preventDefault(),e("#preloader").fadeOut(500)})})}(jQuery);