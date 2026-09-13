
let btn1 = document.querySelector('#bt1');
let btn2 = document.querySelector('#bt2');
function msg(){
    console.log('a curiosidade matou o gato')
};
btn1.addEventListener('click',msg);

btn2.addEventListener('click',()=>{
    btn1.removeEventListener('click',msg);
});
