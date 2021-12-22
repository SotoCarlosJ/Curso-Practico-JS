// Código del Cuadrado
// console.group('Cuadrados');
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log(`El perímetro del cuadrado es de: ${perimetroCuadrado} cm`);
perimetroDelCuadrado = lados => lados * 4; 

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`);
areaDelCuadrado = lados => lados * lados;
// console.groupEnd();

// Código del Rectángulo
perimetroDelRectangulo = (a, b) => (a * 2) + (b * 2);

// Código del Triángulo
console.group('Triángulos');
const lado1Triángulo = 6;
const lado2Triángulo = 6;
const baseTriángulo = 4;
const alturaTriángulo = 5.5;
console.log(`Los lados del triángulo son: ${lado1Triángulo} cm, ${lado2Triángulo} cm, ${baseTriángulo} cm y su altura es de: ${alturaTriángulo} cm`);

const perimetrotriangulo = lado1Triángulo + lado2Triángulo + baseTriángulo;
console.log(`El perímetro del triángulo es de: ${perimetrotriangulo} cm`);

const areaTriangulo = (baseTriángulo * alturaTriángulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo} cm^2`);
console.groupEnd();

// Código del Circulo
console.group('Círculos');
const radioCirculo = 4;
console.log(`El radio del círculo es de: ${radioCirculo} cm`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es de: ${diametroCirculo} cm`);

const PI = Math.PI;
console.log(`El valor de PI es: ${PI} no qu`);

const perimetroCirculo = diametroCirculo * PI;
console.log(`El perímetro del círculo es de: ${perimetroCirculo} cm`);

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El área del círculo es: ${areaCirculo} cm^2`);
console.groupEnd();

// Cálculos para el Cuadrado
function calcularPerimetroCuadrado() {
    const value = document.getElementById("sides").value;
    const perimetroCuadrado = perimetroDelCuadrado(value);
    alert(`El perímetro del cuadrado es de: ${perimetroCuadrado} cm`);
}

function calcularAreaCuadrado() {
    const value = document.getElementById("sides").value;
    const areaCuadrado = areaDelCuadrado(value);
    alert(`El área del cuadrado es: ${areaCuadrado} cm^2`);
}

// Cálculos para el Rectángulo
function calcularPerimetroRectangulo() {
    const sideA = document.getElementById("sideA");
    const sideB = document.getElementById("sideB");
    const perimetroRectangulo = perimetroDelRectangulo(sideA, sideB);
    alert(`El perímetro del rectángulo es de: ${perimetroRectangulo} cm`);
}