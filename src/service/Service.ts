import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogpessoal-trqc.onrender.com/'
})

export const login = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
