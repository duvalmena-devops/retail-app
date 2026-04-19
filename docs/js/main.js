document.getElementById('btn-estado').addEventListener('click', () => {
    //alert('Sistemas operativos y estables.');
  
  function getURL(){
    alert("La API está en: " +window.ENV.API_URL);
  }
  getURL();
    const getRepos = async (username) => {
  const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': 'Bearer ' + window.ENV.API_TOKEN, // Descomenta si usas un token
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }

    const repos = await response.json();

    // Mapeamos los datos para mostrar solo lo importante
    repos.forEach(repo => {
      console.log(`🚀 ${repo.name} | ⭐ ${repo.stargazers_count} | 🔗 ${repo.html_url}`);
    });

  } catch (error) {
    console.error('Hubo un problema con la petición:', error);
  }
};

// Ejecución
getRepos('duvalmena-devops');
alert('Sistemas operativos y estables.');

});