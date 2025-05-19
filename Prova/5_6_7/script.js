document.addEventListener('DOMContentLoaded', () => {

const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularBtn = document.getElementById('calcular-btn');
const resultadoDiv = document.getElementById('resultado');
const erroMessagemDiv = document.getElementById('erro-messagem');
const yourName = document.getElementById('your-name');

function addYourName(){
        yourName.textContent ='Camilly'
}
addYourName();

function removeClassResultadoDiv(){
    const cls = ["resultado-baixo", "resultado-normal","resultado-sobre","resultado-obesidade"];
    resultadoDiv.classList.remove(...cls);
}

calcularBtn.addEventListener('click', () => {
    removeClassResultadoDiv();
    erroMessagemDiv.textContent = ''
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
        erroMessagemDiv.textContent = 'Por favor, insira valores válidos e positivos para peso e altura.';        
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = '';
    let classeCSS = ''; 

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        classeCSS = 'resultado-baixo';
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso normal';
        classeCSS = 'resultado-normal';
    } else if (imc >= 25 && imc < 30) {
        classificacao = 'Sobrepeso';
        classeCSS = 'resultado-sobre';
    } else if (imc >= 30 && imc < 35) {
        classificacao = 'Obesidade Grau I';
        classeCSS = 'resultado-obesidade';
    } else if (imc >= 35 && imc < 40) {
        classificacao = 'Obesidade Grau II';
        classeCSS = 'resultado-obesidade';
    } else { 
        classificacao = 'Obesidade Grau III (Mórbida)';
        classeCSS = 'resultado-obesidade';
    }

    resultadoDiv.classList.add(classeCSS);
    resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
});
});