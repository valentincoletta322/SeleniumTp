import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  id!: number;
  consumo!: number;
  nombre!: string;
  statusLogin!: string;

  agregarObjeto() {
    if(localStorage.getItem("iniciado")=="true"){
      this.statusLogin = "Objeto agregado.";
    }
    else{
      this.statusLogin = "Inicie sesión para agregar objetos.";
    }
  }

}