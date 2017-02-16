import { Component, OnInit, Input, trigger, state, animate, transition, style } from '@angular/core';

const TRANSITION_LENGTH = 0.35;

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('visibility', [
      state('shown', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('* => *', animate(`${TRANSITION_LENGTH}s`))
    ])
  ]
})
export class DropdownComponent implements OnInit {


  @Input() dropdownTriggerText;
  @Input() dropdownHeaderText;
  @Input() dropdownItemArray;

  visibility: 'shown'|'hidden' = 'hidden';

  constructor() {
  }

  ngOnInit() {
  }

  onTriggerTextClick() {
    this.visibility = this.visibility === 'shown' ? 'hidden' : 'shown';
  }

  hideDropdown(){
    this.visibility = 'hidden';
  }
}
