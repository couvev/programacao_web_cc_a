// Seleciona o botão
const button = document.querySelector("button");

// Seleciona o campo de email
const email = document.getElementById("email");

// Adiciona o evento de clique ao botão
button.addEventListener("click", () => {
  const emailValue = email.value;

  // Expressão regular para validar o email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Testa o valor do email com a regex
  if (emailRegex.test(emailValue)) {
    alert("Email válido!");
  } else {
    alert("Por favor, insira um email válido.");
  }
});

// Adiciona o evento de mouseover para quando o mouse passar por cima do botão
button.addEventListener("mouseover", () => {
  button.style.transform = "scale(5)"; // Aumenta o botão para 500% do tamanho original
  button.style.backgroundColor = "#28a745"; // Muda a cor do fundo para verde
  button.style.transition = "transform 0.3s ease, background-color 0.3s ease"; // Adiciona uma transição suave
});

// Adiciona o evento de mouseout para quando o mouse sair do botão
button.addEventListener("mouseout", () => {
  button.style.transform = "scale(1)"; // Volta o botão para o tamanho original
  button.style.backgroundColor = "#007BFF"; // Volta a cor original do botão
});
