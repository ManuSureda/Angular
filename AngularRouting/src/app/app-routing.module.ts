import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SecondComponent } from './components/second/second.component';

//aca vamos configurando las rutas
const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second/:id', component: SecondComponent },
  { path: '', redirectTo: '/first', pathMatch: 'full' }, //en caso de no proveer ninguna ruta, o mejor dicho, una ruta vacia, en vez de cargar un componente especifico
  //redirije al componente first.
  //pathMatch: 'full' -> angular lo que hace es leer la url de izq a der, y lo machea con la primer rout que le coincida, haciendo el pathMatch: 'full' lo obligas a 
  //que tiene que coincidir toooooda la route no solo ser similar, ya que si alguna ruta empieza por un espacio (re que no se puede, pero es pa que entiendas) cargaria
  //ruta, para que haga el redirectTo tiene que toda la ruta ser ''
  { path: '**', component: NotFoundComponent }// ** es como un comodin, para cualquier ruta que no sea las anteriores (default view en caso de que no se de una valida)
];

//esto le indica que esta class es un Module
@NgModule({
  imports: [RouterModule.forRoot(routes)],//aca lo importo para poder modificarlo
  exports: [RouterModule]//aca lo exporto para poder usarlo en otras rutas
})
export class AppRoutingModule { }
