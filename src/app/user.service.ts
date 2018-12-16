import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/login', userData);
  }

  addBook(book):  Observable<any> {
    return this.http.post('http://127.0.0.1:8000/addBook', book);
  }

  getAllBooks():  Observable<any> {
    return this.http.get('http://127.0.0.1:8000/bookDirectory');
  }
}
