import { Component } from '@angular/core';

@Component({
  selector: 'app-face-data',
  templateUrl: './face-data.component.html',
  styleUrls: ['./face-data.component.css']
})
export class FaceDataComponent {
  uploadFaceData(event: any): void {
    const file = event.target.files[0];
    if (file) {
      alert(`Uploading ${file.name}...`);
    }
  }
}
