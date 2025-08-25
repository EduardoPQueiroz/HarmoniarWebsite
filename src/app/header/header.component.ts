import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone:true,
  imports:[RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isMenuOpen = false;

b="";

  toggleMenu() {
    console.log("socorroo");
    this.isMenuOpen=!this.isMenuOpen;
    if(this.isMenuOpen==true){
      this.b="mobile-menu";
    }
    else{
      this.b="";
    }
  }
}
