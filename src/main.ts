import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './app/home/home.component';
// import { SobreNosComponent } from './app/sobre-nos/sobre-nos.component';
// import { MissaoValoresComponent } from './app/missao-valores/missao-valores.component';
// import { NossoAplicativoComponent } from './app/nosso-aplicativo/nosso-aplicativo.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      // { path: 'sobre-nos', component: SobreNosComponent },
      // { path: 'missao-valores', component: MissaoValoresComponent },
      // { path: 'nosso-aplicativo', component: NossoAplicativoComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
});
