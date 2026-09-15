let {readFile,writeFile}= require('fs');
const { text } = require('stream/consumers');

readFile("arquivo.txt","utf8",(error, texto)=>{
if(error){
    throw error
}console.log(texto);
})

writeFile("arquivo.txt","texto por writeFile",(error)=>{
    if(error){
        throw error
    }else{
        console.log("escreveu com sucesso");
    }
})