import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { User } from './core/models/user.model';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EatAWeek';
  user!: User;
  
  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
    if(this.auth.isAuthenticated()){
      this.auth.authenticate(this.user, this.router.navigateByUrl('/login'));
    }else{
      this.router.navigateByUrl('/login');
    }
  }
  
  logout() {
    this.http.post('logout', {}).pipe(
      finalize(() => {
        this.auth.logout();
        this.router.navigateByUrl('/login');
    })).subscribe();
  }

}