const inputText = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");

function addNewTask(){
    if(inputText.value === ''){
        alert("Type New To do List!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        list-container.(li);
    }

}