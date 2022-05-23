
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo: { title: string; }) {
    return this.http.post('...', todo).pipe(map(r => r))
    ;
  }

  getTodos() { 
    return this.http.get<any>('...').pipe(map(r => r));
  }

  delete(_id: any) {
    return this.http.delete('...').pipe(map(r => r));
  }
}