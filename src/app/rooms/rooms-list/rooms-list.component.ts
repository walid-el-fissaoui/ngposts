import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import {RoomList} from "../rooms";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnDestroy {

  @Input() rooms : Array<RoomList> = [];
  @Input() title! : String;
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) : void {
    console.log(changes);
    if(changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy() {
    console.log("component destroyed");
  }

}
