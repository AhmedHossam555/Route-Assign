import { Component } from '@angular/core';
import { StarComponent } from '../home/star/star.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  mode:boolean = false;
  srcImage: string = '';
  onOpen(imgsrc: string){
    this.srcImage = imgsrc;
    this.mode = true;
  }
  onClose(){
    this.mode = false;
  }
}
