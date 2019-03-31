import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ProfilesService } from '../profile/profiles.service';
import { RepositoriesService } from '../repository/repositories.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  profile: any[];
  repos: any[];
  username: string;
  constructor(private profileService:ProfilesService, private repositoryService:RepositoriesService) { }
  findProfile() {
    this.profileService.updateProfile(this.username);
    // this.profileService.getProfileInfo().subscribe(profile => { this.findProfile.profile = profile; });
    // this.repositoryService.getRepositoryRepos().subscribe(repos => { this.repos; });
}
  ngOnInit() {
  
  }

}
