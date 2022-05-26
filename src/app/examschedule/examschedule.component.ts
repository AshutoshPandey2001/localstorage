import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-examschedule',
  templateUrl: './examschedule.component.html',
  styleUrls: ['./examschedule.component.scss']
})
export class ExamscheduleComponent implements OnInit {
  examForm: FormGroup;
  term = '';
  exmbtn = false;
  examList: any = [];

  selectIndex: any;
  update = false;
  constructor(private FormBuilder: FormBuilder) {
    this.examForm = this.FormBuilder.group({
      subjectName: ['', [Validators.required, Validators.minLength(4)]],
      examDate: ['', Validators.required],
      examTime: ['', Validators.required]
    })
    let data = localStorage.getItem("EXAM_LIST");
    if (data)
      this.examList = JSON.parse(data);
  }

  ngOnInit(): void {
  }
  addExam() {
    this.exmbtn = true;
    if (this.examForm.valid) {
      this.examList.push(this.examForm.value);
      localStorage.setItem("EXAM_LIST", JSON.stringify(this.examList));
      console.log('Exam Schedule Details', this.examList);
      alert("Details Addes Successfully");
      this.clear();
    } else {
      alert("Please Enter Valid Details")
    }
  }


  updateExam() {
    this.exmbtn = true;
    if (this.examForm.valid) {
      this.update = false;
      this.examList[this.selectIndex].subjectName = this.examForm.value.subjectName;
      this.examList[this.selectIndex].examDate = this.examForm.value.examDate;
      this.examList[this.selectIndex].examTime = this.examForm.value.examTime;
      localStorage.setItem("EXAM_LIST", JSON.stringify(this.examList));
      this.clear();
    } else {
      alert("Please Enter Valid Details")
    }
  }


  exaEdi(index: any, obj: any) {
    this.update = true;
    this.selectIndex = index;
    this.examForm.patchValue({
      subjectName: obj.subjectName,
      examDate: obj.examDate,
      examTime: obj.examTime
    })


  }
  exaDel(index: any) {

    console.log('Deleted Time Table', index);
    this.examList.splice(index, 1);
    localStorage.setItem("EXAM_LIST", JSON.stringify(this.examList));

  }
  get f() {
    return this.examForm.controls
  }
  clear() {
    this.examForm.reset()
  }
}
