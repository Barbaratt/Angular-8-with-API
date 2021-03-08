
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  user = {} as User;
  users: User[];

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.getUsers();
  }

  // defini se um usuário será criado ou atualizado
  saveUser(form: NgForm) {
    if (this.user.id !== undefined) {
      return this.userService.updateUser(this.user).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      return this.userService.saveUser(this.user).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os usuários
  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  // deleta um usuário
  deleteUser(user: User) {
      this.userService.deleteUser(user).subscribe(() => {
      this.getUsers();
    });
  }

  // copia o usuário para ser editado.
  editUser(user: User) {
    this.user = { ...user };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getUsers();
    form.resetForm();
    this.user = {} as User;
  }
}
