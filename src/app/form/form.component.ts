import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  title = 'templateDriven';

  fname:string='';
  lname:string='';
  terms:boolean=false;
  gender:string='';
  address:string='';
  
  addList(formData:NgForm){
    console.log(formData.value);
  }

  resetValues(formData:NgForm){
    formData.reset();
  }

  constructor(){

  }
  ngOnInit(): void {

  }

  setValues(formData:NgForm){
    let userDetails={
      fname:'Sanju',
      lname:'Siva',
      terms:false,
      gender:'',
      address:'Coimbatore'
    }
    formData.setValue(userDetails);
  }

  display=false;
  displayValues(){
    this.display=!this.display;
    
  }

}
