var TaskInput = document.getElementById("textInput");
var addButton = document.getElementById("addButton");
var list = document.getElementById("myList");
var doneList = document.getElementById("doneList")
addButton.addEventListener("click", changeList);
function changeList(){
    var newItem = document.createElement("li");
    var task = upperCaseFirstLetter( TaskInput.value);
    if(task.trim()){
        var paragraph = document.getElementById("paragraph").innerHTML="";
        var taskText = document.createTextNode(task);
        var doneButton = document.createElement("BUTTON");
        doneButton.innerHTML="Done";
        doneButton.className="remove";
        newItem.appendChild(taskText);
        TaskInput.value="";
        list.appendChild(newItem);
        newItem.appendChild(doneButton);
        doneButton.addEventListener("click",removeTask);

    }
    else{
        var paragraph = document.getElementById("paragraph").innerHTML="task can not be empty!";
    }
}
var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click" , function(){
    list.innerHTML="";
});
function removeTask(e){
    var taskItem = e.target.parentElement;
    var task = taskItem.cloneNode(false);
    doneList.appendChild(task);
    list.removeChild(taskItem);
}
function upperCaseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
