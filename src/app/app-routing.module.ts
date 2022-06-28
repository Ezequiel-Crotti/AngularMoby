import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';



const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post' , component: PostdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
