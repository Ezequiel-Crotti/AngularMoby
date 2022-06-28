import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-comentario',
  templateUrl: './post-comentario.component.html',
  styleUrls: ['./post-comentario.component.css']
})
export class PostComentarioComponent implements OnInit {

  constructor( private postService: PostService) { }

  ngOnInit(): void {
  }

  get resulComentPost(){
    return this.postService.postComentResult;
  }

  fechaActual: string = "Hola Mundo!"

  hoy: Date = new Date( Date.now());
  
  @Output() messageEvent = new EventEmitter<string>();
  EnviarFecha(){
    this.messageEvent.emit(this.hoy.toUTCString())
  }

  

  

  
}
