import { Component } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent {
  timetable = [
    { day: 'Monday', slot1: 'Math', slot2: 'Physics', slot3: 'CS' },
    { day: 'Tuesday', slot1: 'Chemistry', slot2: 'Math', slot3: 'English' },
  ];
}
