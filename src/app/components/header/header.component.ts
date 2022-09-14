import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  activePage: string = 'contact';
  ngOnInit(): void {
  }

  changePage(page: string): void {
    this.activePage = page;
    /*working with router*/
  }

  mobileMenuActive: boolean = false;
  openMobileMenu(){
    this.mobileMenuActive = true;
  }
  closeMobileMenu(){
    this.mobileMenuActive = false;
  }
}
