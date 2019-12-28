import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
    private users: User[] = [
        {
            firstname: 'Arnold',
            lastname: 'Rambo',
            email: 'codintag@gmail.com',
            drinkPreference: 'Pepsi',
            hobbies: [
                'Coding',
                'Coffee'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}