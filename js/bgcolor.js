let colors=[
    '#01DFA5',
    '#0B0B61',
    '#80FF00',
    '#01DFA5',
    '#5F04B4',
    '#FE2E2E',
]
let color = 2
const bgColor =document.getElementById("backgroundChang").addEventListener("click", function(){
color =(color +1)% colors.length;
document.body.style.backgroundColor= colors[color]
})

let dates = new Date().toLocaleDateString("en-us", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
})
document.getElementById("datess").innerText = dates