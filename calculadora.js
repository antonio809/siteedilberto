function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        document.getElementById('resultado').innerText = `Seu IMC é: ${imc.toFixed(2)}`;
        document.getElementById('resultado').style.background = "gray";
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
    }
}





