import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {

  @Input() label='';
  @Output() action = new EventEmitter();

  private numberOfClicks = 0;

  constructor() { }

 ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
 }
  handleClick(){
    this.numberOfClicks++;
    this.action.emit(this.numberOfClicks);
  }

}
