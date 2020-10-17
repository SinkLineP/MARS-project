window.onload = function slide(){
    setTimeout(() => {
        document.getElementById('animation1').classList.toggle("show1");
    }, 0);

    setTimeout(() => {
        document.getElementById('animation2').classList.toggle("show2");
    }, 500);

    setTimeout(() => {
        document.getElementById('animation3').classList.toggle("show1");
    }, 1000);
    
}