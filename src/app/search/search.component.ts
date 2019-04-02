
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProfilesService } from '../profile/profiles.service';
import { RepositoriesService } from '../repository/repositories.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-search',

  templateUrl: './search.component.html',
  providers: [ProfilesService, RepositoriesService],

  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user: User;
  repo: Repo[];

  // repos: any[];

  public username: string;

  constructor(public profileService: ProfilesService, public repositoryService: RepositoriesService) { }

  // findProfile() {
  //   this.profileService.updateProfile(this.username);

  //   this.profileService.getProfileInfo().subscribe(profile => {
  //     this.profile = profile;
  //   });

  // this.profileService.getProfileRepos().subscribe(repos => {
  //   this.repos = repos;#91d370#91d370
  // });
  
  searcher() {
    this.profileService.update(this.username);
    this.profileService.findInfo();
    this.repositoryService.findInfo();
  }

  ngOnInit() {
    this.profileService.findInfo();
    this.user = this.profileService.user;
    this.repositoryService.findInfo();
    this.repo = this.repositoryService.repo;

  }
}


//
