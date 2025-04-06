import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule for ngModel
import { CommonModule } from '@angular/common';

interface AttendanceRecord {
  studentId: string;
  studentName: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-manage-attendance',
  standalone: true,
  imports: [CommonModule, FormsModule],  // ✅ Ensure FormsModule is imported
  templateUrl: './manage-attendance.component.html',
  styleUrls: ['./manage-attendance.component.css']
})
export class ManageAttendanceComponent {
  searchTerm: string = '';  // ✅ Fix: Initialize search term for filtering

  attendanceRecords: AttendanceRecord[] = [
    { studentId: 'S101', studentName: 'John Doe', date: '2025-03-23', status: 'Present' },
    { studentId: 'S102', studentName: 'Jane Smith', date: '2025-03-23', status: 'Absent' },
    { studentId: 'S103', studentName: 'Mike Johnson', date: '2025-03-23', status: 'Present' },
    { studentId: 'S104', studentName: 'Sarah Brown', date: '2025-03-23', status: 'Present' },
    { studentId: 'S105', studentName: 'Chris Evans', date: '2025-03-23', status: 'Absent' }
  ];

  filteredAttendance: AttendanceRecord[] = [...this.attendanceRecords]; // ✅ Fix: Initialize filtered records

  // ✅ Fix: Add method to filter attendance based on search input
  filterAttendance(): void {
    this.filteredAttendance = this.attendanceRecords.filter(record =>
      record.studentName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      record.studentId.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.currentPage = 1;  // Reset pagination when filtering
    this.updatePagination();
  }

  // ✅ Fix: Implement updating attendance status
  updateStatus(record: AttendanceRecord, event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      record.status = target.value;
    }
  }

  // ✅ Pagination Properties
  currentPage: number = 1;
  recordsPerPage: number = 3;
  paginatedAttendance: AttendanceRecord[] = [];

  // ✅ Fix: Calculate total pages dynamically
  get totalPages(): number {
    return Math.ceil(this.filteredAttendance.length / this.recordsPerPage);
  }

  // ✅ Fix: Get total pages as an array for pagination
  get totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // ✅ Fix: Pagination function
  updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.recordsPerPage;
    const endIndex = startIndex + this.recordsPerPage;
    this.paginatedAttendance = this.filteredAttendance.slice(startIndex, endIndex);
  }

  // ✅ Fix: Change page function
  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  // ✅ Call this function initially to load the first page
  constructor() {
    this.updatePagination();
  }
}
