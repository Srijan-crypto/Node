// console.log("Hello World");
// const a=20;
// console.log(a/4);

// const a = {
//     average: (a,b)=>{
//         console.log((a+b)/2);
//     },
//     percent: (a,b)=>{
//         console.log((a/b)*100);
//     },
// }

// module.exports = a;

// const fs = require("fs"); //File System
// fs.readFile("./sample.txt","utf-8",(err,data)=>{ //fs.readFile() is async function thus goes to microtask queue.
//     if(err) throw err; 
//     console.log(data);
// });
// console.log(10);

// const fs = require("fs");
// const text = fs.readFileSync("./sample.txt","utf-8"); //SYNC function thus only after its complete execution, the next line of code will be executed
// console.log(text);
// console.log(10);

// const fs = require("fs");
// const a = "Hello World";
// fs.writeFile("./sample1.txt",a,()=>{ //Creates a file sample1.txt and if already present then it gets replaced with the new one
//     console.log("Created");
// })
// console.log("Hey");

// const fs = require("fs");
// fs.writeFileSync("./sample.txt","Hey Girl"); //Does the above task but synchronously
// console.log(10);

// const path = require("path");
// console.log(path.extname("./index.js"));
// console.log(path.extname("./sample1.txt"));
// const x = path.basename("C:/Users/Srijan/Desktop/Node JS");
// console.log(x);
// const y = path.basename("C:/Users/Srijan/Desktop/Node JS/package.json");
// console.log(y);
// console.log(path.dirname("C:/Users/Srijan/Desktop/Node JS/index.js"));
// console.log(path.join("C:/Users/Srijan/Desktop/Node JS"+"/XYZ"));

// const os = require("os");
// console.log(os.freemem());
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.homedir());



                                            //How to create a server
const PORT = 2000;
const hostname = "localhost";
const http = require("http");
// http.createServer((request,response,next)=>{
//     console.log(request.url);  //gives the complete URl of the request from the server
// })

const fs = require("fs");
const home = fs.readFileSync("./index.html","utf-8");
const server = http.createServer((req,res)=>{ //req->request and res->response
    // console.log(req.url);
    // res.end("<h1>Hello World</h1>");
    if(req.url === "/") return res.end(home);
    else if(req.url === "/about") return res.end("<h1>About Page</h1>");
    else if(req.url === "/contact") return res.end("<h1>Contact Page</h1>");
    else return res.end("<h1>404 Page not found</h1>");
})
server.listen(PORT,hostname,()=>{
    console.log(`Server working on http://${hostname}:${PORT}`);
})
console.log(__filename);
console.log(__dirname);