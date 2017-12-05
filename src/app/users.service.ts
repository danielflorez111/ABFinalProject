import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IUser } from './user.interface';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class UsersService {

  usersURL:string;
  userURL:string;
  previousMatches:IUser[] = [];

  constructor(private http:Http) {
    this.usersURL = "https://shared-lunch.firebaseio.com/users.json";
    this.userURL = "https://shared-lunch.firebaseio.com/users";
  }
  
  getUsers(): Observable<any> {
    return this.http.get(this.usersURL)
      .map(res => res.json());
  }
  
  getUser(id:string): Observable<any> {
    let url = `${ this.userURL }/${ id }.json`;
    return this.http.get(url)
      .map(res => res.json());
  }

  getPreviousMatches(previousMatches:any): IUser[] {
    this.previousMatches = [];
    
    for(let i in previousMatches) {
      this.getUser(i).subscribe(match => {
        match['id'] = i;
        this.previousMatches.push(match);
      });
    }
    return this.previousMatches;
  }

}