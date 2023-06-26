import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeequipeComponent } from './core/listeequipe/listeequipe.component';
import { ListejoueurComponent } from './core/listejoueur/listejoueur.component';
import { ClassementComponent } from './core/classement/classement.component';

const routes: Routes = [
  {path:"equipe",component:ListeequipeComponent},
  {path:"joueur",component:ListejoueurComponent},
  {path:"classement",component:ClassementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
