import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const ANONYMOUS_USER: any = {
    firstName: '',
    lastName: ''
};

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private subject = new BehaviorSubject<any>(ANONYMOUS_USER);

    user$: Observable<any> = this.subject.asObservable();

    loadUser(user: any) {
        this.subject.next(user);
    }
}
