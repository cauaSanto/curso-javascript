
let input = document.querySelector("input");

input.addEventListener("focus",function(){
    console.log("entrou no input")
});

input.addEventListener("blur",function(){
    console.log("saiu no input")
});
