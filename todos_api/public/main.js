$(document).ready(function(){
  $.getJSON("/api/todos")
  .then(addTodos);
  
  $('#todoInput').keypress(function(){
    if(event.which === 13){
      createTodo();
    }
  });
  
  $('.list').on('click', 'span', function(e){
    // stop evem from reaching parent
    e.stopPropagation();
    removeTodo($(this).parent());
  });
  
  $('.list').on('click', 'li', function(){
    updateTodo($(this));
  });
  
  
});

function updateTodo(todo){
  var isDone = !todo.data('completed')
  var updateData = {completed: isDone}
  $.ajax({
    method: 'PUT',
    url: 'api/todos/' + todo.data('id'),
    data: updateData
  })
  .then(function(updatedTodo){
    todo.toggleClass('done');
    todo.data('completed', isDone);
  });
}

function removeTodo(todo){
  
  $.ajax({
    method: 'DELETE',
    url: 'api/todos/' + todo.data('id')
  })
  .then(function(data){
    todo.remove();
    console.log('removed on client');
  })
  .catch(function(err){
    console.log(err);
  })
}

function addTodos(todos) {
  //add todos to list
  todos.forEach(function(todo){
    addTodo(todo);
  });
}

function addTodo (todo){
  var newTodo = $('<li class="task">'+todo.name+'<span>x</span></li>');
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);
  if(todo.completed){
    newTodo.addClass('done');
  }
  $('.list').append(newTodo);
}

function createTodo() {
  // send post request
  var userInput = $('#todoInput').val();
  $.post("/api/todos", {name: userInput})
  .then(function(newTodo){
    addTodo(newTodo);
    $('#todoInput').val('');
  })
  .catch(function(err){
    console.log(err);
  });
}
