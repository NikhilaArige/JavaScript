const addTask = document.getElementById('add-task');
const taskContainer = document.createElement('div'); // Create task container dynamically
taskContainer.id = 'task-container';
document.querySelector('.content-container').appendChild(taskContainer);

const inputTask = document.getElementById('input-task');

// Event Listener for Add Button
addTask.addEventListener('click', function () {
    if (inputTask.value === "") {
        alert("Please enter a drama");
        return;
    }

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`; // Corrected string template
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    taskContainer.appendChild(task); // Append only if input is not empty
    inputTask.value = ""; // Clear input

    checkButton.addEventListener('click', function () {
        li.style.textDecoration = "line-through"; // Strike through text
    });

    deleteButton.addEventListener('click', function () {
        task.remove(); // Corrected deletion
    });
});