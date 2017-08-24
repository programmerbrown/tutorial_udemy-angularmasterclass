import { CoursesService } from './courses.service';
import{ Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <div (click)="onDivClick()">
        <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
    </div>
    <br/>
    <input #email (keyup.enter)="onKeyUp(email.value)" /> 
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    isActive = false;

    onKeyUp(email) {
        console.log(email);
    }

    onDivClick() {
        console.log("Div was clicked");
    }

    onSave($event) {
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}