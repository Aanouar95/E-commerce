import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { User } from 'src/model/User';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  @Input()
  user: User
  @Output()
  userDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void {
  }
  deleteUser() {
    const rep = window.confirm("Veuillez confirmer la suppression ");
    if (rep){
      this.httpClientService.deleteUser(this.user.id).subscribe(
        (user) => {
          this.userDeletedEvent.emit();
          this.router.navigate(['admin', 'users']);
        }
      );
    }
    
  }

}
