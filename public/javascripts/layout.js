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

<<<<<<< HEAD
=======
// function $$(a) {
//     return document.querySelector(a);
// }

// var day = $$('.day');
// var hour = $$('.hours');
// var min = $$('.min');
// var sec = $$('.sec');


// //计算剩余时间
// function leftTimer (year,mon,days,hours,minutes,seconds){
//     var leftTime = (new Date(year, mon - 1, days, hours, minutes, seconds)) - (new Date());
//     var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10),
//         hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10), 
//         minutes = parseInt(leftTime / 1000 / 60 % 60, 10),
//         seconds = parseInt(leftTime / 1000 % 60, 10);
//     showTime(days);
//     day.innerHTML = _f + _s;
//     showTime(hours);
//     hour.innerHTML = _f + _s;
//     showTime(minutes);
//     min.innerHTML = _f + _s;
//     showTime(seconds);
//     sec.innerHTML = _f + _s;
// }

// //用图标显示剩余时间
// function showTime(a){
//     Tens = parseInt(a / 10);
//     Single = a % 10;
//     _f = "<img src='./images/" + Tens + ".png'>";
//     _s = "<img src='./images/" + Single + ".png'>";
// }

// window.setInterval("leftTimer(2017,9,14,0,0,0)",1000);


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

//开场小人动画，加一个class，实际上是animation控制
function moveIn() {
    $('.cradle').addClass('moveIn')
}


$(function () {
    clickEvent()
    moveIn()
})
>>>>>>> d3e483e692f2b7a745fe606f6edf29f384dd2c39
