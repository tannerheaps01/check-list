 var task = document.querySelector("#txt-task");
    var submitButton = document.querySelector("#btn-submit");

    submitButton.addEventListener("click", function() {
        if (localStorage.taskCount)
            localStorage.taskCount = Number(localStorage.taskCount) + 1;
        else localStorage.taskCount = "1";

        localStorage["task" + localStorage.taskCount] = task.value;

        dispalyTaskFromLocalStorage();
    });


    function dispalyTaskFromLocalStorage() {
        var tasksToDisplay = "";
        for (var i = 1; i <= localStorage.taskCount; i++) {
            if (localStorage["task" + i]) {
                tasksToDisplay = localStorage["task" + i] + "<i id='btn-delete' onclick='removeTaskFromLocalStorage(" + i + ")' class='fa fa-times-circle' aria-hidden='true'></i>" + "<br />" +
                    tasksToDisplay;
            }
        }

        document.querySelector("#todos").innerHTML = tasksToDisplay;
    }

    function removeTaskFromLocalStorage(taskNumber) {
        localStorage.removeItem("task" + taskNumber);
        dispalyTaskFromLocalStorage();

    }
    dispalyTaskFromLocalStorage();
