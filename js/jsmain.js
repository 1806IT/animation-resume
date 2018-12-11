// The code snippet you want to highlight, as a string

var result=`/*    
面试官你好，我是朱智聪
二月了，好多公司在招聘，
我也做了一份简历来应聘。
我将以动画的形式来介绍自己

只是用文字介绍自己显得太单调了
我就用代码来介绍吧

首先准备一些样式*/

html{
    background:rgb(#222,222,222)
    font-size:16px;
}
/*
刚才好像变的太快了，那我就加个过渡效果吧！
*/
*{
    transition:all 1s;
}
#code{
    border:1px solid red;
    padding:16px;
}
/*我给关键字加个高亮*/
.token.property{
    color:#905;
}
.token.selector{
    color:#690;
}
.token.function{
    color:#dd4a68;
}
/*再来点3D效果吧*/
#code{
    transform: rotate( 360deg);
}
/*不玩了，我来介绍下自己吧*/
/*我先需要一张白纸*/
`
result2=`
    
`

$('#start').on('click',function(){
    console.log('开始了')
    var n=0;
    var id=setInterval(()=>{
        n++;
        code.innerHTML=result.substring(0,n);
        code.innerHTML=Prism.highlight(code.innerHTML, Prism.languages.css);
        styleTag.innerHTML=result.substring(0,n);
        if(n>=result.length){
            console.log('第一张完成了')
            clearInterval(id);
            fn2();
            fn3(result);
        }
    $("#stop").on('click',function(){
        clearInterval(id);

    })
    },50)
})
function fn2(){
    var paper=document.createElement('div');
    paper.id='paper';
    document.body.appendChild(paper);
}
function fn3(preResult){
    var result2=`
    #paper{
        width:100px;
        height:100px;
        background:pink;
        
    }
    `
    var n=0;
    var id2=setInterval(()=>{
        n++;
        code.innerHTML=preResult+result2.substring(0,n);
        code.innerHTML=Prism.highlight(code.innerHTML, Prism.languages.css);
        styleTag.innerHTML=preResult+result2.substring(0,n);
        if(n>=result2.length){
            clearInterval(id2);
            console.log('第二张完成了');
        }
    },50)
}


