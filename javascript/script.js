//Declaración de variables y constantes
let pedido;

//Función para realizar seguimiento de pedido
function seguirPedido(pedido) {
    let tablaPed=[];
    if(pedido>=1 && pedido<=5){
    tablaPed = pedidos.filter(item => item.idped == pedido);
    return tablaPed;
    } else {
        return 'Pedido no existe.';
    }
}

function sumarMontos(nombre){
    const nombreBuscado = nombre.toLowerCase();
    let totalMonto = 0;
    pedidos.forEach(pedido => {
        if (pedido.contacto.toLowerCase() === nombreBuscado){
            totalMonto += pedido.monto;
        }
    });
    return totalMonto;
}

let nameLastname = (prompt('Favor, ingresar tu Nombre y Apellido'));

let option = parseInt(prompt("¡Hola, " + nameLastname + '! \n ¿En qué podemos ayudarte? Elige una opción:\n 1- Seguimiento de pedido\n2- Cambio de Nombre\n 3- Total Monto en Pedidos\n0-SALIR'));

    while (option != 0) {
        switch (option) {
            case 1:
                const pregunta = parseInt(prompt('Cuéntame '+nameLastname+' tienes el número de pedido?\n 1 - Sí \n 2 - No'));
                if(pregunta == 1){
                pedido = parseInt(prompt('Favor, ingresa tu número de pedido\n (Números del 1 al 5)'));
                const mensaje = seguirPedido(pedido);
                if (Array.isArray(mensaje)) {
                    console.table(mensaje);
                    alert('Se muestra pedido por consola');
                } else {
                    alert(mensaje);
                }
            } else{
                let pedidoSinNro = pedidos.find(ped => ped.contacto.toLowerCase() === nameLastname.toLowerCase());
                if (pedidoSinNro === undefined){
                alert('Lo siento, '+nameLastname+' no tienes pedidos con nosotros');
            }else{
                alert('Se muestra pedido por consola');
                console.log(pedidoSinNro);
            }
            }
                break;
            case 2:
                nameLastname = (prompt('Favor, ingresar tu Nombre y Apellido'));
                break;
            case 3:
                const total = sumarMontos(nameLastname);
                alert(`El total monto para ${nameLastname} es: ${total}`);
                break;
        } option = parseInt(prompt("¡Hola, " + nameLastname + '! \n ¿En qué podemos ayudarte? Elige una opción:\n 1- Seguimiento de pedido\n 2-Cambio de Nombre\n 3- Total Monto en Pedidos\n0-SALIR'));
    }