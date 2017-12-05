import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user.interface';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class UsersService {

  usersURL:string;
  userURL:string;
  previousMatches:IUser[] = [];

  constructor(private http:HttpClient) {
    this.usersURL = "https://shared-lunch.firebaseio.com/users.json";
    this.userURL = "https://shared-lunch.firebaseio.com/users";
  }
  
  getUsers(): Observable<any> {
    return this.http.get(this.usersURL);
  }
  
  getUser(id:string): Observable<any> {
    let url = `${ this.userURL }/${ id }.json`;
    return this.http.get(url);
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

  test(id:string) {
    let user;
    let matches;
    let matchesInfo = [];

     this.http.get(this.usersURL).map(users => {
       user = users[id];
       matches = user.matches;

       for(let i in matches) {
         //matchesInfo.push(users.id);
       }


        console.log("matches", matches);
      }).subscribe();
  }

}