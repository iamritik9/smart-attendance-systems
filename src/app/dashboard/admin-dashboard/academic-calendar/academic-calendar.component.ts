import { Component } from '@angular/core';

interface AcademicEvent {
  date: string;
  event: string;
}

@Component({
  selector: 'app-academic-calendar',
  templateUrl: './academic-calendar.component.html',
  styleUrls: ['./academic-calendar.component.css']
})
export class AcademicCalendarComponent {
  events: AcademicEvent[] = [
    { date: '2025-04-10', event: 'Mid-Semester Exams' },
    { date: '2025-05-20', event: 'Final Exams' },
    { date: '2025-06-15', event: 'Semester Break' }
  ];
}
