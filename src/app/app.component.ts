import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-project';
  shoping: boolean = false;

  onChangeHeader(header: string) {
    console.log(header, 'PPPPPPPPPPP');
    if (header === 'shoping') {
      this.shoping = true;
    }

    if (header === 'recipe') {
      this.shoping = false;
    }
  }
}
