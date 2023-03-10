import { HttpEventType } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren,  } from '@angular/core';
import { Observable } from 'rxjs';
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

  totalBytes = 0;

  rooms: Room = {
    availableRooms: 0
  }

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  })

  // @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log("request has been made");
          break;
        case HttpEventType.ResponseHeader:
          console.log("request success");
          break;
        case HttpEventType.DownloadProgress:
          this.totalBytes += event.loaded;
          break;
        case HttpEventType.Response:
          console.log(event.body);
          break;
      }
    })
    this.stream.subscribe((data) => {
      console.log(data);      
    })
    this.roomsService.getPosts$.subscribe(
      rooms => {this.roomsList = rooms}
    );
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
    const post: RoomList = {
      title: "added room",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quis reiciendis debitis, rem dolor non. Repellendus quisquam fugiat quaerat ex, nisi labore modi minus eaque nihil sed deleniti, at dolorum a minima necessitatibus est non vitae.",
      created_at: new Date("11-Nov-2022"),
    } 
    // this.roomsList.push(room);
    this.roomsList = [...this.roomsList,post];
    this.roomsService.addPost(post).subscribe((data) => {
      this.roomsList = data;
    })
  }

  editPost() {
    const post: RoomList = {
      id: 2,
      title: "edited",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quis reiciendis debitis, rem dolor non. Repellendus quisquam fugiat quaerat ex, nisi labore modi minus eaque nihil sed deleniti, at dolorum a minima necessitatibus est non vitae.",
      created_at: new Date("11-Nov-2022"),
    }
    this.roomsService.editPost(post).subscribe((data) => {
      this.roomsList = data;
    })
  }

  deletePost() {
    this.roomsService.deletePost(2).subscribe((data) => {
      this.roomsList = data;
    })
  }

}
