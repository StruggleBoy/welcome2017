$(function() {
    var xingye = $('.xingye'),
        zhixing = $('.zhixing'),
        mingli = $('.mingli'),
        ningjing = $('.ningjing'),
        bar = $('.process-bar'),
        mess = $('changeMess'),
        btns = $('.bedroom-nav button');
    var changeMess = $('.changeMess');
    var changeBedroom = $('.changeBedroom');
    var BedW = $('.xingye-bedroom-bottom');

        function show(b,dom,dom1,dom2,distance) {
            dom.on('click',function() {
                b.css('color','#50b102');
                $(this).css('color','#ff962a');
                var L = dom.position().left - distance;
                var w = dom2.innerWidth();
                bar.css('left',L + 'px');
                var index = dom.attr('index');
                dom1.css('left', -index * w + 'px');
            })
        }


        var messBtn = $('.mess-nav button')
        var xing = $('.xing');
        var qianxi = $('.qianxi');
        var daxibei = $('.daxibei');
        var honggaoliang = $('.honggaoliang');
        var zhongxin = $('.zhongxin');
        var yansheng = $('.yansheng');
        var messW = $('.xingye-mess-bottom');


        show(btns,zhixing,changeMess,BedW,45);
        show(btns,mingli,changeMess,BedW,45);        
        show(btns,ningjing,changeMess,BedW,45);
        show(btns,xingye,changeMess,BedW,45); 

        show(messBtn,xing,changeBedroom,messW,79);
        show(messBtn,qianxi,changeBedroom,messW,79);
        show(messBtn,daxibei,changeBedroom,messW,79);
        show(messBtn,zhongxin,changeBedroom,messW,79);
        show(messBtn,yansheng,changeBedroom,messW,79);
        show(messBtn,honggaoliang,changeBedroom,messW,79);

        var carou1 = document.querySelectorAll('.carousel-1');
        var carou2 = document.querySelectorAll('.carousel-2');
        var carou3 = document.querySelectorAll('.carousel-3');
        var right = document.querySelectorAll('.right');
        var left = document.querySelectorAll('.left');
        var carouselContainer = document.querySelectorAll('.carousel-container');

        for(let i = 0 ;i < left.length ; i++) {
            carousel(carou1[i],carou2[i],carou3[i],right[i],left[i],carouselContainer[i]);
        }


        

})













//轮播
function carousel(carou1,carou2,carou3,right,left,ct) {
    var disabled = true;    
    right.addEventListener('click',function() {
        if(disabled){
            if(carou2.className === 'carousel-2 carou-center'){
                carou2.className = null;
                carou2.className = 'carousel-2 carou-right'; 
                carou3.className = null;
                carou3.className = 'carousel-3 carou-left';
                carou1.className = null;
                carou1.className = 'carousel-1 carou-center'; 
            }else if(carou2.className === 'carousel-2 carou-right'){
                carou2.className = null;
                carou2.className = 'carousel-2 carou-left'; 
                carou3.className = null;
                carou3.className = 'carousel-3 carou-center';
                carou1.className = null;
                carou1.className = 'carousel-1 carou-right'; 
            }else if(carou2.className === 'carousel-2 carou-left'){
                carou2.className = null;
                carou2.className = 'carousel-2 carou-center'; 
                carou3.className = null;
                carou3.className = 'carousel-3 carou-right';
                carou1.className = null;
                carou1.className = 'carousel-1 carou-left'; 
            }
            disabled = false;
        }
    })

    left.addEventListener('click',function() {
        if(disabled) {
            if(carou2.className === 'carousel-2 carou-center' || carou2.className === 'carousel-2 carou-center zIndex-1'){
                console.log(123);
                carou2.className = null;
                carou2.className = 'carousel-2 carou-left'; 
                carou3.className = null;
                carou3.className = 'carousel-3 carou-center';
                carou1.className = null;
                carou1.className = 'carousel-1 carou-right zIndex-1'; 
            }else if(carou2.className === 'carousel-2 carou-right' || carou2.className === 'carousel-2 carou-right zIndex-1'){
                carou2.className = null;
                carou2.className = 'carousel-2 carou-center'; 
                carou3.className = null;
                carou3.className = 'carousel-3 carou-right zIndex-1';
                carou1.className = null;
                carou1.className = 'carousel-1 carou-left zIndex-2'; 
            }else if(carou2.className === 'carousel-2 carou-left'|| carou2.className === 'carousel-2 carou-left zIndex-1'){
                carou2.className = null;
                carou2.className = 'carousel-2 carou-right zIndex-1'; 
                carou3.className = null;
                carou3.className = 'carousel-3 carou-left';
                carou1.className = null;
                carou1.className = 'carousel-1 carou-center'; 
            }
            disabled = false;
        }
    })

    carou1.addEventListener('transitionend',function() {
        disabled = true;
    })
    
    var timer = setInterval(function() {
        if(disabled){
            if(carou2.className === 'carousel-2 carou-center'){
                carou2.className = null;
                carou2.className = 'carousel-2 carou-right'; 
                carou3.className = null;
                carou3.className = 'carousel-3 carou-left';
                carou1.className = null;
                carou1.className = 'carousel-1 carou-center'; 
            }else if(carou2.className === 'carousel-2 carou-right'){
                carou2.className = null;
                carou2.className = 'carousel-2 carou-left'; 
                carou3.className = null;
                carou3.className = 'carousel-3 carou-center';
                carou1.className = null;
                carou1.className = 'carousel-1 carou-right'; 
            }else if(carou2.className === 'carousel-2 carou-left'){
                carou2.className = null;
                carou2.className = 'carousel-2 carou-center'; 
                carou3.className = null;
                carou3.className = 'carousel-3 carou-right';
                carou1.className = null;
                carou1.className = 'carousel-1 carou-left'; 
            }
            disabled = false;
        }
    },4000);

    ct.addEventListener('mouseover',function() {
        disabled = false;
    })
    ct.addEventListener('mouseout',function() {
        disabled = true;
    })
}

