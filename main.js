/**
 * Created by Administrator on 2018/12/13.
 */
var allButtons =$('#buttons>ul>li');
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click',function(e){
        var index=$(e.currentTarget).index();
        var n= -920*index;
        $('#images').css({
            transform: 'translateX('+ n +'px)'
        });
        n=index;
        allButtons.eq(n)
        .addClass('red').siblings('.red').removeClass('red')

    })
}

var a=0;
allButtons.eq(a%allButtons.length).trigger('click')
    .addClass('red').siblings('.red').removeClass('red');
var clockId=setInterval(function(){
    a=a+1;
    allButtons.eq(a%allButtons.length).trigger('click')
    .addClass('red').siblings('.red').removeClass('red');
},1000);

$('.wrapper').on('mouseenter',function(){
    window.clearInterval(clockId)
});
$('.wrapper').on('mouseleave',function(){
    clockId=setInterval(function(){
        a=a+1;
        allButtons.eq(a%allButtons.length).trigger('click')
            .addClass('red').siblings('.red').removeClass('red');
    },1000);
});