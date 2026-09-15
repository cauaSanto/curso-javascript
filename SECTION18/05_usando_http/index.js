const {createServer, request}=require("http");

let server= createServer((request, response)=>{

response.writeHead(200,{"content-Type":"text/html"});
response.write(`
    <h1>hello world</h1>
    <p>primeira pagina com node.js</p>
    `);
    response.end();

})

server.listen(8000);

console.log("ouvindo a porta 8000");