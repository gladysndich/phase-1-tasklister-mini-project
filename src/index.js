document.addEventListener("DOMContentLoaded", () => {
  let taskList = new taskList();
  let newTaskForm = document.getElementById("create-task-form");
  let newTaskDescription = document.getElementById("new-task-description");
  let taskUl = document.getElementById("tasks");
  let taskLister = () => (taskUl.innerHTML = taskList.listTasks());

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    e.target.reset();
    taskLister();
  });

  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON" ) {
      taskList.deleteTask(e.target.dataset.description);
      taskLister();
    }
  });
  });
