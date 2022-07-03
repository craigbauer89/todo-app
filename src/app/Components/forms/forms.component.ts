import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Classes/item';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  title!: string;
  id!:number;
  completed!:boolean;

  additem = 'Adding Item....';
  
  pending:boolean = false;
  constructor(private userService: TodosService) { }

  ngOnInit(): void {
  }

  addItem(): void {
    
    this.pending = true;
    //let obj = {name: this.name, lastname: this.lastname, email: this.email}
    setTimeout (() => {
    let obj = new Item(this.title, this.completed, this.id);
    this.userService.addItem(obj);
    this.title = '';
    this.pending = false;
   }, 2000);
    
   
  }


}
