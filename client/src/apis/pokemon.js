import axios from 'axios';
import { BASE_POKEMON_API_URL } from '../constants/pokemonApiConstants';

export default axios.create({
  baseURL: BASE_POKEMON_API_URL,
});
