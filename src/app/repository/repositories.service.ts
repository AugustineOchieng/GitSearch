import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repository } from '../repository';


@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  user: User;
  repo: Repository;
  public username: string;
  

 

  constructor(public http: HttpClient) {
    this.user = new User("","","","","","","0","0","","","");
    this.repo = new Repository();
    this.username = "AugustineOchieng"
  }
  getInfo() {
    interface UserInfo{
      login: string;
      html_url: any;
      avatar_url: string;
      public_repos: any;
      repo_url: any;
      bio: any;
      created_at: number, public following: number, public followers: number, public location: string, hireable: string
    }
  }

   getRepositoryRepos() {
     return this.http.get<Userinfo>()
       .map(res => res.json());
   }
   }

