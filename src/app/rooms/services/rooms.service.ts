import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { RoomList } from '../rooms';
import { shareReplay } from 'rxjs';

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

  getPosts$ = this.http.get<RoomList[]>('/api/v1/posts').pipe(
    shareReplay(1)
  )

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

  deletePost(id: number) {
    return this.http.delete<RoomList[]>(`api/v1/posts/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true
      }
    );
    return this.http.request(request);
  }
}