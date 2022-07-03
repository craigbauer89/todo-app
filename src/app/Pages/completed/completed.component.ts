import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/Interfaces/todo';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  genlist = 'Generating list....';

  items!: Todo[];
  pending:boolean = true;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodosService)  { }
    
//     ngOnInit(): void {
//           this.route.params.subscribe(ele => {
//             //console.log(ele['id'])
//             this.items = this.todoService.getItem(ele['id']);
//           })

// }

 ngOnInit(): void {
  setTimeout (() => {
    this.items = this.todoService.getItemList()
  this.pending = false;
 }, 2000);
}



}
