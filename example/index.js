/*Copyright 2026 jcp2612-oficial


Licensed under the Apache License, Version 2.0 (the "License");

you may not use this file except in compliance with the License.

You may obtain a copy of the License at


http://www.apache.org/licenses/LICENSE-2.0


Unless required by applicable law or agreed to in writing, software

distributed under the License is distributed on an "AS IS" BASIS,

WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

See the License for the specific language governing permissions and

limitations under the License. 
*/



const fs = require("fs")
//Frame Animation Notation Basic Script

var x = fs.readFileSync("./example.fanbs","utf-8")
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
ejecutar();
