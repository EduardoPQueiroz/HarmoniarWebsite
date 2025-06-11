import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MVVComponent } from './mvv/mvv.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, HomeComponent, MVVComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Harmoniar_Website';
}
