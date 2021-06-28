import { Produto } from '../models/produto';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../config/config.services';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {

  produto = new Produto();

  constructor(private configService: ConfigService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.produto.id = params['id'];
    });
    this.configService.getProduto(this.produto.id).subscribe((data) => {
      this.produto = data.data
    });
  }

  enviar(produto: Produto) {
    produto.data_vencimento = this.dataFormatada(produto.dateModel);
    this.configService.putProduto(produto).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
  }

  applDiscount(situacao: string) {
    if (situacao == 'Quase vencendo' || situacao == 'Valido') {
      return 'row'
    }
    return 'hidden'
  }

  voltar() {
    this.router.navigate([`${'listar'}`]);
  }

  dataFormatada(date: Date) {
    var data = new Date(date),
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'),
      ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
  }

}
