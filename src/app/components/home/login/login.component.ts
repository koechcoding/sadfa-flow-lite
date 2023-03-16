import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent, ModalDirective, SpinnerComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ModalDirective]
})
export class LoginComponent implements OnInit{
   form!: FormGroup
   error=null
   constructor(
    private fb: FormBuilder,
    // private authenticationService:Uuthenticationervice,
    // private auth: AuthService,
    private router:Router,
    // private store: Store<{user:LoginUser}>

   ){}

   ngOnInit(): void {
     this.form = this.fb.group({
      Email:[null, [Validators.required, Validators.email]],
      Password:[null, [Validators.required, Validators.Password]],
     })
   }

   submitForm(){
    if(this.form.valid){
      this.store.dispatch(UserActions.login({Email:this.form.value.Email,Password:this.form.value.Password}))
      this.auth.login()
      this.router.navigate([''])
    }
   }

   Close(){
    this.error=null
   }
   
}
