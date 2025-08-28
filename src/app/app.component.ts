import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MVVComponent } from './mvv/mvv.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MbComponent } from './mb/mb.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, HomeComponent, MVVComponent,  RouterModule, HeaderComponent, AboutUsComponent,MbComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Harmoniar_Website';
}
