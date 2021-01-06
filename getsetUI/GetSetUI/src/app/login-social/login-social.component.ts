import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-login-social',
  templateUrl: './login-social.component.html',
  styleUrls: ['./login-social.component.css']
})
export class LoginSocialComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  GoogleLoginProvider = GoogleLoginProvider;
  faGoogle = faGoogle

  constructor(

    private authService: SocialAuthService

    ) { }

  ngOnInit(): void {
    window.scroll(0,0)

    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  //refreshGoogleToken(): void {
    //this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
 // }

}
