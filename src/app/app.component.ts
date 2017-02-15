import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dropdownModel= [
    {
      dropdownTriggerText: 'Lorem Ipsum',
      dropdownHeaderText: 'Add New Item',
      dropdownItemArray: ['item1', 'item2', 'item3']
    }
  ]

}
