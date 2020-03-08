import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  
  users: User[] = [];

  constructor(private userservice  : UserServiceService ,private router : Router) { }

  ngOnInit() {

    this.getUsers();
  }

  getUsers() {
    this.userservice.findAll().subscribe( response => {
      this.users = response;
    });
  }

  edit(user: User) {
    this.userservice.populateForm(user);
    this.router.navigateByUrl('users/edit');
  }

  delete(user) {
    if (this.confimDelete()) {
      this.userservice.delete(user.id)
        .subscribe(() => {
          this.getUsers();
        });
    }
  }

  
  confimDelete() {
    return confirm('etes vous sur de vouloir supprimer cet utilisateur ?');
  }


}
