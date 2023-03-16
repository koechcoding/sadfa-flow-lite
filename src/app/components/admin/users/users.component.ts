import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { SingleUserComponent } from './single-user/single-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, SingleUserComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User [] = [];

  constructor(private store: Store<AppState>){

    this.store.select(selectUsers).subscribe((users)=>{
      this.users = users;
      console.log(this.users);
      
    })
  }
}
