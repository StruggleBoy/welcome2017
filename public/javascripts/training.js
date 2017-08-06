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
        if($('.mein').css('display') === 'block') {
            showScroll();
        }
    })
})

 

function showScroll() {
    var box = document.querySelector(".training-mien"); 
    var content = document.querySelector(".mien-image");
    var bar = document.querySelector(".bar");
    var smallBox = document.querySelector('.mien-right');

    console.log(box.offsetHeight);
    console.log(smallBox.offsetHeight);
    console.log(content.scrollHeight);
    var propH = box.offsetHeight / content.scrollHeight * smallBox.offsetHeight;
    if (content.scrollHeight > box.offsetHeight) {
        bar.style.height = propH + "px";
    } else {
        bar.style.height = 0;
    }
    var index = 1;
    var k = (box.offsetHeight - bar.offsetHeight) / (content.scrollHeight - box.offsetHeight);
    box.addEventListener('mousewheel',function(e) {
        // console.log(123);
        e.preventDefault(); 
        if(content.offsetTop <= 0 && content.offsetTop >= -(content.offsetHeight - box.offsetHeight)){
            if(e.wheelDelta < 0) {
                index += index;
                bar.style.top = index * k + 'px';
                content.style.top = -(index + content.offsetTop) + 'px';
            }else{
                index = index - 10;
                bar.style.top = index * k + bar.offsetTop + 'px';
                content.style.top = -(index + content.offsetTop) + 'px';                 
            }
        }       
        if(content.offsetTop > 0) {
            content.style.top = 0;
        }
        if(content.offsetTop < -(content.offsetHeight - box.offsetHeight)) {
            content.style.top = -(content.offsetHeight - box.offsetHeight) + 'px';
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






//

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


