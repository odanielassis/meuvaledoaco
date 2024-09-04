document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cidade = document.getElementById('cidade').value;
    const pais = document.getElementById('pais').value;

    // Usando LocalStorage para salvar os dados permanentemente
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);

    // Usando sessionStorage para armazenar dados temporariamente
    sessionStorage.setItem('userCidade', cidade);
    sessionStorage.setItem('userPais', pais);

    // Redirecionar para home após o cadastro
    window.location.href = 'home.html';
  });
});
