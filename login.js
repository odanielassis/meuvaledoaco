document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Apenas para simular o login e redirecionar
      const email = document.getElementById('email').value;
      const savedEmail = localStorage.getItem('userEmail');
  
      if (email === savedEmail) {
        window.location.href = 'home.html';
      } else {
        alert('E-mail não encontrado. Por favor, cadastre-se primeiro.');
      }
    });
  });
  