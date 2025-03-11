import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CovoitSanteComponent } from './covoit-sante/covoit-sante.component';
import { OptivexComponent } from './optivex/optivex.component';
import { LilasComponent } from './lilas/lilas.component';
import { GwadafoodComponent } from './gwadafood/gwadafood.component';
import { InsertComponent } from './insert/insert.component';
import { LaravelComponent } from './laravel/laravel.component';
import { GitComponent } from './git/git.component';
import { GestionDeProjetsComponent } from './gestion-de-projets/gestion-de-projets.component';
import { AnglaisComponent } from './anglais/anglais.component';
import { JavaComponent } from './java/java.component';
import { SqlComponent } from './sql/sql.component';
import { CommunicationComponent } from './communication/communication.component';
import { AutonomieComponent } from './autonomie/autonomie.component';
import { AngularComponent } from './angular/angular.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'covoit-sante', component: CovoitSanteComponent },
  { path: 'optivex', component: OptivexComponent },
  { path: 'lilas', component: LilasComponent },
  { path: 'gwadafood', component: GwadafoodComponent },
  { path: 'insert', component: InsertComponent },
  { path: 'laravel', component: LaravelComponent },
  { path: 'gestion-de-projets', component:GestionDeProjetsComponent},
  { path: 'anglais', component:AnglaisComponent},
  { path: 'java', component:JavaComponent},
  { path: 'sql', component:SqlComponent},
  { path: 'communication', component:CommunicationComponent},
  { path: 'autonomie', component:AutonomieComponent},
  { path: 'angular', component:AngularComponent},
  { path: 'git', component: GitComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
