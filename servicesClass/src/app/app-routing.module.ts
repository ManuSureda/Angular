import { NgModule              } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';//modulo de ruteo base, mas la libreria Routes para manipular rutas
import { StudentAddComponent   } from './components/student-add/student-add.component';
import { StudentViewComponent  } from './components/student-view/student-view.component';
import { StudentListComponent  } from './components/student-list/student-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
//import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: 'add', component: StudentAddComponent },
  { path: 'view/:id', component: StudentViewComponent },
  { path: 'list', component: StudentListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component : PageNotFoundComponent  } //el  ** es un comodin para cualquier ruta que no coincida con las anteriores
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging purpose only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
