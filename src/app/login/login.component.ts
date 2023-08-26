import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
password!: string;
statusLogin!: string;
email!: string;

constructor(private router: Router) {
}


iniciarSesion() {
  if (this.password == "123456"){
    this.router.navigate(["/form"]);
    localStorage.setItem("iniciado", "true");
  }
  this.statusLogin = "Error al iniciar sesión.";  
}

}