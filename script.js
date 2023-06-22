var toggled = false;
var toggler = $('.slider');

$('.toggleBtn').click(function(){
    $('body').toggleClass('dark');

    if(!toggled){
        toggler.css('margin-left', "92px");
        toggled = true;
    }
    else{
        toggler.css('margin-left',"1px");
        toggled = false;
    }
});