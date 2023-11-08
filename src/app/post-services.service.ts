import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.get('https://ng-complete-guide-b5e4c-default-rtdb.firebaseio.com/posts.json',{
      headers: new HttpHeaders({
        'custom-headers': 'Hello World!'
      })
    })
    .pipe(map(responseData => {
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

// Any http methods of HttpClient module has an extra argument as the last argument which is an object where you can configure that requests.
// Inside that object we have a 'headers' key that takes an object which allows us to set headers you want to RTCRtpSender.To be precise it's an HtppHeaders imported from '@angular/common/http'

// {
//   headers: new HttpHeaders({
//     'Custom-Headers': 'Hello World!'
//   })
// }