import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private dataService: DataService) {}

  secondScreen = false;
  
  name; 
  address; 
  dob;
  email;

  studentKey = '' +  Math.floor(Math.random() * Math.floor(10000));
  // studentKey = '1235';

  ngOnInit() {
    // let id = '6704';
    // this.dataService.getStudentIdentity(id).subscribe(x => {
    //   console.log('success...')
    //   console.log(x)
    // },
    // error => {
    //   console.log('error...')
    //   console.log(error)
    // });
  }

  refreshData() {
    
  }

  submitForm() {
    let data = {
      "$class": "org.acme.model.Student",
      "name": this.name,
      "address": this.address,
      "dob": this.dob,
      "email": this.email,
      "studentKey": this.studentKey
    }

    console.log('submitForm...')
    console.log(data)

    this.dataService.createStudent(data).subscribe(x => {
      console.log('success...')
      console.log(x)
      this.secondScreen = true;
    }, 
    error => {
      console.log('error...')
      console.log(error)
    }
  )
  }

  
}
