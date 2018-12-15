var result=`/*    
面试官你好，我是朱智聪
二月了，好多公司在招聘，
我也做了一份简历来应聘。
我将以动画的形式来介绍自己

只是用文字介绍自己显得太单调了
我就用代码来介绍吧

首先准备一些样式*/

html{
    background:#405262;
    font-size:16px;
    border-radius:2px;
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
    transform:rotateX(15deg) rotateY(15deg)
}
/*带颜色都快和背景色混成一体了，怎么行？换个颜色*/
#code{
    background:#f7f7f7;
    border:1px solid white;
}
/*不玩了，我来介绍下自己吧*/
/*我先需要一张白纸*/
#code{
    position:fixed;
    left:0;
    width:50%;
    height:90%;
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:90%;
    background-color:#ddd;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper .content{
     background :white;
     width:100%;
     height:100%;            
}
`
var result2=`
/*来，让纸张变得有点立体感*/
#paper{
    transform:rotateX(-20deg) rotateY(15deg);
}
/*
正式写简历
自我介绍
我叫朱智聪
1986年出生
湖南工程学院毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉java，jquery，css 
项目: 
1、jQuery模仿豆瓣app 
2、天气预报 
3、todo
4、给你画一个皮卡丘

/*
这就是我的会动的简历，期待您的消息
谢谢观看
*/
`
var md=`
# 自我介绍\n\n
我叫朱智聪\n\n
1986年出生\n\n
湖南工程学院毕业\n\n
自学前端半年\n\n
希望应聘前端开发岗位\n\n
# 技能介绍\n\n
熟悉java，jquery，css \n\n
# 项目: \n\n
1、jQuery模仿豆瓣app 
\n
2、天气预报 
\n
3、todo
\n
4、给你画一个皮卡丘
`


//把code写到#code和style标签里
function writeCode(prefix,code,callback){
    let domCode=document.getElementById('code');
    domCode.innerHTML=prefix||''
    let n=0;
    console.log('设置闹钟了')
    let id=setInterval(()=>{
        n+=1
        console.log('开始写代码啦');
        /*        domCode.innerHTML=code.substring(0,n);*/
        domCode.innerHTML=Prism.highlight(prefix+code.substring(0,n), Prism.languages.css);
        styleTag.innerHTML=prefix+code.substring(0,n);
        //domCode.scrollTop=10000;//让生成的页面往下拉，因为设置值很高，所以会拉到最下
        domCode.scrollTop=domCode.scrollHeight//?拉不下去
        if(n>=code.length){
            window.clearInterval(id)
            callback()
        }
    },1)
}



function createPaper(fn){
    var paper=document.createElement('div');
    paper.id='paper';
    var content=document.createElement('pre')
    content.className='content';
    paper.appendChild(content);
    document.body.appendChild(paper);
    fn()
}

function writeMarkdown(markdown){
    let domPaper=document.querySelector('#paper>.content')
    let n=0;
    let id=setInterval(()=>{
        n+=1;
        document.querySelector('.content').innerHTML=marked(markdown.substring(0,n))
        domPaper.scrollTop=domPaper.scrollHeight//?拉不下去
        if(n>=markdown.length){
            window.clearInterval(id)

        }
    },10)
}
/*function convertMarkdownToHtml(fn){
    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.style = 'background-color:white'
    markdownContainer.replaceWith(div)
    fn && fn.call()
}*/

writeCode('',result,()=>{
    console.log('异步结束，开始回调');
    console.log('生成纸张');
    createPaper(()=>{
        console.log('同步回调函数完成')
        writeCode(result,result2,()=>{
            writeMarkdown(md)
        })
    })//同步也能加回调函数

})