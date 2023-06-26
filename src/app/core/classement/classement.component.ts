import { Component } from '@angular/core';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.scss']
})
export class ClassementComponent {
classement!:number;
nameEquipe!:String;
matchjouee!:number;
point!:number;
statumatch1="gagne";
statumatch2="null"
statumatch3="perdu"

}
