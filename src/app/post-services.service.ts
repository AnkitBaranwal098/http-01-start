import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {

  constructor(private http: HttpClient) { }

  createAndSendPost(title: string, content: string) {

    let postData = { title: title, content: content }
    this.http.post('https://ng-complete-guide-b5e4c-default-rtdb.firebaseio.com/posts.json', postData).subscribe((responseData) => {
      console.log(responseData)
    })
  }

  fetchAllPosts() {
    return this.http.get('https://ng-complete-guide-b5e4c-default-rtdb.firebaseio.com/posts.json').pipe(map(responseData => {
      let postsArray = []

      for (let key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key })
        }
      }
      return postsArray
    })
    )
  }
}
