var html=document.documentElement;

function resize() {
    var size=html.offsetWidth;

    html.style.fontSize=size/10+'px';
}

resize();

window.addEventListener('resize',resize,false);

