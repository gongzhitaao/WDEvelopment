---

---
{% include setup %}

(function ($) {

    menuidx = {
        '{{ BASE_PATH }}/home/': 1,
        '{{ BASE_PATH }}/document/': 2,
        '{{ BASE_PATH }}/about/': 3,
    };

    $(document).ready(function() {

        // highlight main menu
        var path = window.location.pathname;
        if (path != '{{ BASE_PATH }}/')
            $('#mainnav li:nth-child(' + menuidx[path] + ')')
            .addClass('active');

    });

})(jQuery);
