import axios from 'axios';

// Aqui é um objeto para armazenar o endereço da API
export const api = axios.create({
    baseURL: 'https://blogpessoal-trqc.onrender.com/'
})

export const cadastroUsuario = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}

// tipagem headers é object
export const getAll = async(url: any, setDados: any, headers: Object) => {
    const resposta = await api.get(url, headers)
    setDados(resposta.data)
    //console.log(resposta)
    console.log(resposta.data)
}

export const post = async(url: any, dados: any, setDados: any, headers: any) => {
    const resposta = await api.post(url, dados, headers)
    setDados(resposta.data)
}

export const put = async(url: any, dados: any, setDados: any, headers: any) => {
    const resposta = await api.put(url, dados, headers)
    setDados(resposta.data)
}

export const getById = async(url: any, setDados: any, headers: Object) => {
    const resposta = await api.get(url, headers)
    setDados(resposta.data)
}

export const deleteById = async(url: any, headers: Object) => {
    await api.delete(url, headers)
}