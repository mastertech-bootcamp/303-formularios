import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menuVisivel = true;
  dados = {titulo: '', conteudo: ''};
  lista = [];

  alternarMenu(){
    if(this.menuVisivel){
      this.menuVisivel = false;
    }else{
      this.menuVisivel = true;
    }
  }

  inserir(){
    this.lista.push(this.dados);
    this.dados = {titulo: '', conteudo: ''};
    console.log(this.lista);
  }
}
