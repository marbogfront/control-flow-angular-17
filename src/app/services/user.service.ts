import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Experience } from '../models/experience.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User | null = null;

  getUser(): User {
    this.user = {
      fName: 'John',
      lName: 'Doe',
      age: 36,
      jobPosition: 'Software Engineer',
      skills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'React', 'TypeScript'],
      experience: Experience.Medium
    };

    return this.user;
  }
}
