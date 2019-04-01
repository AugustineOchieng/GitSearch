import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilesService } from './profile/profiles.service';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { DateCountPipe } from './date-count.pipe';



const routes: Routes = [
  { path: "search", component: SearchComponent }
 
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    DateCountPipe,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgProgressModule,
    NgProgressHttpModule
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
