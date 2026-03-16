import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Cliente {
  id: number;
  nome: string;
  email: string;
  cidade: string;
  compras: number;
  totalGasto: number;
  ativo: boolean;
}

@Component({
  selector: 'app-admin-clientes',
  imports: [CommonModule],
  templateUrl: './admin-clientes.html',
  styleUrl: './admin-clientes.css',
})
export class AdminClientes {
  clientes: Cliente[] = [
    { id: 1, nome: 'Ana Clara Silva', email: 'ana.silva@email.com', cidade: 'São Paulo, SP', compras: 12, totalGasto: 1540.80, ativo: true },
    { id: 2, nome: 'Carlos Eduardo Mendes', email: 'carlos.mendes@email.com', cidade: 'Rio de Janeiro, RJ', compras: 7, totalGasto: 879.30, ativo: true },
    { id: 3, nome: 'Mariana Costa', email: 'mariana.costa@email.com', cidade: 'Curitiba, PR', compras: 5, totalGasto: 654.50, ativo: false },
    { id: 4, nome: 'Pedro Luiz Alves', email: 'pedro.alves@email.com', cidade: 'Belo Horizonte, MG', compras: 9, totalGasto: 1120.40, ativo: true },
    { id: 5, nome: 'Juliana Ferreira', email: 'ju.ferreira@email.com', cidade: 'Porto Alegre, RS', compras: 3, totalGasto: 329.70, ativo: true },
    { id: 6, nome: 'Roberto Nascimento', email: 'roberto.n@email.com', cidade: 'Salvador, BA', compras: 6, totalGasto: 799.60, ativo: true },
    { id: 7, nome: 'Fernanda Lima', email: 'fernanda.lima@email.com', cidade: 'Recife, PE', compras: 2, totalGasto: 179.90, ativo: false },
    { id: 8, nome: 'Tiago Oliveira', email: 'tiago.o@email.com', cidade: 'Goiânia, GO', compras: 4, totalGasto: 449.60, ativo: true },
  ];
}
