import { User } from './../shared/models/user';
import { Observable } from 'rxjs';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string): void {
    this.userService.login(email, password)
      .subscribe(
        () => this.router.navigateByUrl('/home'),
        console.error
      );
  }

}
