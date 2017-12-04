import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user:{} = {};
  userId:string;

  constructor(private _usersService:UsersService, private router:Router, private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe(parametros => {
      this.userId = parametros['id'];
      this._usersService.getUser(this.userId).subscribe(user => {
        this.user = user;
      });
    });
    
  }

  ngOnInit() {
  }

}
