// Código del Cuadrado
perimetroDelCuadrado = lados => lados * 4; 
areaDelCuadrado = lados => lados * lados;
function calcularPerimetroCuadrado() {
    const value = document.getElementById("sides").value;
    if(value <= 0) {
        alert('No ha ingresado un valor válido')
    } else{
        const perimetroCuadrado = perimetroDelCuadrado(value);
        alert(`El resultado es: ${perimetroCuadrado} cm`);
    }
}
function calcularAreaCuadrado() {
    const value = document.getElementById("sides").value;
    const areaCuadrado = areaDelCuadrado(value);
    alert(`El área del cuadrado es: ${areaCuadrado} cm^2`);
}

// Código del Rectángulo
perimetroDelRectangulo = (a, b) => (a * 2) + (b * 2);
areaDelRectangulo = (a, b) => a * b;
function calcularPerimetroRectangulo() {
    const sideA = document.getElementById("sideA").value;
    const sideB = document.getElementById("sideB").value;
    const perimetroRectangulo = perimetroDelRectangulo(sideA, sideB);
    alert(`El perímetro del rectángulo es de: ${perimetroRectangulo} cm`);
}
function calcularAreaRectangulo() {
    const sideA = document.getElementById("sideA").value;
    const sideB = document.getElementById("sideB").value;
    const areaRectangulo = areaDelRectangulo(sideA, sideB);
    alert(`El área del rectángulo es: ${areaRectangulo} cm^2`);
}

// Código del Circulo
diametroDelCirculo = r => r * 2;
perimetroDelCirculo = r => (r * 2) * Math.PI;
areaDelCirculo = r => r * r * Math.PI;
function calcularDiametroCirculo() {
    const r = document.getElementById("radius").value;
    const diametroCirculo = diametroDelCirculo(r);
    alert(`El diámetro del círculo es: ${diametroCirculo} cm`);
}
function calcularPerimetroCirculo() {
    const r = document.getElementById("radius").value;
    const perimetroCirculo = perimetroDelCirculo(r);
    alert(`El perímetro del círculo es: ${perimetroCirculo} cm`);
}
function calcularAreaCirculo() {
    const r = document.getElementById("radius").value;
    const areaCirculo = areaDelCirculo(r);
    alert(`El área del círculo es: ${areaCirculo} cm^2`);
}

// Código del Triángulo
alturaDelTrialgulo = (a, b) => Math.sqrt( Math.pow(a, 2) - ( Math.pow(b, 2) / 4) );
perimetroDelTriangulo = (a, b) => (parseInt(a) * 2) + parseInt(b);
areaDeltriangulo = (a, b) => ( (b * ( Math.sqrt( Math.pow(a, 2) - ( Math.pow(b, 2) / 4) ) )) / 2 );

function calcularAlturaTriangulo() {
    const a = document.getElementById("ladoA").value;
    const b = document.getElementById("ladoB").value;
    const c = document.getElementById("ladoC").value;
    if( (a === b) && (a !== c) && (b !== c)) {
        const h = alturaDelTrialgulo(a, c);
        alert(`La altura de tu triángulo es: ${h} cm`);
    } else {
        alert("No es un triangulo isósceles");
    }
}

function calcularPerimetroTriangulo() {
    const a = document.getElementById("ladoA").value;
    const b = document.getElementById("ladoB").value;
    const c = document.getElementById("ladoC").value;
    if( (a === b) && (a !== c) && (b !== c)) {
        const p = perimetroDelTriangulo(a, c);
        alert(`La altura de tu triángulo es: ${p} cm`);
    } else {
        alert("No es un triangulo isósceles");
    }
}

function calcularAreaTriangulo() {
    const a = document.getElementById("ladoA").value;
    const b = document.getElementById("ladoB").value;
    const c = document.getElementById("ladoC").value;
    if( (a === b) && (a !== c) && (b !== c)) {
        const area = areaDeltriangulo(a, c);
        alert(`El área de tu triángulo es: ${area} cm^2`);
    } else {
        alert("No es un triangulo isósceles");  
    }
}