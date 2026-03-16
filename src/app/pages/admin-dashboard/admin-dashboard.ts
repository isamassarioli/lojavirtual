import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUTOS, Produto } from '../../data/produtos.data';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  produtos: Produto[] = PRODUTOS;
  totalProdutos: number = PRODUTOS.length;
}
