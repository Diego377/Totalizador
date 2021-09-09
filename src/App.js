const form = document.querySelector("#todo-form");
const todo = document.querySelector("#todo-input");
const category = document.querySelector("#category-input");


form.addEventListener("submit", (event) => {
    
    var todoList = [];
    todoList.push(todo); 
    alert("Tu pendiente fue añadido a la lista en la categoría " + category.value);

    todoList.forEach(function(i){
        alert(i)
    });

});
