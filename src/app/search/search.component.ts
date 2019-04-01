
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProfilesService } from '../profile/profiles.service';
import { RepositoriesService } from '../repository/repositories.service';
import { User } from '../user';

@Component({
  selector: 'app-search',

  templateUrl: './search.component.html',
  providers: [ProfilesService],

  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user: User;

  // repos: any[];

  public username: string;

  constructor(public profileService: ProfilesService) { }

  // findProfile() {
  //   this.profileService.updateProfile(this.username);

  //   this.profileService.getProfileInfo().subscribe(profile => {
  //     this.profile = profile;
  //   });

  // this.profileService.getProfileRepos().subscribe(repos => {
  //   this.repos = repos;
  // });
  
  searcher() {
    this.profileService.update(this.username);
    this.profileService.findInfo();
  }

  ngOnInit() {
    this.profileService.findInfo();
    this.user = this.profileService.user;

  }
}
