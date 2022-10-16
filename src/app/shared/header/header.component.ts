import { Component, OnInit } from '@angular/core';
import {faCartShopping,faUser,faHeart,faPhone,faEnvelope,faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { User } from 'src/app/interfaces/user.interface';
import { DataSharingService } from 'src/app/services/data-sharing.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart = faCartShopping
  user = faUser
  wishList = faHeart
  phoneCall = faPhone
  email = faEnvelope
  isConnected : boolean = false
  logout = faRightFromBracket
  connectedUser : User = {
    id: 0,
    email: '',
    firstname: '',
    lastname: '',
    gender: '',
    username: '',
    image: '',
    phone: ''
  }

  constructor(private dataSharingService : DataSharingService) {
    this.dataSharingService.isConnceted.subscribe(
      (value)=>{
        this.isConnected = value
      }
    )
   }

  ngOnInit(): void {
    if(window.sessionStorage.getItem('auth-token')){
      this.isConnected = true
      this.connectedUser = JSON.parse(window.sessionStorage.getItem('auth-user')!)
    }
  }
  logout_function(){
    window.sessionStorage.clear()
    this.isConnected = false
  }

}
