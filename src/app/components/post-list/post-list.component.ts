import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  constructor( private PostService: PostService) { }

  ngOnInit(): void {
    this.PostService.BuscarPost();
  }
  get resultados(){
    return this.PostService.postResult;
  }

  detalle(id: number){
    this.PostService.DetallePost(id);
    //console.log(" detalle " + id);
  }
}
