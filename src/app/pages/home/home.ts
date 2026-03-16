import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PRODUTOS, Produto } from '../../data/produtos.data';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  destaques: Produto[] = PRODUTOS.filter(p => p.destaque);

  calcDesconto(preco: number, precoOriginal: number): number {
    return Math.round((1 - preco / precoOriginal) * 100);
  }
}
