const cantidad = document.querySelector("#Cantidad-input");
const form = document.querySelector("#totalizador-form");
const precio = document.querySelector("#Precio-input");
const estado = document.querySelector("#estado-input");


form.addEventListener("submit", (event) => {
    
    

    alert("La cantidad indicada: " + cantidad.value);
    alert("El precio indicado: " + precio.value);
    alert("El total es: " + (cantidad.value * precio.value));
    alert("El estado indicado: " + estado.value);
   
});
