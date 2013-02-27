



(function ($) {

    menuidx = {
        '/wdevelopment/home/': 1,
        '/wdevelopment/document/': 2,
        '/wdevelopment/about/': 3,
    };

    $(document).ready(function() {

        // highlight main menu
        var path = window.location.pathname;
        if (path != '/wdevelopment/')
            $('#mainnav li:nth-child(' + menuidx[path] + ')')
            .addClass('active');

    });

})(jQuery);
