import { Component } from '@angular/core';
import { Guid } from "guid-typescript";
import { Todo } from "./todo.model";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    todos: Todo[] = []


    onSubmit(title: string) {
        let todo = new Todo(Guid.create(),title, false);
        this.todos.push(todo);
        // form.resetForm();
    }


    onComplete(id: Guid) {
        let todo = this.todos.filter((x) =>{return x.id === id})[0];
        todo.isComplete = true;
    }


    onDelete(id: Guid) {
        let todo = this.todos.filter(x => x.id === id)[0];
        let index = this.todos.indexOf(todo, 0);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}