import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repository } from '../repository';
import { environment } from 'src/environments/environment';
// import { ProfilesService } from '../profile/profiles.service';
import { Http, Headers } from '@angular/http';
import "rxjs/add/operator/map";
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username = 'augustineochieng'
  private client_id = '25f76472cd4dd1b1e162';
  private client_secret = '9895abca1468ba35c5a9b26101aa398d4887ab5f';

  constructor(public http: Http) {
  g"
  }

  // constructor(public http: HttpClient) {
  //   this.user = new User("", "", "", "", "", "", "0", "0", "0", "", "");
  //   this.repo = new Repository();
  //   this.username = "9895abca1468ba35c5a9b26101aa398d4887ab5fAugustineOchieng"
  // }
  // // getInfo() {
  //   interface UserInfo {
  //     login: string;
  //     html_url: any;
  //     avatar_url: string;
  //     public_repos: any;
  //     repo_url: any;
  //     bio: any;
  //     created_at: number;
  //     following: number;
  //     followers: number;
  //     location: string;
  //     hireable: string;
  //   }

  //   let primport { TestBed } from '@angular/core/testing';

  //   import { ProfileService } from './profiles.service';

  //   describe('ProfilesService', () => {
  //     beforeEach(() => TestBed.configureTestingModule({}));

  //     it('should be created', () => {
  //       const service: ProfileService = TestBed.get(ProfileService);
  //       expect(service).toBeTruthy();
  //     });
  //   });
  //   promise = new Promise((resolve, reject) => {
  //     this.http.get<UserInfo>(environment.apiUrl + this.username + "/repos" + environment.access_token).toPromise().then(response => {
  //       this.user.login = response.login;
  //       this.user.html_url = response.html_url;
  //       this.user.avatar_url = response.avatar_url; import { TestBed } from '@angular/core/testing';

  //       import { ProfileService } from './profiles.service';

  //       describe('ProfilesService', () => {
  //         beforeEach(() => TestBed.configureTestingModule({}));

  //         it('should be created', () => {
  //           const service: ProfileService = TestBed.get(ProfileService);
  //           expect(service).toBeTruthy();
  //         });
  //       });

  //       this.user.public_repos = response.public_repos;
  //       this.user.repo_url = response.repo_url;
  //       this.user.bio = response.bio;
  //       this.user.created_at = response.created_at;
  //       this.user.following = response.following;
  //       this.user.followers = response.followers;
  //       this.user.location = response.location;
  //       this.user.hireable = response.hireable;


  //       console.log(response);
  //       resolve()
  //     }, error => {
  //       this.user.login = "Error Fetching Data"
  //       this.user.html_url = "Error Fetching Data"
  //       this.user.avatar_url = "Error Fetching Data"
  //       this.user.public_repos = "Error Fetching Data"
  //       this.user.repo_url = "Error Fetching Data"
  //       this.user.bio = "Error Fetching Data"
  //       this.user.created_at = 0
  //       this.user.following = 0
  //       this.user.followers = 0
  //       this.user.location = "Error Fetching Data"
  //       this.user.hireable = "Error Fetching Data"
  //       reject(error)
  //     })
  //   })
  //   return Promise
  // }

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
}
