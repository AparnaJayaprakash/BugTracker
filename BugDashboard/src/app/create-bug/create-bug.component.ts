import { Component } from '@angular/core';
import { Bug } from '../model/bug';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent {

  
  bug: Bug = new Bug();

  createBug() {
    // Logic to create the bug
    console.log(this.bug);
    // Reset the form
    this.bug = new Bug();
  }

}
