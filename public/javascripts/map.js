var conterWidth = $('.conter').innerWidth(),
    conterHeight = $('.conter').innerHeight();
    console.log(conterHeight);

$('.dragImg').on('mousedown',function(e) {
    event.preventDefault();
    var startX = e.pageX,
    startY = e.pageY,
    startL = $(this).position().left,
    startT = $(this).position().top,
    X = ImgWidth - conterWidth,
    Y = ImgHeight - conterHeight,
    oL = $('.conter').offset().left,
    oT = $('.conter').offset().top;
    var L,T,onX,onY;
    $(this).on('mousemove',function(e) {
        onX = e.pageX;
        onY = e.pageY;
        console.log(onX);
        L = onX - startX + startL;
        T = onY - startY + startT;
        console.log(L);
        $(this).css('top',T + 'px');
        $(this).css('left',L + 'px');
        if(L > 0) {
            $(this).css('left',0);
        }else if(L < -X) {
            $(this).css('left',-X + 'px');                    
        }
        if(T > 0) {
            $(this).css('top',0);              
        }else if(T < -Y) {
            $(this).css('top', -Y + 'px');                              
        }

        if((onX < (oL + 8)) || (onX > (oL + conterWidth - 15))) {
            $(this).unbind('mousemove');
        }
        if((onY < (oT + 10)) || (onY > (oT + conterHeight - 30))) {
            $(this).unbind('mousemove');                
        }
    })
    $(this).on('mouseup',function() {
        $(this).css('left',L + 'px');
        $(this).css('top',T + 'px');
        $(this).unbind('mousemove');
        if(L > 0) {
            $(this).css('left',0);    
        }else if(L < -X) {
            $(this).css('left',-X + 'px');                    
        }
        if(T > 0) {
            $(this).css('top',0);              
        }else if(T < -Y) {
            $(this).css('top', -Y + 'px');                              
        }
        console.log(213123123);
    })
})

var $Img = $('.Img'),
    $dragImg = $('.dragImg'),
    $big = $('.big'),
    $small = $('.small'),
    ImgWidth = $Img.innerWidth(),
    ImgHeight = $Img.innerHeight(),
    x = 1.6 * ImgWidth,
    y = ImgWidth;
    
$big.click(function() {
    if(ImgWidth < x) {
        ImgWidth = 1.2 * ImgWidth;
        ImgHeight = 1.2 * ImgHeight;
        $Img.css('width',ImgWidth);
        $Img.css('height',ImgHeight);            
        $dragImg.css('width',ImgWidth);
        $dragImg.css('height',ImgHeight);
    }
})

$small.click(function() {
    if(ImgWidth > y){ 
        var IW = ImgWidth, IH = ImgHeight;
        ImgWidth =  ImgWidth / 1.2;
        ImgHeight = ImgHeight / 1.2;
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
                $dragImg.css('top',0 + 'px');           
            }else{
                $dragImg.css('top',($dragImg.position().top + IH - ImgHeight) + 'px');
            }
        }
    }
})