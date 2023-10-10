document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementsByClassName("list-container")[0];
  
    function addTask() {
      if (inputBox.value.trim() === "") {
        alert("You must enter your task");
      } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      }
      inputBox.value = "";
      saveData()
    }
  
    listContainer.addEventListener("click", function(e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
      }
    }, false);

    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML)

    }
    function ShowList(){
        listContainer.innerHTML=localStorage.getItem("data")
    }
  ShowList()
    const addButton = document.getElementById("add-button");
    addButton.onclick = addTask;
  });