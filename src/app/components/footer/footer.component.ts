import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  ProjectName = "Smart Attendance System";
  currentYear: number = new Date().getFullYear();

  Details = [
    {
      Name: 'Roshit',
      URL: 'https://www.linkedin.com/in/yernagula-roshit',
      Div: "||"
    },
    {
      Name: 'Manikanta',
      URL: 'https://www.linkedin.com/in/manikanta',
    }
  ]
}
