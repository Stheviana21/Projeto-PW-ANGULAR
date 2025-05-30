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

  audio = new Audio();
  tocando: boolean = false;

  tocarMusica2(musicaUrl: string) {
    if (!this.audio.paused) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.tocando = false;
    } else {
      this.tocando = true;
      this.audio = new Audio(musicaUrl);
      this.audio.loop = true;
      this.audio.play().catch(error => {
        console.error('Erro ao reproduzir a música:', error);
      });
    };
  };

  tocarMusica() {
    this.audio.play();
  }

  pausarMusica() {
    this.audio.pause();
  }

  musicasData = [
    { name: 'ClickBait', image: 'assets/musicas-dosPredios.jpg', musica: 'assets/audio/VEIGH - Clickbait ft. Niink (Clipe Oficial).mp3' },
    { name: 'Não temos Medo', image: 'assets/musicas-naoTemosMedo.jpeg', musica: 'assets/audio/Tz da Coronel - Não Temos Medo ft. Filipe Ret e Orochi  (Clipe Oficial).mp3' },
    { name: 'Mãe Solteira', image: 'assets/musicas-maeSolteira.jpg', musica: 'assets/audio/MÃE SOLTEIRA - J.Eskine, MC Davi, MC G15, DG e Batidão Stronda (GR6 Explode).mp3' },
    { name: 'Deixa eu ver se ta Lisinha', image: 'assets/musicas-deixaEuVer.jpeg', musica: 'assets/audio/DEIXA EU VER SE TÁ LISINHA - J.Eskine.mp3' },
    { name: 'Taylor', image: 'assets/musicas-taylor.jpg', musica: 'assets/audio/VEIGH - Taylor (Clipe Oficial) [Eu Venci o Mundo].mp3' },
    { name: 'Three Little Birds', image: 'assets/musicas-bobMarley.jpg', musica: 'assets/audio/Bob Marley & The Wailers - Three Little Birds (Official Music Video).mp3' }
  ];

  artistData = [
    { name: 'Henrique & Juliano', image: 'assets/artista-henrique-juliano.jpg', musica: 'assets/audio/Henrique e Juliano - O CÉU EXPLICA TUDO - DVD O Céu Explica Tudo.mp3' },
    { name: 'Jorge & Mateus', image: 'assets/artista-jorge-mateus.jpg', musica: 'assets/audio/Jorge, Mateus - Seu Astral.mp3' },
    { name: 'Zé Neto & Cristiano', image: 'assets/artista-ze-neto.jpg', musica: 'assets/audio/Zé Neto e Cristiano - Seu Polícia (Letra).mp3' },
    { name: 'Gusttavo Lima', image: 'assets/artista-gusttavo-lima.jpg', musica: 'assets/audio/Gusttavo Lima - Inventor Dos Amores (Buteco in Boston).mp3' },
    { name: 'Luan Santana', image: 'assets/artista-luan-santana.jpg', musica: 'assets/audio/Luan Santana - Eu, Você, o Mar e Ela (TIPOGRAFIA).mp3' },
    { name: 'Matheus & Kauan', image: 'assets/artista-mateus-kauan.jpg', musica: 'assets/audio/Matheus & Kauan - Te Assumi Pro Brasil  Ao Vivo.mp3' }
  ];

  albumsData = [
    { name: 'White Noise (sleep & Relaxation Sounds)', artist: 'Sleepy John', image: 'assets/album-white-noise.jpg', musica: '' },
    { name: 'O Céu Explica Tudo(Ao Vivo)', artist: 'Henrique & juliano', image: 'assets/album-ceu-explica.jpg', musica: 'assets/audio/Henrique e Juliano - O CÉU EXPLICA TUDO - DVD O Céu Explica Tudo.mp3' },
    { name: 'Nada como um dia após o outro', artist: 'Racionais', image: 'assets/album-vida-loka.jpg', musica: 'assets/audio/Eu sou 157 - Nada Como Um Dia Após O Outro Dia (Chora Agora).mp3' },
    { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: 'assets/album-hit-me.jpg', musica: 'assets/audio/Billie Eilish - SKINNY (Live Performance from Amazon Music Songline).mp3' },
    { name: 'CAJU', artist: 'Liniker', image: 'assets/album-caju.jpg', musica: 'assets/audio/Liniker - Caju (Letra).mp3' },
    { name: 'Escândalo Íntimo', artist: 'Luisa Sonza', image: 'assets/album-escandalo.jpg', musica: 'assets/audio/Luísa Sonza, KayBlack - Sagrado Profano (Visualizer).mp3' }
  ];
};
