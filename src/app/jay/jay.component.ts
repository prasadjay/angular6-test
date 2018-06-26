import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jay',
  templateUrl: './jay.component.html',
  styleUrls: ['./jay.component.css']
})
export class JayComponent implements OnInit {
 
  prasadText = "Huehuehue indeed...";
  monthList = ["jan", "feb", "mar", "apr", "may"];
  isavailable= false;
  constructor() { }

  ngOnInit() {
    console.log("Initiating Jay App compoenent.");
  }

  myClickFunction(event){
    alert("Button was clicked.......");
  }

  selectMonth(monthValues){
    console.log(monthValues);
  }

}
