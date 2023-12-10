const inputBox = document.getElementById("typetask");
const task = document.getElementById("addTask") ;
function addTask(){
    if(inputBox.value ===''){
        alert(" You  need to atleast on Task in your List");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        task.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7 ';
        li.appendChild(span);
    }
    inputBox.value = " ";
    saveData();
}
task.addEventListener( "click", function(e) {
  if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    else{
        alert("Add a Task to DELETE it");
        saveData();
    }
} ,false);
function saveData(){
    localStorage.setItem("data" ,task.innerHTML);
}
function showData(){
    task.innerHTML = localStorage.getItem("data");

}
showData();
