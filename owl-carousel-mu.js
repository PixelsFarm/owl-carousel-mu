// Carousel colabora home

jQuery(function() {
    (function($) {

        trace('carousel-colabora-home.js')

        var $w = $(window)
        var ww = $w.width()
        var $b = $('.home-colabora')
        var $c = $b.find('.item-list > ul')

        if (!$b.length)
            return

        __caroussel()

        $w.resize(function(e) {
            __resetCarousel()
        })

        function __caroussel() {
            if (!'ontouchstart'in document.documentElement || ww > 767)
                return

            $c.addClass('owl-carousel owl-theme')
            $c.owlCarousel({
                loop: false,
                nav: true,
                margin: 10,

                responsive: {
                    0: {
                        items: 1
                    }
                }
            })
        }

        function __resetCarousel() {
            var ww = $(window).width()

            if (ww > 767) {
                if (typeof $c.data('owl.carousel') != 'undefined')
                    $c.data('owl.carousel').destroy()
                $c.removeClass('owl-carousel owl-theme');
            } else if (ww < 768) {
                $c.addClass('owl-carousel owl-theme')
                $c.owlCarousel({
                    loop: false,
                    nav: true,
                    responsive: {
                        0: {
                            items: 1,
                            margin: 10
                        }
                    }
                })
            }
        }

        function trace(str) {
            console.log ? console.log(str) : null
        }

    }
    )(jQuery);
});