import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-single-user',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  @Input() user: User ={
    id: '',
    name: '',
    email: '',
    created_at: '',
    updated_at: ''
  }

  constructor(){}
}
