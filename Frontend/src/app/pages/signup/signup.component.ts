import { Component } from '@angular/core';
import { DefaultLoginComponentComponent } from '../../components/default-login-component/default-login-component.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  email: FormControl,
  name: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [DefaultLoginComponentComponent,ReactiveFormsModule, PrimaryInputComponent, ],
  providers:[LoginService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup<SignupForm>;

  constructor(private router:Router, private loginService:LoginService,private toastService: ToastrService
  ){
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    if(this.signupForm.value.password != this.signupForm.value.passwordConfirm){
      this.toastService.warning("As senhas não são iguais")
      return
    }

      this.loginService.login(this.signupForm.value.email,this.signupForm.value.password);
    
    
  }

  navigate(){
    this.router.navigate(["/login"])
  }
}
