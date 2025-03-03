
document.getElementById("index").addEventListener("click", function(){
    window.location.href="index.html"
})
let dtime = new Date().toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
})

let totalTaskNumber = document.getElementById("task").innerText;
let total = document.getElementById("totalComplete").innerText;

let totalTask = 6;
let totalCompletedTask = 23;

let totalNumber = parseFloat(total)
let TaskNumber = parseFloat(totalTaskNumber)
document.getElementById("task-btn-1").addEventListener("click", function commonClick() {
    totalTask--
    let t = totalTask = totalTaskNumber - 1
    let taskCompleted = document.getElementById("task").innerText;
    taskCompleted.appendChild(t)
    console.log(totalTask)

    alert("You have completed task")
    document.getElementById("task-btn-1").style.background = "gray"
    document.getElementById("task-btn-1").style.cursor = "default"
    document.getElementById("task-btn-1").setAttribute("disabled", true)
    let titleName = document.getElementById("title-1").innerText;
    let h = document.getElementById("history");
    let paragraph = document.createElement("p");
    paragraph.innerText = `${titleName} at ${dtime}`;
    h.appendChild(paragraph)
    paragraph.classList.add("pstyle")

})
document.getElementById("task-btn-2").addEventListener("click", function commonClick() {
    alert("You have completed task")
    document.getElementById("task-btn-2").style.background = "gray"
    document.getElementById("task-btn-2").style.cursor = "default"
    document.getElementById("task-btn-2").setAttribute("disabled", true)
    let titleName = document.getElementById("title-2").innerText;
    let h = document.getElementById("history");
    let paragraph = document.createElement("p");
    paragraph.innerText = `${titleName} at ${dtime}`;
    h.appendChild(paragraph)
    paragraph.classList.add("pstyle")
})
document.getElementById("task-btn-3").addEventListener("click", function commonClick() {
    alert("You have completed task")
    document.getElementById("task-btn-3").style.background = "gray"
    document.getElementById("task-btn-3").style.cursor = "default"
    document.getElementById("task-btn-3").setAttribute("disabled", true)
    let titleName = document.getElementById("title-3").innerText;
    let h = document.getElementById("history");
    let paragraph = document.createElement("p");
    paragraph.innerText = `${titleName} at ${dtime}`;
    h.appendChild(paragraph)
    paragraph.classList.add("pstyle")
})
document.getElementById("task-btn-4").addEventListener("click", function commonClick() {
    alert("You have completed task")
    document.getElementById("task-btn-4").style.background = "gray"
    document.getElementById("task-btn-4").style.cursor = "default"
    document.getElementById("task-btn-4").setAttribute("disabled", true)
    let titleName = document.getElementById("title-4").innerText;
    let h = document.getElementById("history");
    let paragraph = document.createElement("p");
    paragraph.innerText = `${titleName} at ${dtime}`;
    h.appendChild(paragraph)
    paragraph.classList.add("pstyle")
})
document.getElementById("task-btn-5").addEventListener("click", function commonClick() {
    alert("You have completed task")
    document.getElementById("task-btn-5").style.background = "gray"
    document.getElementById("task-btn-5").style.cursor = "default"
    document.getElementById("task-btn-5").setAttribute("disabled", true)
    let titleName = document.getElementById("title-5").innerText;
    let h = document.getElementById("history");
    let paragraph = document.createElement("p");
    paragraph.innerText = `${titleName} at ${dtime}`;
    h.appendChild(paragraph)
    paragraph.classList.add("pstyle")
})
document.getElementById("task-btn-6").addEventListener("click", function commonClick() {
    alert("You have completed task")
    document.getElementById("task-btn-6").style.background = "gray"
    document.getElementById("task-btn-6").style.cursor = "default"
    document.getElementById("task-btn-6").setAttribute("disabled", true)
    let titleName = document.getElementById("title-6").innerText;
    let h = document.getElementById("history");
    let paragraph = document.createElement("p");
    paragraph.innerText = `${titleName} at ${dtime}`;
    h.appendChild(paragraph)
    paragraph.classList.add("pstyle")
})
