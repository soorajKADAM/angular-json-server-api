import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-api';
  _assignmentlist:assignment[];
  isEdit=false;
  allStudent: any=[];
  _student:student;
  _studentlist:student[]=[];
  uniquekey:number=0;
  constructor(private commonService:CommonService){}
  ngOnInit(){
    this.getassignment();
    this.getLatestStudent()
    this._student=new student
  }
  getassignment(){
    this._assignmentlist=[
      {id:1,name:"Assignment1",isselected:false},
      {id:2,name:"Assignment2",isselected:false},
      {id:3,name:"Assignment3",isselected:false},
      {id:4,name:"Assignment4",isselected:false},
    ]
  }

  onchange()
  {
    console.log(this._assignmentlist)
  }

  editStudent(item:student){
let selectedassignmentidlist=item.assignmentid.split(",");
for(let i=0;i<selectedassignmentidlist.length;i++){
this._assignmentlist.filter(x=>x.id==Number(selectedassignmentidlist[i])).map(x=>x.isselected=true);
}
this._student.fullname=item.fullname;
this._student.id=item.id;
this._student.rollno=item.rollno;
this._student.address=item.address;
this._student.subject=item.subject;
this._student.assignmentname=item.assignmentname;
this._student.assignmentid=item.assignmentid;
this._student.marks=item.marks;

this.isEdit=true;
this._student=item;
  }

  addStudent(){
   
    this._student.assignmentid = this._assignmentlist.filter(x=>x.isselected==true).map(x=>x.id).join(",").toString();
    this._student.assignmentname = this._assignmentlist.filter(x=>x.isselected==true).map(x=>x.name).join(",").toString();
    this.uniquekey=this.allStudent.id
      this.uniquekey = this.uniquekey + 1;
      this._student.id = this.uniquekey;
      this._studentlist.push(this._student);
      this.commonService.createStudent(this._student).subscribe((response)=>{
        this.getLatestStudent()
        
      })
   
  
  }

  getLatestStudent(){
    this.commonService.getStudent().subscribe((response)=>{
      this.allStudent = response
      
    })
      }

      deleteStudent(studObj){
        this.commonService.deleteStudent(studObj).subscribe(()=>{
          this.getLatestStudent();
        })
      }
      updateStudent(){
        this._student.assignmentid = this._assignmentlist.filter(x=>x.isselected==true).map(x=>x.id).join(",").toString();
        this._student.assignmentname = this._assignmentlist.filter(x=>x.isselected==true).map(x=>x.name).join(",").toString();
        this._studentlist.push(this._student);
        this.isEdit = !this.isEdit;
        this.commonService.updateStudent(this._student).subscribe(()=>{
          this.getLatestStudent();
        })
      }

}
class assignment{
  id: number;
  name: string;
  isselected:boolean;
}

class student{
  id:number;
  fullname:string;
  rollno:number;
  address:string;
  subject:string;
  marks:number;
  assignmentid:string;
  assignmentname:string;
}
