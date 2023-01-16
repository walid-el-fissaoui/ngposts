import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from "./rooms";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = "walid hotel";
  numberOfRooms = 10;
  hideRooms = false;

  // rooms : Room = {};

  roomsList: Array<RoomList> = [
    {
      roomType: "deluxe room",
      price: 100,
      checkInDate: new Date("11-Nov-2022"),
      checkOutDate: new Date("13-Nov-2022")
    },
    {
      roomType: "deluxe room",
      price: 200,
      checkInDate: new Date("11-Nov-2022"),
      checkOutDate: new Date("13-Nov-2022")
    },
    {
      roomType: "deluxe room",
      price: 500,
      checkInDate: new Date("11-Nov-2022"),
      checkOutDate: new Date("13-Nov-2022")
    }
  ];

  rooms: Room = {
    availableRooms: this.roomsList.length
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
