$(document).ready(function(){
    /* Local Storage */
    $(document).ready(function(){
        if (localStorage.getItem("dark_theme") === "1") {
            $(":root").addClass("dark_mode");
        }
    });


    /* Loads common loader */

    $("header").load("/back_end/commons.html #common_header");


    /* Toggling */
    
    $(".topic_title").on("click", function(){
        $(this).toggleClass("expanded")
        $(this).nextUntil(":not(.topic_text)", ".topic_text").slideToggle(200);
    });

    $(document).on("click", "#nav_toggle", function() {
        $("nav").toggleClass("nav_open");
    });

    
    /* Hard skills */
    
    $(".parent_tag").on("click", function() {
        if ($(this).hasClass("pinned")){
            $(this).removeClass("pinned");
            $(this).removeClass("expanded");
            $(this).nextUntil(":not(.child_tag)", ".child_tag")
                .stop(true, true)
                .fadeOut("fast");
        } else {
            $(this).addClass("pinned");
        }
    });

    $(".parent_tag").on("mouseenter", function() {
        if (!$(this).hasClass("pinned")) {
            $(this).addClass("expanded");
            $(this).nextUntil(":not(.child_tag)", ".child_tag")
                .stop(true, true)
                .fadeIn("fast");
        }
    }).on("mouseleave", function() {
        if (!$(this).hasClass("pinned")) {
            $(this).removeClass("expanded");
            $(this).nextUntil(":not(.child_tag)", ".child_tag")
                .stop(true, true)
                .fadeOut("fast");
        }
    });


    /* Dark mode */
    
    $(document).on("click", "#darklight_toggle", function() {
        $(":root").toggleClass("dark_mode");

        if ($(":root").hasClass("dark_mode")) {
            localStorage.setItem("dark_theme", "1");
        } else {
            localStorage.setItem("dark_theme", "0");
        }
    });
    
});