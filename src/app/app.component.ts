import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'safeguard';

  toTop () {
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      }
    );
  }
}

