let time = new Date();
let h = time.getHours();
let m  = time.getMinutes();
let s = time.getSeconds()
let color = ['blue','green','yellow','red']



console.log(h + " , " + m + " , " + s + " , " )
const hour =  document.querySelector('#hour')
const minute = document.querySelector('#minutes')
const sec =  document.querySelector('#seconds')

setInterval(()=>{
    let time = new Date();
let h = time.getHours();
let m  = time.getMinutes();
let s = time.getSeconds()
    hour.innerHTML = h
    minute.innerHTML = m
    sec.innerHTML = s
    hour.style.color = color[Math.floor(Math.random()*3+1)];
    minute.style.color = color[Math.floor(Math.random()*3+1)];
    sec.style.color = color[Math.floor(Math.random()*3+1)];
},1000) 
