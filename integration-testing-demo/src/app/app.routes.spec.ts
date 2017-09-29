import { UsersComponent } from './users/users.component';
import { routes } from './app.routes';  

describe('routes', () => {
    it('should contain a route for /users', () => {
        expect(routes).toContain({path: 'users', component: UsersComponent });
    });
});