# Disclosure

Esse é o repositório do Projeto Front-end do 3º grupo da turma do Alex, formado por Flavio Gimenez, Gabriel Augusto, João Pedro, Kenji Shigaki, Lucas Bueno, Lucas Soares e Vinicius Quirino.

## URL

URL utilizara para as requisições do json-server:

https://projeto-frontend-api.herokuapp.com

### Rotas que não precisam de autorização

## Cadastro

POST /register

Exemplo do body:

```json
{
  "name": "Teste",
  "email": "teste123@mail.com",
  "password": "Teste123@",
  "img": "teste.com",
  "description": "A gente testa tudo",
  "cep": "12345678900",
  "link": "teste.com"
}
```

Exemplo da resposta:

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMTIzQG1haWwuY29tIiwiaWF0IjoxNjY4MDAwMjM1LCJleHAiOjE2NjgwMDM4MzUsInN1YiI6IjEifQ.-KX7ErfosBjxv83zYuyp96MLRT0mTbmFQsTHm7In-Ko",
  "user": {
    "email": "teste123@mail.com",
    "name": "Teste",
    "img": "teste.com",
    "description": "A gente testa tudo",
    "cep": "12345678900",
    "link": "teste.com",
    "id": 1
  }
}
```

Exemplo de erro:

```json
"Email already exists"
```

## Login

POST /login

Exemplo do body:

```json
{
  "email": "teste123@mail.com",
  "password": "Teste123@"
}
```

Exemplo da resposta:

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMTIzQG1haWwuY29tIiwiaWF0IjoxNjY4MDAwNDUxLCJleHAiOjE2NjgwMDQwNTEsInN1YiI6IjEifQ.pWLaN5H8j6cOO_QAtTR00Bev0WjXimUz_FWTYeNIu14",
  "user": {
    "email": "teste123@mail.com",
    "name": "Teste",
    "img": "teste.com",
    "description": "A gente testa tudo",
    "cep": "12345678900",
    "link": "teste.com",
    "id": 1
  }
}
```

Exemplo de erro:

```json
"Incorrect password"
```

### Rotas que precisam de autorização

## Anúncios

# Visualizar anúncios:

GET /announcement?\_expand=user

Exemplo da resposta:

```json
[
  {
    "body": "Teste",
    "type": "imoveis",
    "userId": 1,
    "id": 2,
    "user": {
      "email": "teste123@mail.com",
      "password": "$2a$10$DZXBl31yrlj8tVxpE0vJOubPaYpDDH1e.Ww.wBG2aDPHMtwLe4AFC",
      "name": "Teste",
      "img": "teste.com",
      "description": "A gente testa tudo",
      "cep": "12345678900",
      "link": "teste.com",
      "id": 1
    }
  },
  {
    "body": "Teste1",
    "type": "auto-pecas",
    "userId": 1,
    "id": 3,
    "user": {
      "email": "teste123@mail.com",
      "password": "$2a$10$DZXBl31yrlj8tVxpE0vJOubPaYpDDH1e.Ww.wBG2aDPHMtwLe4AFC",
      "name": "Teste",
      "img": "teste.com",
      "description": "A gente testa tudo",
      "cep": "12345678900",
      "link": "teste.com",
      "id": 1
    }
  }
]
```

# Criar anúncio:

POST /announcement

Exemplo do body:

```json
{
  "body": "Muito bom os testes",
  "type": "finança",
  "userId": 8
}
```

Exemplo da resposta:

```json
{
  "body": "Muito bom os testes",
  "type": "finança",
  "userId": 1,
  "id": 4
}
```

# Deletar anúncio:

DELETE /announcement/${announcementId}

Nâo tem resposta.

## Usuário

# Editar usuário:

PATCH /users/${id}

Exemplo de body:

```json
{
  "name": "Teste12345"
}
```

Exemplo da resposta:

```json
{
  "email": "teste123@mail.com",
  "password": "$2a$10$DZXBl31yrlj8tVxpE0vJOubPaYpDDH1e.Ww.wBG2aDPHMtwLe4AFC",
  "name": "Teste12345",
  "img": "teste.com",
  "description": "A gente testa tudo",
  "cep": "12345678900",
  "link": "teste.com",
  "id": 1
}
```
## Páginas da aplicação

# Página inicial

Está página foi projetada para que o usúario tenha conhecimento sobre o que é a Disclosure

![2022-11-09 (2)](https://user-images.githubusercontent.com/104391972/200872012-f0ecb2ba-d583-493a-85c2-2c35e061e1f6.png)

# Página de Quem somos nós

Está página é uma descrição de todas as informações de como surgiu a disclosure e quem participou do construção da mesma

![2022-11-09 (5)](https://user-images.githubusercontent.com/104391972/200872631-9fbc09aa-f13d-4cfa-9222-a227736ab499.png)

# Página de Contato

Está página foi feita para que pessoas que estiverem com duvidas referente ao site ou serviços, poderam entrar em contato com nossa equipe.

![2022-11-09 (6)](https://user-images.githubusercontent.com/104391972/200872857-2bf239c4-7a7d-4280-9a36-7c45f0e8b38f.png)

# Página de Login

Está página permite que o usuário faça o login para ter acesso a nossa página principal.

![2022-11-09 (9)](https://user-images.githubusercontent.com/104391972/200873217-58f5abb5-dc7f-4ce3-bb7b-c31ce7da0c2a.png)

# Página de Cadasro

Está página permite o cadastro o usuário para ele poder fazer parte da comunidade Disclosure

![2022-11-09 (8)](https://user-images.githubusercontent.com/104391972/200873854-d1dc136b-57a5-488b-aa3c-d8ee7fc398bb.png)

