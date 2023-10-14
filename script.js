const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask() {
    let task = document.createElement('li');
    task.textContent = inputBox.value;
    task.onclick = function () {
        checked(task);
    }
    task.oncontextmenu = function () {
        deletetask(task);
    }
    console.log(task);
    listContainer.appendChild(task);
    inputBox.value = '';
}


function checked(task) {
    if (task.classList.contains('checked')) {
        task.classList.remove('checked')
    } else {
        task.classList.add('checked');
    }
}


function deletetask(task) {
    task.parentNode.removeChild(task);
}

