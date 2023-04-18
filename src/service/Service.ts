import axios from 'axios';

// Aqui é um objeto para armazenar o endereço da API
export const api = axios.create({
    baseURL: 'https://blogpessoal-trqc.onrender.com/'
})

export const cadastroUsuario = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
