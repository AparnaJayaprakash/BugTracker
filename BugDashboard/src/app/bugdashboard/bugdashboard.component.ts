import { Component } from '@angular/core';

@Component({
  selector: 'app-bugdashboard',
  templateUrl: './bugdashboard.component.html',
  styleUrls: ['./bugdashboard.component.css']
})
export class BugdashboardComponent {
  bugs = [
    { id: 1, title: 'Bug 1', status: 'Open' },
    { id: 2, title: 'Bug 2', status: 'Closed' },
    { id: 3, title: 'Bug 3', status: 'Open' },
    // Add more bug objects as needed
  ];

}
