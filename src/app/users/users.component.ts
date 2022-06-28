import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
userName:string="";
userList:any=[];  
  constructor() { }

  ngOnInit(): void {
  }
  userAdded(){
    if(this.userName=== ""){
      alert("Enter Valid Name!!")
    }
    else{
      this.userList.push(this.userName)
    this.userName= "";
    }
    
  }
}
