import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CrearHogarComponent } from './pages/crear-hogar/crear-hogar.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { ResumenGastosComponent } from './pages/resumen-gastos/resumen-gastos.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { NuevaTareaComponent } from './pages/nueva-tarea/nueva-tarea.component';
import { PresupuestoComponent } from './pages/presupuesto/presupuesto.component';
import { NuevoGastoComponent } from './pages/nuevo-gasto/nuevo-gasto.component';
import { ListaCompraComponent } from './pages/lista-compra/lista-compra.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { NuevoEventoComponent } from './pages/nuevo-evento/nuevo-evento.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardGastoComponent } from './components/card-gasto/card-gasto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    CrearHogarComponent,
    GastosComponent,
    ResumenGastosComponent,
    TareasComponent,
    NuevaTareaComponent,
    PresupuestoComponent,
    NuevoGastoComponent,
    ListaCompraComponent,
    CalendarioComponent,
    NuevoEventoComponent,
    AjustesComponent,
    PerfilComponent,
    CardGastoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
