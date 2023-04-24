import {Tema} from './Tema'
export interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: '',
    tema?: Tema | null;
}