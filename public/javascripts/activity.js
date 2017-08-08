$(function() {
    var content = $('.content-help'),
        contLen = parseFloat($('.help-center').css('width')),
        underline = $('.help-underline');
    $('.help-nav .all').on('click',function() {
        var that = $(this);
        content.css('left',0);
        console.log(that.position().left );
        underline.css('left',that.position().left + 'px');
    })
    $('.help-nav .study').on('click',function() {
        var that = $(this);
        console.log(that.offset().left);
        content.css('left',-contLen + 'px');   
        underline.css('left',that.position().left + 'px');
    })
    $('.help-nav .life').on('click',function() {
        var that = $(this);
        underline.css('left',that.position().left + 'px');
        content.css('left',-contLen * 2 + 'px');        
    }) 
    $('.help-nav .act').on('click',function() {
        var that = $(this);        
        underline.css('left',that.position().left + 'px');
        content.css('left',-contLen * 3+ 'px');        
    }) 
    $('.help-nav .org').on('click',function() {
        var that = $(this);        
        underline.css('left',that.position().left + 'px');
        content.css('left',-contLen * 4+ 'px');        
    }) 
    $('.help-nav .other').on('click',function() {
        var that = $(this);        
        content.css('left',-contLen * 5+ 'px');   
        underline.css('left',that.position().left + 'px');
    }) 

    var btn1 = $('.activity-nav .btn1'),
        btn2 = $('.activity-nav .btn2'),
        acMain = $('.activity-main'),
        welcome = $('.welcome');

        btn1.on('click',function() {
            welcome.css('display','block');
            acMain.css('display','none');
            $(this).css('background-color','#ff9c74');
            $(this).css('color','#ffffff');
            $(this).css('box-shadow','3px -3px 1px #fd692b')
            btn2.css('background-color','#effee3');
            btn2.css('color','#ff962a');
            btn2.css('box-shadow','-5px 5px 2px #f4f1ce,5px 2px 2px #f4f1ce,-9px 9px 3px #ffb606')
        })
        btn2.on('click',function() {
            welcome.css('display','none');
            acMain.css('display','block');
            $(this).css('box-shadow','3px -3px 1px #fd692b')
            $(this).css('background-color','#ff9c74');
            $(this).css('color','#ffffff');
            btn1.css('background-color','#effee3');
            btn1.css('color','#ff962a');
            btn1.css('box-shadow','-5px 5px 2px #f4f1ce,5px 2px 2px #f4f1ce,-9px 9px 3px #ffb606')
        })

})