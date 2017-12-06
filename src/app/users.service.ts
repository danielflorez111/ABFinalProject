import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user.interface';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class UsersService {

  url:string;

  constructor(private http:HttpClient) {
    this.url = "https://shared-lunch.firebaseio.com/users.json";
  }
  
  getUser(id:string): Observable<any> {
    let user:IUser;
    let match:IUser;
    let matches:IUser[] = [];
    
    return this.http.get(this.url).map(users => {
      user = users[id];
      
      for(let i in user.matches) {
        match = users[i];
        match['id'] = i;
        matches.push(match);
      }
      
      return {user, matches};
    });
  }

}