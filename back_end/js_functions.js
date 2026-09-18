$(document).ready(function(){
    /*Loads common loader*/
    $("header").load("/back_end/commons.html #common_header");

    /*Toggles header*/
    $("#experience button").on("click", function(){
        $("#experience_text").slideToggle(200);
        $(this).toggleClass("open")
    });

    $("#education button").on("click", function(){
        $("#education_text").slideToggle(200);
        $(this).toggleClass("open")
    });

    $("#academic button").on("click", function(){
        $("#academic_text").slideToggle(200);
        $(this).toggleClass("open")
    });

    $("#skills button").on("click", function(){
        $("#skills_text").slideToggle(200);
        $(this).toggleClass("open")
    });

    $('.parent_tag').on('click', function() {
        $(this).nextUntil(':not(.child_tag)', '.child_tag').toggleClass('hidden');
    });



});