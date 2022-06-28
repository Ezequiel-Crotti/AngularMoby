import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";
import { PostComentarioComponent } from './postComentario/post-comentario/post-comentario.component';
import { NuevoComentarioComponent } from './nuevo-comentario/nuevo-comentario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostdetailComponent,
    LoginComponent,
    HeaderComponent,
    ErrorComponent,
    PostComentarioComponent,
    NuevoComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
