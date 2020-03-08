import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private  http : HttpClient  ) { }


  private url = 'http://localhost:3000/users';

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    status: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    dateCreation: new FormControl(new Date ),
    tel: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom: '',
      prenom: '',
      status: '',
      password: '',
      email: '',
      dateCreation: '',
      tel: '',
    });
  }

  findAll() {
    return this.http.get<User[]>(this.url);
  }

  add(user: User) {
    return this.http.post<User>(this.url, user);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(user) {
    return this.http.put(`${this.url}/${user.id}`, user);
  }

  populateForm(user) {
    this.form.setValue(user);
  }








}





