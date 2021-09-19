function scr(element){
    el = document.getElementById(element)
    pos = el.offsetTop
    pos -= 200
    window.scrollTo({top: pos, behavior: 'smooth'});
    el.classList.add('animation1');
    setTimeout(function(){
        el.classList.remove('animation1');
        el.classList.add('animation2');
    },1000)
    setTimeout(function(){
        el.classList.remove('animation2');
    },2000)
}