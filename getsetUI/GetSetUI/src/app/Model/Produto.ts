import { Categoria} from './Categoria'
//colocar data
export class Produto {
    public id: number;
    public nome: string;
    public tecnologia: string;
    public preco: number;
    public cor: string;
    public estoque: number;
    public categoria: Categoria;
}