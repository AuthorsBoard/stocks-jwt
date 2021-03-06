import {Component, OnInit} from '@angular/core';
import {UserService} from '@shared/services/user/user.service';
import {TokenStorageService} from '@shared/services/token-storage/token-storage.service';
const USER_KEY = 'name';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public username: string;
  constructor(private userService: UserService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.tokenStorage.getSharedUserProfile().subscribe(user => {
      if (user) {
        this.username = user.name;
      } else {
        this.username = localStorage.getItem(USER_KEY);
      }
    });
  }

}
