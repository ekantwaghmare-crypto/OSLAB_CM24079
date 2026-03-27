function sjf(){

let bt = document.getElementById("bt").value.split(",").map(Number)

bt.sort((a,b)=>a-b)

let waiting = 0
let total = 0

for(let i=0;i<bt.length;i++){
total += waiting
waiting += bt[i]
}

document.getElementById("result").innerHTML =
"Average Waiting Time = " + (total/bt.length)

}

function lru(){

let pages = document.getElementById("pages").value.split(",").map(Number)

let frames = []
let faults = 0

for(let i=0;i<pages.length;i++){

if(!frames.includes(pages[i])){

if(frames.length < 3){
frames.push(pages[i])
}
else{
frames.shift()
frames.push(pages[i])
}

faults++
}

}

document.getElementById("result").innerHTML =
"Page Faults = " + faults

}

function sstf(){

let req = document.getElementById("disk").value.split(",").map(Number)

let head = 53
let movement = 0

while(req.length){

let dist = req.map(x=>Math.abs(x-head))
let min = Math.min(...dist)
let index = dist.indexOf(min)

movement += min
head = req[index]

req.splice(index,1)

}

document.getElementById("result").innerHTML =
"Total Head Movement = " + movement

}

function banker(){

let alloc = document.getElementById("alloc").value.split(" ").map(Number)
let max = document.getElementById("max").value.split(" ").map(Number)
let avail = document.getElementById("avail").value.split(" ").map(Number)

let safe = true

for(let i=0;i<alloc.length;i++){
if(max[i]-alloc[i] > avail[i]){
safe = false
}
}

if(safe)
document.getElementById("result").innerHTML = "System is SAFE"
else
document.getElementById("result").innerHTML = "System is NOT SAFE"

}