import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user.interface';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class UsersService {

  user:IUser;
  matches:IUser[] = [];
  usersURL:string;
  userURL:string;

  constructor(private http:HttpClient) {
    this.usersURL = "https://shared-lunch.firebaseio.com/users.json";
    this.userURL = "https://shared-lunch.firebaseio.com/users";
  }
  
  getUser(id:string): Observable<any> {
    let url = `${ this.userURL }/${ id }.json`;
    return this.http.get(url);
  }
  
  getUserDetail(id:string): IUser {
    return this.matches.filter(user => user.id === id)[0];
  }
  
  getUserMatches(id:string): Observable<any> {
    this.matches = [];
    let match:IUser;
    let currentMatch:IUser;
    
    return this.http.get(this.usersURL).map(users => {
      this.user = users[id];
      
      for(let i in this.user.matches) {
        match = users[i];
        match['id'] = i;
        this.matches.push(match);
      }
      
      if(this.user.currentMatch) {
        currentMatch = users[this.user.currentMatch];
        currentMatch['id'] = this.user.currentMatch;
        this.matches.push(currentMatch);
      }
      
      return {user:this.user, matches: this.matches};
    });
  }

}