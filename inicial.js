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