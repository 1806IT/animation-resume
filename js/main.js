var result=`
/*    面试官你好，我是朱智聪
    我将以动画的形式来介绍自己

    只是用文字介绍自己显得太单调了
    我就用代码来介绍吧

    首先准备一些样式*/

    html{
        background:grey;
        font-size:16px;
    }
`
console.log('2')
$('#btn').on('click',function(){
    console.log('开始了')
    var n=0;
    var id=setInterval(()=>{
        n++;
        $('#test').html(result.substring(0,n))
        $('#styleTag').html(result.substring(0,n))
        if(n==result.length){
            clearInterval(id)
        }
    },100)
})


