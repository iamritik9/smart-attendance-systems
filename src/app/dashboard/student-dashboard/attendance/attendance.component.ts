import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  attendanceRecords = [
    { date: '2025-03-01', status: 'Present' },
    { date: '2025-03-02', status: 'Absent' },
    { date: '2025-03-03', status: 'Present' },
    { date: '2025-03-04', status: 'Present' },
  ];
  attendancePercentage: number = 75;

  ngOnInit(): void {
    this.calculateAttendance();
  }

  calculateAttendance() {
    const totalDays = this.attendanceRecords.length;
    const presentDays = this.attendanceRecords.filter(r => r.status === 'Present').length;
    this.attendancePercentage = Math.round((presentDays / totalDays) * 100);
  }
}
