import greet from "./src/js/greeter.js"
import css from './src/css/main1.css'
var a = new greet()
console.log(a)
var dom = document.createElement('img')
dom.src = require('assets/me.png')
console.log(dom.src)
document.body.appendChild(dom)
console.log(22)
