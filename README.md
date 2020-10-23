# semana11_projetoRevisaoApi

### Projeto de revisão

Que tal montarmos nossa própria playlist de músicas? Na nossa playlist poderemos favoritar nossas músicas e ver quais artistas tocam a música.
[
    {
        "id": 1,
        "title": "control",
        "duration": "05:53",
        "launchYear": "1986",
        "favorited" : true,
        "artists": "Janet Jackson"       
    },
    {
        "id": 2,
        "title": "scream",
        "duration": "04:48",
        "launchYear": "1995",
        "favorited" : true,
        "artists": ["Michael Jackson, Janet Jackson"]
    },
    {
        "id": 3,
        "title": "All for you",
        "duration": "05:30",
        "launchYear": "2001",
        "favorited" : true,
        "artists": ["Janet Jackson"]
    }
]


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
