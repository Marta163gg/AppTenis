import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing'

//Componentes
import { AppComponent } from './app.component';
import { OrganizacionComponent } from './components/organizacion/organizacion.component';
import { PartidoComponent } from './components/partidos/partidos.component';
import { ContactComponent } from './components/contacto/contact.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    OrganizacionComponent,
    PartidoComponent,
    ContactComponent,
    JugadoresComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
