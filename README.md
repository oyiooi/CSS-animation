# CSS animation 练习 & rem 自适应

## 块级元素垂直居中
   {
       width:Width;
       height:H;
       position:absolute;
       top:50%;
       left:50%;
       margin-left:-Width/2;
       margin-top:-H/w;/*transform:translate(-50%,-50%)*/
   }

## rem 自适应
    window.addEventListener('resize',function(){
        var html=document.documentElement;
        html.style.fontSize=window.innerWidth/10;
    },false)

## 渐变
   linear-gradient(angle,color stop1,color stop2,...)
   radial-gradient(center,shape,color stop,...)