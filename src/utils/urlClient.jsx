/* const API = process.env.REACT_APP_API; //url del API
const API_TOKEN = process.env.REACT_APP_TOKEN; //token de la api */
const API = "https://api.themoviedb.org/3"; //url del API
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs"; //token de la api
export function get(path) {
  //por el path viene el identificador d la foto
  return fetch(API + path, {
    //capturar la pelicula q esta en esa direccion
    headers: {
      //estructura q establece la API
      Authorization: "Bearer " + API_TOKEN,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
