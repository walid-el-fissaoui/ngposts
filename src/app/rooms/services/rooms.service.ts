import { Injectable, Inject } from '@angular/core';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomsList: RoomList[] = [
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
  getRooms() {
    return this.roomsList;
  }

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig) {
    console.log("service has been intialized " + config.apiEndpoint);
  }
}
