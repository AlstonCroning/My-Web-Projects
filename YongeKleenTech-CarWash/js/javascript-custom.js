//Add bx-slider to gallery
//bxslider-1 (exterior)
$(document).ready(function () {
    'use strict';

    $('.bxslider-exterior').bxSlider({
        slideWidth: 400,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        response: true,
        slideMargin: 5,
        pause: 4000,
        autoHover: true,
        controls: true,
        captions: true,
        touchEnabled: true
    });
});

//bxslider-2 (interior)
$(document).ready(function () {
    'use strict';

    $('.bxslider-interior').bxSlider({
        slideWidth: 400,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        response: true,
        slideMargin: 5,
        pause: 5000,
        autoHover: true,
        controls: true,
        captions: true,
        touchEnabled: true
    });
});

//bxslider-3 (other)
$(document).ready(function () {
    'use strict';

    $('.bxslider-other').bxSlider({
        slideWidth: 400,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        response: true,
        slideMargin: 5,
        pause: 6000,
        autoHover: true,
        controls: true,
        captions: true,
        touchEnabled: true
    });
});

//add smooth scrolling
$(document).ready(function () {
    'use strict';

    $('.nav-item, #scroll-to-top, #copyright-YKT-Link, .navbar-brand').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//active menu item on click
$(document).ready(function () {
    'use strict';

    $('.nav-item').click(function () {
        'use strict';

        $('.nav-item').parent().removeClass("active");
        $(this).parent().addClass("active");

    });

});