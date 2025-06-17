import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any[] = []; 
   
  private API_URL = 'http://localhost:5000/api/users';

  constructor() { }

  async getUsers() {
    const res = await axios.get(this.API_URL);
    return res.data;
  }

  async addUser(users:{name:string,email:string}){
      const res = await axios.post(this.API_URL,users);
      return res.data;
  }
}
