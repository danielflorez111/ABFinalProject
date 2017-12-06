import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from '../user.interface';
import { Location } from '@angular/common';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user:IUser = {
    active: true,
    currentMatch: "",
    email: "",
    firstName: "",
    lastName: "",
    location: 0,
    matchConfirmed: true,
    matches: {},
  };

  userId:string;
  stars:number = 4.5;

  constructor(private _usersService:UsersService, private router:Router, private activatedRoute:ActivatedRoute, private _location: Location) {

    this.activatedRoute.params.subscribe(parametros => {
      this.userId = parametros['id'];
      this._usersService.getUser(this.userId).subscribe(data => {
        this.user = data.user;
      });
    });
    
  }

  ngOnInit() {
  }
  
  comeBack() {
    this._location.back();
  }

}
