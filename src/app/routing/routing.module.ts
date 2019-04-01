import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from '../search/search.component';
const routes: Routes = [
  { path: "search", component: SearchComponent },
  // { path: "about", component: AboutComponent },
  // { path: "", redirectTo: "/goals", pathMatch: "full" },
  // { path: '**', component: NotFoundComponent }
]


  

@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
