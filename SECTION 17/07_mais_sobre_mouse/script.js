
let btn1 = document.querySelector('#bt1');
let btn2 = document.querySelector('#bt2');


btn1.addEventListener("mousedown",function(){
    console.log("apertou o botão");
});

btn1.addEventListener("mouseup",function(){
    console.log("soltou o botão");
});

btn2.addEventListener("dblclick",function(){
    console.log("clique duplo")
})

btn2.addEventListener('contextmenu',function(e){
    e.preventDefault();
    console.log("botão direito")
})