
function leftTimer(year, mon, days, hours, minutes, seconds) {
    var leftTime = (new Date(year, mon - 1, days, hours, minutes, seconds)) - (new Date());
        days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);
        hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);
        minutes = parseInt(leftTime / 1000 / 60 % 60, 10);
        seconds = parseInt(leftTime / 1000 % 60, 10);
        showTime(days, 'day');
        showTime(hours,'hours');
        showTime(minutes,'min');
        showTime(seconds,'sec');
        setTimeout("leftTimer(2017,9,14,0,0,0)", 1000)
}

//用图标显示剩余时间
function showTime(a, div) {
    var list = [2.3, 11.7, 21.05, 30.4, 39.8, 49, 58.4, 67.6, 77, 86.4];
    Tens = parseInt(a / 10);
    Single = a % 10;
    yT = list[Tens];
    yS = list[Single];
    // console.log('yT is' + yT);
    // console.log("40%" + yT +"%")
    $( '.' + div + 'T').css('backgroundPosition', "40%" + yT +"%");
    $('.' + div + 'S').css('backgroundPosition', "40%" + yS +"%");
}

function timeGo() {
    //计算剩余时间

var days,
    hours,
    minutes,
    seconds;
    leftTimer(2017,9,14,0,0,0)

}


// 导航栏特效
function clickEvent() {
    let pathName = location.pathname
    let selector = `.banner-${pathName.slice(1)}`
    if (pathName === '/') {
        $('.banner-index').addClass('clicked')
    }
    else {
        $(selector).addClass('clicked')
    }
}

//开场小人动画 + 走到重邮去追梦，加一个class，实际上是animation控制
function moveIn() {
    $('.boy').animate({top: '140px'}, 1000 ).animate({top: '100'}, 1000)
}

function bird() {
    $('.bird').animate({left: '+=1000px', bottom: '+=240px'}, 2000)
}
function cquptMove() {
    $('.cqupt-dream').css('top','10px');
}
// 阴影
function shadow() {
    console.log($('.shadow').get(0))
    // $('.shadow').show(1500)
    $('.shadow').fadeTo(1500, 0.8)
}

$(function () {
    clickEvent()
    moveIn()
    bird()
    cquptMove();
    shadow()
    timeGo()
})

//返回顶部


$('.backTop').click(function() {
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:0},500);
})