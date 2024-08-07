import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { DroupDirective } from '../droup.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DroupDirective, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
}
