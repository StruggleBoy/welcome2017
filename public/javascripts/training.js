$(function(){
    $('.train-content').click(function(){
        $('.underline').animate({left: "21.5%"}, 500);
    });
    $('.train-know').click(function(){
        $('.underline').animate({left: "46.5%"}, 500);
    });
    $('.train-song').click(function(){
        $('.underline').animate({left: "71.5%"}, 500);
    });
    $('.training-tip-nav').find("span").click(function() {
        var num = $(this).parent().index();
        var _marginLeft = num * (-100);
        $('.content-wrapper').animate({marginLeft: _marginLeft + "%"}, 500)
    });
    // 点击TAB
    $('.forward').click(function(){
        // console.log();
        $('.training-cont').hide();
        $('.' + $(this).attr('ref')).fadeIn('500');
    })
})

 