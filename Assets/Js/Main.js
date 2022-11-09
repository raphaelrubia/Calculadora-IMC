const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const ValorIMC = (peso / (altura * altura)).toFixed(2);
        resultado.textContent = ValorIMC;

        let classificação = '';

        if (ValorIMC < 18.5) {
            classificação = 'abaixo do peso.';
        }else if (ValorIMC < 25) {
            classificação = 'com peso ideal. Parabéns!!';
        }else if (ValorIMC < 30) {
            classificação = 'levemente acima do peso.';
        }else if (ValorIMC < 35) {
            classificação = 'com obesidade grau I.';
        }else if (ValorIMC < 40) {
            classificação = 'com obesidade grau II.';
        }else {
            classificação = 'com obesidade grau III. Cuidado!';
        }       

            resultado.textContent = `${nome}, seu IMC é de ${ValorIMC}. Você está ${classificação}`

    } else {
        resultado.textContent = 'preencha todos os campos!';
    }



}

calcular.addEventListener('click', imc); 

