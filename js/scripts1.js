function TodoList() {
  this.tasks = [];
  this.currentId = 0;
}

function Task(item, location, important) {
  this.item = item,
  this.location = location;
  this.important = false;
}

TodoList.prototype.addTask = function (task) {
  task.id = this.assignId();
  this.tasks.push(task);
};

TodoList.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

TodoList.prototype.findTask = function (id) {
  for (var i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  };

  return false;
};

TodoList.prototype.deleteTask = function (id) {
  for (var i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        delete this.tasks[i];
        return true;
      }
    }
  };

  return false;
};

var todoListPersonal = new TodoList();

//frontend logic

$(document).ready(function () {
  $('#formOne').submit(function (event) {
    event.preventDefault();
    var input = $('.input').val();
    var task = new Task(input, '');
    todoListPersonal.addTask(task);
    if ('input:checkbox[name=important]:checked') {
      task.important = true;
    }

    if (task.important === true) {
      $('.output').prepend('<li data-id=' + task.id + '>' + input + '</li>');
    } else if (task.important === false) {
      $('.output').append('<li data-id=' + task.id + '>' + input + '</li>');
    }
  });

  $('ul').on('click', 'li', function () {
    $(this).toggleClass('crossOff');
  });

  $('ul').on('dblclick', 'li', function () {
    var id = this.dataset.id;
    todoListPersonal.deleteTask(id);
    $(this).remove('li');
  });
});
