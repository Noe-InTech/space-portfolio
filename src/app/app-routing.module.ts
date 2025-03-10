import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CovoitSanteComponent } from './covoit-sante/covoit-sante.component';
import { OptivexComponent } from './optivex/optivex.component';
import { LilasComponent } from './lilas/lilas.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige vers 'home' par défaut
  { path: 'home', component: HomeComponent },
  { path: 'covoit-sante', component: CovoitSanteComponent },
  { path: 'optivex', component: OptivexComponent },
  { path: 'lilas', component: LilasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
