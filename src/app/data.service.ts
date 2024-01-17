import { Injectable } from "@angular/core";
import { users } from "../users-data";

@Injectable()
export class DataService {
[x: string]: any;
  users = users;
  constructor() {}

  getUsersData() {
    // requete API 
      return this.users;

   
  }
}
