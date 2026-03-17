// =============================================================
// data/database.js — Banco de Dados em Memória
// =============================================================
// O que é isso?
//   Em vez de usar um banco de dados real (como MySQL ou MongoDB),
//   guardamos os dados aqui mesmo, dentro de arrays do JavaScript.
//   Isso funciona enquanto o servidor  stá ligado.
//   Quando o servidor reinicia, os dados voltam para o estado inicial.
//
// Por que usar isso nas aulas?
//   Simplifica o aprendizado! Não precisamos instalar e configurar
//   um banco de dados externo. O foco é aprender a API e os Middlewares.
// =============================================================

// ─── Tabela de Categorias ─────────────────────────────────────
// Cada categoria agrupa produtos relacionados no cardápio.
let categorias = [
    { id: 1, nome: 'Pizzas'  },
    { id: 2, nome: 'Bebidas' },
    { id: 3, nome: 'Sobremesas' }
];

// ─── Tabela de Produtos ───────────────────────────────────────
// Cada produto tem um ID único, pertence a uma categoria (categoriaId),
// e possui nome, descrição, preço e o nome do arquivo de imagem.
let produtos = [
    {
        id: 1,
        categoriaId: 1,
        nome: 'As mais pedidas',
        descricao: 'Calabresa, Mussarela, Portuguesa, Frango com Catupity, Marguerita',
        preco: 65.70,
        imagem: <img src="./img/pizza.png"></img>
    },
    {
        id: 2,
        categoriaId: 2,
        nome: 'Pizzas Doces',
        descricao: 'Chocolate com morango, Brigadeiro, Romeu e Julieta, Banana com Nutella/canela.',
        preco: 70.00,
        imagem: 'temaki-fila.png'
    }
    ,{
        id: 3,
        categoriaId: 3,
        nome: 'Bebidas',
        descricao: 'Lata 350ml (Coca-Cola, Guaraná, Sprite).',
        preco: 7.00,
        imagem: 'temaki-fila.png'
    }
];

// ─── Exportação dos dados ─────────────────────────────────────
// Exportamos as duas variáveis num único objeto para que outros
// arquivos (como as rotas) possam importar e usar esses dados.
module.exports = { categorias, produtos };
