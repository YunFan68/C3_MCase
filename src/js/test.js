var screenAnimateElements = {
    '.screen-1' : [
        '.screen-1__heading',
        '.screen-1__phone',
        '.screen-1__shadow'
    ],
    '.screen-2' : [
        '.screen-2__heading',
        '.screen-2__subheading',
        '.screen-2__phone',
        '.screen-2__point_i_1',
        '.screen-2__point_i_2',
        '.screen-2__point_i_3'
    ],
    '.screen-3' : [
        '.screen-3__heading',
        '.screen-3__subheading',
        '.screen-3__phone'
    ]
};

function setScreenAnimate(screenCls){
    var screen = document.querySelector(screenCls);
    var animateElements = screenAnimateElements[screenCls];
    var isSetAnimateClass = false; //是否有初始化子元素的样式
    var isAnimateDone = false;
    screen.onclick = function(){
        //初始化样式，增加inite A A_init
        if(isSetAnimateClass===false){
            for(var i=0;i<animateElements.length;i++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls+' '+animateElements[i].substr(1)+'_animate_init');
            }
            isSetAnimateClass = true;
            return ;
        }
        //切换所有animateElements 的 init -> done A A_done
        if(isAnimateDone === false){
            for(var i=0;i<animateElements.length;i++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
            }
            isAnimateDone = true;
            return ;
        }
        //切换所有animateElements 的 done->init A A_init
        if(isAnimateDone === true){
            for(var i=0;i<animateElements.length;i++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
            }
            isAnimateDone = false;
            return ;
        }
    }
}

for(var k in screenAnimateElements){
    //setScreenAnimate(k);
}

