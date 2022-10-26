import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component'
import { EmployeeService } from './services/shared/employee-service.service';
import { FiltersPipe } from './pipes/filters.pipe';
import {LayoutModule} from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AlphabeticalScrollBarModule } from 'alphabetical-scroll-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    SearchBarComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    FiltersPipe,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    NoopAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    AlphabeticalScrollBarModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
