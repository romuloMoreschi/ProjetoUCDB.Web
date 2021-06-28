import { Produto } from '../models/produto';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../config/config.services';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {

  produto = new Produto();
  produtos = new Array<Produto>();

  constructor(private configService: ConfigService, private router: Router) {
  }
  ngOnInit(): void {
  }

  enviar(produto: Produto) {
    produto.data_vencimento = this.dataFormatada(produto.dateModel);
    this.configService.postProduto(produto).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
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
