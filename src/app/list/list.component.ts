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
  currentMatch:{} = {};
  currentMatchId:string;
  previousMatches:any;
  previousMatchesInfo:any;
  

  constructor(private _usersService:UsersService, private router:Router, private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe(parametros => {

      this.userId = parametros['id'];

      this._usersService.getUser(this.userId).subscribe(user => {
        this.user = user;
        this.currentMatchId = user.currentMatch;
        this.previousMatches = user.matches;

        this._usersService.getUser(this.currentMatchId).subscribe(currentMatch => {
          this.currentMatch = currentMatch;
        });

        this.previousMatchesInfo = this._usersService.getPreviousMatches(this.previousMatches);
      });


    });
    
  }

  ngOnInit() {
  }

}
