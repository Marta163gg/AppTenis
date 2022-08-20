import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { OrganizacionComponent } from './components/organizacion/organizacion.component';
import { PartidoComponent } from './components/partidos/partidos.component';
import { ContactComponent } from './components/contacto/contact.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { InicioComponent } from './components/inicio/inicio.component';

const appRoutes: Routes = [
      { path: '', redirectTo: 'organizacion', pathMatch: 'full'},
	{ path: 'organizacion', component: OrganizacionComponent},
	{ path: '', component: InicioComponent},
	{ path: 'partidos', component: PartidoComponent},
	{ path: 'contacto', component: ContactComponent},
	{ path: 'jugadores', component: JugadoresComponent},
	{ path: 'inicio', component: InicioComponent}
];


export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

