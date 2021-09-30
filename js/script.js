$(document).ready(function() {
    $("#menu .burger").click(function() {

        $("#menu .burger").hide();
        $("#menu .close").show();
        $("header").toggleClass("toggle");

    });

    $("#menu .close").click(function() {

        $(this).hide();
        $("#menu .burger").show();
        $("header").toggleClass("toggle");

    });



    $(window).on('scroll load', function() {
        if ($(window).scrollTop() > 0) {
            $(".top").show();
        } else {
            $(".top").hide();
        }
    });

    $("a[href*='#']").on("click", function(e) {
        e.preventDefault();

        $("html, body").animate({
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear');
    });

});