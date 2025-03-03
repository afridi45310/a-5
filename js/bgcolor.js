
let colors = [
    '#01DFA5',
    '#0B0B61',
    '#80FF00',
    '#01DFA5',
    '#5F04B4',
    '#FE2E2E',
]
let color = 2
const bgColor = document.getElementById("backgroundChang").addEventListener("click", function () {
    color = (color + 1) % colors.length;
    document.body.style.backgroundColor = colors[color]
})

let times = new Date().toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
})
let dates = new Date().toLocaleDateString("en-us", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
})
document.getElementById("datess").innerText = dates;

function taskCompletedFunction(button, titleText) {

    let GetTilte = document.getElementById(titleText).innerText
    let getBtn = document.getElementById(button);
    getBtn.setAttribute("disabled", true);
    getBtn.style.backgroundColor = "gray";
    getBtn.style.cursor = "default";

    let t = document.getElementById("task");
    let tToNum = parseInt(t.innerHTML);
    let give = document.getElementById("totalComplete");
    let giveToNum = parseInt(give.innerHTML);
    tToNum--;
    t.innerText = tToNum;
    giveToNum++;
    give.innerText = giveToNum;


    alert("Board update successfully")



    let historyDiv = document.getElementById("history");
    historyp = document.createElement("p");

    historyp.innerText = `You have Complete The Task ${GetTilte} at ${times}`;
    historyDiv.appendChild(historyp);
    historyp.classList.add("pstyle")

    totalClick++;
    if (totalClick === 6) {
        alert("Congretss!!! You have completed all the current task");
    }
}

let totalClick = 0
let totaltask = 6
let totalComplete = 25
for (let b = 1; b <= 6; b++) {
    document.getElementById(`task-btn-${b}`).addEventListener("click", function () {
        taskCompletedFunction(`task-btn-${b}`, `title-${b}`)
    })
}

document.getElementById("clearHistory").addEventListener("click",function(){
    let getP = document.getElementById("history");
    let pElements = getP.querySelectorAll("p");
    
    for (let i = 0; i < pElements.length; i++) {
      pElements[i].remove();
    }

})

