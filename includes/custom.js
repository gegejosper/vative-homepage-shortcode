'use strict';
(function (window, document, $) {
    // Js code.
    $(document).ready(function () {
        // js add content
        if (window.innerWidth <= 1024) {
            $('.image-block__item a').attr('href', 'javascript:;')   
        }
        var $js_add_content = $('.js-add-content');
        if ($js_add_content.length) {
            $('.image-block__close').click(function (e) {
                console.log('Clicked!');
                $('.image-block__body').removeClass('is-show');
            });

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
                else {
                  console.log("Not Mobile");
                }
            });

            $('.js-add-content').mouseleave(function () {
                if (window.innerWidth >= 1024) {
                    var $is_add_content = $('.is-add-content');
                    $is_add_content.parent().removeClass('is-show');
                }
            });
        }

    });
}(this, this.document, this.jQuery));