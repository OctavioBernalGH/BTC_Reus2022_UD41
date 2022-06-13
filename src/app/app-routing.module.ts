import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactercardComponent} from './charactercard/charactercard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailsComponent } from './details/details.component';
import { AddCharComponent } from './components/add-char/add-char.component';
import { CharDetailsComponent } from './components/char-details/char-details.component';
import { CharListComponent } from './components/char-list/char-list.component';

const routes: Routes = [
  {
    path: 'character',
    component: CharactercardComponent,
  },
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'addchar',
    component: AddCharComponent,
  },
  {
    path: 'char/:id',
    component: CharDetailsComponent
  },
  {
    path: 'chars',
    component: CharListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
