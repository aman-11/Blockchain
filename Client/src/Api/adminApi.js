import axios from 'axios';

const ADMIN_API = axios.create({ baseURL: 'http://localhost:8080' })

export const fetchstory = () => ADMIN_API.get('/story')
