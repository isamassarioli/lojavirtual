export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  precoOriginal?: number;
  categoria: string;
  tamanhos: string[];
  cores: string[];
  destaque: boolean;
  icone: string;
  gradiente: string;
}

export const CATEGORIAS = ['Camisetas', 'Calças', 'Vestidos', 'Jaquetas', 'Moletons', 'Shorts', 'Blazers', 'Conjuntos'];

export const PRODUTOS: Produto[] = [
  {
    id: 1,
    nome: 'Camiseta Oversized Premium',
    descricao: 'Confeccionada em algodão premium 100%, esta camiseta oversized oferece conforto incomparável para o dia a dia. O caimento relaxado é tendência mundial e combina com qualquer look casual, desde jeans até saias midi. A malha de alta qualidade garante durabilidade e conforto em todas as estações.',
    preco: 89.90,
    precoOriginal: 119.90,
    categoria: 'Camisetas',
    tamanhos: ['P', 'M', 'G', 'GG', 'XGG'],
    cores: ['Preto', 'Branco', 'Cinza Mescla'],
    destaque: true,
    icone: '👕',
    gradiente: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    nome: 'Calça Mom Jeans Azul',
    descricao: 'A calça mom jeans voltou com tudo! Este modelo em denim de alta qualidade tem cintura alta, caimento folgado nos quadris e afunilado nos tornozelos, criando uma silhueta moderna e feminina. Versátil, combina com cropped, camisetas e blusinhas para qualquer ocasião.',
    preco: 149.90,
    categoria: 'Calças',
    tamanhos: ['34', '36', '38', '40', '42', '44'],
    cores: ['Azul Claro', 'Azul Escuro', 'Delavê'],
    destaque: true,
    icone: '👖',
    gradiente: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 3,
    nome: 'Vestido Midi Floral',
    descricao: 'Elegância e leveza em cada detalhe. Este vestido midi em viscose floral é ideal para ocasiões especiais, almoços e passeios. O tecido leve cai perfeitamente no corpo e a estampa floral delicada adiciona um toque romântico ao visual. Acompanha forro interno para maior conforto.',
    preco: 179.90,
    precoOriginal: 229.90,
    categoria: 'Vestidos',
    tamanhos: ['P', 'M', 'G', 'GG'],
    cores: ['Rosa Floral', 'Azul Floral', 'Verde Floral'],
    destaque: true,
    icone: '👗',
    gradiente: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 4,
    nome: 'Jaqueta Corta-Vento Bicolor',
    descricao: 'Proteção e estilo andam juntos nesta jaqueta corta-vento. Feita em nylon de alta performance, é impermeável e resistente ao vento. O design bicolor moderno garante destaque em qualquer look urbano. Possui capuz dobrável e bolsos com zíper laterais.',
    preco: 219.90,
    categoria: 'Jaquetas',
    tamanhos: ['P', 'M', 'G', 'GG'],
    cores: ['Preto/Branco', 'Azul/Amarelo', 'Verde/Preto'],
    destaque: false,
    icone: '🧥',
    gradiente: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    id: 5,
    nome: 'Moletom Canguru Oversized',
    descricao: 'O moletom canguru perfeito para os dias mais frescos. Confeccionado em fleece soft de alta qualidade, este moletom oversized proporciona calor e conforto máximos. O capuz espaçoso e o bolso frontal canguru são detalhes funcionais que completam o visual street.',
    preco: 139.90,
    precoOriginal: 169.90,
    categoria: 'Moletons',
    tamanhos: ['P', 'M', 'G', 'GG', 'XGG'],
    cores: ['Cinza Mescla', 'Preto', 'Creme', 'Rosa'],
    destaque: true,
    icone: '🧥',
    gradiente: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
  },
  {
    id: 6,
    nome: 'Shorts Jeans Destroyed',
    descricao: 'O short jeans destroyed é um clássico que nunca sai de moda. Com lavagem especial e detalhes de puído nas bordas, este modelo oferece um visual despojado e cheio de personalidade. Cintura média e corte reto para máximo conforto nos dias quentes.',
    preco: 99.90,
    categoria: 'Shorts',
    tamanhos: ['34', '36', '38', '40', '42'],
    cores: ['Azul Claro', 'Azul Médio'],
    destaque: false,
    icone: '🩳',
    gradiente: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  },
  {
    id: 7,
    nome: 'Blazer Alfaiataria Bege',
    descricao: 'Sofisticação e modernidade se encontram neste blazer de alfaiataria. Ideal para eventos, reuniões e looks de trabalho mais ousados, ele eleva qualquer combinação. O tecido de alta gramatura garante caimento impecável e a cor bege neutra facilita as combinações com qualquer peça.',
    preco: 259.90,
    categoria: 'Blazers',
    tamanhos: ['P', 'M', 'G', 'GG'],
    cores: ['Bege', 'Preto', 'Branco Off'],
    destaque: true,
    icone: '🥼',
    gradiente: 'linear-gradient(135deg, #d4a96a 0%, #c8813a 100%)',
  },
  {
    id: 8,
    nome: 'Conjunto Fitness Rosa',
    descricao: 'Performance e estilo em um conjunto completo para treino. O top e a calça legging em tecido compressivo com tecnologia dry-fit mantêm o corpo seco durante os exercícios. O conjunto rosa vibrante garante que você se destaque na academia ou na corrida.',
    preco: 129.90,
    precoOriginal: 159.90,
    categoria: 'Conjuntos',
    tamanhos: ['P', 'M', 'G', 'GG'],
    cores: ['Rosa Neon', 'Roxo', 'Verde Lima'],
    destaque: false,
    icone: '🩱',
    gradiente: 'linear-gradient(135deg, #fd79a8 0%, #e17055 100%)',
  },
];
