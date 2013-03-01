



(function ($) {

    menuidx = {
        '/WDEvelopment/home/': 1,
        '/WDEvelopment/document/': 2,
        '/WDEvelopment/about/': 3,
    };

    $(document).ready(function() {

        // highlight main menu
        var path = window.location.pathname;
        if (path != '/WDEvelopment/')
            $('#mainnav li:nth-child(' + menuidx[path] + ')')
            .addClass('active');

        $(".files").linktype();

    });

})(jQuery);
