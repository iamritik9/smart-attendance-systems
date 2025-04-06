import { Component } from '@angular/core';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent {
  reportCard = [
    { semester: 'Sem 1', gpa: 8.5 },
    { semester: 'Sem 2', gpa: 9.0 },
  ];
}
