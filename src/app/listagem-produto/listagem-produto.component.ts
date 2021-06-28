import { ConfigService } from './../config/config.services';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent implements OnInit {

  produtos = new Array<Produto>();

  constructor(private configService: ConfigService, private router: Router, private route: ActivatedRoute) 
  {
  }

  ngOnInit(): void {
    this.configService.getProdutos().subscribe((data) => {
      this.produtos = data.data
    });
  }

  atualizar(produto: Produto) {
    this.router.navigate([`${'atualizar'}`, produto.id]);
  }

  getCircle(situacao: string) {
    if (situacao == 'Quase vencendo') {
      return 'circle-yellow'
    }
    if (situacao == 'Valido') {
      return 'circle-green'
    }
    return 'circle-red';
  }

  deletar(id: number) {
    this.configService.deleteProduto(id).subscribe(() => console.log());
    window.location.reload();
  }

  discount(produto: Produto) {
    if (produto.situacao == 'Quase vencendo' || produto.situacao == 'Valido') {
      this.atualizar(produto);
    }
  }
}
