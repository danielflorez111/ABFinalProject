import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { IUser } from '../user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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
  matches:IUser[];

  constructor(private _usersService:UsersService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(parametros => {
      this.userId = parametros['id'];
      this._usersService.getUserMatches(this.userId).subscribe(data => {
        this.user = data.user;
        this.matches = data.matches;
      });
    });
  }

  ngOnInit() {
  }

}
