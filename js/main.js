
//把code写到#code和style标签里
function writeCode(prefix='',code,callback){
    let domCode=document.getElementById('code');
    domCode.innerHTML=prefix
    let n=0;
    // console.log('设置闹钟了')
    let id=setInterval(()=>{
        n+=1
        // console.log('开始写代码啦');
        /*        domCode.innerHTML=code.substring(0,n);*/
        domCode.innerHTML=Prism.highlight(prefix+code.substring(0,n), Prism.languages.css);
        styleTag.innerHTML=prefix+code.substring(0,n);
        //domCode.scrollTop=10000;//让生成的页面往下拉，因为设置值很高，所以会拉到最下
        domCode.scrollTop=domCode.scrollHeight//?拉不下去
        if(n>=code.length){
            window.clearInterval(id)
            callback&&callback()
        }
    },1)
}

function writeMarkdown(markdown,fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0;
    let id = setInterval(() => {
        n += 1;
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight//?拉不下去
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn&&fn()
        }
    }, 10)
}

function createPaper(fn){
    var paper=document.createElement('div');
    paper.id='paper';
    var content=document.createElement('pre')
    content.className='content';
    paper.appendChild(content);
    document.body.appendChild(paper);
    fn&&fn()
}


function convertMarkdownToHtml(fn){
    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.style = 'background-color:white'
    markdownContainer.replaceWith(div)
    fn && fn.call()
}
// 写成回调函数形式确保了程序会一步一步按同步方式接着进行，不会出现前一步未完成后一步就开始的情况，写成了回调地狱……
writeCode('',result,()=>{
    console.log('第一步打印第一部分，为异步函数');
    createPaper(()=>{
        console.log('第二步生成纸张，为同步函数');
        writeMarkdown(md,()=>{
            console.log('第三步在生成纸张中写markdom，为异步函数')
            writeCode(result,result2,()=>{
                console.log('第四步在写完markdom后写左边部分的第二段文字，为异步函数')
                convertMarkdownToHtml(()=>{
                    console.log('第五步写完后将markdom转换为markdown文本显示出来，同步函数')
                    writeCode(result+result2,result3,()=>{
                        console.log('第六步，异步函数，转换完成后，在左边写最后感谢语，总算大功告成')
                    })
                })
            })
        })
    })//同步也能加回调函数
})