$(document).ready(function(){
    $('.dropdown').click(function(){
        $(this).siblings('.sub-dropdown').slideToggle("5000");

        $(this).parent("li").siblings("li").children(".sub-dropdown").slideUp("fast")
    })
})