import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  ProjectName = "Smart Attendance System";
  creatorNames = "Roshit | Manikanta | Ritik | Silpi | Hari | Sankar | Tarak | Chandu"
}
