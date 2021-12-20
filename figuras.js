// Código del cuadrado
console.group('Cuadrados');
const ladoCuadrado = 5;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;

console.log(`El perímetro del cuadrado es de: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`El área del cuadrado es: ${areaCuadrado} cm2`);
console.groupEnd();

// Código del cuadrado
console.group('Triángulos');
const lado1Triángulo = 6;
const lado2Triángulo = 6;
const baseTriángulo = 4;
const alturaTriángulo = 5.5;

console.log(`Los lados del triángulo son: ${lado1Triángulo} cm, ${lado2Triángulo} cm, ${baseTriángulo} cm y su altura es de: ${alturaTriángulo} cm`);

const perimetrotriangulo = lado1Triángulo + lado2Triángulo + baseTriángulo;

console.log(`El perímetro del triángulo es de: ${perimetrotriangulo} cm`);

const areaTriangulo = (baseTriángulo * alturaTriángulo) / 2;

console.log(`El área del triángulo es: ${areaTriangulo} cm2`);
console.groupEnd();
