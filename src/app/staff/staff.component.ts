import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  StaffForm: FormGroup
  stffButton=false;
  term='';
  staffList:any=[];
  selectIndex:any;
  edit=false;

  constructor( private FormBuilder: FormBuilder) {
    this.StaffForm=this.FormBuilder.group({
      stffName:['',[Validators.required, Validators.minLength(4)]],
      staffSalary:['',[Validators.required]]
    })
    let data= localStorage.getItem("STAFF_LIST");
    if(data)
    this.staffList=JSON.parse(data);
   }

  ngOnInit(): void {
  }
  addStaff(){
    this.stffButton=true;
    if(this.StaffForm.valid){
      this.staffList.push(this.StaffForm.value);
      localStorage.setItem("STAFF_LIST" , JSON.stringify(this.staffList));
      console.log('Staff Details', this.staffList );
      alert("Details Added Successfully");
      this.clear();
    }else{
      alert("Please Enter Correct Details")
    }
     }


  updateStaff(){
    this.stffButton=true;
    if(this.StaffForm.valid){
    this.edit=false;
this.staffList[this.selectIndex].stffName=this.StaffForm.value.stffName;
this.staffList[this.selectIndex].staffSalary=this.StaffForm.value.staffSalary;
localStorage.setItem("STAFF_LIST" , JSON.stringify(this.staffList));
alert("Details Updated Successfully")
this.clear();
}else{
  alert("Please Enter Correct Details")
}
  }


  stfEdi(index:any,obj:any){
    this.edit=true;
    this.selectIndex=index;
    this.StaffForm.patchValue({
      tstffName:obj.stffName,
      staffSalary:obj.staffSalary
  
    })
   
  }
  stfDel(index:any){

    console.log('Deleted List',index );
    this.staffList.splice(index,1);
    localStorage.setItem("STAFF_LIST" , JSON.stringify(this.staffList));

  }
  get f(){
    return this.StaffForm.controls
  }
  clear(){
    this.StaffForm.reset()
  }
}
