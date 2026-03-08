import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  header: object = {
    headers: {
      'Authorization ': `Bearer ${localStorage.getItem('socialToken')} `,
    },
  };
  private readonly httpClient = inject(HttpClient);
  getAllposts(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/posts', this.header);
  }
  createPosts(data: object): Observable<any> {
    return this.httpClient.post(environment.baseUrl + '/posts', data, this.header);
  }
  getsinglePost(postId: string): Observable<any> {
    return this.httpClient.get(environment.baseUrl + `/posts/${postId}`, this.header);
  }
  deletePosts(postId: string): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + `/posts/${postId}`);
  }
}
