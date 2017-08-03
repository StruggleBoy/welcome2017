//计算剩余时间
var days,
    hours,
    minutes,
    seconds;

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
}

//用图标显示剩余时间
function showTime(a, div) {
    var list = [2.3, 11.7, 21.05, 30.4, 39.8, 49, 58.4, 67.6, 77, 86.4];
    Tens = parseInt(a / 10);
    Single = a % 10;
    yT = list[Tens];
    yS = list[Single];
    console.log(yT);
    $( '.' + div + 'T').css('backgroundPosition', "40%" + yT +"%");
    $('.' + div + 'S').css('backgroundPosition', "40%" + yS +"%");
}

window.setInterval("leftTimer(2017,9,14,0,0,0)", 1000);

