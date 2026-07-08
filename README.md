# Oxigênio - Central de Podcast

Aplicativo mobile acadêmico desenvolvido em React Native com Expo. A proposta é reunir, em uma interface única, episódios demonstrativos e links externos relacionados ao projeto de extensão **Oxigênio - Central de Podcast**, da Univali.

## Contexto acadêmico

O app foi criado como protótipo funcional para um trabalho acadêmico. A proposta se baseia em materiais públicos encontrados sobre o projeto Oxigênio, sem entrevista com os responsáveis e sem confirmação da situação atual do projeto.

## Problema ou oportunidade

Durante a análise dos canais públicos, foi identificada a oportunidade de reunir os conteúdos em uma única interface, facilitando a localização do acervo e o acesso às plataformas externas.

## Funcionalidades

- Tela inicial com apresentação do protótipo.
- Episódio demonstrativo em destaque.
- Lista de episódios com pesquisa local.
- Tela de detalhes do episódio.
- Abertura segura de links externos com `Linking`.
- Compartilhamento com `Share`.
- Mensagens de erro com `Alert`.
- Tela Sobre com metodologia e limitações.

## Tecnologias

- React Native
- Expo SDK 57
- JavaScript
- React Navigation
- Native Stack Navigator
- Dados locais em arquivos JavaScript

## Estrutura de pastas

```text
assets/
src/
  components/
    BotaoLink.js
    BotaoPrincipal.js
    CardEpisodio.js
  data/
    episodios.js
    links.js
  navigation/
    AppNavigator.js
  screens/
    DetalhesScreen.js
    EpisodiosScreen.js
    InicioScreen.js
    SobreScreen.js
  styles/
    cores.js
App.js
app.json
index.js
package.json
```

## Pré-requisitos

- Node.js compatível com Expo SDK 57.
- npm.
- Expo Go no celular ou emulador Android configurado.

## Instalação

Na pasta do projeto:

```bash
npm install
```

## Executar o projeto

```bash
npm start
```

ou:

```bash
npx expo start
```

## Abrir no Expo Go

1. Execute `npm start`.
2. Escaneie o QR Code exibido no terminal com o aplicativo Expo Go.
3. Aguarde o carregamento do app no celular.

## Abrir no emulador Android

1. Abra o emulador pelo Android Studio.
2. Execute:

```bash
npm run android
```

## Onde editar os episódios

Os episódios ficam em:

```text
src/data/episodios.js
```

Os dados atuais são demonstrativos. Substitua títulos, descrições, participantes, duração e links quando houver episódios oficiais confirmados.

## Onde editar os links

Os links externos ficam em:

```text
src/data/links.js
```

Spotify, Instagram, YouTube e página institucional foram centralizados para facilitar a troca por links oficiais atualizados.

## Limitações

- O aplicativo não usa back-end, banco de dados nem autenticação.
- Os episódios exibidos são demonstrativos.
- Não houve entrevista com responsáveis pelo projeto.
- A situação atual do projeto Oxigênio não foi confirmada.
- Alguns links podem precisar ser revisados e substituídos por canais oficiais atualizados.

## Aviso sobre dados demonstrativos

Nenhum episódio demonstrativo deve ser apresentado como episódio real. O objetivo é mostrar como o acervo poderia ser organizado dentro de um aplicativo simples em React Native.
