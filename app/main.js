//var greet = require("./greeter")
import greet from "./greeter"
//import css from "./main.css"
require("./main.css")
//import {c} from "./33.js"
var c = require("./33.js") 
console.log(c)
//var a = require("./33.js")
//console.log(a,b)
//import test from "./test"
var test = require("./test")
document.body.appendChild(greet());

((ani) => {
	console.log(22)
})()
class p {}
console.log(test.select[0].question)
