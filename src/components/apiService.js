
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000' // Altere isso para a URL da sua API
});

export { api }; // Exporta a instância do Axios