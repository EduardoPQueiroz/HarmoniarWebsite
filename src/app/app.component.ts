import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { MajorBeatComponent } from './major-beat/major-beat.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent,HomeComponent ,MajorBeatComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Harmoniar_Website';
}
