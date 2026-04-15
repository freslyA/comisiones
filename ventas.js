const VENTAS_BASE = 5

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0
    if (numeroVentas > VENTAS_BASE) {
        ventasExtras = numeroVentas - VENTAS_BASE
        comision = ventasExtras * (precioProducto * 0.10)
        comisionRedondeado=parseFloat(comision)
    }
    return comisionRedondeado
}

function calcular(){
    sueldo=recuperarNumero("txtSueldoBase")
    ventas=recuperarNumero("txtVentas")
    precio=recuperarNumero("txtPrecio")
    comision=calcularComision(ventas,precio)
    total=sueldo+comision
    mostrarTexto("spComision",comision)
    mostrarTexto("spSueldoBase",sueldo)
    mostrarTexto("spTotal",total)

}
