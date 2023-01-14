import { Component, OnInit } from '@angular/core';
import {rooms} from "./rooms";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = "walid hotel";
  numberOfRooms = 10;
  hideRooms = false;

  rooms : rooms = {
    availableRooms: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
