var task = document.querySelector("#add");
var submitButton = document.querySelector("#button");
console.log(task);
console.log(submitButton);
submitButton.addEventListener("click", function() {
    console.log('you pressed a button!');
    console.log(task.value);

    localStorage.todos = task.value;

    document.querySelector("#todos").innerHTML =localStorage.todos;
});

