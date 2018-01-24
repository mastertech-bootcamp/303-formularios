import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menuVisivel = false;
  dados = {titulo: '', conteudo: ''};

  alternarMenu(){
    if(this.menuVisivel){
      this.menuVisivel = false;
    }else{
      this.menuVisivel = true;
    }
  }
}
