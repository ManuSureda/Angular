import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//importante

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarAddComponent } from './car-add/car-add.component';
import { CarListComponent } from './car-list/car-list.component';
// import { StudentAddComponent } from './components/student-add/student-add.component';
// //import { StudentViewComponent } from './student-view/student-view.component';
// import { StudentListComponent } from './components/student-list/student-list.component';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CarAddComponent,
    CarListComponent//,
    // StudentAddComponent,
    // //StudentViewComponent,
    // StudentListComponent,
    // PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule//importante
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
