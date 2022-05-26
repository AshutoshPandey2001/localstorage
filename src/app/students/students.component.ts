import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
 studentForm: FormGroup;
 term='';
 stdbtn=false;
  studentList:any=[];
  selectIndex:any;
updateOperation=false;
  constructor(private FormBuilder:FormBuilder) { 
    this.studentForm=this.FormBuilder.group({
      studentName:['',[Validators.required, Validators.minLength(4)]],
      studentId:['',[Validators.required, Validators.minLength(4)]]
    })
    let data= localStorage.getItem("STUDENT_LIST");
    if(data)
    this.studentList=JSON.parse(data);
  }

  ngOnInit(): void {
  }
  addStudent(){
   this.stdbtn=true;
   if(this.studentForm.valid){
    this.studentList.push(this.studentForm.value);
    localStorage.setItem("STUDENT_LIST" , JSON.stringify(this.studentList));
        console.log('Student Details',this.studentList);
        alert("Details Added Successfully");
      this.clear();        
   }else{
     alert("Please Enter Valid Details")
   }
  }


  updateStudent(){
    this.stdbtn=true;
   if(this.studentForm.valid){
    this.updateOperation=false;
this.studentList[this.selectIndex].studentName=this.studentForm.value.studentName;
this.studentList[this.selectIndex].studentId=this.studentForm.value.studentId;
localStorage.setItem("STUDENT_LIST" , JSON.stringify(this.studentList));
alert("Details Updated Successfully")
this.clear();
}else{
  alert("Please Enter Valid Details")
}
  }


  stuEdi(index:any,obj:any){
    this.updateOperation=true;
    this.selectIndex=index;
    this.studentForm.patchValue({
      studentName:obj.studentName,
      studentId:obj.studentId
    })
    

  }
  stuDel(index:any){

    console.log('Deleted List',index );
    this.studentList.splice(index,1);
    localStorage.setItem("STUDENT_LIST" , JSON.stringify(this.studentList));

  }
get f(){
  return this.studentForm.controls
}
clear(){
  this.studentForm.reset()
}
}
