$(function () {

    
    var conterWidth = $('.conter').innerWidth(),
    conterHeight = $('.conter').innerHeight(),

    $Img = $('.Img'),
    $dragImg = $('.dragImg'),
    $big = $('.big'),
    $small = $('.small'),
    ImgWidth = $Img.innerWidth(),
    ImgHeight = $Img.innerHeight(),
    x = 2.0 * ImgWidth,
    y = ImgWidth;
// console.log($dragImg);
$('.map-container').on('mousedown',function(e) {
    event.preventDefault();        
    var startX = e.pageX,
    startY = e.pageY,
    startL = $('.dragImg').position().left,
    startT = $('.dragImg').position().top,
    X = ImgWidth - conterWidth,
    Y = ImgHeight - conterHeight,
    oL = $('.conter').offset().left,
    oT = $('.conter').offset().top;
    var L,T,onX,onY;
    console.log(startX);
    $(document).on('mousemove',function(e) {
        event.preventDefault();                       
        onX = e.pageX;
        onY = e.pageY;
        console.log(onX);
        L = onX - startX + startL;
        T = onY - startY + startT;
        
        $('.dragImg').css('top',T + 'px');
        $('.dragImg').css('left',L + 'px');
        if(L > 0) {
            $('.dragImg').css('left',0);
        }else if(L < -X) {
            $('.dragImg').css('left',-X + 'px');                    
        }
        if(T > 0) {
            $('.dragImg').css('top',0);              
        }else if(T < -Y) {
            $('.dragImg').css('top', -Y + 'px');                              
        }
        if((onX < (oL + 8)) || (onX > (oL + conterWidth - 15))) {
            $(this).unbind('mousemove');
        }
        if((onY < (oT + 10)) || (onY > (oT + conterHeight - 30))) {
            $(this).unbind('mousemove');                
        }
    })
    $(document).on('mouseup',function(e) {
        event.preventDefault();               
        $(this).unbind('mousemove');
        console.log(e.pageY);
    })
})

$big.click(function() {
    if(ImgWidth < x) {
        ImgWidth = 1.1 * ImgWidth;
        ImgHeight = 1.1 * ImgHeight;
        $Img.css('width',ImgWidth);
        $Img.css('height',ImgHeight);            
        $dragImg.css('width',ImgWidth);
        $dragImg.css('height',ImgHeight);
    }
})

$small.click(function() {
    if(ImgWidth > y){ 
        var IW = ImgWidth, IH = ImgHeight;
        ImgWidth =  ImgWidth / 1.1;
        ImgHeight = ImgHeight / 1.1;
        $Img.css('width',ImgWidth);
        $Img.css('height',ImgHeight);
        $dragImg.css('width',ImgWidth);
        $dragImg.css('height',ImgHeight);
        if($dragImg.position().left < 0){
            if($dragImg.position().left > (ImgWidth - IW)) {
                $dragImg.css('left',0);           
            }else{
                $dragImg.css('left',($dragImg.position().left + IW - ImgWidth) + 'px');
            }
        }
        if($dragImg.position().top < 0) {
            if($dragImg.position().top > (ImgHeight - IH)) {
                $dragImg.css('top',0);           
            }else{
                $dragImg.css('top',($dragImg.position().top + IH - ImgHeight) + 'px');
            }
        }

    }
})
})
