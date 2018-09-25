$(document).ready(function(){

    // Show & hide business card
    $(window).scroll(function() {
        if ($(this).scrollTop() + $(window).height() > $('#skills').offset().top) {
            $('#card .business-card').css({
                'visibility':'visible'
            });
        } else {
            $('#card .business-card').css({
                'visibility':'hidden'
            });
        }
    });

    // Prevent from orphaned & widowed paraghraph
    $('h3').each(function(){
        var string = $(this).html();
        string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
        $(this).html(string);
    });

});