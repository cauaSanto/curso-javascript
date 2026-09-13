
let btn1 = document.querySelector('#bt1');
let btn2 = document.querySelector('#bt2');
let p = document.querySelector('p')
let a = document.querySelector('a')


function msg(e){
    console.log('clicou no botão')
    e.stopPropagation();
};
btn1.addEventListener('click',msg);

btn2.addEventListener('click',function(event){
   console.log(event);
});

p.addEventListener('click',()=>{
    console.log('clicou no paragrafo')
})

a.addEventListener("click",(e)=>{
e.preventDefault();
console.log('não vai mudar de link')
})