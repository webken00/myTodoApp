const inputText = document.getElementById("inputText");
const add = document.getElementById("add");
const displaytodos = document.getElementById("displaytodos");

add.addEventListener('click', function(e){
    e.preventDefault()

    if(inputText.value.trim() === ''){
        alert("Type New To do List!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        displaytodos.append(li);
    }

})