import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {

  constructor( private PostService: PostService) { }

  ngOnInit(): void {
  }

  get id(){
    return this.PostService.id;
  }

  get resulDetalleTitulo(){
    return this.PostService.postDetalleResul[0].title!;
  }

  get resulDetalleBody(){
    return this.PostService.postDetalleResul[0].body;
  }

  get resulComentPost(){
    return this.PostService.postComentResult;
  }

  fecha: string = "";
  receiveMessage($event: any) {
    this.fecha = $event;
    //console.log(this.fecha);
  }
}

