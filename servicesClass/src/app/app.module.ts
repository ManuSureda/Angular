import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { StudentListComponent } from './components/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StudentViewComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//<<<< import it here
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
