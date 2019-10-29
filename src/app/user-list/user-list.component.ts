import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: []
})
export class UsersListComponent implements OnInit {

  User: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    
  }

  // Get Users list
  loadUsers() {
    return this.restApi.getUsers().subscribe((data: {}) => {
      this.User = data;
      console.log(this.User);
    })
  }

}
