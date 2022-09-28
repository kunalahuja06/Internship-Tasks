import { Component } from '@angular/core';
import * as Filters from 'src/assets/static files/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task 5';
  constructor(){
  }
  filters=Filters.filters;
}
