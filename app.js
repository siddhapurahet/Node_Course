// function print(name){
//     console.log("Hello" + name);
// }

// print("Het");

/*----------------------------------------
const logger = require("./logger");
                                        //About exports function from logger file.
logger("message printed");
----------------------------------------*/


/*----------------------------------------
const event = require("events");
const newEvent = new event();

newEvent.addListener("msg", function(arg){      //for Raising event 
    console.log("Message called", arg);
})

newEvent.emit("msg", {id:1, name: "Het"});
-------------------------------------------*/


const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Hello");
        res.end();
    }
    if(req.url === "/jsoninfo"){
        res.write(JSON.stringify([1, "Het", "ABC"]));
        res.end();
    }
    else{
        res.write("Bad Request");
        res.end();
    }
})

server.listen(3000);
console.log("3000 is Listening");