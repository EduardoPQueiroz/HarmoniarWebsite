import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { withInMemoryScrolling  } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutUsComponent } from './app/about-us/about-us.component';

import { MVVComponent } from './app/mvv/mvv.component';
import { MbComponent } from './app/mb/mb.component';

// import { NossoAplicativoComponent } from './app/nosso-aplicativo/nosso-aplicativo.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },

      { path: 'sobre-nos', component: AboutUsComponent},

      { path: 'missao-valores', component: MVVComponent },

      { path: 'nosso-aplicativo', component: MbComponent },
      { path: '**', redirectTo: '' },

      //withScrollPositionRestauration('Enabled'),
      //withViewTransitions(),
    ],
    withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
  )
  ]
});
