import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jai',
  templateUrl: './jai.component.html',
  styleUrls: ['./jai.component.css']
})
export class JaiComponent implements OnInit {

  constructor() { }

  @Input() backg = "";

  ngOnInit(): void {
  }

}
