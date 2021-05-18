import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
/*this.authService.login(data).subscribe(
      (result: any) => {
        AuthService.saveAuthenticationTokens(result);
          start get id
        this.ds.getClientById(AuthService.getUserId()).subscribe(res => {
          this.ds.hasRole('client');
          this.router.navigate(['/dashboard-client']);
        });*/