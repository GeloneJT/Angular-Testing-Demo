import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todo.component.html',
  styleUrls: [],
})
export class TodosComponent {
  todos: any[] = [];
  message: any;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe((t) => (this.todos = t));
  }

  add() {
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe({
      next: (t) => this.todos.push(t),
      error: (err) => (this.message = err),
    });
  }

  delete(id: any) {
    if (confirm('Are you sure?')) this.service.delete(id).subscribe();
  }
}
