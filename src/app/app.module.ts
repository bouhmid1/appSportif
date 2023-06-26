import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeequipeComponent } from './core/listeequipe/listeequipe.component';

import { ClassementComponent } from './core/classement/classement.component';
import { ListejoueurComponent } from './core/listejoueur/listejoueur.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeequipeComponent,
    ListejoueurComponent,
    ClassementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
