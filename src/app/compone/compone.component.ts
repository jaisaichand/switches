import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-compone',
  templateUrl: './compone.component.html',
  styleUrls: ['./compone.component.css']
})
export class ComponeComponent implements OnInit {
  isOn = false;

  constructor(public serv:MainService) { }

  toggleIt(){
    this.serv.subj.next({comp:"compone",value:!this.isOn});
  }

  ngOnInit(): void {
    this.serv.subj.subscribe((data:any)=>{
      if(data.comp=="compone"){
        this.isOn= data.value;
      }
    })
  }

}
