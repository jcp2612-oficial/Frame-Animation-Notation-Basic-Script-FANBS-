/*
 * Copyright 2026 jcp2612
 * Licensed under the Apache License, Version 2.0...
 */
const fs = require("fs")

function fanbs(name) {
 var x = fs.readFileSync(`./${name}`,"utf-8")
async function procesar(f,t) {    
 return new Promise((e) => {   
setTimeout(() => {
console.clear();
console.log(f); 
e()
},t);
})
}
async function ejecutar() {
var s=0;
while (x.length > 0) {
x = x.trim()
if (x.startsWith("/")) {
x = x.slice(1).trim();
 s = Number(x.split("\n")[0].trim());
//console.log(s);
}else if(x.startsWith("[")){
x = x.slice(x.match(/\[([\w\s]*)\]/g)[0].length);

}else if (x.startsWith("{")) {
var frame = x.match(/\{([^}]*)\}/)?.[0]
frame = frame.slice(1,-1);
await procesar(frame,s);
x = x.slice(frame.length);
}
else{
x = x.slice(1);
}
}  
}
ejecutar()   
}

module.exports = fanbs;


//Frame Animation Notation Basic Script
