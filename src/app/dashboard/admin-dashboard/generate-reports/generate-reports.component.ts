import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent {
  generateReport(format: string): void {
    alert(`Generating ${format} report...`);
    // Logic for exporting attendance data (CSV/PDF)
  }
}
