import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren,  } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from "./rooms";
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit,AfterViewInit,AfterViewChecked {

  hotelName = "walid hotel";
  numberOfRooms = 10;
  hideRooms = false;

  // rooms : Room = {};

  roomsList: Array<RoomList> = [];
  selectedRoom! : RoomList;
  title : String = "rooms list";

  rooms: Room = {
    availableRooms: 0
  }

  // @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomsList = this.roomsService.getRooms();
    this.rooms = {
      availableRooms: this.roomsList.length
    }  
  }

  ngAfterViewInit(): void {
    // console.log("header");
    // console.log(this.headerComponent);
    // this.headerComponent.title = "yes again";
    console.log(this.headerChildrenComponent.last.title); 
    
  }

  ngAfterViewChecked() : void {
    this.headerComponent.title = "yes again";
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "the list of rooms";
  }

  selectRoom(room : RoomList) {
    this.selectedRoom = room;
  }
  
  addRoom() {
    const room: RoomList = {
      roomType: "added room",
      price: 200,
      checkInDate: new Date("11-Nov-2022"),
      checkOutDate: new Date("13-Nov-2022")
    }
    // this.roomsList.push(room);
    this.roomsList = [...this.roomsList,room];
  }

}
