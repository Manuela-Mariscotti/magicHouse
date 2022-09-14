import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaCompraComponent } from './pages/lista-compra/lista-compra.component';
import { TareasComponent } from './pages/tareas/tareas.component';

const routes: Routes = [
  {path: "",component: HomeComponent},
  {path: "tareas", component: TareasComponent},
  {path: "gastos", component: GastosComponent},
  {path: "gastos", component: GastosComponent},
  {path: "lista-compra", component: ListaCompraComponent},
  {path: "calendario", component: CalendarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
