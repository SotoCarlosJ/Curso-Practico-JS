calcularPrecioConDesceunto = (price, discount) => ( price * (100 - discount) ) / 100;

const cuponesDeDescuento = [
    {
        nombre: 'CUPON_VERDE',
        descuento: 15
    },
    {
        nombre: 'CUPON_AZUL',
        descuento: 20
    },
    {
        nombre: 'CUPON_NARANJA',
        descuento: 25
    }
]

function validarElCupon() {
    const cuponIngresado = document.getElementById('coupon').value;
    const cupon = cuponesDeDescuento.find(a => a.nombre === cuponIngresado);
    if(!cupon){
        const mensaje = document.getElementById('mensaje');
        mensaje.innerText = 'El cupon ingresado no es válido';
    } else {
        const mensaje = document.getElementById('mensaje');
        mensaje.innerText = 'El cupon ingresado es válido';
    }
}
function calcularPrecioFinal() {
    const precioIngresado = document.getElementById('price').value;
    const cuponIngresado = document.getElementById('coupon').value;
    const cupon = cuponesDeDescuento.find(a => a.nombre === cuponIngresado);
    if(!cupon){
        const mensaje = document.getElementById('mensaje');
        mensaje.innerText = 'El cupon ingresado no es válido';
        const totalAhorrado = document.getElementById('descuento');
        totalAhorrado.innerText = 0;
        const totalAPagar = document.getElementById('precioFinal');
        totalAPagar.innerText = precioIngresado;
    } else {
        const mensaje = document.getElementById('mensaje');
        mensaje.innerText = 'El cupon ingresado es válido';
        const totalAhorrado = document.getElementById('descuento');
        const elDescuento = precioIngresado * (cupon.descuento / 100);
        totalAhorrado.innerText = elDescuento;
        const totalAPagar = document.getElementById('precioFinal');
        totalAPagar.innerText = precioIngresado - elDescuento;
    }
}