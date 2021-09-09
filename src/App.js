const form = document.querySelector("#todo-form");
const category = document.querySelector("#category-input");


form.addEventListener("submit", (event) => {
    
    alert("Tu pendiente fue añadido a la lista en la categoría " + category.value);

});
