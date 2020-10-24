# semana11_projetoRevisaoApi

### Projeto de revisão

Que tal montarmos nossa própria playlist de músicas? Na nossa playlist poderemos favoritar nossas músicas e ver quais artistas tocam a música.

#### Contratos que deverão ser entregues

| Verbo        | Recurso                  | Descrição                              |
| ------------ | ------------------------ | -------------------------------------- |
| GET          | `/musics`                | Retornar todas as músicas              |
| GET          | `/musics/:id`            | Retornar apenas uma música específica  |
| POST         | `/musics`                | Cadastrar nova música                  |
| PUT          | `/musics/:id`            | Atualizar uma música específica        |
| DELETE       | `/musics/:id`            | Deletar uma música específica          |
| PATCH        | `/musics/:id/favorited`  | Favoritar/desfavoritar música          |

---

#### Contratos para ir ao infinito e além

- [ ] Criar uma rota com filtro, para mostrar somente músicas da Janet jackson.
- [ ] Mostrar somente músicas mais novas, lançadas depois de 2000.

---
