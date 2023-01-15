import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
user: User ={
  nom:"Kouabenan",
  prenom:"Raissa",
  profilePictureUrl:"./assets/img/image.jpg"
}
getFullName(user: User)
{
  return `${user.nom} ${user.prenom}`;
}
}

class User {
 nom?:String;
 prenom?:String;
 profilePictureUrl?:String
}

