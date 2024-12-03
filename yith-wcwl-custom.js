jQuery( document ).ready( function($) {
    var update_wishlist_count = function() {
        $.ajax({
            beforeSend: function () {
                // Code to execute before AJAX request
            },
            complete  : function () {
                // Code to execute after AJAX request
            },
            data      : {
                action: 'update_wishlist_count'
            },
            success   : function (data) {
                $('.wishlist-box span.wl-counter').html( data );
                // Code to execute after wishlist count is updated
            },
            url: yith_wcwl_l10n.ajax_url
        });
    };

    jQuery(document.body).on('added_to_wishlist removed_from_wishlist added_to_cart', update_wishlist_count);
});