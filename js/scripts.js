function TodoList() {
  this.tasks = [];
  this.currentId = 0;
}

function Task(item, location) {
  this.item = item,
  this.location = location;
}

TodoList.prototype.addTask = function (task) {
  task.id = this.assignId();
  this.tasks.push(task);
};

TodoList.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

var todoListPersonal = new TodoList();

var task1 = new Task('walk the dog', 'home');

todoListPersonal.addTask(task1);

//frontend logic

$(document).ready(function () {
  $('#formOne').submit(function (event) {
    event.preventDefault();
    var input = $('.input').val();
    task = new Task(input, '');
  });
});
