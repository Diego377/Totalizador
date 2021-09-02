const cantidad = document.querySelector("#Cantidad-input");
const form = document.querySelector("#totalizador-form");
const precio = document.querySelector("#Precio-input");
const estado = document.querySelector("#estado-input");


form.addEventListener("submit", (event) => {

    var total = cantidad.value*precio.value;
    
    alert("La cantidad indicada: " + cantidad.value);
    alert("El precio indicado: " + precio.value);
    alert("El total es: " + total);
    alert("El estado indicado: " + estado.value);
    

    var impuesto = 0;

    if(estado.value == "UT"){
        impuesto = 0.0665 * total;
    }else{
        if(estado.value == "NV"){
            impuesto = 0.08 * total;
        }else{
            if(estado.value == "TX"){
                impuesto = 0.0625 * total;
            }else{
                if(estado.value == "AL"){
                    impuesto = 0.04 * total;
                }else{
                    if(estado.value == "CA"){
                        impuesto = 0.0825 * total;
                    }else{
                        impuesto = 0;
                    }
                }
            }
        }
    }

    alert("El total mas el impuesto es: " + (total+impuesto));

});
