
// window.addEventListener("load",function(){alert("assine os termos de uso")})


window.addEventListener("beforeunload",function(){
    event.returnValue=null;
})