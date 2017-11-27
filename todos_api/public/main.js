$(document).ready(function(){
  $.getJSON("/api/todos")
  .then(addTodos)
})

function addTodos(todos) {
  //add todos to list
  todos.forEach(function(todo){
    var newTodo = $('<li class="task">'+todo.name+'</li>');
    if(todo.completed){
      newTodo.addClass('done')
    }
    $('.list').append(newTodo)

  })
}

