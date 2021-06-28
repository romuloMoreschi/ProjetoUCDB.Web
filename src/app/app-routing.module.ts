import { ListagemProdutoComponent } from './listagem-produto/listagem-produto.component';
import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'listar', component: ListagemProdutoComponent },
  { path: 'adicionar', component: AdicionarProdutoComponent },
  { path : 'atualizar/:id', component : AtualizarProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
