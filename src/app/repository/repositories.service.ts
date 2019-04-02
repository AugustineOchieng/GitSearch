import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';
import { Repo } from '../repo';
import { Repository } from '../repository';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  user: User;
  repo: Repo[];
  public username: string;
  
  constructor(public http: HttpClient) {
    this.user = new User('', '', '', '', '', '', 0, 0, 0, '', '', '');
    this.repo = [];
    this.username = "AugustineOchieng";
  }

 
  findInfo() {

    interface APInfo {
      name: string;
      html_url: string;
      description: string;

    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<APInfo[]>(environment.apiUrl + this.username + "/repos" + environment.access_token).toPromise().then(response => {

        response.forEach(repo => {
          this.repo.push(new Repo(repo.name, repo.html_url, repo.description))
        });

        
        resolve()
      }, error => {
        
        reject(error)
      })
    })
    return promise
  }

  update(username: string) {
    this.username = username;
  }
}