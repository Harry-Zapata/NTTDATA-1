import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private userSrv: UserServiceService) {}
  data: any;
  ngOnInit(): void {
    let users = localStorage.getItem('users');
    !users ? this.traerData() : (this.data = JSON.parse(users));
  }

  traerData(){
     this.userSrv.getUser().subscribe((res: any) => {
      this.data = res;
      localStorage.setItem('users', JSON.stringify(this.data));
    });
  }

  irUsuario(id: any) {
    localStorage.setItem('id', id);
    window.location.href = '/users/' + id;
  }
}
