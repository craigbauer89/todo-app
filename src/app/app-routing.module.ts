import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './Pages/completed/completed.component';
import { TodolistComponent } from './Pages/todolist/todolist.component';

const routes: Routes = [

  { path: 'todo', 
  component: TodolistComponent
    
  },
  { path: 'completed/:id', 
    component: CompletedComponent
  },
  { path: '', 
    pathMatch: 'full',
    redirectTo: 'todo'
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
