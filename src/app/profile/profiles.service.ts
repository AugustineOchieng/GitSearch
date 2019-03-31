import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private username: string;
  private clientid = '';
  private clientsecret = '';

  constructor() {
    this.username = 'augustineochieng';
  }
  getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      .map(res => res.json());
  }

  // getProfileRepos() {
  //   return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  //     .map(res => res.json());
  // }

  updateProfile(username: string) {
    this.username = username;
  }
}
