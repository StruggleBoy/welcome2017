function $(a) {
    return document.querySelector(a);
}

var day = $('.day');
var hour = $('.hours');
var min = $('.min');
var sec = $('.sec');


//计算剩余时间
function leftTimer (year,mon,days,hours,minutes,seconds){
    var leftTime = (new Date(year, mon - 1, days, hours, minutes, seconds)) - (new Date());
    var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10),
        hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10), 
        minutes = parseInt(leftTime / 1000 / 60 % 60, 10),
        seconds = parseInt(leftTime / 1000 % 60, 10);
    showTime(days);
    day.innerHTML = _f + _s;
    showTime(hours);
    hour.innerHTML = _f + _s;
    showTime(minutes);
    min.innerHTML = _f + _s;
    showTime(seconds);
    sec.innerHTML = _f + _s;
}

//用图标显示剩余时间
function showTime(a){
    Tens = parseInt(a / 10);
    Single = a % 10;
    _f = "<img src='./images/" + Tens + ".png'>";
    _s = "<img src='./images/" + Single + ".png'>";
}

window.setInterval("leftTimer(2017,9,14,0,0,0)",1000);
