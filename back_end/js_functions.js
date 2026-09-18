$(document).ready(function(){
    /*Loads common loader*/
    $("header").load("/back_end/commons.html #common_header");

    /*Toggling*/
    
    $(".topic_title").on("click", function(){
        $(this).toggleClass("expanded")
        $(this).nextUntil(":not(.topic_text)", ".topic_text").slideToggle(200);
    });

    $(".parent_tag").on("click", function() {
        $(this).toggleClass("expanded")
        $(this).nextUntil(":not(.child_tag)", ".child_tag").toggleClass("hidden");
    });

});