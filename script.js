const obtenerValorInput = () => {
  let inputTexto = document.getElementById('input_pokemon');
  let valor = inputTexto.value.trim().toLowerCase();
  peticionApi(valor)
}
const peticionApi = (pokemon) => {
  const baseUrl = 'https://pokeapi.co/api/v2/';
  const endpoint = `pokemon/${pokemon}`;     
  const url = `${baseUrl}${endpoint}`;

  axios
  .get(url)
  .then((res)=> printData(res.data))
  .catch((err)=> console.log(err));

}
const printData = (data) => {
  let respuesta = document.getElementById('show-info');
  respuesta.innerHTML = `
    <span><img src="${data.sprites.front_default}" alt="${data.name}"></span>
    <label>Nombre: <h3>${data.name.toUpperCase()}</h3></label>
    <label>Peso: <h3>${data.weight}</h3></label>
    <label>Altura: <h3>${data.height}</h3></label>
  `;
}
