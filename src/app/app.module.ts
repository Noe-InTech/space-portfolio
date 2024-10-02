import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FireworkComponent } from './components/firework/firework.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CovoitSanteComponent } from './covoit-sante/covoit-sante.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FireworkComponent,
    NavigationBarComponent,
    CovoitSanteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
