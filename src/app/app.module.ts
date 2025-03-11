import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FireworkComponent } from './components/firework/firework.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CovoitSanteComponent } from './covoit-sante/covoit-sante.component';
import { OptivexComponent } from './optivex/optivex.component';
import { LilasComponent } from './lilas/lilas.component';
import { GwadafoodComponent } from './gwadafood/gwadafood.component';
import { InsertComponent } from './insert/insert.component';
import { LaravelComponent } from './laravel/laravel.component';
import { AngularComponent } from './angular/angular.component';
import { JavaComponent } from './java/java.component';
import { GitComponent } from './git/git.component';
import { SqlComponent } from './sql/sql.component';
import { AutonomieComponent } from './autonomie/autonomie.component';
import { CommunicationComponent } from './communication/communication.component';
import { GestionDeProjetsComponent } from './gestion-de-projets/gestion-de-projets.component';
import { AnglaisComponent } from './anglais/anglais.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FireworkComponent,
    NavigationBarComponent,
    CovoitSanteComponent,
    OptivexComponent,
    LilasComponent,
    GwadafoodComponent,
    InsertComponent,
    LaravelComponent,
    AngularComponent,
    JavaComponent,
    GitComponent,
    SqlComponent,
    AutonomieComponent,
    CommunicationComponent,
    GestionDeProjetsComponent,
    AnglaisComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
