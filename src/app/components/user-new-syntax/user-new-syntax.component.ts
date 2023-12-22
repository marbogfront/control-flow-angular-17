import { Component, OnInit, inject } from '@angular/core';
import { Experience } from '@models/experience.enum';
import { User } from '@models/user.model';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user-new-syntax',
  standalone: true,
  templateUrl: './user-new-syntax.component.html'
})
export class UserNewSyntaxComponent implements OnInit {
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
