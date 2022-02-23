import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bhagi',
  templateUrl: './bhagi.component.html',
  styleUrls: ['./bhagi.component.css']
})
export class BhagiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  childColor="crimson";
  

  changeInput(){
  this.childColor = "yellow";
  }

}
