function recuperarNumero(texto){
    numero=document.getElementById(texto)
    return parseFloat(numero.value)
}
function mostrarTexto(texto,mensaje){
    let mostrar=document.getElementById(texto)
    mostrar.innerHTML=mensaje
}