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
  currentYear: number = new Date().getFullYear();;
  projectName: string = "Smart Attendance System";

  personDetails = [
    {
      Name: 'Roshit',
      URL: 'https://www.linkedin.com/in/yernagula-roshit',
      Div: '||',
    },
    {
      Name: 'Manikanta',
      URL: 'https://www.linkedin.com/in/palavalasa-manikanta-varaprasad-0b430a2a3/',
      Div: '||',
    },
    {
      Name: 'Ritik',
      URL: 'https://www.linkedin.com/in/ritik-chandra-mishra/',
      Div: '||',
    },
    {
      Name: 'Silpi',
      URL: 'https://www.linkedin.com/in/silpi-dash-660976291/',
      Div: '||',
    },
    {
      Name: 'Hari',
      URL: 'https://www.linkedin.com/in/kalisiti-srihari-a8184b315/',
      Div: '||',
    },
    {
      Name: 'Tarak',
      URL: 'https://www.linkedin.com/in/barnana-tarakeshwara-rao-b575ba300/',
      Div: '||',
    },
    {
      Name: 'Sankar',
      URL: 'https://www.linkedin.com/in/durgasi-shankar-rao-03a270300/',
      Div: '||',
    },
    {
      Name: 'Chandu',
      URL: 'https://www.linkedin.com/in/barnana-tarakeshwara-rao-b575ba300/',
    }
  ]
}
