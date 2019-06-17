function TodoList() {
  this.tasks = [];
}

function Task(item, location) {
  this.item = item,
  this.location = location;
}

TodoList.prototype.addTask = function (task) {
  this.tasks.push(task);
};

var todoListPersonal = new TodoList();

var task1 = new Task('walk the dog', 'home');

todoListPersonal.addTask(task1);
