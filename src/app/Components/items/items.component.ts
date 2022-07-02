import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Interfaces/todo';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items!: Todo[];

  constructor(private itemService: TodosService) {
    /* let userService = new UserService();
    this.users = userService.getUserList() */
  }

  ngOnInit(): void {
    this.items = this.itemService.getItemList()
  }

  deleteUser(c: Todo): void {
    //this.onDeleteUser.emit(c);
    this.itemService.removeItem(c);
  }

}


