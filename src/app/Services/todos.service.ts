import { Injectable } from '@angular/core';
import { Todo } from '../Interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private itemlist: Todo[] = [

    {id: 1, title: 'Work', completed: false},
    {id: 2, title: 'Laugh', completed: false},
    {id: 3, title: 'Play', completed: false}

  ];

  constructor() { }

  getItemList(): Todo[] {
    return this.itemlist;
  }

  removeItem(u: Todo): void {
    
    let index = this.itemlist.indexOf(u);
    this.itemlist.splice(index, 1);
  
  }

  addItem(u: Todo): void {
    if (u.title === undefined) {
      alert('Must insert Task!')
  }
  else {
    
    this.itemlist.push(u);
    console.log(u);
  }
  }

  getItem(index: number): Todo {
    return this.itemlist[index];
  }

  completedItem(u: Todo): void {
    u.completed = true;
    console.log(u.completed);
  }
 
}
