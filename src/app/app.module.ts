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
import { MatDialogModule } from '@angular/material/dialog';
import { DialogCrearComponent } from './components/dialogs/dialog-crear/dialog-crear.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DialogUnirteComponent } from './components/dialogs/dialog-unirte/dialog-unirte.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import { DialogPagadoComponent } from './components/dialogs/dialog-pagado/dialog-pagado.component';
import { CardGastoComponent } from './components/card-gasto/card-gasto.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { TableTareasComponent } from './components/table-tareas/table-tareas.component';
import { DialogTareasComponent } from './components/dialogs/dialog-tareas/dialog-tareas.component';
import { DialogPresupuestoComponent } from './components/dialogs/dialog-presupuesto/dialog-presupuesto.component';
import { CardPresuComponent } from './components/card-presu/card-presu.component';
import { CardPresuComponent } from './components/card-presu/card-presu.component';


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
    DialogCrearComponent,
    DialogUnirteComponent,
    DialogPagadoComponent,
    CardGastoComponent,
    CardHomeComponent,
    TableTareasComponent,
    DialogTareasComponent,
    DialogPresupuestoComponent,
    CardPresuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatIconModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
