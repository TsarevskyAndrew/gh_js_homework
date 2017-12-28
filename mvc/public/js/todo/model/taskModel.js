function TaskModel(tasks) {
    let allTasks = JSON.parse(localStorage.getItem('allTasks'));

    this.listeners = [];

    tasks = allTasks || tasks;

    tasks.forEach(task => {
        this.push(task);
});
}


const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

function addToLocalStorage(tasks) {
    let res = [];
    for (let i = 0; i < tasks.length; i++) {
        res.push(tasks[i]);
    }
    localStorage.setItem('allTasks', JSON.stringify(res));
}

TaskModel.prototype = Object.create(Array.prototype);

TaskModel.prototype.done = function (task, status) {
    task.done = status;
    addToLocalStorage(tasks);
    this.trigger('done', [task]);
};

TaskModel.prototype.add = function (text) {
    let task = {
        text,
        done: false,
        date: new Date().toLocaleString('ru', options)
    };

    this.push(task);
    addToLocalStorage(tasks);
    this.trigger('add', [task]);
    console.log(tasks);

};

TaskModel.prototype.delete = function (task) {
    let index = this.indexOf(task);
    if (index >= 0) {
        this.splice(index, 1);
    }

    localStorage.setItem('allTasks', JSON.stringify(tasks));
    addToLocalStorage(tasks);
    this.trigger('delete', [task]);
};

TaskModel.prototype.move = function (task) {
    let index = tasks.indexOf(task);
    if (event.target.innerText === 'Up') {
        if (index !== 0) {
            let tmp = tasks[index - 1];
            tasks[index - 1] = task;
            tasks[index] = tmp;
        }
    } else {
        if (index !== tasks.length - 1) {
            let tmp = tasks[index + 1];
            tasks[index + 1] = task;
            tasks[index] = tmp;
        }
    }
    addToLocalStorage(tasks);
    this.trigger('move', [task]);
};

TaskModel.prototype.on = function (event, callback) {
    this.listeners.push({
        event,
        callback
    });
};

TaskModel.prototype.trigger = function (event, args) {
    let tasks = this;

    this.listeners.forEach(listener => {
        if (listener.event === event) {
        listener.callback.apply(tasks, args);
    }
});
};


