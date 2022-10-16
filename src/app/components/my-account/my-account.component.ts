import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { __values } from 'tslib';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  loginSubscription : Subscription | any ;
  isLoginSuccessful: boolean | null = null   ;
  loginForm!: FormGroup;
  constructor(
    private loginService : LoginService,
    private tokenService : TokenStorageService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username:new FormControl(''),
      password:new FormControl(''),
    })
  }
  loginAction(myForm : FormGroup){
    const loginValues = {
      username: myForm.value.username+"",
      password: myForm.value.password+""
    }
    this.loginSubscription = this.loginService.login(loginValues.username,loginValues.password).subscribe(
      (value : any) =>{
        console.log(value)
        this.tokenService.saveToken(value.token) ;
        const userConnected =  {
          id: value.id,
          email: value.email,
          firstName: value.firstName,
          lastName: value.lastName,
          gender: value.gender,
          username : value.username,
        }
        this.tokenService.saveUser(userConnected)
        this.isLoginSuccessful = true;
        this.route.navigateByUrl('');
      },
      (error : any) =>{
        console.log(error)
        this.isLoginSuccessful = false ;
      }
    )
  }

}
