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
        $('.content-wrapper').animate({marginLeft: _marginLeft + "%"}, 1000)
    });
    // 点击TAB
    $('.forward').click(function(){
        // console.log();
        $('.training-cont').hide();
        $('.' + $(this).attr('ref')).fadeIn('500');
        if($('.mein').css('display') === 'block') {
            showScroll(content,bar,smallBox,box)
        }
    })
})

 
var box = document.querySelector(".training-mien"); 
var content = document.querySelector(".mien-image");
var bar = document.querySelector(".bar");
var smallBox = document.querySelector('.mien-right');


function showScroll(content,bar,smallBox,box) {
    var propH = box.offsetHeight / content.scrollHeight * smallBox.offsetHeight;
    if (content.scrollHeight > box.offsetHeight) {
        bar.style.height = propH + "px";
    } else {
        bar.style.height = 0;
    }
    // var index = 1;
    var tmp = 10;
    var k = box.offsetHeight / content.offsetHeight;
    box.addEventListener('mousewheel',function(e) {
        e.preventDefault(); 
        if(e.wheelDelta < 0) {
            // index = index + 5;
            // bar.style.transition = 'top 0.05s';
            bar.style.top = -(-tmp + content.offsetTop) * k + 'px';
            content.style.top = (-tmp + content.offsetTop) + 'px';
        }else{
            // bar.style.transition = 'top 0.05s';
            // index = index - 5;
            bar.style.top = -(tmp + content.offsetTop) * k + 'px';
            content.style.top = (tmp + content.offsetTop) + 'px';                 
        }
        if(content.offsetTop > 0) {
            bar.style.top = 0;            
            content.style.top = 0;
        }
        if(content.offsetTop < -(content.offsetHeight - box.offsetHeight)) {
            content.style.top = -(content.offsetHeight - box.offsetHeight) + 'px';
            bar.style.top = k * (content.offsetHeight - box.offsetHeight) + 'px';
        }
    })


    bar.onmousedown = function (e) {
        var e = e || window.event;
        var  pagey = e.pageY + document.documentElement.scrollTop;
        var  ponity = pagey - box.offsetTop-bar.offsetTop;
        // console.log(pagey);
        document.onmousemove  = function (e) {
            event.preventDefault();
            var  e = e || window.event;
            var  pagey = e.pageY || e.clientY + document.documentElement.scrollTop;
            var  y = pagey - box.offsetTop -ponity;
            if (y<0) {
                y =0;
            }
            if (y > smallBox.offsetHeight-bar.offsetHeight) {
                y = smallBox.offsetHeight-bar.offsetHeight;
            }
            bar.style.top = y + "px";
            var  prop = content.scrollHeight / smallBox.offsetHeight;
            var  bigL = y * prop;
            content.style.top = -bigL + "px";
        }
    }
    document.onmouseup = function () {
        document.onmousemove = null;
    }
}




var lists = document.querySelectorAll('.mien-image ul li'),
    bigger = document.querySelector('.bigger'),
    train_images = document.querySelector('.bigger-contain-image'),
    maskApear = document.querySelector('.mask-appear');

    for(let i = 0 ;i < lists.length ; i++) {
        lists[i].addEventListener('click',function() {
            bigger.style.top = '372px';            
            // train_images.style.backgroundImage = lists[i].style.backgroundImage;  
            maskApear.style.display = 'block';
        })
    }

var close = document.querySelector('.bigger-close');
    close.addEventListener('click',function() {
        bigger.style.top = '-820px';       
        maskApear.style.display = 'none'; 
    }) 

