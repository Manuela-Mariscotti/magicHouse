import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumenGastosComponent } from './pages/resumen-gastos/resumen-gastos.component';

const routes: Routes = [
  {path: "resumen-gastos", component: ResumenGastosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
