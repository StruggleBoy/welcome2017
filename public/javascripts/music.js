$(function() {
    //点击播放和暂停
    var aud = document.querySelector('.aud');
    var f = null;
    var top = 0;
    $('.play').click(function() {
        aud.play();
        $('.play').hide();
        $('.pause').show();
        f = setInterval(move, 1000);
        clickMove();
        t = setInterval(function(){
            top += -1
            $('pre').css("top",top + "px"); 
        },200)
    });

    $('.pause').click(function() {
        aud.pause();
        $('.play').show();
        $('.pause').hide();
        clearInterval(f);
        clearInterval(t);
    });

    //总时间
    var allTime = aud.duration;
    //每一秒进度条移动距离
    var start = 0;
    var per = 100 / 113;
    //进度条
    function move() {
        $('.bar-line').css("width", start + "%");
        start += per;
        console.log(parseInt($('.bar-line').css("width")));
        if (parseInt($('.bar-line').css("width")) > 534) {
            clearInterval(f);
        }
    }

    //拖动进度条和音量
    //鼠标点击状态

    function clickMove() {
        var statu = false;
        var left = 0;
        $('.handle').mousedown(function(e) {
            lx = $('.handle').offset().left;
            ox = e.pageX - left;
            statu = true;
            console.log(lx);
            console.log(ox);
        });
        $('.handle').mouseup(function(e) {
            statu = false;
        })
        $('.song-rate').mousemove(function(e) {
            if (statu) {
                left = e.pageX - ox;
                if (left < 0) {
                    left = 0;
                }
                if (left > 533) {
                    left = 533;
                }
                $('.bar-line').width(left);
                console.log(left);
            }
        })

        var percent = 533 / allTime;
        var currentTime = left / percent;
        
    }



    //音量调节
    $('.vol').click(function() {
        $('.vol-bar').show();
    });
})