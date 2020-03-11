import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../../services/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor( private userservice : UserServiceService ,private router :Router ) { }

  ngOnInit() {
  }

  addClient(user) {
    this.userservice.add(user)
      .subscribe((user) => {
        this.router.navigateByUrl('/users');
  
      });
  }

  updateClient(user) {
    this.userservice.update(user)
      .subscribe((user) => {
        this.router.navigateByUrl('/users');
      
      });
  }

  save() {
    if (this.userservice.form.valid) {
      if (!this.userservice.form.get('id').value) {
        this.addClient(this.userservice.form.value);


      } else {
        this.updateClient(this.userservice.form.value);
   
      }
      this.userservice.form.reset();
      this.userservice.initializeFormGroup();
      this.router.navigate(['/users']);
  
    }
  }

}
