document.addEventListener('DOMContentLoaded', () => {
  // Recuperando os dados do LocalStorage
  const userName = localStorage.getItem('userName');
  const welcomeSection = document.getElementById('welcome-message');

  // Manipulação do DOM para exibir mensagem de boas-vindas
  if (userName) {
    welcomeSection.classList.add('welcome');
    welcomeSection.innerHTML = `<h2>Bem-vindo, ${userName}!</h2>`;
  } else {
    welcomeSection.innerHTML = `<h2>Bem-vindo ao Meu Vale do Aço!</h2>`;
  }

  // Adicionando um novo parágrafo usando appendChild
  const newPara = document.createElement('p');
  newPara.textContent = 'Aproveite para explorar o melhor do Vale do Aço!';
  welcomeSection.appendChild(newPara);

  // Usando destructuring para pegar valores de sessionStorage
  const { userCidade, userPais } = sessionStorage;

  // Verificando se há dados em sessionStorage
  if (userCidade && userPais) {
    const cityInfo = document.createElement('p');
    cityInfo.textContent = `Você se cadastrou como sendo de ${userCidade}, ${userPais}.`;
    welcomeSection.appendChild(cityInfo);
  }

  // Usando spread operator e map para manipular um array de restaurantes (exemplo adicional)
  const restaurants = [
    { name: 'Churrascaria do Zé', city: 'Timóteo' },
    { name: 'Pizzaria do João', city: 'Ipatinga' },
  ];

  const additionalRestaurants = [
    { name: 'Restaurante da Maria', city: 'Coronel Fabriciano' }
  ];

  const allRestaurants = [...restaurants, ...additionalRestaurants];

  const restaurantNames = allRestaurants.map(rest => rest.name);

  console.log('Restaurantes disponíveis:', restaurantNames);
});
