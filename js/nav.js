$(document).ready(function ($) {
    $(".navigation-menu-").hide()
    $(".my-dropdown-item").hide()
    $(".nav-item-3-sm").click(function () {
        $(".menu-3-sm").slideToggle(200);
        $(".menu-1-sm").slideUp(200);
        $(".menu-2-sm").slideUp(200);
        $(".menu-4-sm").slideUp(200);
    })

    $(".menu-icon").click(function () {
        $(this).toggleClass("active");
        $(".navigation-menu").toggleClass("active");
        $(".menu-icon i").toggleClass("fa-times");
        $(".menu-2-sm").hide(200);
        $(".menu-1-sm").hide(200);
        $(".menu-3-sm").hide(200);
        $(".navigation-menu-").toggle(300)
    });
});
jQuery(window).on("load", function () {
        jQuery(".loader").fadeOut(500);
    });