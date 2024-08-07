import { Component, ViewChild } from '@angular/core';
import { StarComponent } from '../home/star/star.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild('f')  form!: NgForm;
  onSubmit(){
    this.form.reset();
  }
}
