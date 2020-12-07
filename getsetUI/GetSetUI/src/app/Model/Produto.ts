import { Categoria} from './Categoria'

export class Produto {
    public id: number;
    public nome: string;
    public tecnologia: string;
    public preco: number;
    public cor: string;
    public estoque: number;
    public categoria: Categoria;
}