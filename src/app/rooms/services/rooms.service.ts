import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomsList: RoomList[] = [
    {
      title: "deluxe room",
      description: "100",
      created_at: new Date("11-Nov-2022"),
    },
    {
      title: "deluxe room",
      description: "200",
      created_at: new Date("11-Nov-2022"),
    },
    {
      title: "deluxe room",
      description: "500",
      created_at: new Date("11-Nov-2022"),
    }
  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig, private http: HttpClient) {
    console.log("service has been intialized " + config.apiEndpoint);
  }

  getPosts() {
    return this.http.get<RoomList[]>('/api/v1/posts');
  }

  addPost(post: RoomList) {
    return this.http.post<RoomList[]>('/api/v1/posts',post);
  }

  editPost(post: RoomList) {
    return this.http.put<RoomList[]>(`/api/v1/posts/${post.id}`,post);
  }

}