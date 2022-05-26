import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
teacherForm:FormGroup;
term='';
 teachButton=false;
  teacherList:any=[];
  selectIndex:any;
  editOperation=false;

  constructor(private FormBuilder: FormBuilder) {
    this.teacherForm=this.FormBuilder.group({
      teachName:['',[Validators.required, Validators.minLength(4)]],
      joinDate:['', Validators.required]
    })
    let data= localStorage.getItem("TEACHER_LIST");
    if(data)
    this.teacherList=JSON.parse(data); 
   }

  ngOnInit(): void {
  }
  addTeacher(){
this.teachButton=true;
if(this.teacherForm.valid){
  this.teacherList.push(this.teacherForm.value);
  localStorage.setItem("TEACHER_LIST" , JSON.stringify(this.teacherList));
      console.log('Teacher Details', this.teacherList );
      alert("Details Added Successfully")
  this.clear();
    }else{
  alert("Please Enter Valid Details")
}
   }
  updateTeacher(){
    this.teachButton=true;
if(this.teacherForm.valid){
    this.editOperation=false;
this.teacherList[this.selectIndex].teachName=this.teacherForm.value.teachName;
this.teacherList[this.selectIndex].joinDate=this.teacherForm.value.joinDate;
localStorage.setItem("TEACHER_LIST" , JSON.stringify(this.teacherList));
alert("Details Updated Successfully")
this.clear();
}else{
  alert("Please Enter Valid Details")
}
  }


  teaEdi(index:any, obj:any){
    this.editOperation=true;
    this.selectIndex=index;
    this.teacherForm.patchValue({
      teachName:obj.teachName,
      joinDate:obj.joinDate
    })
    
  }
  teaDel(index:any){

    console.log('Deleted List', index)
    this.teacherList.splice(index,1);
    localStorage.setItem("TEACHER_LIST" , JSON.stringify(this.teacherList));

  }
 get f(){
   return this.teacherForm.controls
 }
 clear(){
   this.teacherForm.reset()
 }
}
