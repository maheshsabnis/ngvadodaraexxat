import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './simplecomponent/app.simple.component';
import { StudentComponent } from './studentcomponent/app.student.component';
import { StudentFormComponent } from './studentformcomponent/app.studentform.component';
import { TableComponent } from './appdirectives/app.table.component';
import { StudentGridComponent } from './appdirectives/app.studentgrid.component';
import { UniversityComponent } from './componentspubsub/app.university.component';
import { StudentChildComponent } from './componentspubsub/app.student.component';
import { UtilityModule} from './utilitymodule/app.utility.module';
import { UniversityServiceComponent } from './servicecomponents/app.university.service.component';
import { ColorDirective } from './csutomdirective/app.color.directive';
import { DirectiveComponent } from './csutomdirective/app.directive.component';
@NgModule({
  declarations: [
    AppComponent, SimpleComponent, StudentComponent,
    StudentFormComponent, TableComponent,
    StudentGridComponent, UniversityComponent,
    StudentChildComponent, UniversityServiceComponent,
    ColorDirective, DirectiveComponent

  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, UtilityModule
  ],
  providers: [],
  bootstrap: [DirectiveComponent]
})
export class AppModule { }
