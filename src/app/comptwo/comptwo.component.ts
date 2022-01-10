import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-comptwo',
  templateUrl: './comptwo.component.html',
  styleUrls: ['./comptwo.component.css']
})
export class ComptwoComponent implements OnInit {

  constructor(public serv:MainService) { }

  isOn=false;

  toggleIt(){
    this.serv.subj.next({comp:"comptwo",value:!this.isOn});
  }

  ngOnInit(): void {
    this.serv.subj.subscribe((data:any)=>{
      if(data.comp=="comptwo"){
        this.isOn= data.value;
      }
    })
  }

}
