import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponenteComponent } from './core/primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './core/segundo-componente/segundo-componente.component';

const routes: Routes = [
  {
    path: '',
    component: SegundoComponenteComponent
  },
  {
  path: 'alunos',
  component: PrimeiroComponenteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
