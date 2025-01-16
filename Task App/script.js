const inputBox = document.getElementById( "input" );
const listContainer = document.getElementById( "list-container" );

function addTask(){
    if(inputBox.value === ''){
        alert("YOU MUST WRITE SOMETHING!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBox.value = "";
    saveTasks();
}

listContainer.addEventListener ('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveTasks();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

function  saveTasks() {
    localStorage.setItem("task", listContainer.innerHTML);
}
function showTasks(){
    listContainer.innerHTML = localStorage.getItem ("task");
}
showTasks();