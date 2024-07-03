import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ProfileComponent } from "./profile/profile.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, ProfileComponent]
})
export class AppComponent {
  title = 'Lady Ron | Portfolio Website';
}
