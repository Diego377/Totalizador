const cantidad = document.querySelector("#Cantidad-input");
const form = document.querySelector("#totalizador-form");
const precio = document.querySelector("#Precio-input");


form.addEventListener("submit", (event) => {

    alert("La cantidad indicada: " + cantidad.value);
    alert("El precio indicado: " + precio.value);
   
});
