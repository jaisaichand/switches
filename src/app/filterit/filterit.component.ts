import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterit',
  templateUrl: './filterit.component.html',
  styleUrls: ['./filterit.component.css']
})
export class FilteritComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchText="";
  realData=[{id:1,name:"#jaisaichand"},{id:2,name:"#Spiderman"},{id:3,name:"#tarakechuthepikachu"},{id:4,name:"#saikiran"},{id:5,name:"#suskiran"},{id:6,name:"#samantha"}];
  fitlteredFinalArray=[];
  hashText="";
  isHashText = false;  

  filterData(eve){
    console.log(eve);
    this.searchText = eve.target.value;
    console.log(eve.target.value);
    console.log(this.searchText);    
    if(eve.data=="#"){
      
      this.fitlteredFinalArray = this.realData;
      this.isHashText=true;
      this.hashText = "#";
      return;
    }

    

    if(eve.data==" "){
      this.hashText = "";
      this.isHashText = false;
      //this.fitlteredFinalArray=[];
      return;
    }

    if(this.isHashText){
      this.hashText = this.hashText+eve.data;
      console.log(this.hashText);
      
    }
    
    console.log(this.searchText);
    
    if(this.searchText==""){
      this.fitlteredFinalArray = [];
    }else{
      this.fitlteredFinalArray = this.realData.filter((val)=>{
        
        
        return val.name.includes(this.hashText);
      })
    }
  }

  clickedHashtag(data:any){
    console.log(data);
    console.log(this.hashText);
    console.log(this.searchText);
    
    let lastInd =   this.searchText.lastIndexOf(this.hashText);
    let dat = this.searchText.split(" ");
    console.log(dat);
    
    this.searchText = "";
    dat.forEach((val)=>{
      console.log(val);
      console.log(val.includes(this.hashText));
      
      
      if(val.includes(this.hashText)){
        val = data.name;
        
      }
      this.searchText = this.searchText+" "+val;
      
    })

    console.log(dat);
    

    // this.searchText = dat.join("");
    
    
    // this.searchText=this.searchText.replace(this.hashText,data.name);
    this.searchText = this.searchText+" ";
    this.isHashText = false;
    this.hashText="";
    this.fitlteredFinalArray = [];
    console.log(this.searchText);
  }

  placeholderText="Write something";

}
