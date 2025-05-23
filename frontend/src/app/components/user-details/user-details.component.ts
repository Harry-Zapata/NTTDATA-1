import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  user: any
  constructor() { }
  ngOnInit(): void {
    let users = localStorage.getItem('users');
    let id = localStorage.getItem('id');
    if (users) {
      let data = JSON.parse(users);
      this.user = data.find((user: any) => user.id == id);
    }
    console.log(this.user);
  }

  volver() {
    window.location.href = '/';
  }
}
