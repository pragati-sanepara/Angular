import { Component, Input, OnInit} from '@angular/core';
import { Student } from '../../../core/models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() oneStudentDetail! : Student;
  ngOnInit(): void {
  }

}
