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



// dark-mode.js

// Carrega a preferência do modo escuro ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "enabled") {
      document.body.classList.add("dark-mode");
    }
  });
  
  // Função para alternar o modo escuro e salvar a preferência
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const darkModeEnabled = document.body.classList.contains("dark-mode");
  
    // Salva a preferência do modo escuro no localStorage
    if (darkModeEnabled) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.setItem("dark-mode", "disabled");
    }
  }
  




