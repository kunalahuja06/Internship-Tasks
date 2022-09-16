import { Component,OnInit } from '@angular/core';
import { filters } from 'src/assets/static files/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task 5';
  constructor(){
  }
  department=filters.departments
  office=filters.offices
  jobTtile=filters['job titles']
  filterTitles=Object.keys(filters)

}
