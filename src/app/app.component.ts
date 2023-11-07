import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import {PostServicesService} from './post-services.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private postServices:PostServicesService) { }

  ngOnInit() { 
    // this.fetchPosts();
    this.postServices.fetchAllPosts().subscribe(postsArr=>{
      this.loadedPosts = postsArr
    })
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    // console.log(postData);
    // this.http.post('https://ng-complete-guide-b5e4c-default-rtdb.firebaseio.com/posts.json', postData).subscribe((responseData) => {
    //   console.log(responseData)
    // })

    this.postServices.createAndSendPost(postData.title, postData.content)
  }

  onFetchPosts() {
    // Send Http request
    // this.fetchPosts()
    this.postServices.fetchAllPosts().subscribe(postsArr=>{
      this.loadedPosts = postsArr
    })
  }

  onClearPosts() {
    // Send Http request
  }

  // private fetchPosts(){
  //   this.http.get('https://ng-complete-guide-b5e4c-default-rtdb.firebaseio.com/posts.json')
  //   .pipe(
  //     map(responseData => {
        
  //       const postsArray = [];
  //       for (const key in responseData) {
         
  //         if (responseData.hasOwnProperty(key)) {
  //           postsArray.push({ ...responseData[key], id: key });
  //         }
  //       }
  //       return postsArray;
  //     })
  //   )
  //   .subscribe((posts)=>{
  //     // console.log(posts)
  //     this.loadedPosts = posts;

  //   })
  // }
}

// Now we can starting sending request to our backend server.For that we just need to inject our HttpClient this we import from '@angular/common/http'

// Now with that imported we can use it to send request to post data to the Server.For this we use that injected http service and there we have a couple of methods names similar to http verbs

// this.http.post() the post method takes a couple of arguments.The first argument is the url we want to send the request to.And in the second argument for the post method we pass the request body.We normally send json data when interacting with restful api.Angular's http client takes the javascript object and convert it to json data for us implicitly

// this.http.post('https://ng-complete-guide-b5e4c-default-rtdb.firebaseio.com/posts.json',postData);

// This alone do not works this is because the request is not been sent.Angular heavily uses Observables on purpose.And http requests are also managed by observables because they are perfect use case for observables.We can wrap and subscribe to them to get the response.Angular is smart enough to understand that if we are not subscribing to it then we do not want or need the response so it will not make the request.So the post method will return an observable that wraps our request to get access to the response we need to subscribe to it.

// The HttpClient of Angular will not just give response but even extract data attached from the response