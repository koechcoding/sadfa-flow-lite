import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../interfaces/abouts.interface';

@Injectable({
  providedIn: 'root'
})
export class TagService {



  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>('http://localhost:4000/api/tags');
  }

}