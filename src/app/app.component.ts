import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dropdownTriggerText = 'Lorem Ipsum';
  dropdownHeaderText = 'Add New Item';
  dropdownItemArray = ['Lorem ipsum', 'Dolor sit amet', 'Consectetur', 'Adipiscing elit'];
}
