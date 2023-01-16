import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello Angular</h1>
  // <p>This is inline html</p>`,
  styleUrls: ['./app.component.css']
  // styles: [`h1 {color: red;}
  //   p {background-color: yellow;}
  // `]
})
export class AppComponent {
  title = 'AngularFirstProject';
  role = "Admin";
}
