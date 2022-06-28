import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { PostComentResponse } from '../interface/post.interface';

@Component({
  selector: 'app-nuevo-comentario',
  templateUrl: './nuevo-comentario.component.html',
  styleUrls: ['./nuevo-comentario.component.css']
})
export class NuevoComentarioComponent implements OnInit {

  public nombre: string = "";
  public email: string="";
  public comentario: string = "";
  constructor(private postServicio: PostService) { }

  ngOnInit( ): void {
  }

  resultado!: string;

  formularioComentario= new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    comentario: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

  submit() {
    if (this.formularioComentario.valid){
      this.resultado = "Todos los datos son válidos";
      let nc: PostComentResponse = { 
        postId: this.postServicio.id,
        id: this.postServicio.postComentResult.length +1,
        name: this.nombre,
        email: this.email,
        body: this.comentario}
      this.postServicio.postComentResult.push(nc);
      this.nombre = "";
      this.email = "";
      this.comentario = "";
    }
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}
