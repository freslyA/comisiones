const VENTAS_BASE = 5

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0
    if (numeroVentas > VENTAS_BASE) {
        ventasExtras = numeroVentas - VENTAS_BASE
        comision = ventasExtras * (precioProducto * 0.10)
        comisionRedondeado = parseFloat(comision)
    }
    return comisionRedondeado
}

function calcular() {
    sueldo = recuperarNumero("txtSueldoBase")
    ventas = recuperarNumero("txtVentas")
    precio = recuperarNumero("txtPrecio")
    comision = calcularComision(ventas, precio)
    total = sueldo + comision
    mostrarRedondeado("spComision", comision)
    mostrarRedondeado("spSueldoBase", sueldo)
    mostrarRedondeado("spTotal", total)

}
function validarInput(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    const valor = input.value.trim();

    if (valor === "") {
        error.textContent = "No puede estar vacío";
        input.style.border = "1px solid red";
        return false;
    }

    if (valor.length > 5) {
        error.textContent = "Máximo 5 caracteres";
        input.style.border = "1px solid red";
        return false;
    }

    if (/[a-zA-Z]/.test(valor)) {
        error.textContent = "No se permiten letras";
        input.style.border = "1px solid red";
        return false;
    }

    // ✅ si todo está bien
    error.textContent = "";
    input.style.border = "1px solid green";
    return true;
}