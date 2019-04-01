import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';
import { Repository } from '../repository';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  user: User;
  repo: Repository;
  public username: string;


 

  constructor(public http: HttpClient) {
    this.user = new User("", "", "", "", "", "", 0, 0, 0, "", "","");
    this.repo = new Repository();
    this.username = "AugustineOchieng"
  }
  getInfo() {
    interface UserInfo {
      login: string;
      html_url: any;
      avatar_url: string;
      public_repos: any;
      repo_url: any;
      bio: any;
      created_at: number;
      following: number;
      followers: number;
      location: string;
      hireable: string;
    }
  
    let promise = new Promise((resolve, reject) => {
      this.http.get<UserInfo>(environment.apiUrl + this.username + environment.access_token).toPromise().then(response => {
        this.user.login = response.login
        this.user.avatar_url = response.avatar_url
        this.user.public_repos = response.public_repos
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.html_url = response.html_url
        this.user.created_at = response.created_at
        this.user.bio = response.bio
        console.log(this.user);
        resolve()
      }, error => {
        this.user.login = "Error Fetching Data"
        this.user.avatar_url = "Error Fetching Data"
        this.user.public_repos = "Error"
        reject(error)
      })
    })
    return promise
  }
}