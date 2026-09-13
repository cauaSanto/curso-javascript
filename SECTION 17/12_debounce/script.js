let tiomeout;

window.addEventListener("mousemove",function(e){
    this.clearTimeout(tiomeout);
    tiomeout=setTimeout(function(){
        console.log(e.x)
    },500);
});