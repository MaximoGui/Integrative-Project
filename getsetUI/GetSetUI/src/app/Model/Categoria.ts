import { Produto } from './Produto'

export class Categoria {
    public id: number;
    public nome: string;
    public disponivel: boolean;
    public freteGratis: boolean;
    public produto: Produto[];
}