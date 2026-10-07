# Olhar com afeto

Portfólio responsivo em HTML, CSS e JavaScript, sem dependências de execução.

Abra `dist/index.html` no navegador para visualizar. As fontes do Google Fonts são opcionais: o site usa fontes alternativas quando estiver offline.

## Personalização

- Troque “seu nome” e os textos de apresentação em `dist/index.html`.
- Edite o array `projects` em `dist/script.js` para trocar os títulos, categorias e descrições.
- Salve as fotos e vídeos em `dist/assets/` e preencha `media` com o caminho relativo, por exemplo `assets/retrato.jpg`. Use `type: 'image'` ou `type: 'video'`. Vídeos abrem com controles no detalhe do projeto.
- Os retratos, fotos da abertura e imagens do caderno são espaços em branco em `index.html`. Substitua o conteúdo da respectiva `.blank` por uma imagem com `width:100%;height:100%;object-fit:cover` e um texto alternativo.
- As cores ficam no bloco `:root` em `dist/styles.css`.

Os títulos dos projetos e a biografia são exemplos editáveis. O site não inclui painel de administração ou envio de arquivos; as mídias são adicionadas no código.
