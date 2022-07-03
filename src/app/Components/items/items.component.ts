import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Interfaces/todo';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  genlist = 'Generating list....';
  removeitem = 'Removing Item....';
  items!: Todo[];
  pending:boolean = true;
  removing:boolean = false;
  constructor(private itemService: TodosService) {
    /* let userService = new UserService();
    this.users = userService.getUserList() */
  }

 

  ngOnInit(): void {
    setTimeout (() => {
    this.items = this.itemService.getItemList()
    this.pending = false;
    
   }, 2000);
  }

  deleteItem(c: Todo): void {
    this.removing = true;
    setTimeout (() => {
      this.itemService.removeItem(c);
      this.removing = false;
   }, 2000);
    //this.onDeleteUser.emit(c);
    
  }

  completeItem(c: Todo): void {
    //this.onDeleteUser.emit(c);
    setTimeout (() => {
      this.itemService.completedItem(c);
   }, 2000);
    


}

}
