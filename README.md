<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="./.github/happy-banner.png" width="250px" />
</h1>

<h4 align="center"> 
	Leve felicidade para o mundo!
</h4>

<p align="center">	
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jonathanpauluze/happy">
	
  <a href="https://www.linkedin.com/in/jonathanpauluze/">
    <img alt="Made by jonathanpauluze" src="https://img.shields.io/badge/made%20by-jonathanpauluze-%2304D361">
  </a>
  
  <a href="https://github.com/jonathanpauluze/happy/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jonathanpauluze/happy">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

</p>
<p align="center">
  <a href="#information_source-o-que-e-a-next-level-week">Next Level Week</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#black_nib-design">Design</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-como-rodar-o-projeto">Como rodar o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :information_source: O que é a Next Level Week?

O NLW é um evento com muito código, desafios, networking e um único objetivo: te levar para o próximo nível.

Programação é uma disciplina prática. Ou seja, para dominar uma tecnologia não basta apenas conhecer a teoria ou ler a documentação: você precisa colocar a mão no código.

Através do método ensinado você vai aprender novas ferramentas, conhecer novas tecnologias e descobrir hacks que vão impulsionar a sua carreira.

Saiba mais sobre a NLW [clicando aqui](https://nextlevelweek.com).


## :computer: Projeto

O Happy teve como ideia base o dia das crianças (12/10). O objetivo é conectar pessoas a orfanatos para fazer visitas e tornar o dia das crianças mais especial.

<h1 align="center">
    <img alt="Landing page Happy" title="Landing page Happy" src="./.github/home.png" width="500px" />
</h1>


## :rocket: Tecnologias

Lista de tecnologias utilizadas no projeto:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)

## :black_nib: Design

Confira o design da aplicação no [Figma](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web/duplicate).

## :wrench: Como rodar o projeto

Você precisa ter instalado:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Faça um clone do projeto

```bash
$ git clone https://github.com/jonathanpauluze/happy
```

### Instale as dependências do backend e inicie o servidor
```bash
# Acesse a pasta do backend
$ cd happy/backend

# Instale as dependências
$ yarn install

# Rode as migrations
$ yarn typeorm migration:run

# Inicie o servidor (iniciará na porta 3333)
$ yarn dev
```

### Instale as dependências do frontend e rode o projeto

```bash
# Acesse a pasta do frontend
$ cd happy/web

# Instale as dependências
$ yarn install

# Rode o projeto (iniciará na porta 3000)
$ yarn start
```

### Instale as dependências do mobile e rode o projeto

```bash
# Acesse a pasta do frontend
$ cd happy/mobile

# Instale as dependências
$ yarn install

# Rode o projeto
$ yarn start

# Abrirá o Expo no navegador, basca selecionar LAN e escanear o QR code com o app do Expo
```

#### Ajustes para aplicação rodar no mobile

Na pasta `backend` será necessário alterar o caminho da url das imagens de `localhost` para o IP da sua máquina (mostrado na aplicação do Expo que abre no navegador). Exemplo:

<p align="center">
    <img alt="NextLevelWeek" title="Seu IP" src="./.github/expo-ip.png" width="250px" />
</p>

```ts
// happy/backend/src/views/images_view.ts

...
render(image: Image) {
  return {
    id: image.id,
    url: `http://192.168.15.6:3333/uploads/${image.path}`,
  }
},
...
```

Caso ocorra o erro "network response timed out" talvez seja necessário permitir o uso da porta do Expo. No Linux basta executar:
```bash
$ sudo ufw allow 19000/tcp
$ sudo ufw allow 19001/tcp
# Caso seu dispositivo utilize outra porta, permita a conexão com o mesmo comando
```

A resolução de outros erros podem ser encontradas [aqui](https://github.com/Rocketseat/expo-common-issues).

## :memo: Licença

Este projeto está sob a [licença do MIT](https://github.com/jonathanpauluze/happy/blob/main/LICENSE).

Feito com ♥ por Jonathan Pauluzes
