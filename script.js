window.onload = iniciar;

let productos = [];

function iniciar () {
    let btnGuardar = document.getElementById("btnGuardar");
    btnGuardar.addEventListener("click", clickBtnGuardar);
}


function clickBtnGuardar(){
    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    let anio = document.getElementById("anio").value;

    let carrito = {
        "producto": producto,
        "precio" : precio,
        "anio": anio
    }
    
    productos.push(carrito);
    alert("Producto Agregado Correctamente");
    mostrarProductos();
    
}

function mostrarProductos (){
    let listado = document.getElementById("listado");
    let html = "";
    let div = "";
        
        for(let carrito of productos){
            html += carrito.producto + ' ' + carrito.precio + ' ' + carrito.anio + ' ';
        }

    listado.innerHTML = html + "<br>";
}