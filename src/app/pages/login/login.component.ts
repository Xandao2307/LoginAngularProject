import { Component } from '@angular/core';
import { DefaultLoginComponentComponent } from '../../components/default-login-component/default-login-component.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginComponentComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
