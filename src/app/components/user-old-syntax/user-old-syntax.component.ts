import { Component, inject } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Experience } from '@models/experience.enum';
import { User } from '@models/user.model';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user-old-syntax',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './user-old-syntax.component.html'
})
export class UserOldSyntaxComponent {
  user: User | null = null;
  isInfoVisible = false;
  experience: typeof Experience = Experience;

  private userService = inject(UserService);

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  showMoreInfo(): void {
    this.isInfoVisible = true;
  }
}
