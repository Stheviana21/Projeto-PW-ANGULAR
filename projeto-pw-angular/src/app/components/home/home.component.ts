import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  musicasData = [
    { name: 'ClickBait', image: 'assets/musicas-dosPredios.jpg' },
    { name: 'Não temos Medo', image: 'assets/musicas-naoTemosMedo.jpeg' },
    { name: 'Mãe Solteira', image: 'assets/musicas-maeSolteira.jpg' },
    { name: 'Deixa eu ver se ta Lisinha', image: 'assets/musicas-deixaEuVer.jpeg' },
    { name: 'Taylor', image: 'assets/musicas-taylor.jpg' },
    { name: 'Three Little Birds', image: 'assets/musicas-bobMarley.jpg' }
  ];

  artistData = [
    { name: 'Henrique & Juliano', image: 'assets/artista-henrique-juliano.jpg' },
    { name: 'Jorge & Mateus', image: 'assets/artista-jorge-mateus.jpg' },
    { name: 'Zé Neto & Cristiano', image: 'assets/artista-ze-neto.jpg' },
    { name: 'Gusttavo Lima', image: 'assets/artista-gusttavo-lima.jpg' },
    { name: 'Luan Santana', image: 'assets/artista-luan-santana.jpg' },
    { name: 'Matheus & Kauan', image: 'assets/artista-mateus-kauan.jpg' }
  ];

  albumsData = [
    { name: 'White Noise (sleep & Relaxation Sounds)', artist: 'Sleepy John', image: 'assets/album-white-noise.jpg' },
    { name: 'O Céu Explica Tudo(Ao Vivo)', artist: 'Henrique & juliano', image: 'assets/album-ceu-explica.jpg' },
    { name: 'Nada como um dia após o outro', artist: 'Racionais', image: 'assets/album-vida-loka.jpg' },
    { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: 'assets/album-hit-me.jpg' },
    { name: 'CAJU', artist: 'Liniker', image: 'assets/album-caju.jpg' },
    { name: 'Escândalo Íntimo', artist: 'Luisa Sonza', image: 'assets/album-escandalo.jpg' }
  ];




};
