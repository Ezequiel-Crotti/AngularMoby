import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PostResponse, PostComentResponse } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public postResult: PostResponse[] = [];
  public postDetalleResul: PostResponse[] = [];
  public id: number = 0;
  public postComentResult: PostComentResponse[] = [];
   constructor(private http: HttpClient) { 

     
  }

  BuscarPost(){
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
    .subscribe( (resp: any) => {
      console.log(resp);
    this.postResult = resp.slice(0,10);
    });
  }

  DetallePost( id : number){
    this.id = id;
    const params = new HttpParams()
                    .set('id',id);

    this.http.get<any>(`https://jsonplaceholder.typicode.com/posts`,{params})
    .subscribe( (respDetalle: any) => {
      //console.log(respDetalle);
    this.postDetalleResul = respDetalle;
    });

    //Comentarios del post
    const paramsComent = new HttpParams()
                    .set('postId',id);
    this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${this.id.toString()}/comments`)
    //this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/comments`,{paramsComent})
    .subscribe( (respComent: any) => {
     // console.log(respComent);
    this.postComentResult = respComent;
    });
  }
}
