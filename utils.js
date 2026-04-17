function recuperarNumero(texto){
    numero=document.getElementById(texto)
    return parseFloat(numero.value)
}
function mostrarTexto(texto,mensaje){
    let mostrar=document.getElementById(texto)
    mostrar.innerHTML=mensaje
}
function mostrarRedondeado(texto,numero){
    let mostrar=document.getElementById(texto)
    numeroRedondeado=numero.toFixed(2)
    mostrar.innerHTML=numeroRedondeado
}