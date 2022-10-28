const sidebar = document.querySelector(".sidebar")
const vehicles = document.querySelector(".vehicles")
const tols = document.querySelector(".tols")

console.log("js");

function show(){
    sidebar.classList.toggle("sidebar_show")
}
function add(){
    vehicles.classList.toggle("vehicle_showHide")
}
function tools(){
    tols.classList.toggle("tols_show")
}