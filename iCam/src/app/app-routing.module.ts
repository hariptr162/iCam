import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { VideosComponent} from './videos/videos.component';
import { PhotoComponent } from './photo/photo.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
      path: "",
      component: HomeComponent
  },
  {
      path: "home",
      component: HomeComponent
  },
  {
      path: "photos",
      component: PhotoComponent
  },
  {
      path: "videos",
      component: VideosComponent
  },
  {
      path: "about",
      component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,

  ]
})
export class AppRoutingModule { }
