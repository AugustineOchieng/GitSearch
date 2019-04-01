// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProfilesService {
//   private username: string;
//   private clientid = '';
//   private clientsecret = '';

//   constructor() {
//     this.username = 'augustineochieng';
//   }
//   // getProfileInfo() {
//   //   return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
//   //     .map(res => res.json());
//   // }

//   // getProfileRepos() {
//   //   return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
//   //     .map(res => res.json());
//   // }

//   updateProfile(username: string) {
//     this.username = username;
//   }
// }
// import { Injectable } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
// import { map } from "rxjs/operators";


// import 'rxjs/add/operator/map';

// @Injectable()
// export class ProfileService {
//   private username: string;

//   private clientid = 'ec51023e47694c2cb4a9';

//   private clientsecret = '2eb08d690c48951f82d92bb1f67ff5d6a165591b';

//   constructor(private http: HttpClient) {
//     this.username = 'bertocarl';
//   }

//   getProfileInfo() {
//     return this.http
//       .get(
//         'https://api.github.com/users/' +
//           this.username +
//           '?client_id=' +
//           this.clientid +
//           '&client_secret=' +
//           this.clientsecret
//       )
//       .pipe(map(res => res.json()));
//       // .map(res => res.json());
//   }

//   getProfileRepos() {
//     return this.http
//       .get(
//         'https://api.github.com/users/' +
//           this.username +
//           '/repos?client_id=' +
//           this.clientid +
//           '&client_secret=' +
//           this.clientsecret
//       )

//       // .map(res => res.json());
//     .pipe(map(res => res.json()));

//   }

//   updateProfile(username: string) {
//     this.username = username;
//   }
// }
