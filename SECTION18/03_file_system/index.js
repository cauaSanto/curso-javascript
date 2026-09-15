let {readFile}= require('fs');
const { text } = require('stream/consumers');

readFile("arquivo.txt","utf8",(error, texto)=>{
if(error){
    throw error
}console.log(texto);
})