import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('it should create a form with 2 controls', () => {
      expect(component.form.contains('name')).toBe(true);
      expect(component.form.contains('email')).toBe(true);
  });

  it('', () => {
  });
});