import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Book } from '../Book';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login;
  userValid:Boolean = false;
  book:Book = new Book();
  books:Book[];

  constructor(private userService:UserService) { }

  ngOnInit() {

    this.userValid = false;
    this.login = {
      userId:Number ,
      password: ''
    };
  }


loginUser(){
  this.userService.loginUser(this.login).subscribe(
    response =>{
      if(response == "Login successful") {
        this.userValid = true;
      }
      else {
        alert("Please check credentials");
      }
    },
    error => console.log('error',error)
  );
}

addBook() {
  this.userService.addBook(this.book).subscribe(
    response =>{
        alert("Book added");
        this.getAllBooks();
    },
    error => console.log('error',error)
  );
}

getAllBooks(){
  this.userService.getAllBooks().subscribe(
    response =>{
      this.books = response;
  },
  error => console.log('error',error)
);
}

}

