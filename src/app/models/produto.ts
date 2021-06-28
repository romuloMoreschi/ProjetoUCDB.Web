export class Produto{

    public id:number
    public nome_produto:string
    public valor:number
    public desconto:number
    public situacao:string
    public data_vencimento:string    
    public dateModel:Date
    public update:string    

    constructor()
    {
        this.id = 0;
        this.nome_produto = '';
        this.valor = 0;
        this.desconto = 0;
        this.data_vencimento = '';
        this.dateModel = new Date;
        this.situacao = '';
        this.update = '';
    }
};