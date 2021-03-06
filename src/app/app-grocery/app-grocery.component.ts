import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['../../assets/bootstrap-4.3.1-dist 2/css/bootstrap.min.css','app-grocery.component.css']
})

export class AppGroceryComponent implements OnInit {
 
  task: string;
  tasks = [];

  

  onClick(){
    this.tasks.push({name: this.task});
    this.task = "";
}  

deleteOnClick(taskToDelete){
  var index = this.tasks.indexOf(taskToDelete);
  this.tasks.splice(index, 1);
}


  constructor() { }

  ngOnInit() {
  }
}