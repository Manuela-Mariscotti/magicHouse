import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaCompraComponent } from './pages/lista-compra/lista-compra.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { ResumenGastosComponent } from './pages/resumen-gastos/resumen-gastos.component';
import { NuevaTareaComponent } from './pages/nueva-tarea/nueva-tarea.component';
import { NuevoEventoComponent } from './pages/nuevo-evento/nuevo-evento.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { PresupuestoComponent } from './pages/presupuesto/presupuesto.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NuevoGastoComponent } from './pages/nuevo-gasto/nuevo-gasto.component';
import { CrearHogarComponent } from './pages/crear-hogar/crear-hogar.component';


const routes: Routes = [
  {path: "",component: HomeComponent},
  {path: "tareas", component: TareasComponent},
  {path: "gastos", component: GastosComponent},
  {path: "registro", component: RegistroComponent},
  {path: "lista-compra", component: ListaCompraComponent},
  {path: "calendario", component: CalendarioComponent},
  {path: "resumen-gastos", component: ResumenGastosComponent},
  {path: "nueva-tarea", component: NuevaTareaComponent},
  {path: "nuevo-evento", component: NuevoEventoComponent},
  {path: "login", component: LoginComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "ajustes", component: AjustesComponent},
  {path: "presupuesto", component: PresupuestoComponent},
  {path: "nuevo-gasto", component: NuevoGastoComponent},
  {path: "crear-hogar", component: CrearHogarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
