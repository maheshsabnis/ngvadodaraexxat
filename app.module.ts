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
import { HomeComponent } from './routingapp/app.home.component';
import { AboutComponent } from './routingapp/app.about.component';
import { ContactComponent } from './routingapp/app.contact.component';
import { MainComponent } from './routingapp/app.main.component';
@NgModule({
  declarations: [
    AppComponent, SimpleComponent, StudentComponent,
    StudentFormComponent, TableComponent,
    StudentGridComponent, UniversityComponent,
    StudentChildComponent, UniversityServiceComponent,
    ColorDirective, DirectiveComponent,
    HomeComponent, AboutComponent, ContactComponent, 
    MainComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, UtilityModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
