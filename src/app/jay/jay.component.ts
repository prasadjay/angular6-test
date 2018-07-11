import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-jay',
  templateUrl: './jay.component.html',
  styleUrls: ['./jay.component.css']
})
export class JayComponent implements OnInit {
  title = "ASDF";
  prasadText = "Jay Component goes here...";
  monthList = ["jan", "feb", "mar", "apr", "may"];
  isavailable= false;

  name:string;
  age:number;
  email:string;
  address: {
    street:string,
    city:string,
    state:string
  }
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    console.log("Initiating Jay App compoenent.");
    this.name = "Prasad";
    this.age = 27;
    this.email = 'jay@gmail.com';
    this.address = {
      street:'aaa',
      city:'bbb',
      state:'ccc'
    }
    this.hobbies = ['movies', 'games'];

    /*
    this.dataService.getPosts().subscribe((posts) =>{
      this.posts = posts;
    }) 
    */
  
    this.posts = [{
      title:"Sample title",
      body:"Sample body",
    }]

  }

  onClick(){
    console.log("Button clicked!");
    this.name = 'Brad';
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.push(hobby);
  }

  deleteHobby(hobby){
    console.log(hobby);
    for(let x=0; x<this.hobbies.length; x++){
      if (this.hobbies[x] == hobby){
        this.hobbies.splice(x, 1);
      }
    }
  }

  myClickFunction(event){
    alert("Button was clicked.......");
  }

  selectMonth(monthValues){
    console.log(monthValues);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Post{
  id?:number,
  title:string,
  body:string,
  userId?:number
}