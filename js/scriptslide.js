$(function(){
    const slideLists=$('.slideList li')
    const prevbtn=$('.btnSlidePrev')
    const nextbtn=$('.btnSlideNext')
    const btnSlidepp=$('.btnSlidepp')
    let current=0;
    let setIntervalId=undefined;
    let ppbtn=true;
    
    
    timer();
    function timer(){
        setIntervalId=setInterval(function(){
            let prev=slideLists.eq(current);
            move(prev, 0, '-610px');
            current++;
            if(current==8){current=0}
            let next=slideLists.eq(current);
            move(next, '610px', 0)
        },3000);
    }
    function move(tg,start,end){
        tg.css('left', start).stop().animate({left:end});
    }
    $('.slideList li, .btnSlidePrev, .btnSlideNext').hover(function(){
        clearInterval(setIntervalId)
    },function(){
        timer();
    });
    nextbtn.click(function(){
        let prve=slideLists.eq(current);
        move(prve, 0,'-610px');
        current++;
        if(current==8){current=0}
        let next=slideLists.eq(current);
        move(next,'610px', 0)
    });

    prevbtn.click(function(){
        let prve=slideLists.eq(current);
        move(prve, 0,'-610px');
        current--;
        if(current==8){current=0}
        let next=slideLists.eq(current);
        move(next,'610px', 0)
    });

    btnSlidepp.click(function(){
       if(ppbtn==true){
        $(this).addClass('add');
        clearInterval(setIntervalId)
        ppbtn=true;
        }
        
        else{
        $(this).removeClass('add');
        timer();
        ppbtn=false;   
        }
    })
})